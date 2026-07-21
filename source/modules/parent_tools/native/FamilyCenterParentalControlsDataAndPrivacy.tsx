// Module ID: 13713
// Function ID: 103746
// Name: FamilyCenterParentalControlsDataAndPrivacy
// Dependencies: []
// Exports: default

// Module 13713 (FamilyCenterParentalControlsDataAndPrivacy)
let closure_3 = importAll(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
const MobileSetting = arg1(dependencyMap[2]).MobileSetting;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = React.useMemo(() => {
    let obj = { settings: items };
    const items = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    const intl = memo(closure_2[4]).intl;
    obj = {};
    let obj2 = callback(closure_2[6]);
    obj.helpdeskArticle = obj2.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
    obj.subLabel = intl.format(callback(closure_2[5]).Z5yJZy, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    const items2 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    const intl2 = memo(closure_2[4]).intl;
    const obj1 = {};
    let obj5 = callback(closure_2[6]);
    obj1.helpdeskArticle = obj5.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj.subLabel = intl2.format(callback(closure_2[5]).Imp6Ns, obj1);
    items1[1] = obj;
    obj2 = { settings: items3 };
    const items3 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    const intl3 = memo(closure_2[4]).intl;
    const obj3 = { helpdeskArticle: callback(closure_2[6]).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    obj2.subLabel = intl3.format(callback(closure_2[5]).cnCK6b, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4 };
    const items4 = [closure_5.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    const intl4 = memo(closure_2[4]).intl;
    obj5 = {};
    const obj9 = callback(closure_2[6]);
    obj5.helpdeskArticle = callback(closure_2[6]).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj4.subLabel = intl4.format(callback(closure_2[5]).6mK5Pz, obj5);
    items1[3] = obj4;
    return items1;
  }, []);
  const arg1 = memo;
  const items = [memo];
  const node = React.useMemo(() => {
    let obj = memo(closure_2[7]);
    obj = { sections: memo };
    return obj.createList(obj);
  }, items);
  return jsx(importDefault(dependencyMap[8]), { node });
};
