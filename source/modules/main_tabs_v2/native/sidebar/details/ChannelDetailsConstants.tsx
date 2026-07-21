// Module ID: 9094
// Function ID: 71307
// Name: ChannelDetailsNavigatorScreens
// Dependencies: []

// Module 9094 (ChannelDetailsNavigatorScreens)
const sum = require(dependencyMap[0]).SEARCH_BAR_HEIGHT + 40;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx");

export const ChannelDetailsNavigatorScreens = { DETAILS: "root", MUTE: "mute", THREADS: "threads", SETTINGS: "settings", PINNED_MESSAGES: "pinned-messages" };
export const ChannelDetailsButtonTypes = { SEARCH: "search", MUTE: "mute", THREADS: "threads", SETTINGS: "settings", MORE: "more" };
export const CHANNEL_DETAILS_MARGIN = 16;
export const CHANNEL_DETAILS_TOP_MARGIN = 24;
export const CHANNEL_DETAILS_BODY_TOP_MARGIN = 20;
export const CHANNEL_DETAILS_SEARCH_HEIGHT = sum;
export const BUTTON_DEFAULT_HEIGHT = 120;
export const CHANNEL_TOPIC_LINE_CLAMP = 3;
export const DESCRIPTION_HORIZONTAL_MARGIN = 24;
export const SPRING_CHANNEL_DETAILS = {};
export const SPRING_CHANNEL_HEADER = {};
