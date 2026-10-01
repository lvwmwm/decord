// Module ID: 16523
// Function ID: 16524
// Name: ChannelsScreen
// Dependencies: [19, 4860, 11850, 11822, 7303, 7302, 21, 11823, 504, 15870, 16458, 1115, 4541, 16462, 11841, 16516, 16454, 16466, 2]

// Module 16523 (ChannelsScreen)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import react from "react" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 11850 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channel, closure_1, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
({ EMPTY_VOICE_STATES: metroImportDefault, SearchListItemTypes: metroImportAll, CHANNELS_ESTIMATED_ITEM_SIZE: c9 } = SearchConstants);
let closure_10 = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChannelsScreen(searchContext) {
  let tmp18;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let stateFromStores2;
  let closure_5;
  let tmp = stateFromStores;
  let obj = searchContext(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[8]);
  let items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  let obj3 = searchContext(stateFromStores[8]);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SearchGuildChannelTabStore.getVoiceChannels(closure_1));
  let obj4 = searchContext(stateFromStores[8]);
  const items2 = [stateFromStores2];
  const items3 = [searchContext.guildId];
  stateFromStores2 = obj4.useStateFromStores(items2, () => SortedVoiceStateStore.getVoiceStates(searchContext.guildId), items3);
  let tmp6 = require("useStageChannelSpeakerVoiceStates")(searchContext.guildId);
  closure_5 = tmp6;
  const obj5 = searchContext(stateFromStores[10]);
  const onPressGuildTextChannel = obj5.useOnPressGuildTextChannel({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  const onPressGuildVoiceChannel = obj6.useOnPressGuildVoiceChannel({ searchContext });
  const items4 = [onPressGuildTextChannel];
  const obj7 = searchContext(stateFromStores[8]);
  const stateFromStores3 = obj7.useStateFromStores(items4, () => SearchQueryStore.isInitialSearchQuery(searchContext));
  const items5 = [onPressGuildTextChannel];
  const items6 = [searchContext];
  const obj8 = searchContext(stateFromStores[8]);
  const stateFromStores4 = obj8.useStateFromStores(items5, () => SearchQueryStore.getQueryString(searchContext), items6);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores4];
  const effect = stateFromStores1.useEffect(() => {
    if ("" !== stateFromStores4.trim()) {
      let formatToPlainStringResult;
      const sum = stateFromStores.length + stateFromStores1.length;
      if (sum > 0) {
        const intl2 = intl3.intl;
        const obj = { count: sum };
        formatToPlainStringResult = intl2.formatToPlainString(intl3.t.ZGVL3g, obj);
      } else {
        const intl = intl3.intl;
        formatToPlainStringResult = intl.string(intl3.t.f5cMAg);
      }
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(formatToPlainStringResult);
    }
  }, items7);
  const obj10 = { placeholderHeight: stateFromStores4, numColumns: 1 };
  const obj9 = searchContext(stateFromStores[13]);
  const fullscreenPlaceholderCount = obj9.useFullscreenPlaceholderCount(obj10);
  const items8 = [onPressGuildTextChannel, searchContext];
  const callback = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildTextChannel(channelId);
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
  }, items8);
  const items9 = [onPressGuildVoiceChannel, searchContext];
  const callback1 = stateFromStores1.useCallback((channelId, index) => {
    onPressGuildVoiceChannel(channelId);
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: fullscreenPlaceholderCount.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
  }, items9);
  const items10 = [fullscreenPlaceholderCount, callback, callback1, stateFromStores3, tmp6, stateFromStores, stateFromStores1, stateFromStores2];
  const memo = stateFromStores1.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    let obj3;
    const items = [];
    let length = 0;
    let arr2 = stateFromStores;
    if (stateFromStores.length > 0) {
      let element = { type: stateFromStores3.SECTION, props: obj2 };
      const push2 = items.push;
      obj2 = { title: intl.string(searchContext(stateFromStores[11]).t.nIfr0Y) };
      intl = searchContext(stateFromStores[11]).intl;
      push2(element);
      const item = arr2.forEach((channel, index) => {
        let closure_0 = length + index;
        const element = {
          type: metroImportAll.GUILD_TEXT_CHANNEL,
          props: {
            channel: channel.channel,
            lastMessageId: channel.lastMessageId,
            onPress(arg0) {
              return closure_2_11(arg0, closure_0);
            }
          }
        };
        items.push(element);
      });
      length = arr2.length;
    }
    let obj = stateFromStores1;
    if (stateFromStores1.length > 0) {
      const element1 = { type: stateFromStores3.SECTION, props: obj3 };
      const push3 = items.push;
      obj3 = { title: intl2.string(searchContext(stateFromStores[11]).t.CYnO4s) };
      intl2 = searchContext(stateFromStores[11]).intl;
      push3(element1);
      let closure_0 = stateFromStores2;
      closure_1 = closure_5;
      const sorted = obj.sort((channel, channel2) => {
        channel = channel.channel;
        let tmp = closure_0;
        let tmp3 = closure_0;
        if (channel.isGuildStageVoice()) {
          tmp3 = tmp2;
        }
        let arr = tmp3[channel.id];
        if (arr == null) {
          arr = onPressGuildVoiceChannel;
        }
        channel2 = channel2.channel;
        if (channel2.isGuildStageVoice()) {
          tmp = tmp2;
        }
        let arr2 = tmp[channel2.id];
        if (arr2 == null) {
          arr2 = onPressGuildVoiceChannel;
        }
        let num = 1;
        if (arr.length >= arr2.length) {
          let num2 = 0;
          if (arr.length > arr2.length) {
            num2 = -1;
          }
          num = num2;
        }
        return num;
      });
      const item1 = sorted.forEach((channel, index) => {
        let obj;
        let tmp2;
        let tmp3;
        let closure_0 = length + index;
        const element = { type: metroImportAll.GUILD_VOICE_CHANNEL, props: obj };
        obj = {
          channel: channel.channel,
          voiceStates: tmp2,
          speakerVoiceStates: tmp3,
          onPress(arg0) {
            return closure_2_12(arg0, closure_0);
          }
        };
        tmp2 = stateFromStores2[channel.channel.id];
        const push = items.push;
        if (tmp2 == null) {
          tmp2 = metroImportDefault;
        }
        tmp3 = closure_5[channel.channel.id];
        if (tmp3 == null) {
          tmp3 = metroImportDefault;
        }
        push(element);
      });
    }
    let tmp = stateFromStores3;
    if (!tmp) {
      if (0 === items.length) {
        let tmp2 = fullscreenPlaceholderCount;
        let tmp3 = globalThis;
        let num = 1;
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj4 = { type: stateFromStores3.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num2 };
            let _HermesInternal = HermesInternal;
            let push = items.push;
            let arr = push(obj4);
            num2 = num2 + 1;
          } while (num2 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items10);
  const obj11 = searchContext(stateFromStores[15]);
  const messageTabCountsErrorText = obj11.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj12 = { text: messageTabCountsErrorText };
    tmp18 = callback(tmp5(tmp[16]), obj12);
  } else {
    const obj13 = { data: memo };
    tmp18 = callback(tmp5(tmp[17]), obj13);
  }
  return tmp18;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ChannelsScreen.tsx");

export default memoResult;
