// Module ID: 11391
// Function ID: 88537
// Name: SEARCH_TEXT_INPUT_DEBOUNCE_TIME
// Dependencies: [3829, 11392, 11394, 7815, 7813, 11396, 2]

// Module 11391 (SEARCH_TEXT_INPUT_DEBOUNCE_TIME)
let obj = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.tiktok.regex, Icon: require("TiktokNeutralIcon").TiktokNeutralIcon };
const items = [obj, , , , ];
obj = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.twitter.regex, Icon: require("TwitterNeutralIcon").TwitterNeutralIcon };
items[1] = obj;
obj = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.instagram.regex, Icon: require("InstagramNeutralIcon").InstagramNeutralIcon };
items[2] = obj;
items[3] = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.facebook.regex, Icon: require("FacebookNeutralIcon").FacebookNeutralIcon };
const obj1 = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.facebook.regex, Icon: require("FacebookNeutralIcon").FacebookNeutralIcon };
items[4] = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.youtube.regex, Icon: require("YoutubeNeutralIcon").YoutubeNeutralIcon };
const obj2 = { REGEX: require("LINKING_WHITELIST").LINKING_WHITELIST.youtube.regex, Icon: require("YoutubeNeutralIcon").YoutubeNeutralIcon };
const result = require("TwitterNeutralIcon").fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
