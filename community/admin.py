from django.contrib import admin
from community.models import Posting

# Register your models here.
@admin.register(Posting)

class PostingAdmin(admin.ModelAdmin):
    posting_list = ('id', 'title', 'upload_time', 'content');