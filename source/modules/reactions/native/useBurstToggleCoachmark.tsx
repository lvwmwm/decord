// Module ID: 9341
// Function ID: 72992
// Name: EducationCoachmarkImg
// Dependencies: [57, 31, 27, 1849, 1345, 33, 1334, 4130, 689, 8009, 566, 3776, 5802, 1212, 8563, 2]
// Exports: default

// Module 9341 (EducationCoachmarkImg)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function EducationCoachmarkImg() {
  let obj = { style: _createForOfIteratorHelperLoose().upsellImageContainer };
  obj = { color: importDefault(689).colors.WHITE, size: "md" };
  obj.children = jsx(require(8009) /* SuperReactionIcon */.SuperReactionIcon, { color: importDefault(689).colors.WHITE, size: "md" });
  return <View color={importDefault(689).colors.WHITE} size="md" />;
}
let closure_9 = require("DismissibleContent").DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.upsellImageContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = first(566).useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj = first(566);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj2 = first(3776);
  const tmp3 = callback(first(5802).useSelectedDismissibleContent(items2), 2);
  first = tmp3[0];
  const importDefault = tmp5;
  const items3 = [first, tmp3[1]];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(outer1_2[13]).intl;
    obj.description = intl.string(first(outer1_2[13]).t.nyYohm);
    obj.onDismiss = function onDismiss() {
      outer1_1(outer2_7.UNKNOWN);
    };
    obj.position = "bottom";
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_8(outer2_11, {});
    };
    const intl2 = first(outer1_2[13]).intl;
    obj.title = intl2.string(first(outer1_2[13]).t.ORK94p);
    obj.visible = first === outer1_9;
    return obj;
  }, items3);
  const obj3 = first(5802);
  const coachmark = first(8563).useCoachmark(targetRef, memo);
  return tmp3[1];
};
