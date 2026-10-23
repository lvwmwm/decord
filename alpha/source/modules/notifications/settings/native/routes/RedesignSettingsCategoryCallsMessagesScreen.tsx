// Module ID: 17292
// Function ID: 17293
// Name: RedesignSettingsCategoryCallsMessagesScreen
// Dependencies: [19, 21, 558, 576, 11204, 17287, 15949, 2]

// Module 17292 (RedesignSettingsCategoryCallsMessagesScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import SettingLayoutDefault from "SettingLayout" /* 15949 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17287 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsCategoryCallsMessagesScreen() {
  let first;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const tmpResult2 = MobileNotifSettingsRouteBuilders;
    items[0] = tmpResult2.buildCategoryCallsMessagesSettingsSection();
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (function RedesignSettingsCategoryCallsMessagesScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryCallsMessagesSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}));
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryCallsMessagesScreen.tsx");

export default memoResult;
