// Module ID: 13621
// Function ID: 13622
// Name: getTabItemA11yName
// Dependencies: [1112, 2224, 2]
// Exports: getTabItemA11yName

// Module 13621 (getTabItemA11yName)
import intl4 from "intl" /* 1112 */;
import _modDef2224 from "module_2224" /* 2224 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Tabs/native/getTabItemA11yName.native.tsx");

export function getTabItemA11yName(label, count, indicatorDot) {
  if (null == indicatorDot) {
    let formatToPlainStringResult = label;
    if (null != count) {
      const intl3 = intl4.intl;
      const obj2 = { label, count };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef2224.qbmavE, obj2);
    }
    return formatToPlainStringResult;
  } else {
    let formatToPlainStringResult1;
    const accessibilityLabel = indicatorDot.accessibilityLabel;
    if (null != count) {
      const intl2 = intl4.intl;
      const obj3 = { label, count, status: accessibilityLabel };
      formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2224.paONe3, obj3);
    } else {
      const intl = intl4.intl;
      const obj = { label, status: accessibilityLabel };
      formatToPlainStringResult1 = intl.formatToPlainString(_modDef2224.gmsmxI, obj);
    }
    return formatToPlainStringResult1;
  }
}
