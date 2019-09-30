# Curso de React con Richard Kaufman

## INTRODUCCIÓN - CLASE 1

- React cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

- React es **declarativo**, lo que quiere decir que se le indica qué _debe hacer_ pero no _cómo debe hacerse_, ahorrando de esta manera muchos pasos.

- **JSX** es HTML dentro de Javascript, esto se verá más adelante en detalle.

- React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

- Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

## Herramientas - clase 3

Chrome, React Developer Tools, VsCode y Prettier(Después de instalar el plugin buscar la opción `Format On save` y chulearla)

## Create-react-app - clase 4

Create-react-app es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo:

- Se debe instalar desde la línea de comando usando
  `npm install -g create-react-app`

- Una vez instalado se crea la carpeta del proyecto con
  `create-react-app -nombre del proyecto-`

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.

Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.

- Finalmente para correr la aplicación se usa el comando
  `npm run start`

Otras herramientas:

- Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
- Eslint: Lee el código y avisa de errores.

## Descargar repositorio

Clonar repositotio
Cambiar al commit para trabajar con la versión inicial

```
git checkout 17d2f344dd47554346f6ad88062db41888af8410
```

## ReactDOM.render - clase 6

- **React y ReactDOM** trabajarán en conjunto.
  - React como análogo a **createElement**
  - ReactDOM a **appendChild**
- **ReactDOM.render()** toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

- Siempre que escribas **JSX** es requisito importar **React**.

## JSX - clase 7

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es **React.createElement** pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

- El tipo de elemento que estamos creando
- Sus atributos o props
- y el children que es el contenido.
  Ejemplo:

```
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);
```

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, **0, null, undefined,'' entre otros, no se verán.**

## Componente - Clase 8

Los componentes en React son **bloques de construcción.**
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

**”Componente” vs “elemento**
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

**Identificación de componentes**
Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad.

- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

**Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.**

## Nuestro primer componente - clase 10

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método **render** que define cuál será el resultado que aparecerá en pantalla.
- El _source_ de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

ntroducción a React Router
Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.

https://platzi.com/comentario/603941/

npm i react-router-dom


````
// import { clearTimeout } from "timers";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    // console.log('1. constructor()');

    this.state = {
      loading: true,
      error:null,
      data: undefined,
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

```


Como poner una apikey de forma privada: https://platzi.com/comentario/759989/

