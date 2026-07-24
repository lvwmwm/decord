// Module ID: 8782
// Function ID: 69352
// Name: BadgeWithTooltip
// Dependencies: [57, 31, 27, 33, 4130, 689, 4066, 1212, 8609, 3976, 7486, 4126, 8744, 5449, 2]
// Exports: default

// Module 8782 (BadgeWithTooltip)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { top: 14, bottom: 14, left: 14, right: 14 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.pillBase = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pillDark = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.pillLight = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.text = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  const tmp2 = _createForOfIteratorHelperLoose();
  const ref = callback.useRef(null);
  const tmp4 = stringResult(callback.useState(false), 2);
  const first = tmp4[0];
  const dependencyMap = tmp4[1];
  const intl = tooltipPosition(1212).intl;
  stringResult = intl.string(tooltipPosition(1212).t["L9B+ZZ"]);
  callback = callback.useCallback(() => {
    callback(false);
  }, []);
  const items = [tooltipPosition, stringResult, first, callback];
  const memo = callback.useMemo(() => ({ position: tooltipPosition, label: _slicedToArray, visible: first, onPress: callback }), items);
  let obj = tooltipPosition(8609);
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = callback.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_2(false);
      }, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = callback.useCallback(() => {
    callback((arg0) => !arg0);
  }, []);
  let obj1 = tooltipPosition(3976);
  const isThemeDarkResult = obj1.isThemeDark(first(4066)());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = tooltipPosition(1212).intl;
  const stringResult1 = intl2.string(tooltipPosition(1212).t["1m6qcO"]);
  obj = { ref, onPress: callback1, hitSlop: closure_9, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: items2 };
  items2 = [tmp2.pillBase, isThemeDarkResult ? tmp2.pillDark : tmp2.pillLight];
  obj = { size: "xs", color: str };
  const items3 = [callback(tooltipPosition(7486).NitroWheelIcon, obj), ];
  obj1 = { variant: "text-sm/bold", color: str, style: tmp2.text, children: stringResult1 };
  items3[1] = callback(tooltipPosition(4126).Text, obj1);
  obj.children = items3;
  return callback2(closure_5, obj);
}
function StaticBadge() {
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const isThemeDarkResult = obj.isThemeDark(importDefault(4066)());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t["1m6qcO"]);
  obj = { accessibilityLabel: stringResult, style: items };
  items = [tmp2.pillBase, isThemeDarkResult ? tmp2.pillDark : tmp2.pillLight];
  obj = { size: "xs", color: str };
  const items1 = [callback(require(7486) /* NitroWheelIcon */.NitroWheelIcon, obj), ];
  const obj1 = { variant: "text-sm/bold", color: str, style: tmp2.text, children: stringResult };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(closure_6, obj);
}
const obj3 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, textTransform: "uppercase" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

export default function _default(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  if (str === undefined) {
    str = "top";
  }
  let flag = tooltipPosition.inheritLayerScope;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tooltipPosition.disablePressable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = require(8744) /* isUserPaidTier2 */;
  if (!obj.useIsProfileFramesEarlyAccessPhase(tooltipPosition.location)) {
    return null;
  } else if (flag2) {
    let tmpResult = tmp(StaticBadge, {});
  } else if (flag) {
    obj = { tooltipPosition: str };
    tmpResult = tmp(BadgeWithTooltip, obj);
  } else {
    obj = { zIndex: 3 };
    const obj1 = { tooltipPosition: str };
    obj.children = tmp(BadgeWithTooltip, obj1);
    tmpResult = tmp(require(5449) /* Layer */.LayerScope, obj);
  }
};
