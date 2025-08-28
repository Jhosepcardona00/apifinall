module.exports = {
  // Entorno de ejecución
  testEnvironment: "node",

  // Archivos de configuración que se ejecutan antes de los tests
  setupFilesAfterEnv: ["<rootDir>/_tests_/setup.js"],

  // Patrones de archivos de test
  testMatch: ["*/_tests_//.js", "*/?(.)+(spec|test).js"],

  // Directorios a ignorar
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/dist/"],

  // Cobertura de código
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],

  // Archivos a incluir en la cobertura
  collectCoverageFrom: ["src/*/.js", "!src/config/*", "!src/server.js", "!/node_modules/*"],

  // Umbrales de cobertura
  
  // Limpiar mocks automáticamente
  clearMocks: true,

  // Mostrar cada test individual
  verbose: true,
}