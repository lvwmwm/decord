// Module ID: 18092
// Function ID: 18093
// Name: HappeningNowCardActiveChannel
// Dependencies: [19, 17, 15555, 4858, 13679, 1384, 17217, 1072, 21, 5009, 504, 11, 1380, 12, 7476, 1253, 1100, 5647, 1114, 8595, 17218, 18086, 2]

// Module 18092 (HappeningNowCardActiveChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import router_utils from "router_utils" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ActiveChannelsStore2 from "ActiveChannelsStore" /* 15555 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17217 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import TypingStore from "TypingStore" /* 13679 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ActiveChannelsStore = ActiveChannelsStore2;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const View = react_native.View;
const MAX_STORED_MESSAGES = ActiveChannelsStore2.MAX_STORED_MESSAGES;
let closure_10 = HappeningNowConstants.HappeningNowCardTrackingType;
({ AnalyticEvents: unpackModuleId, Routes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ content: { flexShrink: 1, marginLeft: 4, gap: 2 }, avatarsWrapper: { marginBottom: 2 } });
const memoResult = react.memo(function HappeningNowCardActiveChannel(index) {
  let items6;
  let obj10;
  let obj8;
  let str;
  index = index.index;
  const guildId = index.guildId;
  const channelId = index.channelId;
  let flag = index.panelVariant;
  const fullwidth = index.fullwidth;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  let obj = index(channelId[10]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = index(channelId[10]);
  const items1 = [TypingStore, UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let user;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(TypingStore.getTypingUsers(channelId));
    const mapped = keys.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish)[0];
  });
  let obj3 = index(channelId[10]);
  const items2 = [ActiveChannelsStore];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
    if (channelMessageData == null) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  const items3 = [stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    const uniq = _modDef12.uniq;
    _modDef12;
    const arr = _modDef12;
    const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
    return uniqResult.filter(GlobalUtils.isNotNullish);
  }, items3);
  const obj4 = index(channelId[14]);
  const ensureHydratedGuildUsers = obj4.useEnsureHydratedGuildUsers(guildId, memo);
  const items4 = [UserStore];
  const obj5 = index(channelId[10]);
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items4, () => {
    let user;
    const uniq = _modDef12.uniq;
    _modDef12;
    const arr = _modDef12;
    const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
    const mapped = uniqResult.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = stateFromStoresArray.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { order: index, guild_id: guildId, type: unpackModuleId.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(unpackModuleId.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = router_utils;
    obj3.transitionTo(authStore2.CHANNEL(guildId, channelId));
  }, items5);
  const tmp9 = guildId;
  if (null == stateFromStores) {
    return null;
  } else {
    let formatToPlainStringResult;
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = tmp2(tmp3[18]).intl;
      const obj6 = { count: stateFromStoresArray.length };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[18]).t.VdpclX, obj6);
    } else {
      const intl = tmp2(tmp3[18]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[18]).t.LCutYV);
    }
    const tmp2Result = index(channelId[19]);
    const channelIconComponent = tmp2Result.getChannelIconComponent(stateFromStores);
    const obj7 = { onPress: callback, width: str, IconComponent: channelIconComponent, panelVariant: flag, children: closure_14(View, obj8) };
    str = "medium";
    const tmp9Result = tmp9(channelId[20]);
    if (fullwidth) {
      str = "full";
    }
    obj8 = { style: tmp.content, children: items6 };
    const obj9 = { style: tmp.avatarsWrapper, children: closure_13(index(channelId[21]).HappeningNowAvatarStack, obj10) };
    obj10 = { isTyping: null != stateFromStores1, userLimit: 3, users: stateFromStoresArray1, userCount: stateFromStoresArray1.length, guildId };
    items6 = [closure_13(View, obj9), , ];
    const obj11 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
    items6[1] = closure_13(index(channelId[20]).HappeningNowCardHeader, obj11);
    const obj12 = { children: tmp10 };
    items6[2] = closure_13(index(channelId[20]).HappeningNowCardSubtitle, obj12);
    return closure_13(tmp9Result, obj7);
  }
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx");

export default memoResult;
