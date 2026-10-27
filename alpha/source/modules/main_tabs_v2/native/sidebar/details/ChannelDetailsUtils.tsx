// Module ID: 11316
// Function ID: 11317
// Name: ChannelDetailsUtils
// Dependencies: [10026, 1105, 2]
// Exports: getChannelDetailsButtons, navigateToChannelDetailsScreen

// Module 11316 (ChannelDetailsUtils)
import ChannelTypes from "ChannelTypes" /* 1105 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10026 */;
import size from "module_2" /* 2 */;

const ChannelDetailsButtonTypes = ChannelDetailsConstants.ChannelDetailsButtonTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let items;
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === ChannelTypes.ChannelTypes.GUILD_DIRECTORY) {
    items = [];
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
  const obj = { screen: PERMISSIONS, channelId, source };
  navigation.navigate("sidebar", obj);
};
