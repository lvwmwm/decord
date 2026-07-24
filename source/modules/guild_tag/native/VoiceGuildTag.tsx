// Module ID: 15025
// Function ID: 114477
// Name: num2
// Dependencies: [31, 27, 1849, 7721, 33, 477, 4130, 689, 566, 7934, 8620, 4126, 2]
// Exports: default

// Module 15025 (num2)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let num = 10;
if (set.isAndroid()) {
  num = 14;
}
set = { gapContainer: set };
set = { height: num };
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, marginVertical: null, height: 16, gap: 2 };
let num2 = 16;
_createForOfIteratorHelperLoose.marginVertical = (num - 16) / 2;
set.tagContainer = _createForOfIteratorHelperLoose;
let obj2 = {};
if (set.isAndroid()) {
  num2 = 13;
}
obj2.lineHeight = num2;
set.tag = obj2;
set = _createForOfIteratorHelperLoose.createStyles(set);
const result = set.fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  let guildId;
  let tag;
  userId = userId.userId;
  const tmp = set();
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getUser(userId), items1);
  let obj1 = userId(7934);
  let primaryGuild;
  if (null != stateFromStores) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = obj1.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      let obj2 = userId(7934);
      obj = { style: tmp.gapContainer };
      obj = { style: tmp.tagContainer };
      const guildTagBadgeUrl = obj2.getGuildTagBadgeUrl(guildId, tmp5, GuildTagBadgeSize.SIZE_12);
      obj1 = {};
      obj2 = { uri: guildTagBadgeUrl };
      obj1.source = obj2;
      obj1.size = GuildTagBadgeSize.SIZE_12;
      const items2 = [callback(userId(8620).GuildTagBadge, obj1), ];
      const obj3 = { variant: "text-xs/semibold", color: "text-default", style: tmp.tag, children: tag };
      items2[1] = callback(userId(4126).Text, obj3);
      obj.children = items2;
      obj.children = callback2(View, obj);
      return callback(View, obj);
    }
  }
  return null;
};
