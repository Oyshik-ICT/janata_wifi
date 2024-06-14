from django.shortcuts import render
from django.http import HttpResponse
from .models import Stock
from rest_framework import viewsets
from .serializers import StockSerializer
import pandas as pd

def load_data(request):
    data = pd.read_csv('stock_market_data.csv')
    exit_obj = Stock.objects.all()
    if len(exit_obj) == 0:
        ins = []
        for index, row in data.iterrows():
            cnt = 0
            print(index, type(row['volume']))
            for i in exit_obj:
                if i.date == row['date'] and i.trade_code == row['trade_code'] and i.high == row['high'] and i.low == row['low'] and i.open == row['open'] and i.close == row['close'] and i.volume == row['volume']:
                    cnt = 1
                    break
            if cnt != 1:
                obj = Stock(
                date  =row['date'],
                trade_code = row['trade_code'],
                high = row['high'],
                low = row['low'],
                open = row['open'],
                close = row['close'],
                volume = row['volume']
            )
                ins.append(obj)

        Stock.objects.bulk_create(ins)
    return HttpResponse('<h1>All good</h1>')


class StockViewset(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    print(len(queryset))
    serializer_class = StockSerializer