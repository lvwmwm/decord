// Module ID: 13890
// Function ID: 13891
// Name: getChannelMoveBlocker
// Dependencies: [4784, 6552, 4787, 13891, 6663, 2]
// Exports: default

// Module 13890 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import isOptInEnabled from "isOptInEnabled" /* 6663 */;
import canManageChannelList from "canManageChannelList" /* 13891 */;
import GuildStore from "GuildStore" /* 4784 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
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
