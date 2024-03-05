export const testEnvironment = 'node';
export const testMatch = ['**/*.spec.js'];
export const transform = {
	'^.+\\.jsx?$': 'babel-jest', // Utilizar Babel para transpilar archivos JS/JSX
};
  