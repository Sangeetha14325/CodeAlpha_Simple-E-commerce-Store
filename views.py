
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product, CartItem

def product_list(request):
    products = Product.objects.all()
    return JsonResponse(list(products.values()), safe=False)

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart_item, created = CartItem.objects.get_or_create(product=product)
    if not created:
        cart_item.quantity += 1
        cart_item.save()
    cart_items = CartItem.objects.all()
    return JsonResponse(list(cart_items.values('product__name', 'quantity', 'product__price')), safe=False)
# store/views.py

from django.shortcuts import render

def home(request):
    return render(request, 'store/index.html')

        