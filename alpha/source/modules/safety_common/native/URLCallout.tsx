// Module ID: 15836
// Function ID: 15837
// Name: URLCallout
// Dependencies: [19, 17, 21, 5243, 575, 15837, 5866, 2]
// Exports: URLCallout

// Module 15836 (URLCallout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import SharedStateUtils from "SharedStateUtils" /* 15837 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsxs: c3, jsx: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { linkCalloutContainer: obj2, linkCalloutContainerText: obj3 };
obj2 = { maxHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, textAlign: "center" };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export function URLCallout(url) {
  let Text;
  let hostname;
  let items;
  let items1;
  let obj3;
  let protocol;
  let theRestOfTheUrl;
  url = url.url;
  const tmp = closure_5();
  const obj = SharedStateUtils;
  const urlParts = obj.useUrlParts(url);
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  const obj2 = { style: tmp.linkCalloutContainer, children: _false(Text, obj3) };
  obj3 = { style: tmp.linkCalloutContainerText, variant: "body-md/normal", children: items1 };
  Text = Text_Text.Text;
  const obj4 = { variant: "body-md/normal", color: "text-muted", children: items };
  items = [protocol, "//"];
  items1 = [_false(Text_Text.Text, obj4), React3(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", children: hostname }), React3(Text_Text.Text, { variant: "body-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  return React3(ScrollView, obj2);
}
