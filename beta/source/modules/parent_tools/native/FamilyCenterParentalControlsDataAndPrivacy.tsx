// Module ID: 14467
// Function ID: 14468
// Name: FamilyCenterParentalControlsDataAndPrivacy
// Dependencies: [19, 1074, 7417, 21, 1115, 2487, 2111, 11006, 14247, 2]
// Exports: default

// Module 14467 (FamilyCenterParentalControlsDataAndPrivacy)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _modDef2487 from "module_2487" /* 2487 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsDataAndPrivacy.tsx");

export default function FamilyCenterParentalControlsDataAndPrivacy() {
  const memo = react.useMemo(() => {
    let Imp6Ns;
    let Z5yJZy;
    let cnCK6b;
    let format;
    let format2;
    let format3;
    let format4;
    let items;
    let items2;
    let items3;
    let items4;
    let obj11;
    let obj12;
    let obj2;
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    let obj9;
    let v6mK5Pz;
    const obj = { settings: items, subLabel: format(Z5yJZy, obj2) };
    items = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_STATISTICS];
    const intl = memo(dependencyMap[4]).intl;
    format = intl.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
    Z5yJZy = _modDef2487.Z5yJZy;
    const items1 = [obj, , , ];
    obj3 = HelpdeskUtilsDefault;
    const obj4 = { settings: items2, subLabel: format2(Imp6Ns, obj5) };
    items2 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_PERSONALIZATION];
    const intl2 = memo(dependencyMap[4]).intl;
    format2 = intl2.format;
    obj5 = { helpdeskArticle: obj6.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
    Imp6Ns = _modDef2487.Imp6Ns;
    items1[1] = obj4;
    obj6 = HelpdeskUtilsDefault;
    const obj7 = { settings: items3, subLabel: format3(cnCK6b, obj8) };
    items3 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS];
    const intl3 = memo(dependencyMap[4]).intl;
    format3 = intl3.format;
    obj8 = { helpdeskArticle: obj9.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    cnCK6b = _modDef2487.cnCK6b;
    items1[2] = obj7;
    obj9 = HelpdeskUtilsDefault;
    const obj10 = { settings: items4, subLabel: format4(v6mK5Pz, obj11) };
    items4 = [MobileUserSettings.PARENTAL_CONTROLS_DATA_USAGE_QUESTS_3P];
    const intl4 = memo(dependencyMap[4]).intl;
    format4 = intl4.format;
    obj11 = { helpdeskArticle: obj12.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    v6mK5Pz = _modDef2487["6mK5Pz"];
    items1[3] = obj10;
    obj12 = HelpdeskUtilsDefault;
    return items1;
  }, []);
  let items = [memo];
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: memo };
    return obj.createList(obj2);
  }, items);
  return jsx(SettingLayoutDefault, { node });
};
