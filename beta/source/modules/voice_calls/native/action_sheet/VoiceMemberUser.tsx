// Module ID: 14057
// Function ID: 14058
// Name: VoiceMemberUser
// Dependencies: [109, 19, 17, 1186, 502, 5497, 2045, 2109, 1996, 4798, 1078, 21, 4758, 580, 558, 568, 9614, 504, 4610, 14058, 14059, 1181, 14060, 14061, 14062, 14063, 9708, 4754, 1119, 8876, 7985, 10312, 4616, 4965, 4725, 10008, 5341, 4910, 9972, 4603, 2]

// Module 14057 (VoiceMemberUser)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4965 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7985 */;
import useIsSpeakingDefault from "useIsSpeaking" /* 9614 */;
import _modDef9708 from "module_9708" /* 9708 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 10008 */;
import _modDef14060 from "module_14060" /* 14060 */;
import _modDef14061 from "module_14061" /* 14061 */;
import _modDef14062 from "module_14062" /* 14062 */;
import _modDef14063 from "module_14063" /* 14063 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5497 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import PresenceStore from "PresenceStore" /* 4798 */;

require = fn;
let user = ["user", "name", "channel", "voiceState", "withStream", "isSpectating", "isActionSheet", "onPress"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform } = get_ActivityIndicator);
const Fonts = fn(1078).Fonts;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let createStyles = fn(4758);
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 }, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: null, ringingButtonLabel: null, autoDisabledVideo: null, autoDisabledVideoLabel: null };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_16 = createStyles.createStyles(obj);
createStyles = fn(4758);
let obj6 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj5 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj8 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj6.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
let obj9 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6.ringingButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj6.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_17 = createStyles.createStyles(obj6);
let ReactCompilerGating = fn(558);
let closure_18 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = require("c").c(97);
  if (cResult[0] !== user) {
    user = user.user;
    ({ name, channel } = user);
    _require = channel;
    ({ voiceState, withStream, isSpectating } = user);
    importDefault = isSpectating;
    ({ isActionSheet, onPress } = user);
    dependencyMap = onPress;
    const tmp15 = _objectWithoutProperties(user, user);
    cResult[0] = user;
    cResult[1] = channel;
    cResult[2] = isActionSheet;
    cResult[3] = isSpectating;
    cResult[4] = name;
    cResult[5] = onPress;
    cResult[6] = tmp15;
    cResult[7] = withStream;
    cResult[8] = user;
    cResult[9] = voiceState;
    let tmp12 = voiceState;
  } else {
    _require = cResult[1];
    importDefault = cResult[3];
    dependencyMap = cResult[5];
    user = cResult[8];
    tmp12 = cResult[9];
  }
  let obj = require("c");
  _objectWithoutProperties = style();
  closure_17();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const id = localMute.getId();
    cResult[10] = id;
    let tmp19 = id;
  } else {
    tmp19 = cResult[10];
  }
  closure_5 = tmp19;
  if (cResult[11] !== tmp11.id) {
    let obj2 = { userId: tmp11.id };
    cResult[11] = tmp11.id;
    cResult[12] = obj2;
    let tmp22 = obj2;
  } else {
    tmp22 = cResult[12];
  }
  useIsSpeakingDefault(tmp22);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    const fn = function p() {
      return stateFromStores.theme;
    };
    cResult[13] = items;
    cResult[14] = fn;
    let tmp25 = fn;
    let tmp24 = items;
  } else {
    tmp24 = cResult[13];
    tmp25 = cResult[14];
  }
  const tmp17 = style();
  stateFromStores = require("initialize").useStateFromStores(tmp24, tmp25);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    cResult[15] = items1;
    let tmp28 = items1;
  } else {
    tmp28 = cResult[15];
  }
  if (cResult[16] !== tmp11.id) {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    cResult[16] = tmp11.id;
    cResult[17] = O;
    const tmp30 = O;
  } else {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp28, tmp30);
  localMute = stateFromStoresObject.localMute;
  ({ localDeaf, localVideo, isSelfMute, localVideoDisabled } = stateFromStoresObject);
  const localVideoAutoDisabled = stateFromStoresObject.localVideoAutoDisabled;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    const items2 = [localDeaf];
    cResult[18] = items2;
    const tmp32 = items2;
  } else {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  if (tmp4 != null) {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  if (cResult[19] === undefined) {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp32, X);
    if (cResult[22] === isSelfMute) {
      class O {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_11;
            isSelfMuteResult = closure_11.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_11;
            isSelfDeafResult = closure_11.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_11;
            isVideoEnabledResult = closure_11.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    c15 = false;
    closure_13 = false;
    if (!localMute) {
      class O {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_11;
            isSelfMuteResult = closure_11.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_11;
            isSelfDeafResult = closure_11.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_11;
            isVideoEnabledResult = closure_11.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    localMute = tmp39;
    if (!localVideo) {
      class O {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_11;
            isSelfMuteResult = closure_11.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_11;
            isSelfDeafResult = closure_11.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_11;
            isVideoEnabledResult = closure_11.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
    }
    localVideo = tmp40;
    MediaEngineStore = false;
    let flag2 = false;
    let tmp41 = tmp40;
    let flag3 = false;
    let tmp42 = tmp39;
    let flag4 = false;
    let tmp43 = localDeaf;
    if (null != tmp12) {
      class O {
        constructor() {
          tmp = closure_3;
          isVideoEnabledResult = closure_5 === closure_3.id;
          isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp4 = closure_11;
            isSelfMuteResult = closure_11.isSelfMute();
          }
          obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
          isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            tmp6 = closure_11;
            isSelfDeafResult = closure_11.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            tmp7 = closure_11;
            isVideoEnabledResult = closure_11.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
          obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
          return obj;
        }
      }
      c15 = true;
      if (tmp16) {
        class O {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_11;
              isSelfMuteResult = closure_11.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_11;
              isSelfDeafResult = closure_11.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_11;
              isVideoEnabledResult = closure_11.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      closure_13 = tmp44;
      if (!tmp39) {
        class O {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_11;
              isSelfMuteResult = closure_11.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_11;
              isSelfDeafResult = closure_11.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_11;
              isVideoEnabledResult = closure_11.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localMute = tmp45;
      if (!localDeaf) {
        class O {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_11;
              isSelfMuteResult = closure_11.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_11;
              isSelfDeafResult = closure_11.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_11;
              isVideoEnabledResult = closure_11.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localDeaf = tmp46;
      if (!tmp40) {
        class O {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_11;
              isSelfMuteResult = closure_11.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_11;
              isSelfDeafResult = closure_11.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_11;
              isVideoEnabledResult = closure_11.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
      }
      localVideo = tmp47;
      const sessionId = tmp12.sessionId;
      let tmp48 = null != sessionId && tmp19 === tmp11.id;
      if (tmp48) {
        class O {
          constructor() {
            tmp = closure_3;
            isVideoEnabledResult = closure_5 === closure_3.id;
            isSelfMuteResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp4 = closure_11;
              isSelfMuteResult = closure_11.isSelfMute();
            }
            obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
            isSelfDeafResult = isVideoEnabledResult;
            if (isVideoEnabledResult) {
              tmp6 = closure_11;
              isSelfDeafResult = closure_11.isSelfDeaf();
            }
            obj.localDeaf = isSelfDeafResult;
            if (isVideoEnabledResult) {
              tmp7 = closure_11;
              isVideoEnabledResult = closure_11.isVideoEnabled();
            }
            obj.localVideo = isVideoEnabledResult;
            obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
            obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
            return obj;
          }
        }
        tmp48 = sessionId !== localMute.getSessionId();
      }
      MediaEngineStore = tmp48;
      flag4 = tmp48;
      flag2 = true;
      tmp41 = tmp47;
      flag3 = tmp44;
      tmp42 = tmp45;
      tmp43 = tmp46;
    }
    cResult[22] = isSelfMute;
    cResult[23] = localDeaf;
    cResult[24] = localMute;
    cResult[25] = localVideo;
    cResult[26] = localVideoDisabled;
    cResult[27] = tmp11.id;
    cResult[28] = tmp12;
    cResult[29] = tmp16;
    cResult[30] = tmp43;
    cResult[31] = flag4;
    cResult[32] = tmp42;
    cResult[33] = flag3;
    cResult[34] = tmp41;
    cResult[35] = flag2;
    class X {
      constructor() {
        guild_id = undefined;
        tmp = closure_10;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_10.isGuestOrLurker(guild_id, closure_3.id);
      }
    }
    const tmpResult4 = tmp(504);
  }
  if (tmp4 != null) {
    class O {
      constructor() {
        tmp = closure_3;
        isVideoEnabledResult = closure_5 === closure_3.id;
        isSelfMuteResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp4 = closure_11;
          isSelfMuteResult = closure_11.isSelfMute();
        }
        obj = { isSelfMute: isSelfMuteResult, localMute: closure_11.isLocalMute(tmp.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
        isSelfDeafResult = isVideoEnabledResult;
        if (isVideoEnabledResult) {
          tmp6 = closure_11;
          isSelfDeafResult = closure_11.isSelfDeaf();
        }
        obj.localDeaf = isSelfDeafResult;
        if (isVideoEnabledResult) {
          tmp7 = closure_11;
          isVideoEnabledResult = closure_11.isVideoEnabled();
        }
        obj.localVideo = isVideoEnabledResult;
        obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
        obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
        return obj;
      }
    }
  }
  class X {
    constructor() {
      guild_id = undefined;
      tmp = closure_10;
      if (closure_0 != null) {
        guild_id = closure_0.guild_id;
      }
      return closure_10.isGuestOrLurker(guild_id, closure_3.id);
    }
  }
  cResult[19] = undefined;
  cResult[20] = tmp11.id;
  cResult[21] = X;
}) : ((user) => {
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const tmp2 = closure_16();
  const tmp3 = closure_17();
  const id = AuthenticationStore.getId();
  let obj = AuthenticationStore;
  const obj2 = { userId: user.id };
  const tmp7 = channel(9614)({ userId: user.id });
  const items = [ThemeStore];
  const stateFromStores = user(504).useStateFromStores(items, () => theme.theme);
  const obj3 = user(504);
  const items1 = [MediaEngineStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items1, () => {
    let isVideoEnabledResult = id === user.id;
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = MediaEngineStore.isSelfMute();
    }
    const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: null, localVideo: null, localVideoDisabled: null, localVideoAutoDisabled: null };
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = MediaEngineStore.isSelfDeaf();
    }
    obj.localDeaf = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    obj.localVideo = isVideoEnabledResult;
    obj.localVideoDisabled = MediaEngineStore.isLocalVideoDisabled(user.id);
    obj.localVideoAutoDisabled = MediaEngineStore.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  const obj4 = user(504);
  const items2 = [GuildMemberStore];
  let tmp12 = localMute;
  const stateFromStores1 = user(504).useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp12 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag = false;
  let tmp13 = localVideo;
  let tmp14 = localDeaf;
  let tmp15 = tmp12;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  if (null != voiceState) {
    if (withStream) {
      withStream = voiceState.selfStream;
    }
    let isVoiceMutedResult = tmp12;
    if (!tmp12) {
      isVoiceMutedResult = voiceState.isVoiceMuted();
    }
    let isVoiceDeafenedResult = localDeaf;
    if (!localDeaf) {
      isVoiceDeafenedResult = voiceState.isVoiceDeafened();
    }
    let selfVideo = localVideo;
    if (!localVideo) {
      selfVideo = voiceState.selfVideo;
    }
    const sessionId = voiceState.sessionId;
    const tmp18 = null != sessionId && id === user.id && sessionId !== obj.getSessionId();
    flag3 = true;
    flag = tmp18;
    tmp13 = selfVideo;
    tmp14 = isVoiceDeafenedResult;
    tmp15 = isVoiceMutedResult;
    flag2 = withStream;
    flag4 = tmp18;
  }
  const tmp19 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
  const obj6 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: null,
    trailing: null
  };
  const obj7 = { user, guildId: null, size: null, speaking: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj7.guildId = guild_id;
  obj7.size = user(1181).AvatarSizes.REFRESH_MEDIUM_32;
  obj7.speaking = tmp7;
  obj6.leading = closure_13(user(1181).Avatar, obj7);
  let tmp23Result = null;
  if (flag3) {
    tmp23Result = null;
    if (!flag) {
      const obj8 = { style: tmp2.row, children: null };
      let tmp20Result = null;
      if (user.isSpectating) {
        const obj9 = { size: tmp8(1181).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(14063), style: tmp19 };
        tmp20Result = tmp20(tmp8(1181).Icon, obj9);
      }
      const items3 = [tmp20Result, , , , ];
      if (!tmp15) {
        items3[1] = null;
        let tmp20Result5 = null;
        if (tmp14) {
          const obj10 = { size: tmp8(1181).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(14060), style: tmp19 };
          tmp20Result5 = tmp20(tmp8(1181).Icon, obj10);
        }
        items3[2] = tmp20Result5;
        if (!tmp13) {
          items3[3] = null;
          let tmp20Result6 = null;
          if (flag2) {
            const obj11 = { style: tmp19 };
            tmp20Result6 = tmp20(tmp8(1181).LiveTag, obj11);
          }
          items3[4] = tmp20Result6;
          obj8.children = items3;
          tmp23Result = tmp23(tmp24, obj8);
        } else {
          if (localVideoDisabled) {
            const obj12 = { size: tmp8(1181).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(14061), style: tmp2.voiceStatusIconMargin, disableColor: true };
            let obj13 = obj12;
          } else {
            obj13 = { size: tmp8(1181).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(14062), style: tmp19 };
          }
          tmp20(tmp8(1181).Icon, obj13);
        }
      } else {
        if (tmp8Result.isThemeDark(stateFromStores)) {
          let tmp5Result = tmp5(14058);
        } else {
          tmp5Result = tmp5(14059);
        }
        const obj14 = { size: tmp8(1181).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: tmp2.voiceStatusIconMargin, color: tmp19.tintColor, disableColor: localMute };
        tmp20(tmp8(1181).Icon, obj14);
        tmp8Result = tmp8(4610);
      }
      tmp23 = closure_14;
      tmp24 = closure_5;
    }
  }
  obj6.trailing = tmp23Result;
  const obj15 = { disabled: flag4 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj6);
  let tmp35 = name;
  if (stateFromStores1) {
    const obj16 = { children: null };
    const items4 = [name, ];
    const obj17 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp8(1119).intl;
    const items5 = ["\u00A0", intl.string(tmp8(1119).t["pFO/Ph"])];
    obj17.children = items5;
    items4[1] = closure_14(tmp8(4754).Text, obj17);
    obj16.children = items4;
    tmp35 = closure_14(closure_15, obj16);
  }
  const obj18 = { text: tmp35, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  obj18.style = labelCallScreen;
  obj15.label = closure_13(user(8876).FormRow.Label, obj18);
  if (localVideoAutoDisabled) {
    const obj19 = { style: tmp2.autoDisabledVideo, children: null };
    const obj20 = { source: tmp5(9708), size: tmp8(1181).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items6 = [tmp20(tmp8(1181).Icon, obj20), ];
    const obj21 = { variant: "text-xs/medium", color: "text-default", style: tmp2.autoDisabledVideoLabel, children: null };
    const intl3 = tmp8(1119).intl;
    obj21.children = intl3.string(tmp8(1119).t.m2Hyj0);
    items6[1] = tmp20(tmp8(4754).Text, obj21);
    obj19.children = items6;
    let stringResult = closure_14(closure_5, obj19);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1119).intl;
      stringResult = intl2.string(tmp8(1119).t.IyYqqY);
    }
  }
  obj15.subLabel = stringResult;
  return closure_13(user(8876).FormRow, obj15);
}));
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamingUserRow(user) {
  const cResult = user(568).c(18);
  const tmp4 = closure_16();
  user = user.user;
  const channel = user.channel;
  let obj = user(568);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function l() {
      return StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp5 = closure_17();
  const stateFromStores = user(504).useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    if (null == stateFromStores) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.eXan7B);
      cResult[3] = stateFromStores;
      cResult[4] = stringResult;
    }
    const intl2 = tmp(1119).intl;
    if (null == stateFromStores.details) {
      let obj2 = { name: stateFromStores.name };
      intl2.format(tmp13, obj2);
    }
    const details = stateFromStores.details;
  } else {
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp5.labelCallScreen;
    }
    if (cResult[5] === cResult[4]) {
      if (cResult[6] === labelCallScreen) {
        let tmp18 = cResult[7];
      }
      if (cResult[8] === user) {
        if (cResult[9] === tmp18) {
          let tmp21 = cResult[10];
        }
        if (cResult[11] === channel) {
          if (cResult[12] === tmp4) {
            if (cResult[13] === user.id) {
              let tmp28 = cResult[14];
            }
            if (cResult[15] === tmp21) {
              if (cResult[16] === tmp28) {
                let tmp36 = cResult[17];
              }
              return tmp36;
            }
            let obj3 = { children: null };
            const items1 = [tmp21, tmp28];
            obj3.children = items1;
            const tmp39 = closure_14(closure_15, obj3);
            cResult[15] = tmp21;
            cResult[16] = tmp28;
            cResult[17] = tmp39;
            tmp36 = tmp39;
          }
        }
        let tmp31Result = user.id !== AuthenticationStore.getId();
        if (tmp31Result) {
          let obj4 = { style: tmp4.streamPreview, children: null };
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const obj5 = {
            guildId,
            userId: user.id,
            disableTransition: true,
            onPress() {
                      let isModalOpenResult = null != channel;
                      if (isModalOpenResult) {
                        const obj = NavigationRouteUtils;
                        isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(tmp.id));
                      }
                      if (isModalOpenResult) {
                        const obj3 = ActionSheetActionCreatorsDefault;
                        obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(tmp.id));
                      }
                    }
          };
          obj4.children = closure_13(channel(10312), obj5);
          tmp31Result = tmp31(closure_5, obj4);
          const tmp34 = channel(10312);
        }
        cResult[11] = channel;
        cResult[12] = tmp4;
        cResult[13] = user.id;
        cResult[14] = tmp31Result;
        tmp28 = tmp31Result;
      }
      const obj6 = {};
      const merged = Object.assign(user);
      obj6.subLabel = tmp18;
      const tmp27 = closure_13(closure_18, obj6);
      cResult[8] = user;
      cResult[9] = tmp18;
      cResult[10] = tmp27;
      tmp21 = tmp27;
    }
    const obj7 = { text: cResult[4], style: labelCallScreen };
    const tmp20 = closure_13(tmp(8876).FormSubLabel, obj7);
    cResult[5] = cResult[4];
    cResult[6] = labelCallScreen;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  }
}) : (function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = closure_16();
  const tmp2 = closure_17();
  const items = [PresenceStore];
  let stateFromStores = user(504).useStateFromStores(items, () => StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore));
  if (null != stateFromStores) {
    const intl2 = tmp3(1119).intl;
    if (null == stateFromStores.details) {
      stateFromStores = { name: null };
      stateFromStores.name = stateFromStores.name;
      intl2.format(tmp6, stateFromStores);
    }
    const details = stateFromStores.details;
  } else {
    const intl = tmp3(1119).intl;
    let obj2 = {};
    const merged = Object.assign(user);
    let obj3 = { text: intl.string(tmp3(1119).t.eXan7B), style: null };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj3.style = labelCallScreen;
    obj2.subLabel = closure_13(tmp3(8876).FormSubLabel, obj3);
    const items1 = [closure_13(closure_18, obj2), ];
    let tmp10Result = user.id !== AuthenticationStore.getId();
    if (tmp10Result) {
      let obj4 = { style: tmp.streamPreview, children: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const obj5 = {
        guildId,
        userId: user.id,
        disableTransition: true,
        onPress() {
              let isModalOpenResult = null != channel;
              if (isModalOpenResult) {
                const obj = NavigationRouteUtils;
                isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(tmp.id));
              }
              if (isModalOpenResult) {
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(tmp.id));
              }
            }
      };
      obj4.children = tmp10(channel(10312), obj5);
      tmp10Result = tmp10(closure_5, obj4);
      const tmp20 = channel(10312);
    }
    const obj6 = { children: null };
    items1[1] = tmp10Result;
    obj6.children = items1;
    return closure_14(closure_15, obj6);
  }
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function RingButton(channelId) {
  const cResult = channelId(568).c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_16();
  const tmp5 = closure_17();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        if (cResult[1] === userId) {
          let tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t.bHa9kN);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_13(tmp(1181).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp12) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_13(tmp(5341).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_16();
  let tmp4Result = closure_17();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1119).intl;
      const stringResult = intl.string(tmp5(1119).t.bHa9kN);
      obj2.children = stringResult;
      tmp4Result = tmp4(tmp5(1181).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_13(channelId(5341).PressableOpacity, obj);
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function StopRingButton(channelId) {
  const cResult = channelId(568).c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_16();
  const tmp5 = closure_17();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        if (cResult[1] === userId) {
          let tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t.ygslb0);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_13(tmp(1181).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp12) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_13(tmp(5341).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        CallActionCreatorsDefault.stopRinging(channelId, items);
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_16();
  let tmp4Result = closure_17();
  let tmp3 = null;
  if (null != userId) {
    tmp3 = null;
    if (null != channelId) {
      const obj = {
        onPress() {
              const items = [userId];
              CallActionCreatorsDefault.stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
        children: null
      };
      const obj2 = { style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel, children: null };
      const intl = tmp5(1119).intl;
      const stringResult = intl.string(tmp5(1119).t.ygslb0);
      obj2.children = stringResult;
      tmp4Result = tmp4(tmp5(1181).LegacyText, obj2);
      obj.children = tmp4Result;
      closure_13(channelId(5341).PressableOpacity, obj);
    }
  }
  return tmp3;
});
fn(558);
let obj11 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DisconnectedUserRow(user) {
  const cResult = user(isActionSheet[15]).c(31);
  user = user.user;
  const channel = user.channel;
  isActionSheet = user.isActionSheet;
  const onPress = user.onPress;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === user.id) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[17]).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === channel.guild_id) {
      if (cResult[6] === channel.id) {
        if (cResult[7] === user) {
          let tmp10 = cResult[8];
        }
        const canRing = tmp(tmp2[38]).useCanRing(user, "DisconnectedUserRow");
        if (cResult[9] === canRing) {
          if (cResult[10] === channel.id) {
            if (cResult[11] === isActionSheet) {
              if (cResult[12] === stateFromStores) {
                if (cResult[13] === user.id) {
                  let tmp14 = cResult[14];
                }
                if (cResult[15] === onPress) {
                  if (cResult[16] === user) {
                    let tmp15 = cResult[17];
                  }
                  class E {
                    constructor() {
                      return onPress(user);
                    }
                  }
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp16) {
                      let tmp17 = cResult[20];
                    }
                    if (cResult[21] === channel.guild_id) {
                      if (cResult[22] === user) {
                        let tmp20 = cResult[23];
                      }
                      if (cResult[24] !== tmp14) {
                        const tmp14Result = tmp14();
                        class E {
                          constructor() {
                            return onPress(user);
                          }
                        }
                        cResult[25] = tmp14Result;
                        let tmp22 = tmp14Result;
                      } else {
                        tmp22 = cResult[25];
                      }
                      class E {
                        constructor() {
                          return onPress(user);
                        }
                      }
                      const obj2 = { onPress: tmp15, label: tmp17, leading: tmp20, trailing: tmp22 };
                      const obj4 = {};
                      const merged = Object.assign(obj2);
                      const tmp29 = closure_13(tmp(tmp2[29]).FormRow, obj4);
                      cResult[26] = tmp22;
                      cResult[27] = tmp15;
                      cResult[28] = tmp17;
                      cResult[29] = tmp20;
                      cResult[30] = tmp29;
                    }
                    class E {
                      constructor() {
                        return onPress(user);
                      }
                    }
                    const obj5 = { user, guildId: channel.guild_id, size: tmp(tmp2[21]).AvatarSizes.REFRESH_MEDIUM_32 };
                    const tmp21 = closure_13(tmp(tmp2[21]).Avatar, obj5);
                    cResult[21] = channel.guild_id;
                    cResult[22] = user;
                    cResult[23] = tmp21;
                    tmp20 = tmp21;
                  }
                  const obj6 = { text: tmp10, style: null };
                  const tmp19 = closure_13(tmp(tmp2[29]).FormRow.Label, obj6);
                  cResult[18] = tmp10;
                  cResult[19] = null;
                  cResult[20] = tmp19;
                  tmp17 = tmp19;
                }
                class E {
                  constructor() {
                    return onPress(user);
                  }
                }
                cResult[15] = onPress;
                cResult[16] = user;
                cResult[17] = E;
                tmp15 = E;
              }
            }
          }
        }
        function renderVoiceState() {
          if (!canRing) {
            return null;
          } else {
            const obj = { channelId: channel.id, userId: user.id, isActionSheet };
            __initData2(stateFromStores ? closure_21 : closure_20, obj);
          }
        }
        cResult[9] = canRing;
        cResult[10] = channel.id;
        cResult[11] = isActionSheet;
        cResult[12] = stateFromStores;
        cResult[13] = user.id;
        cResult[14] = renderVoiceState;
        tmp14 = renderVoiceState;
        const tmpResult2 = tmp(tmp2[38]);
      }
    }
    const tmpResult = tmp(tmp2[17]);
    const name = channel(tmp2[37]).getName(channel.guild_id, channel.id, user);
    cResult[5] = channel.guild_id;
    cResult[6] = channel.id;
    cResult[7] = user;
    cResult[8] = name;
    tmp10 = name;
    const obj3 = channel(tmp2[37]);
  }
  const fn = function l() {
    const call = CallStore.getCall(channel.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(user.id);
    }
    return hasItem;
  };
  const items1 = [channel.id, user.id];
  cResult[1] = channel.id;
  cResult[2] = user.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function DisconnectedUserRow(user) {
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const tmp = closure_17();
  const items = [CallStore];
  const items1 = [id2.id, id.id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    const call = CallStore.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  const obj = id(504);
  const name = id2(4910).getName(id2.guild_id, id2.id, id);
  const obj2 = id2(4910);
  const obj4 = {
    onPress() {
      return dependencyMap(id);
    },
    label: null,
    leading: null,
    trailing: null
  };
  const canRing = id(9972).useCanRing(id, "DisconnectedUserRow");
  const obj5 = { text: name, style: null };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj5.style = labelCallScreen;
  obj4.label = closure_13(id(8876).FormRow.Label, obj5);
  const obj3 = id(9972);
  obj4.leading = closure_13(id(1181).Avatar, { user: id, guildId: id2.guild_id, size: id(1181).AvatarSizes.REFRESH_MEDIUM_32 });
  if (!canRing) {
    obj4.trailing = null;
    const obj7 = {};
    const merged = Object.assign(obj4);
    return tmp7(tmp2(8876).FormRow, obj7);
  } else {
    const obj8 = { channelId: null, userId: null, isActionSheet: null };
    id2 = id2.id;
    obj8.channelId = id2;
    id = id.id;
    obj8.userId = id;
    obj8.isActionSheet = isActionSheet;
    tmp7(stateFromStores ? closure_21 : closure_20, obj8);
  }
}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberUser(voiceState) {
  const cResult = voiceState(568).c(11);
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let channelId;
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  if (cResult[1] !== channelId) {
    let channelId1;
    if (voiceState != null) {
      channelId1 = voiceState.channelId;
    }
    const fn = function l() {
      let channelId;
      if (voiceState != null) {
        channelId = voiceState.channelId;
      }
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = voiceState(568);
  const stateFromStores = voiceState(504).useStateFromStores(first, tmp7);
  const tmpResult = voiceState(504);
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      let tmp11 = nick;
      if (nick == null) {
        tmp11 = name;
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === voiceState) {
          if (cResult[9] === tmp11) {
            let tmp12 = cResult[10];
          }
          return tmp12;
        }
      }
      const obj2 = {};
      const merged = Object.assign(voiceState);
      obj2.name = tmp11;
      obj2.channel = stateFromStores;
      const tmp18 = closure_13(closure_19, obj2);
      cResult[7] = stateFromStores;
      cResult[8] = voiceState;
      cResult[9] = tmp11;
      cResult[10] = tmp18;
      tmp12 = tmp18;
    }
  }
  if (nick == null) {
    nick = name;
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === voiceState) {
      if (cResult[5] === nick) {
        let tmp19 = cResult[6];
      }
      return tmp19;
    }
  }
  const obj4 = {};
  const merged1 = Object.assign(voiceState);
  obj4.name = nick;
  obj4.channel = stateFromStores;
  obj4.withStream = false;
  const tmp21 = closure_13(closure_18, obj4);
  cResult[3] = stateFromStores;
  cResult[4] = voiceState;
  cResult[5] = nick;
  cResult[6] = tmp21;
  tmp19 = tmp21;
}) : (function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  const items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => {
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = voiceState(504);
  const name = UserUtilsDefault.useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      const obj3 = {};
      const merged = Object.assign(voiceState);
      if (nick == null) {
        nick = name;
      }
      obj3.name = nick;
      obj3.channel = stateFromStores;
      let tmp3Result = closure_13(closure_19, obj3);
    }
    return tmp3Result;
  }
  const obj4 = {};
  const merged1 = Object.assign(voiceState);
  let tmp6 = nick;
  if (nick == null) {
    tmp6 = name;
  }
  obj4.name = tmp6;
  obj4.channel = stateFromStores;
  obj4.withStream = false;
  tmp3Result = closure_13(closure_18, obj4);
}));
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
