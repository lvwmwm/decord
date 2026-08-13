// Module ID: 11755
// Function ID: 11756
// Name: ListSelectionItem
// Dependencies: [19, 21, 5414, 2]
// Exports: default

// Module 11755 (ListSelectionItem)
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
  return jsx(require(5414) /* TableRowInner */.TableRow, { onPress, label: message, icon: null });
};
