// Why do we need let and const in JS. Compare it with the problems in ES5

/*
    1.   If a variable is declared as var in the global scope, and then another var with same variable name is decalred 
        in the funcion scope, both will be accessing the global scoped variable and result in undesired outputs.
        This can be rectified with the help of let.

        Example:
            var greeter = "Hello";
            var count = 4;
            if (count > 3) {
            var greeter = "Hello world";
            }
            console.log(greeter); //"Hello world"


    2. var does not allow for declaring immutable variables. This can be rectified with the help of const.

*/
