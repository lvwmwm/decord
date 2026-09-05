// Module ID: 5606
// Function ID: 5607
// Name: context
// Dependencies: [19, 2]

// Module 5606 (context)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext(false);
const result = set.fileFinishedImporting("design/components/TableRow/native/TableRowGroupContext.native.tsx");

export const TableRowGroupContext = context;
