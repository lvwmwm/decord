// Module ID: 19937
// Function ID: 19938
// Name: GuildRoleSubscriptionTierTemplateRolePreview
// Dependencies: [19, 17, 1384, 21, 5009, 575, 1114, 563, 6036, 5712, 5619, 1091, 1188, 7368, 2]
// Exports: GuildRoleSubscriptionRolePreview

// Module 19937 (GuildRoleSubscriptionTierTemplateRolePreview)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1091 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import RoleIconDefault from "RoleIcon" /* 7368 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, avatar: { width: 40, height: 40, borderRadius: 20 }, content: { marginStart: 16 }, contextRow: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export function GuildRoleSubscriptionRolePreview(content) {
  let currentUser;
  let guildId;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj8;
  let obj9;
  let roleColor;
  let roleName;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = intl2.intl;
    content = intl.string(intl2.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = closure_8();
  const items = [UserStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = { style: items1, children: items2 };
  items1 = [tmp3.container, style];
  const obj2 = NicknameUtilsDefault;
  const name = obj2.useName(guildId, null, stateFromStores);
  items2 = [, ];
  const obj4 = { style: tmp3.avatar, source: { uri: roleImage } };
  items2[0] = metroRequire(FastImageDefault, obj4);
  const obj5 = { style: tmp3.content, children: items4 };
  const obj6 = { style: tmp3.contextRow, children: items3 };
  const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", style: obj8, children: name };
  obj8 = { color: obj9.int2hex(roleColor) };
  const Text = Text_Text.Text;
  obj9 = utils_ColorUtilsAll;
  items3 = [metroRequire(Text, obj7), metroRequire(native.Spacer, { size: 4 }), metroRequire(RoleIconDefault, { name: roleName, src: roleImage, size: 16 }), metroRequire(native.Spacer, { size: 8 }), metroRequire(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" })];
  items4 = [metroImportDefault(View, obj6), metroRequire(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: textStyle, children: content })];
  items2[1] = metroImportDefault(View, obj5);
  return metroImportDefault(View, obj3);
}
