// Module ID: 12697
// Function ID: 12698
// Name: getChannelMoveBlocker
// Dependencies: [2087, 5966, 2090, 12698, 6076, 2]
// Exports: default

// Module 12697 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import isOptInEnabled from "isOptInEnabled" /* 6076 */;
import canManageChannelList from "canManageChannelList" /* 12698 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
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
