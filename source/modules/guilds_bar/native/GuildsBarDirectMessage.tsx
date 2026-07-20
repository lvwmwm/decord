// Module ID: 14736
// Function ID: 111129
// Dependencies: []

// Module 14736
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const ChannelTypes = arg1(dependencyMap[7]).ChannelTypes;
const jsx = arg1(dependencyMap[8]).jsx;
let obj = {};
obj = { width: importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.dm = obj;
let closure_12 = arg1(dependencyMap[9]).createStyles(obj);
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function GuildsBarDirectMessage(channelId) {
  let badge;
  let cutouts;
  const arg1 = channelId.channelId;
  let obj = arg1(dependencyMap[11]);
  const tmp = callback();
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => mentionCountForPrivateChannel.getMentionCountForPrivateChannel(channelId).count);
  const importDefault = stateFromStores;
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_6, closure_9, closure_8, closure_5, closure_4];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const channel = channel.getChannel(channelId);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    let user;
    if (type === constants.DM) {
      user = user.getUser(channel.getRecipientId());
    }
    const call = closure_5.getCall(channelId);
    const id = id.getId();
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
  const channel = stateFromStoresObject.channel;
  const dependencyMap = channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ <string:1453996901>: null, <string:1230201436>: null });
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = importDefault(dependencyMap[15])({ mentionCount: stateFromStores }));
  const memo = importAllResult.useMemo(() => {
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
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      if (null != user) {
        callback(user[16]).transitionToChannel(user.id);
        const obj = callback(user[16]);
      }
    },
    onLongPress() {
      if (null != user) {
        const result = callback(user[17]).openChannelLongPressActionSheet(user.id);
        const obj = callback(user[17]);
      }
    }
  }), items3);
  obj = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, "Bool(true)": 0.0000000000000000000000000000000000000000000000015576649385897736, "Bool(true)": 36897806968414080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  let isMultiUserDMResult = null != channel;
  const tmp5 = importDefault(dependencyMap[15])({ mentionCount: stateFromStores });
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
    tmp11 = jsx(importDefault(dependencyMap[18]), obj);
  }
  obj.expandedChildren = tmp11;
  if (null != channel) {
    if (channel.isMultiUserDM()) {
      obj1 = { channel, size: arg1(dependencyMap[20]).AvatarSizes.LARGE_48, pileSizeOverride: arg1(dependencyMap[20]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
      let tmp15 = jsx(importDefault(dependencyMap[19]), obj1);
      const tmp22 = importDefault(dependencyMap[19]);
    }
    obj.children = tmp15;
    return tmp8(tmp9, obj);
  }
  tmp15 = null;
  if (null != memo) {
    obj2 = { style: tmp.dm, source: memo };
    tmp15 = jsx(importDefault(dependencyMap[21]), obj2);
  }
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;
