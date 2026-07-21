// Module ID: 11424
// Function ID: 88911
// Name: iOSTrackAutocompleteOpen
// Dependencies: []
// Exports: iOSTrackAutocompleteOpen, iOSTrackAutocompleteSelect

// Module 11424 (iOSTrackAutocompleteOpen)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(autocompleteType, channel, numEmojiResults) {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const merged = Object.assign(require(dependencyMap[2]).collectChannelAnalyticsMetadata(channel));
  const obj3 = require(dependencyMap[2]);
  const merged1 = Object.assign(require(dependencyMap[2]).collectGuildAnalyticsMetadata(channel.guild_id));
  obj["autocomplete_type"] = autocompleteType;
  obj["num_emoji_results"] = numEmojiResults.numEmojiResults;
  obj["num_sticker_results"] = numEmojiResults.numStickerResults;
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(arg0, guild_id, selectionType) {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const merged = Object.assign(require(dependencyMap[2]).collectChannelAnalyticsMetadata(guild_id));
  const obj3 = require(dependencyMap[2]);
  const merged1 = Object.assign(require(dependencyMap[2]).collectGuildAnalyticsMetadata(guild_id.guild_id));
  obj["autocomplete_type"] = arg0;
  obj["selection_type"] = selectionType.selectionType;
  obj["sticker_id"] = selectionType.stickerId;
  obj["num_emoji_results"] = selectionType.numEmojiResults;
  obj["num_sticker_results"] = selectionType.numStickerResults;
  obj["emoji_name"] = selectionType.expressionName;
  obj["is_custom"] = selectionType.isCustom;
  obj["is_animated"] = selectionType.isAnimated;
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};
