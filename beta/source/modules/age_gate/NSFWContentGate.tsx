// Module ID: 5943
// Function ID: 5944
// Name: NSFWContentGate
// Dependencies: [2083, 2087, 1390, 2]
// Exports: currentUserCanSeeNSFW, isChannelOrGuildNSFW, isNSFWActivityVisible, userCannotSeeNSFWContent

// Module 5943 (NSFWContentGate)
import GuildRecord from "GuildRecord" /* 2083 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const isGuildNSFW = GuildRecord.isGuildNSFW;
const result = size.fileFinishedImporting("modules/age_gate/NSFWContentGate.tsx");

export const isChannelOrGuildNSFW = function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
  }
  return tmp;
};
export const currentUserCanSeeNSFW = function currentUserCanSeeNSFW() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return true === nsfwAllowed;
};
export const userCannotSeeNSFWContent = function userCannotSeeNSFWContent(channel) {
  let tmp = null != channel;
  if (tmp) {
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
      const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    if (tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      tmp2 = true !== nsfwAllowed;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isNSFWActivityVisible = function isNSFWActivityVisible(channel, userCanSeeNSFW) {
  let tmp = null == channel;
  if (!tmp) {
    userCanSeeNSFW = undefined;
    if (userCanSeeNSFW != null) {
      userCanSeeNSFW = userCanSeeNSFW.userCanSeeNSFW;
    }
    if (userCanSeeNSFW == null) {
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      userCanSeeNSFW = true === nsfwAllowed;
    }
    let tmp7 = userCanSeeNSFW;
    if (!tmp7) {
      let tmp8 = true !== channel.nsfw;
      if (tmp8) {
        let guildIsNSFW;
        if (userCanSeeNSFW != null) {
          guildIsNSFW = userCanSeeNSFW.guildIsNSFW;
        }
        if (guildIsNSFW == null) {
          guildIsNSFW = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
        }
        tmp8 = !guildIsNSFW;
      }
      tmp7 = tmp8;
    }
    tmp = tmp7;
  }
  return tmp;
};
