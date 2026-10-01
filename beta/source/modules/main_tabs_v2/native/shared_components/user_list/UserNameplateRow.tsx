// Module ID: 10369
// Function ID: 10370
// Name: UserNameplateRow
// Dependencies: [32, 19, 21, 4836, 576, 5918, 4531, 5919, 8281, 5917, 5914, 2]
// Exports: UserNameplateRow

// Module 10369 (UserNameplateRow)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import TableRowDivider from "TableRowDivider" /* 5914 */;
import react2 from "react" /* 5918 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp11;
const NameplateDefault = tmp11(8281);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
const obj = { card: obj2 };
obj2 = { padding: 0, paddingRight: nativeDefault.space.PX_40, overflow: "hidden" };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

export const UserNameplateRow = function UserNameplateRow(onPressOut) {
  let arrow;
  let closure_2;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let first;
  let icon;
  let isPreviewRow;
  let items2;
  let items3;
  let label;
  let labelLineClamp;
  let nameplate;
  let onPress;
  let onPressIn;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let tmp14;
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
  const merged = Object.assign(onPressOut, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, onPressIn: 0, onPressOut: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, nameplate: 0, isPreviewRow: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_8();
  const context = react.useContext(react2.TableRowGroupContext);
  [first, closure_2] = react.useState(false);
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = obj.useCallback((arg0) => {
    closure_2(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = obj.useCallback((arg0) => {
    closure_2(false);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const tmp3Result = useToken;
  const token = tmp3Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj2 = { shadow: "none", border: "none", radius: token, start: tmp14, end: !context && true === end, onPress, onPressIn: callback, onPressOut: callback1, disabled: flag, style: tmp2.card, children: items2 };
  tmp14 = !context;
  const Card = tmp3(5919).Card;
  if (!context) {
    tmp14 = true === start;
  }
  const merged1 = Object.assign(merged);
  items2 = [hasOwnProperty(NameplateDefault, { nameplate, isPressed: first, invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow }), ];
  const TableRowInner = tmp3(5917).TableRowInner;
  items2[1] = hasOwnProperty(TableRowInner, { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps });
  const tmp13Result = metroRequire(Card, obj2);
  let tmp13Result2 = tmp13Result;
  if (!context) {
    tmp13Result2 = tmp13Result;
    if (!(!context && true === end)) {
      const obj3 = { children: items3 };
      items3 = [tmp13Result, ];
      const obj4 = { adjustSpacingForIcon: null != icon };
      items3[1] = hasOwnProperty(TableRowDivider.TableRowDivider, obj4);
      tmp13Result2 = tmp13(metroImportDefault, obj3);
    }
  }
  return tmp13Result2;
};
