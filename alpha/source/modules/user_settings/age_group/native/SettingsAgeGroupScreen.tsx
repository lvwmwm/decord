// Module ID: 16883
// Function ID: 16884
// Name: SettingsAgeGroupScreen
// Dependencies: [19, 17, 8524, 1072, 21, 5170, 575, 8046, 2185, 5781, 1113, 3252, 16842, 11703, 16884, 16846, 2]
// Exports: default

// Module 16883 (SettingsAgeGroupScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3252 from "module_3252" /* 3252 */;
import Text_Text from "Text/Text" /* 5781 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8046 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import SettingLayoutDefault from "SettingLayout" /* 16846 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const AgeNoticeAgeGroupHeader2 = tmp(16884);
function SettingsAgeGroupHeader() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_9();
  let obj = { style: tmp.headerContainer, children: items };
  const callback = react.useCallback(() => {
    const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
    AgeVerificationActionCreatorsDefault;
    const obj = HelpdeskUtilsDefault;
    openUrl(obj.getArticleURL(constants.AGE_VERIFICATION_LEARN_MORE));
  }, []);
  const obj2 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3252.PY4MA0) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj2), ];
  const obj3 = { variant: "body-sm/normal", color: "text-default", children: intl2.format(_modDef3252["1DN29p"], { handleOnHelpUrlHook: callback }) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroImportDefault(Text2, obj3);
  return metroImportAll(View, obj);
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { headerContainer: obj2 };
obj2 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  let isAgeNoticeSettingsEnabled;
  let obj = isAgeNoticeSettingsEnabled(16842);
  isAgeNoticeSettingsEnabled = obj.useIsAgeNoticeSettingsEnabled();
  let items = [isAgeNoticeSettingsEnabled];
  const node = react.useMemo(() => {
    let AgeNoticeAgeGroupHeader;
    let intl;
    let items;
    let items1;
    const obj = { sections: items1, ListHeaderComponent: AgeNoticeAgeGroupHeader };
    const obj2 = { label: intl.string(_modDef3252["5Mi5TE"]), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl3.intl;
    items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    items1 = [obj2];
    const tmp4 = isAgeNoticeSettingsEnabled;
    if (tmp4) {
      AgeNoticeAgeGroupHeader = AgeNoticeAgeGroupHeader2.AgeNoticeAgeGroupHeader;
    } else {
      AgeNoticeAgeGroupHeader = SettingsAgeGroupHeader;
    }
    return createList(obj);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
};
