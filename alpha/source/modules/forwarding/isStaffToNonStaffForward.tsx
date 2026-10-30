// Module ID: 13338
// Function ID: 13339
// Name: isStaffToNonStaffForward
// Dependencies: [4858, 4880, 1384, 1072, 2]
// Exports: default

// Module 13338 (isStaffToNonStaffForward)
import Constants from "Constants" /* 1072 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let user;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const f104167 = (item) => {
    user = user.getUser(item);
    const tmp = null != user && user.isStaff();
    return tmp;
  };
  const f104168 = (item) => {
    channel = channel.getChannel(item);
    let tmp = null != channel;
    if (tmp) {
      let tmp3 = !channel.isPrivate();
      channel.isPrivate();
      if (tmp3) {
        let everyResult;
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          everyResult = recipients.every(f104167);
        } else {
          guild = guild.getGuild(channel.guild_id);
          everyResult = null != guild;
          if (everyResult) {
            const features = guild.features;
            everyResult = features.has(constants.INTERNAL_EMPLOYEE_ONLY);
          }
        }
        tmp3 = !everyResult;
      }
      tmp = tmp3;
    }
    return tmp;
  };
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    let tmp3 = ChannelStore;
    let channel = ChannelStore.getChannel(channel_id.channel_id);
    let tmp4 = null != channel;
    if (tmp4) {
      let everyResult;
      if (channel.isPrivate()) {
        let recipients = channel.recipients;
        everyResult = recipients.every(f104167);
      } else {
        let guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      tmp4 = everyResult && arr.some(f104168);
      const someResult = everyResult && arr.some(f104168);
    }
    return tmp4;
  } else {
    return false;
  }
};
