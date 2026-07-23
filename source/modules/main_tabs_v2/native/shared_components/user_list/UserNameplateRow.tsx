// Module ID: 8753
// Function ID: 69201
// Name: UserNameplateRow
// Dependencies: [57, 31, 33, 4130, 689, 5166, 3834, 5167, 8229, 5165, 5125, 2]
// Exports: UserNameplateRow

// Module 8753 (UserNameplateRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 0, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_40, overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

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
  onPressOut = onPressOut.onPressOut;
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
  let obj = { label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, onPressIn: 0, onPressOut: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, nameplate: 0, isPreviewRow: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onPressOut, obj);
  let dependencyMap;
  const context = React.useContext(onPressIn(5166).TableRowGroupContext);
  let tmp5 = !context;
  if (tmp5) {
    tmp5 = true === end;
  }
  const tmp6 = callback(React.useState(false), 2);
  dependencyMap = tmp6[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  callback = React.useCallback((arg0) => {
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
  let obj1 = onPressIn(3834);
  const token = obj1.useToken(onPressOut(689).modules.mobile.TABLE_ROW_BORDER_RADIUS);
  obj = { shadow: "none", border: "none", radius: token };
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
  obj.style = _createForOfIteratorHelperLoose().card;
  const merged1 = Object.assign(merged);
  obj = { nameplate, isPressed: tmp6[0], invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow };
  const items2 = [callback2(onPressOut(8229), obj), ];
  obj1 = { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps };
  items2[1] = callback2(onPressIn(5165).TableRowInner, obj1);
  obj["children"] = items2;
  const tmp10Result = callback3(onPressIn(5167).Card, obj);
  let tmp15 = tmp10Result;
  if (!context) {
    tmp15 = tmp10Result;
    if (!tmp5) {
      const obj2 = {};
      const items3 = [tmp10Result, ];
      const obj3 = { adjustSpacingForIcon: null != icon };
      items3[1] = callback2(onPressIn(5125).TableRowDivider, obj3);
      obj2.children = items3;
      tmp15 = callback3(closure_7, obj2);
    }
  }
  return tmp15;
};
