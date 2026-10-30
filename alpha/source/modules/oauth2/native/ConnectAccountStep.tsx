// Module ID: 9735
// Function ID: 9736
// Name: ConnectAccountStep
// Dependencies: [19, 17, 2040, 502, 1384, 21, 5009, 575, 5248, 504, 6568, 1410, 5016, 6875, 1188, 9736, 5619, 1114, 5629, 9700, 5730, 6987, 2]
// Exports: ConnectedAccountCard, default

// Module 9735 (ConnectAccountStep)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import Text_Text from "Text/Text" /* 5619 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6875 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9700 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let currentUser;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let size1;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 }, card: obj2, cardName: { flex: 1, minWidth: 0 }, cardInfo: { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 }, platformIcon: size, platformIconSmall: size1, infoNotice: obj3, infoText: { flex: 1 }, divider: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj3 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = closure_10();
  const tmp4 = platformType(5248)();
  let obj = clientId(504);
  const items = [ApplicationStore];
  const items1 = [clientId];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(clientId), items1);
  const items2 = [AuthenticationStore, UserStore];
  const obj2 = clientId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  const obj3 = platformType(6568);
  const value = obj3.get(platformType);
  let source = null;
  if (null != value) {
    const makeSource = clientId(1410).makeSource;
    clientId(1410);
    const icon = value.icon;
    const tmp5Result2 = clientId(5016);
    source = makeSource(tmp5Result2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
  let applicationIconSource;
  if (null != stateFromStores) {
    const obj4 = { id: null, icon: null };
    ({ id: obj6.id, icon: obj6.icon } = stateFromStores);
    const tmp2Result = platformType(1410);
    applicationIconSource = tmp2Result.getApplicationIconSource(obj4);
  }
  let userAvatarSource;
  if (null != stateFromStores1) {
    const tmp2Result2 = platformType(1410);
    userAvatarSource = tmp2Result2.getUserAvatarSource(stateFromStores1);
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const items3 = [clientId];
  const effect = react.useEffect(() => {
    const obj = ApplicationActionCreatorsDefault;
    const application = obj.fetchApplication(clientId);
  }, items3);
  const obj5 = { style: tmp.container, children: items6 };
  const obj7 = { style: tmp.header, children: items5 };
  const obj8 = { style: tmp.headerIcons, children: items4 };
  const obj9 = { source: applicationIconSource, size: clientId(1188).AvatarSizes.XLARGE };
  const Avatar = tmp5(1188).Avatar;
  items4 = [closure_8(Avatar, obj9), , ];
  const obj10 = { color: platformType(575).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
  const MoreHorizontalIcon = tmp5(9736).MoreHorizontalIcon;
  items4[1] = closure_8(MoreHorizontalIcon, obj10);
  const obj11 = { source: userAvatarSource, size: clientId(1188).AvatarSizes.XLARGE };
  const Avatar2 = tmp5(1188).Avatar;
  items4[2] = closure_8(Avatar2, obj11);
  items5 = [closure_9(View, obj8), , ];
  const obj12 = { variant: "text-lg/normal", color: "text-default", children: intl.string(clientId(1114).t.uT1CPa) };
  const Text = tmp5(5619).Text;
  intl = tmp5(1114).intl;
  items5[1] = closure_8(Text, obj12);
  items5[2] = closure_8(clientId(5619).Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: str });
  items6 = [closure_9(View, obj7), , , ];
  const obj13 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(clientId(1114).t["aJRE/Q"], { applicationName: str, platformName }) };
  const Text2 = tmp5(5619).Text;
  intl2 = tmp5(1114).intl;
  items6[1] = closure_8(Text2, obj13);
  let tmp16Result = null;
  const obj14 = { style: tmp.card, children: items7 };
  if (null != source) {
    const obj15 = { source, style: tmp.platformIcon, disableColor: true };
    tmp16Result = tmp16(tmp5(1188).Icon, obj15);
  }
  items7 = [tmp16Result, , ];
  const obj16 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
  items7[1] = closure_8(clientId(5619).Text, obj16);
  const obj17 = {
    variant: "primary",
    size: "sm",
    onPress: function handleConnect() {
      const obj = { platformType, location: "OAuth2 Connect Account Step" };
      authorizeConnectionDefault(obj);
    },
    text: intl3.string(clientId(1114).t.S0W8Z5)
  };
  const Button = tmp5(5629).Button;
  intl3 = tmp5(1114).intl;
  items7[2] = closure_8(Button, obj17);
  items6[2] = closure_9(View, obj14);
  const obj18 = { style: tmp.infoNotice, children: items8 };
  const obj19 = { color: platformType(575).colors.ICON_FEEDBACK_INFO, size: "sm" };
  const CircleInformationIcon = tmp5(5730).CircleInformationIcon;
  items8 = [closure_8(CircleInformationIcon, obj19), ];
  const obj20 = { variant: "text-sm/normal", color: "text-default", style: tmp.infoText, children: intl4.format(clientId(1114).t["8psEFX"], { platformName, applicationName: str }) };
  const Text3 = tmp5(5619).Text;
  intl4 = tmp5(1114).intl;
  items8[1] = closure_8(Text3, obj20);
  items6[3] = closure_9(View, obj18);
  return closure_9(View, obj5);
};
export function ConnectedAccountCard(arg0) {
  let applicationName;
  let connectedAccount;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj10;
  let platformName;
  let platformType;
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  const obj = PlatformsDefault;
  const value = obj.get(platformType);
  let source = null;
  if (null != value) {
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    const icon = value.icon;
    const obj2 = shared;
    source = makeSource(obj2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
  const obj3 = { style: tmp.container, children: items };
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: intl.format(intl5.t["+oaRw3"], { platformName }) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroImportAll(Text, obj4), , , ];
  let tmp11Result = null;
  const obj5 = { style: tmp.card, children: items1 };
  if (null != source) {
    const obj6 = { source, style: tmp.platformIconSmall, disableColor: true };
    tmp11Result = tmp11(tmp12(1188).Icon, obj6);
  }
  items1 = [tmp11Result, , ];
  const obj7 = { style: tmp.cardInfo, children: items2 };
  items2 = [, ];
  const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
  items2[0] = metroImportAll(Text_Text.Text, obj8);
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl2.format(intl5.t.Dkd7sE, obj10) };
  const Text2 = tmp12(5619).Text;
  intl2 = tmp12(1114).intl;
  obj10 = { platformName, connectedAccountId: connectedAccount.id };
  items2[1] = metroImportAll(Text2, obj9);
  items1[1] = React4(View, obj7);
  const obj11 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
  const CheckmarkLargeIcon = tmp12(6987).CheckmarkLargeIcon;
  items1[2] = metroImportAll(CheckmarkLargeIcon, obj11);
  items[1] = React4(View, obj5);
  const obj12 = { variant: "text-sm/normal", color: "text-default", children: intl3.format(intl5.t.pyRNXJ, { applicationName }) };
  const Text3 = tmp12(5619).Text;
  intl3 = tmp12(1114).intl;
  items[2] = metroImportAll(Text3, obj12);
  const obj13 = { style: tmp.divider };
  items[3] = metroImportAll(View, obj13);
  return React4(View, obj3);
}
