// Module ID: 17862
// Function ID: 17863
// Name: VoicePanelConnectButton
// Dependencies: [19, 2065, 21, 5092, 587, 558, 576, 11969, 17799, 504, 1126, 5924, 5944, 7492, 5889, 5301, 17863, 17866, 17867, 13026, 5088, 17861, 2]

// Module 17862 (VoicePanelConnectButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13026 */;
import VoicePanelNoJoinPermissionsAlert from "VoicePanelNoJoinPermissionsAlert" /* 17863 */;
import VoicePanelMaxCapacityAlert from "VoicePanelMaxCapacityAlert" /* 17866 */;
import VoicePanelNsfwAlert from "VoicePanelNsfwAlert" /* 17867 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;
let _require, closure_4, onConnect;

let obj2;
const jsx = Fragment.jsx;
let obj = { connectButton: obj2, connectText: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectButton(props) {
  let canConnect;
  let channelId;
  let first;
  let guildId;
  let isChannelSpoilerGated;
  let stateFromStores;
  let tmp10;
  let tmp2 = canConnect;
  const obj = channelId(canConnect[6]);
  const cResult = obj.c(28);
  props = props.props;
  let tmp4 = isChannelSpoilerGated();
  const context = stateFromStores.useContext(guildId(canConnect[7]));
  channelId = context.channelId;
  const tmp5 = guildId;
  guildId = context.guildId;
  const tmp7 = guildId(canConnect[8])(channelId);
  canConnect = tmp7.canConnect;
  const isAtMaxCapacity = tmp7.isAtMaxCapacity;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function u() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = channelId(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === stateFromStores) {
    let tmp11;
    let tmp15;
    if (cResult[4] === isAtMaxCapacity) {
      tmp11 = cResult[5];
    }
    closure_4 = tmp11;
    if (cResult[6] !== stateFromStores) {
      const intl = tmp(tmp2[10]).intl;
      let tmp16 = null;
      let isGuildStageVoiceResult;
      const string = intl.string;
      if (stateFromStores != null) {
        isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
      }
      const t = tmp(tmp2[10]).t;
      const stringResult = string(isGuildStageVoiceResult ? t["7vb2cc"] : t["96ANUN"]);
      cResult[6] = stateFromStores;
      cResult[7] = stringResult;
      tmp15 = stringResult;
    } else {
      tmp15 = cResult[7];
    }
    const tmpResult3 = channelId(tmp2[11]);
    let isChannelContentGated = tmpResult3.useIsChannelContentGated(stateFromStores);
    if (isChannelContentGated) {
      isChannelContentGated = null != guildId;
    }
    if (isChannelContentGated) {
      isChannelContentGated = null != channelId;
    }
    const tmpResult4 = channelId(tmp2[12]);
    isChannelSpoilerGated = tmpResult4.useIsChannelSpoilerGated(stateFromStores);
    if (isChannelSpoilerGated) {
      isChannelSpoilerGated = null != guildId;
    }
    if (isChannelSpoilerGated) {
      isChannelSpoilerGated = null != channelId;
    }
    if (cResult[8] === stateFromStores) {
      let tmp25;
      if (cResult[9] === channelId) {
        tmp25 = cResult[10];
      }
      onConnect = tmp25;
      if (cResult[11] === canConnect) {
        if (cResult[12] === channelId) {
          if (cResult[13] === guildId) {
            if (cResult[14] === tmp25) {
              if (cResult[15] === tmp11) {
                if (cResult[16] === isChannelContentGated) {
                  let tmp26;
                  if (cResult[17] === isChannelSpoilerGated) {
                    tmp26 = cResult[18];
                  }
                  if (cResult[19] === tmp15) {
                    let tmp27;
                    if (cResult[20] === tmp4.connectText) {
                      tmp27 = cResult[21];
                    }
                    if (cResult[22] === tmp15) {
                      if (cResult[23] === tmp26) {
                        if (cResult[24] === props) {
                          if (cResult[25] === tmp4.connectButton) {
                            let tmp31;
                            if (cResult[26] === tmp27) {
                              tmp31 = cResult[27];
                            }
                            return tmp31;
                          }
                        }
                      }
                    }
                    class G {
                      constructor() {
                        if (canConnect) {
                          const tmp2 = closure_4;
                          if (!tmp2) {
                            const tmp3 = isChannelContentGated;
                            if (!tmp3) {
                              const tmp4 = isChannelSpoilerGated;
                              if (!tmp4) {
                                onConnect();
                              }
                            }
                          }
                        }
                        if (canConnect) {
                          const tmp16 = closure_4;
                          if (tmp16) {
                            const openAlert4 = useAlertStore.openAlert;
                            useAlertStore;
                            openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
                          } else {
                            const tmp17 = isChannelContentGated;
                            if (tmp17) {
                              const openAlert3 = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
                            } else {
                              const tmp18 = isChannelSpoilerGated;
                              if (tmp18) {
                                const openAlert2 = useAlertStore.openAlert;
                                useAlertStore;
                                openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
                              }
                            }
                          }
                        } else {
                          const openAlert = useAlertStore.openAlert;
                          useAlertStore;
                          openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
                        }
                      }
                    }
                    tmp33[0] = tmp26;
                    tmp33[1] = props;
                    tmp33[2] = tmp15;
                    tmp33[3] = tmp4.connectButton;
                    tmp33[4] = tmp27;
                    const tmp34 = isChannelContentGated(tmp5(tmp2[21]), tmp33);
                    cResult[22] = tmp15;
                    cResult[23] = tmp26;
                    class V {
                      constructor() {
                        let isGuildStageVoiceResult;
                        if (stateFromStores != null) {
                          isGuildStageVoiceResult = obj.isGuildStageVoice();
                        }
                        if (isGuildStageVoiceResult) {
                          const obj3 = StageChannelModalActionCreators;
                          obj3.connectAndOpen(stateFromStores);
                        } else {
                          const obj2 = SelectedChannelActionCreatorsDefault;
                          const voiceChannel = obj2.selectVoiceChannel(channelId);
                        }
                      }
                    }
                    cResult[24] = props;
                    cResult[25] = tmp4.connectButton;
                    cResult[26] = tmp27;
                    cResult[27] = tmp34;
                    tmp31 = tmp34;
                  }
                  class G {
                    constructor() {
                      if (canConnect) {
                        const tmp2 = closure_4;
                        if (!tmp2) {
                          const tmp3 = isChannelContentGated;
                          if (!tmp3) {
                            const tmp4 = isChannelSpoilerGated;
                            if (!tmp4) {
                              onConnect();
                            }
                          }
                        }
                      }
                      if (canConnect) {
                        const tmp16 = closure_4;
                        if (tmp16) {
                          const openAlert4 = useAlertStore.openAlert;
                          useAlertStore;
                          openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
                        } else {
                          const tmp17 = isChannelContentGated;
                          if (tmp17) {
                            const openAlert3 = useAlertStore.openAlert;
                            useAlertStore;
                            openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
                          } else {
                            const tmp18 = isChannelSpoilerGated;
                            if (tmp18) {
                              const openAlert2 = useAlertStore.openAlert;
                              useAlertStore;
                              openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
                            }
                          }
                        }
                      } else {
                        const openAlert = useAlertStore.openAlert;
                        useAlertStore;
                        openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
                      }
                    }
                  }
                  tmp29[2] = tmp4.connectText;
                  tmp29[3] = tmp15;
                  const tmp30 = isChannelContentGated(channelId(tmp2[20]).Text, tmp29);
                  cResult[19] = tmp15;
                  cResult[20] = tmp4.connectText;
                  cResult[21] = tmp30;
                  tmp27 = tmp30;
                }
              }
            }
          }
        }
      }
      class G {
        constructor() {
          if (canConnect) {
            const tmp2 = closure_4;
            if (!tmp2) {
              const tmp3 = isChannelContentGated;
              if (!tmp3) {
                const tmp4 = isChannelSpoilerGated;
                if (!tmp4) {
                  onConnect();
                }
              }
            }
          }
          if (canConnect) {
            const tmp16 = closure_4;
            if (tmp16) {
              const openAlert4 = useAlertStore.openAlert;
              useAlertStore;
              openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
            } else {
              const tmp17 = isChannelContentGated;
              if (tmp17) {
                const openAlert3 = useAlertStore.openAlert;
                useAlertStore;
                openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
              } else {
                const tmp18 = isChannelSpoilerGated;
                if (tmp18) {
                  const openAlert2 = useAlertStore.openAlert;
                  useAlertStore;
                  openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
                }
              }
            }
          } else {
            const openAlert = useAlertStore.openAlert;
            useAlertStore;
            openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
          }
        }
      }
      cResult[11] = canConnect;
      cResult[12] = channelId;
      cResult[13] = guildId;
      cResult[14] = tmp25;
      cResult[15] = tmp11;
      class V {
        constructor() {
          let isGuildStageVoiceResult;
          if (stateFromStores != null) {
            isGuildStageVoiceResult = obj.isGuildStageVoice();
          }
          if (isGuildStageVoiceResult) {
            const obj3 = StageChannelModalActionCreators;
            obj3.connectAndOpen(stateFromStores);
          } else {
            const obj2 = SelectedChannelActionCreatorsDefault;
            const voiceChannel = obj2.selectVoiceChannel(channelId);
          }
        }
      }
      cResult[16] = isChannelContentGated;
      cResult[17] = isChannelSpoilerGated;
      cResult[18] = G;
      tmp26 = G;
    }
    class V {
      constructor() {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = obj.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          const obj3 = StageChannelModalActionCreators;
          obj3.connectAndOpen(stateFromStores);
        } else {
          const obj2 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj2.selectVoiceChannel(channelId);
        }
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = channelId;
    cResult[10] = V;
    tmp25 = V;
  }
  if (isAtMaxCapacity) {
    if (stateFromStores != null) {
      stateFromStores.isGuildStageVoice();
    }
    class G {
      constructor() {
        if (canConnect) {
          const tmp2 = closure_4;
          if (!tmp2) {
            const tmp3 = isChannelContentGated;
            if (!tmp3) {
              const tmp4 = isChannelSpoilerGated;
              if (!tmp4) {
                onConnect();
              }
            }
          }
        }
        if (canConnect) {
          const tmp16 = closure_4;
          if (tmp16) {
            const openAlert4 = useAlertStore.openAlert;
            useAlertStore;
            openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
          } else {
            const tmp17 = isChannelContentGated;
            if (tmp17) {
              const openAlert3 = useAlertStore.openAlert;
              useAlertStore;
              openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
            } else {
              const tmp18 = isChannelSpoilerGated;
              if (tmp18) {
                const openAlert2 = useAlertStore.openAlert;
                useAlertStore;
                openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
              }
            }
          }
        } else {
          const openAlert = useAlertStore.openAlert;
          useAlertStore;
          openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
        }
      }
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = isAtMaxCapacity;
  cResult[5] = isAtMaxCapacity;
  tmp11 = tmp12;
}) : (function ConnectButton(props) {
  let children;
  let connectText;
  let items3;
  let channelId;
  let guildId;
  let canConnect;
  let stateFromStores;
  let c6;
  let closure_7;
  let closure_8;
  onConnect = undefined;
  props = props.props;
  const tmp = c6();
  _require = tmp;
  const obj = canConnect;
  let tmp3 = guildId;
  let tmp2 = channelId;
  const context = canConnect.useContext(channelId(guildId[7]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = channelId(guildId[8])(channelId);
  canConnect = tmp5.canConnect;
  let isAtMaxCapacity = tmp5.isAtMaxCapacity;
  let obj2 = require("get initialized");
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  if (isAtMaxCapacity) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    isAtMaxCapacity = !isGuildStageVoiceResult;
  }
  const intl = tmp6(tmp3[10]).intl;
  let isGuildStageVoiceResult1;
  const string = intl.string;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  const t = tmp6(tmp3[10]).t;
  const stringResult = string(isGuildStageVoiceResult1 ? t["7vb2cc"] : t["96ANUN"]);
  c6 = stringResult;
  const tmp6Result = require("AgeGateUtils");
  const tmp11 = tmp6Result.useIsChannelContentGated(stateFromStores) && null != guildId && null != channelId;
  closure_7 = tmp11;
  const tmp6Result2 = require("SpoilerChannelUtils");
  const tmp12 = tmp6Result2.useIsChannelSpoilerGated(stateFromStores) && null != guildId && null != channelId;
  closure_8 = tmp12;
  const items1 = [stateFromStores, channelId];
  onConnect = obj.useCallback(() => {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = obj.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj3 = StageChannelModalActionCreators;
      obj3.connectAndOpen(stateFromStores);
    } else {
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(channelId);
    }
  }, items1);
  const items2 = [canConnect, isAtMaxCapacity, channelId, tmp11, tmp12, guildId, onConnect];
  const callback1 = obj.useCallback(() => {
    if (canConnect) {
      const tmp2 = isAtMaxCapacity;
      if (!tmp2) {
        const tmp3 = closure_7;
        if (!tmp3) {
          const tmp4 = closure_8;
          if (!tmp4) {
            onConnect();
          }
        }
      }
    }
    if (canConnect) {
      const tmp16 = isAtMaxCapacity;
      if (tmp16) {
        const openAlert4 = useAlertStore.openAlert;
        useAlertStore;
        openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
      } else {
        const tmp17 = closure_7;
        if (tmp17) {
          const openAlert3 = useAlertStore.openAlert;
          useAlertStore;
          openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
        } else {
          const tmp18 = closure_8;
          if (tmp18) {
            const openAlert2 = useAlertStore.openAlert;
            useAlertStore;
            openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
          }
        }
      }
    } else {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
    }
  }, items2);
  const element = { onPress: callback1, props, accessibilityLabel: stringResult, style: tmp.connectButton, children: obj.useMemo(() => jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-overlay-light", style: connectText.connectText, children }), items3) };
  items3 = [stringResult, tmp.connectText];
  const tmp2Result = tmp2(tmp3[21]);
  return isAtMaxCapacity(tmp2Result, element);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default tmp2;
