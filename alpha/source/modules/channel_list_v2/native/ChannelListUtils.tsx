// Module ID: 18187
// Function ID: 18188
// Name: channel_list_v2/ChannelListUtils
// Dependencies: [1072, 7700, 5755, 2]
// Exports: isFavoritesSection, isNamedCategorySection, isRecentsSection, isVoiceChannelsSection, logChannelListEndReached

// Module 18187 (channel_list_v2/ChannelListUtils)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import ChannelListState from "ChannelListState" /* 7700 */;
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
