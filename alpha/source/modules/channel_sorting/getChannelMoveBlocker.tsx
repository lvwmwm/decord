// Module ID: 13816
// Function ID: 13817
// Name: getChannelMoveBlocker
// Dependencies: [4694, 6460, 4697, 13817, 6571, 2]
// Exports: default

// Module 13816 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 4697 */;
import isOptInEnabled from "isOptInEnabled" /* 6571 */;
import canManageChannelList from "canManageChannelList" /* 13817 */;
import GuildStore from "GuildStore" /* 4694 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6460 */;
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
