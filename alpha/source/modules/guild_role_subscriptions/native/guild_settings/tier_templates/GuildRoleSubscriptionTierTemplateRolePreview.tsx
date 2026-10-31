// Module ID: 19995
// Function ID: 19996
// Name: GuildRoleSubscriptionTierTemplateRolePreview
// Dependencies: [19, 17, 1383, 21, 5014, 575, 1113, 563, 6041, 5717, 5624, 1090, 1187, 7374, 2]
// Exports: GuildRoleSubscriptionRolePreview

// Module 19995 (GuildRoleSubscriptionTierTemplateRolePreview)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1090 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import RoleIconDefault from "RoleIcon" /* 7374 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, avatar: { width: 40, height: 40, borderRadius: 20 }, content: obj3, contextRow: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexDirection: "row", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginStart: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
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
