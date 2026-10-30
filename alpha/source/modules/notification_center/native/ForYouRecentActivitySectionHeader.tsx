// Module ID: 18452
// Function ID: 18453
// Name: ForYouRecentActivitySectionHeader
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 2]
// Exports: ForYouRecentActivitySectionHeader

// Module 18452 (ForYouRecentActivitySectionHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, textHeader: { marginTop: nativeDefault.space.PX_8 } };
obj2 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
({ marginTop: nativeDefault.space.PX_8 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export function ForYouRecentActivitySectionHeader() {
  let intl;
  const tmp = closure_4();
  ({ style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: intl.string(intl2.t.yM9Krm) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
}
