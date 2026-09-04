// Module ID: 12285
// Function ID: 12286
// Name: SEARCH_TEXT_INPUT_DEBOUNCE_TIME
// Dependencies: [4191, 12286, 12288, 8034, 8032, 8818, 2]

// Module 12285 (SEARCH_TEXT_INPUT_DEBOUNCE_TIME)
import set from "set" /* 2 */;
import LINKING_WHITELIST from "LINKING_WHITELIST" /* 4191 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8032 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8034 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 8818 */;
import TiktokNeutralIcon from "TiktokNeutralIcon" /* 12286 */;
import TwitterNeutralIcon from "TwitterNeutralIcon" /* 12288 */;

let obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
const items = [obj, , , , ];
obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[1] = obj;
obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
items[2] = obj;
items[3] = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj1 = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
items[4] = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const obj2 = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = set.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
