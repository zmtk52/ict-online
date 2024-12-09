from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Простой "база данных" для хранения паролей (в реальном проекте используйте БД)
users = {'user1': 'password1', 'user2': 'password2'}
@app.route('/')
def index():
    return 'Добро пожаловать на главную страницу!'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        print('POST request received')  # Добавьте эту строку
        username = request.form['username']
        password = request.form['password']

        # Проверка наличия пользователя и соответствия пароля
        if username in users and users[username] == password:
            print('Successful login')  # Добавьте эту строку
            return redirect(url_for('index'))
        else:
            print('Login failed')  # Добавьте эту строку
            return render_template('login.html', message='Неверное имя пользователя или пароль')

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
