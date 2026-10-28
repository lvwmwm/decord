// Module ID: 17888
// Function ID: 17889
// Name: channel_list_v2/ChannelListUtils
// Dependencies: [1084, 7672, 5747, 2]
// Exports: isFavoritesSection, isNamedCategorySection, isRecentsSection, isVoiceChannelsSection, logChannelListEndReached

// Module 17888 (channel_list_v2/ChannelListUtils)
import Constants from "Constants" /* 1084 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5747 */;
import ChannelListState from "ChannelListState" /* 7672 */;
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
