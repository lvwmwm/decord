// Module ID: 5552
// Function ID: 5553
// Name: context
// Dependencies: [19, 2]

// Module 5552 (context)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext(false);
const result = set.fileFinishedImporting("design/components/TableRow/native/TableRowGroupContext.native.tsx");

export const TableRowGroupContext = context;
