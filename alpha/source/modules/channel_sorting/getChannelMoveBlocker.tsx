// Module ID: 15053
// Function ID: 15054
// Name: getChannelMoveBlocker
// Dependencies: [5114, 6895, 5117, 15054, 6996, 2]
// Exports: default

// Module 15053 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import isOptInEnabled from "isOptInEnabled" /* 6996 */;
import canManageChannelList from "canManageChannelList" /* 15054 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6895 */;
import size from "module_2" /* 2 */;

const canManageChannelListDefault = canManageChannelList;

const result = size.fileFinishedImporting("modules/channel_sorting/getChannelMoveBlocker.tsx");

export default function getChannelMoveBlocker(getGuildId, guildId) {
  const obj = FavoritesUtils;
  if (obj.isFavoritesGuildId(guildId)) {
    return null;
  } else {
    const guild = GuildStore.getGuild(getGuildId.getGuildId());
    if (null != guild) {
      let obj4;
      const tmp8 = canManageChannelListDefault;
      const tmpResult = canManageChannelList;
      if (tmp8(tmpResult.getContainingCategory(getGuildId), guild)) {
        let tmp10;
        const tmpResult2 = isOptInEnabled;
        if (tmpResult2.isOptInEnabledForGuild(guild.id)) {
          tmp10 = { reason: "opt-in-channels", guild };
          const obj2 = { reason: "opt-in-channels", guild };
        } else {
          tmp10 = null;
          if (UserGuildSettingsStore.isFavorite(guild.id, getGuildId.id)) {
            tmp10 = { reason: "pinned-channel", guild };
            const obj3 = { reason: "pinned-channel", guild };
          }
        }
        obj4 = tmp10;
      }
      return obj4;
    }
    obj4 = { reason: "no-permission" };
  }
};
