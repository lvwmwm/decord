// Module ID: 11768
// Function ID: 11769
// Name: ChannelDetailsUtils
// Dependencies: [11257, 1099, 2]
// Exports: getChannelDetailsButtons, navigateToChannelDetailsScreen

// Module 11768 (ChannelDetailsUtils)
import ChannelTypes from "ChannelTypes" /* 1099 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11257 */;
import size from "module_2" /* 2 */;

const ChannelDetailsButtonTypes = ChannelDetailsConstants.ChannelDetailsButtonTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === ChannelTypes.ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((item) => item !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(navigation, PERMISSIONS, channelId, source) {
  navigation.navigate("sidebar", { screen: PERMISSIONS, channelId, source });
};
