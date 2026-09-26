// Module ID: 16684
// Function ID: 16685
// Name: GuildsBarDirectMessage
// Dependencies: [19, 502, 5527, 2041, 7904, 4437, 1372, 1074, 21, 4788, 576, 16636, 504, 9899, 1115, 16639, 4799, 11206, 16685, 11203, 1177, 5836, 2]

// Module 16684 (GuildsBarDirectMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9899 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5527 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7904 */;
import RelationshipStore from "RelationshipStore" /* 4437 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj = { dm: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.dm = size;
let closure_12 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default noop.memo(function GuildsBarDirectMessage(channelId) {
  channelId = channelId.channelId;
  let channel;
  const tmp = closure_12();
  let obj = channelId(channel[11]);
  const guildsBarAnimatedWrapperStyles = channelId(channel[11]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items = [GuildReadStateStore];
  const stateFromStores = channelId(channel[12]).useStateFromStores(items, () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count);
  let obj2 = channelId(channel[12]);
  const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
  const stateFromStoresObject = channelId(channel[12]).useStateFromStoresObject(items1, () => {
    channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === ChannelTypes.DM) {
      user = UserStore.getUser(channel.getRecipientId());
    }
    const call = CallStore.getCall(tmp);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      const obj3 = { channel, unread: stateFromStores > 0, mentionCount: stateFromStores, isIncomingCall: hasItem, isOngoingCall: tmp8 };
      let stringResult = getChannelA11yLabelDefault(obj3);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  let obj3 = channelId(channel[12]);
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = stateFromStores(channel[15])({ mentionCount: stateFromStores }));
  const memo = dmRecipient.useMemo(() => {
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp2;
    if (isDMResult) {
      let avatarSource;
      if (dmRecipient != null) {
        avatarSource = obj2.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
      obj2 = dmRecipient;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => ({
    onPress() {
      if (null != closure_1_2) {
        channelId(channel[16]).transitionToChannel(tmp.id);
        const obj = channelId(channel[16]);
      }
    },
    onLongPress() {
      if (null != closure_1_2) {
        const result = channelId(channel[17]).openChannelLongPressActionSheet(tmp.id);
        const obj = channelId(channel[17]);
      }
    }
  }), items3);
  let isMultiUserDMResult;
  const tmp8 = stateFromStores(channel[15])({ mentionCount: stateFromStores });
  if (channel != null) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  const obj4 = { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: memo1, cutouts, externalChildren: badge, expandedChildren: null, children: null };
  let tmp11Result = null;
  if (null != channel) {
    const obj5 = { channel };
    tmp11Result = tmp11(tmp7(tmp3[18]), obj5);
  }
  obj4.expandedChildren = tmp11Result;
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    const obj6 = { channel, size: tmp2(tmp3[20]).AvatarSizes.LARGE_48, pileSizeOverride: tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
    let tmp11Result2 = tmp11(tmp7(tmp3[19]), obj6);
    const tmp7Result = tmp7(tmp3[19]);
  } else {
    tmp11Result2 = null;
    if (null != memo) {
      const obj7 = { style: tmp.dm, source: memo };
      tmp11Result2 = tmp11(tmp7(tmp3[21]), obj7);
    }
  }
  obj4.children = tmp11Result2;
  return jsx(stateFromStores(channel[11]), { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: memo1, cutouts, externalChildren: badge, expandedChildren: null, children: null });
});
