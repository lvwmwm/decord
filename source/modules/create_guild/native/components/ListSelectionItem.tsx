// Module ID: 10046
// Function ID: 77653
// Name: ListSelectionItem
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 10046 (ListSelectionItem)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: <Icon size={24} /> };
  return jsx(arg1(dependencyMap[2]).TableRow, obj);
};
