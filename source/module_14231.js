// Module ID: 14231
// Function ID: 107576
// Dependencies: []

// Module 14231
const importAllResult = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const MarketingURLs = arg1(dependencyMap[2]).MarketingURLs;
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = callback(closure_2[5]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[4]).intl;
    obj.label = intl.string(callback(closure_2[4]).t.+U02+i);
    const items = [constants.DEVELOPER_MODE];
    obj.settings = items;
    const intl2 = callback(closure_2[4]).intl;
    obj.subLabel = intl2.format(callback(closure_2[4]).t.CY6q/Q, { apiDocsUrl: constants2.API_DOCS });
    const items1 = [obj, , , ];
    const obj2 = { settings: items2 };
    const items2 = [constants.LAUNCHPAD];
    const intl3 = callback(closure_2[4]).intl;
    obj2.subLabel = intl3.string(callback(closure_2[4]).t.gI2GEL);
    items1[1] = obj2;
    const items3 = [constants.CHANNEL_LIST_LAYOUT];
    items1[2] = { settings: items3 };
    const obj3 = {};
    const intl4 = callback(closure_2[4]).intl;
    obj3.label = intl4.string(callback(closure_2[4]).t.jnXV/V);
    const items4 = [constants.ICYMI_TAB];
    obj3.settings = items4;
    items1[3] = obj3;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(importDefault(dependencyMap[6]), { node });
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
