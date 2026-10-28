// Module ID: 16220
// Function ID: 16221
// Name: UserProfileWidgetEditingHeader
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 1125, 5270, 5280, 9500, 7991, 12074, 2]

// Module 16220 (UserProfileWidgetEditingHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import IconButton2 from "IconButton" /* 7991 */;
import PlusSmallIcon2 from "PlusSmallIcon" /* 9500 */;
import ArrowsUpDownIcon2 from "ArrowsUpDownIcon" /* 12074 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2, heading: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetEditingHeader() {
  let ArrowsUpDownIcon;
  let PlusSmallIcon;
  let first;
  let header;
  let heading;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj6;
  let tmp10;
  let tmp14;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_6();
  ({ header, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t.OYlggR);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: heading, children: first };
    const tmp9 = React3(Text_Text.Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      size: "sm",
      variant: "secondary",
      icon: React3(PlusSmallIcon, obj4),
      text: intl2.string(intl4.t["lBG2s/"]),
      onPress() {

        }
    };
    const Button = tmp(5280).Button;
    obj4 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
    PlusSmallIcon = tmp(9500).PlusSmallIcon;
    intl2 = tmp(1125).intl;
    const tmp13 = React3(Button, obj3);
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      size: "sm",
      variant: "secondary",
      icon: React3(ArrowsUpDownIcon, obj6),
      accessibilityLabel: intl3.string(intl4.t.tm1WHd),
      onPress() {

        }
    };
    const IconButton = tmp(7991).IconButton;
    obj6 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
    ArrowsUpDownIcon = tmp(12074).ArrowsUpDownIcon;
    intl3 = tmp(1125).intl;
    const tmp17 = React3(IconButton, obj5);
    cResult[4] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp4.header) {
    let tmp18;
    if (cResult[6] === tmp7) {
      tmp18 = cResult[7];
    }
    return tmp18;
  }
  const obj7 = { style: header, children: items };
  items = [tmp7, tmp10, tmp14];
  const tmp19 = hasOwnProperty(View, obj7);
  cResult[5] = tmp4.header;
  cResult[6] = tmp7;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : (function UserProfileWidgetEditingHeader() {
  let ArrowsUpDownIcon;
  let PlusSmallIcon;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj6;
  const tmp = closure_6();
  const obj = { style: tmp.header, children: items };
  const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.heading, children: intl.string(intl4.t.OYlggR) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [React3(Heading, obj2), , ];
  const obj3 = {
    size: "sm",
    variant: "secondary",
    icon: React3(PlusSmallIcon, obj4),
    text: intl2.string(intl4.t["lBG2s/"]),
    onPress() {

    }
  };
  const Button = components_Button_Button.Button;
  obj4 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
  PlusSmallIcon = PlusSmallIcon2.PlusSmallIcon;
  intl2 = intl4.intl;
  items[1] = React3(Button, obj3);
  const obj5 = {
    size: "sm",
    variant: "secondary",
    icon: React3(ArrowsUpDownIcon, obj6),
    accessibilityLabel: intl3.string(intl4.t.tm1WHd),
    onPress() {

    }
  };
  const IconButton = IconButton2.IconButton;
  obj6 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  ArrowsUpDownIcon = ArrowsUpDownIcon2.ArrowsUpDownIcon;
  intl3 = intl4.intl;
  items[2] = React3(IconButton, obj5);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default tmp4;
