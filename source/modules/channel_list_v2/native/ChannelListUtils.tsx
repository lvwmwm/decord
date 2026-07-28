// Module ID: 15120
// Function ID: 115001
// Name: isFavoritesSection
// Dependencies: [653, 5763, 4359, 2]
// Exports: isFavoritesSection, isNamedCategorySection, isRecentsSection, isVoiceChannelsSection, logChannelListEndReached

// Module 15120 (isFavoritesSection)
import { AnalyticEvents } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

export const isFavoritesSection = function isFavoritesSection(arg0, favoritesSectionNumber) {
  return arg0 === favoritesSectionNumber.favoritesSectionNumber;
};
export const isRecentsSection = function isRecentsSection(arg0, recentsSectionNumber) {
  return arg0 === recentsSectionNumber.recentsSectionNumber;
};
export const isVoiceChannelsSection = function isVoiceChannelsSection(section, guildChannels) {
  return section === guildChannels.voiceChannelsSectionNumber;
};
export const isNamedCategorySection = function isNamedCategorySection(section) {
  return section >= require(5763) /* _superPropGet */.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  importDefault(4359).trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};
