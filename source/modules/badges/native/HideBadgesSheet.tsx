// Module ID: 13998
// Function ID: 13999
// Name: HideBadgesSheet
// Dependencies: [19, 21, 5436, 1236, 5435, 2]
// Exports: default

// Module 13998 (HideBadgesSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/badges/native/HideBadgesSheet.tsx");

export default function HideBadgesSheet() {
  let obj = { dismissAccessibilityLabel: null, header: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["9iIKHh"]);
  obj = { title: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["9iIKHh"]);
  obj[1] = jsx(require(5435) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  return jsx(require(5436) /* Background */.BottomSheet, { title: null });
};
