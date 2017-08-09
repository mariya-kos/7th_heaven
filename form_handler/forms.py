from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    theme = forms.CharField(required=True)
    text = forms.CharField(widget=forms.Textarea)