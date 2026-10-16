// Module ID: 13989
// Function ID: 13990
// Name: getActivityPlatform
// Dependencies: [1087, 13988, 10491, 5981, 8689, 13975, 13976, 13990, 13991, 2]
// Exports: default

// Module 13989 (getActivityPlatform)
import Constants from "Constants" /* 1087 */;
import PlatformsDefault from "Platforms" /* 5981 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8689 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10491 */;
import isOnXboxDefault from "isOnXbox" /* 13975 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13976 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13988 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 13990 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 13991 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  let closure_0 = session_id;
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (isListeningOnSpotifyDefault(session_id)) {
    const tmpResult = PlatformsDefault;
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (isCrunchyrollActivityDefault(session_id)) {
    const tmpResult6 = PlatformsDefault;
    return tmpResult6.get(PlatformTypes.CRUNCHYROLL);
  } else if (isOnXboxDefault(session_id)) {
    const tmpResult7 = PlatformsDefault;
    return tmpResult7.get(PlatformTypes.XBOX);
  } else if (isOnPlayStationDefault(session_id)) {
    const tmpResult8 = PlatformsDefault;
    return tmpResult8.get(PlatformTypes.PLAYSTATION);
  } else {
    if (!isOnMetaQuestDefault(session_id)) {
      if (!isOnMetaHorizonDefault(session_id)) {
        const tmpResult9 = PlatformsDefault;
        const found = tmpResult9.find((name) => name.name === name.name);
        let tmp5 = null;
        if (null != found) {
          tmp5 = null;
          if (set.has(found.type)) {
            tmp5 = found;
          }
        }
        return tmp5;
      }
    }
    const tmpResult10 = PlatformsDefault;
    return tmpResult10.get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
