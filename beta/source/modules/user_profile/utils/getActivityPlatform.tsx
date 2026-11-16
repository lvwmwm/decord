// Module ID: 15728
// Function ID: 15729
// Name: getActivityPlatform
// Dependencies: [1072, 15727, 10860, 7087, 9481, 15714, 15715, 15729, 15730, 2]
// Exports: default

// Module 15728 (getActivityPlatform)
import Constants from "Constants" /* 1072 */;
import PlatformsDefault from "Platforms" /* 7087 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 9481 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10860 */;
import isOnXboxDefault from "isOnXbox" /* 15714 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15715 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 15727 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 15729 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 15730 */;
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
