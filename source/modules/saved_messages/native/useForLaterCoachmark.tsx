// Module ID: 15129
// Function ID: 115208
// Name: CoachmarkImg
// Dependencies: [57, 31, 27, 1345, 33, 1334, 4130, 7954, 9535, 5802, 1212, 8563, 2]
// Exports: default

// Module 15129 (CoachmarkImg)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function CoachmarkImg() {
  const obj = { source: importDefault(7954), style: callback2().imageContainer };
  return <Image source={importDefault(7954)} style={callback2().imageContainer} />;
}
let closure_8 = require("DismissibleContent").DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useConfig({ location: "forLaterCoachmark" }).enabled) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = importDefault(9535);
  const tmp2 = callback(first(5802).useSelectedDismissibleContent(items1, undefined, true), 2);
  first = tmp2[0];
  importDefault = tmp4;
  const items2 = [tmp2[1], first];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(outer1_2[10]).intl;
    obj.title = intl.string(first(outer1_2[10]).t.qPbFK2);
    const intl2 = first(outer1_2[10]).intl;
    obj.description = intl2.string(first(outer1_2[10]).t.URrJq1);
    obj.position = "bottom";
    obj.visible = first === outer1_8;
    obj.onDismiss = function onDismiss() {
      outer1_1(outer2_6.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_7(outer2_10, {});
    };
    return obj;
  }, items2);
  const obj2 = first(5802);
  const coachmark = first(8563).useCoachmark(targetRef, memo);
  return tmp2[1];
};
