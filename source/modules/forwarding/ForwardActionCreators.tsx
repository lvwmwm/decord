// Module ID: 7081
// Function ID: 56709
// Dependencies: []

// Module 7081
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const MessageFlags = arg1(dependencyMap[4]).MessageFlags;
const MessageSendLocation = arg1(dependencyMap[5]).MessageSendLocation;
const obj = {
  sendForward(messageRecord, alsoForwardToChannelId, arg2) {
    alsoForwardToChannelId = messageRecord;
    const importDefault = alsoForwardToChannelId;
    const dependencyMap = arg2;
    return callback(async () => {
      const channel = store.getChannel(callback);
      const channel1 = store.getChannel(lib.channel_id);
      if (null != closure_2) {
        if (closure_2.isICYMIGameContentForwarding) {
          let guild_id = lib(closure_2[6]).GAME_CONTENT_GUILD_ID;
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
          const parsed = callback(closure_2[7]).parse(channel, "");
          let obj = { guild_id };
          ({ channel_id: obj10.channel_id, id: obj10.message_id } = lib);
          obj.type = lib(closure_2[8]).MessageReferenceTypes.FORWARD;
          let onlyAttachmentIds;
          if (null != closure_2) {
            onlyAttachmentIds = closure_2.onlyAttachmentIds;
          }
          if (null != onlyAttachmentIds) {
            obj = {};
            ({ onlyAttachmentIds: obj.attachment_ids, onlyEmbedIndices: obj.embed_indices } = closure_2);
            const tmp11 = obj;
          } else {
            let onlyEmbedIndices;
            if (null != closure_2) {
              onlyEmbedIndices = closure_2.onlyEmbedIndices;
            }
          }
          obj.forward_only = tmp11;
          let withMessage;
          if (null != closure_2) {
            withMessage = closure_2.withMessage;
          }
          let num3 = 0;
          let tmp16 = withMessage;
          if (null != withMessage) {
            num3 = 0;
            tmp16 = withMessage;
            if (tmp20[0]) {
              let obj1 = lib(closure_2[10]);
              num3 = obj1.addFlag(0, constants.SUPPRESS_NOTIFICATIONS);
              tmp16 = tmp21;
            }
            const tmp20 = callback2(callback(closure_2[9])(withMessage), 2);
          }
          const obj3 = callback(closure_2[11]);
          obj = {};
          obj.messageReference = obj;
          obj.location = constants2.FORWARDING;
          obj.eagerDispatch = false;
          obj.flags = num3;
          yield obj3.sendMessage(channel.id, parsed, false, obj);
          let result = null == tmp16 || "" === tmp16;
          if (!result) {
            result = lib(closure_2[12]).isRatelimitedInChannel(channel, closure_6);
            const obj5 = lib(closure_2[12]);
          }
          if (!result) {
            const obj6 = callback(closure_2[11]);
            const id = channel.id;
            obj1 = { location: constants2.FORWARDING, flags: num3 };
            return yield obj6.sendMessage(id, callback(closure_2[7]).parse(channel, tmp16), false, obj1);
          }
          const obj9 = callback(closure_2[7]);
        }
      }
      if (null != channel1) {
        guild_id = channel1.guild_id;
      }
    })();
  },
  sendForwards(arg0, found, arg2) {
    found = arg0;
    const importDefault = arg2;
    return importDefault(dependencyMap[13])(found.map((alsoForwardToChannelId) => closure_9.sendForward(alsoForwardToChannelId, alsoForwardToChannelId, arg2)));
  }
};
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/forwarding/ForwardActionCreators.tsx");

export default obj;
