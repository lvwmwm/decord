// Module ID: 15124
// Function ID: 15125
// Name: InAppReportsUpsellsTableRow
// Dependencies: [19, 21, 6969, 2]
// Exports: default

// Module 15124 (InAppReportsUpsellsTableRow)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 6969 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default function InAppReportsUpsellsTableRow(description) {
  let disabledTitle;
  let icon;
  let onPress;
  let title;
  let tmp4;
  let variant;
  ({ title, disabledTitle, variant } = description);
  description = description.description;
  if (variant === undefined) {
    variant = "default";
  }
  const disabled = description.disabled;
  ({ onPress, icon } = description);
  let tmp2 = title;
  const TableRow = TableRow2.TableRow;
  const tmp = jsx;
  if (disabled) {
    tmp2 = title;
    if (null != disabledTitle) {
      tmp2 = disabledTitle;
    }
  }
  const obj = { label: tmp2, subLabel: tmp4, onPress, icon, disabled, variant };
  tmp4 = null;
  if (!disabled) {
    tmp4 = description;
  }
  return tmp(TableRow, obj);
};
