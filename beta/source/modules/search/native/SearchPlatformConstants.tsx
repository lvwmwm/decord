// Module ID: 12607
// Function ID: 12608
// Name: SearchPlatformConstants
// Dependencies: [4452, 12608, 12610, 8359, 8357, 9170, 2]

// Module 12607 (SearchPlatformConstants)
import LinkingWhitelist from "LinkingWhitelist" /* 4452 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8357 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8359 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 9170 */;
import TiktokNeutralIcon from "TiktokNeutralIcon" /* 12608 */;
import TwitterNeutralIcon from "TwitterNeutralIcon" /* 12610 */;
import size from "module_2" /* 2 */;

const items = [{ REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon }, , , , ];
const obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
items[1] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
const obj2 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[2] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
const obj3 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
items[3] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj4 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
items[4] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
