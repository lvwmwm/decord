// Module ID: 12833
// Function ID: 12834
// Name: ConversationCoachmark
// Dependencies: [32, 19, 17, 2042, 21, 2029, 4836, 576, 4832, 1115, 6806, 10589, 2]
// Exports: ConversationCoachmark

// Module 12833 (ConversationCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import Text_Text from "Text/Text" /* 4832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let obj3;
function NewBadge() {
  let intl;
  ({ variant: "text-sm/bold", color: "text-default", children: intl.string(intl3.t.c2GSIl) });
  const Text = Text_Text.Text;
  intl = intl3.intl;
  return <View style={closure_9().badge}>{null}</View>;
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = dismissible_content.DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
let createStyles = createStyles_mod;
let obj = { badge: obj2, coachmarkWrapper: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = { marginRight: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let children;
  let closure_1;
  let isLast;
  let first;
  ({ children, isLast } = arg0);
  const tmp = closure_9();
  const ref = react.useRef(null);
  let obj = first(6806);
  const tmp3 = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.UcQjDe),
      description: intl2.string(intl3.t.QeJIbA),
      position: "bottom",
      visible: first === TOPICAL_NAVIGATION_HEADER_COACHMARK,
      onDismiss() {
        closure_1_1(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_6(closure_1_10, {});
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
  const obj2 = first(10589);
  const coachmark = obj2.useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  const callback = react.useCallback(() => {
    closure_1(ContentDismissActionType.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  ({ ref, children: children(callback) });
  return <View style={coachmarkWrapper}>{null}</View>;
};
