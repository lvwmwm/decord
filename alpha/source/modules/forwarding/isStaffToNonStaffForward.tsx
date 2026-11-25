// Module ID: 8922
// Function ID: 8923
// Name: isStaffToNonStaffForward
// Dependencies: [4861, 4883, 1386, 1071, 2]
// Exports: default

// Module 8922 (isStaffToNonStaffForward)
import Constants from "Constants" /* 1071 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildStore from "GuildStore" /* 4883 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let user;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const f94331 = (item) => {
    user = user.getUser(item);
    const tmp = null != user && user.isStaff();
    return tmp;
  };
  const f94332 = (item) => {
    channel = channel.getChannel(item);
    let tmp = null != channel;
    if (tmp) {
      let tmp3 = !channel.isPrivate();
      channel.isPrivate();
      if (tmp3) {
        let everyResult;
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          everyResult = recipients.every(f94331);
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
        everyResult = recipients.every(f94331);
      } else {
        let guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      tmp4 = everyResult && arr.some(f94332);
      const someResult = everyResult && arr.some(f94332);
    }
    return tmp4;
  } else {
    return false;
  }
};
