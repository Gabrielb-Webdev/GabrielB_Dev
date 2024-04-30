from PIL import Image
import os

def convert_to_webp(input_path, output_path):
    # Abrir la imagen
    image = Image.open(input_path)
    
    # Guardar la imagen en formato WebP
    image.save(output_path, 'WEBP')

# Directorio de entrada y salida
input_directory = "img"  # Directorio de entrada
output_directory = "sources"  # Directorio de salida

# Crear directorio de salida si no existe
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Obtener lista de archivos en el directorio de entrada
input_files = os.listdir(input_directory)

# Iterar sobre cada archivo en el directorio de entrada
for file_name in input_files:
    # Comprobar si es un archivo de imagen PNG o JPG
    if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
        # Construir rutas de entrada y salida
        input_path = os.path.join(input_directory, file_name)
        output_path = os.path.join(output_directory, os.path.splitext(file_name)[0] + ".webp")
        
        # Convertir a WebP
        convert_to_webp(input_path, output_path)
        print(f"Converted {file_name} to WebP.")

print("Conversion completed.")
