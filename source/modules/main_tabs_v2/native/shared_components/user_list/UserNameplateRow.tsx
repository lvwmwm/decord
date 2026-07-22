// Module ID: 8746
// Function ID: 69160
// Name: UserNameplateRow
// Dependencies: []
// Exports: UserNameplateRow

// Module 8746 (UserNameplateRow)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingRight: importDefault(dependencyMap[4]).space.PX_40 };
obj.card = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

export const UserNameplateRow = function UserNameplateRow(onPressOut) {
  let arrow;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let icon;
  let isPreviewRow;
  let label;
  let labelLineClamp;
  let nameplate;
  let onPress;
  let onPressIn;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let trailing;
  let variant;
  ({ icon, onPressIn } = onPressOut);
  const arg1 = onPressIn;
  onPressOut = onPressOut.onPressOut;
  const importDefault = onPressOut;
  let flag = onPressOut.disabled;
  ({ label, subLabel, trailing, arrow, onPress } = onPressOut);
  if (flag === undefined) {
    flag = false;
  }
  ({ variant, start, end, labelLineClamp, subLabelLineClamp } = onPressOut);
  if (variant === undefined) {
    variant = "default";
  }
  ({ isPreviewRow, draggable, dragHandlePressableProps, nameplate } = onPressOut);
  if (isPreviewRow === undefined) {
    isPreviewRow = false;
  }
  let obj = { "Null": "row", "Null": "center", "Null": 8, "Null": 28, "Null": 4, "Null": null, "Null": 1, "Null": 2, "Null": "column", "Null": "center", "Null": 8, "Null": true, "Null": "text-sm/semibold", "Null": null, "Null": 1, body: "column", type: 6, accessibilityRole: 20 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onPressOut, obj);
  let closure_2;
  const context = React.useContext(arg1(closure_2[5]).TableRowGroupContext);
  let tmp5 = !context;
  if (tmp5) {
    tmp5 = true === end;
  }
  const tmp6 = callback(React.useState(false), 2);
  closure_2 = tmp6[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = React.useCallback((arg0) => {
    callback(true);
    if (null != onPressIn) {
      onPressIn(arg0);
    }
  }, items);
  const callback1 = React.useCallback((arg0) => {
    callback(false);
    if (null != onPressOut) {
      onPressOut(arg0);
    }
  }, items1);
  let obj1 = arg1(closure_2[6]);
  const token = obj1.useToken(importDefault(closure_2[4]).modules.mobile.TABLE_ROW_BORDER_RADIUS);
  obj = { "Bool(true)": true, s: true, radius: token };
  let tmp11 = !context;
  if (tmp11) {
    tmp11 = true === start;
  }
  obj.start = tmp11;
  obj.end = tmp5;
  obj.onPress = onPress;
  obj.onPressIn = callback;
  obj.onPressOut = callback1;
  obj.disabled = flag;
  obj.style = callback4().card;
  const merged1 = Object.assign(merged);
  obj = { nameplate, isPressed: tmp6[0], invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow };
  const items2 = [callback2(importDefault(closure_2[8]), obj), ];
  obj1 = { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps };
  items2[1] = callback2(arg1(closure_2[9]).TableRowInner, obj1);
  obj["children"] = items2;
  const tmp10Result = callback3(arg1(closure_2[7]).Card, obj);
  let tmp15 = tmp10Result;
  if (!context) {
    tmp15 = tmp10Result;
    if (!tmp5) {
      const obj2 = {};
      const items3 = [tmp10Result, ];
      const obj3 = { adjustSpacingForIcon: null != icon };
      items3[1] = callback2(arg1(closure_2[10]).TableRowDivider, obj3);
      obj2.children = items3;
      tmp15 = callback3(closure_7, obj2);
    }
  }
  return tmp15;
};
