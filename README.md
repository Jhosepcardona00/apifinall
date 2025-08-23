# API Sistema de Gestión de Taller Mecánico

## Descripción del Proyecto

Este proyecto es una API REST desarrollada en Node.js para la gestión integral de un taller mecánico. El sistema permite administrar clientes, vehículos, citas, mecánicos, servicios, repuestos, ventas y compras, proporcionando una solución completa para la operación diaria de un taller automotriz.

## Propósito

Facilitar la gestión administrativa y operativa de talleres mecánicos mediante una API robusta que permita:
- Gestión de clientes y sus vehículos
- Programación y seguimiento de citas
- Control de inventario de repuestos
- Registro de servicios y ventas
- Administración de mecánicos y horarios
- Generación de reportes y estadísticas

## Funcionalidades Principales

### Módulos Implementados:
- **Autenticación**: Login, registro y recuperación de contraseñas
- **Gestión de Usuarios**: CRUD completo con roles y permisos
- **Clientes**: Registro y administración de información de clientes
- **Vehículos**: Gestión de vehículos asociados a clientes
- **Citas**: Programación y seguimiento de citas de servicio
- **Mecánicos**: Administración de personal técnico
- **Servicios**: Catálogo de servicios ofrecidos
- **Repuestos**: Control de inventario y categorización
- **Ventas**: Registro de ventas de servicios y repuestos
- **Compras**: Gestión de compras a proveedores
- **Reportes**: Dashboard con estadísticas del negocio

## Tecnologías Utilizadas

- **Backend**: Node.js con Express.js
- **Base de Datos**: MySQL
- **Autenticación**: JSON Web Tokens (JWT)
- **Validación**: Express Validator
- **Encriptación**: bcryptjs
- **Email**: Nodemailer
- **Testing**: Jest
- **Documentación**: JSDoc

## Requisitos Previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- MySQL (versión 8.0 o superior)
- Git

## Instrucciones de Instalación y Despliegue

### 1. Clonar el Repositorio
\`\`\`bash
git clone https://github.com/tu-usuario/apifinall.git
cd apifinall
\`\`\`

### 2. Instalar Dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

\`\`\`env
# Configuración de Base de Datos
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=bkycg5znhcwzibmiolok

# Configuración del Servidor
PORT=3000

# Configuración JWT
JWT_SECRET=tu_clave_secreta_jwt

# Configuración de Email
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
\`\`\`

### 4. Configurar Base de Datos
Ejecuta el script SQL proporcionado para crear la base de datos:

\`\`\`bash
# Conectarse a MySQL
mysql -u tu_usuario -p

# Ejecutar el script de base de datos
mysql -u tu_usuario -p < database/schema.sql
\`\`\`

### 5. Ejecutar el Proyecto

#### Modo Desarrollo:
\`\`\`bash
npm run dev
\`\`\`

#### Modo Producción:
\`\`\`bash
npm start
\`\`\`

El servidor se ejecutará en `http://localhost:3000`

## Instrucciones de Ejecución de Pruebas Unitarias

### Ejecutar Todas las Pruebas:
\`\`\`bash
npm test
\`\`\`

### Ejecutar Pruebas con Cobertura:
\`\`\`bash
npm run test:coverage
\`\`\`

### Ejecutar Pruebas en Modo Watch:
\`\`\`bash
npm run test:watch
\`\`\`

### Ejecutar Pruebas Específicas:
\`\`\`bash
# Ejecutar pruebas de un modelo específico
npm test -- --testNamePattern="CitaModel"

# Ejecutar pruebas de un archivo específico
npm test __tests__/models/citaModel.test.js
\`\`\`

## Clases con Pruebas Unitarias

Se han implementado pruebas unitarias para las siguientes 5 clases del modelo de negocio:

1. **CitaModel** (`__tests__/models/citaModel.test.js`)
   - Pruebas para gestión de citas
   - Validación de disponibilidad de mecánicos
   - Cambio de estados de citas

2. **MecanicoModel** (`__tests__/models/mecanicoModel.test.js`)
   - CRUD completo de mecánicos
   - Validación de datos de contacto
   - Gestión de estados activo/inactivo

3. **ServicioModel** (`__tests__/models/servicioModel.test.js`)
   - Gestión de catálogo de servicios
   - Validación de precios
   - Control de estados de servicios

4. **VehiculoModel** (`__tests__/models/vehiculoModel.test.js`)
   - Registro de vehículos por cliente
   - Validación de placas
   - Asociación con marcas y referencias

5. **ProveedorModel** (`__tests__/models/proveedorModel.test.js`)
   - Gestión de proveedores
   - Validación de NIT único
   - Control de información empresarial

Cada clase de prueba incluye:
- Casos de éxito para operaciones CRUD
- Manejo de errores y validaciones
- Mocking de la base de datos
- Cobertura de métodos específicos del negocio

## Estructura del Proyecto

\`\`\`
apifinall/
├── src/
│   ├── controllers/          # Controladores de la API
│   ├── models/              # Modelos de datos
│   ├── routes/              # Definición de rutas
│   ├── middleware/          # Middlewares personalizados
│   ├── config/              # Configuraciones (DB, email, etc.)
│   └── app.js              # Configuración principal de Express
├── __tests__/               # Pruebas unitarias
│   ├── models/             # Pruebas de modelos
│   ├── utils/              # Utilidades para testing
│   └── setup.js            # Configuración de Jest
├── database/                # Scripts de base de datos
├── package.json            # Dependencias y scripts
├── jest.config.js          # Configuración de Jest
└── README.md               # Este archivo
\`\`\`

## Scripts Disponibles

\`\`\`json
{
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
\`\`\`

## API Endpoints Principales

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/forgot-password` - Recuperar contraseña

### Gestión de Datos
- `GET/POST/PUT/DELETE /api/clientes` - Gestión de clientes
- `GET/POST/PUT/DELETE /api/vehiculos` - Gestión de vehículos
- `GET/POST/PUT/DELETE /api/citas` - Gestión de citas
- `GET/POST/PUT/DELETE /api/mecanicos` - Gestión de mecánicos
- `GET/POST/PUT/DELETE /api/servicios` - Gestión de servicios
- `GET/POST/PUT/DELETE /api/repuestos` - Gestión de repuestos
- `GET/POST/PUT/DELETE /api/ventas` - Gestión de ventas

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## Contacto

Desarrollado para el programa de Análisis y Desarrollo de Software - SENA
Instructor: Mauricio José Rivero Padilla

## Notas Adicionales

- El proyecto está diseñado exclusivamente como backend/API
- Todas las respuestas son en formato JSON
- Se implementa autenticación JWT para endpoints protegidos
- La base de datos incluye triggers y procedimientos para auditoría
- Se mantiene historial completo de ventas y citas
