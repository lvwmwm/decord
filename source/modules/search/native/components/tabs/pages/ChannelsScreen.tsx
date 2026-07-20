// Module ID: 15248
// Function ID: 115133
// Name: getVoiceStates
// Dependencies: []

// Module 15248 (getVoiceStates)
function getVoiceStates(guildId) {
  let tmp = arg1;
  if (guildId.isGuildStageVoice()) {
    tmp = arg2;
  }
  let tmp2 = tmp[guildId.id];
  if (null == tmp2) {
    tmp2 = closure_6;
  }
  return tmp2;
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ EMPTY_VOICE_STATES: closure_6, SearchListItemTypes: closure_7, CHANNELS_ESTIMATED_ITEM_SIZE: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = arg1(dependencyMap[4]).SearchResultContentEntityTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  let obj = arg1(dependencyMap[6]);
  const importDefault = obj.getSearchContextId(searchContext);
  let obj1 = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp3.getTextChannels(closure_1));
  const dependencyMap = stateFromStores;
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => tmp3.getVoiceChannels(closure_1));
  const tmp3 = importDefault(dependencyMap[8])(searchContext.guildId);
  closure_4 = tmp3;
  const tmp4 = importDefault(dependencyMap[9])(searchContext.guildId);
  let closure_5 = tmp4;
  const obj3 = arg1(dependencyMap[7]);
  const onPressGuildTextChannel = arg1(dependencyMap[10]).useOnPressGuildTextChannel({ searchContext });
  const obj4 = arg1(dependencyMap[10]);
  const onPressGuildVoiceChannel = arg1(dependencyMap[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj5 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items2, () => tmp4.isInitialSearchQuery(searchContext));
  const obj6 = arg1(dependencyMap[7]);
  const items3 = [closure_5];
  const items4 = [searchContext];
  const stateFromStores3 = arg1(dependencyMap[7]).useStateFromStores(items3, () => tmp4.getQueryString(searchContext), items4);
  let closure_9 = stateFromStores3;
  const items5 = [stateFromStores, stateFromStores1, stateFromStores3];
  const effect = importAllResult.useEffect(() => {
    if ("" !== stateFromStores3.trim()) {
      const sum = stateFromStores.length + stateFromStores1.length;
      if (sum > 0) {
        const intl2 = searchContext(stateFromStores[11]).intl;
        const obj = { count: sum };
        let formatToPlainStringResult = intl2.formatToPlainString(searchContext(stateFromStores[11]).t.ZGVL3g, obj);
      } else {
        const intl = searchContext(stateFromStores[11]).intl;
        formatToPlainStringResult = intl.string(searchContext(stateFromStores[11]).t.f5cMAg);
      }
      const AccessibilityAnnouncer = searchContext(stateFromStores[12]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(formatToPlainStringResult);
    }
  }, items5);
  const obj7 = arg1(dependencyMap[7]);
  obj = { placeholderHeight: stateFromStores2, numColumns: 1 };
  const fullscreenPlaceholderCount = arg1(dependencyMap[13]).useFullscreenPlaceholderCount(obj);
  const jsx = fullscreenPlaceholderCount;
  const items6 = [onPressGuildTextChannel, searchContext];
  const callback = importAllResult.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: stateFromStores3.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items6);
  const getVoiceStates = callback;
  const items7 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = importAllResult.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: stateFromStores3.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items7);
  const items8 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores2, tmp4, stateFromStores, stateFromStores1, tmp3];
  const memo = importAllResult.useMemo(() => {
    let tmp3;
    const items = [];
    const searchContext = items;
    let closure_1 = 0;
    if (stateFromStores.length > 0) {
      let obj = { type: onPressGuildVoiceChannel.SECTION };
      obj = {};
      const intl = searchContext(stateFromStores[11]).intl;
      obj.title = intl.string(searchContext(stateFromStores[11]).t.nIfr0Y);
      obj.props = obj;
      items.push(obj);
      const item = stateFromStores.forEach((channel) => {
        let arr = length + arg1;
        let obj = { type: constants.GUILD_TEXT_CHANNEL, props: obj };
        obj = {
          channel: channel.channel,
          lastMessageId: channel.lastMessageId,
          onPress(arg0) {
            return callback(arg0, closure_0);
          }
        };
        arr = arr.push(obj);
      });
      closure_1 = stateFromStores.length;
    }
    if (stateFromStores1.length > 0) {
      const obj1 = { type: onPressGuildVoiceChannel.SECTION };
      const obj2 = {};
      const intl2 = searchContext(stateFromStores[11]).intl;
      obj2.title = intl2.string(searchContext(stateFromStores[11]).t.CYnO4s);
      obj1.props = obj2;
      items.push(obj1);
      const sorted = stateFromStores1.sort(function createSorter(arg0, arg1) {
        const items = arg0;
        return (channel, channel2) => {
          const arr = callback(channel.channel, channel, channel2);
          const arr2 = callback(channel2.channel, channel, channel2);
          let num = 1;
          if (arr.length >= arr2.length) {
            let num2 = 0;
            if (arr.length > arr2.length) {
              num2 = -1;
            }
            num = num2;
          }
          return num;
        };
      }(tmp3, tmp4));
      const item1 = sorted.forEach((channel) => {
        let arr = length + arg1;
        let obj = { type: constants.GUILD_VOICE_CHANNEL };
        obj = { channel: channel.channel };
        let tmp2 = closure_4[channel.channel.id];
        if (null == tmp2) {
          tmp2 = closure_6;
        }
        obj.voiceStates = tmp2;
        let tmp3 = closure_5[channel.channel.id];
        if (null == tmp3) {
          tmp3 = closure_6;
        }
        obj.speakerVoiceStates = tmp3;
        obj.onPress = function onPress(arg0) {
          return callback(arg0, closure_0);
        };
        obj.props = obj;
        arr = arr.push(obj);
      });
    }
    if (!stateFromStores2) {
      if (0 === items.length) {
        let num = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            obj = {};
            tmp3 = closure_7;
            obj.type = closure_7.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num;
            let arr1 = items.push(obj);
            num = num + 1;
            let tmp5 = closure_10;
          } while (num < closure_10);
        }
      }
    }
    return items;
  }, items8);
  const obj8 = arg1(dependencyMap[13]);
  const messageTabCountsErrorText = arg1(dependencyMap[15]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = jsx(importDefault(dependencyMap[16]), obj);
  } else {
    obj1 = { data: memo };
    tmp18 = jsx(importDefault(dependencyMap[17]), obj1);
  }
  return tmp18;
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;
