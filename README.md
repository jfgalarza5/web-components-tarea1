# Web Component: Tarjeta de Perfil

Cree un componente sencillo que permite agregar una tarjeta de perfil a tu html que incluye una foto, nombre y descripcion de la persona, ademas de el color de fondo de la tarjeta.

## Caracteristicas
- Tarjeta contenedora de 200px.
- Color de fondo personalizable en hex.
- Imagen de perfil circular de 100px.
- Nombre en negrita.
- Descripcion en gris #555 y 10px de fontsize.

## Atributos
|Atributo   |Descripcion                    |Tipo    |
|:---------:|:-----------------------------:|:------:|
|`src`      | Url de la imagen de perfil.   |String  |
|`tema`     | Hex del color de fondo.       |String  |

## Slots
|Nombre       |Descripcion                           |Tipo           |
|:-----------:|:------------------------------------:|:-------------:|
|`nombre`     | Nombre de la persona en el perfil.   |Etiqueta html  |
|`descripcion`| Descripcion de la persona            |Etiqueta html  |

## Ejemplo de uso

Clona este repositorio o simplemente descarga el [tarjetaPerfil.js](tarjetaPerfil.js) y ponlo en tu proyecto, luego solo tienes que llamar al modulo mediante: `<<script src="tarjetaPerfil.js" type="module"></script>>` al final de tu body, luego donde quieras poner la tarjeta usas la etiqueta `<tarjeta-perfil>`.
- Si quieres ver el ejemplo completo en html te dejo el [index.html](index.html)
