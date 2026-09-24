// Module ID: 16251
// Function ID: 16252
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 558, 568, 11630, 16243, 14988, 2]

// Module 16251 (RedesignSettingsCategoryOtherScreen)
import c from "c" /* 568 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import SettingLayoutDefault from "SettingLayout" /* 14988 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16243 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryOtherScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: null };
    const tmpResult = tmp(11630);
    const items = [tmp(16243).buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    const list = tmpResult.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmpResult2 = tmp(16243);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp9 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}));
