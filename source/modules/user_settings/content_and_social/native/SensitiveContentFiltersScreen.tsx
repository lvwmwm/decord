// Module ID: 13596
// Function ID: 103038
// Name: UserSettingsSensitiveContentFilters
// Dependencies: []
// Exports: default

// Module 13596 (UserSettingsSensitiveContentFilters)
let closure_3 = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  let obj = {};
  const memo = React.useMemo(() => {
    let obj = callback(closure_2[4]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[3]).intl;
    obj.label = intl.string(callback(closure_2[3]).t.GYpoAq);
    const items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = closure_4);
    obj.settings = items;
    const intl2 = callback(closure_2[3]).intl;
    obj.subLabel = intl2.string(callback(closure_2[3]).t.Wnojv1);
    const items1 = [obj, ];
    const obj1 = {};
    const intl3 = callback(closure_2[3]).intl;
    obj1.label = intl3.string(callback(closure_2[3]).t.16/3Bi);
    const items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = closure_4);
    obj1.settings = items2;
    const intl4 = callback(closure_2[3]).intl;
    obj1.subLabel = intl4.string(callback(closure_2[3]).t.XgH9eh);
    items1[1] = obj1;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  obj = { screen: arg1(dependencyMap[5]).SettingsScreen.SENSITIVE_CONTENT_FILTERS };
  const items = [callback(importDefault(dependencyMap[5]), obj), callback(importDefault(dependencyMap[6]), { node: memo })];
  obj.children = items;
  return callback2(closure_6, obj);
};
