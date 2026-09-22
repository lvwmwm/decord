// Module ID: 11264
// Function ID: 11265
// Name: useBurstToggleCoachmark
// Dependencies: [32, 19, 17, 1371, 1954, 21, 1943, 4636, 576, 9503, 504, 4294, 7491, 1114, 11265, 2]
// Exports: default

// Module 11264 (useBurstToggleCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import SuperReactionIcon from "SuperReactionIcon" /* 9503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function EducationCoachmarkImg() {
  const obj = { style: closure_10().upsellImageContainer, children: jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" }) };
  return <View style={closure_10().upsellImageContainer}>{jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" })}</View>;
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_9 = fn(1943).DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
const createStyles = fn(4636);
let obj2 = { upsellImageContainer: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
obj2.upsellImageContainer = size;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [UserStore];
  const stateFromStores = first(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(504);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj2 = first(4294);
  const tmp5 = _slicedToArray(first(7491).useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = noop.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.nyYohm);
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.UNKNOWN);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_8(closure_1_11, {});
    };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.ORK94p);
    obj.visible = first === closure_9;
    return obj;
  }, items3);
  const tmpResult = first(7491);
  const coachmark = first(11265).useCoachmark(targetRef, memo);
  return tmp5[1];
};
