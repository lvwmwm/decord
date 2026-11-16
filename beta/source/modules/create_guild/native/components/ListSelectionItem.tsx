// Module ID: 14721
// Function ID: 14722
// Name: ListSelectionItem
// Dependencies: [19, 21, 7443, 2]
// Exports: default

// Module 14721 (ListSelectionItem)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 7443 */;
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
