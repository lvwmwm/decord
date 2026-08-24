// Module ID: 573
// Function ID: 574
// Name: bind
// Dependencies: [554]

// Module 573 (bind)
import bind from "bind" /* 554 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
