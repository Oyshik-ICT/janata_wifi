from django.urls import path, include
from .views import load_data
from .views import StockViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'stock', StockViewset)

urlpatterns = [
    path('', include(router.urls))
]