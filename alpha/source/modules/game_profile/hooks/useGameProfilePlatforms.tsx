// Module ID: 9572
// Function ID: 9573
// Name: useGameProfilePlatforms
// Dependencies: [19, 8904, 1114, 2]
// Exports: default, getGameProfilePlatformText

// Module 9572 (useGameProfilePlatforms)
import intl7 from "intl" /* 1114 */;
import PlatformType from "PlatformType" /* 8904 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let items = [PlatformType.PlatformType.DESKTOP, "mobile", PlatformType.PlatformType.XBOX, PlatformType.PlatformType.PLAYSTATION, PlatformType.PlatformType.NINTENDO, PlatformType.PlatformType.ROBLOX];
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfilePlatforms.tsx");

export default function useGameProfilePlatforms(platforms) {
  items = [platforms.platforms];
  return react.useMemo(() => {
    set = new Set(platforms.platforms);
    let hasItem = set.has(PlatformType.PlatformType.MACOS) || set.has(tmp(8904).PlatformType.LINUX);
    if (hasItem) {
      set.add(PlatformType.PlatformType.DESKTOP);
    }
    const hasItem1 = set.has(tmp(8904).PlatformType.IOS) || set.has(tmp(8904).PlatformType.ANDROID);
    return items.filter((item) => {
      let hasItem;
      if ("mobile" === item) {
        hasItem = hasItem1;
      } else {
        hasItem = set.has(item);
      }
      return hasItem;
    });
  }, items);
};
export function getGameProfilePlatformText(item) {
  if (PlatformType.PlatformType.DESKTOP === item) {
    const intl6 = tmp(1114).intl;
    return intl6.string(intl7.t.KT6uCJ);
  } else if ("mobile" === item) {
    const intl5 = tmp(1114).intl;
    return intl5.string(intl7.t["0DvssQ"]);
  } else if (PlatformType.PlatformType.XBOX === item) {
    const intl4 = tmp(1114).intl;
    return intl4.string(intl7.t.DDWUJp);
  } else if (PlatformType.PlatformType.PLAYSTATION === item) {
    const intl3 = tmp(1114).intl;
    return intl3.string(intl7.t.fzMz2s);
  } else if (PlatformType.PlatformType.NINTENDO === item) {
    const intl2 = tmp(1114).intl;
    return intl2.string(intl7.t.AMW8je);
  } else if (PlatformType.PlatformType.ROBLOX === item) {
    const intl = tmp(1114).intl;
    return intl.string(intl7.t.MPURhG);
  }
}
