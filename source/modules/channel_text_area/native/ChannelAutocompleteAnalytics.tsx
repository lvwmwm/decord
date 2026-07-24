// Module ID: 11464
// Function ID: 89193
// Name: iOSTrackAutocompleteOpen
// Dependencies: [653, 675, 4324, 2]
// Exports: iOSTrackAutocompleteOpen, iOSTrackAutocompleteSelect

// Module 11464 (iOSTrackAutocompleteOpen)
import { AnalyticEvents } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteAnalytics.tsx");

export const iOSTrackAutocompleteOpen = function iOSTrackAutocompleteOpen(arg0, guild_id, numEmojiResults) {
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(guild_id));
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guild_id.guild_id));
  obj["autocomplete_type"] = arg0;
  obj["num_emoji_results"] = numEmojiResults.numEmojiResults;
  obj["num_sticker_results"] = numEmojiResults.numStickerResults;
  obj["game_mentions_available"] = numEmojiResults.gameMentionsAvailable;
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, obj);
};
export const iOSTrackAutocompleteSelect = function iOSTrackAutocompleteSelect(arg0, guild_id, selectionType) {
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(guild_id));
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guild_id.guild_id));
  obj["autocomplete_type"] = arg0;
  obj["selection_type"] = selectionType.selectionType;
  obj["sticker_id"] = selectionType.stickerId;
  obj["application_id"] = selectionType.gameId;
  obj["num_emoji_results"] = selectionType.numEmojiResults;
  obj["num_sticker_results"] = selectionType.numStickerResults;
  obj["emoji_name"] = selectionType.expressionName;
  obj["is_custom"] = selectionType.isCustom;
  obj["is_animated"] = selectionType.isAnimated;
  obj.track(AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, obj);
};
