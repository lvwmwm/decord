// Module ID: 17296
// Function ID: 17297
// Name: PinotMemberSetting
// Dependencies: [17, 1087, 8364, 21, 5003, 587, 11240, 1128, 3154, 17297, 17298, 558, 576, 2067, 5266, 7985, 2]

// Module 17296 (PinotMemberSetting)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2067 */;
import _modDef3154 from "module_3154" /* 3154 */;
import Text_Text from "Text/Text" /* 5266 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import PinotExperiment from "PinotExperiment" /* 17297 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 17298 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const mobile_user_settings_data_and_privacy = "mobile_user_settings_data_and_privacy";
let obj = { footer: obj2 };
obj2 = { gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(_modDef3154.M33rl6);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    const obj = PinotExperiment;
    return obj.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy);
  },
  useValue() {
    const obj = PinotMemberSettingState;
    return !obj.usePinotMemberSettingState().optedOut;
  },
  onValueChange(arg0) {
    const PinotMemberOptedOut = PinotMemberSettingState.PinotMemberOptedOut;
    PinotMemberOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    const obj = PinotMemberSettingState;
    return obj.usePinotMemberSettingState().locked;
  }
};
const toggle = SettingBuilders.createToggle(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotMemberSettingFooter() {
  let intl;
  let intl2;
  let items;
  let obj7;
  const obj = react;
  const cResult = obj.c(3);
  const tmp4 = closure_9();
  const obj2 = PinotMemberSettingState;
  const locked = obj2.usePinotMemberSettingState().locked;
  if (cResult[0] === locked) {
    let tmp5;
    if (cResult[1] === tmp4.footer) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj3 = HelpdeskUtilsDefault;
  const articleURL = obj3.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES);
  const obj4 = { style: tmp4.footer, children: items };
  const obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3154.V0EPTo, { learnMoreURL: articleURL }) };
  const Text = tmp(5266).Text;
  intl = tmp(1128).intl;
  items = [metroRequire(Text, obj5), ];
  let tmp10Result = null;
  const tmp10 = metroRequire;
  const tmp8 = metroImportDefault;
  const tmp9 = View;
  if (locked) {
    const obj6 = { type: "info", message: intl2.format(_modDef3154.Z9bKIJ, obj7), role: "none" };
    const InlineNotice = tmp(7985).InlineNotice;
    intl2 = tmp(1128).intl;
    obj7 = { learnMoreURL: articleURL };
    tmp10Result = tmp10(InlineNotice, obj6);
  }
  items[1] = tmp10Result;
  const tmp8Result = tmp8(tmp9, obj4);
  cResult[0] = locked;
  cResult[1] = tmp4.footer;
  cResult[2] = tmp8Result;
  tmp5 = tmp8Result;
}) : (function PinotMemberSettingFooter() {
  let intl;
  let intl2;
  let items;
  let obj6;
  const tmp = closure_9();
  const obj = PinotMemberSettingState;
  const locked = obj.usePinotMemberSettingState().locked;
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES);
  const obj3 = { style: tmp.footer, children: items };
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3154.V0EPTo, { learnMoreURL: articleURL }) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroRequire(Text, obj4), ];
  let tmp8Result = null;
  const tmp6 = metroImportDefault;
  const tmp7 = View;
  const tmp8 = metroRequire;
  if (locked) {
    const obj5 = { type: "info", message: intl2.format(_modDef3154.Z9bKIJ, obj6), role: "none" };
    const InlineNotice = tmp2(7985).InlineNotice;
    intl2 = tmp2(1128).intl;
    obj6 = { learnMoreURL: articleURL };
    tmp8Result = tmp8(InlineNotice, obj5);
  }
  items[1] = tmp8Result;
  return tmp6(tmp7, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotDataPrivacySections() {
  let first;
  let items;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = PinotExperiment;
  if (obj2.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    let tmp5;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { settings: items, subLabel: metroRequire(closure_10, {}) };
      items = [MobileUserSettings.PINOT_MEMBER_SETTING];
      const items1 = [obj3];
      cResult[1] = items1;
      tmp5 = items1;
    } else {
      tmp5 = cResult[1];
    }
    first = tmp5;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [];
      cResult[0] = items2;
      first = items2;
    } else {
      first = cResult[0];
    }
  }
  return first;
}) : (function usePinotDataPrivacySections() {
  let items;
  let items2;
  const obj = PinotExperiment;
  if (obj.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    const obj2 = { settings: items, subLabel: metroRequire(closure_10, {}) };
    items = [MobileUserSettings.PINOT_MEMBER_SETTING];
    const items1 = [obj2];
    items2 = items1;
  } else {
    items2 = [];
  }
  return items2;
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberSetting.tsx");

export const PinotMemberSetting = toggle;
export const usePinotDataPrivacySections = tmp4;
