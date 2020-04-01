"""moneymon URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from wallet.views import WalletViewSet

router = DefaultRouter(trailing_slash=False)

router.register(r"wallet", WalletViewSet, r"wallet")

urlpatterns = [
    url('admin/', admin.site.urls),
    # url(r'^auth/', include('djoser.urls')),
    # url(r'^auth/', include('djoser.urls.authtoken')),
    # url(r'^auth/', include('djoser.urls.jwt')),
    url(r'^api/', include(router.urls)),
]
