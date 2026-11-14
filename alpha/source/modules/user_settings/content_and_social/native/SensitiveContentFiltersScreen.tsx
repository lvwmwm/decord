// Module ID: 17341
// Function ID: 17342
// Name: SensitiveContentFiltersScreen
// Dependencies: [19, 9202, 21, 1113, 17342, 12406, 17213, 2]
// Exports: default

// Module 17341 (SensitiveContentFiltersScreen)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import SettingLayoutDefault from "SettingLayout" /* 17213 */;
import SettingsScreenNotices from "SettingsScreenNotices" /* 17342 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SettingsScreenNoticesDefault = SettingsScreenNotices;

function SensitiveContentFiltersNotices() {
  SettingsScreenNoticesDefault;
  return <tmp isListHeader screen={SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS} />;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  let ListHeaderComponent;
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items2;
    const obj = { sections: items1, ListHeaderComponent };
    const obj2 = { label: intl.string(intl5.t.GYpoAq), settings: items, subLabel: intl2.string(intl5.t.Wnojv1) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl5.intl;
    items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = MobileUserSettings);
    intl2 = intl5.intl;
    items1 = [obj2, ];
    const obj3 = { label: intl3.string(intl5.t["16/3Bi"]), settings: items2, subLabel: intl4.string(intl5.t.XgH9eh) };
    intl3 = intl5.intl;
    items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = MobileUserSettings);
    intl4 = intl5.intl;
    items1[1] = obj3;
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};
