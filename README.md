# Classroom
  Classroom is a virtual learning environment that allows the creation of classes, tasks and warnings in a simple way. It enables automatic and sharing of tests through a bank of questions offered.
### Pré Requisitos
* Python 3.x
* Flask
* gunicorn
* MongoDB


### Clonando repositório
```
git clone https://github.com/euodeionomedeusuario/classroom.git
```
### Entrando no repositório
```
cd /classroom
```
### Criando ambiente virtual
```
virtualenv nome_do_ambiente -p python3
```
### Ativando ambiente
```
source nome_do_ambiente/bin/activate
```
### Baixando dependências
```
pip3 install -r requirements.txt
```
### Executando app
```
gunicorn run:app
```
## License
[MIT License](https://github.com/euodeionomedeusuario/classroom/blob/master/LICENSE) 2018 (c) Eduardo Silva Vieira
