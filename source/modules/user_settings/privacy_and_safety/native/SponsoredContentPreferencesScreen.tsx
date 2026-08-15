// Module ID: 15002
// Function ID: 15003
// Name: SponsoredContentPreferencesScreen
// Dependencies: [19, 8198, 676, 21, 1236, 1993, 10669, 13991, 2]
// Exports: default

// Module 15002 (SponsoredContentPreferencesScreen)
import noop from "noop";
import { MobileUserSettings } from "MobileUserSettings";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default function SponsoredContentPreferencesScreen() {
  let obj = { settings: items, subLabel: null };
  items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  const intl = items1(1236).intl;
  obj = { helpdeskArticle: null };
  obj[0] = importDefault(1993).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj[1] = intl.format(items1(1236).t.cf9mvV, obj);
  items1 = [obj, , ];
  obj = { settings: items2, subLabel: null };
  items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  const intl2 = items1(1236).intl;
  const obj1 = { helpdeskArticle: null };
  const obj3 = importDefault(1993);
  obj1[0] = importDefault(1993).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj[1] = intl2.format(items1(1236).t["2QFDU/"], obj1);
  items1[1] = obj;
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  items1[2] = { settings: items3 };
  const items4 = [items1];
  const node = React.useMemo(() => {
    let obj = items1(outer1_2[6]);
    obj = { sections: items1 };
    return obj.createList(obj);
  }, items4);
  return jsx(importDefault(13991), { node });
};
