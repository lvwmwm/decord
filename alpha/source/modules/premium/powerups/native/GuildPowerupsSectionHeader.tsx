// Module ID: 10690
// Function ID: 10691
// Name: GuildPowerupsSectionHeader
// Dependencies: [17, 21, 5243, 575, 5866, 2]
// Exports: default

// Module 10690 (GuildPowerupsSectionHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { headerContainer: { padding: nativeDefault.space.PX_16 } };
({ padding: nativeDefault.space.PX_16 });
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let items;
  let title;
  ({ title, description } = arg0);
  const obj = { style: closure_5().headerContainer, children: items };
  items = [_false(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), _false(Text_Text.Text, { variant: "body-sm/normal", children: description })];
  return React3(View, obj);
};
