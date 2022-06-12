from flask import Flask, render_template
from werkzeug.exceptions import HTTPException

app = Flask('')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.errorhandler(HTTPException)
def page_not_found(e):
    return render_template('error.html'), 404

app.run(host='0.0.0.0',port=8080)
