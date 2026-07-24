// Module ID: 9382
// Function ID: 73222
// Name: trackOnEmojiPickerOpened
// Dependencies: [31, 4991, 1348, 1906, 653, 1852, 1314, 9370, 9371, 4324, 3775, 2]
// Exports: useTrackOnEmojiPickerOpenedForReactions

// Module 9382 (trackOnEmojiPickerOpened)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { EmojiIntention } from "set";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";

const require = arg1;
function trackOnEmojiPickerOpened(arg0) {
  let analyticsObject;
  let containerWidth;
  let intention;
  let isBurstReaction;
  let newlyAddedEmojis;
  let rowSize;
  let topEmojis;
  let visibleNewlyAddedEmojis;
  let visibleTopEmojis;
  ({ intention, analyticsObject } = arg0);
  ({ containerWidth, rowSize, isBurstReaction } = arg0);
  channel = channel.getChannel(channelId.getChannelId());
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (intention === EmojiIntention.REACTION) {
    const frequently = store.emojiReactionFrecencyWithoutFetchingLatest.frequently;
    let substr = frequently.slice();
  } else {
    const frequently1 = store.emojiFrecencyWithoutFetchingLatest.frequently;
    substr = frequently1.slice();
  }
  if (null != channel) {
    let prop = store.getDisambiguatedEmojiContext(channel.getGuildId()).favoriteEmojisWithoutFetchingLatest;
  } else {
    prop = [];
  }
  if (intention === EmojiIntention.REACTION) {
    let numFrequentlyItems = store.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems;
  } else {
    numFrequentlyItems = store.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems;
  }
  const substr1 = substr.slice(0, numFrequentlyItems);
  if (null != guildId) {
    let guildEmoji = store.getGuildEmoji(guildId);
  } else {
    guildEmoji = [];
  }
  let guildId1;
  if (null != channel) {
    guildId1 = channel.getGuildId();
  }
  const disambiguatedEmojiContext = store.getDisambiguatedEmojiContext(guildId1);
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  let obj2 = require(9370) /* getTopAndNewlyAddedEmojis */;
  let obj = {};
  let guildId2;
  if (null != channel) {
    guildId2 = channel.getGuildId();
  }
  obj.guildId = guildId2;
  obj.pickerIntention = intention;
  const topAndNewlyAddedEmojis = obj2.getTopAndNewlyAddedEmojis(obj);
  ({ topEmojis, newlyAddedEmojis } = topAndNewlyAddedEmojis);
  const emojiHotrail = require(9371) /* getEmojiHotrail */.getEmojiHotrail({ topEmojis, newlyAddedEmojis, rowSize });
  ({ visibleTopEmojis, visibleNewlyAddedEmojis } = emojiHotrail);
  const obj5 = require(9371) /* getEmojiHotrail */;
  if (intention === EmojiIntention.REACTION) {
    let EXPRESSION_PICKER_OPENED = AnalyticEvents.REACTION_PICKER_OPENED;
  } else {
    EXPRESSION_PICKER_OPENED = AnalyticEvents.EXPRESSION_PICKER_OPENED;
  }
  obj = {
    width: containerWidth,
    tab: ExpressionPickerViewType.EMOJI,
    badged: false,
    num_expressions_favorites: prop.length,
    num_animated_expressions_favorites: prop.filter((animated) => {
      animated = undefined;
      if (null != animated) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_favorites: prop.filter(importDefault(3775).isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (null != animated) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(importDefault(3775).isCustomEmoji).length,
    num_standard_expressions_frecent: substr1.filter((id) => null == id.id).length,
    num_current_guild_expressions: guildEmoji.length,
    num_custom_expressions_total: customEmoji.size,
    num_expressions_top_server: visibleTopEmojis.length,
    num_animated_expressions_top_server: visibleTopEmojis.filter((animated) => animated.animated).length,
    num_expressions_newly_added: visibleNewlyAddedEmojis.length,
    num_animated_expressions_newly_added: visibleNewlyAddedEmojis.filter((animated) => animated.animated).length
  };
  let tmp16 = intention === EmojiIntention.REACTION;
  if (tmp16) {
    const obj1 = { is_burst: isBurstReaction };
    tmp16 = obj1;
  }
  const merged = Object.assign(tmp16);
  let tmp18 = null != analyticsObject;
  if (tmp18) {
    obj2 = { location_object: analyticsObject };
    tmp18 = obj2;
  }
  const merged1 = Object.assign(tmp18);
  importDefault(4324).trackWithMetadata(EXPRESSION_PICKER_OPENED, obj);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = function useTrackOnEmojiPickerOpenedForReactions(arg0) {
  let closure_0 = React.useRef(arg0);
  const effect = React.useEffect(() => {
    if (ref.current.intention === outer1_8.REACTION) {
      outer1_10(ref.current);
    }
  }, []);
};
