// Module ID: 14197
// Function ID: 14198
// Name: getActivityPlatform
// Dependencies: [1087, 14196, 10609, 6481, 8791, 14183, 14184, 14198, 14199, 2]
// Exports: default

// Module 14197 (getActivityPlatform)
import Constants from "Constants" /* 1087 */;
import PlatformsDefault from "Platforms" /* 6481 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8791 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10609 */;
import isOnXboxDefault from "isOnXbox" /* 14183 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14184 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 14196 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 14198 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 14199 */;
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
