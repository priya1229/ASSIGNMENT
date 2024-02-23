from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Post, Comment, Like

def home(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'dashboard/home.html', {'posts': posts})

def post_detail(request, post_id):
    post = Post.objects.get(pk=post_id)
    comments = Comment.objects.filter(post=post)
    return render(request, 'dashboard/post_detail.html', {'post': post, 'comments': comments})

