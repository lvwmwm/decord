// Module ID: 10099
// Function ID: 78199
// Name: NewBadge
// Dependencies: [57, 31, 27, 1345, 33, 1334, 4130, 689, 4126, 1212, 5802, 8563, 2]
// Exports: ConversationCoachmark

// Module 10099 (NewBadge)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function NewBadge() {
  let obj = { style: _createForOfIteratorHelperLoose().badge };
  obj = { variant: "text-sm/bold", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.c2GSIl);
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-sm/bold", color: "text-default" });
  return <View variant="text-sm/bold" color="text-default" />;
}
const TOPICAL_NAVIGATION_HEADER_COACHMARK = require("DismissibleContent").DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.coachmarkWrapper = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let children;
  let isLast;
  ({ children, isLast } = arg0);
  const ref = React.useRef(null);
  let obj = first(5802);
  const tmp3 = callback(obj.useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  const dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(tmp5[9]).intl;
    obj.title = intl.string(first(tmp5[9]).t.UcQjDe);
    const intl2 = first(tmp5[9]).intl;
    obj.description = intl2.string(first(tmp5[9]).t.QeJIbA);
    obj.position = "bottom";
    obj.visible = first === outer1_7;
    obj.onDismiss = function onDismiss() {
      outer1_1(outer2_5.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_6(outer2_10, {});
    };
    return obj;
  }, items);
  const tmp = _createForOfIteratorHelperLoose();
  const coachmark = first(8563).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  obj = {};
  let coachmarkWrapper;
  callback = React.useCallback(() => {
    tmp5(outer1_5.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  obj.style = coachmarkWrapper;
  obj = { ref, children: children(callback) };
  obj.children = <View ref={ref}>{children(callback)}</View>;
  return <View ref={ref}>{children(callback)}</View>;
};
