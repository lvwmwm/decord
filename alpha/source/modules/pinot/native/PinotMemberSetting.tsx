// Module ID: 17843
// Function ID: 17844
// Name: PinotMemberSetting
// Dependencies: [17, 1072, 8424, 21, 5009, 575, 11505, 1114, 3157, 11296, 17844, 2062, 5619, 8017, 2]
// Exports: usePinotDataPrivacySections

// Module 17843 (PinotMemberSetting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3157 from "module_3157" /* 3157 */;
import Text_Text from "Text/Text" /* 5619 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import PinotExperiment from "PinotExperiment" /* 11296 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 17844 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
  const articleURL = obj2.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES);
  const obj3 = { style: tmp.footer, children: items };
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3157.V0EPTo, { learnMoreURL: articleURL }) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroRequire(Text, obj4), ];
  let tmp8Result = null;
  const tmp6 = metroImportDefault;
  const tmp7 = View;
  const tmp8 = metroRequire;
  if (locked) {
    const obj5 = { type: "info", message: intl2.format(_modDef3157.Z9bKIJ, obj6), role: "none" };
    const InlineNotice = tmp2(8017).InlineNotice;
    intl2 = tmp2(1114).intl;
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
    return intl.string(_modDef3157.M33rl6);
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
