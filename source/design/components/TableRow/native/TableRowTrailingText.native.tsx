// Module ID: 5384
// Function ID: 5385
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4299, 2]
// Exports: TableRowTrailingText

// Module 5384 (TableRowTrailingText)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(require(4299) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
