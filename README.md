# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

## Estructura recomendada de una clase 

### Comenzar con lista de propiedades

1. Propiedades estáticas.
2. Propiedades públicas al último.

### Métodos

1. Empezando por los constructores estáticos.
2. Luego el constructor
3. Seguidamente métodos estáticos
4. Métodos privados después
5. Resto de métodos de instancia ordenados de mayor a menor importancia.
6. Getters y Setters al final.

## Acrónimo STUPID 

6 Code Smells que debemos evitar:

1. Singleton: Patrón singleton.
2. Tight Coupling: Alto acoplamiento
3. Untestability: Código no probable (unit test).
4. Premature optimization: Optimizaciones prematuras.
5. Indescriptive Naming: Nombres poco descriptivos.
6. Duplication: Duplicidad de código, no aplicar el principio DRY.

### Patrón Singleton

PROS
- Garantiza una única instancia de la clase a lo largo de toda la aplicación.

DESVENTAJAS
- Vive en el contexto global.
- Puede ser modificado por cualquiera y en cualquier momento.
- No es rastreable.
- Dificil de testear debido a su ubicación.
  
### Alto acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión.

DESVENTAJAS
- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos.
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
- Un módulo en particular puede ser más dífícil de reutilizar y/o probar porque se debe incluir módulos dependientes.

POSIBLES SOLUCIONES
- "A" tiene un atributo que se refiere a "B".
- "A" llama a los servicios de un objeto "B".
- "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o parámetro).
- "A" es una subclase de (o implementa) la clase "B".

### Cohesión

Lo ideal es tener bajo acoplamiento y buena cohesión
- Se refiere a lo que la clase (o módulo) puede hacer.
- La baja cohesión significaria que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
- Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

### Acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión.
- Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.
- En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.
- En alto acomplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidad, hacer un cambio podría requerir una renovación completa del sistema.

## Code Smells adicionales

### Código no probable

Dificilmente testeable
- Código con alto acomplamiento.
- Código con muchas dependencias no inyectadas.
- Dependencias en el contexto global (Tipo Singleton)

### Optimizaciones prematuras

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.
No debemos anticiparnos a requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

### Nombres poco descriptivos

- Nombre de variables mal nombradas.
- Nombre de clases genéricas.
- Nombres de funciones mal nombradas.
- Ser muy especifico o demasiado genérico.

### Duplicidad de código

No aplicar el principio DRY

Duplicidad Real
- Código es idéntico y cumple la misma función.
- Un cambio implicaria actualizar todo el código idéntico en varios lugares.
- Incrementa posibilidades de error humano al olviodar una parte para actualizar.
- Mayor cantidad de pruebas innecesarias.

Duplicidad Accidental
- Código luce similar pero cumple funciones distintas.
- Cuando hay un cambio, solo hay que modificar un sólo lugar.
- Se puede trabajar con parámetros u optimizaciones.

## Otros olores honorificos

- refactoring.guru

### Inflación

Método con demasiadas lineas de código.
Para resolver se debe tratar de dividir en pequeños métodos con tareas especificas.

Clases super grandes.
Separar en subClases

### Obseción Primitiva

Usar campos primitivos que con el tiempo se hace más compleja.
Solución agrupar todas esas variables en un modulo o clase, etc.

### Lista larga de parámetros

Más de 3 o 4 argumentos en un método.
Validar si todos los parametros necesarios.
Se pasa pasar un objeto que contenga todos los parametros.

## Acopladores

### Feature Envy

Un método accede más a los datos de otros métodos más que a sus propios datos.

### Intimidad Inapropiada

Cuando una clase utiliza campos y métodos internos de otra clase.
Las clases deben saber lo menos posible de otras clases.
Simplica el soporte y la optimización del código.

### Cadenas de mensajes

Funciones que llaman a muchas entre si: De A a B , de B a C y asi sucesivamente.
Canal complejo de comunicación.
Al evitar esto se reduce la cantidad de código y las dependencias.

### The Middle Man

Cuando la única acción de una clase es delegar la función a otra clase.


## Principios SOLID

Nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

- Single Responsability: Responsabilidad única.
- Open and Close: Abierto y cerrado.
- Liskov Substitution: Sustitución de Liskov.
- Interface segregation: Segregación de interfaz.
- Dependency inversion: Inversión de dependencias.

### SRP - Principio de Responsabilidad única

"Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo"

Tener una unica responsabilidad !== Hacer una única cosa

### SRP - Detectar violaciones

- Nombres de clases o módulos demasiado genéricos.
- Cambios en el código suelen afectar la clase o módulo.
- La clase involucra varias capas.
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de líneas de código.

### OCP: Principio de abierto y cerrado

Depende mucho del contexto.

Establece que las entidades de software (clases, módulos, métodos, etc) deben estar abiertas para extensión, pero cerradas para la modificación.

Se puede lograr de muchas maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

### Remover dependencia

    ```npm remove axios```

### Detectar violaciones de OPC

- Cuando los cambios afectan nuestra clase o módulo constantemente.
- Cuando una clase o módulo afecta muchas capas ( Presentación, almacenamiento, etc).

### Principio de Substitución de Liskov

"Las funciones que utilicen punterios o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo".

"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema"

### Principio de Segregación de Interfaz

"Los clientes no deberian estar obligados a depender de interfaces que no utilicen".

Aplica para lenguejes fuertemente tipados.

### Detectar violaciones de Segreción de Interfaz

- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad unica y substitución de Liskov.