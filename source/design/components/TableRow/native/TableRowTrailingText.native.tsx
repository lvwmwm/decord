// Module ID: 5174
// Function ID: 45006
// Name: TableRowTrailingText
// Dependencies: [31, 33, 4126, 2]
// Exports: TableRowTrailingText

// Module 5174 (TableRowTrailingText)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(text) {
  const obj = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text.text };
  return jsx(require(4126) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text.text });
};
