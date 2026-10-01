// Module ID: 15978
// Function ID: 15979
// Name: GuildsBarDirectMessage
// Dependencies: [19, 502, 5590, 2045, 7050, 4479, 1372, 1074, 21, 4836, 576, 15930, 504, 9060, 1115, 15933, 4847, 10374, 15979, 10371, 1177, 5899, 2]

// Module 15978 (GuildsBarDirectMessage)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9060 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5590 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
let obj = { dm: size };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_12 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildsBarDirectMessage(channelId) {
  let badge;
  let cutouts;
  let tmp11Result2;
  channelId = channelId.channelId;
  let channel;
  let tmp2 = channelId;
  const tmp = closure_12();
  let obj = channelId(channel[11]);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let obj2 = channelId(channel[12]);
  const items = [GuildReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count);
  let obj3 = channelId(channel[12]);
  const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let stringResult;
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
    const obj2 = CallStore;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { channel, dmRecipient: user, label: stringResult };
    const tmp8 = obj2.isCallActive(channelId) && !hasItem;
    if (null != channel) {
      const obj3 = { channel, unread: stateFromStores > 0, mentionCount: stateFromStores, isIncomingCall: hasItem, isOngoingCall: tmp8 };
      stringResult = getChannelA11yLabelDefault(obj3);
    } else {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.zLZPmk);
    }
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  const label = stateFromStoresObject.label;
  let tmp8 = stateFromStores(channel[15])({ mentionCount: stateFromStores });
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = tmp8);
  const memo = dmRecipient.useMemo(() => {
    let isDMResult;
    const obj = channel;
    if (channel != null) {
      isDMResult = obj.isDM();
    }
    let tmp2;
    if (isDMResult) {
      let avatarSource;
      const obj2 = dmRecipient;
      if (dmRecipient != null) {
        avatarSource = obj2.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => {
    let obj = {
      onPress() {
        if (null != closure_1_2) {
          const obj = channelId(channel[16]);
          obj.transitionToChannel(tmp.id);
        }
      },
      onLongPress() {
        if (null != closure_1_2) {
          const obj = channelId(channel[17]);
          const result = obj.openChannelLongPressActionSheet(tmp.id);
        }
      }
    };
    return obj;
  }, items3);
  let isMultiUserDMResult;
  stateFromStores(channel[11]);
  if (channel != null) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  let tmp11Result = null;
  if (null != channel) {
    const obj5 = { channel };
    tmp11Result = tmp11(tmp7(tmp3[18]), obj5);
  }
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    const obj6 = { channel, size: tmp2(channel[20]).AvatarSizes.LARGE_48, pileSizeOverride: tmp2(channel[20]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
    const tmp7Result = stateFromStores(channel[19]);
    tmp11Result2 = tmp11(tmp7Result, obj6);
  } else {
    tmp11Result2 = null;
    if (null != memo) {
      const obj7 = { style: tmp.dm, source: memo };
      tmp11Result2 = tmp11(tmp7(tmp3[21]), obj7);
    }
  }
  return <tmp12 selected={false} circle={!isMultiUserDMResult} unread styles={guildsBarAnimatedWrapperStyles} label={label} overState="Boolean" config={memo1} cutouts={cutouts} externalChildren={badge} expandedChildren={tmp11Result}>{tmp11Result2}</tmp12>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;
