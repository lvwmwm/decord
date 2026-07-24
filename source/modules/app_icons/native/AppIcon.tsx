// Module ID: 14408
// Function ID: 110121
// Name: AppIcon
// Dependencies: [31, 27, 7444, 33, 4130, 689, 4066, 3976, 2]
// Exports: default

// Module 14408 (AppIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { getIconById } from "getDefaultIcon";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { overflow: "hidden", borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { resizeMode: "contain", height: "100%", width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("getDefaultIcon").fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(4066)();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  obj = { style: items, children: <closure_3 {...obj1} /> };
  items = [tmp.container, , ];
  obj = { width: num, height: num, borderWidth: num2 };
  items[1] = obj;
  items[2] = size.style;
  const tmp3 = getIconById(size.id);
  return <closure_4 width={num} height={num} borderWidth={num2} />;
};
