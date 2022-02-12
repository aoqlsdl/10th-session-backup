from distutils.command.upload import upload
from turtle import title
from typing import List
from urllib import request

from django.shortcuts import render, get_object_or_404
from django.utils import timezone

# Create your views here.
# from django.views.generic import ListView, DetailView
from community.models import Posting

def List(request):
    posts = Posting.objects.filter(upload_time__lte = timezone.now()).order_by('upload_time')
    return render(request, 'list.html', {'posts':posts})

def detail(request, pk):
    post = get_object_or_404(Posting, pk=pk)
    return render(request, 'detail.html', {'post':post})