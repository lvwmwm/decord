// Module ID: 5423
// Function ID: 5424
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4340, 2]
// Exports: TableRowTrailingText

// Module 5423 (TableRowTrailingText)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(require(4340) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
