# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-08-27 19:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('seqr', '0066_auto_20190827_1948'),
    ]

    operations = [
        migrations.RenameField(
            model_name='varianttag',
            old_name='saved_variant',
            new_name='saved_variants',
        ),
    ]