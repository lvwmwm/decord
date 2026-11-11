// Module ID: 14612
// Function ID: 14613
// Name: ListSelectionItem
// Dependencies: [19, 21, 7379, 2]
// Exports: default

// Module 14612 (ListSelectionItem)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 7379 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const TableRow = TableRow2.TableRow;
  return <TableRow onPress={onPress} label={message} icon={null} />;
};
