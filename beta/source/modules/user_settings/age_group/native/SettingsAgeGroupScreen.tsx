// Module ID: 14284
// Function ID: 14285
// Name: SettingsAgeGroupScreen
// Dependencies: [19, 17, 7417, 1074, 21, 4836, 576, 7859, 2111, 4832, 1115, 3039, 14243, 11006, 14285, 14247, 2]
// Exports: default

// Module 14284 (SettingsAgeGroupScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _modDef3039 from "module_3039" /* 3039 */;
import Text_Text from "Text/Text" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const TinyBroncoAgeGroupHeader2 = tmp(14285);
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
    openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3039.PY4MA0) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3039["1DN29p"], { handleOnHelpUrlHook: callback }) };
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
  let isTinyBroncoSettingsEnabled;
  let obj = isTinyBroncoSettingsEnabled(14243);
  isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = react.useMemo(() => {
    let TinyBroncoAgeGroupHeader;
    let intl;
    let items;
    let items1;
    const obj = { sections: items1, ListHeaderComponent: TinyBroncoAgeGroupHeader };
    const obj2 = { label: intl.string(_modDef3039["5Mi5TE"]), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl3.intl;
    items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    items1 = [obj2];
    const tmp4 = isTinyBroncoSettingsEnabled;
    if (tmp4) {
      TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = SettingsAgeGroupHeader;
    }
    return createList(obj);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
};
