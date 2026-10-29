// Module ID: 17845
// Function ID: 17846
// Name: RedesignSettingsCategoryServersScreen
// Dependencies: [19, 21, 558, 576, 11302, 17836, 16482, 2]

// Module 17845 (RedesignSettingsCategoryServersScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import SettingLayoutDefault from "SettingLayout" /* 16482 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17836 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsCategoryServersScreen() {
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
    items[0] = tmpResult2.buildCategoryServersSettingsSection();
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
}) : (function RedesignSettingsCategoryServersScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryServersSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}));
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx");

export default memoResult;
