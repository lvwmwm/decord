// Module ID: 16043
// Function ID: 16044
// Name: ProfileEditNitroSubLabel
// Dependencies: [19, 17, 21, 5043, 575, 9638, 5634, 2]
// Exports: default

// Module 16043 (ProfileEditNitroSubLabel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 9638 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, text: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/ProfileEditNitroSubLabel.tsx");

export default function ProfileEditNitroSubLabel(text) {
  let items;
  text = text.text;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items = [React3(NitroWheelIcon, obj2), ];
  const obj3 = { style: tmp.text, variant: "body-xs/normal", color: "text-subtle", children: text };
  items[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
};
