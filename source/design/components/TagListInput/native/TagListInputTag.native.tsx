// Module ID: 8472
// Function ID: 67389
// Name: TagListInputTagComponent
// Dependencies: [31, 27, 33, 4130, 689, 1324, 1212, 8473, 4660, 4126, 2]
// Exports: TagListInputTagComponent

// Module 8472 (TagListInputTagComponent)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = {};
  const colors = importDefault(689).colors;
  obj.backgroundColor = flag ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_SURFACE_HIGH;
  obj.marginHorizontal = 2;
  const radii = importDefault(689).radii;
  obj.borderRadius = flag ? radii.xs : radii.round;
  let num;
  if (flag) {
    num = 1;
  }
  obj.borderWidth = num;
  let BORDER_SUBTLE;
  if (flag) {
    BORDER_SUBTLE = importDefault(689).colors.BORDER_SUBTLE;
  }
  obj.borderColor = BORDER_SUBTLE;
  obj.paddingHorizontal = importDefault(689).space.PX_8;
  obj.paddingVertical = importDefault(689).space.PX_4;
  obj.overflow = "hidden";
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.flexShrink = 1;
  obj.tagWrapper = obj;
  obj.tagText = { flexShrink: 1 };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BRAND };
  obj.highlightedTagWrapper = obj;
  obj.tagIcon = { paddingRight: importDefault(689).space.PX_4, marginLeft: 0 };
  obj.start = { marginLeft: 0 };
  const obj1 = { paddingRight: importDefault(689).space.PX_4, marginLeft: 0 };
  obj.end = { marginRight: importDefault(689).space.PX_4 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = function TagListInputTagComponent(end) {
  let accessibilityActions;
  let onAccessibilityAction;
  let require;
  let selected;
  let start;
  let tag;
  ({ tag, selected, onPress: require, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2(importDefault(1324)("TagListInputTag"));
  const intl = require(1212) /* getSystemLocale */.intl;
  let obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["0Vb9FQ"], obj);
  ({ onAccessibilityAction, accessibilityActions } = importDefault(8473)(() => callback("remove"), formatToPlainStringResult));
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
  const obj1 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium" };
  let str = "text-default";
  if (selected) {
    str = "text-overlay-light";
  }
  obj1.color = str;
  obj1.children = tag.text;
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return closure_5(require(4660) /* PressableBase */.PressableOpacity, obj);
};
