// Module ID: 12841
// Function ID: 12842
// Name: GuildRoleSubscriptionsChannelHeader
// Dependencies: [19, 17, 21, 4836, 576, 1177, 12295, 4832, 1115, 2]

// Module 12841 (GuildRoleSubscriptionsChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 12295 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2 };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildRoleSubscriptionsChannelHeader() {
  let intl;
  let items;
  const obj = { style: closure_6().header, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
  const Icon = native.Icon;
  items = [React3(Icon, obj2), ];
  const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: intl.string(intl2.t["KzCF/6"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default memoResult;
