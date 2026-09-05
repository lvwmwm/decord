// Module ID: 1315
// Function ID: 1316
// Name: bind
// Dependencies: [1296]

// Module 1315 (bind)
import bind from "bind" /* 1296 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
