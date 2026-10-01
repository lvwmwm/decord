// Module ID: 16075
// Function ID: 16076
// Name: ForYouSuggestedFriendsSectionHeader
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 2]
// Exports: default

// Module 16075 (ForYouSuggestedFriendsSectionHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, noDivider: { borderTopWidth: 0, marginTop: 0 }, text: { marginTop: nativeDefault.space.PX_16 } };
obj2 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
({ marginTop: nativeDefault.space.PX_16 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  let intl;
  showDivider = showDivider.showDivider;
  const tmp = closure_4();
  const items = [tmp.container, ];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  items[1] = noDivider;
  ({ style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: intl.string(intl2.t["1uAmCw"]) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <tmp3 style={items}>{null}</tmp3>;
};
