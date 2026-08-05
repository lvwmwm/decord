// Module ID: 5310
// Function ID: 5311
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4251, 2]
// Exports: TableRowTrailingText

// Module 5310 (TableRowTrailingText)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(require(4251) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
