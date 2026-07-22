// Module ID: 14438
// Function ID: 108853
// Name: UserSettingsSensitiveContentFilters
// Dependencies: []
// Exports: default

// Module 14438 (UserSettingsSensitiveContentFilters)
let closure_3 = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const node = React.useMemo(() => {
    let obj = callback(closure_2[4]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[3]).intl;
    obj.label = intl.string(callback(closure_2[3]).t.GYpoAq);
    const items = [, ];
    ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = closure_4);
    obj.settings = items;
    const intl2 = callback(closure_2[3]).intl;
    obj.subLabel = intl2.string(callback(closure_2[3]).t.Wnojv1);
    const items1 = [obj, ];
    const obj1 = {};
    const intl3 = callback(closure_2[3]).intl;
    obj1.label = intl3.string(callback(closure_2[3]).t.16/3Bi);
    const items2 = [, ];
    ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = closure_4);
    obj1.settings = items2;
    const intl4 = callback(closure_2[3]).intl;
    obj1.subLabel = intl4.string(callback(closure_2[3]).t.XgH9eh);
    items1[1] = obj1;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(importDefault(dependencyMap[5]), { node });
};
