// Module ID: 15025
// Function ID: 15026
// Name: SettingsAgeGroupScreen
// Dependencies: [19, 17, 8270, 1078, 21, 4790, 580, 558, 568, 8719, 2112, 4786, 1119, 3038, 14984, 11630, 15026, 14988, 2]

// Module 15025 (SettingsAgeGroupScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import _modDef3038 from "module_3038" /* 3038 */;
import Text_Text from "Text/Text" /* 4786 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14984 */;
import SettingLayoutDefault from "SettingLayout" /* 14988 */;
import TinyBroncoAgeGroupHeader2 from "TinyBroncoAgeGroupHeader" /* 15026 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MobileUserSettings = fn(8270).MobileUserSettings;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { headerContainer: { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1119).intl;
    obj2.children = intl.string(_modDef3038.PY4MA0);
    const tmp9 = React5(tmp(4786).Text, obj2);
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp(1119).intl;
    const obj4 = { handleOnHelpUrlHook: first };
    obj3.children = intl2.format(_modDef3038["1DN29p"], obj4);
    const tmp13 = React5(tmp(4786).Text, obj3);
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.headerContainer) {
    const obj5 = { style: tmp4.headerContainer, children: null };
    const items = [tmp6, tmp10];
    obj5.children = items;
    const tmp17 = closure_1_8(View, obj5);
    cResult[3] = tmp4.headerContainer;
    cResult[4] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  return tmp14;
}) : (() => {
  let obj = { style: closure_9().headerContainer, children: null };
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3038.PY4MA0);
  const items = [React5(Text_Text.Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3038["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_8(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  if (cResult[0] !== isTinyBroncoSettingsEnabled) {
    let obj3 = { sections: null, ListHeaderComponent: null };
    const obj4 = { label: null, settings: null };
    const intl = tmp(1119).intl;
    obj4.label = intl.string(_modDef3038["5Mi5TE"]);
    const items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    obj4.settings = items;
    const items1 = [obj4];
    obj3.sections = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = tmp(15026).TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_10;
    }
    obj3.ListHeaderComponent = TinyBroncoAgeGroupHeader;
    obj3 = tmp(11630).createList(obj3);
    cResult[0] = isTinyBroncoSettingsEnabled;
    cResult[1] = obj3;
    const tmpResult = tmp(11630);
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj5 = { node: tmp5 };
      const tmp12 = React5(SettingLayoutDefault, obj5);
      cResult[2] = tmp5;
      cResult[3] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[3];
    }
    return tmp9;
  }
}) : (() => {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(14984).useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null };
    const intl = util.intl;
    obj3.label = intl.string(_modDef3038["5Mi5TE"]);
    const items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_10;
    }
    obj2.ListHeaderComponent = TinyBroncoAgeGroupHeader;
    return SettingBuilders.createList(obj2);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
});
