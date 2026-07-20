// Module ID: 8417
// Function ID: 67089
// Name: TagListInputTagComponent
// Dependencies: []
// Exports: TagListInputTagComponent

// Module 8417 (TagListInputTagComponent)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = {};
  const colors = importDefault(dependencyMap[4]).colors;
  obj.backgroundColor = flag ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_SURFACE_HIGH;
  obj.marginHorizontal = 2;
  const radii = importDefault(dependencyMap[4]).radii;
  obj.borderRadius = flag ? radii.xs : radii.round;
  let num;
  if (flag) {
    num = 1;
  }
  obj.borderWidth = num;
  let BORDER_SUBTLE;
  if (flag) {
    BORDER_SUBTLE = importDefault(dependencyMap[4]).colors.BORDER_SUBTLE;
  }
  obj.borderColor = BORDER_SUBTLE;
  obj.paddingHorizontal = importDefault(dependencyMap[4]).space.PX_8;
  obj.paddingVertical = importDefault(dependencyMap[4]).space.PX_4;
  obj.overflow = "hidden";
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.flexShrink = 1;
  obj.tagWrapper = obj;
  obj.tagText = { flexShrink: 1 };
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
  obj.highlightedTagWrapper = obj;
  obj.tagIcon = { paddingRight: importDefault(dependencyMap[4]).space.PX_4, marginLeft: 0 };
  obj.start = { marginLeft: 0 };
  const obj1 = { paddingRight: importDefault(dependencyMap[4]).space.PX_4, marginLeft: 0 };
  obj.end = { marginRight: importDefault(dependencyMap[4]).space.PX_4 };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = function TagListInputTagComponent(end) {
  let accessibilityActions;
  let onAccessibilityAction;
  let selected;
  let start;
  let tag;
  ({ tag, selected, onPress: closure_0, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2(importDefault(dependencyMap[5])("TagListInputTag"));
  const intl = arg1(dependencyMap[6]).intl;
  let obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[6]).t.0Vb9FQ, obj);
  ({ onAccessibilityAction, accessibilityActions } = importDefault(dependencyMap[7])(() => callback("remove"), formatToPlainStringResult));
  obj = {};
  const items = [tmp.tagWrapper, , , ];
  let prop;
  if (selected) {
    prop = tmp.highlightedTagWrapper;
  }
  items[1] = prop;
  start = undefined;
  if (start) {
    start = tmp.start;
  }
  items[2] = start;
  end = undefined;
  if (flag) {
    end = tmp.end;
  }
  items[3] = end;
  obj.style = items;
  obj.onPress = function onPress() {
    return callback("select");
  };
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  let tmp8 = null;
  if (null != tag.icon) {
    obj = { style: tmp.tagIcon, children: tag.icon };
    tmp8 = callback(View, obj);
  }
  const items1 = [tmp8, ];
  const obj1 = { "Null": "<string:16777216>", "Null": "<string:82160449>", "Null": "<string:422400>", style: tmp.tagText };
  let str = "text-default";
  if (selected) {
    str = "text-overlay-light";
  }
  obj1.color = str;
  obj1.children = tag.text;
  items1[1] = callback(arg1(dependencyMap[9]).Text, obj1);
  obj.children = items1;
  return closure_5(arg1(dependencyMap[8]).PressableOpacity, obj);
};
