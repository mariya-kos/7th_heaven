from django import forms

class ContactForm(forms.Form):
    name = forms.EmailField(required=True)
    email = forms.CharField(required=True)
    theme = forms.CharField(required=True)
    text = forms.CharField(widget=forms.Textarea)