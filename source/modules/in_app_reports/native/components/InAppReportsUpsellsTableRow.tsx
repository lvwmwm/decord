// Module ID: 12339
// Function ID: 96020
// Name: InAppReportsUpsellsTableRow
// Dependencies: [31, 33, 5164, 2]
// Exports: default

// Module 12339 (InAppReportsUpsellsTableRow)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

export default function InAppReportsUpsellsTableRow(disabled) {
  let disabledTitle;
  let icon;
  let onPress;
  let title;
  let variant;
  ({ title, disabledTitle, variant } = disabled);
  if (variant === undefined) {
    variant = "default";
  }
  disabled = disabled.disabled;
  ({ onPress, icon } = disabled);
  const obj = {};
  let tmp2 = title;
  if (disabled) {
    tmp2 = title;
    if (null != disabledTitle) {
      tmp2 = disabledTitle;
    }
  }
  obj.label = tmp2;
  let description = null;
  if (!disabled) {
    description = disabled.description;
  }
  obj.subLabel = description;
  obj.onPress = onPress;
  obj.icon = icon;
  obj.disabled = disabled;
  obj.variant = variant;
  return jsx(require(5164) /* TableRowInner */.TableRow, {});
};
