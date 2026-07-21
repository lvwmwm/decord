// Module ID: 10045
// Function ID: 77640
// Name: ListSelectionItem
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 10045 (ListSelectionItem)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: <Icon size={24} /> };
  return jsx(arg1(dependencyMap[2]).TableRow, obj);
};
