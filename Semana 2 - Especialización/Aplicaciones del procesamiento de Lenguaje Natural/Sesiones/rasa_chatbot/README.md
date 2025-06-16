# 🐍 Instalación y ejecución de un bot RASA

## 🔍 Ver la versión de Python

```bash
python --version
```

## 📦 Instalar Python 3.8 en Debian/Ubuntu

```bash
sudo apt install python3.8 python3.8-venv
```

## 🛠️ Crear un entorno virtual

```bash
python3.8 -m venv rasa-env
```

## 🔄 Activar el entorno virtual

- En Linux/macOS:
  ```bash
  source rasa-env/bin/activate
  ```

- En Windows:
  ```bash
  .\rasa-env\Scripts\activate
  ```

## 🤖 Instalar RASA

```bash
pip install rasa==3.6.2
```

## 🧠 Entrenar el bot

```bash
rasa train
```

## 💬 Interactuar con el bot desde terminal

```bash
rasa shell
```

## 🌐 Ver el bot desde el navegador

1. Iniciar el servidor web para mostrar el HTML:

    ```bash
    python3 -m http.server 8080
    ```

2. Iniciar el servidor del bot con API activada:

    ```bash
    rasa run --enable-api --cors "*" --port 5005
    ```

3. Abrir en el navegador:
    ```
    http://localhost:8080
    ```

---

> 📝 Asegúrate de tener los archivos `index.html` y el entorno configurado correctamente.