// Module ID: 9459
// Function ID: 9460
// Name: useGameProfilePlatforms
// Dependencies: [19, 8798, 1128, 558, 576, 2]
// Exports: getGameProfilePlatformText

// Module 9459 (useGameProfilePlatforms)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import PlatformType from "PlatformType" /* 8798 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let items = [PlatformType.PlatformType.DESKTOP, "mobile", PlatformType.PlatformType.XBOX, PlatformType.PlatformType.PLAYSTATION, PlatformType.PlatformType.NINTENDO];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfilePlatforms(platforms) {
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== platforms.platforms) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(platforms.platforms);
    let closure_0 = set;
    let hasItem = set.has(tmp(8798).PlatformType.MACOS) || set.has(tmp(8798).PlatformType.LINUX);
    if (hasItem) {
      set.add(PlatformType.PlatformType.DESKTOP);
    }
    cResult[0] = platforms.platforms;
    cResult[1] = set;
  } else {
    closure_0 = cResult[1];
  }
  const hasItem1 = obj2.has(tmp(8798).PlatformType.IOS) || obj2.has(tmp(8798).PlatformType.ANDROID);
  if (cResult[2] === obj2) {
    let tmp9;
    if (cResult[3] === hasItem1) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const found = items.filter((item) => {
    let hasItem;
    if ("mobile" === item) {
      hasItem = hasItem1;
    } else {
      hasItem = set.has(item);
    }
    return hasItem;
  });
  cResult[2] = obj2;
  cResult[3] = hasItem1;
  cResult[4] = found;
  tmp9 = found;
}) : (function useGameProfilePlatforms(platforms) {
  items = [platforms.platforms];
  return react.useMemo(() => {
    set = new Set(platforms.platforms);
    let hasItem = set.has(PlatformType.PlatformType.MACOS) || set.has(tmp(8798).PlatformType.LINUX);
    if (hasItem) {
      set.add(PlatformType.PlatformType.DESKTOP);
    }
    const hasItem1 = set.has(tmp(8798).PlatformType.IOS) || set.has(tmp(8798).PlatformType.ANDROID);
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
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfilePlatforms.tsx");

export default tmp2;
export const getGameProfilePlatformText = function getGameProfilePlatformText(item) {
  if (PlatformType.PlatformType.DESKTOP === item) {
    const intl5 = tmp(1128).intl;
    return intl5.string(intl6.t.KT6uCJ);
  } else if ("mobile" === item) {
    const intl4 = tmp(1128).intl;
    return intl4.string(intl6.t["0DvssQ"]);
  } else if (PlatformType.PlatformType.XBOX === item) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl6.t.DDWUJp);
  } else if (PlatformType.PlatformType.PLAYSTATION === item) {
    const intl2 = tmp(1128).intl;
    return intl2.string(intl6.t.fzMz2s);
  } else if (PlatformType.PlatformType.NINTENDO === item) {
    const intl = tmp(1128).intl;
    return intl.string(intl6.t.AMW8je);
  }
};
