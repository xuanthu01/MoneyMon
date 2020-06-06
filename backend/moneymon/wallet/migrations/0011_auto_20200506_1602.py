# Generated by Django 3.0.4 on 2020-05-06 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0010_auto_20200506_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wallet',
            name='wallet_type',
            field=models.CharField(choices=[('BASIC', 'Tiền mặt'), ('DIGITAL', 'Ví điện tử'), ('CARD', 'Thẻ ngân hàng'), ('CREDIT', 'Thẻ ghi nợ')], default='BASIC', max_length=255),
        ),
    ]