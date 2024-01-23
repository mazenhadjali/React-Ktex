export const expressions = {
    "Custom_text": {
        text: '\\text{custom text}',
        espace: '\\,'
    },
    "Derivatives": {
        derivative: '\\frac{d}{dx}',
        partial_derivative: '\\frac{\\partial}{\\partial x}',
    },
    "Dots": {
        ldots: '\\ldots',
        cdots: '\\cdots',
    },
    "Accents": {
        hat: '\\hat{a}',
        vec: '\\vec{a}',
    },
    "Delimiters": {
        parenthesis: ' ( x ) ',
        brackets: ' [ x ] ',
        braces: '\\ { x \\} ',
    },
    "Matrices_and_Arrays": {
        matrix2x2: '\\begin{matrix}  a & b \\\\ c & d  \\end{matrix}',
        matrix3x3: '\\begin{matrix}  a & b & c\\\\ d & e & f\\\\ g & h & i  \\end{matrix}',
    },
    "Large_Operators": {
        sum: ' \\sum ',
        integral: ' \\int_{ a }^{ b } \\cos( x ) \\, dx ',
        product: ' \\prod ',
    },
    "Structures": {
        fraction: '\\frac{ a }{ b } ',
        power: ' a ^ (b) ',
        subscript: ' a _ b ',
        sqrt: ' \\sqrt{ x } ',
    },
    "Functions": {
        sin: ' \\sin( x ) ',
        cos: ' \\cos( x ) ',
        tan: ' \\tan( x ) ',
        log: ' \\log( x ) ',
        ln: ' \\ln( x ) ',
    },
    "Relations": {
        equals: ' = ',
        neq: ' \\neq ',
        lt: ' < ',
        gt: ' > ',
        leq: ' \\leq ',
        geq: ' \\geq ',
    },
    "Greek_Letters": {
        alpha: ' \\alpha ',
        beta: ' \\beta ',
        gamma: ' \\gamma ',
    },
    "Operations": {
        plus: ' + ',
        minus: ' - ',
        times: ' \\times ',
        divide: ' \\div ',
    },
    "Advanced_Operations": {
        pm: ' \\pm ',
        mp: ' \\mp ',
    }
}