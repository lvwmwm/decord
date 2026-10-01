// Module ID: 10658
// Function ID: 10659
// Name: getChannelMoveBlocker
// Dependencies: [2066, 5026, 2069, 10659, 7143, 2]
// Exports: default

// Module 10658 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import canManageChannelListDefault from "canManageChannelList" /* 10659 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5026 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/getChannelMoveBlocker.tsx");

export default function getChannelMoveBlocker(getGuildId, guildId) {
  if (obj.isFavoritesGuildId(guildId)) {
    return null;
  } else {
    const guild = GuildStore.getGuild(getGuildId.getGuildId());
    if (null != guild) {
      const tmp8 = canManageChannelListDefault;
      if (tmp8(tmpResult.getContainingCategory(getGuildId), guild)) {
        if (tmpResult2.isOptInEnabledForGuild(guild.id)) {
          const obj2 = { reason: "opt-in-channels", guild };
        } else if (UserGuildSettingsStore.isFavorite(guild.id, getGuildId.id)) {
          const obj3 = { reason: "pinned-channel", guild };
        }
        tmpResult2 = tmp(7143);
      }
      tmpResult = tmp(10659);
    }
    return { reason: "no-permission" };
  }
  obj = FavoritesUtils;
};
