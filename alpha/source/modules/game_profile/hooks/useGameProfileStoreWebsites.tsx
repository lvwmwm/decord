// Module ID: 8872
// Function ID: 8873
// Name: useGameProfileStoreWebsites
// Dependencies: [19, 8873, 558, 576, 8874, 8876, 8875, 2]

// Module 8872 (useGameProfileStoreWebsites)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8873 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8875 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileStoreWebsites(id) {
  let id1;
  let steamReleaseStatus;
  let tmp18;
  let tmp = id1;
  let tmp2 = dependencyMap;
  const obj = id1(576);
  const cResult = obj.c(8);
  id = undefined;
  const useSteamWebsiteUrl = id1(8874).useSteamWebsiteUrl;
  const tmp4 = id1(8874);
  if (id != null) {
    id = id.id;
  }
  const steamWebsiteUrl = useSteamWebsiteUrl(id);
  const tmp7 = steamReleaseStatus(8876)(id);
  id1 = undefined;
  if (id != null) {
    id1 = id.id;
  }
  let websites;
  if (id != null) {
    websites = id.websites;
  }
  steamReleaseStatus = undefined;
  if (id != null) {
    steamReleaseStatus = id.steamReleaseStatus;
  }
  if (null != websites) {
    let tmp11;
    if (null != id1) {
      let tmp15;
      if (cResult[1] === id1) {
        if (cResult[2] === steamReleaseStatus) {
          if (cResult[3] === steamWebsiteUrl) {
            if (cResult[4] === websites) {
              if (cResult[5] === tmp7) {
                tmp11 = cResult[6];
              }
            }
          }
        }
      }
      let found;
      if (websites != null) {
        found = websites.filter((category) => {
          let tmp6 = !(category.category === ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !set.has(id1));
          const tmp3 = category.category === ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !set.has(id1);
          if (tmp6) {
            const hasItem = (category.category !== tmp(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM || steamReleaseStatus !== tmp(8875).SteamReleaseStatus.RETIRED_ABANDONED) && items.includes(category.category);
            tmp6 = hasItem;
          }
          return tmp6;
        });
      }
      if (found == null) {
        found = [];
      }
      const tmp12 = null == steamWebsiteUrl || steamReleaseStatus === tmp(8875).SteamReleaseStatus.RETIRED_ABANDONED || found.some((category) => category.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
      if (!tmp12) {
        const push = found.push;
        const obj2 = { category: tmp(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
        push(obj2);
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(category, category2) {
            let num = -1;
            const tmp = id1;
            const tmp2 = dependencyMap;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
        let num = 7;
        cResult[7] = S;
        tmp15 = S;
      } else {
        class S {
          constructor(category, category2) {
            let num = -1;
            const tmp = id1;
            const tmp2 = dependencyMap;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
      }
      const sorted = found.sort(tmp15);
      if (null != tmp7) {
        class S {
          constructor(category, category2) {
            let num = -1;
            const tmp = id1;
            const tmp2 = dependencyMap;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
        tmp16[1] = tmp7;
        sorted.unshift(tmp16);
      }
      let num2 = 1;
      cResult[1] = id1;
      cResult[2] = steamReleaseStatus;
      cResult[3] = steamWebsiteUrl;
      cResult[4] = websites;
      cResult[5] = tmp7;
      cResult[6] = sorted;
      tmp11 = sorted;
    }
    return tmp11;
  } else {
    class S {
      constructor(category, category2) {
        let num = -1;
        const tmp = id1;
        const tmp2 = dependencyMap;
        if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
          let num2 = 0;
          if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      }
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(category, category2) {
        let num = -1;
        const tmp = id1;
        const tmp2 = dependencyMap;
        if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
          let num2 = 0;
          if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      }
    }
    cResult[0] = tmp19;
    tmp18 = tmp19;
  } else {
    class S {
      constructor(category, category2) {
        let num = -1;
        const tmp = id1;
        const tmp2 = dependencyMap;
        if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
          let num2 = 0;
          if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      }
    }
  }
  tmp11 = tmp18;
}) : (function useGameProfileStoreWebsites(id) {
  let closure_1;
  let id1;
  let steamWebsiteUrl;
  let tmp = id1;
  let tmp2 = steamWebsiteUrl(id1[4]);
  id = undefined;
  const useSteamWebsiteUrl = tmp2.useSteamWebsiteUrl;
  if (id != null) {
    id = id.id;
  }
  steamWebsiteUrl = useSteamWebsiteUrl(id);
  const tmp5 = require("useXboxGamePassStoreUrl")(id);
  importDefault = tmp5;
  id1 = undefined;
  if (id != null) {
    id1 = id.id;
  }
  let websites;
  if (id != null) {
    websites = id.websites;
  }
  let steamReleaseStatus;
  if (id != null) {
    steamReleaseStatus = id.steamReleaseStatus;
  }
  items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp5];
  return websites.useMemo(() => {
    if (null != websites) {
      let tmp2 = id1;
      if (null != id1) {
        let found;
        if (websites != null) {
          found = arr.filter((category) => {
            let tmp6 = !(category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !steamReleaseStatus.has(closure_1_2));
            const tmp3 = category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !steamReleaseStatus.has(closure_1_2);
            if (tmp6) {
              const hasItem = (category.category !== tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM || closure_1_4 !== tmp(tmp2[6]).SteamReleaseStatus.RETIRED_ABANDONED) && items.includes(category.category);
              tmp6 = hasItem;
            }
            return tmp6;
          });
        }
        if (found == null) {
          found = [];
        }
        let someResult = null == steamWebsiteUrl;
        let tmp3 = steamWebsiteUrl;
        if (!someResult) {
          let tmp6 = require;
          someResult = steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
        }
        if (!someResult) {
          someResult = found.some((category) => category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          const push = found.push;
          const obj = { category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, url: tmp3 };
          push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          const tmp = steamWebsiteUrl;
          const tmp2 = id1;
          if (category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          const obj2 = { category: "XBOX_GAME_PASS", url: tmp11 };
          sorted.unshift(obj2);
        }
        return sorted;
      }
    } else {
      let tmp = closure_1;
    }
    return [];
  }, items);
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = tmp3;
