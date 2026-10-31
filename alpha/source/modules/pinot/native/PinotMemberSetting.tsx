// Module ID: 17887
// Function ID: 17888
// Name: PinotMemberSetting
// Dependencies: [17, 1072, 8432, 21, 5014, 575, 11539, 1113, 3160, 9055, 11327, 2061, 5624, 8025, 2]
// Exports: usePinotDataPrivacySections

// Module 17887 (PinotMemberSetting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef3160 from "module_3160" /* 3160 */;
import Text_Text from "Text/Text" /* 5624 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import PinotExperiment from "PinotExperiment" /* 9055 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 11327 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
function PinotMemberSettingFooter() {
  let intl;
  let intl2;
  let items;
  let obj6;
  const tmp = closure_9();
  const obj = PinotMemberSettingState;
  const locked = obj.usePinotMemberSettingState().locked;
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.DISCOVERABLE_CONTENT_ON_THE_WEB);
  const obj3 = { style: tmp.footer, children: items };
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3160.V0EPTo, { learnMoreURL: articleURL }) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroRequire(Text, obj4), ];
  let tmp8Result = null;
  const tmp6 = metroImportDefault;
  const tmp7 = View;
  const tmp8 = metroRequire;
  if (locked) {
    const obj5 = { type: "info", message: intl2.format(_modDef3160.Z9bKIJ, obj6), role: "none" };
    const InlineNotice = tmp2(8025).InlineNotice;
    intl2 = tmp2(1113).intl;
    obj6 = { learnMoreURL: articleURL };
    tmp8Result = tmp8(InlineNotice, obj5);
  }
  items[1] = tmp8Result;
  return tmp6(tmp7, obj3);
}
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
    return intl.string(_modDef3160.M33rl6);
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
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberSetting.tsx");

export const PinotMemberSetting = toggle;
export function usePinotDataPrivacySections() {
  let items;
  let items2;
  const obj = PinotExperiment;
  if (obj.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    const obj2 = { settings: items, subLabel: metroRequire(PinotMemberSettingFooter, {}) };
    items = [MobileUserSettings.PINOT_MEMBER_SETTING];
    const items1 = [obj2];
    items2 = items1;
  } else {
    items2 = [];
  }
  return items2;
}
