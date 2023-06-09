# Generated by Django 4.1.7 on 2023-04-07 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormTemplate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=63)),
                ('email', models.CharField(max_length=63)),
                ('tel', models.CharField(max_length=14)),
                ('msg', models.CharField(max_length=1023)),
                ('file', models.FileField(upload_to='files/')),
            ],
        ),
    ]
