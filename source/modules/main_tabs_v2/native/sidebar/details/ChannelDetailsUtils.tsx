// Module ID: 10907
// Function ID: 84795
// Name: getChannelDetailsButtons
// Dependencies: [9140, 669, 2]
// Exports: getChannelDetailsButtons, navigateToChannelDetailsScreen

// Module 10907 (getChannelDetailsButtons)
import { ChannelDetailsButtonTypes } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === require(669) /* set */.ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((arg0) => arg0 !== outer1_2.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(navigate, screen, channelId, source) {
  navigate.navigate("sidebar", { screen, channelId, source });
};
