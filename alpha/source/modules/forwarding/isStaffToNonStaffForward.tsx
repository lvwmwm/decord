// Module ID: 11514
// Function ID: 11515
// Name: isStaffToNonStaffForward
// Dependencies: [2064, 2086, 1390, 1085, 2]
// Exports: default

// Module 11514 (isStaffToNonStaffForward)
import Constants from "Constants" /* 1085 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let user;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const f108527 = (item) => {
    user = user.getUser(item);
    const tmp = null != user && user.isStaff();
    return tmp;
  };
  const f108528 = (item) => {
    channel = channel.getChannel(item);
    let tmp = null != channel;
    if (tmp) {
      let tmp3 = !channel.isPrivate();
      channel.isPrivate();
      if (tmp3) {
        let everyResult;
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          everyResult = recipients.every(f108527);
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
        everyResult = recipients.every(f108527);
      } else {
        let guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      tmp4 = everyResult && arr.some(f108528);
      const someResult = everyResult && arr.some(f108528);
    }
    return tmp4;
  } else {
    return false;
  }
};
