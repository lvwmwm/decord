// Module ID: 16132
// Function ID: 16133
// Name: RedesignSettingsCategorySocialScreen
// Dependencies: [19, 21, 558, 576, 11262, 16126, 14775, 2]

// Module 16132 (RedesignSettingsCategorySocialScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import SettingLayoutDefault from "SettingLayout" /* 14775 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16126 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsCategorySocialScreen() {
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
    items[0] = tmpResult2.buildCategorySocialSettingsSection();
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
}) : (function RedesignSettingsCategorySocialScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategorySocialSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}));
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategorySocialScreen.tsx");

export default memoResult;
