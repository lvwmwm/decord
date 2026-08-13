// Module ID: 13999
// Function ID: 14000
// Name: ReorderBadgesSheet
// Dependencies: [19, 21, 5437, 1236, 5436, 2]
// Exports: default

// Module 13999 (ReorderBadgesSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/badges/native/ReorderBadgesSheet.tsx");

export default function ReorderBadgesSheet() {
  let obj = { dismissAccessibilityLabel: null, header: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.opzPIQ);
  obj = { title: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.opzPIQ);
  obj[1] = jsx(require(5436) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  return jsx(require(5437) /* Background */.BottomSheet, { title: null });
};
