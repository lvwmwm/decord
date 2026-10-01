// Module ID: 14318
// Function ID: 14319
// Name: TwoFASetupModalHeader
// Dependencies: [19, 17, 21, 4836, 576, 2]

// Module 14318 (TwoFASetupModalHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2;
let map;
let obj2;
let rect;
let size;
const View = react_native.View;
({ jsx: map, jsxs: c2 } = Fragment);
let createStyles = createStyles_mod;
let obj = { pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }, circleIcon: size, horizontalLine: rect, filledCircle: obj2 };
size = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2 = { backgroundColor: nativeDefault.colors.TEXT_BRAND, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_3 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let items;
  let items1;
  let numMarkers;
  ({ numMarkers, currentPage: View } = arg0);
  let tmp = closure_3();
  let closure_1 = tmp;
  const obj = { style: items, children: items1 };
  items = [tmp.pageMarkerContainer, ];
  const obj2 = { width: 20 * numMarkers };
  items[1] = obj2;
  const ArrayResult = Array(numMarkers);
  const fillResult = ArrayResult.fill(undefined);
  const obj3 = { style: tmp.horizontalLine };
  const mapped = fillResult.map((item, index) => {
    const style = [map.circleIcon, ];
    const sum = index + 1;
    let filledCircle = View === sum;
    const tmp = map;
    const tmp2 = View;
    if (filledCircle) {
      filledCircle = map.filledCircle;
    }
    style[1] = filledCircle;
    return tmp(tmp2, { style }, sum);
  });
  items1 = [closure_1(View, obj3), mapped];
  return closure_2(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;
