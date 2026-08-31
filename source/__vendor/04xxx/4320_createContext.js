// Module ID: 4320
// Function ID: 4321
// Name: createContext
// Dependencies: [19]

// Module 4320 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
