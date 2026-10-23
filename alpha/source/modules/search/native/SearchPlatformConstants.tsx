// Module ID: 13197
// Function ID: 13198
// Name: SearchPlatformConstants
// Dependencies: [5659, 13198, 13200, 8478, 8476, 9493, 2]

// Module 13197 (SearchPlatformConstants)
import LinkingWhitelist from "LinkingWhitelist" /* 5659 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8476 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8478 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 9493 */;
import TiktokNeutralIcon from "TiktokNeutralIcon" /* 13198 */;
import TwitterNeutralIcon from "TwitterNeutralIcon" /* 13200 */;
import size from "module_2" /* 2 */;

const items = [{ REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon }, , , , ];
({ REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon });
items[1] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
({ REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon });
items[2] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
({ REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon });
items[3] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
({ REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon });
items[4] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
({ REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon });
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
