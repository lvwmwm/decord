// Module ID: 15602
// Function ID: 15603
// Name: RoleColorsSetting
// Dependencies: [19, 4782, 8270, 558, 568, 504, 14758, 1119, 11630, 2]
// Exports: onRoleColorSettingValueChange

// Module 15602 (RoleColorsSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14758 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => roleStyle.roleStyle);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: "username" };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.YEOEi6);
    const items = [obj2, , ];
    const obj3 = { label: null, value: "dot" };
    const intl2 = tmp(1119).intl;
    obj3.label = intl2.string(tmp(1119).t.mQaro3);
    items[1] = obj3;
    const obj4 = { label: null, value: "hidden" };
    const intl3 = tmp(1119).intl;
    obj4.label = intl3.string(tmp(1119).t.Ji2EVJ);
    items[2] = obj4;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const obj = { label: null, value: "username" };
  const intl = util.intl;
  obj.label = intl.string(util.t.YEOEi6);
  const items = [obj, , ];
  const obj2 = { label: null, value: "dot" };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.mQaro3);
  items[1] = obj2;
  const obj3 = { label: null, value: "hidden" };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.Ji2EVJ);
  items[2] = obj3;
  return items;
}, []));
function onRoleColorSettingValueChange(roleStyle) {
  AccessibilityActionCreators.setRoleStyle(roleStyle);
}
const SettingBuilders = fn(11630);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSOPWm);
  },
  parent: fn(8270).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: tmp3
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default radio;
export const useRoleColorSettingValue = tmp2;
export { onRoleColorSettingValueChange };
export const useRoleColorSettingOptions = tmp3;
