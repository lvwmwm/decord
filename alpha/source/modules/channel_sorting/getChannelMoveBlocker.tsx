// Module ID: 14093
// Function ID: 14094
// Name: getChannelMoveBlocker
// Dependencies: [4878, 6739, 4881, 14094, 6849, 2]
// Exports: default

// Module 14093 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 4881 */;
import isOptInEnabled from "isOptInEnabled" /* 6849 */;
import canManageChannelList from "canManageChannelList" /* 14094 */;
import GuildStore from "GuildStore" /* 4878 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6739 */;
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
