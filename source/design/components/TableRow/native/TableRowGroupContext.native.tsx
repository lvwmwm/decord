// Module ID: 5547
// Function ID: 5548
// Name: context
// Dependencies: [19, 2]

// Module 5547 (context)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext(false);
const result = set.fileFinishedImporting("design/components/TableRow/native/TableRowGroupContext.native.tsx");

export const TableRowGroupContext = context;
