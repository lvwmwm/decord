// Module ID: 14618
// Function ID: 110206
// Name: InviteCard
// Dependencies: []
// Exports: default

// Module 14618 (InviteCard)
function InviteCard(invite) {
  let guild;
  let inviter;
  invite = invite.invite;
  const tmp = callback5();
  ({ guild, inviter } = invite);
  if (invite.state !== constants.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      let obj = { guild };
      let tmp14 = callback2(importDefault(dependencyMap[15]), obj);
      const intl2 = arg1(dependencyMap[16]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[16]).t.3rE1P8);
      let name = guild.name;
    } else if (null != tmp2) {
      importDefault(dependencyMap[17])(null != inviter, "Null inviter");
      obj = {};
      const prototype = ctor.prototype;
      const tmp12 = new ctor(inviter);
      obj.user = tmp12;
      obj.guildId = undefined;
      tmp14 = callback2(arg1(dependencyMap[18]).Avatar, obj);
      const intl = arg1(dependencyMap[16]).intl;
      stringResult = intl.string(arg1(dependencyMap[16]).t.OsdY8B);
      let obj1 = importDefault(dependencyMap[19]);
      name = obj1.getFormattedName(inviter);
    } else if (null == inviter) {
      return null;
    } else {
      obj = {};
      const prototype2 = ctor.prototype;
      const tmp37 = new ctor(inviter);
      obj.user = tmp37;
      obj.guildId = undefined;
      tmp14 = callback2(arg1(dependencyMap[18]).Avatar, obj);
      const intl3 = arg1(dependencyMap[16]).intl;
      stringResult = intl3.string(arg1(dependencyMap[16]).t.+ITYkQ);
      name = importDefault(dependencyMap[19]).getFormattedName(inviter, true);
      const obj9 = importDefault(dependencyMap[19]);
    }
    obj1 = {};
    const items = [tmp.container, invite.style];
    obj1.style = items;
    const items1 = [tmp14, ];
    const obj2 = { style: tmp.text };
    const obj3 = { cachedAt: true, edpbxy: true, children: stringResult };
    const items2 = [callback2(arg1(dependencyMap[20]).Text, obj3), ];
    const obj4 = { children: name };
    items2[1] = callback2(arg1(dependencyMap[20]).Text, obj4);
    obj2.children = items2;
    items1[1] = callback3(closure_4, obj2);
    obj1.children = items1;
    return callback3(closure_4, obj1);
  }
}
function GuildTemplateCard(arg0) {
  let guildTemplate;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = callback5();
  let obj = { style: items };
  const items = [tmp.container, style];
  obj = { source: importDefault(dependencyMap[21]) };
  const items1 = [callback2(closure_5, obj), ];
  obj = { style: tmp.text };
  const obj1 = { cachedAt: true, edpbxy: true };
  const intl = arg1(dependencyMap[16]).intl;
  obj1.children = intl.string(arg1(dependencyMap[16]).t.QzUORX);
  const items2 = [callback2(arg1(dependencyMap[20]).Text, obj1), callback2(arg1(dependencyMap[20]).Text, { children: guildTemplate.name })];
  obj.children = items2;
  items1[1] = callback3(closure_4, obj);
  obj.children = items1;
  return callback3(closure_4, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let invite;
  ({ invite, guildTemplate } = inlineButtons);
  const tmp = importDefault(dependencyMap[22])();
  const tmp2 = callback4(tmp);
  let tmp5 = null != guildTemplate;
  if (tmp5) {
    tmp5 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  let obj = { style: items };
  const items = [tmp2.centerpieceContainer];
  obj = { alwaysBounceVertical: false, contentContainerStyle: tmp2.scrollViewContainer };
  obj = { style: tmp2.logo, source: arg1(dependencyMap[23]) };
  const items1 = [callback2(closure_5, obj), , ];
  const obj1 = {};
  const obj2 = { style: tmp2.header };
  let num = 2;
  if (tmp) {
    num = 1;
  }
  obj2.lineClamp = num;
  const intl = arg1(dependencyMap[16]).intl;
  obj2.children = intl.string(arg1(dependencyMap[16]).t.3S2xmm);
  const items2 = [callback2(arg1(dependencyMap[20]).Heading, obj2), , , ];
  const obj3 = { "Bool(true)": "<string:3559849986>", "Bool(true)": "<string:1240334337>", "Bool(true)": "<string:1143341058>", "Bool(true)": "<string:1783758850>" };
  const items3 = [tmp2.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp2.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items3[1] = subHeaderWithInvite;
  obj3.style = items3;
  const intl2 = arg1(dependencyMap[16]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[16]).t.Gtcthl);
  items2[1] = callback2(arg1(dependencyMap[20]).Text, obj3);
  let tmp16 = null;
  if (null != invite) {
    const obj4 = { invite };
    tmp16 = callback2(InviteCard, obj4);
  }
  items2[2] = tmp16;
  let tmp19 = null;
  if (tmp5) {
    const obj5 = { guildTemplate };
    tmp19 = callback2(GuildTemplateCard, obj5);
  }
  items2[3] = tmp19;
  obj1.children = items2;
  items1[1] = closure_21(closure_4, obj1);
  items1[2] = inlineButtons.inlineButtons;
  obj.children = items1;
  obj.children = closure_21(closure_6, obj);
  return callback2(closure_4, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17 } = arg1(dependencyMap[9]));
const GuildTemplateStates = arg1(dependencyMap[10]).GuildTemplateStates;
const InviteTypes = arg1(dependencyMap[11]).InviteTypes;
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_20, jsxs: closure_21 } = arg1(dependencyMap[12]));
let obj = arg1(dependencyMap[13]);
let closure_22 = obj.createStyles((arg0) => {
  let obj = { container: { "Bool(true)": 8, "Bool(true)": "vertical", "Bool(true)": false }, logo: { 9223372036854775807: true, 9223372036854775807: true, 0: true, -9223372036854775808: true, 9223372036854775807: true, 0: true }, scrollViewContainer: {}, header: {} };
  obj = { index: "r", e: 150.5, next: 156, values: null, next: "af47f5760d10cc835b5537c36ba26c7a", warn: "redesign_notification_illustration" };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.maxWidth = num;
  obj.subHeader = obj;
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = {};
  obj.buttonContainer = { -346838186: "<string:787611649>", -1564939080: "<string:4132503554>", 1446732965: "<string:3678536173>", 508715691: "<string:3103785571>" };
  return obj;
});
const tmp4 = arg1(dependencyMap[12]);
obj = {};
obj = { "Null": true, position: null, left: 11, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[14]).radii.sm };
obj.container = obj;
obj.text = { marginLeft: 16 };
let closure_23 = arg1(dependencyMap[13]).createStyles(obj);
const obj2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  let bottom;
  let top;
  const tmp = importDefault(dependencyMap[22])();
  const tmp2 = callback4(tmp);
  let obj = callback(dependencyMap[24]);
  const callback = obj.useNavigation();
  ({ top, bottom } = importDefault(dependencyMap[25])());
  let obj1 = callback(dependencyMap[26]);
  const items = [closure_13];
  const importDefault = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = callback(dependencyMap[26]);
  const items1 = [closure_12];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = invite.getInvite(closure_1);
    }
    return invite;
  });
  const dependencyMap = stateFromStores;
  let obj3 = callback(dependencyMap[26]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => store.getGuildTemplate(store.getDisplayedGuildTemplateCode()));
  let obj4 = callback(dependencyMap[26]);
  const items3 = [closure_7];
  const React = obj4.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  let obj5 = callback(dependencyMap[26]);
  const items4 = [closure_10];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => store2.getHasLoggedInAccounts());
  let obj6 = callback(dependencyMap[26]);
  const items5 = [closure_10];
  const stateFromStores3 = obj6.useStateFromStores(items5, () => store2.getCanUseMultiAccountMobile());
  importDefault(dependencyMap[27])(() => {
    let obj = arr(stateFromStores[28]);
    obj.trackAppUIViewed();
    const result = arr(stateFromStores[28]).trackAppLaunchCompleted();
    let tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if (null != stateFromStores.type) {
        tmp3 = closure_19[closure_2.type];
      }
    }
    const obj2 = arr(stateFromStores[28]);
    obj = {};
    const Storage = arr(stateFromStores[30]).Storage;
    obj.last_logout_ts = Storage.get(constants2.LOGOUT_TIMESTAMP_KEY);
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
    callback(stateFromStores[29]).track(constants.APP_LANDING_VIEWED, obj);
  });
  const effect = React.useEffect(() => {
    const locationMetadata = callback(stateFromStores[31]).getLocationMetadata();
  }, []);
  importDefault(dependencyMap[32])(hasLoadedExperiments.hasLoadedExperiments);
  const effect1 = React.useEffect(() => {

  });
  const effect2 = React.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return callback2(importDefault(dependencyMap[33]), {});
    }
  }
  obj = { style: tmp2.buttonContainer };
  obj = {};
  obj1 = {
    <string:1986169986>: 15183073285524370000000000000000000000000000000000000000000000000000000000000000000,
    <string:2487833047>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000255713764154597,
    onPress: function handlePressRegister() {
      if (closure_3) {
        let obj = { fromRegister: true };
        let arr = arr.push(constants3.AGE_GATE_UNDERAGE, obj);
      } else {
        obj = arr(stateFromStores[34]);
        arr = arr.push(obj.getNextAuthState(constants3.WELCOME));
        callback(stateFromStores[29]).track(constants.REGISTER_VIEWED);
        const obj2 = callback(stateFromStores[29]);
      }
    }
  };
  const intl = callback(dependencyMap[16]).intl;
  obj1.text = intl.string(callback(dependencyMap[16]).t.pV8xeR);
  const items6 = [callback2(callback(dependencyMap[36]).Button, obj1), ];
  obj2 = {
    onPress: function handlePressLogin() {
      const arr = arr.push(constants3.LOGIN);
      callback(stateFromStores[29]).track(constants.LOGIN_VIEWED, { source: "welcome" });
    }
  };
  const intl2 = callback(dependencyMap[16]).intl;
  obj2.text = intl2.string(callback(dependencyMap[16]).t.dKhVQN);
  items6[1] = callback2(callback(dependencyMap[36]).Button, obj2);
  obj.children = items6;
  obj.children = callback3(callback(dependencyMap[35]).ButtonGroup, obj);
  const tmp13 = callback2(closure_4, obj);
  obj3 = { theme: "darker" };
  obj4 = {};
  const items7 = [tmp2.container, ];
  obj5 = { paddingTop: top + callback(dependencyMap[38]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  items7[1] = obj5;
  obj4.style = items7;
  obj6 = { invite: stateFromStores, guildTemplate: stateFromStores1 };
  let tmp19 = null;
  if (tmp) {
    tmp19 = tmp13;
  }
  obj6.inlineButtons = tmp19;
  const items8 = [callback2(Centerpiece, obj6), !tmp && tmp13, callback2(callback(dependencyMap[39]).TTIFirstContentfulPaint, { label: "welcome" })];
  obj4.children = items8;
  obj3.children = callback3(closure_4, obj4);
  return callback2(callback(dependencyMap[37]).ThemeContextProvider, obj3);
};
