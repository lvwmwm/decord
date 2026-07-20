// Module ID: 10863
// Function ID: 84510
// Name: getChannelDetailsButtons
// Dependencies: []
// Exports: getChannelDetailsButtons, navigateToChannelDetailsScreen

// Module 10863 (getChannelDetailsButtons)
const ChannelDetailsButtonTypes = require(dependencyMap[0]).ChannelDetailsButtonTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === require(dependencyMap[1]).ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((arg0) => arg0 !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(navigate, screen, channelId, source) {
  navigate.navigate("sidebar", { screen, channelId, source });
};
