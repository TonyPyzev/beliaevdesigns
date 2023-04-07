from django.shortcuts import render
from django.conf import settings
from django.contrib import messages
from django.core.mail import EmailMessage
from django.http import HttpResponseRedirect



def index(request):

    if request.method == 'POST':
        name = request.POST['inputName']
        email = request.POST['inputEmail']
        tel = request.POST['inputTel']
        msg = request.POST['inputMsg']
        files = request.FILES.getlist('attach')

        message = "Ім'я: " + name + '\nПошта: ' + email + '\nТелефон: ' + tel + '\nПовідомлення: ' + msg
        mail = EmailMessage('Нове повідомлення з сайту', message, settings.EMAIL_HOST_USER, ['beliaev.ilia95@gmail.com'])
        
        for f in files:
            mail.attach(f.name, f.read(), f.content_type)
        
        mail.send()
        
        messages.success(request, 'Success!')
        return HttpResponseRedirect('/')

    return render(request, 'index.html')
    
def set_lang(request):

   '''Set 'django_language' in request.session'''
   url = request.META['PATH_INFO'].split('/')[1]
   request.session['django_language'] = url
   return request













    
    



