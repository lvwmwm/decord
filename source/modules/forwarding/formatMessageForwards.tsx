// Module ID: 7632
// Function ID: 61122
// Name: createGuildBreadcrumb
// Dependencies: []
// Exports: maybeCreateSingleForwardForMessage

// Module 7632 (createGuildBreadcrumb)
function createGuildBreadcrumb(id, timestamp) {
  let obj = { originLabel: id.name };
  obj = { id: id.id, size: 16, icon: id.icon, canAnimate: false };
  obj.originIconUrl = importDefault(dependencyMap[8]).getGuildIconURL(obj);
  obj.timestampLabel = timestamp;
  const intl = timestamp(dependencyMap[9]).intl;
  obj = { origin: id.name, timestamp };
  obj.accessibilityLabel = intl.formatToPlainString(timestamp(dependencyMap[9]).t.+l04BN, obj);
  return obj;
}
function createChannelBreadcrumb(origin, timestamp) {
  let obj = { originLabel: origin, timestampLabel: timestamp };
  const intl = timestamp(dependencyMap[9]).intl;
  obj = { origin, timestamp };
  obj.accessibilityLabel = intl.formatToPlainString(timestamp(dependencyMap[9]).t.+l04BN, obj);
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const tmp2 = () => {
  class MessageForward {
    constructor(arg0, arg1, arg2) {
      tmp = closure_3(this, MessageForward);
      this.parentMessage = arg0;
      this.messageSnapshot = arg1;
      this.snapshotIndex = arg2;
      return;
    }
  }
  const arg1 = MessageForward;
  const items = [
    {
      key: "getForwardInfo",
      value(arg0, closure_11, closure_12) {
        let parentMessage;
        let snapshotIndex;
        let obj = arg0;
        let tmp = closure_11;
        let tmp2 = closure_12;
        let obj1 = arg3;
        let obj2 = arg4;
        let obj3 = arg5;
        const self = this;
        if (arg0 === undefined) {
          obj = closure_6;
        }
        if (tmp === undefined) {
          tmp = closure_10;
        }
        if (tmp2 === undefined) {
          tmp2 = closure_9;
        }
        if (obj1 === undefined) {
          obj1 = closure_8;
        }
        if (obj2 === undefined) {
          obj2 = closure_7;
        }
        if (obj3 === undefined) {
          obj3 = closure_5;
        }
        ({ snapshotIndex, parentMessage } = self);
        let obj4 = MessageForward(closure_2[10]);
        const result = obj4.calendarFormatCompact(self.messageSnapshot.message.timestamp);
        const channel = obj.getChannel(self.parentMessage.channel_id);
        if (null != channel) {
          const messageReference = parentMessage.messageReference;
          let guild_id;
          if (null != messageReference) {
            guild_id = messageReference.guild_id;
          }
          if (channel.guild_id === guild_id) {
            const messageReference3 = parentMessage.messageReference;
            let channel_id;
            if (null != messageReference3) {
              channel_id = messageReference3.channel_id;
            }
            const channel1 = obj.getChannel(channel_id);
            if (null == channel1) {
              const guild = obj2.getGuild(channel.guild_id);
              if (null == guild) {
                obj = { snapshotIndex };
              } else {
                obj = { snapshotIndex, footerInfo: callback2(guild, result) };
              }
              return obj;
            } else {
              if (obj1.can(channel1.accessPermissions, channel1)) {
                obj1 = { snapshotIndex };
                const obj11 = MessageForward(closure_2[11]);
                obj1.footerInfo = callback3(obj11.computeChannelName(channel1, tmp, tmp2, true), result);
                obj2 = obj1;
              } else {
                obj2 = { snapshotIndex };
              }
              return obj2;
            }
          }
        }
        const messageReference2 = parentMessage.messageReference;
        let guild_id1;
        if (null != messageReference2) {
          guild_id1 = messageReference2.guild_id;
        }
        if (null == guild_id1) {
          obj3 = { snapshotIndex };
          return obj3;
        } else {
          let guild1 = obj2.getGuild(guild_id1);
          if (null == guild1) {
            guild1 = obj3.getGuild(guild_id1);
          }
          if (null == guild1) {
            obj4 = { snapshotIndex };
            let obj5 = obj4;
          } else {
            obj5 = { snapshotIndex, footerInfo: callback2(guild1, result) };
          }
          return obj5;
        }
      }
    }
  ];
  return callback(MessageForward, items);
}();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export const MessageForward = tmp2;
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (importDefault(dependencyMap[12])(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      const prototype = tmp2.prototype;
      const tmp8 = new tmp2(message, first, 0);
      return tmp8;
    }
  }
};
