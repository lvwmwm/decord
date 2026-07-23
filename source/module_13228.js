// Module ID: 13228
// Function ID: 101650
// Dependencies: [13229, 13294]

// Module 13228
import module_13229 from "module_13229";

let obj = { target: "Object", stat: true, arity: 2 };
obj.forced = Object.assign !== require("assign");
obj = { assign: require("assign") };
module_13229(obj, obj);
