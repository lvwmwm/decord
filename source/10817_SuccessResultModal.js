// Module ID: 10817
// Function ID: 84005
// Name: SuccessResultModal
// Dependencies: []
// Exports: default

// Module 10817 (SuccessResultModal)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_10, Permissions: closure_11 } = arg1(dependencyMap[5]));
const AppLauncherRouteName = arg1(dependencyMap[6]).AppLauncherRouteName;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.scrollView = { flex: 1 };
const tmp4 = arg1(dependencyMap[7]);
obj.scrollViewContentContainer = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.inner = {};
obj.text = {};
obj.footer = {};
obj.footerLandscape = {};
obj.footerPortrait = {};
let closure_16 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const application = guild.application;
  const importDefault = application;
  let dependencyMap;
  let React;
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const items = [application, guild];
  const memo = React.useMemo(() => {
    if (null != application) {
      if (null != guild) {
        const intl3 = guild(stateFromStores[11]).intl;
        let obj = {};
        let name;
        if (null != application) {
          name = application.name;
        }
        obj.installedApplicationName = name;
        let name1;
        if (null != guild) {
          name1 = guild.name;
        }
        obj.guildName = name1;
        let formatResult = intl3.format(guild(stateFromStores[11]).t.IlF6IY, obj);
      } else {
        let name2;
        const intl2 = guild(stateFromStores[11]).intl;
        obj = {};
        if (null != application) {
          name2 = application.name;
        }
        obj.installedApplicationName = name2;
        formatResult = intl2.format(guild(stateFromStores[11]).t.vTVC5T, obj);
      }
    } else {
      const intl = guild(stateFromStores[11]).intl;
      return intl.string(guild(stateFromStores[11]).t.Dp+rgP);
    }
  }, items);
  const items1 = [guild, ];
  let id;
  if (null != application) {
    id = application.id;
  }
  items1[1] = id;
  const callback = React.useCallback(() => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    if (null != id) {
      let arr = application(stateFromStores[12]);
      arr = arr.pop();
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      guild(stateFromStores[13]).transitionToGuild(id1);
      let obj = application(stateFromStores[14]);
      obj = {};
      let id2;
      if (null != application) {
        id2 = application.id;
      }
      obj.application_id = id2;
      let id3;
      if (null != guild) {
        id3 = guild.id;
      }
      obj.guild_id = id3;
      obj.track(closure_10.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      const obj3 = guild(stateFromStores[13]);
    }
  }, items1);
  let obj1 = arg1(dependencyMap[15]);
  const items2 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items2, () => channelId.getChannelId());
  dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[15]);
  const items3 = [closure_7];
  React = obj2.useStateFromStores(items3, () => channel.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = React.useCallback(() => {
    let arr = application(stateFromStores[12]);
    arr = arr.pop();
    let obj = application(stateFromStores[16]);
    obj.hideActionSheet();
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != application;
    }
    if (tmp3) {
      obj = { application_id: application.id };
      application(stateFromStores[14]).track(closure_10.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = callback(closure_2[17]);
        const bestActiveInput = obj.getBestActiveInput();
        if (null != bestActiveInput) {
          obj = { type: callback(closure_2[18]).KeyboardTypes.APP_LAUNCHER };
          obj = { initialRouteName: constants.APPLICATION_VIEW, application: closure_1 };
          obj.context = obj;
          bestActiveInput.openCustomKeyboard(obj);
        }
      });
      const obj2 = application(stateFromStores[14]);
    }
  }, items4);
  if (null != application) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = React.useCallback(() => {
    let arr = application(stateFromStores[12]);
    arr = arr.pop();
    let obj = application(stateFromStores[14]);
    obj = {};
    let id;
    if (null != application) {
      id = application.id;
    }
    obj.application_id = id;
    obj.track(closure_10.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, obj);
  }, items5);
  if (null != application) {
    id2 = application.id;
  }
  const items6 = [id2];
  const effect = React.useEffect(() => {
    let obj = application(stateFromStores[14]);
    obj = {};
    let id;
    if (null != application) {
      id = application.id;
    }
    obj.application_id = id;
    obj.track(closure_10.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, obj);
  }, items6);
  let obj3 = arg1(dependencyMap[15]);
  const items7 = [closure_8];
  const stateFromStores1 = obj3.useStateFromStores(items7, () => closure_8.can(constants.SEND_MESSAGES, closure_3));
  obj = { bottom: true, style: tmp.container };
  obj = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer };
  obj1 = { style: tmp.inner };
  obj2 = { source: importDefault(dependencyMap[20]) };
  const items8 = [callback(closure_4, obj2), , ];
  obj3 = { style: tmp.text, variant: "text-lg/medium" };
  const intl = arg1(dependencyMap[11]).intl;
  obj3.children = intl.string(arg1(dependencyMap[11]).t.se5gLj);
  items8[1] = callback(arg1(dependencyMap[21]).Text, obj3);
  let tmp19 = null;
  if (null != memo) {
    const obj4 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp19 = callback(arg1(dependencyMap[21]).Text, obj4);
  }
  items8[2] = tmp19;
  obj1.children = items8;
  obj.children = closure_14(closure_5, obj1);
  const items9 = [callback(closure_6, obj), ];
  const obj5 = {};
  const items10 = [tmp.footer, obj.useStore().orientation === arg1(dependencyMap[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait];
  obj5.style = items10;
  const obj6 = {};
  let tmp28Result = null;
  if (null != guild) {
    const obj7 = { size: "lg" };
    const intl2 = arg1(dependencyMap[11]).intl;
    const obj8 = {};
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj8.guildName = name;
    obj7.text = intl2.formatToPlainString(arg1(dependencyMap[11]).t.UdYYP3, obj8);
    obj7.onPress = callback;
    tmp28Result = callback(arg1(dependencyMap[22]).Button, obj7);
    const tmp28 = callback;
  }
  const items11 = [tmp28Result, , ];
  let tmp32 = null;
  if (null != stateFromStores) {
    tmp32 = null;
    if (stateFromStores1) {
      const obj9 = { size: "lg" };
      const intl3 = arg1(dependencyMap[11]).intl;
      obj9.text = intl3.string(arg1(dependencyMap[11]).t.0cCDKP);
      obj9.onPress = callback1;
      tmp32 = callback(arg1(dependencyMap[22]).Button, obj9);
    }
  }
  items11[1] = tmp32;
  const obj10 = { size: "lg" };
  let str4;
  if (null != guild) {
    str4 = "tertiary";
  }
  obj10.variant = str4;
  const intl4 = arg1(dependencyMap[11]).intl;
  obj10.text = intl4.string(arg1(dependencyMap[11]).t.cpT0Cq);
  obj10.onPress = callback2;
  items11[2] = callback(arg1(dependencyMap[22]).Button, obj10);
  obj6.children = items11;
  obj5.children = closure_14(closure_15, obj6);
  items9[1] = callback(closure_5, obj5);
  obj.children = items9;
  return closure_14(arg1(dependencyMap[19]).SafeAreaPaddingView, obj);
};
