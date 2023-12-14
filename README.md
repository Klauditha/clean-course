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
- 