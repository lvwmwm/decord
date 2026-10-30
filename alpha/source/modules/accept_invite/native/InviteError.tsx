// Module ID: 14278
// Function ID: 14279
// Name: InviteError
// Dependencies: [19, 17, 1072, 21, 5009, 575, 5016, 5248, 14279, 14280, 14281, 1114, 5712, 5619, 5629, 1410, 1188, 14282, 6951, 2062, 2]
// Exports: default

// Module 14278 (InviteError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import InviteErrorUtils from "InviteErrorUtils" /* 14281 */;
import AssetRegistryDefault from "AssetRegistry" /* 14282 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
function InviteErrorBase(invite) {
  let closure_129_0;
  let intl4;
  let inviteError;
  let stringResult;
  let title;
  ({ onPressClose: closure_129_0, inviteError } = invite);
  invite = invite.invite;
  const tmp = closure_10();
  const obj = shared;
  let code;
  const tmp4Result = importDefault(obj.isThemeDark(useThemeDefault()) ? 14279 : 14280);
  const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
  InviteErrorUtils;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = getDescriptiveInviteError(code);
  if (invite.state === metroRequire.BANNED) {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (descriptiveInviteError != null) {
      stringResult = descriptiveInviteError.description;
    }
    if (stringResult == null) {
      const intl = tmp2(1114).intl;
      stringResult = intl.string(tmp2(1114).t.FWkU6P);
    }
  }
  const items = [, , , ];
  const obj2 = { style: tmp.expiredImage, source: tmp4Result };
  items[0] = metroImportDefault(FastImageDefault, obj2);
  const obj3 = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  title = undefined;
  const Text = tmp2(5619).Text;
  const tmp10 = React4;
  const tmp11 = metroImportAll;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl3 = tmp2(1114).intl;
    title = intl3.string(tmp2(1114).t.u9zxnX);
  }
  function handlePressClose() {
    closure_1_0();
  }
  const obj4 = { children: items };
  items[1] = metroImportDefault(Text, obj3);
  const obj5 = { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult };
  items[2] = metroImportDefault(Text_Text.Text, obj5);
  const obj6 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.wcqOoF), onPress: handlePressClose };
  const Button = tmp2(5629).Button;
  intl4 = tmp2(1114).intl;
  items[3] = metroImportDefault(Button, obj6);
  return tmp10(tmp11, obj4);
}
function InviteDisabledError(onPressClose) {
  let RXSeLl;
  let format;
  let intl;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj11;
  onPressClose = onPressClose.onPressClose;
  const invite = onPressClose.invite;
  const tmp = closure_10();
  const guild = invite.guild;
  if (null == guild) {
    return null;
  } else {
    function handlePressClose() {
      onPressClose();
    }
    const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
    ({ id: obj2.id, icon: obj2.icon } = guild);
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.disabledView, children: items };
    const obj = AvatarUtilsDefault;
    const guildIconURL = obj.getGuildIconURL(obj3);
    const obj6 = { style: tmp.disabledPauseIcon, source: AssetRegistryDefault };
    const Icon = native.Icon;
    items = [metroImportDefault(Icon, obj6), ];
    const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: GuildIcon.GuildIconSizes.XLARGE };
    const tmp10 = GuildIconDefault;
    items[1] = metroImportDefault(tmp10, obj7);
    items1 = [React4(View, obj5), , , ];
    const obj8 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: intl.string(intl5.t.jlLX2Z) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items1[1] = metroImportDefault(Text, obj8);
    const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: format(RXSeLl, obj11) };
    const Text2 = Text_Text.Text;
    const intl2 = intl5.intl;
    format = intl2.format;
    obj11 = { articleLink: obj10.getArticleURL(hasOwnProperty.INVITE_DISABLED) };
    RXSeLl = intl5.t.RXSeLl;
    obj10 = HelpdeskUtilsDefault;
    items1[2] = metroImportDefault(Text2, obj9);
    const obj20 = { variant: "primary", size: "lg", text: intl3.string(intl5.t["yD/zkn"]), onPress: handlePressClose };
    const Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items1[3] = metroImportDefault(Button, obj20);
    return React4(metroImportAll, obj4);
  }
}
const View = react_native.View;
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, InviteStates: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: size, guildIcon: obj2, disabledTitle: { marginTop: 16, marginBottom: 8, textAlign: "center" }, disabledBody: { textAlign: "center", marginBottom: 16 } };
size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default function InviteError(inviteError) {
  let tmp7;
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    const obj2 = {};
    const merged = Object.assign(inviteError);
    tmp7 = metroImportDefault(InviteErrorBase, obj2);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    const obj3 = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = metroImportDefault(InviteDisabledError, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = metroImportDefault(InviteErrorBase, obj);
  }
  return tmp7;
};
