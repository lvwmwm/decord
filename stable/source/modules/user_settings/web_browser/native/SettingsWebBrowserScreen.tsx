// Module ID: 17828
// Function ID: 17829
// Name: SettingsWebBrowserScreen
// Dependencies: [19, 8536, 21, 11717, 16936, 2]

// Module 17828 (SettingsWebBrowserScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import SettingLayoutDefault from "SettingLayout" /* 16936 */;
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
