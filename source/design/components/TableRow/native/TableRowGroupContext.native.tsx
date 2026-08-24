// Module ID: 6321
// Function ID: 6322
// Name: context
// Dependencies: [19, 2]

// Module 6321 (context)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext(false);
const result = set.fileFinishedImporting("design/components/TableRow/native/TableRowGroupContext.native.tsx");

export const TableRowGroupContext = context;
