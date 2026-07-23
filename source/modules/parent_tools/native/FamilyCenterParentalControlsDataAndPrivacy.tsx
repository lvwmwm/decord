// Module ID: 13834
// Function ID: 105935
// Name: FamilyCenterParentalControlsDataAndPrivacy
// Dependencies: [31, 653, 7662, 33, 1212, 2198, 1920, 10095, 13550, 2]
// Exports: default

// Module 13834 (FamilyCenterParentalControlsDataAndPrivacy)
import result from "result";
import { HelpdeskArticles } from "ME";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MobileSetting").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = React.useMemo(() => {
    let obj = { settings: items };
    items = [outer1_5.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    const intl = memo(outer1_2[4]).intl;
    obj = {};
    let obj2 = outer1_1(outer1_2[6]);
    obj.helpdeskArticle = obj2.getArticleURL(outer1_4.DATA_PRIVACY_CONTROLS);
    obj.subLabel = intl.format(outer1_1(outer1_2[5]).Z5yJZy, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    items2 = [outer1_5.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    const intl2 = memo(outer1_2[4]).intl;
    const obj1 = {};
    let obj5 = outer1_1(outer1_2[6]);
    obj1.helpdeskArticle = obj5.getArticleURL(outer1_4.DATA_USED_FOR_RECOMMENDED);
    obj.subLabel = intl2.format(outer1_1(outer1_2[5]).Imp6Ns, obj1);
    items1[1] = obj;
    obj2 = { settings: items3 };
    items3 = [outer1_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    const intl3 = memo(outer1_2[4]).intl;
    const obj3 = { helpdeskArticle: outer1_1(outer1_2[6]).getArticleURL(outer1_4.QUESTS_PRIVACY_CONTROLS) };
    obj2.subLabel = intl3.format(outer1_1(outer1_2[5]).cnCK6b, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4 };
    items4 = [outer1_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    const intl4 = memo(outer1_2[4]).intl;
    obj5 = {};
    const obj9 = outer1_1(outer1_2[6]);
    obj5.helpdeskArticle = outer1_1(outer1_2[6]).getArticleURL(outer1_4.QUESTS_PRIVACY_CONTROLS);
    obj4.subLabel = intl4.format(outer1_1(outer1_2[5])["6mK5Pz"], obj5);
    items1[3] = obj4;
    return items1;
  }, []);
  let items = [memo];
  const node = React.useMemo(() => {
    let obj = memo(outer1_2[7]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items);
  return jsx(importDefault(13550), { node });
};
