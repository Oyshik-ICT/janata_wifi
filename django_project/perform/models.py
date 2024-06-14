from django.db import models

class Stock(models.Model):
    stock_id = models.BigAutoField(primary_key=True)
    date = models.CharField(max_length=20)
    trade_code = models.CharField(max_length=20)
    high = models.CharField(max_length=20)
    low = models.CharField(max_length=20)
    open = models.CharField(max_length=20)
    close = models.CharField(max_length=20)
    volume = models.CharField(max_length=20)
