// Module ID: 11695
// Function ID: 11696
// Name: ListSelectionItem
// Dependencies: [19, 21, 5374, 2]
// Exports: default

// Module 11695 (ListSelectionItem)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: null };
  obj[2] = <Icon size={24} />;
  return jsx(require(5374) /* TableRowInner */.TableRow, { onPress, label: message, icon: null });
};
