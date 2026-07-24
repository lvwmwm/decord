// Module ID: 9006
// Function ID: 70956
// Name: ConnectAccountStep
// Dependencies: [31, 27, 4167, 1194, 1849, 33, 4130, 689, 4066, 566, 4814, 1392, 3976, 5463, 1273, 9007, 4126, 1212, 4543, 9009, 4086, 4082, 2]
// Exports: ConnectedAccountCard, default

// Module 9006 (ConnectAccountStep)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardName = { flex: 1, minWidth: 0 };
_createForOfIteratorHelperLoose.cardInfo = { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 };
let obj1 = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.platformIcon = obj1;
let obj2 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.platformIconSmall = obj2;
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.infoNotice = obj3;
_createForOfIteratorHelperLoose.infoText = { flex: 1 };
let obj4 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 8 };
_createForOfIteratorHelperLoose.divider = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = clientId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [clientId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getApplication(clientId), items1);
  let obj1 = clientId(566);
  const items2 = [closure_6, closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let currentUser = null;
    if (null != outer1_6.getId()) {
      currentUser = outer1_7.getCurrentUser();
    }
    return currentUser;
  });
  let obj2 = platformType(4814);
  const value = obj2.get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      let obj5 = platformType(1392);
      obj = {};
      ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
      applicationIconSource = obj5.getApplicationIconSource(obj);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      let obj7 = platformType(1392);
      userAvatarSource = obj7.getUserAvatarSource(stateFromStores1);
    }
    let name;
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    const items3 = [clientId];
    const effect = React.useEffect(() => {
      const application = platformType(outer1_2[13]).fetchApplication(clientId);
    }, items3);
    obj = { style: tmp.container };
    obj1 = { style: tmp.header };
    obj2 = { style: tmp.headerIcons };
    let obj3 = { source: applicationIconSource, size: clientId(1273).AvatarSizes.XLARGE };
    const items4 = [callback(clientId(1273).Avatar, obj3), , ];
    let obj4 = { color: platformType(689).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
    items4[1] = callback(clientId(9007).MoreHorizontalIcon, obj4);
    obj5 = { source: userAvatarSource, size: clientId(1273).AvatarSizes.XLARGE };
    items4[2] = callback(clientId(1273).Avatar, obj5);
    obj2.children = items4;
    const items5 = [callback2(View, obj2), , ];
    const obj6 = { variant: "text-lg/normal", color: "text-default" };
    const intl = clientId(1212).intl;
    obj6.children = intl.string(clientId(1212).t.uT1CPa);
    items5[1] = callback(clientId(4126).Text, obj6);
    obj7 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: str };
    items5[2] = callback(clientId(4126).Text, obj7);
    obj1.children = items5;
    const items6 = [callback2(View, obj1), , , ];
    const obj8 = { variant: "text-sm/normal", color: "text-default" };
    const intl2 = clientId(1212).intl;
    const obj9 = { applicationName: str, platformName };
    obj8.children = intl2.format(clientId(1212).t["aJRE/Q"], obj9);
    items6[1] = callback(clientId(4126).Text, obj8);
    const obj10 = { style: tmp.card };
    let tmp24 = null;
    if (null != null) {
      const obj11 = { source: null, style: tmp.platformIcon, disableColor: true };
      tmp24 = callback(clientId(1273).Icon, obj11);
    }
    const items7 = [tmp24, , ];
    const obj12 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
    items7[1] = callback(clientId(4126).Text, obj12);
    const obj13 = {
      variant: "primary",
      size: "sm",
      onPress() {
          platformType(outer1_2[19])({ platformType, location: "OAuth2 Connect Account Step" });
        }
    };
    const intl3 = clientId(1212).intl;
    obj13.text = intl3.string(clientId(1212).t.S0W8Z5);
    items7[2] = callback(clientId(4543).Button, obj13);
    obj10.children = items7;
    items6[2] = callback2(View, obj10);
    const obj14 = { style: tmp.infoNotice };
    const obj15 = { color: platformType(689).colors.ICON_FEEDBACK_INFO, size: "sm" };
    const items8 = [callback(clientId(4086).CircleInformationIcon, obj15), ];
    const obj16 = { variant: "text-sm/normal", color: "text-default", style: tmp.infoText };
    const intl4 = clientId(1212).intl;
    const obj17 = { platformName, applicationName: str };
    obj16.children = intl4.format(clientId(1212).t["8psEFX"], obj17);
    items8[1] = callback(clientId(4126).Text, obj16);
    obj14.children = items8;
    items6[3] = callback2(View, obj14);
    obj.children = items6;
    return callback2(View, obj);
  } else {
    obj3 = clientId(1392);
    obj4 = clientId(3976);
    const icon = value.icon;
    const source = obj3.makeSource(obj4.isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  }
};
export const ConnectedAccountCard = function ConnectedAccountCard(arg0) {
  let applicationName;
  let connectedAccount;
  let platformName;
  let platformType;
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importDefault(4814);
  const value = obj.get(platformType);
  if (null == value) {
    obj = { style: tmp.container };
    obj = { variant: "text-sm/normal", color: "text-default" };
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj1 = { platformName };
    obj.children = intl.format(require(1212) /* getSystemLocale */.t["+oaRw3"], obj1);
    const items = [callback(require(4126) /* Text */.Text, obj), , , ];
    let obj2 = { style: tmp.card };
    let tmp12 = null;
    if (null != null) {
      const obj3 = { source: null, style: tmp.platformIconSmall, disableColor: true };
      tmp12 = callback(require(1273) /* Button */.Icon, obj3);
    }
    const items1 = [tmp12, , ];
    const obj4 = { style: tmp.cardInfo };
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
    const items2 = [callback(require(4126) /* Text */.Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj7 = { platformName, connectedAccountId: connectedAccount.id };
    obj6.children = intl2.format(require(1212) /* getSystemLocale */.t.Dkd7sE, obj7);
    items2[1] = callback(require(4126) /* Text */.Text, obj6);
    obj4.children = items2;
    items1[1] = callback2(View, obj4);
    const obj8 = { color: importDefault(689).colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
    items1[2] = callback(require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon, obj8);
    obj2.children = items1;
    items[1] = callback2(View, obj2);
    const obj9 = { variant: "text-sm/normal", color: "text-default" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj10 = { applicationName };
    obj9.children = intl3.format(require(1212) /* getSystemLocale */.t.pyRNXJ, obj10);
    items[2] = callback(require(4126) /* Text */.Text, obj9);
    const obj11 = { style: tmp.divider };
    items[3] = callback(View, obj11);
    obj.children = items;
    return callback2(View, obj);
  } else {
    obj1 = require(1392) /* getAvatarURL */;
    obj2 = require(3976) /* AccessibilityAnnouncer */;
    const icon = value.icon;
    const source = obj1.makeSource(obj2.isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  }
};
