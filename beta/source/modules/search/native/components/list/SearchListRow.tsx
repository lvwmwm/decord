// Module ID: 16468
// Function ID: 16469
// Name: SearchListRow
// Dependencies: [19, 17, 7303, 21, 4836, 576, 5435, 4832, 2]

// Module 16468 (SearchListRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Pressables from "Pressables" /* 5435 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp4;
const Text_Text = tmp4(4832);
const View = react_native.View;
const paddingVertical = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((marginLeft) => {
  let obj2;
  let obj4;
  const obj = { pressable: obj2, body: { flexDirection: "row", alignItems: "center" }, labels: { justifyContent: "center", flex: 1 }, underlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE }, text: { flexShrink: 1 }, iconContainer: { marginRight: 12 }, extrasContainer: obj4 };
  obj2 = { paddingHorizontal: 16, paddingVertical };
  obj4 = { marginLeft };
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  return obj;
});
const memoResult = react.memo((accessibilityRole) => {
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessible;
  let bodyStyle;
  let containerStyle;
  let extras;
  let header;
  let icon;
  let iconContainerStyle;
  let iconWidth;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let label;
  let onAccessibilityAction;
  let onPress;
  let subLabel;
  let trailing;
  ({ label, iconWidth, extras, accessible } = accessibilityRole);
  ({ containerStyle, onPress, subLabel, icon, iconContainerStyle, trailing, header } = accessibilityRole);
  if (accessible === undefined) {
    accessible = true;
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, bodyStyle } = accessibilityRole);
  const tmp = closure_7;
  if (iconWidth == null) {
    iconWidth = 0;
  }
  const tmpResult = tmp(iconWidth);
  const obj = { accessible, accessibilityRole: str, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, style: items, onPress, unstable_pressDelay: 130, underlayColor: tmpResult.underlayColor.backgroundColor, children: items1 };
  items = [tmpResult.pressable, containerStyle];
  items1 = [header, , ];
  const obj2 = { style: items2, children: items4 };
  items2 = [tmpResult.body, bodyStyle];
  const obj3 = { style: items3, children: icon };
  items3 = [tmpResult.iconContainer, iconContainerStyle];
  const PressableHighlight = Pressables.PressableHighlight;
  items4 = [hasOwnProperty(View, obj3), , ];
  let tmp7Result = label;
  const obj4 = { style: tmpResult.labels, children: items5 };
  if (typeof label === "string") {
    const obj5 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmpResult.text, children: label };
    tmp7Result = tmp7(Text_Text.Text, obj5);
  }
  items5 = [tmp7Result, subLabel];
  items4[1] = metroRequire(View, obj4);
  items4[2] = trailing;
  items1[1] = metroRequire(View, obj2);
  let tmp7Result2 = null != extras;
  if (tmp7Result2) {
    const obj6 = { style: items6, children: extras };
    items6 = [tmpResult.extrasContainer];
    tmp7Result2 = tmp7(tmp6, obj6);
  }
  items1[2] = tmp7Result2;
  return metroRequire(PressableHighlight, obj);
});
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;
