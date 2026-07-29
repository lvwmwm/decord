// Module ID: 409
// Function ID: 410
// Name: context
// Dependencies: [19]

// Module 409 (context)
import "noop";

const context = require("noop").createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
