// Module ID: 9868
// Function ID: 76416
// Name: isStaffChannel
// Dependencies: [86966272, 578289664, 647561216, 647692288, 577830912]
// Exports: default

// Module 9868 (isStaffChannel)
function isStaffChannel(channel) {
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    return recipients.every((arg0) => {
      const user = user.getUser(arg0);
      return null != user && user.isStaff();
    });
  } else {
    const guild = guild.getGuild(channel.guild_id);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return hasItem;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.isStaff()) {
      const channel = channel.getChannel(channel_id.channel_id);
      let tmp4 = null != channel;
      if (tmp4) {
        const tmp6 = !isStaffChannel(channel);
        let someResult = !tmp6;
        if (!tmp6) {
          someResult = arr.some((channelId) => {
            const channel = channel.getChannel(channelId);
            let tmp = null != channel;
            if (tmp) {
              let tmp2 = !channel.isPrivate();
              if (tmp2) {
                tmp2 = !callback(channel);
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
