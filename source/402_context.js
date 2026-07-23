// Module ID: 402
// Function ID: 5790
// Name: context
// Dependencies: [31]

// Module 402 (context)
import "result";

const context = require("result").createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
