from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from form_handler.forms import ContactForm

def email(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['form_theme']
            from_email = form.cleaned_data['form_email']
            message = form.cleaned_data['form_name'] + '\n'
            message += form.cleaned_data['form_text']
            try:
                send_mail(subject, message, from_email, ['admin@example.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('thanks')
    return render(request, "form_handler/email.html", {'form': form})

def thanks(request):
    return HttpResponse('Thank you for your message.')