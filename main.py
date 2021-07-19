from notebook.notebookapp import NotebookApp
from config               import notebook_app

if __name__ == '__main__':
  NotebookApp.port         = notebook_app.port
  NotebookApp.notebook_dir = notebook_app.root_dir
  NotebookApp.token        = notebook_app.auth_token
  NotebookApp.open_browser = False
  NotebookApp.launch_instance()
