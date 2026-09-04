// Module ID: 4353
// Function ID: 4354
// Name: createContext
// Dependencies: [19]

// Module 4353 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const PortalStateContext = context;
export const PortalDispatchContext = createContext(null);
