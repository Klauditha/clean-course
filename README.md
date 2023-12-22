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