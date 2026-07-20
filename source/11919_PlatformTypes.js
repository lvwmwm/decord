// Module ID: 11919
// Function ID: 92223
// Name: PlatformTypes
// Dependencies: []
// Exports: default

// Module 11919 (PlatformTypes)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp = importDefault(dependencyMap[1])(session_id.session_id);
  if (null != tmp) {
    return tmp;
  } else if (importDefault(dependencyMap[2])(session_id)) {
    return tmp24(tmp25[3]).get(PlatformTypes.SPOTIFY);
  } else if (tmp24(tmp25[4])(session_id)) {
    return tmp2(tmp3[3]).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp2(tmp3[5])(session_id)) {
    return tmp4(tmp5[3]).get(PlatformTypes.XBOX);
  } else if (tmp4(tmp5[6])(session_id)) {
    return tmp6(tmp7[3]).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp6(tmp7[7])(session_id)) {
      if (!importDefault(dependencyMap[8])(session_id)) {
        const found = importDefault(dependencyMap[3]).find((name) => name.name === name.name);
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
    return importDefault(dependencyMap[3]).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
