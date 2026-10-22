// Module ID: 9458
// Function ID: 9459
// Name: useGameProfileLinks
// Dependencies: [19, 558, 576, 9242, 9291, 1388, 2]

// Module 9458 (useGameProfileLinks)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GameProfileMobileStoreLinkUtils from "GameProfileMobileStoreLinkUtils" /* 9291 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileLinks(websites) {
  let tmp4;
  _require = websites;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] !== websites) {
    let tmp6;
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(category) {
          category = category.category;
          const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(dependencyMap[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
          const tmp = websites;
          const tmp2 = dependencyMap;
          if (hasItem) {
            const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
            hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
          }
          return hasItem;
        }
      }
      cResult[2] = I;
      tmp6 = I;
    } else {
      class I {
        constructor(category) {
          category = category.category;
          const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(dependencyMap[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
          const tmp = websites;
          const tmp2 = dependencyMap;
          if (hasItem) {
            const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
            hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
          }
          return hasItem;
        }
      }
    }
    websites = websites.websites;
    const found = websites.filter(tmp6);
    const _Object = Object;
    const values = Object.values(tmp(9291).MOBILE_STORES);
    const mapped = values.map((item) => {
      const obj = GameProfileMobileStoreLinkUtils;
      return obj.getMobileStoreLink(websites, item);
    });
    const _Symbol2 = Symbol;
    const found1 = mapped.filter(tmp(1388).isNotNullish);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(category) {
          category = category.category;
          const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(dependencyMap[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
          const tmp = websites;
          const tmp2 = dependencyMap;
          if (hasItem) {
            const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
            hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
          }
          return hasItem;
        }
      }
      cResult[3] = tmp9;
      tmp8 = tmp9;
    } else {
      class I {
        constructor(category) {
          category = category.category;
          const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(dependencyMap[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
          const tmp = websites;
          const tmp2 = dependencyMap;
          if (hasItem) {
            const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
            hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
          }
          return hasItem;
        }
      }
    }
    const sorted = found.sort(tmp8);
    const combined = sorted.concat(found1);
    cResult[0] = websites;
    cResult[1] = combined;
    tmp4 = combined;
  } else {
    class I {
      constructor(category) {
        category = category.category;
        const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(dependencyMap[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
        let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
        const tmp = websites;
        const tmp2 = dependencyMap;
        if (hasItem) {
          const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
          hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
        }
        return hasItem;
      }
    }
  }
  return tmp4;
}) : (function useGameProfileLinks(arg0) {
  let websites = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    websites = websites.websites;
    const found = websites.filter((category) => {
      category = category.category;
      const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(closure_1_1[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
      const tmp = websites;
      const tmp2 = closure_1_1;
      if (hasItem) {
        const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
        hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
      }
      return hasItem;
    });
    const values = Object.values(GameProfileMobileStoreLinkUtils.MOBILE_STORES);
    const mapped = values.map((item) => {
      const obj = closure_0(dependencyMap[4]);
      return obj.getMobileStoreLink(closure_1_0, item);
    });
    const found1 = mapped.filter(GlobalUtils.isNotNullish);
    const sorted = found.sort((category, category2) => {
      const prop = websites(closure_1_1[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      const index = prop.indexOf(category.category);
      const prop1 = websites(closure_1_1[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      return index - prop1.indexOf(category2.category);
    });
    return sorted.concat(found1);
  }, items);
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileLinks.tsx");

export const useGameProfileLinks = tmp2;
