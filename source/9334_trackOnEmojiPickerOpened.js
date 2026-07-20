// Module ID: 9334
// Function ID: 72934
// Name: trackOnEmojiPickerOpened
// Dependencies: []
// Exports: useTrackOnEmojiPickerOpenedForReactions

// Module 9334 (trackOnEmojiPickerOpened)
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
  const channel = channel.getChannel(channelId.getChannelId());
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
  let obj2 = arg1(dependencyMap[7]);
  let obj = {};
  let guildId2;
  if (null != channel) {
    guildId2 = channel.getGuildId();
  }
  obj.guildId = guildId2;
  obj.pickerIntention = intention;
  const topAndNewlyAddedEmojis = obj2.getTopAndNewlyAddedEmojis(obj);
  ({ topEmojis, newlyAddedEmojis } = topAndNewlyAddedEmojis);
  const emojiHotrail = arg1(dependencyMap[8]).getEmojiHotrail({ topEmojis, newlyAddedEmojis, rowSize });
  ({ visibleTopEmojis, visibleNewlyAddedEmojis } = emojiHotrail);
  const obj5 = arg1(dependencyMap[8]);
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
    num_custom_expressions_favorites: prop.filter(importDefault(dependencyMap[10]).isCustomEmoji).length,
    num_standard_expressions_favorites: prop.filter((id) => null == id.id).length,
    num_expressions_frecent: substr1.length,
    num_animated_expressions_frecent: substr1.filter((animated) => {
      animated = undefined;
      if (null != animated) {
        animated = animated.animated;
      }
      return animated;
    }).length,
    num_custom_expressions_frecent: substr1.filter(importDefault(dependencyMap[10]).isCustomEmoji).length,
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
  importDefault(dependencyMap[9]).trackWithMetadata(EXPRESSION_PICKER_OPENED, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const EmojiIntention = arg1(dependencyMap[5]).EmojiIntention;
const ExpressionPickerViewType = arg1(dependencyMap[6]).ExpressionPickerViewType;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx");

export default trackOnEmojiPickerOpened;
export const useTrackOnEmojiPickerOpenedForReactions = function useTrackOnEmojiPickerOpenedForReactions(arg0) {
  let closure_0 = React.useRef(arg0);
  const effect = React.useEffect(() => {
    if (ref.current.intention === constants.REACTION) {
      callback(ref.current);
    }
  }, []);
};
