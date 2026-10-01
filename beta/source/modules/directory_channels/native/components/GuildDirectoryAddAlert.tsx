// Module ID: 11805
// Function ID: 11806
// Name: GuildDirectoryAddAlert
// Dependencies: [19, 17, 21, 4836, 576, 5300, 1115, 5896, 4832, 2]
// Exports: default

// Module 11805 (GuildDirectoryAddAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { guildIcon: obj2, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, container: { alignItems: "center", justifyContent: "center" } };
obj2 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  let directoryGuildName;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let onClose;
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = closure_6();
  const obj = { confirmText: intl.string(intl4.t["X0WK+6"]), onConfirm: onClose, children: hasOwnProperty(View, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.container, children: items };
  const obj3 = { style: tmp.guildIcon, guild, size: GuildIcon.GuildIconSizes.XLARGE };
  const tmp3 = GuildIconDefault;
  items = [React3(tmp3, obj3), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.CueiPY) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = React3(Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.format(intl4.t.R7Pqn5, { guildName: directoryGuildName }) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[2] = React3(Text2, obj5);
  return React3(tmp2, obj);
};
