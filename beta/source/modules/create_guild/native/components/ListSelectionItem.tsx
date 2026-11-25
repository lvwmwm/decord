// Module ID: 13181
// Function ID: 13182
// Name: ListSelectionItem
// Dependencies: [19, 21, 7045, 2]
// Exports: default

// Module 13181 (ListSelectionItem)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 7045 */;
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
