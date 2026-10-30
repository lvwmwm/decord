// Module ID: 17399
// Function ID: 17400
// Name: SettingsWebBrowserScreen
// Dependencies: [19, 8424, 21, 11505, 16533, 2]

// Module 17399 (SettingsWebBrowserScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import SettingLayoutDefault from "SettingLayout" /* 16533 */;
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
