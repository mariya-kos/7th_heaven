from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from form_handler.forms import ContactForm
from django.core.mail import EmailMultiAlternatives

def email(request):

    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            theme = form.cleaned_data['theme']
            email = form.cleaned_data['email']
            text = form.cleaned_data['name'] + '\n'
            text += form.cleaned_data['text']
            try:
                send_mail(theme, text, email, ['mariyakosacheva@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('thanks')
        else:
            print("Form is not valid!")
    return render(request, "form_handler/email.html", {'form': form})

def thanks(request):
    return HttpResponse('<section class="thanks_content">Thank you for your message.</section><p><a href="../../ru/contacts">Вернуться на страницу!</a></p>')