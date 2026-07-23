// Module ID: 14870
// Function ID: 113398
// Dependencies: [31, 1194, 4809, 1348, 6879, 3767, 1849, 653, 33, 4130, 689, 14823, 566, 8450, 1212, 14825, 4138, 9099, 14871, 9096, 1273, 5085, 2]

// Module 14870
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.dm = obj;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarDirectMessage(channelId) {
  let badge;
  let cutouts;
  channelId = channelId.channelId;
  let obj = channelId(channel[11]);
  let tmp = callback();
  let obj1 = channelId(channel[12]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getMentionCountForPrivateChannel(channelId).count);
  let obj2 = channelId(channel[12]);
  const items1 = [closure_6, closure_9, closure_8, closure_5, _isNativeReflectConstruct];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const channel = outer1_6.getChannel(channelId);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    let user;
    if (type === outer1_10.DM) {
      user = outer1_9.getUser(channel.getRecipientId());
    }
    const call = outer1_5.getCall(channelId);
    const id = outer1_4.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    let obj = { channel, dmRecipient: user };
    if (null != channel) {
      obj = { channel, unread: stateFromStores > 0, mentionCount: stateFromStores, isIncomingCall: hasItem, isOngoingCall: tmp7 };
      let stringResult = stateFromStores(channel[13])(obj);
    } else {
      const intl = channelId(channel[14]).intl;
      stringResult = intl.string(channelId(channel[14]).t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = stateFromStores(channel[15])({ mentionCount: stateFromStores }));
  const memo = dmRecipient.useMemo(() => {
    let tmp;
    if (null != channel) {
      if (channel.isDM()) {
        let avatarSource;
        if (null != dmRecipient) {
          avatarSource = dmRecipient.getAvatarSource(undefined);
        }
        tmp = avatarSource;
      }
    }
    return tmp;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => ({
    onPress() {
      if (null != outer1_2) {
        channelId(channel[16]).transitionToChannel(outer1_2.id);
        const obj = channelId(channel[16]);
      }
    },
    onLongPress() {
      if (null != outer1_2) {
        const result = channelId(channel[17]).openChannelLongPressActionSheet(outer1_2.id);
        const obj = channelId(channel[17]);
      }
    }
  }), items3);
  obj = { selected: false, circle: null, unread: true };
  let isMultiUserDMResult = null != channel;
  const tmp5 = stateFromStores(channel[15])({ mentionCount: stateFromStores });
  const tmp8 = jsx;
  if (isMultiUserDMResult) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  obj.circle = !isMultiUserDMResult;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.label = stateFromStoresObject.label;
  obj.overState = undefined;
  obj.config = memo1;
  obj.cutouts = cutouts;
  obj.externalChildren = badge;
  let tmp11 = null;
  if (null != channel) {
    obj = { channel };
    tmp11 = jsx(stateFromStores(channel[18]), { channel });
  }
  obj.expandedChildren = tmp11;
  if (null != channel) {
    if (channel.isMultiUserDM()) {
      obj1 = { channel, size: channelId(channel[20]).AvatarSizes.LARGE_48, pileSizeOverride: channelId(channel[20]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
      let tmp15 = jsx(stateFromStores(channel[19]), { channel, size: channelId(channel[20]).AvatarSizes.LARGE_48, pileSizeOverride: channelId(channel[20]).AvatarSizes.REFRESH_MEDIUM_32, animate: true });
      const tmp22 = stateFromStores(channel[19]);
    }
    obj.children = tmp15;
    return tmp8(tmp9, obj);
  }
  tmp15 = null;
  if (null != memo) {
    obj2 = { style: tmp.dm, source: memo };
    tmp15 = jsx(stateFromStores(channel[21]), { style: tmp.dm, source: memo });
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;
