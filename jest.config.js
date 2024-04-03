module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  