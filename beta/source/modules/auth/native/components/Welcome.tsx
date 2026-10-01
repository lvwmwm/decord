// Module ID: 15572
// Function ID: 15573
// Name: Welcome
// Dependencies: [19, 17, 15573, 4750, 6877, 11906, 1386, 4817, 8201, 1074, 6744, 7155, 21, 4836, 576, 12156, 1115, 38, 1177, 4678, 4832, 12792, 6364, 6400, 13407, 1485, 1613, 504, 5298, 6895, 1241, 510, 6010, 5910, 15574, 15569, 1486, 5745, 5281, 4540, 5994, 11375, 2]
// Exports: default

// Module 15572 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Link from "Link" /* 1486 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6744 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6895 */;
import Constants2 from "Constants" /* 7155 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12156 */;
import AssetRegistryDefault from "AssetRegistry" /* 12792 */;
import AssetRegistry from "AssetRegistry" /* 13407 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15569 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AgeGateStore from "AgeGateStore" /* 15573 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6877 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import UserRecord from "UserRecord" /* 1386 */;
import InviteStore from "InviteStore" /* 4817 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8201 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const Storage2 = tmp(510);
function InviteCard(invite) {
  let guild;
  let inviter;
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp29;
  invite = invite.invite;
  const style = invite.style;
  const tmp = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    let tmp12;
    let stringResult;
    let name;
    let tmp15;
    let tmp16;
    if (null != guild) {
      const obj3 = { guild };
      tmp12 = closure_21(GuildInviteIconDefault, obj3);
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3rE1P8"]);
      name = guild.name;
      tmp15 = require;
      tmp16 = closure_21;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const self = this;
      const self2 = this;
      const obj = { user: tmp10, guildId: "a" };
      const Avatar = native.Avatar;
      tmp10 = new UserRecord(inviter);
      tmp12 = closure_21(Avatar, obj);
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.OsdY8B);
      const obj2 = UserUtilsDefault;
      name = obj2.getFormattedName(inviter);
      tmp15 = require;
      tmp16 = closure_21;
    } else if (null == inviter) {
      return null;
    } else {
      const self3 = this;
      const self4 = this;
      const obj4 = { user: tmp29, guildId: "a" };
      const Avatar2 = native.Avatar;
      tmp29 = new UserRecord(inviter);
      const tmp31 = closure_21(Avatar2, obj4);
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t["+ITYkQ"]);
      const obj9 = UserUtilsDefault;
      name = obj9.getFormattedName(inviter, true);
      tmp12 = tmp31;
      tmp15 = require;
      tmp16 = closure_21;
    }
    const obj5 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [tmp12, ];
    const obj6 = { style: tmp.text, children: items2 };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    items2 = [tmp16(tmp15(4832).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp16(tmp15(4832).Text, obj8);
    items1[1] = authStore5(React3, obj6);
    return authStore5(React3, obj5);
  }
}
function GuildTemplateCard(arg0) {
  let guildTemplate;
  let intl;
  let items;
  let items1;
  let items2;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = closure_24();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  items1 = [, ];
  const obj2 = { source: AssetRegistryDefault };
  items1[0] = closure_21(hasOwnProperty, obj2);
  const obj3 = { style: tmp.text, children: items2 };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items2 = [closure_21(Text, obj4), ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = closure_21(Text_Text.Text, obj5);
  items1[1] = authStore5(React3, obj3);
  return authStore5(React3, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let intl;
  let intl2;
  let invite;
  let items;
  let items1;
  let items2;
  let num;
  let obj3;
  let subHeaderWithInvite;
  let tmp13;
  ({ invite, guildTemplate } = inlineButtons);
  inlineButtons = inlineButtons.inlineButtons;
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_23(tmp2);
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("Welcome");
  let tmp8 = null != guildTemplate;
  const tmp6 = AssetRegistry;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: items, children: authStore5(tmp13, obj3) };
  items = [tmp3.centerpieceContainer];
  obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: items1 };
  items1 = [, , ];
  const obj4 = { style: tmp3.logo, source: tmp6 };
  items1[0] = closure_21(hasOwnProperty, obj4);
  const obj5 = { style: items2, lineClamp: num, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: intl.string(intl4.t["3S2xmm"]) };
  items2 = [tmp3.header, typeConsolidationTextTransform];
  num = 2;
  const Heading = tmp4(4832).Heading;
  tmp13 = metroRequire;
  if (tmp2) {
    num = 1;
  }
  intl = tmp4(1115).intl;
  const items3 = [closure_21(Heading, obj5), , , ];
  const items4 = [tmp3.subHeader, ];
  const Text = tmp4(4832).Text;
  if (null != invite) {
    subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items4[1] = subHeaderWithInvite;
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items4, maxFontSizeMultiplier: 3, children: intl2.string(intl4.t.Gtcthl) };
  intl2 = tmp4(1115).intl;
  items3[1] = closure_21(Text, obj6);
  let tmp10Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp10Result = tmp10(InviteCard, obj7);
  }
  items3[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj8 = { guildTemplate };
    tmp10Result2 = tmp10(GuildTemplateCard, obj8);
  }
  items3[3] = tmp10Result2;
  items1[1] = authStore5(React3, { children: items3 });
  items1[2] = inlineButtons;
  return closure_21(React3, obj2);
}
let react = react_mod;
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17, ThemeTypes: closure_18 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants2.InviteTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 }, subHeaderWithInvite: { marginBottom: 16 }, centerpieceContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, buttonContainer: { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" } };
  num = 300;
  const tmp = arg0;
  if (tmp) {
    num = 480;
  }
  return obj;
});
createStyles = createStyles_mod;
let obj = { container: obj2, text: { marginLeft: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm };
let closure_24 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  let ButtonGroup;
  let bottom;
  let closure_1;
  let closure_3;
  let displayedInviteCode;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj9;
  let stateFromStores;
  let tmp17;
  let tmp18;
  let tmp21;
  let top;
  let underageAnonymous;
  let tmp = importDefault;
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_23(tmp3);
  const tmp5 = _require;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  let tmp6 = require("useSafeAreaInsets")();
  ({ top, bottom } = tmp6);
  let obj2 = require("get initialized");
  const items = [DisplayedInviteStore];
  importDefault = obj2.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj3 = require("get initialized");
  const items1 = [InviteStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const items2 = [GuildTemplateStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  const items3 = [AgeGateStore];
  const obj5 = require("get initialized");
  react = obj5.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const items4 = [MultiAccountStore];
  const obj6 = require("get initialized");
  const stateFromStores2 = obj6.useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const items5 = [MultiAccountStore];
  const obj7 = require("get initialized");
  const stateFromStores3 = obj7.useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    let Storage;
    let code;
    let id;
    let id1;
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const obj2 = TTIAnalyticsUtils;
    const result = obj2.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores.type) {
        tmp6 = InviteTypes[tmp5.type];
      }
    }
    const obj3 = { last_logout_ts: Storage.get(constants2.LOGOUT_TIMESTAMP_KEY), invite_type: tmp6, guild_id: id, channel_id: id1, invite_code: code };
    const track = AnalyticsUtilsDefault.track;
    const APP_LANDING_VIEWED = constants.APP_LANDING_VIEWED;
    AnalyticsUtilsDefault;
    Storage = Storage2.Storage;
    id = undefined;
    if (stateFromStores != null) {
      const guild = tmp5.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    id1 = undefined;
    if (stateFromStores != null) {
      const channel = tmp5.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    code = undefined;
    if (stateFromStores != null) {
      code = tmp5.code;
    }
    track(APP_LANDING_VIEWED, obj3);
  });
  const effect = react.useEffect(() => {
    const obj = closure_1(stateFromStores[32]);
    const locationMetadata = obj.getLocationMetadata();
  }, []);
  require("react")(ExperimentStore.hasLoadedExperiments);
  const effect1 = react.useEffect(() => {

  });
  const effect2 = react.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_21(tmp(stateFromStores[34]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: closure_22(ButtonGroup, obj9) };
  obj9 = { children: items6 };
  ButtonGroup = tmp5(tmp2[37]).ButtonGroup;
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      const tmp = closure_3;
      if (tmp) {
        navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const obj = RegistrationStepsUtils;
        const nextAuthState = obj.getNextAuthState(constants3.WELCOME);
        const dispatch = navigation.dispatch;
        const CommonActions = Link.CommonActions;
        dispatch(CommonActions.navigate(nextAuthState));
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants.REGISTER_VIEWED);
      }
    },
    text: intl.string(tmp5(stateFromStores[16]).t.pV8xeR)
  };
  const Button = tmp5(tmp2[38]).Button;
  intl = tmp5(tmp2[16]).intl;
  items6 = [closure_21(Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: intl2.string(tmp5(stateFromStores[16]).t.dKhVQN)
  };
  const Button2 = tmp5(tmp2[38]).Button;
  intl2 = tmp5(tmp2[16]).intl;
  items6[1] = closure_21(Button2, obj11);
  const tmp19 = closure_21(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: tmp18(tmp17, obj13) };
  obj13 = { style: items7, children: items8 };
  items7 = [tmp4.container, ];
  const obj14 = { paddingTop: top + tmp5(stateFromStores[40]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  const ThemeContextProvider = tmp5(tmp2[39]).ThemeContextProvider;
  items7[1] = obj14;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: tmp21 };
  tmp21 = null;
  tmp17 = closure_4;
  tmp18 = closure_22;
  const tmp20 = Centerpiece;
  if (tmp3) {
    tmp21 = tmp19;
  }
  items8 = [closure_21(tmp20, obj15), !tmp3 && tmp19, closure_21(tmp5(tmp2[41]).TTIFirstContentfulPaint, { label: "welcome" })];
  return closure_21(ThemeContextProvider, obj12);
};
