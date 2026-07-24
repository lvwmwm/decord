// Module ID: 15430
// Function ID: 117730
// Name: getVoiceStates
// Dependencies: [31, 11436, 10109, 9141, 9169, 33, 10110, 566, 15029, 15107, 15384, 1212, 3843, 15387, 10108, 15425, 15380, 15391, 2]

// Module 15430 (getVoiceStates)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchResultContentEntityTypes as closure_9 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function getVoiceStates(closure_0) {
  let tmp = arg1;
  if (closure_0.isGuildStageVoice()) {
    tmp = arg2;
  }
  let tmp2 = tmp[closure_0.id];
  if (null == tmp2) {
    tmp2 = closure_6;
  }
  return tmp2;
}
({ EMPTY_VOICE_STATES: closure_6, SearchListItemTypes: closure_7, CHANNELS_ESTIMATED_ITEM_SIZE: closure_8 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = searchContext(stateFromStores[6]);
  const importDefault = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(stateFromStores[7]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => tmp3.getTextChannels(closure_1));
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = searchContext(stateFromStores[7]).useStateFromStores(items1, () => tmp3.getVoiceChannels(closure_1));
  let tmp3 = importDefault(stateFromStores[8])(searchContext.guildId);
  _isNativeReflectConstruct = tmp3;
  const tmp4 = importDefault(stateFromStores[9])(searchContext.guildId);
  let closure_5 = tmp4;
  const obj3 = searchContext(stateFromStores[7]);
  const onPressGuildTextChannel = searchContext(stateFromStores[10]).useOnPressGuildTextChannel({ searchContext });
  const obj4 = searchContext(stateFromStores[10]);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj5 = searchContext(stateFromStores[10]);
  const items2 = [closure_5];
  const stateFromStores2 = searchContext(stateFromStores[7]).useStateFromStores(items2, () => tmp4.isInitialSearchQuery(searchContext));
  const obj6 = searchContext(stateFromStores[7]);
  const items3 = [closure_5];
  const items4 = [searchContext];
  const stateFromStores3 = searchContext(stateFromStores[7]).useStateFromStores(items3, () => tmp4.getQueryString(searchContext), items4);
  const items5 = [stateFromStores, stateFromStores1, stateFromStores3];
  const effect = stateFromStores1.useEffect(() => {
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
  const obj7 = searchContext(stateFromStores[7]);
  obj = { placeholderHeight: stateFromStores2, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[13]).useFullscreenPlaceholderCount(obj);
  const items6 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: stateFromStores3.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items6);
  const items7 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: stateFromStores3.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items7);
  const items8 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores2, tmp4, stateFromStores, stateFromStores1, tmp3];
  const memo = stateFromStores1.useMemo(() => {
    let items = [];
    if (stateFromStores.length > 0) {
      let obj = { type: onPressGuildVoiceChannel.SECTION };
      obj = {};
      const intl = searchContext(stateFromStores[11]).intl;
      obj.title = intl.string(searchContext(stateFromStores[11]).t.nIfr0Y);
      obj.props = obj;
      items.push(obj);
      const item = stateFromStores.forEach((channel) => {
        const items = length + arg1;
        obj = { type: onPressGuildVoiceChannel.GUILD_TEXT_CHANNEL, props: obj };
        obj = {
          channel: channel.channel,
          lastMessageId: channel.lastMessageId,
          onPress(arg0) {
            return outer2_11(arg0, closure_0);
          }
        };
        items.push(obj);
      });
    }
    if (stateFromStores1.length > 0) {
      const obj1 = { type: onPressGuildVoiceChannel.SECTION };
      const obj2 = {};
      const intl2 = searchContext(stateFromStores[11]).intl;
      obj2.title = intl2.string(searchContext(stateFromStores[11]).t.CYnO4s);
      obj1.props = obj2;
      items.push(obj1);
      const sorted = stateFromStores1.sort((function createSorter(_isNativeReflectConstruct, closure_5) {
        let closure_0 = _isNativeReflectConstruct;
        let closure_1 = closure_5;
        return (channel, channel2) => {
          const arr = callback(channel.channel, closure_0, closure_1);
          const arr2 = callback(channel2.channel, closure_0, closure_1);
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
      })(_isNativeReflectConstruct, closure_5));
      const item1 = sorted.forEach((channel) => {
        const items = length + arg1;
        let obj = { type: onPressGuildVoiceChannel.GUILD_VOICE_CHANNEL };
        obj = { channel: channel.channel };
        let tmp2 = outer1_4[channel.channel.id];
        if (null == tmp2) {
          tmp2 = onPressGuildTextChannel;
        }
        obj.voiceStates = tmp2;
        let tmp3 = outer1_5[channel.channel.id];
        if (null == tmp3) {
          tmp3 = onPressGuildTextChannel;
        }
        obj.speakerVoiceStates = tmp3;
        obj.onPress = function onPress(arg0) {
          return outer2_12(arg0, closure_0);
        };
        obj.props = obj;
        items.push(obj);
      });
    }
    if (!stateFromStores2) {
      if (0 === items.length) {
        let num = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            obj = {};
            let tmp3 = onPressGuildVoiceChannel;
            obj.type = onPressGuildVoiceChannel.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num;
            let arr1 = items.push(obj);
            num = num + 1;
            let tmp5 = fullscreenPlaceholderCount;
          } while (num < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items8);
  const obj8 = searchContext(stateFromStores[13]);
  const messageTabCountsErrorText = searchContext(stateFromStores[15]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = fullscreenPlaceholderCount(importDefault(stateFromStores[16]), obj);
  } else {
    obj1 = { data: memo };
    tmp18 = fullscreenPlaceholderCount(importDefault(stateFromStores[17]), obj1);
  }
  return tmp18;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;
