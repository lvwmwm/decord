// Module ID: 14534
// Function ID: 14535
// Name: AppDMOptionsBottomSheet
// Dependencies: [19, 17, 7270, 1072, 21, 5009, 575, 504, 8742, 5253, 7557, 7326, 5267, 7054, 6969, 1114, 2]
// Exports: default

// Module 14534 (AppDMOptionsBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import react from "react" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { sheet: obj2, content: { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  let TableRowGroup;
  let intl;
  let intl2;
  let items3;
  let obj3;
  let obj4;
  userId = userId.userId;
  const channel = userId.channel;
  const application = userId.application;
  let tmp = closure_9();
  let obj = userId(application[7]);
  const items = [AuthorizedAppsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
    if (application != null) {
      id = application.id;
    }
    return getNewestTokenForApplication(id);
  });
  const items1 = [channel.id, userId];
  const items2 = [application, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    const obj = { userId, channelId: channel.id };
    showUserProfileActionSheetDefault(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const callback1 = stateFromStores.useCallback(() => {
    let obj3;
    const tmp = null != application && null != stateFromStores;
    if (tmp) {
      const obj2 = { screen: UserSettingsSections.AUTHORIZED_APP, params: obj3 };
      obj3 = { oauth2Token: stateFromStores };
      const obj = openUserSettings;
      obj.openUserSettings(obj2);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet();
    }
  }, items2);
  const effect = stateFromStores.useEffect(() => {
    const obj = channel(application[11]);
    const response = obj.fetch();
  }, []);
  let obj2 = { startExpanded: true, backgroundStyles: tmp.sheet, children: closure_7(View, obj3) };
  obj3 = { style: tmp.content, children: closure_8(TableRowGroup, obj4) };
  BottomSheet = userId(application[12]).BottomSheet;
  obj4 = { hasIcons: false, children: items3 };
  TableRowGroup = userId(application[13]).TableRowGroup;
  const obj5 = { label: intl.string(userId(application[15]).t.iXAna6), onPress: callback };
  const TableRow = userId(application[14]).TableRow;
  intl = userId(application[15]).intl;
  items3 = [closure_7(TableRow, obj5), ];
  const obj6 = { label: intl2.string(userId(application[15]).t.KUsDNI), onPress: callback1, disabled: null == stateFromStores };
  const TableRow2 = userId(application[14]).TableRow;
  intl2 = userId(application[15]).intl;
  items3[1] = closure_7(TableRow2, obj6);
  return closure_7(BottomSheet, obj2);
};
