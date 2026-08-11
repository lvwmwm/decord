// Module ID: 8658
// Function ID: 8659
// Name: EducationCoachmarkImg
// Dependencies: [32, 19, 17, 1922, 1388, 21, 1377, 4303, 712, 7703, 589, 3966, 6024, 1236, 8659, 2]
// Exports: default

// Module 8658 (EducationCoachmarkImg)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function EducationCoachmarkImg() {
  let obj = { style: createCacheKey().upsellImageContainer, children: null };
  obj = { color: null, size: "md" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[1] = jsx(require(7703) /* SuperReactionIcon */.SuperReactionIcon, { color: null, size: "md" });
  return <View color={null} size="md" />;
}
let closure_9 = require("DismissibleContent").DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
createCacheKey = { upsellImageContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [mergeGuildAvatar];
  const stateFromStores = first(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(589);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  let tmpResult = tmp(6024);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  const importDefault = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = React.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = first(outer1_2[13]).intl;
    obj[0] = intl.string(first(outer1_2[13]).t.nyYohm);
    obj[1] = function onDismiss() {
      callback(outer1_7.UNKNOWN);
    };
    obj[3] = function renderImgComponent() {
      return callback2(closure_11, {});
    };
    const intl2 = first(outer1_2[13]).intl;
    obj[4] = intl2.string(first(outer1_2[13]).t.ORK94p);
    obj[5] = first === outer1_9;
    return obj;
  }, items3);
  tmpResult = tmp(8659);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp5[1];
};
