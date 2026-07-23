// Module ID: 10126
// Function ID: 78370
// Name: AppDMOptionsBottomSheet
// Dependencies: [31, 27, 5066, 653, 33, 4130, 689, 566, 8492, 4098, 5796, 5472, 5187, 5503, 5165, 1212, 2]
// Exports: default

// Module 10126 (AppDMOptionsBottomSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.sheet = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { paddingLeft: 16, paddingRight: 16, paddingBottom: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  userId = userId.userId;
  const channel = userId.channel;
  const application = userId.application;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = userId(application[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != application) {
      id = application.id;
    }
    return outer1_5.getNewestTokenForApplication(id);
  });
  const items1 = [channel.id, userId];
  const items2 = [application, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    channel(application[8])({ userId, channelId: channel.id });
    channel(application[9]).hideActionSheet();
  }, items1);
  const callback1 = stateFromStores.useCallback(() => {
    let tmp = null != application;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = userId(application[10]);
      obj = { screen: outer1_6.AUTHORIZED_APP };
      obj = { oauth2Token: stateFromStores };
      obj.params = obj;
      obj.openUserSettings(obj);
      channel(application[9]).hideActionSheet();
      const obj4 = channel(application[9]);
    }
  }, items2);
  const effect = stateFromStores.useEffect(() => {
    const response = channel(application[11]).fetch();
  }, []);
  obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.content };
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl = userId(application[15]).intl;
  obj2.label = intl.string(userId(application[15]).t.iXAna6);
  obj2.onPress = callback;
  const items3 = [callback(userId(application[14]).TableRow, obj2), ];
  const obj3 = {};
  const intl2 = userId(application[15]).intl;
  obj3.label = intl2.string(userId(application[15]).t.KUsDNI);
  obj3.onPress = callback1;
  obj3.disabled = null == stateFromStores;
  items3[1] = callback(userId(application[14]).TableRow, obj3);
  obj1.children = items3;
  obj.children = callback2(userId(application[13]).TableRowGroup, obj1);
  obj.children = callback(View, obj);
  return callback(userId(application[12]).BottomSheet, obj);
};
