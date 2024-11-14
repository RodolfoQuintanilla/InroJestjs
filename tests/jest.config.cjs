module.exports = {
  // ... tu configuración actual de Jest
  transform: {
    "^.+\\.js$": "babel-jest",
    // Opcionalmente, agrega otras extensiones que uses (ej: .ts)
  },
  moduleFileExtensions: ['js', 'jsx'], // Especifica las extensiones de módulos ES
};