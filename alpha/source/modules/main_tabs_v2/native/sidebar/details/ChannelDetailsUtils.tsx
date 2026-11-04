// Module ID: 11840
// Function ID: 11841
// Name: ChannelDetailsUtils
// Dependencies: [10315, 1093, 2]
// Exports: getChannelDetailsButtons, navigateToChannelDetailsScreen

// Module 11840 (ChannelDetailsUtils)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10315 */;
import size from "module_2" /* 2 */;

const ChannelDetailsButtonTypes = ChannelDetailsConstants.ChannelDetailsButtonTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export function getChannelDetailsButtons(channel, stateFromStores) {
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
}
export function navigateToChannelDetailsScreen(navigate, PERMISSIONS, channelId, source) {
  const obj = { screen: PERMISSIONS, channelId, source };
  navigate.navigate("sidebar", obj);
}
