// Module ID: 11985
// Function ID: 92541
// Name: PlatformTypes
// Dependencies: [653, 11984, 9055, 4849, 8155, 11969, 11970, 11986, 11987, 2]
// Exports: default

// Module 11985 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp = importDefault(11984)(session_id.session_id);
  if (null != tmp) {
    return tmp;
  } else if (importDefault(9055)(session_id)) {
    return tmp24(4849).get(PlatformTypes.SPOTIFY);
  } else if (tmp24(8155)(session_id)) {
    return tmp2(4849).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp2(11969)(session_id)) {
    return tmp4(4849).get(PlatformTypes.XBOX);
  } else if (tmp4(11970)(session_id)) {
    return tmp6(4849).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp6(11986)(session_id)) {
      if (!importDefault(11987)(session_id)) {
        const found = importDefault(4849).find((name) => name.name === session_id.name);
        let tmp13 = null;
        if (null != found) {
          tmp13 = null;
          if (set.has(found.type)) {
            tmp13 = found;
          }
        }
        return tmp13;
      }
    }
    return importDefault(4849).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
