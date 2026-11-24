// Module ID: 10074
// Function ID: 10075
// Name: isStaffToNonStaffForward
// Dependencies: [4762, 4784, 1386, 1071, 2]
// Exports: default

// Module 10074 (isStaffToNonStaffForward)
import Constants from "Constants" /* 1071 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildStore from "GuildStore" /* 4784 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let user;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const f96583 = (item) => {
    user = user.getUser(item);
    const tmp = null != user && user.isStaff();
    return tmp;
  };
  const f96584 = (item) => {
    channel = channel.getChannel(item);
    let tmp = null != channel;
    if (tmp) {
      let tmp3 = !channel.isPrivate();
      channel.isPrivate();
      if (tmp3) {
        let everyResult;
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          everyResult = recipients.every(f96583);
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
        everyResult = recipients.every(f96583);
      } else {
        let guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      tmp4 = everyResult && arr.some(f96584);
      const someResult = everyResult && arr.some(f96584);
    }
    return tmp4;
  } else {
    return false;
  }
};
