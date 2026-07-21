// Module ID: 8433
// Function ID: 67301
// Name: DEFAULT_DISCOVERY_CATEGORY_ID
// Dependencies: [4294967295, 0, 0]
// Exports: getLanguageOptions

// Module 8433 (DEFAULT_DISCOVERY_CATEGORY_ID)
let obj = { FEATURED: "featured", GAMING: "gaming", MUSIC: "music", ENTERTAINMENT: "entertainment", TECH: "tech", EDUCATION: "education", HUBS: "hubs" };
const items = [obj.HUBS];
obj = { Clans: -3, [-3]: "Clans", Hub: -2, [-2]: "Hub", Communities: -1, [-1]: "Communities", Activity: 1, [1]: "Activity", Music: 2, [2]: "Music", Television: 3, [3]: "Television", Science: 5, [5]: "Science", Education: 6, [6]: "Education" };
const items1 = [, , , , ];
({ Activity: arr2[0], Music: arr2[1], Television: arr2[2], Science: arr2[3], Education: arr2[4] } = obj);
let closure_2 = [1929380417];
const result = 10 * importDefault(dependencyMap[0]).Millis.MINUTE;
const set = new Set(items);
const result1 = require("__exportStarResult1").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersConstants.tsx");

export const DEFAULT_DISCOVERY_CATEGORY_ID = 0;
export const OTHER_DISCOVERY_CATEGORY_ID = 13;
export const DISCOVERY_ALL_CATEGORIES_ID = -1;
export const HUBS_CATEGORY_ID = -2;
export const RAPIDASH_GUILDS_CATEGORY_ID = -3;
export const GlobalDiscoveryServerTab = obj;
export const GlobalDiscoveryServerEntrypoint = { UNKNOWN: "unknown", GUILDS_BAR: "guilds_bar", RTC_PANEL: "rtc_panel", PROFILE: "profile", GAME_LINK: "game_link", EMBED: "embed" };
export const SEARCH_DISABLED_SERVER_TABS = set;
export const EMPTY_GUILD_IDS = [];
export const SEARCH_RESULTS_FEATURED_PREFIX = "f";
export const SEARCH_RESULTS_QUERY_PREFIX = "q";
export const SEARCH_RESULTS_CATEGORY_PREFIX = "c";
export const SEARCH_RESULTS_LANGUAGE_CODE_PREFIX = "l";
export const FEATURED_GUILDS_CACHE_DURATION = result;
export const FEATURED_GUILDS_SEARCH_OPTIONS = { categoryId: -1 };
export const CategoryId = obj;
export const DISCOVERY_SIDEBAR_CATEGORIES = items1;
export const getLanguageOptions = function getLanguageOptions() {
  const languages = arg1(dependencyMap[1]).getLanguages();
  const found = languages.filter((code) => !closure_2.includes(code.code));
  return found.map((code) => {
    let tmp = code;
    if ("en-US" === code.code) {
      const obj = {};
      const merged = Object.assign(code);
      const intl = callback(closure_1[1]).intl;
      obj["name"] = intl.string(callback(closure_1[1]).t.LQLMGP);
      tmp = obj;
    }
    return tmp;
  });
};
