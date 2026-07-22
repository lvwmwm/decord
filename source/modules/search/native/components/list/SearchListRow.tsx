// Module ID: 15230
// Function ID: 114989
// Name: SearchListRow
// Dependencies: []

// Module 15230 (SearchListRow)
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).SEARCH_ROW_TAP_STATE_PADDING;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles((marginLeft) => {
  let obj = { pressable: obj, body: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" }, labels: {} };
  obj = { paddingHorizontal: 16, paddingVertical: closure_4 };
  obj = { backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.underlayColor = obj;
  obj.text = { flexShrink: 1 };
  obj.iconContainer = { marginRight: 12 };
  obj.extrasContainer = { marginLeft };
  return obj;
});
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((accessibilityRole) => {
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
  let num = 0;
  ({ accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, bodyStyle } = accessibilityRole);
  if (null != iconWidth) {
    num = iconWidth;
  }
  const tmpResult = closure_7(num);
  let obj = { accessible, accessibilityRole: str, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction };
  const items = [tmpResult.pressable, containerStyle];
  obj.style = items;
  obj.onPress = onPress;
  obj.unstable_pressDelay = 130;
  obj.underlayColor = tmpResult.underlayColor.backgroundColor;
  const items1 = [header, , ];
  obj = { style: items2 };
  const items2 = [tmpResult.body, bodyStyle];
  const items3 = [tmpResult.iconContainer, iconContainerStyle];
  const items4 = [callback(View, { style: items3, children: icon }), , ];
  obj = { style: tmpResult.labels };
  let tmp5 = label;
  if ("string" === typeof label) {
    const obj1 = { style: tmpResult.text, children: label };
    tmp5 = callback(arg1(dependencyMap[7]).Text, obj1);
  }
  const items5 = [tmp5, subLabel];
  obj.children = items5;
  items4[1] = closure_6(View, obj);
  items4[2] = trailing;
  obj.children = items4;
  items1[1] = closure_6(View, obj);
  let tmp9 = null != extras;
  if (tmp9) {
    const obj2 = {};
    const items6 = [tmpResult.extrasContainer];
    obj2.style = items6;
    obj2.children = extras;
    tmp9 = callback(View, obj2);
  }
  items1[2] = tmp9;
  obj.children = items1;
  return closure_6(arg1(dependencyMap[6]).PressableHighlight, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;
