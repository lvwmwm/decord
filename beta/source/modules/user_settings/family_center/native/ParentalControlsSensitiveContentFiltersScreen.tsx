// Module ID: 15510
// Function ID: 15511
// Name: ParentalControlsSensitiveContentFiltersScreen
// Dependencies: [19, 7417, 21, 1115, 11006, 14247, 2]
// Exports: default

// Module 15510 (ParentalControlsSensitiveContentFiltersScreen)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items2;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(intl5.t.GYpoAq), settings: items, subLabel: intl2.string(intl5.t.Wnojv1) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl5.intl;
    items = [, ];
    ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = MobileUserSettings);
    intl2 = intl5.intl;
    items1 = [obj2, ];
    const obj3 = { label: intl3.string(intl5.t["16/3Bi"]), settings: items2, subLabel: intl4.string(intl5.t.XgH9eh) };
    intl3 = intl5.intl;
    items2 = [, ];
    ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = MobileUserSettings);
    intl4 = intl5.intl;
    items1[1] = obj3;
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};
