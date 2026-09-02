// Module ID: 570
// Function ID: 571
// Name: bind
// Dependencies: [551]

// Module 570 (bind)
import bind from "bind" /* 551 */;

const call2 = bind.call;

export default typeof call2 === "unknown" ? bind(hasOwnProperty) : call2(call, hasOwnProperty);
