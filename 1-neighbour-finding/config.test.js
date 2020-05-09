module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    roots: ['<rootDir>'],
    testRegex: '((\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [
        'ts',
        'js',
        'json',
        'node',
    ]
};
