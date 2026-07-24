// Module ID: 10863
// Function ID: 84293
// Name: SuccessResultModal
// Dependencies: [31, 27, 1348, 3758, 1906, 653, 1455, 33, 4130, 689, 8347, 1212, 4337, 5737, 675, 566, 4098, 3989, 1555, 5121, 10864, 4126, 4543, 2]
// Exports: default

// Module 10863 (SuccessResultModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_4, View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_10, Permissions: closure_11 } = ME);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flex: 1 };
let obj1 = { height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.scrollViewContentContainer = obj1;
_createForOfIteratorHelperLoose.inner = { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.text = { marginTop: 24, paddingHorizontal: 40, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 };
_createForOfIteratorHelperLoose.footerLandscape = { flexDirection: "row-reverse", padding: 16 };
_createForOfIteratorHelperLoose.footerPortrait = { flexDirection: "column", padding: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  let React;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(stateFromStores[10]);
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
      return intl.string(guild(stateFromStores[11]).t["Dp+rgP"]);
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
      obj.track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      const obj3 = guild(stateFromStores[13]);
    }
  }, items1);
  let obj1 = guild(stateFromStores[15]);
  const items2 = [closure_9];
  stateFromStores = obj1.useStateFromStores(items2, () => outer1_9.getChannelId());
  let obj2 = guild(stateFromStores[15]);
  const items3 = [_isNativeReflectConstruct];
  React = obj2.useStateFromStores(items3, () => outer1_7.getChannel(stateFromStores));
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
      application(stateFromStores[14]).track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = guild(stateFromStores[17]);
        const bestActiveInput = obj.getBestActiveInput();
        if (null != bestActiveInput) {
          obj = { type: guild(stateFromStores[18]).KeyboardTypes.APP_LAUNCHER };
          obj = { initialRouteName: outer2_12.APPLICATION_VIEW, application: outer1_1 };
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
    obj.track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, obj);
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
    obj.track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, obj);
  }, items6);
  let obj3 = guild(stateFromStores[15]);
  const items7 = [closure_8];
  const stateFromStores1 = obj3.useStateFromStores(items7, () => outer1_8.can(outer1_11.SEND_MESSAGES, result));
  obj = { bottom: true, style: tmp.container };
  obj = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer };
  obj1 = { style: tmp.inner };
  obj2 = { source: application(stateFromStores[20]) };
  const items8 = [callback(closure_4, obj2), , ];
  obj3 = { style: tmp.text, variant: "text-lg/medium" };
  let intl = guild(stateFromStores[11]).intl;
  obj3.children = intl.string(guild(stateFromStores[11]).t.se5gLj);
  items8[1] = callback(guild(stateFromStores[21]).Text, obj3);
  let tmp19 = null;
  if (null != memo) {
    const obj4 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp19 = callback(guild(stateFromStores[21]).Text, obj4);
  }
  items8[2] = tmp19;
  obj1.children = items8;
  obj.children = closure_14(closure_5, obj1);
  const items9 = [callback(closure_6, obj), ];
  const obj5 = {};
  const items10 = [tmp.footer, obj.useStore().orientation === guild(stateFromStores[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait];
  obj5.style = items10;
  const obj6 = {};
  let tmp28Result = null;
  if (null != guild) {
    const obj7 = { size: "lg" };
    let intl2 = guild(stateFromStores[11]).intl;
    const obj8 = {};
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj8.guildName = name;
    obj7.text = intl2.formatToPlainString(guild(stateFromStores[11]).t.UdYYP3, obj8);
    obj7.onPress = callback;
    tmp28Result = callback(guild(stateFromStores[22]).Button, obj7);
    const tmp28 = callback;
  }
  const items11 = [tmp28Result, , ];
  let tmp32 = null;
  if (null != stateFromStores) {
    tmp32 = null;
    if (stateFromStores1) {
      const obj9 = { size: "lg" };
      let intl3 = guild(stateFromStores[11]).intl;
      obj9.text = intl3.string(guild(stateFromStores[11]).t["0cCDKP"]);
      obj9.onPress = callback1;
      tmp32 = callback(guild(stateFromStores[22]).Button, obj9);
    }
  }
  items11[1] = tmp32;
  const obj10 = { size: "lg" };
  let str4;
  if (null != guild) {
    str4 = "tertiary";
  }
  obj10.variant = str4;
  const intl4 = guild(stateFromStores[11]).intl;
  obj10.text = intl4.string(guild(stateFromStores[11]).t.cpT0Cq);
  obj10.onPress = callback2;
  items11[2] = callback(guild(stateFromStores[22]).Button, obj10);
  obj6.children = items11;
  obj5.children = closure_14(closure_15, obj6);
  items9[1] = callback(closure_5, obj5);
  obj.children = items9;
  return closure_14(guild(stateFromStores[19]).SafeAreaPaddingView, obj);
};
