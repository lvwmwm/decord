// Module ID: 15133
// Function ID: 15134
// Name: getActivityPlatform
// Dependencies: [1072, 15132, 10913, 6661, 9022, 15119, 15120, 15134, 15135, 2]
// Exports: default

// Module 15133 (getActivityPlatform)
import Constants from "Constants" /* 1072 */;
import PlatformsDefault from "Platforms" /* 6661 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 9022 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10913 */;
import isOnXboxDefault from "isOnXbox" /* 15119 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15120 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 15132 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 15134 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 15135 */;
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
