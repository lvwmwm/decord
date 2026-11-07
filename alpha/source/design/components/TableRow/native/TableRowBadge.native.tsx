// Module ID: 7052
// Function ID: 7053
// Name: TableRowBadge
// Dependencies: [5303, 7050, 2]
// Exports: getTableRowAccessibilityLabel, resolveTableRowBadgeProps

// Module 7052 (TableRowBadge)
import native from "native" /* 5303 */;
import size from "module_2" /* 2 */;

let tmp;
const Badge_Badge = tmp(7050);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowBadge.native.tsx");

export function resolveTableRowBadgeProps(badge) {
  let tmp;
  if (typeof badge !== "object") {
    tmp = { type: badge };
    const obj = { type: badge };
  } else {
    tmp = badge;
  }
  return tmp;
}
export function getTableRowAccessibilityLabel(label, subLabel, badge) {
  let combined;
  const obj = native;
  const nodeText = obj.getNodeText(label);
  const obj2 = native;
  const nodeText1 = obj2.getNodeText(subLabel);
  if (null == badge) {
    let str2 = nodeText1;
    if (nodeText1 == null) {
      str2 = "";
    }
    const _HermesInternal = HermesInternal;
    combined = "" + nodeText + ", " + str2;
  } else {
    let tmp6;
    const items = [nodeText, , ];
    const getBadgeText = Badge_Badge.getBadgeText;
    Badge_Badge;
    if (typeof badge !== "object") {
      tmp6 = { type: badge };
      const obj3 = { type: badge };
    } else {
      tmp6 = badge;
    }
    items[1] = getBadgeText(tmp6.type);
    items[2] = nodeText1;
    const found = items.filter((item) => null != item && "" !== item);
    combined = found.join(", ");
  }
  return combined;
}
