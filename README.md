# Proyecto Api de File Metadata Microservice

Este proyecto es un requisito para obtener la certificación de Back End Development and APIs en Free Code Camp. El objetivo del proyecto es crear un microservicio que devuelva metadatos de archivos.

## Instrucciones:

### Para ejecutar el proyecto, siga los siguientes pasos:

Instale las dependencias ejecutando el siguiente comando:
```
npm install
```

Inicie el servidor ejecutando el siguiente comando:
```
npm start
```

El servidor se iniciará en el puerto 3000. Puede acceder al microservicio en la siguiente URL:
```
http://localhost:3000/api/metadata
```

## Uso:

Para obtener metadatos de un archivo, envíe una solicitud POST a la ruta `/api/fileanalyse`. El cuerpo de la solicitud debe contener un objeto JSON con el siguiente formato:

```json
{
    "upfile": "filename.txt"
}
```

La respuesta será un objeto JSON con la siguiente información:

```json
{
  "filename": "filename.txt",
  "type": "text/plain",
  "size": 100,
}
```