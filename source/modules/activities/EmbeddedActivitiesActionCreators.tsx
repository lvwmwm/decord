// Module ID: 5668
// Function ID: 48496
// Name: _runPrimaryAppCommandOrJoinEmbeddedActivity
// Dependencies: [5, 5669, 4168, 4144, 4311, 4154, 1194, 1348, 1838, 3759, 1850, 4147, 1347, 4156, 5660, 653, 4157, 1345, 5969, 10443, 5987, 10571, 10576, 10575, 10586, 686, 10896, 10578, 4031, 4357, 5664, 7952, 11233, 1882, 11143, 10585, 7957, 675, 10582, 11075, 10580, 4471, 1212, 10402, 10592, 480, 4943, 3749, 10449, 4324, 507, 1327, 6636, 5685, 4141, 5914, 1336, 1334, 2]
// Exports: consumeRequestToReactToSeriousThermalState, dismissNewActivityIndicator, disregardSeriousThermalState, fetchDeveloperApplications, fetchShelf, maybeDisconnectFromCurrentActivity, openActivityPopoutWindow, refreshProxyTicket, requestRespondToSeriousThermalState, runPrimaryAppCommandOrJoinEmbeddedActivity, sendEmbeddedActivityInvite, sendEmbeddedActivityInviteUser, updateActivityPopoutWindowLayout, updateFocusedActivityLayout, uploadImageAttachment, validateTestMode

// Module 5668 (_runPrimaryAppCommandOrJoinEmbeddedActivity)
import _callSuper from "_callSuper";
import { getOrFetchApplicationCommandIndexForTarget as closure_4 } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_createForOfIteratorHelperLoose";
import { SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES as closure_16 } from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import ME from "ME";
import { INSTALL_LESS_APP_IDS } from "ApplicationTypes";
import { ContentDismissActionType } from "ContentDismissActionType";
import { InviteTargetTypes } from "InviteSendStates";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
async function _runPrimaryAppCommandOrJoinEmbeddedActivity(arg0, arg1) {
  let iter = (function*(arg0) {
    let analyticsLocations;
    let applicationId;
    let channelId;
    let commandOrigin;
    let componentId;
    let customId;
    let embeddedActivitiesManager;
    let inviterUserId;
    let isStart;
    let locationObject;
    let onConfirmActivityLaunchChecksAlertOpen;
    let onExecutedCallback;
    let referrerId;
    let sectionName;
    let source;
    ({ channelId, applicationId, isStart, analyticsLocations, embeddedActivitiesManager, commandOrigin, source, onExecutedCallback, referrerId, inviterUserId } = arg0);
    ({ locationObject, componentId, sectionName, customId, onConfirmActivityLaunchChecksAlertOpen } = arg0);
    let result = yield undefined;
    const channel = outer2_10.getChannel(channelId);
    let obj = channel;
    let guildId;
    if (null != channel) {
      guildId = obj.getGuildId();
    }
    let tmp5;
    if (null != guildId) {
      tmp5 = guildId;
    }
    if (null == tmp5) {
      let isPrivateResult;
      if (null != obj) {
        isPrivateResult = obj.isPrivate();
      }
      return false;
    }
    const application = outer2_5.getApplication(applicationId);
    if (null != application) {
      let obj1 = outer2_0(outer2_2[19]);
      obj1.canLaunchFrame(application);
    }
    let obj2 = outer2_0(outer2_2[20]);
    const nonce = obj2.createNonce();
    const windowOpen = outer2_7.getWindowOpen(outer2_23.ACTIVITY_POPOUT);
    let obj3 = outer2_0(outer2_2[21]);
    obj3.leaveCurrentFrame();
    let obj4 = outer2_0(outer2_2[22]);
    if (obj4.tryLaunchAsFrame({ applicationId })) {
      result = outer2_0;
      result = outer2_2;
      result = applicationId;
      obj = {};
      result = isStart;
      obj.isStart = isStart;
      obj.inviterUserId = inviterUserId;
      result = channelId;
      result = null;
      if (null != channelId) {
        result = channelId;
      }
      obj.channelId = result;
      result = tmp5;
      result = null;
      if (null != tmp6) {
        result = tmp5;
      }
      obj.guildId = result;
      result = tmp5;
      if (null != tmp6) {
        result = outer2_0;
        result = outer2_2;
        let PRIVATE_CHANNEL = outer2_0(outer2_2[24]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
      } else {
        result = outer2_0;
        result = outer2_2;
        PRIVATE_CHANNEL = outer2_0(outer2_2[24]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
      }
      obj.locationKind = PRIVATE_CHANNEL;
      result = outer2_0(outer2_2[23]).stashPendingFrameLaunch(applicationId, obj);
      return true;
    } else {
      let obj5 = outer2_1(outer2_2[25]);
      obj = { type: "EMBEDDED_ACTIVITY_LAUNCH_START", nonce, applicationId };
      let tmp23 = null;
      if (null != channelId) {
        tmp23 = channelId;
      }
      obj.channelId = tmp23;
      obj.componentId = componentId;
      obj.analyticsLocations = analyticsLocations;
      obj.source = source;
      obj.commandOrigin = commandOrigin;
      obj.inviterUserId = inviterUserId;
      obj1 = { customId, referrerId };
      obj.launchParams = obj1;
      obj5.dispatch(obj);
      if (null != channelId) {
        const tmp33 = channelId;
      }
      const tmp34 = yield outer2_41(applicationId, tmp33);
      obj2 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId };
      let tmp40 = null;
      if (null != channelId) {
        tmp40 = channelId;
      }
      obj2.channelId = tmp40;
      obj2.proxyTicket = tmp34;
      outer2_1(outer2_2[25]).dispatch(obj2);
      const currentUser = outer2_13.getCurrentUser();
      if (null == currentUser) {
        if (isStart) {
          if (null != channelId) {
            result = applicationId;
            result = channel;
            let type;
            if (null != obj) {
              type = obj.type;
            }
            let tmp70 = type === outer2_21.GUILD_VOICE;
            const application1 = outer2_5.getApplication(applicationId);
            const obj13 = outer2_0(outer2_2[30]);
            const hasApplicationFlagResult = outer2_0(outer2_2[30]).hasApplicationFlag(application1, outer2_20.EMBEDDED);
            const result1 = outer2_0(outer2_2[31]).isActivityInTextSupportedForChannel(obj);
            if (tmp70) {
              tmp70 = hasApplicationFlagResult;
            }
            if (!tmp70) {
              tmp70 = result1;
            }
            if (tmp70) {
              obj3 = { applicationId, nonce, channelId, guildId: tmp6, commandOrigin, sectionName, source, onExecutedCallback, onConfirmActivityLaunchChecksAlertOpen, embeddedActivitiesManager };
              const tmp82 = yield (function maybeSendPrimaryAppCommand(arg0) {
                return outer3_30(...arguments);
              })(obj3);
              if ("failure" === tmp82.result) {
                if (tmp82.reason === outer2_27.FAILED_ACTIVITY_LAUNCH_CHECKS) {
                  result = outer2_2;
                  obj4 = { type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL" };
                  result = nonce;
                  obj4.nonce = nonce;
                  result = applicationId;
                  obj4.applicationId = applicationId;
                  result = channelId;
                  result = null;
                  if (null != channelId) {
                    result = channelId;
                  }
                  obj4.channelId = result;
                  result = outer2_1(outer2_2[25]).dispatch(obj4);
                  return false;
                } else {
                  let tmp94 = outer2_1(outer2_2[27]);
                  const prototype = tmp94.prototype;
                  tmp94 = new tmp94(outer2_1(outer2_2[27]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                  throw tmp94;
                }
              }
            }
            const obj14 = outer2_0(outer2_2[31]);
          }
          result = outer2_1;
          result = outer2_2;
          result = outer2_1(outer2_2[27]);
          const prototype2 = result.prototype;
          result = new.target;
          result = new.target;
          result = new result(outer2_1(outer2_2[27]).Reasons.INVALID_CHANNEL);
          throw result;
        } else {
          obj5 = { applicationId, channelId, embeddedActivitiesManager, isStart, guildId: tmp6 };
          const tmp61 = yield (function joinEmbeddedActivity(arg0) {
            return outer3_31(...arguments);
          })(obj5);
          if (null != onExecutedCallback) {
            onExecutedCallback();
          }
          if ("failure" === tmp62.result) {
            result = outer2_1;
            result = outer2_2;
            result = outer2_1(outer2_2[27]);
            const prototype3 = result.prototype;
            result = new.target;
            result = new.target;
            result = new result(outer2_1(outer2_2[27]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, tmp61.reason);
            throw result;
          }
          tmp62 = tmp61;
        }
        const obj6 = { type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce, applicationId };
        let tmp89 = null;
        if (null != channelId) {
          tmp89 = channelId;
        }
        obj6.channelId = tmp89;
        outer2_1(outer2_2[25]).dispatch(obj6);
        return true;
      } else {
        result = outer2_1;
        result = outer2_2;
        let obj7 = {};
        result = isStart;
        result = outer2_19;
        obj7.type = isStart ? result.LAUNCH : result.JOIN;
        let id;
        result = outer2_1(outer2_2[26]);
        if (null != tmp44) {
          id = currentUser.id;
        }
        obj7.userId = id;
        obj7.guildId = tmp6;
        obj7.channelId = channelId;
        let type1;
        if (null != obj) {
          type1 = obj.type;
        }
        obj7.channelType = type1;
        obj7.applicationId = applicationId;
        obj7.locationObject = locationObject;
        obj7.analyticsLocations = null != analyticsLocations ? analyticsLocations : [];
        obj7.source = source;
        obj7.referrerId = referrerId;
        referrerId = inviterUserId;
        obj7.inviterUserId = inviterUserId;
        obj7 = result(obj7);
      }
      const obj9 = outer2_1(outer2_2[25]);
      const tmp30 = outer2_41;
    }
  })();
  iter.next();
  return iter;
}
async function _maybeSendPrimaryAppCommand(arg0, arg1) {
  let iter = (function*(applicationId) {
    let channelId;
    let closure_1;
    let closure_4;
    let _isNativeReflectConstruct;
    let closure_6;
    let closure_7;
    let embeddedActivitiesManager;
    let onConfirmActivityLaunchChecksAlertOpen;
    applicationId = applicationId.applicationId;
    ({ nonce: closure_1, channelId } = applicationId);
    const guildId = applicationId.guildId;
    ({ commandOrigin: closure_4, sectionName: _isNativeReflectConstruct, source: closure_6, onExecutedCallback: closure_7 } = applicationId);
    let c8;
    let channel1;
    let guild;
    ({ onConfirmActivityLaunchChecksAlertOpen, embeddedActivitiesManager } = applicationId);
    yield undefined;
    c8 = null;
    const tmp4 = yield outer2_1(outer2_2[32])(channelId, applicationId);
    c8 = tmp4;
    const tmp5 = tmp4.handler !== outer2_0(outer2_2[33]).ApplicationCommandHandler.APP_HANDLER;
    if (!tmp5) {
      if (!outer2_24.includes(tmp)) {
        if (null != tmp2) {
          let obj = { type: "channel", channelId: tmp2 };
          yield outer2_4(obj);
        }
        obj = { type: "user" };
        yield outer2_4(obj);
        const channel = outer2_10.getChannel(tmp2);
        let obj2 = outer2_0(outer2_2[34]);
        obj = { applicationId: tmp, channel, commandIntegrationTypes: tmp4.integration_types };
        if (!yield obj2.installApplicationOnDemandIfNeeded(obj).isAuthorized) {
          let obj1 = { result: "failure", reason: outer2_27.UNAUTHORIZED };
          return obj1;
        }
      }
    }
    channel1 = outer2_10.getChannel(channelId);
    guild = null;
    if (null != guildId) {
      guild = outer2_11.getGuild(guildId);
    }
    if (null == channel1) {
      obj2 = { result: "failure", reason: outer2_27.NO_CHANNEL };
      return obj2;
    } else {
      if (tmp5) {
        const application = outer2_5.getApplication(tmp);
        const currentEmbeddedActivity = outer2_15.getCurrentEmbeddedActivity();
        applicationId = undefined;
        if (null != currentEmbeddedActivity) {
          applicationId = tmp29.applicationId;
        }
        if (null != applicationId) {
          let applicationId1;
          if (null != tmp29) {
            applicationId1 = currentEmbeddedActivity.applicationId;
          }
          const application1 = outer2_5.getApplication(applicationId1);
        }
        const currentUser = outer2_13.getCurrentUser();
        if (null != currentUser) {
          let obj5 = outer2_0(outer2_2[35]);
          const obj3 = { applicationId, application, channel: channel1, currentEmbeddedApplication: application1, embeddedActivitiesManager, user: currentUser, onConfirmActivityLaunchChecksAlertOpen, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false };
          if (!yield obj5.confirmActivityLaunchChecks(obj3)) {
            const obj4 = { result: "failure", reason: outer2_27.FAILED_ACTIVITY_LAUNCH_CHECKS };
            return obj4;
          }
        }
      }
      yield new Promise((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        obj = {
          command: c8,
          optionValues: {},
          context: obj,
          commandOrigin: closure_4,
          sectionName: _isNativeReflectConstruct,
          source: closure_6,
          interactionLifecycleOptionsFactory(command, context, arg2) {
            return {
              nonce: closure_1,
              onSuccess() {
                if (null != outer2_7) {
                  outer2_7();
                }
                outer1_0();
              },
              onFailure(error_code, error_message, error_status, error_reason_code) {
                if (null != outer2_7) {
                  outer2_7();
                }
                let obj = outer5_1(outer5_2[37]);
                obj = { channel_id: outer2_2, guild_id: outer2_3, application_id: closure_0 };
                let type;
                if (null != outer2_9) {
                  type = outer2_9.type;
                }
                obj.channel_type = type;
                obj.error_code = error_code;
                obj.error_message = error_message;
                obj.error_status = error_status;
                obj.error_reason_code = error_reason_code;
                obj.source = outer2_6;
                obj.track(outer5_18.ACTIVITY_INTERACTION_CALLBACK_ERROR, obj);
                if (null != error_code) {
                  if (null != error_message) {
                    if (null != error_status) {
                      let tmp24 = outer5_1(outer5_2[28]);
                      obj = { status: error_status };
                      const obj1 = { message: error_message, code: error_code };
                      obj.body = obj1;
                      const prototype2 = tmp24.prototype;
                      tmp24 = new tmp24(obj);
                      outer1_1(tmp24);
                    }
                  }
                }
                if (null != error_reason_code) {
                  if (error_reason_code in outer5_1(outer5_2[29]).ReasonCodes) {
                    let tmp14 = outer5_1(outer5_2[29]);
                    const prototype = tmp14.prototype;
                    tmp14 = new tmp14(error_reason_code);
                    outer1_1(tmp14);
                  }
                }
                let tmp8 = outer5_1(outer5_2[29]);
                tmp8 = new tmp8(outer5_1(outer5_2[29]).ReasonCodes.UNKNOWN);
                outer1_1(tmp8);
              }
            };
          }
        };
        obj = { channel: channel1, guild };
        outer3_1(outer3_2[36])(obj);
      });
      obj5 = { result: "success" };
      return obj5;
    }
  })();
  iter.next();
  return iter;
}
async function _joinEmbeddedActivity(arg0, arg1) {
  let iter = (function*(arg0) {
    let applicationId;
    let channelId;
    let embeddedActivitiesManager;
    let guildId;
    let isStart;
    ({ applicationId, channelId, guildId, embeddedActivitiesManager, isStart } = arg0);
    yield undefined;
    const sessionId = outer2_9.getSessionId();
    const currentUser = outer2_13.getCurrentUser();
    if (null == applicationId) {
      let obj = { result: "failure", reason: outer2_28.NO_APPLICATION_ID };
      return obj;
    } else {
      const tmp41 = yield outer2_1(outer2_2[38])(applicationId, channelId);
      if (null != currentUser) {
        if (null != tmp41) {
          if (null == channelId) {
            obj = { result: "failure", reason: outer2_28.INVALID_CHANNEL };
            return obj;
          } else {
            const channel = outer2_10.getChannel(channelId);
            if (null == channel) {
              const obj1 = { result: "failure", reason: outer2_28.INVALID_CHANNEL };
              return obj1;
            } else {
              const obj2 = { channelId, ChannelStore: outer2_10, GuildStore: outer2_11, PermissionStore: outer2_12, VoiceStateStore: outer2_14 };
              const embeddedActivityLaunchability = outer2_0(outer2_2[39]).getEmbeddedActivityLaunchability(obj2);
              if (embeddedActivityLaunchability !== outer2_0(outer2_2[39]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                let ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = outer2_28.LAUNCHABILITY_CHECK_FAILED_OTHER;
                if (embeddedActivityLaunchability === outer2_0(outer2_2[39]).EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION) {
                  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = outer2_28.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                  let obj15 = outer2_0(outer2_2[40]);
                  const result = obj15.showActivitiesInvalidPermissionsAlert();
                } else if (embeddedActivityLaunchability === outer2_0(outer2_2[39]).EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS) {
                  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = outer2_28.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                  let obj3 = {};
                  const intl = outer2_0(outer2_2[42]).intl;
                  obj3.title = intl.string(outer2_0(outer2_2[42]).t["IOy+I5"]);
                  const intl2 = outer2_0(outer2_2[42]).intl;
                  obj3.body = intl2.string(outer2_0(outer2_2[42]).t.UXoQTp);
                  obj3.hideActionSheet = false;
                  outer2_1(outer2_2[41]).show(obj3);
                  const obj24 = outer2_1(outer2_2[41]);
                }
                const obj4 = { result: "failure", reason: ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS };
                return obj4;
              } else {
                const currentEmbeddedActivity = outer2_15.getCurrentEmbeddedActivity();
                applicationId = undefined;
                if (null != currentEmbeddedActivity) {
                  applicationId = currentEmbeddedActivity.applicationId;
                }
                if (null != applicationId) {
                  let applicationId1;
                  if (null != currentEmbeddedActivity) {
                    applicationId1 = currentEmbeddedActivity.applicationId;
                  }
                  const application = outer2_5.getApplication(applicationId1);
                }
                if (isStart) {
                  obj = outer2_0(outer2_2[35]);
                  const obj5 = { applicationId, application: tmp41, channel, currentEmbeddedApplication: application, embeddedActivitiesManager, user: currentUser };
                  if (!yield obj.confirmActivityLaunchChecks(obj5)) {
                    const obj6 = { result: "failure", reason: outer2_28.FAILED_ACTIVITY_LAUNCH_CHECKS };
                    return obj6;
                  }
                }
                if (null != channel) {
                  if (tmp55) {
                    const obj7 = { channelId: channel.id, bypassChangeModal: null != application };
                    if (!yield outer2_1(outer2_2[44])(obj7)) {
                      const obj8 = { result: "failure", reason: outer2_28.NOT_CONNECTED_TO_VOICE_CHANNEL };
                      return obj8;
                    }
                  } else {
                    obj3 = outer2_0(outer2_2[31]);
                    const obj9 = { result: "failure", reason: outer2_28.AIT_NOT_ENABLED_FOR_USER };
                    return obj9;
                  }
                  tmp55 = outer2_1(outer2_2[43])(channel.id);
                }
                const obj10 = { trackedActionData: null, retries: 3, oldFormErrors: true, rejectWithError: true };
                let obj11 = { event: outer2_0(outer2_2[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH };
                const obj12 = { guild_id: guildId, channel_id: channelId, application_id: applicationId, session_id: sessionId };
                obj11.properties = obj12;
                obj10.trackedActionData = obj11;
                if (null != channelId) {
                  obj11 = outer2_1(outer2_2[46]);
                  const obj13 = { url: outer2_22.ACTIVITY_CHANNEL_LAUNCH(channelId, applicationId) };
                  const obj14 = { session_id: sessionId };
                  let tmp23;
                  if (null != guildId) {
                    tmp23 = guildId;
                  }
                  obj14.guild_id = tmp23;
                  obj13.body = obj14;
                  const merged = Object.assign(obj10);
                  yield obj11.post(obj13);
                  obj15 = { result: "success" };
                  let obj16 = obj15;
                } else {
                  obj16 = { result: "failure", reason: outer2_28.OTHER };
                }
                return obj16;
              }
              const obj22 = outer2_0(outer2_2[39]);
            }
          }
        }
      }
      const obj17 = { result: "failure", reason: outer2_28.UNKNOWN_USER_OR_APPLICATION };
      return obj17;
    }
  })();
  iter.next();
  return iter;
}
function stopEmbeddedActivity(showFeedback) {
  let _location;
  let applicationId;
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(_location);
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location };
  let launchId;
  if (null != selfEmbeddedActivityForLocation) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  obj.instanceId = launchId;
  obj.showFeedback = flag;
  obj.dispatch(obj);
  const embeddedActivityLocationChannelId = applicationId(3749).getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    selectedParticipantId = selectedParticipantId.getSelectedParticipantId(embeddedActivityLocationChannelId);
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const id = currentUser.id;
    }
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          obj = { applicationId };
          let compositeInstanceId;
          if (null != found) {
            compositeInstanceId = found.compositeInstanceId;
          }
          obj.instanceId = compositeInstanceId;
          if (selectedParticipantId === obj4.getEmbeddedActivityParticipantId(obj)) {
            const participant = importDefault(4324).selectParticipant(embeddedActivityLocationChannelId, null);
            const obj6 = importDefault(4324);
          }
          obj4 = applicationId(10449);
        }
      }
    }
  }
}
async function _fetchDeveloperApplications() {
  let obj = outer2_1(outer2_2[25]);
  obj.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
  const HTTP = outer2_0(outer2_2[50]).HTTP;
  obj = { url: outer2_22.APPLICATIONS_WITH_ASSETS, query: { with_team_applications: true }, oldFormErrors: true, rejectWithError: true };
  const tmp2 = yield HTTP.get(obj);
  const applications = tmp2.body.applications;
  const mapped = applications.map((arg0) => outer3_8.createFromServer(arg0));
  obj = { type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: mapped, assets: tmp2.body.assets };
  outer2_1(outer2_2[25]).dispatch(obj);
  const obj3 = outer2_1(outer2_2[25]);
  outer2_1(outer2_2[25]).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications });
}
async function _uploadImageAttachment(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[25]);
  obj.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
  let tmp2;
  if (null != arg1) {
    obj = { channel_id: arg1 };
    tmp2 = obj;
  }
  const HTTP = outer2_0(outer2_2[50]).HTTP;
  obj = { url: outer2_22.APPLICATION_UPLOAD_ATTACHMENT(arg0), query: tmp2 };
  const items = [{ name: "file", file: arg2 }];
  obj.attachments = items;
  obj.rejectWithError = true;
  const tmp3 = yield HTTP.post(obj);
  outer2_1(outer2_2[25]).dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: tmp3.body.attachment });
  return tmp3.body.attachment;
}
function handleFetchDone(arg0, arg1, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
    const tmp3 = null == guildId && null == arg0;
  }
  if (tmp) {
    arg1();
  }
}
async function _fetchShelf(arg0, arg1) {
  let iter = (function*(guildId) {
    guildId = guildId.guildId;
    let flag = guildId.force;
    if (flag === undefined) {
      flag = false;
    }
    let c1;
    let c2;
    yield undefined;
    const shelfActivities = outer2_15.getShelfActivities(tmp);
    const mapped = shelfActivities.map((application_id) => outer3_5.getApplication(application_id.application_id));
    const found = mapped.filter(outer2_0(outer2_2[51]).isNotNullish);
    if (!flag) {
      if (!outer2_15.shouldFetchShelf(tmp)) {
        const shelfFetchStatus = outer2_15.getShelfFetchStatus(tmp);
        if (null != shelfFetchStatus) {
          if (shelfFetchStatus.isFetching) {
            let promise = new Promise((queue) => {
              let closure_1 = outer3_35.bind(null, guildId, queue);
              const subscription = outer3_1(outer3_2[25]).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_1);
            });
            promise = new Promise((queue) => {
              let closure_2 = outer3_35.bind(null, guildId, queue);
              const subscription = outer3_1(outer3_2[25]).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_2);
            });
            const items = [promise, promise];
            yield Promise.race(items);
            if (null != c1) {
              let obj = outer2_1(outer2_2[25]);
              obj.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c1);
              c1 = undefined;
            }
            if (null != c2) {
              let obj1 = outer2_1(outer2_2[25]);
              obj1.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", c2);
              c2 = undefined;
            }
          }
        }
        obj = { activityConfigs: shelfActivities, applications: found };
        return obj;
      }
    }
    let obj3 = outer2_1(outer2_2[25]);
    obj3.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId });
    let tmp33;
    if (undefined !== guildId) {
      if ("" !== tmp) {
        obj = { guild_id: tmp };
        tmp33 = obj;
      }
    }
    obj1 = { url: outer2_22.ACTIVITY_SHELF, query: tmp33, trackedActionData: null, retries: 0, oldFormErrors: true, rejectWithError: true };
    const obj6 = outer2_1(outer2_2[46]);
    obj1.trackedActionData = { event: outer2_0(outer2_2[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: { guild_id: guildId } };
    const tmp36 = yield obj6.get(obj1);
    const activities = tmp36.body.activities;
    const tmp37 = null != activities ? activities : [];
    const applications = tmp36.body.applications;
    const tmp38 = null != applications ? applications : [];
    const assets = tmp36.body.assets;
    const obj2 = { event: outer2_0(outer2_2[45]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: { guild_id: guildId } };
    const tmp39 = null != assets ? assets : {};
    outer2_1(outer2_2[25]).dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId, activities: tmp37, applications: tmp38, assets: tmp39 });
    if (tmp38.length > 0) {
      obj3 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: arr4 };
      outer2_1(outer2_2[25]).dispatch(obj3);
      const obj10 = outer2_1(outer2_2[25]);
    }
    const obj9 = outer2_1(outer2_2[25]);
    return { activityConfigs: tmp37, applications: tmp38.map((arg0) => outer3_8.createFromServer(arg0)) };
  })();
  iter.next();
  return iter;
}
async function _sendEmbeddedActivityInvite(arg0, arg1) {
  let iter = (function*(arg0) {
    let _location;
    let activityChannelId;
    let applicationId;
    let inviteAnalyticsMetadata;
    let invitedChannelId;
    ({ invitedChannelId, location: _location, inviteAnalyticsMetadata, activityChannelId, applicationId } = arg0);
    yield undefined;
    let obj = outer2_1(outer2_2[52]);
    obj = { target_type: outer2_26.EMBEDDED_APPLICATION, target_application_id: applicationId };
    if (null != outer2_10.getChannel(invitedChannelId)) {
      const obj3 = outer2_1(outer2_2[53]);
      obj3.sendInvite(invitedChannelId, tmp2.code, _location, inviteAnalyticsMetadata);
    }
  })();
  iter.next();
  return iter;
}
async function _sendEmbeddedActivityInviteUser(arg0, arg1) {
  let iter = (function*(location) {
    let applicationId;
    let channelId;
    let closure_1;
    let closure_2;
    let userId;
    const _location = location.location;
    ({ inviteAnalyticsMetadata: closure_1, prefixedContent: closure_2 } = location);
    let _callSuper;
    ({ channelId, applicationId, userId } = location);
    yield undefined;
    let obj = outer2_1(outer2_2[52]);
    obj = { target_type: outer2_26.EMBEDDED_APPLICATION, target_application_id: applicationId };
    _callSuper = yield obj.createInvite(channelId, obj, _location);
    const obj3 = outer2_1(outer2_2[54]);
    yield outer2_1(outer2_2[54]).ensurePrivateChannel(userId).then((channelId) => {
      const channel = outer3_10.getChannel(channelId);
      if (null == channel) {
        const _Error = Error;
        const error = new Error("Private channel not found");
        throw error;
      } else {
        let content;
        if (null != closure_2) {
          content = outer3_1(outer3_2[55]).parse(channel, closure_2).content;
          const obj = outer3_1(outer3_2[55]);
        }
        const obj2 = outer3_1(outer3_2[53]);
        obj2.sendInvite(channelId, code.code, _location, closure_1, content);
      }
    });
  })();
  iter.next();
  return iter;
}
async function _validateTestMode(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[50]).HTTP;
  const obj = { url: outer2_22.ACTIVITY_TEST_MODE(arg0), oldFormErrors: true, rejectWithError: true };
  yield HTTP.get(obj);
  return true;
}
function updateActivityPanelMode(PANEL) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj);
}
function createProxyTicket(applicationId, channelId) {
  return _createProxyTicket(...arguments);
}
async function _createProxyTicket(arg0, arg1, arg2) {
  let obj = {};
  if (null != arg1) {
    obj.channel_id = arg1;
  }
  const HTTP = outer2_0(outer2_2[50]).HTTP;
  obj = { url: outer2_22.APPLICATION_PROXY_TICKET(arg0), body: obj, rejectWithError: true };
  return yield HTTP.post(obj).body.ticket;
}
async function _refreshProxyTicket(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[25]);
  obj = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: arg0, refreshing: true };
  obj.dispatch(obj);
  if (null != arg1) {
    const tmp4 = arg1;
  }
  const tmp5 = yield outer2_41(arg0, tmp4);
  obj = { type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET", applicationId: tmp, channelId: arg1, proxyTicket: tmp5 };
  outer2_1(outer2_2[25]).dispatch(obj);
  const obj3 = outer2_1(outer2_2[25]);
  const tmp3 = outer2_41;
  outer2_1(outer2_2[25]).dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: arg0, proxyTicket: tmp5 });
  const obj5 = outer2_1(outer2_2[25]);
  const obj1 = { type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: arg0, refreshing: false };
  outer2_1(outer2_2[25]).dispatch(obj1);
  return true;
}
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ApplicationFlags: closure_20, ChannelTypes: closure_21, Endpoints: closure_22, PopoutWindowKeys: closure_23 } = ME);
let closure_27 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_28 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    const obj = {};
    ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForLocation);
    obj.showFeedback = false;
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity(arg0) {
  return _runPrimaryAppCommandOrJoinEmbeddedActivity(...arguments);
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  return _fetchDeveloperApplications(...arguments);
};
export const uploadImageAttachment = function uploadImageAttachment(id, id2, arg2) {
  return _uploadImageAttachment(...arguments);
};
export const fetchShelf = function fetchShelf(arg0) {
  return _fetchShelf(...arguments);
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  return _sendEmbeddedActivityInvite(...arguments);
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser(arg0) {
  return _sendEmbeddedActivityInviteUser(...arguments);
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  let obj = require(1336) /* addVersionedDismissedContent */;
  obj = { dismissAction: INDIRECT_ACTION };
  const result = obj.markVersionedDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), obj);
};
export const validateTestMode = function validateTestMode() {
  return _validateTestMode(...arguments);
};
export { updateActivityPanelMode };
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  updateActivityPanelMode(ActivityPanelModes.ACTIVITY_POPOUT_WINDOW);
  importDefault(686).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj);
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  return _refreshProxyTicket(...arguments);
};
