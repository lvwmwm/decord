// Module ID: 14647
// Function ID: 14648
// Name: SearchPlatformConstants
// Dependencies: [5950, 14648, 14650, 9297, 9295, 10409, 2]

// Module 14647 (SearchPlatformConstants)
import LinkingWhitelist from "LinkingWhitelist" /* 5950 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 9295 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 9297 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 10409 */;
import TiktokNeutralIcon from "TiktokNeutralIcon" /* 14648 */;
import TwitterNeutralIcon from "TwitterNeutralIcon" /* 14650 */;
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
