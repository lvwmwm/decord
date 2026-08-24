// Module ID: 7002
// Function ID: 7003
// Name: createContext
// Dependencies: [19]

// Module 7002 (createContext)
import noop from "noop" /* 19 */;

const createContext = noop.createContext;
const context = createContext(null);

export const BottomSheetGestureHandlersContext = context;
export const BottomSheetDraggableContext = createContext(null);
