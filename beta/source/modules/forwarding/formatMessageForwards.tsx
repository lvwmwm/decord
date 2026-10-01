// Module ID: 7396
// Function ID: 7397
// Name: formatMessageForwards
// Dependencies: [7397, 2045, 2067, 4469, 4479, 1372, 1397, 1115, 4512, 4989, 6720, 2]
// Exports: maybeCreateSingleForwardForMessage

// Module 7396 (formatMessageForwards)
import intl4 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import DateUtils from "DateUtils" /* 4512 */;
import useChannelName from "useChannelName" /* 4989 */;
import isForwardMessageDefault from "isForwardMessage" /* 6720 */;
import BasicGuildStore from "BasicGuildStore" /* 7397 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

class MessageForward {
  constructor(parentMessage, messageSnapshot, snapshotIndex) {
    const obj = Object.create(new.target.prototype);
    obj.parentMessage = parentMessage;
    obj.messageSnapshot = messageSnapshot;
    obj.snapshotIndex = snapshotIndex;
    return obj;
  }
  getForwardInfo(arg0, UserStore, RelationshipStore) {
    let intl;
    let intl2;
    let intl3;
    let obj10;
    let obj12;
    let obj13;
    let obj17;
    let obj20;
    let obj21;
    let obj23;
    let obj38;
    let obj8;
    let obj9;
    let parentMessage;
    let snapshotIndex;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = ChannelStore;
    }
    let tmp = UserStore;
    if (UserStore === undefined) {
      tmp = UserStore;
    }
    let tmp2 = RelationshipStore;
    if (RelationshipStore === undefined) {
      tmp2 = RelationshipStore;
    }
    let obj2 = arg3;
    if (arg3 === undefined) {
      obj2 = PermissionStore;
    }
    let obj3 = arg4;
    if (arg4 === undefined) {
      obj3 = GuildStore;
    }
    let obj4 = arg5;
    if (arg5 === undefined) {
      obj4 = BasicGuildStore;
    }
    ({ snapshotIndex, parentMessage } = this);
    const messageSnapshot = this.messageSnapshot;
    const obj5 = DateUtils;
    const result = obj5.calendarFormatCompact(messageSnapshot.message.timestamp);
    const channel = obj.getChannel(this.parentMessage.channel_id);
    if (null != channel) {
      const messageReference = parentMessage.messageReference;
      let guild_id1;
      const guild_id = channel.guild_id;
      if (messageReference != null) {
        guild_id1 = messageReference.guild_id;
      }
      if (guild_id === guild_id1) {
        const messageReference3 = parentMessage.messageReference;
        let channel_id;
        const getChannel = obj.getChannel;
        if (messageReference3 != null) {
          channel_id = messageReference3.channel_id;
        }
        const channel1 = getChannel(channel_id);
        if (null == channel1) {
          let obj7;
          const guild = obj3.getGuild(channel.guild_id);
          if (null == guild) {
            obj7 = { snapshotIndex };
            const obj6 = { snapshotIndex };
          } else {
            obj7 = { snapshotIndex, footerInfo: obj8 };
            obj8 = { originLabel: guild.name, originIconUrl: obj21.getGuildIconURL(obj9), timestampLabel: result, accessibilityLabel: intl3.formatToPlainString(intl4.t["+l04BN"], obj10) };
            obj9 = { id: null, size: 16, icon: null, canAnimate: false };
            ({ id: obj22.id, icon: obj22.icon } = guild);
            obj21 = AvatarUtilsDefault;
            intl3 = tmp3(1115).intl;
            obj10 = { origin: guild.name, timestamp: result };
          }
          return obj7;
        } else {
          let obj14;
          if (obj2.can(channel1.accessPermissions, channel1)) {
            const obj11 = { snapshotIndex, footerInfo: obj12 };
            const tmp3Result = useChannelName;
            const channelName = tmp3Result.computeChannelName(channel1, tmp, tmp2, true);
            obj12 = { originLabel: channelName, timestampLabel: result, accessibilityLabel: intl.formatToPlainString(intl4.t["+l04BN"], obj13) };
            intl = tmp3(1115).intl;
            obj14 = obj11;
            obj13 = { origin: channelName, timestamp: result };
          } else {
            obj14 = { snapshotIndex };
          }
          return obj14;
        }
      }
    }
    const messageReference2 = parentMessage.messageReference;
    let guild_id2;
    if (messageReference2 != null) {
      guild_id2 = messageReference2.guild_id;
    }
    if (null == guild_id2) {
      return { snapshotIndex };
    } else {
      let obj19;
      let guild1 = obj3.getGuild(guild_id2);
      if (guild1 == null) {
        guild1 = obj4.getGuild(guild_id2);
      }
      if (null == guild1) {
        obj19 = { snapshotIndex };
        const obj16 = { snapshotIndex };
      } else {
        obj19 = { snapshotIndex, footerInfo: obj20 };
        obj20 = { originLabel: guild1.name, originIconUrl: obj17.getGuildIconURL(obj23), timestampLabel: result, accessibilityLabel: intl2.formatToPlainString(intl4.t["+l04BN"], obj38) };
        obj23 = { id: null, size: 16, icon: null, canAnimate: false };
        ({ id: obj18.id, icon: obj18.icon } = guild1);
        obj17 = AvatarUtilsDefault;
        intl2 = tmp3(1115).intl;
        obj38 = { origin: guild1.name, timestamp: result };
      }
      return obj19;
    }
  }
}
const prototype = MessageForward.prototype;
let result = size.fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export { MessageForward };
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (isForwardMessageDefault(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      const self = this;
      if (typeof MessageForward === "function") {
        const obj = Object.create(MessageForward.prototype);
        obj.parentMessage = message;
        obj.messageSnapshot = first;
        obj.snapshotIndex = 0;
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
};
