from django.contrib import admin
from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'email',
        'status',
        'source',
        'created_at'
    )

    list_filter = ('status', 'source')
    search_fields = ('name', 'email')