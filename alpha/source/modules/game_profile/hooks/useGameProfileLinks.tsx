// Module ID: 9571
// Function ID: 9572
// Name: useGameProfileLinks
// Dependencies: [19, 9323, 9373, 1380, 2]
// Exports: useGameProfileLinks

// Module 9571 (useGameProfileLinks)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameProfileMobileStoreLinkUtils from "GameProfileMobileStoreLinkUtils" /* 9373 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let category;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileLinks.tsx");

export function useGameProfileLinks(game) {
  const items = [game];
  return react.useMemo(() => {
    const websites = game.websites;
    const found = websites.filter((category) => {
      category = category.category;
      const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = game(closure_1_1[1]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
      const tmp = game;
      const tmp2 = closure_1_1;
      if (hasItem) {
        const MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[2]).MOBILE_STORE_WEBSITE_CATEGORIES;
        hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
      }
      return hasItem;
    });
    const values = Object.values(GameProfileMobileStoreLinkUtils.MOBILE_STORES);
    const mapped = values.map((item) => {
      const obj = closure_0(dependencyMap[2]);
      return obj.getMobileStoreLink(closure_1_0, item);
    });
    const found1 = mapped.filter(GlobalUtils.isNotNullish);
    const sorted = found.sort((category, category2) => {
      const prop = game(closure_1_1[1]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      const index = prop.indexOf(category.category);
      const prop1 = game(closure_1_1[1]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      return index - prop1.indexOf(category2.category);
    });
    return sorted.concat(found1);
  }, items);
}
