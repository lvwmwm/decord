// Module ID: 18889
// Function ID: 18890
// Name: WaterwheelsDiscoverHeader
// Dependencies: [19, 17, 21, 575, 5243, 18105, 5866, 1113, 2553, 2]
// Exports: default

// Module 18889 (WaterwheelsDiscoverHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 5866 */;
import CompassIcon2 from "CompassIcon" /* 18105 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const PX_64 = nativeDefault.space.PX_64;
let createStyles = createStyles_mod;
let obj = { header: obj2, title: obj3 };
obj2 = { height: PX_64, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  let intl;
  let items;
  let obj2;
  const tmp = closure_6();
  const obj = { style: tmp.header, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.title, children: items };
  const obj3 = { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG };
  const CompassIcon = CompassIcon2.CompassIcon;
  items = [React3(CompassIcon, obj3), ];
  const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: intl.string(_modDef2553.v010oN) };
  const Heading = Text_Text.Heading;
  intl = intl2.intl;
  items[1] = React3(Heading, obj4);
  return React3(View, obj);
};
