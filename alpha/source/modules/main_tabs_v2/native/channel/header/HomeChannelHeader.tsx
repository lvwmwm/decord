// Module ID: 14522
// Function ID: 14523
// Name: HomeChannelHeader
// Dependencies: [19, 17, 21, 5009, 575, 1188, 14337, 5619, 1114, 2]

// Module 14522 (HomeChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import AssetRegistryDefault from "AssetRegistry" /* 14337 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function HomeChannelHeader() {
  let intl;
  let items;
  const obj = { style: closure_6().container, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
  const Icon = native.Icon;
  items = [React3(Icon, obj2), ];
  const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: intl.string(intl2.t.Ym2Ri6) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default memoResult;
