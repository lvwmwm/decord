// Module ID: 7085
// Function ID: 56763
// Dependencies: [57, 5, 1348, 3758, 653, 4123, 7086, 6923, 671, 6924, 1360, 6691, 7087, 4370, 2]

// Module 7085
import _slicedToArray from "_slicedToArray";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
let obj = {
  sendForward(closure_0, alsoForwardToChannelId, closure_1) {
    closure_1 = alsoForwardToChannelId;
    let closure_2 = closure_1;
    return callback(async () => {
      const channel = outer2_5.getChannel(outer1_1);
      const channel1 = outer2_5.getChannel(outer1_0.channel_id);
      if (null != outer1_2) {
        if (outer1_2.isICYMIGameContentForwarding) {
          let guild_id = callback(7086).GAME_CONTENT_GUILD_ID;
        }
        if (null == channel1) {
          if (null == guild_id) {
            const _Error2 = Error;
            const error = new Error("Unable to find original channel for message");
            throw error;
          }
        }
        if (null == channel) {
          const _Error = Error;
          const error1 = new Error("Unable to find destination channel for message");
          throw error1;
        } else {
          const parsed = callback2(6923).parse(channel, "");
          let obj = { guild_id };
          ({ channel_id: obj10.channel_id, id: obj10.message_id } = outer1_0);
          obj.type = callback(671).MessageReferenceTypes.FORWARD;
          let onlyAttachmentIds;
          if (null != outer1_2) {
            onlyAttachmentIds = outer1_2.onlyAttachmentIds;
          }
          if (null != onlyAttachmentIds) {
            obj = {};
            ({ onlyAttachmentIds: obj.attachment_ids, onlyEmbedIndices: obj.embed_indices } = outer1_2);
            const tmp11 = obj;
          } else {
            let onlyEmbedIndices;
            if (null != outer1_2) {
              onlyEmbedIndices = outer1_2.onlyEmbedIndices;
            }
          }
          obj.forward_only = tmp11;
          let withMessage;
          if (null != outer1_2) {
            withMessage = outer1_2.withMessage;
          }
          let num3 = 0;
          let tmp16 = withMessage;
          if (null != withMessage) {
            num3 = 0;
            tmp16 = withMessage;
            if (tmp20[0]) {
              let obj1 = callback(1360);
              num3 = obj1.addFlag(0, outer2_7.SUPPRESS_NOTIFICATIONS);
              tmp16 = tmp21;
            }
            tmp20 = outer2_3(callback2(6924)(withMessage), 2);
          }
          const obj3 = callback2(6691);
          obj = {};
          obj.messageReference = obj;
          obj.location = outer2_8.FORWARDING;
          obj.eagerDispatch = false;
          obj.flags = num3;
          yield obj3.sendMessage(channel.id, parsed, false, obj);
          let result = null == tmp16 || "" === tmp16;
          if (!result) {
            result = callback(7087).isRatelimitedInChannel(channel, outer2_6);
            const obj5 = callback(7087);
          }
          if (!result) {
            const obj6 = callback2(6691);
            const id = channel.id;
            obj1 = { location: outer2_8.FORWARDING, flags: num3 };
            return yield obj6.sendMessage(id, callback2(6923).parse(channel, tmp16), false, obj1);
          }
          const obj9 = callback2(6923);
        }
      }
      if (null != channel1) {
        guild_id = channel1.guild_id;
      }
    })();
  },
  sendForwards(outer2_8, found, arg2) {
    let closure_0 = outer2_8;
    const importDefault = arg2;
    return importDefault(4370)(found.map((alsoForwardToChannelId) => outer1_9.sendForward(closure_0, alsoForwardToChannelId, closure_1)));
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forwarding/ForwardActionCreators.tsx");

export default obj;
