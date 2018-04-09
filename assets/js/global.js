
import binder from "./libs/binder";
import s from "./modules/s";
import h from "./modules/h";
import f from "./modules/f";
import c from "./modules/c";



let args = [
    {
        "html": [s, h, f, c]
    },
    // true
];

binder(...args);
