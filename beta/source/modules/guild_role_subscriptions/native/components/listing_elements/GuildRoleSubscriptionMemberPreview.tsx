// Module ID: 14783
// Function ID: 14784
// Name: GuildRoleSubscriptionMemberPreview
// Dependencies: [19, 17, 1372, 21, 4836, 576, 1115, 504, 4988, 1397, 6608, 5899, 4832, 1092, 1177, 6626, 2]
// Exports: GuildRoleSubscriptionMemberPreview

// Module 14783 (GuildRoleSubscriptionMemberPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1092 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4832 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import FastImageDefault from "FastImage" /* 5899 */;
import RoleIconUtils from "RoleIconUtils" /* 6608 */;
import RoleIconDefault from "RoleIcon" /* 6626 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, avatar: { width: 40, height: 40, borderRadius: 20 }, content: { marginStart: 16 }, contextRow: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  let currentUser;
  let guildId;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj11;
  let obj7;
  let role;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = intl2.intl;
    content = intl.string(intl2.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = closure_9();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  NicknameUtilsDefault;
  if (null == role) {
    return null;
  } else {
    let avatarURL;
    const makeSource = AvatarUtilsDefault.makeSource;
    AvatarUtilsDefault;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      const tmp6Result2 = AvatarUtilsDefault;
      avatarURL = tmp6Result2.getDefaultAvatarURL(undefined, undefined);
    }
    const source = makeSource(avatarURL);
    const tmp4Result = RoleIconUtils;
    const roleIconData = tmp4Result.getRoleIconData(role, 16);
    const obj2 = { style: items1, children: items2 };
    items1 = [tmp3.container, style];
    const color = role.color;
    const obj3 = { style: tmp3.avatar, source };
    items2 = [metroRequire(FastImageDefault, obj3), ];
    const obj4 = { style: tmp3.content, children: items5 };
    const obj5 = { style: tmp3.contextRow, children: items3 };
    const obj6 = { variant: "text-md/semibold", color: "interactive-text-active", style: obj7, children: tmp8 };
    obj7 = { color: obj11.int2hex(color) };
    const Text = tmp4(4832).Text;
    obj11 = utils_ColorUtilsAll;
    items3 = [metroRequire(Text, obj6), , , ];
    let tmp12Result = null;
    if (null != roleIconData) {
      const obj8 = { children: items4 };
      items4 = [metroRequire(native.Spacer, { size: 4 }), ];
      const obj9 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
      ({ customIconSrc: obj13.src, unicodeEmoji: obj13.unicodeEmoji } = roleIconData);
      items4[1] = metroRequire(RoleIconDefault, obj9);
      tmp12Result = tmp12(metroImportDefault, obj8);
    }
    items3[1] = tmp12Result;
    items3[2] = metroRequire(native.Spacer, { size: 8 });
    items3[3] = metroRequire(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    items5 = [metroImportAll(View, obj5), ];
    const obj10 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
    items5[1] = metroRequire(Text_Text.Text, obj10);
    items2[1] = metroImportAll(View, obj4);
    return metroImportAll(View, obj2);
  }
};
