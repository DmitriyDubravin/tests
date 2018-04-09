
export default function h() {

    // [[Scope]] = 'Global Object'
    // LexicalEnvironment = {x: undefined, fun: function}

    var x = 1; // LexicalEnvironment = {x: 1, fun: function}



    function fun() {

        // [[Scope]] = Parent Lexical Environment
        // LexicalEnvironment = {y: undefined, myFunc: 'function'}

        var y = 2; // LexicalEnvironment = {y: 2, myFunc: 'function'}

        myFunc(y)

        function myFunc(z) {

            // [[Scope]] = Parent Lexical Environment
            // LexicalEnvironment = {z: 2}

            console.log();
        }

    }

    fun()

/*

LexicalEnvironment - inner object, containing all arguments, vars & functions
[[Scope]] - system inner property - link to external LexicalEnvironment

1. Initialization (creation phase) - LE created with filled arguments, empty vars and functions declarations
2. execution phase - assigning vars, functions expressions, execute functions
3. clear - LE removed, memory cleared



logic questions:
- when [[scope]] is created
- why vars 'hoisted' as undefined
- is parent le is prototype of child le-

*/

}