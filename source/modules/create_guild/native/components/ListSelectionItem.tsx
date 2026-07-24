// Module ID: 10086
// Function ID: 77887
// Name: ListSelectionItem
// Dependencies: [31, 33, 5165, 2]
// Exports: default

// Module 10086 (ListSelectionItem)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: <Icon size={24} /> };
  return jsx(require(5165) /* TableRowInner */.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
