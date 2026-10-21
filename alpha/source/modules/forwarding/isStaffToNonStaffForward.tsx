// Module ID: 12798
// Function ID: 12799
// Name: isStaffToNonStaffForward
// Dependencies: [4821, 4843, 1392, 1087, 2]
// Exports: default

// Module 12798 (isStaffToNonStaffForward)
import Constants from "Constants" /* 1087 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let user;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const f115164 = (item) => {
    user = user.getUser(item);
    const tmp = null != user && user.isStaff();
    return tmp;
  };
  const f115165 = (item) => {
    channel = channel.getChannel(item);
    let tmp = null != channel;
    if (tmp) {
      let tmp3 = !channel.isPrivate();
      channel.isPrivate();
      if (tmp3) {
        let everyResult;
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          everyResult = recipients.every(f115164);
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
        everyResult = recipients.every(f115164);
      } else {
        let guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      tmp4 = everyResult && arr.some(f115165);
      const someResult = everyResult && arr.some(f115165);
    }
    return tmp4;
  } else {
    return false;
  }
};
