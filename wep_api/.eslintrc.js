module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "off",
        "no-magic-numbers": ["warn"],
        "no-unused-vars": ["error"],
        "no-undef": ["error"],
        "no-unreachable": ["error"],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never", {
                "beforeStatementContinuationChars": "always"
            }
        ]
    }
}
