/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        "axios": "axios/dist/node/axios.cjs",
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
};