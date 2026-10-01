// Module ID: 9039
// Function ID: 9040
// Name: TagListInputTag
// Dependencies: [19, 17, 21, 4836, 576, 1115, 9040, 5435, 4832, 2]
// Exports: TagListInputTagComponent

// Module 9039 (TagListInputTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Pressables from "Pressables" /* 5435 */;
import reactDefault from "react" /* 9040 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp2;
const Text_Text = tmp2(4832);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  const obj = { tagWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginHorizontal: 2, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 }, tagText: { flexShrink: 1 }, highlightedTagWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, tagIcon: { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 }, start: { marginLeft: 0 }, end: { marginRight: nativeDefault.space.PX_4 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginHorizontal: 2, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ paddingRight: nativeDefault.space.PX_4, marginLeft: 0 });
  ({ marginRight: nativeDefault.space.PX_4 });
  return obj;
});
const result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = function TagListInputTagComponent(end) {
  let accessibilityActions;
  let closure_129_0;
  let items1;
  let onAccessibilityAction;
  let selected;
  let start;
  let str;
  let tag;
  const f87965 = () => closure_1_0("remove");
  ({ tag, selected, onPress: closure_129_0, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const intl = intl2.intl;
  const obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t["0Vb9FQ"], obj);
  ({ onAccessibilityAction, accessibilityActions } = reactDefault(f87965, formatToPlainStringResult));
  const items = [tmp.tagWrapper, , , ];
  let prop;
  reactDefault(f87965, formatToPlainStringResult);
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp6 = hasOwnProperty;
  if (selected) {
    prop = tmp.highlightedTagWrapper;
  }
  items[1] = prop;
  let start1;
  if (start) {
    start1 = tmp.start;
  }
  items[2] = start1;
  end = undefined;
  if (flag) {
    end = tmp.end;
  }
  const obj2 = {
    style: items,
    onPress() {
      return closure_1_0("select");
    },
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    accessibilityActions,
    onAccessibilityAction,
    children: items1
  };
  items[3] = end;
  let tmp10 = null;
  if (null != tag.icon) {
    const obj3 = { style: tmp.tagIcon, children: tag.icon };
    tmp10 = React3(View, obj3);
  }
  items1 = [tmp10, ];
  const obj4 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium", color: str, children: tag.text };
  str = "text-default";
  const Text = Text_Text.Text;
  const tmp13 = React3;
  if (selected) {
    str = "text-overlay-light";
  }
  items1[1] = tmp13(Text, obj4);
  return tmp6(PressableOpacity, obj2);
};
