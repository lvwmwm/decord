// Module ID: 1318
// Function ID: 1319
// Dependencies: [1299]

// Module 1318
import bind from "bind" /* 1299 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
