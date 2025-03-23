# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

¿Cómo desplegar en github pages?
https://www.youtube.com/watch?v=Bk28snjHr7c

Plan de arquitectura

planning-poker-app/
│── public/                 # Archivos estáticos (index.html, favicon, etc.)
│── src/
│   ├── api/                # Servicios para llamadas a APIs (ej. WebSockets, Firebase, etc.)
│   ├── assets/             # Imágenes, íconos y estilos globales
│   ├── components/         # Componentes reutilizables (Button, Card, Modal, etc.)
│   ├── features/           # Módulos funcionales separados por dominio
│   │   ├── room/           # Lógica y componentes relacionados con las salas de poker
│   │   ├── voting/         # Lógica y componentes para la votación de cartas
│   │   ├── user/           # Lógica relacionada con los usuarios
│   ├── hooks/              # Hooks personalizados (useSocket, useVoting, etc.)
│   ├── layouts/            # Diseños generales (Header, Sidebar, MainLayout, etc.)
│   ├── pages/              # Páginas de la app (Home, Room, Results, etc.)
│   ├── providers/          # Context API / Zustand / Redux para manejo de estado global
│   ├── routes/             # Configuración de rutas con React Router
│   ├── utils/              # Funciones utilitarias (helpers, formatters, etc.)
│   ├── App.tsx             # Componente raíz de la app
│   ├── main.tsx            # Punto de entrada (si usas Vite) o index.tsx (CRA)
│── tests/                  # Pruebas unitarias e integración
│── .env                    # Variables de entorno
│── package.json            # Dependencias y scripts de la app
│── tsconfig.json           # Configuración de TypeScript (si usas TS)
│── vite.config.ts          # Configuración de Vite (o webpack.config.js si usas Webpack)
