// Module ID: 14780
// Function ID: 112691
// Name: InviteCard
// Dependencies: [31, 27, 14781, 4044, 6693, 11482, 1857, 4115, 8531, 653, 5720, 6978, 33, 4130, 689, 11718, 1212, 44, 1273, 3969, 4126, 12321, 7423, 12921, 1456, 1557, 566, 4559, 6707, 675, 587, 5588, 5450, 14782, 14777, 4965, 4543, 3842, 5084, 10057, 2]
// Exports: default

// Module 14780 (InviteCard)
import dispatchLogout from "dispatchLogout";
import get_ActivityIndicator from "useMountLayoutEffect";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { InviteTypes } from "InviteSendStates";
import jsxProd from "ChooseAccount";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function InviteCard(invite) {
  let guild;
  let inviter;
  invite = invite.invite;
  const tmp = _createForOfIteratorHelperLoose();
  ({ guild, inviter } = invite);
  if (invite.state !== constants.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      let obj = { guild };
      let tmp14 = callback(importDefault(11718), obj);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["3rE1P8"]);
      let name = guild.name;
    } else if (null != tmp2) {
      importDefault(44)(null != inviter, "Null inviter");
      obj = {};
      const prototype = ctor.prototype;
      const tmp12 = new ctor(inviter);
      obj.user = tmp12;
      obj.guildId = undefined;
      tmp14 = callback(require(1273) /* Button */.Avatar, obj);
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.OsdY8B);
      let obj1 = importDefault(3969);
      name = obj1.getFormattedName(inviter);
    } else if (null == inviter) {
      return null;
    } else {
      obj = {};
      const prototype2 = ctor.prototype;
      const tmp37 = new ctor(inviter);
      obj.user = tmp37;
      obj.guildId = undefined;
      tmp14 = callback(require(1273) /* Button */.Avatar, obj);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1212) /* getSystemLocale */.t["+ITYkQ"]);
      name = importDefault(3969).getFormattedName(inviter, true);
      const obj9 = importDefault(3969);
    }
    obj1 = {};
    const items = [tmp.container, invite.style];
    obj1.style = items;
    const items1 = [tmp14, ];
    const obj2 = { style: tmp.text };
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [callback(require(4126) /* Text */.Text, obj3), ];
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = callback(require(4126) /* Text */.Text, obj4);
    obj2.children = items2;
    items1[1] = callback2(closure_4, obj2);
    obj1.children = items1;
    return callback2(closure_4, obj1);
  }
}
function GuildTemplateCard(arg0) {
  let guildTemplate;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.container, style];
  obj = { source: importDefault(12321) };
  const items1 = [callback(closure_5, obj), ];
  obj = { style: tmp.text };
  const obj1 = { variant: "text-sm/medium", color: "text-subtle" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.QzUORX);
  const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  items1[1] = callback2(closure_4, obj);
  obj.children = items1;
  return callback2(closure_4, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let invite;
  ({ invite, guildTemplate } = inlineButtons);
  const tmp = importDefault(7423)();
  const tmp2 = callback3(tmp);
  let tmp5 = null != guildTemplate;
  if (tmp5) {
    tmp5 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  let obj = { style: items };
  items = [tmp2.centerpieceContainer];
  obj = { alwaysBounceVertical: false, contentContainerStyle: tmp2.scrollViewContainer };
  obj = { style: tmp2.logo, source: require(12921) /* registerAsset */ };
  const items1 = [callback(closure_5, obj), , ];
  const obj1 = {};
  const obj2 = { style: tmp2.header, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1 };
  let num = 2;
  if (tmp) {
    num = 1;
  }
  obj2.lineClamp = num;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t["3S2xmm"]);
  const items2 = [callback(require(4126) /* Text */.Heading, obj2), , , ];
  const obj3 = { variant: "text-md/medium", color: "text-overlay-light", style: null, maxFontSizeMultiplier: 3 };
  const items3 = [tmp2.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp2.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items3[1] = subHeaderWithInvite;
  obj3.style = items3;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.Gtcthl);
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  let tmp16 = null;
  if (null != invite) {
    const obj4 = { invite };
    tmp16 = callback(InviteCard, obj4);
  }
  items2[2] = tmp16;
  let tmp19 = null;
  if (tmp5) {
    const obj5 = { guildTemplate };
    tmp19 = callback(GuildTemplateCard, obj5);
  }
  items2[3] = tmp19;
  obj1.children = items2;
  items1[1] = closure_21(closure_4, obj1);
  items1[2] = inlineButtons.inlineButtons;
  obj.children = items1;
  obj.children = closure_21(closure_6, obj);
  return callback(closure_4, obj);
}
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17 } = ME);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let closure_22 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" } };
  obj = { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: null, marginBottom: 24, marginHorizontal: 16 };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.maxWidth = num;
  obj.subHeader = obj;
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj.buttonContainer = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { marginLeft: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  let bottom;
  let top;
  const tmp = importDefault(stateFromStores[22])();
  const tmp2 = callback3(tmp);
  let obj = _require(stateFromStores[24]);
  _require = obj.useNavigation();
  ({ top, bottom } = importDefault(stateFromStores[25])());
  let obj1 = _require(stateFromStores[26]);
  const items = [closure_13];
  importDefault = obj1.useStateFromStores(items, () => outer1_13.getDisplayedInviteCode());
  let obj2 = _require(stateFromStores[26]);
  const items1 = [closure_12];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = outer1_12.getInvite(closure_1);
    }
    return invite;
  });
  let obj3 = _require(stateFromStores[26]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => outer1_9.getGuildTemplate(outer1_9.getDisplayedGuildTemplateCode()));
  let obj4 = _require(stateFromStores[26]);
  const items3 = [_isNativeReflectConstruct];
  const React = obj4.useStateFromStores(items3, () => outer1_7.isUnderageAnonymous());
  let obj5 = _require(stateFromStores[26]);
  const items4 = [closure_10];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => outer1_10.getHasLoggedInAccounts());
  let obj6 = _require(stateFromStores[26]);
  const items5 = [closure_10];
  const stateFromStores3 = obj6.useStateFromStores(items5, () => outer1_10.getCanUseMultiAccountMobile());
  importDefault(stateFromStores[27])(() => {
    let obj = arr(stateFromStores[28]);
    obj.trackAppUIViewed();
    const result = arr(stateFromStores[28]).trackAppLaunchCompleted();
    let tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if (null != stateFromStores.type) {
        tmp3 = outer1_19[stateFromStores.type];
      }
    }
    const obj2 = arr(stateFromStores[28]);
    obj = {};
    const Storage = arr(stateFromStores[30]).Storage;
    obj.last_logout_ts = Storage.get(outer1_15.LOGOUT_TIMESTAMP_KEY);
    obj.invite_type = tmp3;
    let id;
    if (null != stateFromStores) {
      const guild = stateFromStores.guild;
      if (null != guild) {
        id = guild.id;
      }
    }
    obj.guild_id = id;
    let id1;
    if (null != stateFromStores) {
      const channel = stateFromStores.channel;
      if (null != channel) {
        id1 = channel.id;
      }
    }
    obj.channel_id = id1;
    let code;
    if (null != stateFromStores) {
      code = stateFromStores.code;
    }
    obj.invite_code = code;
    callback(stateFromStores[29]).track(outer1_14.APP_LANDING_VIEWED, obj);
  });
  const effect = React.useEffect(() => {
    const locationMetadata = callback(stateFromStores[31]).getLocationMetadata();
  }, []);
  importDefault(stateFromStores[32])(hasLoadedExperiments.hasLoadedExperiments);
  const effect1 = React.useEffect(() => {

  });
  const effect2 = React.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return callback(importDefault(stateFromStores[33]), {});
    }
  }
  obj = { style: tmp2.buttonContainer };
  obj = {};
  obj1 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (dispatchLogout) {
        let obj = { fromRegister: true };
        arr = arr.push(outer1_16.AGE_GATE_UNDERAGE, obj);
      } else {
        obj = arr(stateFromStores[34]);
        arr = arr.push(obj.getNextAuthState(outer1_16.WELCOME));
        callback(stateFromStores[29]).track(outer1_14.REGISTER_VIEWED);
        const obj2 = callback(stateFromStores[29]);
      }
    }
  };
  const intl = _require(stateFromStores[16]).intl;
  obj1.text = intl.string(_require(stateFromStores[16]).t.pV8xeR);
  const items6 = [callback(_require(stateFromStores[36]).Button, obj1), ];
  obj2 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      arr = arr.push(outer1_16.LOGIN);
      callback(stateFromStores[29]).track(outer1_14.LOGIN_VIEWED, { source: "welcome" });
    }
  };
  const intl2 = _require(stateFromStores[16]).intl;
  obj2.text = intl2.string(_require(stateFromStores[16]).t.dKhVQN);
  items6[1] = callback(_require(stateFromStores[36]).Button, obj2);
  obj.children = items6;
  obj.children = callback2(_require(stateFromStores[35]).ButtonGroup, obj);
  const tmp13 = callback(closure_4, obj);
  obj3 = { theme: "darker" };
  obj4 = {};
  const items7 = [tmp2.container, ];
  obj5 = { paddingTop: top + _require(stateFromStores[38]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  items7[1] = obj5;
  obj4.style = items7;
  obj6 = { invite: stateFromStores, guildTemplate: stateFromStores1 };
  let tmp19 = null;
  if (tmp) {
    tmp19 = tmp13;
  }
  obj6.inlineButtons = tmp19;
  const items8 = [callback(Centerpiece, obj6), !tmp && tmp13, callback(_require(stateFromStores[39]).TTIFirstContentfulPaint, { label: "welcome" })];
  obj4.children = items8;
  obj3.children = callback2(closure_4, obj4);
  return callback(_require(stateFromStores[37]).ThemeContextProvider, obj3);
};
