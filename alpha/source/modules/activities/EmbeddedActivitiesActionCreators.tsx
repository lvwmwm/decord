// Module ID: 10853
// Function ID: 10854
// Name: EmbeddedActivitiesActionCreators
// Dependencies: [5, 9247, 5440, 6036, 7444, 502, 2065, 2087, 4750, 1390, 5113, 2064, 2024, 6067, 1085, 1373, 2062, 7423, 10803, 9806, 10804, 10854, 10855, 10856, 10857, 584, 10813, 10858, 10816, 5636, 5441, 2029, 8610, 8512, 10859, 1998, 10860, 10867, 9801, 1265, 10868, 10876, 5924, 10877, 5299, 1126, 10480, 10878, 1273, 5938, 4739, 6038, 5106, 1295, 8496, 7178, 7014, 7369, 2050, 2049, 2]
// Exports: consumeRequestToReactToSeriousThermalState, dismissNewActivityIndicator, disregardSeriousThermalState, maybeDisconnectFromCurrentActivity, openActivityPopoutWindow, refreshProxyTicket, requestRespondToSeriousThermalState, runPrimaryAppCommandOrJoinEmbeddedActivity, sendEmbeddedActivityInvite, sendEmbeddedActivityInviteUser, updateActivityPanelMode, updateActivityPopoutWindowLayout, updateFocusedActivityLayout, uploadImageAttachment, validateTestMode

// Module 10853 (EmbeddedActivitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import ApplicationConstants from "ApplicationConstants" /* 1373 */;
import Constants2 from "Constants" /* 2024 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2050 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4739 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6038 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6067 */;
import Constants3 from "Constants" /* 7423 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9247 */;
import createProxyTicket2 from "createProxyTicket" /* 10813 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import PopoutWindowStore from "PopoutWindowStore" /* 7444 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let _null, _null2, _null3, _null4, _null5, _null6, _null7, _null8, channel2, closure_5, componentId, guildId, inviterUserId, message, onConfirmActivityLaunchChecksAlertOpen, proxyTicket, renderInFramePool;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let tmp2;
const ChannelRTCActionCreatorsDefault = tmp2(5106);
let obj = function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
  obj = _asyncToGenerator(async (channelId) => {
    let closure_8;
    let c16 = 0;
    let c17 = 0;
    let c15 = 0;
    const iter = (async function(arg0, value) {
      let PRIVATE_CHANNEL2;
      let analyticsLocations;
      let c0;
      let c1;
      let c10;
      let c11;
      let c12;
      let c13;
      let c14;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let obj6;
      let obj9;
      function isSupportedChannelType(c1, type) {
        type = undefined;
        if (type != null) {
          type = type.type;
        }
        let tmp2 = type === constants.GUILD_VOICE;
        application = application.getApplication(c1);
        obj = channelId(_null[31]);
        const result = obj.supportsEmbeddedSurface(application, channelId(_null[32]).EmbeddedSurfaceType.MAIN);
        const obj2 = channelId(_null[33]);
        const result1 = obj2.isActivityInTextSupportedForChannel(type);
        if (tmp2) {
          tmp2 = result;
        }
        if (!tmp2) {
          tmp2 = result1;
        }
        return tmp2;
      }
      function maybeSendPrimaryAppCommand() {
        return closure_1_27(...arguments);
      }
      function joinEmbeddedActivity() {
        return closure_1_29(...arguments);
      }
      if (c17 === 2) {
        c17 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c15;
        try {
          let source;
          let application;
          let c18;
          let closure_22;
          let closure_23;
          let PRIVATE_CHANNEL;
          c17 = 2;
          if (0 === c16) {
            if (arg0 === 1) {
              c17 = 3;
              throw value;
            } else if (arg0 === 2) {
              c17 = 3;
              return { value, done: true };
            } else {
              let closure_13 = tmp;
              let closure_12 = tmp4;
              channelId = undefined;
              applicationId = undefined;
              _null = undefined;
              _null2 = undefined;
              _null3 = undefined;
              componentId = undefined;
              _null4 = undefined;
              _null5 = undefined;
              source = undefined;
              _null6 = undefined;
              _null7 = undefined;
              _null8 = undefined;
              inviterUserId = undefined;
              renderInFramePool = undefined;
              onConfirmActivityLaunchChecksAlertOpen = undefined;
              ({ channelId: c0, applicationId: c1, isStart: c2, analyticsLocations: c3, locationObject: c4, componentId: c5, commandOrigin: c6, sectionName: c7, source: c8, onExecutedCallback: c9, referrerId: c10, customId: c11, inviterUserId: c12, renderInFramePool: c13, onConfirmActivityLaunchChecksAlertOpen: c14 } = closure_0);
              type = undefined;
              guildId = undefined;
              application = undefined;
              c18 = undefined;
              nonce = undefined;
              proxyTicket = undefined;
              id = undefined;
              closure_22 = undefined;
              closure_23 = undefined;
              PRIVATE_CHANNEL = undefined;
              c16 = 1;
              c17 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c16) {
            if (arg0 === 1) {
              c17 = 3;
              throw value;
            } else if (arg0 === 2) {
              c17 = 3;
              return { value, done: true };
            } else {
              type = closure_141_9.getChannel(channelId);
              guildId = undefined;
              const obj27 = type;
              if (type != null) {
                guildId = obj27.getGuildId();
              }
              applicationId = guildId;
              if (guildId == null) {
                applicationId = undefined;
              }
              guildId = applicationId;
              if (null == guildId) {
                let isPrivateResult;
                const obj12 = type;
                if (type != null) {
                  isPrivateResult = obj12.isPrivate();
                }
                if (!isPrivateResult) {
                  c17 = 3;
                  return { value: false, done: true };
                }
              }
              application = closure_141_5.getApplication(applicationId);
              let result = null != application;
              if (result) {
                const obj13 = closure_141_0(closure_141_2[18]);
                result = obj13.canLaunchContextlessFrame(application);
              }
              c18 = result;
              const obj14 = closure_141_0(closure_141_2[19]);
              nonce = obj14.createNonce();
              c15 = 1;
              const windowOpen = closure_141_7.getWindowOpen(closure_141_21.ACTIVITY_POPOUT);
              if (true !== renderInFramePool) {
                const obj15 = closure_141_1(closure_141_2[20]);
                obj15.clearMainFrameSlot();
              }
              const tmp175 = c18;
              if (tmp175) {
                closure_141_1(closure_141_2[21])(channelId);
              }
              const obj5 = { applicationId, launch: obj6 };
              obj6 = { customId: _null8, referrerId: _null7 };
              const obj16 = closure_141_0(closure_141_2[22]);
              if (obj16.tryLaunchAsFrame(obj5)) {
                const obj7 = { isStart: _null, inviterUserId, channelId: _null, guildId: _null3, locationKind: PRIVATE_CHANNEL2 };
                _null = channelId;
                const stashPendingFrameLaunch = closure_141_0(closure_141_2[23]).stashPendingFrameLaunch;
                closure_141_0(closure_141_2[23]);
                const tmp217 = applicationId;
                if (channelId == null) {
                  _null = null;
                }
                _null3 = guildId;
                if (guildId == null) {
                  _null3 = null;
                }
                if (null != guildId) {
                  PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
                } else {
                  PRIVATE_CHANNEL2 = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
                }
                let result1 = stashPendingFrameLaunch(tmp217, obj7);
                c15 = 0;
                c17 = 3;
                return { value: true, done: true };
              } else {
                const obj8 = { type: "EMBEDDED_ACTIVITY_LAUNCH_START", nonce, applicationId, channelId: _null2, componentId, analyticsLocations: _null2, source, commandOrigin: _null4, inviterUserId, launchParams: obj9 };
                _null2 = channelId;
                const dispatch4 = closure_141_1(closure_141_2[25]).dispatch;
                closure_141_1(closure_141_2[25]);
                if (channelId == null) {
                  _null2 = null;
                }
                obj9 = { customId: _null8, referrerId: _null7, renderInFramePool };
                dispatch4(obj8);
                componentId = channelId;
                const createProxyTicket = closure_141_0(closure_141_2[26]).createProxyTicket;
                closure_141_0(closure_141_2[26]);
                const tmp211 = applicationId;
                if (channelId == null) {
                  componentId = undefined;
                }
                c16 = 3;
                c17 = 1;
                const obj10 = { value: createProxyTicket(tmp211, componentId), done: false };
                return obj10;
              }
            }
          } else if (2 === c16) {
            c15 = 0;
            let closure_25 = closure_14;
            const tmp97 = c18;
            if (tmp97) {
              c17 = 3;
              return { value: false, done: true };
            } else {
              if (null != guildId) {
                PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
              } else {
                PRIVATE_CHANNEL = closure_141_0(closure_141_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
              }
              const obj11 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce, applicationId, channelId: _null7, guildId: _null8, isStart: _null, error: null, locationKind: null };
              _null7 = channelId;
              const dispatch3 = closure_141_1(closure_141_2[25]).dispatch;
              closure_141_1(closure_141_2[25]);
              if (channelId == null) {
                _null7 = null;
              }
              _null8 = guildId;
              if (guildId == null) {
                _null8 = null;
              }
              if (!(closure_25 instanceof closure_141_1(closure_141_2[28]))) {
                if (!(closure_25 instanceof closure_141_1(closure_141_2[29]))) {
                  let tmp138;
                  if (!(closure_25 instanceof closure_141_1(closure_141_2[30]))) {
                    const self7 = this;
                    const self8 = this;
                    tmp138 = new closure_141_1(closure_141_2[29])(closure_25);
                  }
                  obj11.error = tmp138;
                  obj11.locationKind = PRIVATE_CHANNEL;
                  dispatch3(obj11);
                  c17 = 3;
                  return { value: false, done: true };
                }
              }
              tmp138 = closure_25;
            }
          } else if (3 === c16) {
            if (arg0 === 1) {
              c17 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 0;
              c17 = 3;
              return { value, done: true };
            } else {
              proxyTicket = value;
              const obj18 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId, channelId: _null4, proxyTicket };
              _null4 = channelId;
              const dispatch5 = closure_141_1(closure_141_2[25]).dispatch;
              closure_141_1(closure_141_2[25]);
              if (channelId == null) {
                _null4 = null;
              }
              dispatch5(obj18);
              id = closure_141_12.getCurrentUser();
              if (null != id) {
                let JOIN;
                const tmp259 = closure_141_1(closure_141_2[27]);
                if (_null) {
                  JOIN = tmp262.LAUNCH;
                } else {
                  JOIN = tmp262.JOIN;
                }
                const obj19 = { type: JOIN, userId: id, guildId, channelId, channelType: type, applicationId, locationObject: _null3, analyticsLocations, source, referrerId: _null7, inviterUserId };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                type = undefined;
                if (type != null) {
                  type = type.type;
                }
                analyticsLocations = _null2;
                if (_null2 == null) {
                  analyticsLocations = [];
                }
                tmp259(obj19);
              }
              const tmp70 = _null;
              if (tmp70) {
                if (null != channelId) {
                  if (isSupportedChannelType(applicationId, type)) {
                    c16 = 5;
                    c17 = 1;
                    const obj20 = { applicationId, nonce, channelId, guildId, commandOrigin: _null4, sectionName: _null5, source, onExecutedCallback: _null6, onConfirmActivityLaunchChecksAlertOpen };
                    const obj21 = { value: maybeSendPrimaryAppCommand(obj20), done: false };
                    return obj21;
                  }
                }
                const self5 = this;
                const self6 = this;
                const tmp89 = closure_141_1(closure_141_2[28]);
                const tmp892 = new tmp89(closure_141_1(closure_141_2[28]).Reasons.INVALID_CHANNEL);
                throw tmp892;
              } else {
                c16 = 4;
                c17 = 1;
                const obj22 = { applicationId, channelId, isStart: _null, guildId };
                const obj23 = { value: joinEmbeddedActivity(obj22), done: false };
                return obj23;
              }
            }
          } else {
            if (4 === c16) {
              if (arg0 === 1) {
                c17 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 0;
                c17 = 3;
                return { value, done: true };
              } else {
                closure_23 = value;
                if (_null6 != null) {
                  _null6();
                }
                if ("failure" === closure_23.result) {
                  const self3 = this;
                  const self4 = this;
                  const tmp40 = closure_141_1(closure_141_2[28]);
                  const tmp402 = new tmp40(closure_141_1(closure_141_2[28]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, closure_23.reason);
                  throw tmp402;
                }
              }
            } else if (arg0 === 1) {
              c17 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 0;
              c17 = 3;
              return { value, done: true };
            } else {
              closure_22 = value;
              if ("failure" === closure_22.result) {
                if (closure_22.reason === closure_141_26.FAILED_ACTIVITY_LAUNCH_CHECKS) {
                  obj = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL", nonce, applicationId, channelId: _null6 };
                  _null6 = channelId;
                  const dispatch = closure_141_1(closure_141_2[25]).dispatch;
                  closure_141_1(closure_141_2[25]);
                  if (channelId == null) {
                    _null6 = null;
                  }
                  dispatch(obj);
                  c15 = 0;
                  c17 = 3;
                  return { value: false, done: true };
                } else {
                  const self = this;
                  const self2 = this;
                  const tmp8 = closure_141_1(closure_141_2[28]);
                  const tmp811 = new tmp8(closure_141_1(closure_141_2[28]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                  throw tmp811;
                }
              }
            }
            const obj26 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce, applicationId, channelId: _null5 };
            _null5 = channelId;
            const dispatch2 = closure_141_1(closure_141_2[25]).dispatch;
            closure_141_1(closure_141_2[25]);
            if (channelId == null) {
              _null5 = null;
            }
            dispatch2(obj26);
            c15 = 0;
            c17 = 3;
            return { value: true, done: true };
          }
        } catch (tmp234) {
          closure_14 = tmp234;
          if (0 === c15) {
            c17 = 3;
            throw tmp234;
          } else {
            c16 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _maybeSendPrimaryAppCommand() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c7;
      let c8;
      let commandOrigin;
      let obj16;
      let obj28;
      let sectionName;
      let source;
      let tmp;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let closure_2;
          let nonce;
          let command;
          let closure_10;
          let currentEmbeddedActivity;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              nonce = tmp4;
              applicationId = undefined;
              c1 = undefined;
              channelId = undefined;
              c3 = undefined;
              c4 = undefined;
              c7 = undefined;
              onConfirmActivityLaunchChecksAlertOpen = undefined;
              ({ applicationId: c0, nonce: c1, channelId: c2, guildId: c3, commandOrigin: c4, sectionName: c5, source: c6, onExecutedCallback: c7, onConfirmActivityLaunchChecksAlertOpen: c8 } = closure_0);
              command = undefined;
              closure_10 = undefined;
              channel = undefined;
              channel2 = undefined;
              let guild;
              application = undefined;
              currentEmbeddedActivity = undefined;
              currentEmbeddedApplication = undefined;
              user = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              command = null;
              c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: closure_130_1(closure_130_2[34])(channelId, applicationId), done: false };
              return obj5;
            }
          } else if (2 === c5) {
            c4 = 0;
            message = closure_3;
            if (message.message === closure_130_0(closure_130_2[34]).NO_PRIMARY_APP_COMMAND_ERROR) {
              c6 = 3;
              return { value: { result: "failure", reason: closure_130_26.NO_PRIMARY_APP_COMMAND }, done: true };
            } else {
              throw message;
            }
          } else {
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                command = value;
                c4 = 0;
                closure_10 = command.handler !== closure_130_0(closure_130_2[35]).ApplicationCommandHandler.APP_HANDLER;
                const tmp101 = closure_10;
                if (!tmp101) {
                  if (!closure_130_22.includes(applicationId)) {
                    let tmp13 = nonce;
                    if (null != channelId) {
                      let tmp18 = closure_2;
                      c5 = 4;
                      c6 = 1;
                      const obj9 = { type: "channel", channelId };
                      const obj10 = { value: closure_130_4(obj9), done: false };
                      return obj10;
                    }
                  }
                }
                channel2 = closure_130_9.getChannel(channelId);
                guild = null;
                if (null != c3) {
                  guild = closure_130_10.getGuild(c3);
                }
                if (null == channel2) {
                  c6 = 3;
                  return { value: { result: "failure", reason: closure_130_26.NO_CHANNEL }, done: true };
                } else {
                  const tmp103 = closure_10;
                  if (tmp103) {
                    application = closure_130_5.getApplication(applicationId);
                    currentEmbeddedActivity = closure_130_14.getCurrentEmbeddedActivity();
                    currentEmbeddedApplication = undefined;
                    applicationId = undefined;
                    if (currentEmbeddedActivity != null) {
                      applicationId = currentEmbeddedActivity.applicationId;
                    }
                    if (null != applicationId) {
                      let applicationId1;
                      const getApplication = closure_130_5.getApplication;
                      if (currentEmbeddedActivity != null) {
                        applicationId1 = currentEmbeddedActivity.applicationId;
                      }
                      currentEmbeddedApplication = getApplication(applicationId1);
                    }
                    user = closure_130_12.getCurrentUser();
                    if (null != user) {
                      c5 = 8;
                      c6 = 1;
                      const obj13 = { applicationId, application, channel: channel2, currentEmbeddedApplication, user, onConfirmActivityLaunchChecksAlertOpen, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false };
                      const obj14 = { value: obj16.confirmActivityLaunchChecks(obj13), done: false };
                      obj16 = closure_130_0(closure_130_2[37]);
                      return obj14;
                    }
                  }
                  let self = this;
                  let self2 = this;
                  c5 = 7;
                  c6 = 1;
                  const obj15 = {
                    value: new Promise((arg0, arg1) => {
                                  let channel_id;
                                  let guild_id;
                                  let obj2;
                                  let closure_0 = arg0;
                                  closure_1 = arg1;
                                  obj = {
                                    command,
                                    optionValues: {},
                                    context: obj2,
                                    commandOrigin,
                                    sectionName,
                                    source,
                                    interactionLifecycleOptionsFactory() {
                                      let application_id;
                                      obj = {
                                        nonce,
                                        onSuccess() {
                                          if (closure_2_7 != null) {
                                            tmp();
                                          }
                                          application_id();
                                        },
                                        onFailure(error_code, error_message, error_status, error_reason_code) {
                                          let obj3;
                                          if (closure_2_7 != null) {
                                            tmp();
                                          }
                                          obj = { channel_id, guild_id, application_id, channel_type: type, error_code, error_message, error_status, error_reason_code, source };
                                          type = undefined;
                                          const track = nonce(channelId[39]).track;
                                          const ACTIVITY_INTERACTION_CALLBACK_ERROR = constants.ACTIVITY_INTERACTION_CALLBACK_ERROR;
                                          nonce(channelId[39]);
                                          if (type != null) {
                                            type = type.type;
                                          }
                                          track(ACTIVITY_INTERACTION_CALLBACK_ERROR, obj);
                                          if (null != error_code) {
                                            if (null != error_message) {
                                              if (null != error_status) {
                                                const obj2 = { status: error_status, body: obj3 };
                                                const self3 = this;
                                                const self4 = this;
                                                obj3 = { message: error_message, code: error_code };
                                                const tmp18 = new nonce(channelId[29])(obj2);
                                                closure_1_1(tmp18);
                                              }
                                            }
                                          }
                                          if (null != error_reason_code) {
                                            if (error_reason_code in nonce(channelId[30]).ReasonCodes) {
                                              const self = this;
                                              const self2 = this;
                                              const tmp13 = new nonce(channelId[30])(error_reason_code);
                                              closure_1_1(tmp13);
                                            }
                                          }
                                          const tmp3Result = nonce(channelId[30]);
                                          const tmp3Result1 = new tmp3Result(nonce(channelId[30]).ReasonCodes.UNKNOWN);
                                          closure_1_1(tmp3Result1);
                                        }
                                      };
                                      return obj;
                                    }
                                  };
                                  obj2 = { channel, guild };
                                  const tmp = nonce(channelId[38])(obj);
                                }),
                    done: false
                  };
                  return obj15;
                }
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
            } else if (5 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                channel = closure_130_9.getChannel(channelId);
                c5 = 6;
                c6 = 1;
                const obj19 = { applicationId, channel, commandIntegrationTypes: command.integration_types };
                const obj20 = { value: obj28.installApplicationOnDemandIfNeeded(obj19), done: false };
                obj28 = closure_130_0(closure_130_2[36]);
                return obj20;
              }
            } else if (6 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (!value.isAuthorized) {
                c6 = 3;
                return { value: { result: "failure", reason: closure_130_26.UNAUTHORIZED }, done: true };
              }
            } else if (7 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                c6 = 3;
                return { value: { result: "success" }, done: true };
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else if (!value) {
              obj = { result: "failure", reason: closure_130_26.FAILED_ACTIVITY_LAUNCH_CHECKS };
              c6 = 3;
              return { value: obj, done: true };
            }
            c5 = 5;
            c6 = 1;
            const obj29 = { value: closure_130_4({ type: "user" }), done: false };
            return obj29;
          }
        } catch (tmp79) {
          closure_3 = tmp79;
          if (0 === c4) {
            c6 = 3;
            throw tmp79;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _joinEmbeddedActivity() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj22;
    let obj34;
    let obj35;
    let obj36;
    let obj43;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let application_id;
        let _undefined;
        let guild_id;
        let session_id;
        let user;
        let closure_6;
        let application;
        let channel;
        let closure_9;
        let CHANNEL_CONTENT_GATED;
        let currentEmbeddedActivity;
        let currentEmbeddedApplication;
        let closure_13;
        let obj33;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            application_id = undefined;
            _undefined = undefined;
            c2 = undefined;
            guild_id = undefined;
            ({ applicationId: c0, channelId: c1, isStart: c2, guildId: c3 } = closure_0);
            session_id = undefined;
            user = undefined;
            closure_6 = undefined;
            application = undefined;
            channel = undefined;
            closure_9 = undefined;
            CHANNEL_CONTENT_GATED = undefined;
            currentEmbeddedActivity = undefined;
            currentEmbeddedApplication = undefined;
            closure_13 = undefined;
            let closure_14;
            obj33 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            session_id = closure_131_8.getSessionId();
            user = closure_131_12.getCurrentUser();
            closure_6 = application_id;
            if (null == closure_6) {
              const obj5 = { result: "failure", reason: closure_131_28.NO_APPLICATION_ID };
              c5 = 3;
              const obj6 = { value: obj5, done: true };
              return obj6;
            } else {
              c4 = 2;
              c5 = 1;
              const obj7 = { value: closure_131_1(closure_131_2[40])(closure_6, _undefined), done: false };
              return obj7;
            }
          }
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application = value;
              if (null != user) {
                if (null != application) {
                  if (null == _undefined) {
                    const obj10 = { result: "failure", reason: closure_131_28.INVALID_CHANNEL };
                    c5 = 3;
                    const obj11 = { value: obj10, done: true };
                    return obj11;
                  } else {
                    channel = closure_131_9.getChannel(_undefined);
                    if (null == channel) {
                      const obj12 = { result: "failure", reason: closure_131_28.INVALID_CHANNEL };
                      c5 = 3;
                      const obj13 = { value: obj12, done: true };
                      return obj13;
                    } else {
                      const obj14 = { channelId: _undefined, isContentGated: obj43.isChannelContentGated(channel), ChannelStore: closure_131_9, GuildStore: closure_131_10, PermissionStore: closure_131_11, VoiceStateStore: closure_131_13 };
                      const getEmbeddedActivityLaunchability = closure_131_0(closure_131_2[41]).getEmbeddedActivityLaunchability;
                      const tmp129 = closure_131_0(closure_131_2[41]);
                      obj43 = closure_131_0(closure_131_2[42]);
                      closure_9 = getEmbeddedActivityLaunchability(obj14);
                      if (closure_9 !== closure_131_0(closure_131_2[41]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                        CHANNEL_CONTENT_GATED = closure_131_28.LAUNCHABILITY_CHECK_FAILED_OTHER;
                        if (closure_9 === closure_131_0(closure_131_2[41]).EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION) {
                          CHANNEL_CONTENT_GATED = closure_131_28.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                          const obj26 = closure_131_0(closure_131_2[43]);
                          const result = obj26.showActivitiesInvalidPermissionsAlert();
                        } else if (closure_9 === closure_131_0(closure_131_2[41]).EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS) {
                          CHANNEL_CONTENT_GATED = closure_131_28.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                          const obj15 = { title: intl.string(closure_131_0(closure_131_2[45]).t["IOy+I5"]), body: intl2.string(closure_131_0(closure_131_2[45]).t.UXoQTp), hideActionSheet: false };
                          const show = closure_131_1(closure_131_2[44]).show;
                          const tmp77 = closure_131_1(closure_131_2[44]);
                          intl = closure_131_0(closure_131_2[45]).intl;
                          intl2 = closure_131_0(closure_131_2[45]).intl;
                          show(obj15);
                        } else if (closure_9 === closure_131_0(closure_131_2[41]).EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
                          CHANNEL_CONTENT_GATED = closure_131_28.CHANNEL_CONTENT_GATED;
                          const obj16 = { title: intl3.string(closure_131_0(closure_131_2[45]).t["IOy+I5"]), body: intl4.string(closure_131_0(closure_131_2[45]).t.pKLV22), hideActionSheet: false };
                          const show2 = closure_131_1(closure_131_2[44]).show;
                          const tmp169 = closure_131_1(closure_131_2[44]);
                          intl3 = closure_131_0(closure_131_2[45]).intl;
                          intl4 = closure_131_0(closure_131_2[45]).intl;
                          show2(obj16);
                        }
                        const obj17 = { result: "failure", reason: CHANNEL_CONTENT_GATED };
                        c5 = 3;
                        const obj18 = { value: obj17, done: true };
                        return obj18;
                      } else {
                        currentEmbeddedActivity = closure_131_14.getCurrentEmbeddedActivity();
                        currentEmbeddedApplication = undefined;
                        let applicationId;
                        if (currentEmbeddedActivity != null) {
                          applicationId = currentEmbeddedActivity.applicationId;
                        }
                        if (null != applicationId) {
                          let applicationId1;
                          const getApplication = closure_131_5.getApplication;
                          if (currentEmbeddedActivity != null) {
                            applicationId1 = currentEmbeddedActivity.applicationId;
                          }
                          currentEmbeddedApplication = getApplication(applicationId1);
                        }
                        const tmp16 = c2;
                        if (tmp16) {
                          const obj19 = { applicationId: application_id, application, channel, currentEmbeddedApplication, user };
                          c4 = 3;
                          c5 = 1;
                          const obj20 = { value: obj22.confirmActivityLaunchChecks(obj19), done: false };
                          obj22 = closure_131_0(closure_131_2[37]);
                          return obj20;
                        }
                      }
                    }
                  }
                }
              }
              const obj21 = { result: "failure", reason: closure_131_28.UNKNOWN_USER_OR_APPLICATION };
              c5 = 3;
              const obj23 = { value: obj21, done: true };
              return obj23;
            }
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj24 = { value, done: true };
                return obj24;
              } else if (!value) {
                const obj25 = { result: "failure", reason: closure_131_28.FAILED_ACTIVITY_LAUNCH_CHECKS };
                c5 = 3;
                const obj27 = { value: obj25, done: true };
                return obj27;
              }
            } else {
              if (4 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj28 = { value, done: true };
                  return obj28;
                } else if (!value) {
                  const obj29 = { result: "failure", reason: closure_131_28.NOT_CONNECTED_TO_VOICE_CHANNEL };
                  c5 = 3;
                  const obj30 = { value: obj29, done: true };
                  return obj30;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj31 = { value, done: true };
                return obj31;
              } else {
                obj = { result: "success" };
              }
              c5 = 3;
              const obj32 = { value: obj, done: true };
              return obj32;
            }
            obj33 = { trackedActionData: obj34, retries: 3, oldFormErrors: true, rejectWithError: true };
            obj34 = { event: closure_131_0(closure_131_2[48]).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH, properties: obj35 };
            obj35 = { guild_id, channel_id: _undefined, application_id, session_id };
            if (null != _undefined) {
              const request = { url: closure_131_20.ACTIVITY_CHANNEL_LAUNCH(_undefined, application_id), body: obj36 };
              const post = closure_131_1(closure_131_2[49]).post;
              const tmp43 = closure_131_1(closure_131_2[49]);
              obj36 = { session_id, guild_id: _undefined };
              _undefined = guild_id;
              if (guild_id == null) {
                _undefined = undefined;
              }
              const merged = Object.assign(obj33);
              c4 = 5;
              c5 = 1;
              const obj37 = { value: post(request), done: false };
              return obj37;
            } else {
              const obj38 = { result: "failure", reason: closure_131_28.OTHER };
              obj = obj38;
            }
          }
          if (null != channel) {
            closure_13 = closure_131_1(closure_131_2[46])(channel.id);
            closure_14 = closure_131_15.includes(channel.type);
            if (closure_13) {
              const obj39 = { channelId: channel.id, bypassChangeModal: null != currentEmbeddedApplication };
              c4 = 4;
              c5 = 1;
              const obj40 = { value: closure_131_1(closure_131_2[47])(obj39), done: false };
              return obj40;
            } else {
              const obj9 = closure_131_0(closure_131_2[33]);
              const obj41 = { result: "failure", reason: closure_131_28.AIT_NOT_ENABLED_FOR_USER };
              c5 = 3;
              const obj42 = { value: obj41, done: true };
              return obj42;
            }
          }
        }
      } catch (tmp109) {
        c5 = 3;
        throw tmp109;
      }
    }
  });
  return obj(...arguments);
};
function stopEmbeddedActivity(showFeedback) {
  let _location;
  let applicationId;
  let compositeInstanceId;
  let launchId;
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
  const obj2 = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location, instanceId: launchId, showFeedback: flag };
  launchId = undefined;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  obj = EmbeddedActivitiesStore;
  if (selfEmbeddedActivityForLocation != null) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  dispatch(obj2);
  const obj3 = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj3.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let id;
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(embeddedActivityLocationChannelId);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          const obj4 = { applicationId, instanceId: compositeInstanceId };
          compositeInstanceId = undefined;
          const getEmbeddedActivityParticipantId = tmp7(6038).getEmbeddedActivityParticipantId;
          ChannelRTCParticipants;
          if (found != null) {
            compositeInstanceId = found.compositeInstanceId;
          }
          if (selectedParticipantId === getEmbeddedActivityParticipantId(obj4)) {
            const tmp2Result = ChannelRTCActionCreatorsDefault;
            const participant = tmp2Result.selectParticipant(embeddedActivityLocationChannelId, null);
          }
        }
      }
    }
  }
}
obj = function _uploadImageAttachment() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let items;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c6;
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            let closure_3 = tmp4;
            closure_0 = undefined;
            c6 = 1;
            const obj13 = DispatcherDefault;
            obj13.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
            let tmp24;
            const tmp35 = closure_0;
            const tmp36 = closure_1;
            const tmp37 = closure_2;
            if (null != closure_1) {
              const obj4 = { channel_id: tmp36 };
              tmp24 = obj4;
            }
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_20.APPLICATION_UPLOAD_ATTACHMENT(tmp35), query: tmp24, attachments: items, rejectWithError: true };
            const post = HTTP.post;
            const obj6 = { name: "file", file: tmp37 };
            items = [obj6];
            c7 = 2;
            c8 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_1 = closure_5;
          const obj5 = closure_132_1(closure_132_2[25]);
          obj5.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" });
          const self = this;
          const self2 = this;
          const tmp22 = new closure_132_1(closure_132_2[29])(closure_1);
          c8 = 3;
          const obj8 = { value: tmp22, done: true };
          return obj8;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_0 = value;
          const obj10 = { type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: closure_0.body.attachment };
          obj = closure_132_1(closure_132_2[25]);
          obj.dispatch(obj10);
          c6 = 0;
          c8 = 3;
          const obj11 = { value: closure_0.body.attachment, done: true };
          return obj11;
        }
      } catch (tmp28) {
        closure_5 = tmp28;
        if (0 === c6) {
          c8 = 3;
          throw tmp28;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendEmbeddedActivityInvite() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let target_application_id;
        let code;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            target_application_id = undefined;
            ({ activityChannelId: c0, invitedChannelId: c1, applicationId: c2, location: c3, inviteAnalyticsMetadata: c4 } = closure_0);
            code = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { target_type: closure_130_24.EMBEDDED_APPLICATION, target_application_id };
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj3.createInvite(c0, obj6, c3), done: false };
            obj3 = closure_130_1(closure_130_2[54]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          code = value;
          if (null != closure_130_9.getChannel(c1)) {
            obj = closure_130_1(closure_130_2[55]);
            obj.sendInvite(c1, code.code, c3, c4);
          }
          c4 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp29) {
        c4 = 3;
        throw tmp29;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendEmbeddedActivityInviteUser() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let ensurePrivateChannelResult;
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let target_application_id;
        c4 = 2;
        const tmp4 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            target_application_id = undefined;
            c2 = undefined;
            c5 = undefined;
            ({ channelId: c0, applicationId: c1, userId: c2, location: c3, inviteAnalyticsMetadata: c4, prefixedContent: c5 } = closure_0);
            let code;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj7 = { target_type: closure_130_24.EMBEDDED_APPLICATION, target_application_id };
            c3 = 2;
            c4 = 1;
            const obj8 = { value: obj5.createInvite(c0, obj7, c3), done: false };
            obj5 = closure_130_1(closure_130_2[54]);
            return obj8;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            code = value;
            let obj2 = closure_130_1(closure_130_2[56]);
            c3 = 3;
            c4 = 1;
            const obj10 = {
              value: ensurePrivateChannelResult.then(function(result) {
                        channel = channel.getChannel(result);
                        if (null == channel) {
                          const _Error = Error;
                          const self = this;
                          const self2 = this;
                          const error = new Error("Private channel not found");
                          throw error;
                        } else {
                          let content;
                          if (null != closure_1_5) {
                            obj = target_application_id(closure_2[57]);
                            content = obj.parse(channel, tmp2).content;
                          }
                          const obj2 = target_application_id(closure_2[55]);
                          obj2.sendInvite(result, code.code, closure_1_3, closure_1_4, content);
                        }
                      }),
              done: false
            };
            ensurePrivateChannelResult = obj2.ensurePrivateChannel(c2);
            return obj10;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp18) {
        c4 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
obj = function _validateTestMode() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c4 = 1;
            const ACTIVITY_TEST_MODEResult = closure_2_20.ACTIVITY_TEST_MODE(closure_0);
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: ACTIVITY_TEST_MODEResult, oldFormErrors: true, rejectWithError: true };
            c2 = 2;
            c1 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c1 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c1 = 3;
          return { value: true, done: true };
        }
      } catch (tmp10) {
        let closure_3 = tmp10;
        if (0 === c4) {
          c1 = 3;
          throw tmp10;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _refreshProxyTicket() {
  obj = _asyncToGenerator(async (applicationId, channelId) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj5;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let channel;
          let PRIVATE_CHANNEL;
          let dispatch;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              proxyTicket = undefined;
              channel = undefined;
              guildId = undefined;
              PRIVATE_CHANNEL = undefined;
              const obj4 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: true };
              const obj18 = DispatcherDefault;
              obj18.dispatch(obj4);
              c7 = 2;
              dispatch = createProxyTicket2.createProxyTicket;
              c3 = channelId;
              createProxyTicket2;
              const tmp98 = applicationId;
              if (channelId == null) {
                c3 = undefined;
              }
              dispatch = dispatch(tmp98, c3);
              c8 = 3;
              c9 = 1;
              return { value: dispatch, done: false };
            }
          } else if (1 === c8) {
            c7 = 0;
            const obj8 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            const obj7 = closure_133_1(closure_133_2[25]);
            dispatch = obj7.dispatch(obj8);
            throw closure_6;
          } else if (2 === c8) {
            c7 = 1;
            channel = closure_133_9.getChannel(channelId);
            dispatch = channel;
            let guild_id;
            if (channel != null) {
              guild_id = dispatch.guild_id;
            }
            let c2 = guild_id;
            if (guild_id == null) {
              c2 = null;
            }
            dispatch = c2;
            guildId = c2;
            if (null != guildId) {
              PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              dispatch = closure_133_0;
              PRIVATE_CHANNEL = closure_133_0(closure_133_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            dispatch = closure_133_1(closure_133_2[25]).dispatch;
            const obj9 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: obj5.createNonce(), applicationId, channelId, guildId, locationKind: PRIVATE_CHANNEL, error: null };
            closure_133_1(closure_133_2[25]);
            obj5 = closure_133_0(closure_133_2[19]);
            if (!(closure_6 instanceof closure_133_1(closure_133_2[28]))) {
              if (!(closure_6 instanceof closure_133_1(closure_133_2[29]))) {
                let tmp54;
                if (!(closure_6 instanceof closure_133_1(closure_133_2[30]))) {
                  const self = this;
                  const self2 = this;
                  tmp54 = new closure_133_1(closure_133_2[29])(closure_6);
                }
                obj9.error = tmp54;
                dispatch(obj9);
                c7 = 0;
                dispatch = closure_133_1(closure_133_2[25]).dispatch;
                const obj10 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
                closure_133_1(closure_133_2[25]);
                dispatch(obj10);
                c9 = 3;
                return { value: false, done: true };
              }
            }
            tmp54 = closure_6;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            const obj11 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            obj = closure_133_1(closure_133_2[25]);
            obj.dispatch(obj11);
            c9 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj15 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId, channelId, proxyTicket };
            const obj12 = closure_133_1(closure_133_2[25]);
            obj12.dispatch(obj15);
            const obj17 = { type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId, proxyTicket };
            const obj14 = closure_133_1(closure_133_2[25]);
            obj14.dispatch(obj17);
            c7 = 0;
            const obj19 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
            const obj16 = closure_133_1(closure_133_2[25]);
            obj16.dispatch(obj19);
            c9 = 3;
            return { value: true, done: true };
          }
        } catch (tmp72) {
          closure_6 = tmp72;
          if (0 === c7) {
            c9 = 3;
            throw tmp72;
          } else if (1 === tmp74) {
            c8 = 1;
          } else {
            c8 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = ApplicationCommandIndexStore.getOrFetchApplicationCommandIndexForTarget;
let closure_15 = Constants2.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ AnalyticEvents: closure_17, AnalyticsGameOpenTypes: closure_18, ChannelTypes: closure_19, Endpoints: closure_20, PopoutWindowKeys: closure_21 } = Constants);
const INSTALL_LESS_APP_IDS = ApplicationConstants.INSTALL_LESS_APP_IDS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const InviteTargetTypes = Constants3.InviteTargetTypes;
let closure_26 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_28 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER", CHANNEL_CONTENT_GATED: 10, [10]: "CHANNEL_CONTENT_GATED" };
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForLocation);
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
  return obj(...arguments);
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const uploadImageAttachment = function uploadImageAttachment() {
  return obj(...arguments);
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  return obj(...arguments);
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser() {
  return obj(...arguments);
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const markVersionedDismissibleContentAsDismissed = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed;
  DismissibleContentUtils;
  const ACTIVITIES_VOICE_LAUNCHER_BADGE = dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE;
  const date = new Date();
  const result = markVersionedDismissibleContentAsDismissed(ACTIVITIES_VOICE_LAUNCHER_BADGE, floor(date.getTime() / 1000), { dismissAction: INDIRECT_ACTION });
};
export const validateTestMode = function validateTestMode() {
  return obj(...arguments);
};
export const updateActivityPanelMode = function updateActivityPanelMode(PANEL) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj2);
};
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj2);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  const ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.ACTIVITY_POPOUT_WINDOW;
  obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: ACTIVITY_POPOUT_WINDOW });
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj2);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  return obj(...arguments);
};
