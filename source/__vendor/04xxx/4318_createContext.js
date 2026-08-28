// Module ID: 4318
// Function ID: 4319
// Name: createContext
// Dependencies: [19]

// Module 4318 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
