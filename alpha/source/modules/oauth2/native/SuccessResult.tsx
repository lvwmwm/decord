// Module ID: 10791
// Function ID: 10792
// Dependencies: [19, 17, 2064, 4709, 2115, 1085, 1502, 21, 5091, 587, 558, 576, 8434, 1126, 5941, 7046, 1265, 504, 5055, 4946, 1629, 6163, 10792, 5087, 5376, 6810, 2]

// Module 10791
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import transitionToGuild2 from "transitionToGuild" /* 7046 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: c9, Permissions: c10 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1 }, scrollViewContentContainer: obj3, inner: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, text: { marginTop: 24, paddingHorizontal: 40, textAlign: "center" }, footer: { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 }, footerLandscape: { flexDirection: "row-reverse", padding: 16 }, footerPortrait: { flexDirection: "column", padding: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
let closure_15 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SuccessResultModal(guild) {
  let channelId;
  let container;
  let inner;
  let items3;
  let name3;
  let scrollView;
  let scrollViewContentContainer;
  let stateFromStores;
  let tmp6;
  let tmp = guild;
  let tmp2 = stateFromStores;
  let obj = guild(stateFromStores[11]);
  const cResult = obj.c(66);
  guild = guild.guild;
  const application = guild.application;
  const tmp4 = closure_15();
  let obj2 = guild(stateFromStores[12]);
  const orientation = obj2.useStore().orientation;
  if (null == application) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[13]).intl;
      const stringResult = intl3.string(tmp(tmp2[13]).t["Dp+rgP"]);
      cResult[5] = stringResult;
      tmp21 = stringResult;
    } else {
      tmp21 = cResult[5];
    }
    tmp6 = tmp21;
  } else if (null != guild) {
    let name;
    const first = cResult[0];
    if (application != null) {
      name = application.name;
    }
    if (first === name) {
      let tmp14;
      let name1;
      const tmp12 = cResult[1];
      if (guild != null) {
        name1 = guild.name;
      }
      if (tmp12 === name1) {
        tmp14 = cResult[2];
      }
      tmp6 = tmp14;
    }
    const intl2 = tmp(tmp2[13]).intl;
    const format2 = intl2.format;
    let name2;
    const IlF6IY = tmp(tmp2[13]).t.IlF6IY;
    if (application != null) {
      name2 = application.name;
    }
    let obj3 = { installedApplicationName: name2, guildName: name3 };
    name3 = undefined;
    if (guild != null) {
      name3 = guild.name;
    }
    const format2Result = format2(IlF6IY, obj3);
    let name4;
    if (application != null) {
      name4 = application.name;
    }
    cResult[0] = name4;
    let name5;
    if (guild != null) {
      name5 = guild.name;
    }
    cResult[1] = name5;
    cResult[2] = format2Result;
    tmp14 = format2Result;
  } else {
    let name6;
    const tmp66 = cResult[3];
    if (application != null) {
      name6 = application.name;
    }
    if (tmp66 !== name6) {
      const intl = tmp(tmp2[13]).intl;
      const format = intl.format;
      let name7;
      const vTVC5T = tmp(tmp2[13]).t.vTVC5T;
      if (application != null) {
        name7 = application.name;
      }
      const obj4 = { installedApplicationName: name7 };
      const formatResult = format(vTVC5T, obj4);
      let name8;
      if (application != null) {
        name8 = application.name;
      }
      cResult[3] = name8;
      cResult[4] = formatResult;
      tmp6 = formatResult;
    } else {
      tmp6 = cResult[4];
    }
  }
  let id;
  const tmp23 = cResult[6];
  if (application != null) {
    id = application.id;
  }
  if (tmp23 === id) {
    let tmp30;
    let tmp29;
    let tmp33;
    let tmp35;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SelectedChannelStore];
      const fn = function b() {
        return channelId.getChannelId();
      };
      cResult[9] = items;
      cResult[10] = fn;
      tmp30 = fn;
      tmp29 = items;
    } else {
      tmp29 = cResult[9];
      tmp30 = cResult[10];
    }
    let tmpResult = tmp(tmp2[17]);
    stateFromStores = tmpResult.useStateFromStores(tmp29, tmp30);
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      cResult[11] = items1;
      tmp33 = items1;
    } else {
      tmp33 = cResult[11];
    }
    if (cResult[12] !== stateFromStores) {
      class V {
        constructor() {
          return ChannelStore.getChannel(stateFromStores);
        }
      }
      cResult[12] = stateFromStores;
      cResult[13] = V;
      tmp35 = V;
    } else {
      class V {
        constructor() {
          return ChannelStore.getChannel(stateFromStores);
        }
      }
    }
    const tmpResult3 = tmp(tmp2[17]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp33, tmp35);
    if (cResult[14] === application) {
      let tmp43;
      let tmp46;
      let tmp50;
      let tmp51;
      let tmp56;
      class V {
        constructor() {
          return ChannelStore.getChannel(stateFromStores);
        }
      }
      const tmp37 = cResult[17];
      if (application != null) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      if (tmp37 !== undefined) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
        if (application != null) {
          class V {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
        }
        class B {
          constructor() {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
          }
        }
        cResult[17] = tmp40;
        cResult[18] = B;
      } else {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      const tmp41 = cResult[19];
      if (application != null) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      if (tmp41 !== undefined) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
        if (application != null) {
          class V {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
        }
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[19] = tmp44;
        cResult[20] = G;
        tmp43 = G;
      } else {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      if (application != null) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      if (cResult[21] !== undefined) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
        tmp47[0] = undefined;
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[21] = undefined;
        cResult[22] = tmp47;
        tmp46 = tmp47;
      } else {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      const effect = stateFromStores1.useEffect(tmp43, tmp46);
      const _Symbol4 = Symbol;
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
        const items2 = [];
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[23] = items2;
        tmp50 = items2;
      } else {
        class V {
          constructor() {
            return ChannelStore.getChannel(stateFromStores);
          }
        }
      }
      if (cResult[24] !== stateFromStores1) {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[25] = M;
        tmp51 = M;
      } else {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      const tmpResult4 = tmp(tmp2[17]);
      null != stateFromStores && tmpResult4.useStateFromStores(tmp50, tmp51);
      const _Symbol5 = Symbol;
      ({ container, scrollView, scrollViewContentContainer, inner } = tmp4);
      class D {
        constructor() {
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
            const track = tmp10(1265).track;
            const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
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
        }
      }
      const _Symbol6 = Symbol;
      const text = tmp4.text;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
        const string = tmp57.string;
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[27] = tmp58;
        tmp56 = tmp58;
      } else {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      if (cResult[28] !== tmp4.text) {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
        const obj5 = { style: null, variant: "text-lg/medium", children: tmp56 };
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        cResult[28] = tmp4.text;
        cResult[29] = closure_12(tmp(tmp2[23]).Text, obj5);
        const tmp60 = closure_12(tmp(tmp2[23]).Text, obj5);
      } else {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
      }
      if (cResult[30] === tmp4.text) {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
        if (cResult[33] === tmp4.inner) {
          class M {
            constructor() {
              return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
            }
          }
        }
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        const obj6 = { style: inner, children: items3 };
        items3 = [tmp55, tmp59, tmp61];
        cResult[33] = tmp4.inner;
        cResult[34] = tmp59;
        cResult[35] = tmp61;
        cResult[36] = closure_13(closure_4, obj6);
        const tmp65 = closure_13(closure_4, obj6);
      }
      let tmp62 = null;
      if (null != tmp6) {
        class M {
          constructor() {
            return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
          }
        }
        const obj7 = { style: null, variant: "text-sm/normal", children: tmp6 };
        class G {
          constructor() {
            let id;
            const track = AnalyticsUtilsDefault.track;
            const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
            AnalyticsUtilsDefault;
            if (application != null) {
              id = application.id;
            }
            track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
          }
        }
        tmp62 = closure_12(tmp(tmp2[23]).Text, obj7);
      }
      cResult[30] = tmp4.text;
      cResult[31] = tmp6;
      cResult[32] = tmp62;
    }
    const fn2 = function k() {
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
        tmpResult.track(React4.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
        const _setImmediate = setImmediate;
        setImmediate(() => {
          let obj3;
          const obj = guild(stateFromStores[19]);
          const bestActiveInput = obj.getBestActiveInput();
          const tmp = guild;
          const tmp2 = stateFromStores;
          if (bestActiveInput != null) {
            const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
            const obj2 = { type: tmp(tmp2[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
            obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
            openCustomKeyboard(obj2);
          }
        });
      }
    };
    cResult[14] = application;
    cResult[15] = stateFromStores;
    cResult[16] = fn2;
    class D {
      constructor() {
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
          const track = tmp10(1265).track;
          const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
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
      }
    }
  }
  if (application != null) {
    class M {
      constructor() {
        return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
      }
    }
  }
  cResult[6] = undefined;
  if (guild != null) {
    class M {
      constructor() {
        return PermissionStore.can(constants.SEND_MESSAGES, stateFromStores1);
      }
    }
  }
  class D {
    constructor() {
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
        const track = tmp10(1265).track;
        const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
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
    }
  }
  cResult[7] = undefined;
  cResult[8] = D;
}) : (function SuccessResultModal(guild) {
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
  let tmp20;
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  react = undefined;
  let tmp = closure_15();
  let tmp2 = guild;
  let obj = guild(stateFromStores[12]);
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
      const track = tmp10(1265).track;
      const OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED;
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
  const tmp2Result = tmp2(stateFromStores[17]);
  stateFromStores = tmp2Result.useStateFromStores(items2, () => channelId.getChannelId());
  const items3 = [ChannelStore];
  const tmp2Result3 = tmp2(stateFromStores[17]);
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
      tmpResult.track(React4.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj3;
        const obj = guild(stateFromStores[19]);
        const bestActiveInput = obj.getBestActiveInput();
        const tmp = guild;
        const tmp2 = stateFromStores;
        if (bestActiveInput != null) {
          const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
          const obj2 = { type: tmp(tmp2[20]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
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
    const OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED = React4.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED;
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
    const OAUTH2_AUTHORIZE_SUCCESS_VIEWED = React4.OAUTH2_AUTHORIZE_SUCCESS_VIEWED;
    AnalyticsUtilsDefault;
    if (application != null) {
      id = application.id;
    }
    track(OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const items7 = [PermissionStore];
  const tmp14 = closure_13;
  const tmp2Result4 = tmp2(stateFromStores[17]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items7, () => PermissionStore.can(constants.SEND_MESSAGES, closure_3));
  let obj3 = { bottom: true, style: tmp.container, children: items9 };
  const obj4 = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: tmp14(tmp17, obj5) };
  obj5 = { style: tmp.inner, children: items8 };
  const SafeAreaPaddingView = tmp2(tmp3[25]).SafeAreaPaddingView;
  const obj6 = { source: application(stateFromStores[22]) };
  const tmp18 = application(stateFromStores[21]);
  items8 = [closure_12(tmp18, obj6), , ];
  const obj7 = { style: tmp.text, variant: "text-lg/medium", children: intl.string(tmp2(stateFromStores[13]).t.se5gLj) };
  const Text = tmp2(tmp3[23]).Text;
  intl = tmp2(tmp3[13]).intl;
  items8[1] = closure_12(Text, obj7);
  let tmp15Result = null;
  const tmp16 = closure_5;
  if (null != memo) {
    const obj8 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp15Result = tmp15(tmp2(tmp3[23]).Text, obj8);
  }
  items8[2] = tmp15Result;
  items9 = [tmp15(tmp16, obj4), ];
  const items10 = [tmp.footer, ];
  const obj9 = { style: items10, children: tmp14(tmp20, obj13) };
  items10[1] = orientation === tmp2(stateFromStores[12]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  let tmp15Result3 = null;
  tmp20 = closure_14;
  if (null != guild) {
    const Button = tmp2(tmp3[24]).Button;
    let intl2 = tmp2(tmp3[13]).intl;
    const formatToPlainString = intl2.formatToPlainString;
    let name;
    const UdYYP3 = tmp2(tmp3[13]).t.UdYYP3;
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
      const obj12 = { size: "lg", text: intl3.string(tmp2(stateFromStores[13]).t["0cCDKP"]), onPress: callback1 };
      const Button2 = tmp2(tmp3[24]).Button;
      intl3 = tmp2(tmp3[13]).intl;
      tmp15Result4 = tmp15(Button2, obj12);
    }
  }
  items11[1] = tmp15Result4;
  let str;
  const Button3 = tmp2(tmp3[24]).Button;
  if (null != guild) {
    str = "tertiary";
  }
  obj13 = { children: items11 };
  const obj14 = { size: "lg", variant: str, text: intl4.string(tmp2(stateFromStores[13]).t.cpT0Cq), onPress: callback2 };
  intl4 = tmp2(tmp3[13]).intl;
  items11[2] = closure_12(Button3, obj14);
  items9[1] = closure_12(closure_4, obj9);
  return tmp14(SafeAreaPaddingView, obj3);
});
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default tmp6;
