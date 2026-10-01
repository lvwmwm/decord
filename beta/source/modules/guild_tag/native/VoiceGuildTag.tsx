// Module ID: 15757
// Function ID: 15758
// Name: VoiceGuildTag
// Dependencies: [19, 17, 1372, 7386, 21, 1364, 4836, 576, 504, 7610, 9205, 4832, 2]
// Exports: default

// Module 15757 (VoiceGuildTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let num2;
let obj2;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let PlatformUtils = PlatformUtils_mod;
let num = 10;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let createStyles = createStyles_mod;
let obj = { gapContainer: { height: num }, tagContainer: obj2, tag: { lineHeight: num2 } };
obj2 = { alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, marginVertical: (num - 16) / 2, height: 16, gap: 2 };
createStyles = createStyles.createStyles;
num2 = 16;
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  num2 = 13;
}
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  let guildId;
  let items2;
  let obj3;
  let obj5;
  let tag;
  userId = userId.userId;
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [userId];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  let primaryGuild;
  const getUserPrimaryGuild = userId(7610).getUserPrimaryGuild;
  userId(7610);
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      const obj2 = { style: tmp.gapContainer, children: closure_6(View, obj3) };
      obj3 = { style: tmp.tagContainer, children: items2 };
      const tmp2Result = userId(7610);
      const guildTagBadgeUrl = tmp2Result.getGuildTagBadgeUrl(guildId, tmp8, GuildTagBadgeSize.SIZE_12);
      const obj4 = { source: obj5, size: GuildTagBadgeSize.SIZE_12 };
      obj5 = { uri: guildTagBadgeUrl };
      items2 = [closure_5(userId(9205).GuildTagBadge, obj4), ];
      const obj6 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
      items2[1] = closure_5(userId(4832).Text, obj6);
      return closure_5(View, obj2);
    }
  }
  return null;
};
