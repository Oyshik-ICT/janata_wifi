from rest_framework import serializers
from .models import Stock

class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        fields = ['stock_id', 'date', 'trade_code', 'high', 'low', 'open', 'close', 'volume']