// Module ID: 11971
// Function ID: 92578
// Name: UserProfileActivityTimebar
// Dependencies: [31, 27, 653, 33, 4130, 689, 1324, 11972, 4126, 2]
// Exports: default

// Module 11971 (UserProfileActivityTimebar)
import "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 4, marginBottom: 4 };
_createForOfIteratorHelperLoose.bar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progress = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: "100%", minWidth: 4 };
_createForOfIteratorHelperLoose.textRow = { flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: "100%", minWidth: 4 };
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  let duration;
  let elapsed;
  let end;
  let percentage;
  let start;
  let style;
  ({ start, end, style } = arg0);
  const tmp = importDefault(1324)("UserProfileActivityTimebar");
  const tmp2 = _createForOfIteratorHelperLoose();
  let tmp4;
  ({ elapsed, duration, percentage } = importDefault(11972)({ start, end }));
  if (!tmp) {
    let obj = { fontFamily: Fonts.CODE_NORMAL };
    tmp4 = obj;
  }
  obj = { style };
  obj = { style: tmp2.bar, children: callback(View, { style: items }) };
  items = [tmp2.progress, { width: `${100 * percentage}%` }];
  const items1 = [callback(View, obj), ];
  const obj2 = { style: tmp2.textRow };
  const obj3 = { variant: "text-xs/normal", style: tmp4, tabularNumbers: tmp };
  let str;
  if (tmp) {
    str = "text-subtle";
  }
  obj3.color = str;
  const obj1 = { width: `${100 * percentage}%` };
  const tmp3 = importDefault(11972)({ start, end });
  const tmp8 = callback;
  const tmp9 = tmp;
  obj3.children = require(11972) /* extractTimeComponents */.formatTime(elapsed);
  const items2 = [tmp8(require(4126) /* Text */.Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", style: tmp4, tabularNumbers: tmp };
  let str2;
  if (tmp) {
    str2 = "text-subtle";
  }
  obj4.color = str2;
  const obj7 = require(11972) /* extractTimeComponents */;
  const tmp10 = callback;
  const tmp11 = tmp;
  obj4.children = require(11972) /* extractTimeComponents */.formatTime(duration);
  items2[1] = tmp10(require(4126) /* Text */.Text, obj4);
  obj2.children = items2;
  items1[1] = closure_6(View, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
