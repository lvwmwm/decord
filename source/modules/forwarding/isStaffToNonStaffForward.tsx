// Module ID: 9908
// Function ID: 76664
// Name: isStaffChannel
// Dependencies: [1348, 1838, 1849, 653, 2]
// Exports: default

// Module 9908 (isStaffChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_2 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

function isStaffChannel(channel) {
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    return recipients.every((arg0) => {
      const user = outer1_2.getUser(arg0);
      return null != user && user.isStaff();
    });
  } else {
    guild = guild.getGuild(channel.guild_id);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return hasItem;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.isStaff()) {
      channel = channel.getChannel(channel_id.channel_id);
      let tmp4 = null != channel;
      if (tmp4) {
        const tmp6 = !isStaffChannel(channel);
        let someResult = !tmp6;
        if (!tmp6) {
          someResult = arr.some((channelId) => {
            const channel = outer1_0.getChannel(channelId);
            let tmp = null != channel;
            if (tmp) {
              let tmp2 = !channel.isPrivate();
              if (tmp2) {
                tmp2 = !outer1_4(channel);
              }
              tmp = tmp2;
            }
            return tmp;
          });
        }
        tmp4 = someResult;
      }
      return tmp4;
    }
  }
  return false;
};
