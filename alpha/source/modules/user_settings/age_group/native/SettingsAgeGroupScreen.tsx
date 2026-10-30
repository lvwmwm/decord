// Module ID: 16570
// Function ID: 16571
// Name: SettingsAgeGroupScreen
// Dependencies: [19, 17, 8424, 1072, 21, 5009, 575, 7947, 2062, 5619, 1114, 3093, 16529, 11505, 16571, 16533, 2]
// Exports: default

// Module 16570 (SettingsAgeGroupScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3093 from "module_3093" /* 3093 */;
import Text_Text from "Text/Text" /* 5619 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import SettingLayoutDefault from "SettingLayout" /* 16533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const TinyBroncoAgeGroupHeader2 = tmp(16571);
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
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3093.PY4MA0) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3093["1DN29p"], { handleOnHelpUrlHook: callback }) };
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
  let obj = isTinyBroncoSettingsEnabled(16529);
  isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = react.useMemo(() => {
    let TinyBroncoAgeGroupHeader;
    let intl;
    let items;
    let items1;
    const obj = { sections: items1, ListHeaderComponent: TinyBroncoAgeGroupHeader };
    const obj2 = { label: intl.string(_modDef3093["5Mi5TE"]), settings: items };
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
