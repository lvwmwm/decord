// Module ID: 10055
// Function ID: 77636
// Name: ListSelectionItem
// Dependencies: [31, 33, 5198, 2]
// Exports: default

// Module 10055 (ListSelectionItem)
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
  return jsx(require(5198) /* TableRowInner */.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
