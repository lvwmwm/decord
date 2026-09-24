// Module ID: 10506
// Function ID: 10507
// Name: trackOnEmojiPickerOpened
// Dependencies: [19, 5710, 2045, 2099, 1078, 1379, 1222, 558, 568, 10483, 10484, 4970, 4449, 2]

// Module 10506 (trackOnEmojiPickerOpened)
import EmojiUtilsDefault from "EmojiUtils" /* 4449 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4970 */;
import useTopAndNewlyAddedEmojis from "useTopAndNewlyAddedEmojis" /* 10483 */;
import useEmojiHotrail from "useEmojiHotrail" /* 10484 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5710 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

const require = globalThis.__r;

require = fn;
function trackOnEmojiPickerOpened(current) {
  ({ intention, analyticsObject } = current);
  ({ containerWidth, rowSize, isBurstReaction } = current);
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (intention === EmojiIntention.REACTION) {
    const frequently = EmojiStore.emojiReactionFrecencyWithoutFetchingLatest.frequently;
    let substr = frequently.slice();
    let obj2 = EmojiStore;
  } else {
    obj2 = EmojiStore;
    const frequently1 = EmojiStore.emojiFrecencyWithoutFetchingLatest.frequently;
    substr = frequently1.slice();
  }
  if (null != channel) {
    let prop = obj2.getDisambiguatedEmojiContext(channel.getGuildId()).favoriteEmojisWithoutFetchingLatest;
  } else {
    prop = [];
  }
  if (intention === EmojiIntention.REACTION) {
    let numFrequentlyItems = obj2.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems;
  } else {
    numFrequentlyItems = obj2.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems;
  }
  const substr1 = substr.slice(0, numFrequentlyItems);
  if (null != guildId) {
    let guildEmoji = obj2.getGuildEmoji(guildId);
  } else {
    guildEmoji = [];
  }
  let guildId1;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const disambiguatedEmojiContext = obj2.getDisambiguatedEmojiContext(guildId1);
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  let guildId2;
  if (channel != null) {
    guildId2 = channel.getGuildId();
  }
  const topAndNewlyAddedEmojis = useTopAndNewlyAddedEmojis.getTopAndNewlyAddedEmojis({ guildId: guildId2, pickerIntention: intention });
  ({ topEmojis, newlyAddedEmojis } = topAndNewlyAddedEmojis);
  const emojiHotrail = useEmojiHotrail.getEmojiHotrail({ topEmojis, newlyAddedEmojis, rowSize });
  ({ visibleTopEmojis, visibleNewlyAddedEmojis } = emojiHotrail);
  const tmp6Result = useEmojiHotrail;
  if (intention === EmojiIntention.REACTION) {
    let EXPRESSION_PICKER_OPENED = AnalyticEvents.REACTION_PICKER_OPENED;
  } else {
    EXPRESSION_PICKER_OPENED = AnalyticEvents.EXPRESSION_PICKER_OPENED;
  }
  const obj6 = AppAnalyticsUtilsDefault;
  let tmp14 = intention === tmp2.REACTION;
  if (tmp14) {
    const obj3 = { is_burst: isBurstReaction };
    tmp14 = obj3;
  }
  const merged = Object.assign(tmp14);
  let tmp16 = null != analyticsObject;
  if (tmp16) {
    const obj5 = { location_object: analyticsObject };
    tmp16 = obj5;
  }
  const merged1 = Object.assign(tmp16);
  obj6.trackWithMetadata(EXPRESSION_PICKER_OPENED, {
    width: containerWidth,
    tab: ExpressionPickerViewType.EMOJI,
    badged: false,
    num_expressions_favorites: prop.length,
    num_animated_expressions_favorites: prop.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (animated != null) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(EmojiUtilsDefault.isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((id) => null == id.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((animated) => animated.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((animated) => animated.animated).length
  });
}
const AnalyticEvents = fn(1078).AnalyticEvents;
const EmojiIntention = fn(1379).EmojiIntention;
const ExpressionPickerViewType = fn(1222).ExpressionPickerViewType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  cResult = require("c").c(2);
  _require = noop.useRef(cResult);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (ref.current.intention === EmojiIntention.REACTION) {
        trackOnEmojiPickerOpened(tmp.current);
      }
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((cResult) => {
  noop.useRef(cResult);
  const effect = noop.useEffect(() => {
    if (ref.current.intention === EmojiIntention.REACTION) {
      trackOnEmojiPickerOpened(tmp.current);
    }
  }, []);
});
