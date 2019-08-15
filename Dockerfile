FROM python:3
ENV PYTHONUNBUFFERED 1
# Criar a pasta code, onde ficaram os arquivos da aplicação
RUN mkdir /code
# Define o diretório de trabalho (lugar onde serão copiados os arquivos, e criadas novas pastas)
WORKDIR /code
# Copia o arquivo requirements do host para o container
COPY requirements.txt /code/
# Executa o comando no bash para instalar os pacote do pip
RUN pip install -r requirements.txt
# Copia os arquivos do diretorio do host para o container
COPY . /code/