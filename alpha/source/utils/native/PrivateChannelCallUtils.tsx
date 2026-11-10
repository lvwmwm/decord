// Module ID: 8012
// Function ID: 8013
// Name: PrivateChannelCallUtils
// Dependencies: [5, 19, 5377, 6933, 4991, 5084, 5045, 1385, 1072, 1097, 8013, 21, 6791, 5890, 8014, 1108, 7273, 6796, 5376, 15487, 2118, 6801, 6763, 6093, 1113, 1252, 7415, 8030, 5325, 15520, 6094, 7554, 2]
// Exports: dismissVoiceChannelScreens, getVoiceChannelKey, getVoiceChannelKeyByChannelId, handleJoinCall, handleRedesignGroupDMCall, handleRedesignJoinCall, handleStartCall, hideVoiceChannelActionSheet, isVoiceChannelModalKey, maybeShowAgeGateModal, navigateToVoiceChannel, openChannelCallModal, openGuildVoiceModal, openVoiceChannelActionSheet, showGuardCallAlert

// Module 8012 (PrivateChannelCallUtils)
import Fragment from "Fragment" /* 21 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5890 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6093 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6763 */;
import AgeGateUtils from "AgeGateUtils" /* 6791 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6796 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8013 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8014 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5377 */;
import VoicePanelStore from "VoicePanelStore" /* 6933 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import RelationshipStore from "RelationshipStore" /* 5084 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, c3;

let closure_12;
let closure_14;
let map1;
let tmp2;
let unpackModuleId;
const ActionSheetActionCreatorsDefault = tmp2(5376);
function openChannelCallModal(channel) {
  const obj = AgeGateUtils;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const obj2 = ChannelRTCActionCreatorsDefault;
    const result = obj2.rebuildRTCActiveChannels();
    if (channel.isGuildStageVoice()) {
      if (SelectedChannelStore.getVoiceChannelId() === channel.id) {
        const tmpResult = StageChannelActionCreatorExtras;
        tmpResult.openStageChannel(channel);
      }
    }
    const state = VoicePanelStore.getState();
    state.openChannel(channel.id);
    const ComponentDispatch = tmp(1108).ComponentDispatch;
    const obj3 = { channelId: channel.id };
    ComponentDispatch.dispatch(map1.VOICE_PANEL_OPEN, obj3);
  }
}
function monkeyPatchCall() {
  let key;
  let voiceChannelId;
  const promise = new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_1_18 + "-" + channel.id;
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(combined, undefined);
      const tmp5 = importDefault;
      const tmp6 = dependencyMap;
      if (key.getKey() === combined) {
        const tmp5Result = tmp5(tmp6[18]);
        tmp5Result.hideActionSheet();
      }
    }
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
  return promise;
}
function guardPrivateCallForChannel(id, fn) {
  let intl;
  let intl2;
  let intl3;
  _require = fn;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null != channel) {
    const tmp2 = constants2;
    if (channel.type !== constants2.GUILD_VOICE) {
      const tmp3 = id;
      if (null != id) {
        if (id.id !== channel.id) {
          _require = _asyncToGenerator(async (arg0, value) => {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_0 = tmp3;
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: monkeyPatchCall(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0();
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          });
          const tmp8 = actions_AlertActionCreatorsDefault;
          let obj = {
            title: intl.string(require("intl").t["91WuJ9"]),
            body: intl2.string(require("intl").t["Rs+Vk1"]),
            cancelText: intl3.string(require("intl").t["ETE/oC"]),
            onConfirm() {
                      return closure_0();
                    },
            onCancel,
            isDismissable: false
          };
          const show = tmp8.show;
          intl = require("intl").intl;
          intl2 = require("intl").intl;
          intl3 = require("intl").intl;
          show(obj);
        }
      }
    }
  }
  fn();
}
function trackPrivateCallButtonClicked(button_name, channel_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { location: AnalyticsLocationDefault.PRIVATE_CHANNEL_CALL, button_name, guild_id: null, channel_id: channel_id.id, channel_type: channel_id.type };
  obj.track(unpackModuleId.CALL_BUTTON_CLICKED, obj2);
}
({ AnalyticEvents: unpackModuleId, ChannelTypes: closure_12, ComponentActions: map1, NOOP: closure_14 } = Constants);
const AgeGateSource = AgeGateConstants.AgeGateSource;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const jsx = Fragment.jsx;
let c18 = "voice-channel";
let closure_21 = { JOIN_CALL: "Join Call", JOIN_VIDEO_CALL: "Join Video Call", START_CALL: "Start Call", START_VIDEO_CALL: "Start Video Call" };
let result = size.fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

export function getVoiceChannelKeyByChannelId(arg0) {
  return "" + c18 + "-" + arg0;
}
export function getVoiceChannelKey(id) {
  return "" + c18 + "-" + id;
}
export function isVoiceChannelModalKey(openModalKey) {
  return openModalKey.startsWith(c18);
}
export { openChannelCallModal };
export function maybeShowAgeGateModal(channelId) {
  _require = channelId;
  let obj = require("AgeGateUtils");
  const tmp = _require;
  if (obj.shouldShowAgeGateForChannelId(channelId)) {
    const tmpResult = tmp(7273);
    tmpResult.runAfterInteractions(() => {
      const obj = AgeGateModalActionCreators;
      obj.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL, channelId);
    }, 150);
  }
}
export function openVoiceChannelActionSheet(channel) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { channel };
  const tmp2 = asyncRequire(15487, dependencyMap.paths);
  openLazy(tmp2, "" + c18 + "-" + channel.id, obj);
}
export function hideVoiceChannelActionSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet("" + c18 + "-" + id.id);
}
export function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c18 + "-" + channel.id;
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(combined, onExited);
  if (ActionSheetStore.getKey() === combined) {
    const tmp2Result = ActionSheetActionCreatorsDefault;
    tmp2Result.hideActionSheet();
  }
}
export { monkeyPatchCall };
export function showGuardCallAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let closure_0 = arg0;
  const obj = {
    title: intl.string(intl4.t["91WuJ9"]),
    body: intl2.string(intl4.t["Rs+Vk1"]),
    cancelText: intl3.string(intl4.t["ETE/oC"]),
    onConfirm() {
      return closure_0();
    },
    onCancel,
    isDismissable: false
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  show(obj);
}
export { guardPrivateCallForChannel };
export function handleJoinCall(channel, flag) {
  let closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _onConfirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let JOIN_CALL;
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const tmp26 = flag;
              if (tmp26) {
                const obj4 = c1(c2[27]);
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
          const tmp6 = closure_1_22;
          if (closure_128_1) {
            JOIN_CALL = tmp8.JOIN_VIDEO_CALL;
          } else {
            JOIN_CALL = tmp8.JOIN_CALL;
          }
          tmp6(JOIN_CALL, closure_128_0);
          const obj2 = tmp(c2[28]);
          obj2.dismissKeyboard();
          const obj3 = c1(c2[22]);
          const voiceChannel = obj3.selectVoiceChannel(closure_128_0.id, closure_128_1);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp22) {
          c2 = 3;
          throw tmp22;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = guardPrivateCallForChannel(channel, function onConfirm() {
    return obj(...arguments);
  });
}
export function handleStartCall(channel, flag) {
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _onConfirm2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let c0;
          let recipientId;
          let START_CALL;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c0 = undefined;
              recipientId = undefined;
              const tmp46 = flag;
              if (tmp46) {
                const obj3 = tmp(c2[27]);
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.requestPermission(constants2.CAMERA), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
          const tmp7 = closure_1_22;
          if (closure_129_1) {
            START_CALL = tmp9.START_VIDEO_CALL;
          } else {
            START_CALL = tmp9.START_CALL;
          }
          tmp7(START_CALL, closure_129_0);
          const obj2 = tmp2(c2[28]);
          obj2.dismissKeyboard();
          const isFriendResult = closure_129_0.type !== constants.DM || friend.isFriend(closure_129_0.getRecipientId());
          c0 = isFriendResult;
          recipientId = null;
          if (!c0) {
            recipientId = closure_129_0.getRecipientId();
          }
          const tmp31 = tmp(c2[31]);
          const id = closure_129_0.id;
          let tmp34 = c0;
          const call = tmp31.call;
          if (c0) {
            tmp34 = !closure_129_0.isManaged();
          }
          call(id, closure_129_1, tmp34, recipientId);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp42) {
          c3 = 3;
          throw tmp42;
        }
      }
    });
    return obj(...arguments);
  };
  let flag2 = false;
  if (channel.isDM()) {
    const tmp = UserStore;
    const user = UserStore.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    flag2 = false;
    if (isProvisional) {
      let tmp7 = _require;
      react.lazy(() => channel(obj[20])(obj[29], obj.paths));
      obj = require("useAlertStore");
      const tmp9 = jsx;
      obj.openAlert("ProvisionalAccountNocallAllowed", <lazyResult />);
      flag2 = true;
    }
  }
  if (!flag2) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      return obj(...arguments);
    });
  }
}
export function handleRedesignGroupDMCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = function _onConfirm3() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const tmp18 = flag;
              if (tmp18) {
                const obj4 = c1(c2[27]);
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
          const obj2 = tmp3(c2[28]);
          obj2.dismissKeyboard();
          const obj3 = c1(c2[31]);
          obj3.call(closure_128_0.id, closure_128_1, true);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    });
    return obj(...arguments);
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    return obj(...arguments);
  });
}
export function handleRedesignJoinCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = function _onConfirm4() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const tmp20 = flag;
              if (tmp20) {
                const obj4 = c1(c2[27]);
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
          const obj2 = tmp3(c2[28]);
          obj2.dismissKeyboard();
          const obj3 = c1(c2[22]);
          const voiceChannel = obj3.selectVoiceChannel(closure_128_0.id, closure_128_1);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    return obj(...arguments);
  });
}
export const openGuildVoiceModal = openChannelCallModal;
export const navigateToVoiceChannel = openChannelCallModal;
