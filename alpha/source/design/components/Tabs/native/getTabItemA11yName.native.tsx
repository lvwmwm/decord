// Module ID: 12513
// Function ID: 12514
// Name: getTabItemA11yName
// Dependencies: [1113, 2075, 2]
// Exports: getTabItemA11yName

// Module 12513 (getTabItemA11yName)
import intl4 from "intl" /* 1113 */;
import _modDef2075 from "module_2075" /* 2075 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Tabs/native/getTabItemA11yName.native.tsx");

export function getTabItemA11yName(label, count, indicatorDot) {
  if (null == indicatorDot) {
    let formatToPlainStringResult = label;
    if (null != count) {
      const intl3 = intl4.intl;
      const obj2 = { label, count };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef2075.qbmavE, obj2);
    }
    return formatToPlainStringResult;
  } else {
    let formatToPlainStringResult1;
    const accessibilityLabel = indicatorDot.accessibilityLabel;
    if (null != count) {
      const intl2 = intl4.intl;
      const obj3 = { label, count, status: accessibilityLabel };
      formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2075.paONe3, obj3);
    } else {
      const intl = intl4.intl;
      const obj = { label, status: accessibilityLabel };
      formatToPlainStringResult1 = intl.formatToPlainString(_modDef2075.gmsmxI, obj);
    }
    return formatToPlainStringResult1;
  }
}
