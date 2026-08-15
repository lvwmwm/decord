// Module ID: 11491
// Function ID: 11492
// Name: ListSelectionItem
// Dependencies: [19, 21, 6291, 2]
// Exports: default

// Module 11491 (ListSelectionItem)
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
  return jsx(require(6291) /* TableRowInner */.TableRow, { onPress, label: message, icon: null });
};
