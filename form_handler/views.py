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
            theme = 'Тема сообщения:' + form.cleaned_data['theme']
            email = form.cleaned_data['email']
            text = 'Имя: ' + form.cleaned_data['name'] + '\n'
            text += 'Teкст сообщения: ' + form.cleaned_data['text']
            try:
                send_mail(theme, text, email, ['mariyakosacheva@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('thanks')
        else:
            print("Form is not valid!")
    return render(request, "form_handler/email.html", {'form': form})

def thanks(request):
    style = '<style>body{font:font-family:Verdana,sans-serif;font-size:14px;color:#4c444f;}a{color:#5b7033;text-decoration:none;}a:hover{color:#8b2525;text-decoration:underline;}</style>'
    content = '<p>Ваше сообщение отправлено!</p>'
    link_back = '<p><a href="../../ru/">Вернуться на главную!</a></p>'
    return HttpResponse(f'{style}<section>{content}{link_back}</section>')