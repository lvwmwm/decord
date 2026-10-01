// Module ID: 8511
// Function ID: 8512
// Name: SuccessResultModal
// Dependencies: [19, 17, 2045, 4469, 2099, 1074, 1484, 21, 4836, 576, 7780, 1115, 5039, 6760, 1241, 504, 4800, 4701, 1611, 6544, 8512, 4832, 5281, 2]
// Exports: default

// Module 8511 (SuccessResultModal)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import transitionToGuild2 from "transitionToGuild" /* 6760 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: c10, Permissions: unpackModuleId } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1 }, scrollViewContentContainer: obj3, inner: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, text: { marginTop: 24, paddingHorizontal: 40, textAlign: "center" }, footer: { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 }, footerLandscape: { flexDirection: "row-reverse", padding: 16 }, footerPortrait: { flexDirection: "column", padding: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
let closure_16 = createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  let channelId;
  let closure_3;
  let intl;
  let intl3;
  let intl4;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj5;
  let tmp19;
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  react = undefined;
  let tmp = closure_16();
  let tmp2 = guild;
  let obj = guild(stateFromStores[10]);
  let obj2 = react;
  const items = [application, guild];
  const orientation = obj.useStore().orientation;
  const memo = react.useMemo(() => {
    let name1;
    let stringResult;
    if (null != application) {
      let format2Result;
      if (null != guild) {
        const intl3 = intl5.intl;
        const format2 = intl3.format;
        let name;
        const IlF6IY = intl5.t.IlF6IY;
        if (application != null) {
          name = tmp.name;
        }
        const obj2 = { installedApplicationName: name, guildName: name1 };
        name1 = undefined;
        if (guild != null) {
          name1 = tmp7.name;
        }
        format2Result = format2(IlF6IY, obj2);
      } else {
        const intl2 = intl5.intl;
        const format = intl2.format;
        let name2;
        const vTVC5T = intl5.t.vTVC5T;
        if (application != null) {
          name2 = tmp.name;
        }
        const obj = { installedApplicationName: name2 };
        format2Result = format(vTVC5T, obj);
      }
      stringResult = format2Result;
    } else {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t["Dp+rgP"]);
    }
    return stringResult;
  }, items);
  const items1 = [guild, ];
  let id;
  const useCallback = react.useCallback;
  if (application != null) {
    id = application.id;
  }
  items1[1] = id;
  const callback = useCallback(() => {
    let id3;
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      let id1;
      const transitionToGuild = transitionToGuild2.transitionToGuild;
      transitionToGuild2;
      if (guild != null) {
        id1 = tmp.id;
      }
      transitionToGuild(id1);
      let id2;
      const track = tmp10(1241).track;
      const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
      AnalyticsUtilsDefault;
      if (application != null) {
        id2 = application.id;
      }
      const obj = { application_id: id2, guild_id: id3 };
      id3 = undefined;
      if (guild != null) {
        id3 = tmp.id;
      }
      track(OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
    }
  }, items1);
  const items2 = [SelectedChannelStore];
  const tmp2Result = tmp2(stateFromStores[15]);
  stateFromStores = tmp2Result.useStateFromStores(items2, () => channelId.getChannelId());
  const items3 = [ChannelStore];
  const tmp2Result3 = tmp2(stateFromStores[15]);
  react = tmp2Result3.useStateFromStores(items3, () => ChannelStore.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = obj2.useCallback(() => {
    let tmp = importDefault;
    let tmp2 = dependencyMap;
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp5 = null != stateFromStores && null != application;
    if (tmp5) {
      let obj2 = { application_id: application.id };
      const tmpResult = AnalyticsUtilsDefault;
      tmpResult.track(authStore.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj3;
        const obj = guild(stateFromStores[17]);
        const bestActiveInput = obj.getBestActiveInput();
        const tmp = guild;
        const tmp2 = stateFromStores;
        if (bestActiveInput != null) {
          const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
          const obj2 = { type: tmp(tmp2[18]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
          obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
          openCustomKeyboard(obj2);
        }
      });
    }
  }, items4);
  const useCallback2 = obj2.useCallback;
  if (application != null) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = useCallback2(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    let id;
    const track = AnalyticsUtilsDefault.track;
    const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = authStore.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
    AnalyticsUtilsDefault;
    if (application != null) {
      id = application.id;
    }
    track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
  }, items5);
  const useEffect = obj2.useEffect;
  if (application != null) {
    id2 = application.id;
  }
  const items6 = [id2];
  const effect = useEffect(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = authStore.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
    AnalyticsUtilsDefault;
    if (application != null) {
      id = application.id;
    }
    track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const items7 = [PermissionStore];
  const tmp14 = closure_14;
  const tmp2Result4 = tmp2(stateFromStores[15]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items7, () => PermissionStore.can(unpackModuleId.SEND_MESSAGES, closure_3));
  let obj3 = { bottom: true, style: tmp.container, children: items9 };
  const obj4 = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: tmp14(tmp17, obj5) };
  obj5 = { style: tmp.inner, children: items8 };
  const obj6 = { source: application(stateFromStores[20]) };
  const SafeAreaPaddingView = tmp2(tmp3[19]).SafeAreaPaddingView;
  items8 = [closure_13(closure_4, obj6), , ];
  const obj7 = { style: tmp.text, variant: "text-lg/medium", children: intl.string(tmp2(stateFromStores[11]).t.se5gLj) };
  const Text = tmp2(tmp3[21]).Text;
  intl = tmp2(tmp3[11]).intl;
  items8[1] = closure_13(Text, obj7);
  let tmp15Result = null;
  const tmp16 = closure_6;
  if (null != memo) {
    const obj8 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp15Result = tmp15(tmp2(tmp3[21]).Text, obj8);
  }
  items8[2] = tmp15Result;
  items9 = [tmp15(tmp16, obj4), ];
  const items10 = [tmp.footer, ];
  const obj9 = { style: items10, children: tmp14(tmp19, obj13) };
  items10[1] = orientation === tmp2(stateFromStores[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  let tmp15Result3 = null;
  tmp19 = closure_15;
  if (null != guild) {
    const Button = tmp2(tmp3[22]).Button;
    let intl2 = tmp2(tmp3[11]).intl;
    const formatToPlainString = intl2.formatToPlainString;
    let name;
    const UdYYP3 = tmp2(tmp3[11]).t.UdYYP3;
    if (guild != null) {
      name = guild.name;
    }
    const obj10 = { size: "lg", text: formatToPlainString(UdYYP3, obj11), onPress: callback };
    obj11 = { guildName: name };
    tmp15Result3 = tmp15(Button, obj10);
  }
  const items11 = [tmp15Result3, , ];
  let tmp15Result4 = null;
  if (null != stateFromStores) {
    tmp15Result4 = null;
    if (stateFromStores1) {
      const obj12 = { size: "lg", text: intl3.string(tmp2(stateFromStores[11]).t["0cCDKP"]), onPress: callback1 };
      const Button2 = tmp2(tmp3[22]).Button;
      intl3 = tmp2(tmp3[11]).intl;
      tmp15Result4 = tmp15(Button2, obj12);
    }
  }
  items11[1] = tmp15Result4;
  let str;
  const Button3 = tmp2(tmp3[22]).Button;
  if (null != guild) {
    str = "tertiary";
  }
  obj13 = { children: items11 };
  const obj14 = { size: "lg", variant: str, text: intl4.string(tmp2(stateFromStores[11]).t.cpT0Cq), onPress: callback2 };
  intl4 = tmp2(tmp3[11]).intl;
  items11[2] = closure_13(Button3, obj14);
  items9[1] = closure_13(closure_5, obj9);
  return tmp14(SafeAreaPaddingView, obj3);
};
