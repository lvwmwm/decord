// Module ID: 11388
// Function ID: 88559
// Name: SEARCH_TEXT_INPUT_DEBOUNCE_TIME
// Dependencies: []

// Module 11388 (SEARCH_TEXT_INPUT_DEBOUNCE_TIME)
let obj = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.tiktok.regex, Icon: require(dependencyMap[1]).TiktokNeutralIcon };
const items = [obj, , , , ];
obj = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.twitter.regex, Icon: require(dependencyMap[2]).TwitterNeutralIcon };
items[1] = obj;
obj = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.instagram.regex, Icon: require(dependencyMap[3]).InstagramNeutralIcon };
items[2] = obj;
items[3] = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.facebook.regex, Icon: require(dependencyMap[4]).FacebookNeutralIcon };
const obj1 = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.facebook.regex, Icon: require(dependencyMap[4]).FacebookNeutralIcon };
items[4] = { REGEX: require(dependencyMap[0]).LINKING_WHITELIST.youtube.regex, Icon: require(dependencyMap[5]).YoutubeNeutralIcon };
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
