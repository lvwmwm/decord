// Module ID: 18891
// Function ID: 18892
// Name: WaterwheelsDiscoverStatus
// Dependencies: [19, 17, 21, 5243, 575, 5866, 1113, 2553, 5873, 2]
// Exports: WaterwheelsDiscoverRefreshError, default

// Module 18891 (WaterwheelsDiscoverStatus)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, copy: obj3, centered: { textAlign: "center" }, banner: obj4, bannerText: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverStatus.tsx");

export default function WaterwheelsDiscoverStatus(status) {
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj3;
  let string;
  let tmp10Result;
  let vtx6nV;
  status = status.status;
  const onRetry = status.onRetry;
  const tmp = closure_6();
  if ("loading" === status) {
    const obj2 = { style: tmp.container, accessibilityLiveRegion: "polite", children: React3(Text2, obj3) };
    obj3 = { variant: "body-md/medium", color: "text-muted", style: tmp.centered, children: intl3.string(_modDef2553["71GnER"]) };
    Text2 = Text_Text.Text;
    intl3 = intl5.intl;
    tmp10Result = React3(View, obj2);
  } else {
    let tmp2;
    const obj4 = { style: tmp.container, accessibilityLiveRegion: "polite", children: items1 };
    const obj5 = { style: tmp.copy, children: items };
    const obj6 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centered, children: string(vtx6nV) };
    const Heading = Text_Text.Heading;
    const intl4 = intl5.intl;
    string = intl4.string;
    const tmp17 = _modDef2553;
    if ("empty" === status) {
      vtx6nV = tmp17.gv4HTM;
      tmp2 = tmp16;
    } else {
      vtx6nV = tmp17.vtx6nV;
      tmp2 = tmp16;
    }
    items = [React3(Heading, obj6), ];
    let tmp12Result = null;
    if ("empty" === status) {
      const obj = { variant: "body-sm/normal", color: "text-muted", style: tmp.centered, children: intl.string(tmp2(2553)["9KIqrW"]) };
      const Text = tmp13(5866).Text;
      intl = tmp13(1113).intl;
      tmp12Result = tmp12(Text, obj);
    }
    items[1] = tmp12Result;
    items1 = [hasOwnProperty(View, obj5), ];
    const obj7 = { size: "sm", variant: "secondary", text: intl2.string(tmp2(2553).DClDU4), onPress: onRetry };
    const Button = tmp13(5873).Button;
    intl2 = tmp13(1113).intl;
    items1[1] = React3(Button, obj7);
    tmp10Result = tmp10(tmp11, obj4);
  }
  return tmp10Result;
};
export function WaterwheelsDiscoverRefreshError(onRetry) {
  let intl;
  let intl2;
  let items;
  onRetry = onRetry.onRetry;
  const tmp = closure_6();
  const obj = { style: tmp.banner, accessibilityLiveRegion: "polite", children: items };
  const obj2 = { variant: "body-sm/medium", color: "text-muted", style: tmp.bannerText, children: intl.string(_modDef2553["4O8kV0"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [React3(Text, obj2), ];
  const obj3 = { size: "sm", variant: "secondary", text: intl2.string(_modDef2553.DClDU4), onPress: onRetry };
  const Button = components_Button_Button.Button;
  intl2 = intl5.intl;
  items[1] = React3(Button, obj3);
  return hasOwnProperty(View, obj);
}
