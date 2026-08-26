// Module ID: 4316
// Function ID: 4317
// Name: createContext
// Dependencies: [19]

// Module 4316 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
