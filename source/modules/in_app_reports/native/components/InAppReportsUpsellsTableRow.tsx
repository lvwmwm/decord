// Module ID: 12216
// Function ID: 93775
// Name: InAppReportsUpsellsTableRow
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 12216 (InAppReportsUpsellsTableRow)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUpsellsTableRow.tsx");

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
  return jsx(arg1(dependencyMap[2]).TableRow, obj);
};
