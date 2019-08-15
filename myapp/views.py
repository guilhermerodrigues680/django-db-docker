from django.shortcuts import render


def index(request):
    if request.method == 'POST':
        dados = request.POST
        data = dados.get('data', None)

        print(data)
    else:
        pass

    return render(request, 'index.html', {})