// Module ID: 11556
// Function ID: 11557
// Name: joinOrStartActivityInChannel
// Dependencies: [5, 2050, 2051, 2103, 9049, 8993, 8990, 2]
// Exports: joinOrStartActivityInChannel

// Module 11556 (joinOrStartActivityInChannel)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let applicationId, channelId, guild_id, length;

let obj = function _joinOrStartActivityInChannel() {
  obj = _asyncToGenerator(async (applicationId) => {
    let analyticsLocations;
    let customId;
    let referrerId;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let compositeInstanceId;
      ({ appId: c0, channelId: c1, analyticsLocations: c2, customId: c3, referrerId: c4 } = closure_0);
      await "Reflect";
      const selfEmbeddedActivityForChannel = closure_131_4.getSelfEmbeddedActivityForChannel(channelId);
      const voiceChannelId = closure_131_6.getVoiceChannelId();
      if (selfEmbeddedActivityForChannel != null) {
        applicationId = selfEmbeddedActivityForChannel.applicationId;
      }
      if (applicationId === applicationId) {
        if (voiceChannelId === channelId) {
          closure_131_5.getChannel(channelId);
          guild_id = undefined;
          if (guild_id != null) {
            guild_id = guild_id.guild_id;
          }
          channelId = guild_id;
          if (guild_id == null) {
            channelId = null;
          }
          let closure_8 = channelId;
          closure_131_1(closure_131_2[4])(closure_8, selfEmbeddedActivityForChannel.location);
          c5 = 3;
          return { value: true, done: true };
        }
      }
      const embeddedActivitiesForChannel = closure_131_4.getEmbeddedActivitiesForChannel(channelId);
      length = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === applicationId);
      if (length.length > 0) {
        compositeInstanceId = length[0].compositeInstanceId;
      }
      const obj5 = { channelId, applicationId, isStart: null == compositeInstanceId, embeddedActivitiesManager: closure_131_1(closure_131_2[6])(), analyticsLocations, customId, referrerId };
      const runPrimaryAppCommandOrJoinEmbeddedActivity = closure_131_0(closure_131_2[5]).runPrimaryAppCommandOrJoinEmbeddedActivity;
      closure_131_0(closure_131_2[5]);
      await runPrimaryAppCommandOrJoinEmbeddedActivity(obj5);
      return value;
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx");

export const joinOrStartActivityInChannel = function joinOrStartActivityInChannel() {
  return obj(...arguments);
};
