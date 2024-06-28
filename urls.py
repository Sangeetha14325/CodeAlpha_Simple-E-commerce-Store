
from django.urls import path
from .views import product_list, add_to_cart

urlpatterns = [
    path('products', product_list, name='product_list'),
    path('add-to-cart/<int:product_id>', add_to_cart, name='add_to_cart'),
]
        