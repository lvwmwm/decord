// Module ID: 10039
// Function ID: 77611
// Name: ListSelectionItem
// Dependencies: []
// Exports: default

// Module 10039 (ListSelectionItem)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: <Icon size={24} /> };
  return jsx(arg1(dependencyMap[2]).TableRow, obj);
};
