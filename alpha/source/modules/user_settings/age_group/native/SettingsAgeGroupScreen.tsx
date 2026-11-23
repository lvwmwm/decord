// Module ID: 16022
// Function ID: 16023
// Name: SettingsAgeGroupScreen
// Dependencies: [19, 17, 8712, 1071, 21, 4913, 575, 7793, 2187, 5504, 1112, 3444, 15981, 11937, 16023, 15985, 2]
// Exports: default

// Module 16022 (SettingsAgeGroupScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import _modDef3444 from "module_3444" /* 3444 */;
import Text_Text from "Text/Text" /* 5504 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import SettingLayoutDefault from "SettingLayout" /* 15985 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const AgeNoticeAgeGroupHeader2 = tmp(16023);
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
  const obj2 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3444.PY4MA0) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj2), ];
  const obj3 = { variant: "body-sm/normal", color: "text-default", children: intl2.format(_modDef3444["1DN29p"], { handleOnHelpUrlHook: callback }) };
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
  let obj = isAgeNoticeSettingsEnabled(15981);
  isAgeNoticeSettingsEnabled = obj.useIsAgeNoticeSettingsEnabled();
  let items = [isAgeNoticeSettingsEnabled];
  const node = react.useMemo(() => {
    let AgeNoticeAgeGroupHeader;
    let intl;
    let items;
    let items1;
    const obj = { sections: items1, ListHeaderComponent: AgeNoticeAgeGroupHeader };
    const obj2 = { label: intl.string(_modDef3444["5Mi5TE"]), settings: items };
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
