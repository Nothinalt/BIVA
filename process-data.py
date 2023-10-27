from flask import Flask, request, render_template, send_file, send_from_directory
import os

app = Flask(__name__, static_url_path='/static', static_folder='static')

# Route for the root path ("/")
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# Route for serving the favicon.ico file
@app.route('/favicon.ico')
def favicon():
    favicon_path = os.path.join(app.root_path, 'favicon.ico')
    if os.path.exists(favicon_path):
        return send_file(favicon_path, mimetype='image/vnd.microsoft.icon')
    else:
        return "Favicon not found."

# Route for processing form data
@app.route('/process_data', methods=['POST'])
def process_data():
    if request.method == 'POST':
        full_name = request.form['full-name']
        email = request.form['email']
        gender = request.form['gender']
        date_of_birth = request.form['dob']

        # Process the form data as needed

        return "Form submitted successfully."

@app.route('/create_id')
def create_id():
    return render_template('CreateID.html')

if __name__ == '__main__':
    app.run(debug=True)
