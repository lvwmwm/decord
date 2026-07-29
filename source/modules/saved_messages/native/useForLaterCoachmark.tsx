// Module ID: 15272
// Function ID: 15273
// Name: CoachmarkImg
// Dependencies: [32, 19, 17, 1369, 21, 1358, 4189, 6204, 9556, 8441, 1236, 8430, 2]
// Exports: default

// Module 15272 (CoachmarkImg)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function CoachmarkImg() {
  const obj = { source: null, style: null };
  obj[0] = importDefault(6204);
  obj[1] = callback2().imageContainer;
  return <Image source={null} style={null} />;
}
let closure_8 = require("DismissibleContent").DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createCacheKey.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useConfig({ location: "forLaterCoachmark" }).enabled) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = importDefault(9556);
  const tmp3 = callback(first(8441).useSelectedDismissibleContent(items1, undefined, true), 2);
  first = tmp3[0];
  importDefault = tmp5;
  const items2 = [tmp3[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(outer1_2[10]).intl;
    obj[0] = intl.string(first(outer1_2[10]).t.qPbFK2);
    const intl2 = first(outer1_2[10]).intl;
    obj[1] = intl2.string(first(outer1_2[10]).t.URrJq1);
    obj[3] = first === outer1_8;
    obj[4] = function onDismiss() {
      callback(outer1_6.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items2);
  const obj2 = first(8441);
  const coachmark = first(8430).useCoachmark(targetRef, memo);
  return tmp3[1];
};
