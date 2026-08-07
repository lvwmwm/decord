// Module ID: 5383
// Function ID: 5384
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4298, 2]
// Exports: TableRowTrailingText

// Module 5383 (TableRowTrailingText)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(require(4298) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
