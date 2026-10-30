// Module ID: 16508
// Function ID: 16509
// Name: UserProfileWidgetEditingHeader
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 5629, 9550, 8020, 12304, 2]
// Exports: default

// Module 16508 (UserProfileWidgetEditingHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import IconButton2 from "IconButton" /* 8020 */;
import PlusSmallIcon2 from "PlusSmallIcon" /* 9550 */;
import ArrowsUpDownIcon2 from "ArrowsUpDownIcon" /* 12304 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2, heading: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
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
};
