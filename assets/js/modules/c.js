
export default function c() {


    // sum(3)(4)
    // var s = new Function(); => // {}

    // ex 1

    // function sum(x) {
    //     return function(y) {
    //         console.log(x + y);
    //     }
    // }
    // var plus2 = sum(2);
    // var plus7 = sum(7);
    // plus2(3);
    // plus7(7);
    // sum(10)(10);



    // ex 2

    // var myMsg = 'Clicked';
    // $('.button').on('click', function(e) {
    //     e.preventDefault();
    //     alert(msg);
    // });

    // function test(e, msg) {
    //     e.preventDefault();
    //     alert(msg);
    // }
    // $('.button').on('click', test(e, myMsg));

    // function showMsg(msg) {
    //     return function(e) {
    //         e.preventDefault();
    //         alert(msg);
    //     }
    // }
    // $('.button').on('click', showMsg(myMsg));

    // ex 3

    // function counter() {
    //     var c = 0;
    //     return function() {
    //         console.log(c++);
    //     }
    // }

    // var counter1 = counter();
    // var counter2 = counter();
    // counter1();
    // counter1();
    // counter1();
    // counter2();
    // counter2();

    // ex 4 (property)

    // function pf(x) {
    //     return x
    // }
    // pf.y = 2;
    // console.log(pf.y)


    // ex 5

    function counter() {
        var current = 1
        return {
            get: function() {
                console.log(current++);
            },
            set: function(val) {
                current = val
            },
            reset: function() {
                current = 1
            }
        }
    }

    var myCounter = counter();
    myCounter.get();
    myCounter.get();
    myCounter.get();
    myCounter.set(10);
    myCounter.get();
    myCounter.get();
    myCounter.get();
    myCounter.reset();
    myCounter.get();
    myCounter.get();
    myCounter.get();

    // ex 6

    // function counter() {
    //     var current = 1
    //     function c() {
    //         console.log(current++);
    //     }
    //     c.set = function(val) {current = val}
    //     c.reset = function() {current = 1}
    //     return c;
    // }

    // var myCounter1 = counter();
    // myCounter1();
    // myCounter1();
    // myCounter1();
    // myCounter1.set(10);
    // myCounter1();
    // myCounter1();
    // myCounter1();
    // myCounter1.reset();
    // myCounter1();
    // myCounter1();
    // myCounter1();


}