// Module ID: 14952
// Function ID: 113971
// Dependencies: [31, 27, 12631, 1348, 11108, 1849, 14183, 653, 33, 4130, 566, 21, 1327, 22, 14951, 675, 1198, 4320, 1212, 4593, 14184, 14945, 2]

// Module 14952
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MAX_STORED_MESSAGES } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { HappeningNowCardTrackingType as closure_10 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ AnalyticEvents: closure_11, Routes: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ content: { flexShrink: 1, marginLeft: 4, gap: 2 }, avatarsWrapper: { marginBottom: 2 } });
const memoResult = importAllResult.memo((index) => {
  index = index.index;
  const guildId = index.guildId;
  const channelId = index.channelId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStoresArray;
  const tmp = callback3();
  let obj = index(channelId[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(channelId));
  let obj1 = index(channelId[10]);
  const items1 = [closure_8, closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const keys = guildId(channelId[11]).keys(outer1_8.getTypingUsers(channelId));
    const mapped = keys.map((arg0) => outer2_9.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish)[0];
  });
  let obj2 = index(channelId[10]);
  const items2 = [_isNativeReflectConstruct];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let channelMessageData = outer1_5.getChannelMessageData(channelId);
    if (null == channelMessageData) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  const items3 = [stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    return obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).filter(index(channelId[12]).isNotNullish);
  }, items3);
  let obj3 = index(channelId[14]);
  const ensureHydratedUsers = obj3.useEnsureHydratedUsers(guildId, memo);
  let obj4 = index(channelId[10]);
  const items4 = [closure_9];
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items4, () => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    const mapped = obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).map((arg0) => outer2_9.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = stateFromStoresArray.useCallback(() => {
    let obj = guildId(channelId[15]);
    obj = { order: index, guild_id: guildId, type: outer1_10.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(outer1_11.ACTIVITY_CARD_CLICKED, obj);
    index(channelId[16]).transitionTo(outer1_12.CHANNEL(guildId, channelId));
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = index(channelId[18]).intl;
      obj = { count: stateFromStoresArray.length };
      let formatToPlainStringResult = intl2.formatToPlainString(index(channelId[18]).t.VdpclX, obj);
    } else {
      const intl = index(channelId[18]).intl;
      formatToPlainStringResult = intl.string(index(channelId[18]).t.LCutYV);
    }
    const channelIconComponent = index(channelId[19]).getChannelIconComponent(stateFromStores);
    obj = { onPress: callback };
    let str = "medium";
    const obj7 = index(channelId[19]);
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
    obj2.children = callback(index(channelId[21]).HappeningNowAvatarStack, obj3);
    const items6 = [callback(View, obj2), , ];
    obj4 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
    items6[1] = callback(index(channelId[20]).HappeningNowCardHeader, obj4);
    const obj5 = { children: tmp7 };
    items6[2] = callback(index(channelId[20]).HappeningNowCardSubtitle, obj5);
    obj1.children = items6;
    obj.children = callback2(View, obj1);
    return tmp16(guildId(channelId[20]), obj);
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx");

export default memoResult;
