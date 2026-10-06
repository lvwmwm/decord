// Module ID: 16147
// Function ID: 16148
// Name: channel_list_v2/ChannelListUtils
// Dependencies: [1085, 7052, 5076, 2]
// Exports: isFavoritesSection, isNamedCategorySection, isRecentsSection, isVoiceChannelsSection, logChannelListEndReached

// Module 16147 (channel_list_v2/ChannelListUtils)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import ChannelListState from "ChannelListState" /* 7052 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

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
  return section >= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY;
};
export const logChannelListEndReached = function logChannelListEndReached() {
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
};
