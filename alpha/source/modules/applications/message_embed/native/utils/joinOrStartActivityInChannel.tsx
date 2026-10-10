// Module ID: 11611
// Function ID: 11612
// Name: joinOrStartActivityInChannel
// Dependencies: [5, 2064, 2065, 2116, 10824, 10853, 2]
// Exports: joinOrStartActivityInChannel

// Module 11611 (joinOrStartActivityInChannel)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import size from "module_2" /* 2 */;

let analyticsLocations, applicationId, channelId, customId, guild_id, length, referrerId;

let obj = function _joinOrStartActivityInChannel() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let selfEmbeddedActivityForChannel;
          let voiceChannelId;
          let closure_8;
          let compositeInstanceId;
          c5 = 2;
          if (0 === referrerId) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp2;
              applicationId = undefined;
              channelId = undefined;
              analyticsLocations = undefined;
              customId = undefined;
              ({ appId: c0, channelId: c1, analyticsLocations: c2, customId: c3, referrerId: c4 } = closure_0);
              selfEmbeddedActivityForChannel = undefined;
              voiceChannelId = undefined;
              guild_id = undefined;
              closure_8 = undefined;
              length = undefined;
              compositeInstanceId = undefined;
              referrerId = 1;
              c5 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              selfEmbeddedActivityForChannel = closure_131_4.getSelfEmbeddedActivityForChannel(channelId);
              voiceChannelId = closure_131_6.getVoiceChannelId();
              applicationId = undefined;
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
                  closure_8 = channelId;
                  closure_131_1(closure_131_2[4])(closure_8, selfEmbeddedActivityForChannel.location);
                  c5 = 3;
                  return { value: true, done: true };
                }
              }
              const embeddedActivitiesForChannel = closure_131_4.getEmbeddedActivitiesForChannel(channelId);
              length = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === applicationId);
              compositeInstanceId = undefined;
              if (length.length > 0) {
                compositeInstanceId = length[0].compositeInstanceId;
              }
              const obj6 = { channelId, applicationId, isStart: null == compositeInstanceId, analyticsLocations, customId, referrerId };
              referrerId = 2;
              c5 = 1;
              const obj7 = { value: obj3.runPrimaryAppCommandOrJoinEmbeddedActivity(obj6), done: false };
              obj3 = closure_131_0(closure_131_2[5]);
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp40) {
          c5 = 3;
          throw tmp40;
        }
      }
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
