// Module ID: 6300
// Function ID: 6301
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4734, 2]
// Exports: TableRowTrailingText

// Module 6300 (TableRowTrailingText)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(require(4734) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
