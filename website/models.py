from django.db import models

# Create your models here.

class FormTemplate(models.Model):
    name = models.CharField(max_length=63)
    email = models.CharField(max_length=63)
    tel = models.CharField(max_length=14)
    msg = models.CharField(max_length=1023)
    file = models.FileField(upload_to='files/')

    def __str__(self):
        return self.name + ' ' + self.email + ' ' + self.tel + ' ' + self.msg
