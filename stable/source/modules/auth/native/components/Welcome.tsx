// Module ID: 18360
// Function ID: 18361
// Name: Welcome
// Dependencies: [19, 17, 18361, 5386, 7746, 1404, 5906, 9236, 1072, 7606, 7989, 21, 5170, 575, 14500, 1113, 38, 1187, 5226, 5783, 5874, 15429, 7216, 16024, 1499, 1627, 504, 18362, 5753, 7763, 1252, 510, 6827, 5771, 18363, 18357, 1500, 6855, 5790, 5231, 5746, 13600, 2]
// Exports: default

// Module 18360 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Link from "Link" /* 1500 */;
import UserUtilsDefault from "UserUtils" /* 5226 */;
import Text_Text from "Text/Text" /* 5783 */;
import FastImageDefault from "FastImage" /* 5874 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7216 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7606 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7763 */;
import Constants2 from "Constants" /* 7989 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 14500 */;
import AssetRegistryDefault from "AssetRegistry" /* 15429 */;
import AssetRegistry from "AssetRegistry" /* 16024 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 18357 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AgeGateStore from "AgeGateStore" /* 18361 */;
import ExperimentStore from "ExperimentStore" /* 5386 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7746 */;
import UserRecord from "UserRecord" /* 1404 */;
import InviteStore from "InviteStore" /* 5906 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9236 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
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
  const tmp = closure_22();
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
      tmp12 = closure_19(GuildInviteIconDefault, obj3);
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3rE1P8"]);
      name = guild.name;
      tmp15 = require;
      tmp16 = closure_19;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const self = this;
      const self2 = this;
      const obj = { user: tmp10, guildId: "r" };
      const Avatar = native.Avatar;
      tmp10 = new UserRecord(inviter);
      tmp12 = closure_19(Avatar, obj);
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.OsdY8B);
      const obj2 = UserUtilsDefault;
      name = obj2.getFormattedName(inviter);
      tmp15 = require;
      tmp16 = closure_19;
    } else if (null == inviter) {
      return null;
    } else {
      const self3 = this;
      const self4 = this;
      const obj4 = { user: tmp29, guildId: "r" };
      const Avatar2 = native.Avatar;
      tmp29 = new UserRecord(inviter);
      const tmp31 = closure_19(Avatar2, obj4);
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t["+ITYkQ"]);
      const obj9 = UserUtilsDefault;
      name = obj9.getFormattedName(inviter, true);
      tmp12 = tmp31;
      tmp15 = require;
      tmp16 = closure_19;
    }
    const obj5 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [tmp12, ];
    const obj6 = { style: tmp.text, children: items2 };
    const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: stringResult };
    items2 = [tmp16(tmp15(5783).Text, obj7), ];
    const obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp16(tmp15(5783).Text, obj8);
    items1[1] = closure_20(React3, obj6);
    return closure_20(React3, obj5);
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
  const tmp = closure_22();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [closure_19(tmp2, obj2), ];
  const obj3 = { style: tmp.text, children: items2 };
  const obj4 = { variant: "body-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items2 = [closure_19(Text, obj4), ];
  const obj5 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = closure_19(Text_Text.Text, obj5);
  items1[1] = closure_20(React3, obj3);
  return closure_20(React3, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let intl;
  let intl2;
  let invite;
  let items;
  let num;
  let obj2;
  let subHeaderWithInvite;
  let tmp13;
  ({ invite, guildTemplate } = inlineButtons);
  inlineButtons = inlineButtons.inlineButtons;
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_21(tmp3);
  let tmp8 = null != guildTemplate;
  const tmp6 = AssetRegistry;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj = { style: tmp4.centerpieceContainer, children: closure_20(tmp13, obj2) };
  obj2 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.scrollViewContainer, children: items };
  items = [, , ];
  const obj3 = { style: tmp4.logo, source: tmp6 };
  items[0] = closure_19(FastImageDefault, obj3);
  const obj4 = { style: tmp4.header, lineClamp: num, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: intl.string(intl4.t["3S2xmm"]) };
  num = 2;
  const Heading = tmp5(5783).Heading;
  tmp13 = hasOwnProperty;
  if (tmp3) {
    num = 1;
  }
  intl = tmp5(1113).intl;
  const items1 = [closure_19(Heading, obj4), , , ];
  const items2 = [tmp4.subHeader, ];
  const Text = tmp5(5783).Text;
  if (null != invite) {
    subHeaderWithInvite = tmp4.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items2[1] = subHeaderWithInvite;
  const obj5 = { variant: "body-md/medium", color: "text-overlay-light", style: items2, maxFontSizeMultiplier: 3, children: intl2.string(intl4.t.Gtcthl) };
  intl2 = tmp5(1113).intl;
  items1[1] = closure_19(Text, obj5);
  let tmp10Result = null;
  if (null != invite) {
    const obj6 = { invite };
    tmp10Result = tmp10(InviteCard, obj6);
  }
  items1[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj7 = { guildTemplate };
    tmp10Result2 = tmp10(GuildTemplateCard, obj7);
  }
  items1[3] = tmp10Result2;
  items[1] = closure_20(React3, { children: items1 });
  items[2] = inlineButtons;
  return closure_19(React3, obj);
}
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: closure_12, StorageKeys: map1, AuthStates: closure_14, InviteStates: closure_15, ThemeTypes: closure_16 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants2.InviteTypes;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let closure_21 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, subHeader: { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 }, subHeaderWithInvite: { marginBottom: 16 }, centerpieceContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, buttonContainer: { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" } };
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
let closure_22 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  let ButtonGroup;
  let bottom;
  let closure_1;
  let closure_3;
  let displayedInviteCode;
  let intl;
  let intl2;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj7;
  let stateFromStores;
  let tmp16;
  let tmp17;
  let tmp21;
  let top;
  let underageAnonymous;
  let tmp = importDefault;
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_21(tmp3);
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
  const tmp9 = require("useShouldShowChooseAccount")();
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
    const obj3 = { last_logout_ts: Storage.get(map1.LOGOUT_TIMESTAMP_KEY), invite_type: tmp6, guild_id: id, channel_id: id1, invite_code: code };
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
  if (tmp9) {
    return closure_19(tmp(stateFromStores[34]), {});
  } else {
    const obj6 = { style: tmp4.buttonContainer, children: closure_20(ButtonGroup, obj7) };
    obj7 = { children: items4 };
    ButtonGroup = tmp5(tmp2[37]).ButtonGroup;
    const obj8 = {
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
            obj2.track(constants.REGISTER_VIEWED);
          }
        },
      text: intl.string(tmp5(stateFromStores[15]).t.pV8xeR)
    };
    const Button = tmp5(tmp2[38]).Button;
    intl = tmp5(tmp2[15]).intl;
    items4 = [closure_19(Button, obj8), ];
    const obj9 = {
      size: "lg",
      variant: "secondary-overlay",
      onPress: function handlePressLogin() {
          navigation.navigate(constants2.LOGIN);
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.LOGIN_VIEWED, { source: "welcome" });
        },
      text: intl2.string(tmp5(stateFromStores[15]).t.dKhVQN)
    };
    const Button2 = tmp5(tmp2[38]).Button;
    intl2 = tmp5(tmp2[15]).intl;
    items4[1] = closure_19(Button2, obj9);
    const tmp15Result = closure_19(closure_4, obj6);
    const obj10 = { theme: constants5.DARK, children: tmp17(tmp16, obj11) };
    obj11 = { style: items5, children: items6 };
    items5 = [tmp4.container, ];
    const obj12 = { paddingTop: top + tmp5(stateFromStores[40]).NAV_BAR_HEIGHT, paddingBottom: bottom };
    const ThemeContextProvider = tmp5(tmp2[39]).ThemeContextProvider;
    items5[1] = obj12;
    const obj13 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: tmp21 };
    tmp21 = null;
    tmp16 = closure_4;
    tmp17 = closure_20;
    const tmp20 = Centerpiece;
    if (tmp3) {
      tmp21 = tmp15Result;
    }
    items6 = [closure_19(tmp20, obj13), !tmp3 && tmp15Result, closure_19(tmp5(tmp2[41]).TTIFirstContentfulPaint, { label: "welcome" })];
    return closure_19(ThemeContextProvider, obj10);
  }
};
