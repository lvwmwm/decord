// Module ID: 16894
// Function ID: 16895
// Name: SettingsWebBrowserScreen
// Dependencies: [19, 8712, 21, 11942, 15993, 2]

// Module 16894 (SettingsWebBrowserScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import SettingLayoutDefault from "SettingLayout" /* 15993 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function SettingsWebBrowserScreen() {
  const node = react.useMemo(() => {
    let items;
    let items1;
    let items2;
    const obj3 = { settings: items };
    items = [constants.SELECT_WEB_BROWSER];
    const obj2 = { sections: items1 };
    items1 = [obj3, ];
    const obj4 = { settings: items2 };
    items2 = [constants.CLEAR_WEB_BROWSER_DATA];
    items1[1] = obj4;
    const obj = SettingBuilders;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
