// Module ID: 14825
// Function ID: 111726
// Dependencies: []

// Module 14825
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const MAX_STORED_MESSAGES = arg1(dependencyMap[2]).MAX_STORED_MESSAGES;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).HappeningNowCardTrackingType;
({ AnalyticEvents: closure_11, Routes: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let closure_15 = arg1(dependencyMap[9]).createStyles({ content: {}, avatarsWrapper: { marginBottom: 2 } });
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo((index) => {
  index = index.index;
  const arg1 = index;
  const guildId = index.guildId;
  const importDefault = guildId;
  const channelId = index.channelId;
  const dependencyMap = channelId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let importAllResult;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_8, closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const keys = guildId(channelId[11]).keys(typingUsers.getTypingUsers(channelId));
    const mapped = keys.map((arg0) => user.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish)[0];
  });
  let obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let channelMessageData = channelMessageData.getChannelMessageData(channelId);
    if (null == channelMessageData) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  importAllResult = stateFromStoresArray;
  const items3 = [stateFromStoresArray];
  const memo = importAllResult.useMemo(() => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    return obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).filter(index(channelId[12]).isNotNullish);
  }, items3);
  let obj3 = arg1(dependencyMap[14]);
  const ensureHydratedUsers = obj3.useEnsureHydratedUsers(guildId, memo);
  let obj4 = arg1(dependencyMap[10]);
  const items4 = [closure_9];
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items4, () => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    const mapped = obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).map((arg0) => user.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[15]);
    obj = { order: index, guild_id: guildId, type: constants.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    index(channelId[16]).transitionTo(closure_12.CHANNEL(guildId, channelId));
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = arg1(dependencyMap[18]).intl;
      obj = { count: stateFromStoresArray.length };
      let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[18]).t.VdpclX, obj);
    } else {
      const intl = arg1(dependencyMap[18]).intl;
      formatToPlainStringResult = intl.string(arg1(dependencyMap[18]).t.LCutYV);
    }
    const channelIconComponent = arg1(dependencyMap[19]).getChannelIconComponent(stateFromStores);
    obj = { onPress: callback };
    let str = "medium";
    const obj7 = arg1(dependencyMap[19]);
    const tmp16 = callback;
    if (index.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = channelIconComponent;
    obj.panelVariant = flag;
    obj1 = { style: tmp.content };
    obj2 = { style: tmp.avatarsWrapper };
    obj3 = { isTyping: null != stateFromStores1, userLimit: 3, users: stateFromStoresArray1, userCount: stateFromStoresArray1.length, guildId };
    obj2.children = callback(arg1(dependencyMap[21]).HappeningNowAvatarStack, obj3);
    const items6 = [callback(View, obj2), , ];
    obj4 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
    items6[1] = callback(arg1(dependencyMap[20]).HappeningNowCardHeader, obj4);
    const obj5 = { children: tmp7 };
    items6[2] = callback(arg1(dependencyMap[20]).HappeningNowCardSubtitle, obj5);
    obj1.children = items6;
    obj.children = callback2(View, obj1);
    return tmp16(importDefault(dependencyMap[20]), obj);
  }
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx");

export default memoResult;
