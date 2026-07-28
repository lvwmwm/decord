// Module ID: 15492
// Function ID: 118062
// Name: getVoiceStates
// Dependencies: [31, 4238, 11438, 10081, 9077, 9105, 33, 10082, 566, 15169, 15447, 1212, 3878, 15450, 10080, 15487, 15443, 15454, 2]

// Module 15492 (getVoiceStates)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchResultContentEntityTypes as closure_10 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getVoiceStates(isGuildStageVoice) {
  let tmp = arg1;
  if (isGuildStageVoice.isGuildStageVoice()) {
    tmp = arg2;
  }
  let tmp2 = tmp[isGuildStageVoice.id];
  if (null == tmp2) {
    tmp2 = closure_7;
  }
  return tmp2;
}
({ EMPTY_VOICE_STATES: closure_7, SearchListItemTypes: closure_8, CHANNELS_ESTIMATED_ITEM_SIZE: closure_9 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function ChannelsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = searchContext(stateFromStores[7]);
  const importDefault = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(stateFromStores[8]);
  let items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => tmp4.getTextChannels(closure_1));
  const items1 = [closure_5];
  const stateFromStores1 = searchContext(stateFromStores[8]).useStateFromStores(items1, () => tmp4.getVoiceChannels(closure_1));
  const obj3 = searchContext(stateFromStores[8]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = searchContext(stateFromStores[8]).useStateFromStores(items2, () => stateFromStores2.getVoiceStates(searchContext.guildId), items3);
  const tmp4 = importDefault(stateFromStores[9])(searchContext.guildId);
  closure_5 = tmp4;
  const obj4 = searchContext(stateFromStores[8]);
  const onPressGuildTextChannel = searchContext(stateFromStores[10]).useOnPressGuildTextChannel({ searchContext });
  const obj5 = searchContext(stateFromStores[10]);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[10]).useOnPressGuildVoiceChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  const items4 = [onPressGuildTextChannel];
  const stateFromStores3 = searchContext(stateFromStores[8]).useStateFromStores(items4, () => onPressGuildTextChannel.isInitialSearchQuery(searchContext));
  const obj7 = searchContext(stateFromStores[8]);
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  const stateFromStores4 = searchContext(stateFromStores[8]).useStateFromStores(items5, () => onPressGuildTextChannel.getQueryString(searchContext), items6);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores4];
  const effect = stateFromStores1.useEffect(() => {
    if ("" !== stateFromStores4.trim()) {
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
  }, items7);
  const obj8 = searchContext(stateFromStores[8]);
  obj = { placeholderHeight: stateFromStores4, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[13]).useFullscreenPlaceholderCount(obj);
  const items8 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    let obj = callback(stateFromStores[14]);
    obj = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
  }, items9);
  const items10 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores3, tmp4, stateFromStores, stateFromStores1, stateFromStores2];
  const memo = stateFromStores1.useMemo(() => {
    let items = [];
    if (stateFromStores.length > 0) {
      let obj = { type: stateFromStores3.SECTION };
      obj = {};
      const intl = searchContext(stateFromStores[11]).intl;
      obj.title = intl.string(searchContext(stateFromStores[11]).t.nIfr0Y);
      obj.props = obj;
      items.push(obj);
      const item = stateFromStores.forEach((channel) => {
        const items = length + arg1;
        obj = { type: stateFromStores3.GUILD_TEXT_CHANNEL, props: obj };
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
      const obj1 = { type: stateFromStores3.SECTION };
      const obj2 = {};
      const intl2 = searchContext(stateFromStores[11]).intl;
      obj2.title = intl2.string(searchContext(stateFromStores[11]).t.CYnO4s);
      obj1.props = obj2;
      items.push(obj1);
      const sorted = stateFromStores1.sort((function createSorter(stateFromStores2, closure_5) {
        let closure_0 = stateFromStores2;
        let closure_1 = closure_5;
        return (channel, channel2) => {
          const arr = callback1(channel.channel, closure_0, closure_1);
          const arr2 = callback1(channel2.channel, closure_0, closure_1);
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
      })(stateFromStores2, closure_5));
      const item1 = sorted.forEach((channel) => {
        const items = length + arg1;
        let obj = { type: stateFromStores3.GUILD_VOICE_CHANNEL };
        obj = { channel: channel.channel };
        let tmp2 = outer1_4[channel.channel.id];
        if (null == tmp2) {
          tmp2 = onPressGuildVoiceChannel;
        }
        obj.voiceStates = tmp2;
        let tmp3 = outer1_5[channel.channel.id];
        if (null == tmp3) {
          tmp3 = onPressGuildVoiceChannel;
        }
        obj.speakerVoiceStates = tmp3;
        obj.onPress = function onPress(arg0) {
          return outer2_12(arg0, closure_0);
        };
        obj.props = obj;
        items.push(obj);
      });
    }
    if (!stateFromStores3) {
      if (0 === items.length) {
        let num = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            obj = {};
            let tmp3 = stateFromStores3;
            obj.type = stateFromStores3.MESSAGE_PLACEHOLDER;
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
  }, items10);
  const obj9 = searchContext(stateFromStores[13]);
  const messageTabCountsErrorText = searchContext(stateFromStores[15]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = callback(importDefault(stateFromStores[16]), obj);
  } else {
    obj1 = { data: memo };
    tmp18 = callback(importDefault(stateFromStores[17]), obj1);
  }
  return tmp18;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;
