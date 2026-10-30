// Module ID: 1112
// Function ID: 1113
// Name: RoutingSources
// Dependencies: [1113, 2]

// Module 1112 (RoutingSources)
import ThreadConstants from "ThreadConstants" /* 1113 */;
import size from "module_2" /* 2 */;

const items = [, ];
({ EMBED: arr[0], FORUM: arr[1] } = ThreadConstants.OpenThreadAnalyticsLocations);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/routing/RoutingSources.tsx");

export default { INVITE_ACCEPT: "invite_accept", CHANNEL_LIST_SUGGESTED_SECTION: "channel_list_suggested_section", USER_NAVIGATED_BACK: "user_navigated_back", USER_NAVIGATED_FORWARD: "user_navigated_forward" };
export const ChannelBackNavigationSources = set;
