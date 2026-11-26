// Module ID: 17711
// Function ID: 17712
// Name: channel_list_v2/ChannelListUtils
// Dependencies: [1071, 8321, 5650, 2]
// Exports: isFavoritesSection, isNamedCategorySection, isRecentsSection, isVoiceChannelsSection, logChannelListEndReached

// Module 17711 (channel_list_v2/ChannelListUtils)
import Constants from "Constants" /* 1071 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import ChannelListState from "ChannelListState" /* 8321 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListUtils.tsx");

export function isFavoritesSection(arg0, favoritesSectionNumber) {
  return arg0 === favoritesSectionNumber.favoritesSectionNumber;
}
export function isRecentsSection(arg0, recentsSectionNumber) {
  return arg0 === recentsSectionNumber.recentsSectionNumber;
}
export function isVoiceChannelsSection(section, guildChannels) {
  return section === guildChannels.voiceChannelsSectionNumber;
}
export function isNamedCategorySection(section) {
  return section >= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY;
}
export function logChannelListEndReached() {
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_END_REACHED);
}
