// Module ID: 7732
// Function ID: 61479
// Name: createGuildBreadcrumb
// Dependencies: [6, 7, 7733, 1348, 1838, 3758, 3767, 1849, 1392, 1212, 3800, 4320, 5679, 2]
// Exports: maybeCreateSingleForwardForMessage

// Module 7732 (createGuildBreadcrumb)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

const require = arg1;
function createGuildBreadcrumb(id, timestamp) {
  let obj = { originLabel: id.name };
  obj = { id: id.id, size: 16, icon: id.icon, canAnimate: false };
  obj.originIconUrl = importDefault(1392).getGuildIconURL(obj);
  obj.timestampLabel = timestamp;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { origin: id.name, timestamp };
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["+l04BN"], obj);
  return obj;
}
function createChannelBreadcrumb(origin, timestamp) {
  let obj = { originLabel: origin, timestampLabel: timestamp };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { origin, timestamp };
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["+l04BN"], obj);
  return obj;
}
let tmp2 = (() => {
  class MessageForward {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_3(this, MessageForward);
      this.parentMessage = arg0;
      this.messageSnapshot = arg1;
      this.snapshotIndex = arg2;
      return;
    }
  }
  const items = [
    {
      key: "getForwardInfo",
      value(arg0, closure_14, _createForOfIteratorHelperLoose) {
        let parentMessage;
        let snapshotIndex;
        let obj = arg0;
        let tmp = closure_14;
        let tmp2 = _createForOfIteratorHelperLoose;
        let obj1 = arg3;
        let obj2 = arg4;
        let obj3 = arg5;
        const self = this;
        if (arg0 === undefined) {
          obj = outer1_6;
        }
        if (tmp === undefined) {
          tmp = outer1_10;
        }
        if (tmp2 === undefined) {
          tmp2 = outer1_9;
        }
        if (obj1 === undefined) {
          obj1 = outer1_8;
        }
        if (obj2 === undefined) {
          obj2 = outer1_7;
        }
        if (obj3 === undefined) {
          obj3 = outer1_5;
        }
        ({ snapshotIndex, parentMessage } = self);
        let obj4 = MessageForward(outer1_2[10]);
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
                obj = { snapshotIndex, footerInfo: outer1_12(guild, result) };
              }
              return obj;
            } else {
              if (obj1.can(channel1.accessPermissions, channel1)) {
                obj1 = { snapshotIndex };
                const obj11 = MessageForward(outer1_2[11]);
                obj1.footerInfo = outer1_13(obj11.computeChannelName(channel1, tmp, tmp2, true), result);
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
            obj5 = { snapshotIndex, footerInfo: outer1_12(guild1, result) };
          }
          return obj5;
        }
      }
    }
  ];
  return callback(MessageForward, items);
})();
let closure_11 = tmp2;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export const MessageForward = tmp2;
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (importDefault(5679)(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      const prototype = tmp2.prototype;
      const tmp8 = new tmp2(message, first, 0);
      return tmp8;
    }
  }
};
