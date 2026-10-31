// Module ID: 17978
// Function ID: 17979
// Name: Welcome
// Dependencies: [19, 17, 17979, 5238, 7637, 13962, 1397, 5749, 9123, 1072, 7501, 7879, 21, 5014, 575, 14221, 1113, 38, 1187, 5068, 5624, 5717, 15120, 7112, 7148, 15681, 1497, 1625, 504, 5593, 7654, 1252, 510, 6740, 5612, 17980, 17975, 1498, 6767, 5634, 5080, 5586, 13320, 2]
// Exports: default

// Module 17978 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Link from "Link" /* 1498 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7112 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7501 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7654 */;
import Constants2 from "Constants" /* 7879 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 14221 */;
import AssetRegistryDefault from "AssetRegistry" /* 15120 */;
import AssetRegistry from "AssetRegistry" /* 15681 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 17975 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AgeGateStore from "AgeGateStore" /* 17979 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7637 */;
import MultiAccountStore from "MultiAccountStore" /* 13962 */;
import UserRecord from "UserRecord" /* 1397 */;
import InviteStore from "InviteStore" /* 5749 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9123 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_4;
let hasOwnProperty;
let map1;
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
  const tmp = closure_23();
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
      tmp12 = closure_20(GuildInviteIconDefault, obj3);
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3rE1P8"]);
      name = guild.name;
      tmp15 = require;
      tmp16 = closure_20;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const self = this;
      const self2 = this;
      const obj = { user: tmp10, guildId: "a" };
      const Avatar = native.Avatar;
      tmp10 = new UserRecord(inviter);
      tmp12 = closure_20(Avatar, obj);
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.OsdY8B);
      const obj2 = UserUtilsDefault;
      name = obj2.getFormattedName(inviter);
      tmp15 = require;
      tmp16 = closure_20;
    } else if (null == inviter) {
      return null;
    } else {
      const self3 = this;
      const self4 = this;
      const obj4 = { user: tmp29, guildId: "a" };
      const Avatar2 = native.Avatar;
      tmp29 = new UserRecord(inviter);
      const tmp31 = closure_20(Avatar2, obj4);
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t["+ITYkQ"]);
      const obj9 = UserUtilsDefault;
      name = obj9.getFormattedName(inviter, true);
      tmp12 = tmp31;
      tmp15 = require;
      tmp16 = closure_20;
    }
    const obj5 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [tmp12, ];
    const obj6 = { style: tmp.text, children: items2 };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    items2 = [tmp16(tmp15(5624).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp16(tmp15(5624).Text, obj8);
    items1[1] = closure_21(React3, obj6);
    return closure_21(React3, obj5);
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
  const tmp = closure_23();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [closure_20(tmp2, obj2), ];
  const obj3 = { style: tmp.text, children: items2 };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items2 = [closure_20(Text, obj4), ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = closure_20(Text_Text.Text, obj5);
  items1[1] = closure_21(React3, obj3);
  return closure_21(React3, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let intl;
  let intl2;
  let invite;
  let items;
  let items1;
  let num;
  let obj3;
  let subHeaderWithInvite;
  let tmp14;
  ({ invite, guildTemplate } = inlineButtons);
  inlineButtons = inlineButtons.inlineButtons;
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_22(tmp3);
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("Welcome");
  let tmp9 = null != guildTemplate;
  const tmp7 = AssetRegistry;
  if (tmp9) {
    tmp9 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: tmp4.centerpieceContainer, children: closure_21(tmp14, obj3) };
  obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.scrollViewContainer, children: items };
  items = [, , ];
  const obj4 = { style: tmp4.logo, source: tmp7 };
  items[0] = closure_20(FastImageDefault, obj4);
  const obj5 = { style: items1, lineClamp: num, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: intl.string(intl4.t["3S2xmm"]) };
  items1 = [tmp4.header, typeConsolidationTextTransform];
  num = 2;
  const Heading = tmp5(5624).Heading;
  tmp14 = hasOwnProperty;
  if (tmp3) {
    num = 1;
  }
  intl = tmp5(1113).intl;
  const items2 = [closure_20(Heading, obj5), , , ];
  const items3 = [tmp4.subHeader, ];
  const Text = tmp5(5624).Text;
  if (null != invite) {
    subHeaderWithInvite = tmp4.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items3[1] = subHeaderWithInvite;
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: intl2.string(intl4.t.Gtcthl) };
  intl2 = tmp5(1113).intl;
  items2[1] = closure_20(Text, obj6);
  let tmp11Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp11Result = tmp11(InviteCard, obj7);
  }
  items2[2] = tmp11Result;
  let tmp11Result2 = null;
  if (tmp9) {
    const obj8 = { guildTemplate };
    tmp11Result2 = tmp11(GuildTemplateCard, obj8);
  }
  items2[3] = tmp11Result2;
  items[1] = closure_21(React3, { children: items2 });
  items[2] = inlineButtons;
  return closure_20(React3, obj2);
}
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: map1, StorageKeys: closure_14, AuthStates: closure_15, InviteStates: closure_16, ThemeTypes: closure_17 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants2.InviteTypes;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let createStyles = createStyles_mod;
let closure_22 = createStyles.createStyles((arg0) => {
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
let closure_23 = createStyles.createStyles(obj);
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
  const tmp4 = closure_22(tmp3);
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
    const obj3 = { last_logout_ts: Storage.get(constants.LOGOUT_TIMESTAMP_KEY), invite_type: tmp6, guild_id: id, channel_id: id1, invite_code: code };
    const track = AnalyticsUtilsDefault.track;
    const APP_LANDING_VIEWED = map1.APP_LANDING_VIEWED;
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
    const obj = closure_1(stateFromStores[33]);
    const locationMetadata = obj.getLocationMetadata();
  }, []);
  require("react")(ExperimentStore.hasLoadedExperiments);
  const effect1 = react.useEffect(() => {

  });
  const effect2 = react.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_20(tmp(stateFromStores[35]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: closure_21(ButtonGroup, obj9) };
  obj9 = { children: items6 };
  ButtonGroup = tmp5(tmp2[38]).ButtonGroup;
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      const tmp = closure_3;
      if (tmp) {
        navigation.navigate(constants2.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const obj = RegistrationStepsUtils;
        const nextAuthState = obj.getNextAuthState(constants2.WELCOME);
        const dispatch = navigation.dispatch;
        const CommonActions = Link.CommonActions;
        dispatch(CommonActions.navigate(nextAuthState));
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(map1.REGISTER_VIEWED);
      }
    },
    text: intl.string(tmp5(stateFromStores[16]).t.pV8xeR)
  };
  const Button = tmp5(tmp2[39]).Button;
  intl = tmp5(tmp2[16]).intl;
  items6 = [closure_20(Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants2.LOGIN);
      const obj = AnalyticsUtilsDefault;
      obj.track(map1.LOGIN_VIEWED, { source: "welcome" });
    },
    text: intl2.string(tmp5(stateFromStores[16]).t.dKhVQN)
  };
  const Button2 = tmp5(tmp2[39]).Button;
  intl2 = tmp5(tmp2[16]).intl;
  items6[1] = closure_20(Button2, obj11);
  const tmp19 = closure_20(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: tmp18(tmp17, obj13) };
  obj13 = { style: items7, children: items8 };
  items7 = [tmp4.container, ];
  const obj14 = { paddingTop: top + tmp5(stateFromStores[41]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  const ThemeContextProvider = tmp5(tmp2[40]).ThemeContextProvider;
  items7[1] = obj14;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: tmp21 };
  tmp21 = null;
  tmp17 = closure_4;
  tmp18 = closure_21;
  const tmp20 = Centerpiece;
  if (tmp3) {
    tmp21 = tmp19;
  }
  items8 = [closure_20(tmp20, obj15), !tmp3 && tmp19, closure_20(tmp5(tmp2[42]).TTIFirstContentfulPaint, { label: "welcome" })];
  return closure_20(ThemeContextProvider, obj12);
};
