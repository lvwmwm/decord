// Module ID: 14890
// Function ID: 14891
// Name: DisplayNameStylesSheetHeader
// Dependencies: [19, 17, 21, 4836, 576, 6570, 2]
// Exports: default

// Module 14890 (DisplayNameStylesSheetHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { trailingButtonClearance: obj2, centeredAccessory: { justifyContent: "center", alignItems: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default function DisplayNameStylesSheetHeader(arg0) {
  let leading;
  let trailing;
  ({ leading, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ leading: 0, trailing: 0 }));
  const tmp2 = closure_4();
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  const merged1 = Object.assign(merged);
  let tmp3Result = leading;
  if (null != leading) {
    const obj3 = { style: tmp2.centeredAccessory, children: leading };
    tmp3Result = tmp3(tmp4, obj3);
  }
  let tmp3Result2 = trailing;
  if (null != trailing) {
    const obj4 = { style: tmp2.centeredAccessory, children: trailing };
    tmp3Result2 = tmp3(tmp4, obj4);
  }
  return <View style={tmp2.trailingButtonClearance}>{null}</View>;
};
