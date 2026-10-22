// Module ID: 11317
// Function ID: 11318
// Name: tryJoinAsFrame
// Dependencies: [5, 4820, 6757, 4821, 5698, 1087, 6761, 7394, 11318, 11316, 11319, 4890, 12652, 2031, 5612, 11351, 11350, 10743, 6765, 12653, 12654, 7396, 2]
// Exports: tryJoinAsFrame, tryStartAsEmbeddedApp

// Module 11317 (tryJoinAsFrame)
import Constants from "Constants" /* 1087 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7396 */;
import getOrFetchApplicationDefault from "getOrFetchApplication" /* 11316 */;
import canLaunchContextlessFrame2 from "canLaunchContextlessFrame" /* 11318 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 11319 */;
import handleUsePrimaryEntryPointAppCommandDefault from "handleUsePrimaryEntryPointAppCommand" /* 12654 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6757 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PresenceStore from "PresenceStore" /* 5698 */;
import size from "module_2" /* 2 */;

let c8, c9, customId, embeddedActivitiesForChannel, inviterUserId, referrerId, source, user;

let obj = function _tryJoinAsFrame() {
  let applicationActivity;
  obj = _asyncToGenerator(async (arg0, value) => {
    let activity;
    let analyticsLocations;
    let applicationId;
    let c2;
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let locationObject;
    let obj4;
    let obj8;
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let sessionId;
        let channelId;
        let messageId;
        let intent;
        let _location;
        let userId;
        let canLaunchContextlessFrame;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp4;
            sessionId = undefined;
            applicationId = undefined;
            channelId = undefined;
            messageId = undefined;
            intent = undefined;
            activity = undefined;
            _location = undefined;
            userId = closure_0.userId;
            ({ sessionId: c2, applicationId } = closure_0);
            ({ channelId: c4, messageId: c5, intent: c6, activity } = closure_0);
            let applicationActivity2 = activity;
            const tmp55 = closure_0;
            if (activity == null) {
              applicationActivity2 = applicationActivity.getApplicationActivity(userId, applicationId);
            }
            activity = applicationActivity2;
            const embedded = tmp55.embedded;
            const tmp46 = canLaunchContextlessFrame2;
            let closure_5 = tmp46;
            canLaunchContextlessFrame = tmp46.canLaunchContextlessFrame;
            c8 = 1;
            c9 = 1;
            const obj5 = { value: getOrFetchApplicationDefault(applicationId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (canLaunchContextlessFrame(value)) {
          let tmp28Result;
          _location = closure_134_4.getEmbeddedActivityForUserId(userId, applicationId, true);
          if (null != _location) {
            const obj7 = { applicationId, activityChannelId: obj4.getEmbeddedActivityLocationChannelId(_location.location), source: closure_0.source, locationObject, analyticsLocations };
            const tmp28 = closure_134_1(closure_134_2[10]);
            obj4 = closure_134_0(closure_134_2[11]);
            locationObject = closure_0.locationObject ?? {};
            analyticsLocations = closure_0.analyticsLocations ?? [];
            tmp28Result = tmp28(obj7);
          } else {
            obj = { application: obj8, userId, activity, sessionId, channelId, messageId, intent };
            obj8 = { id: applicationId };
            tmp28Result = closure_134_1(closure_134_2[12])(obj);
          }
          c9 = 3;
          const obj9 = { value: tmp28Result, done: true };
          return obj9;
        }
        c9 = 3;
        return { value: null, done: true };
      } catch (tmp49) {
        c9 = 3;
        throw tmp49;
      }
    }
  });
  return obj(...arguments);
};
obj = function _tryStartAsEmbeddedApp() {
  obj = _asyncToGenerator(async (arg0) => {
    const applicationId = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      function startFrame() {
        return closure_1_12(...arguments);
      }
      function startActivity() {
        return closure_1_13(...arguments);
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: getOrFetchApplicationDefault(applicationId.applicationId), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let tmp13;
            closure_1 = value;
            if (null != closure_1) {
              obj = closure_130_0(closure_130_2[8]);
              if (obj.canLaunchContextlessFrame(closure_1)) {
                tmp13 = startFrame(applicationId);
              }
              c4 = 3;
              return { value: tmp13, done: true };
            }
            tmp13 = null;
            if (null != closure_1) {
              tmp13 = null;
              const obj2 = closure_130_0(closure_130_2[13]);
              if (obj2.supportsEmbeddedSurface(closure_1, closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN)) {
                tmp13 = startActivity(applicationId, closure_1);
              }
            }
          }
        } catch (tmp29) {
          c4 = 3;
          throw tmp29;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _startFrame() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    const iter = (async (arg0, value) => {
      let analyticsLocations;
      let c0;
      let c1;
      let c3;
      let c4;
      let c5;
      let c6;
      let fromLink;
      let obj7;
      if (source === 2) {
        source = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let guildId;
          let obj5;
          let obj6;
          let frameParticipantId;
          source = 2;
          if (0 === referrerId) {
            if (arg0 === 1) {
              source = 3;
              throw value;
            } else if (arg0 === 2) {
              source = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              let closure_1 = tmp4;
              applicationId = undefined;
              channelId = undefined;
              fromLink = undefined;
              customId = undefined;
              referrerId = undefined;
              source = undefined;
              inviterUserId = undefined;
              analyticsLocations = undefined;
              ({ applicationId: c0, channelId: c1, fromLink } = closure_0);
              const tmp74 = closure_0;
              if (fromLink === undefined) {
                fromLink = false;
              }
              ({ customId: c3, referrerId: c4, source: c5, inviterUserId: c6, analyticsLocations } = tmp74);
              if (analyticsLocations === undefined) {
                analyticsLocations = [];
              }
              user = undefined;
              guildId = undefined;
              obj5 = undefined;
              obj6 = undefined;
              id = undefined;
              frameParticipantId = undefined;
              referrerId = 1;
              source = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === referrerId) {
            if (arg0 === 1) {
              source = 3;
              throw value;
            } else if (arg0 === 2) {
              source = 3;
              return { value, done: true };
            } else {
              user = closure_130_6.getChannel(channelId);
              guildId = undefined;
              const obj15 = user;
              if (user != null) {
                guildId = obj15.getGuildId();
              }
              obj5 = { isStart: true, analyticsLocations, source, inviterUserId, channelId, guildId };
              obj6 = { customId, referrerId };
              if (fromLink) {
                source = 3;
                const obj8 = { applicationId, analyticsContext: obj5, launch: obj6, preferAppChannel: true };
                const obj9 = { value: obj7.tryLaunchAsFrame(obj8), done: true };
                obj7 = closure_130_0(closure_130_2[15]);
                return obj9;
              } else {
                closure_130_1(closure_130_2[16])(channelId);
                customId = 1;
                closure_130_1(closure_130_2[17]);
                const obj10 = { applicationId, surface: null, analyticsContext: null, launch: null };
                if (null != user) {
                  let tmp38;
                  if (null != guildId) {
                    tmp38 = { type: closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN, channelId: user.id, guildId };
                    const obj11 = { type: closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN, channelId: user.id, guildId };
                  }
                  obj10.surface = tmp38;
                  obj10.analyticsContext = obj5;
                  obj10.launch = obj6;
                  referrerId = 3;
                  source = 1;
                  const obj12 = { value: tmp32(obj10), done: false };
                  return obj12;
                }
                tmp38 = closure_130_9;
              }
            }
          } else if (2 === referrerId) {
            customId = 0;
            source = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            source = 3;
            throw value;
          } else if (arg0 === 2) {
            customId = 0;
            source = 3;
            return { value, done: true };
          } else {
            id = value;
            if (null != user) {
              const obj14 = { applicationId, id };
              const obj13 = closure_130_0(closure_130_2[18]);
              frameParticipantId = obj13.getFrameParticipantId(obj14);
              if (null != closure_130_5.getParticipant(user.id, frameParticipantId)) {
                closure_130_1(closure_130_2[19])(user.id, frameParticipantId);
              }
            }
            customId = 0;
            source = 3;
            return { value: true, done: true };
          }
        } catch (tmp53) {
          if (0 === customId) {
            source = 3;
            throw tmp53;
          } else {
            referrerId = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _startActivity() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let channelId;
    let locationObject;
    let obj4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let obj6;
        let applicationId;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp4;
            obj6 = undefined;
            channelId = undefined;
            applicationId = closure_0.applicationId;
            ({ channelId, locationObject } = closure_0);
            const tmp39 = closure_1;
            if (undefined === locationObject) {
              locationObject = {};
            }
            let analyticsLocations = tmp38.analyticsLocations;
            obj6 = { locationObject, analyticsLocations, componentId: null, sectionName: null, source: null, customId: null, referrerId: null, inviterUserId: null };
            if (undefined === analyticsLocations) {
              analyticsLocations = [];
            }
            ({ componentId: obj3.componentId, sectionName: obj3.sectionName, source: obj3.source, customId: obj3.customId, referrerId: obj3.referrerId, inviterUserId: obj3.inviterUserId } = closure_0);
            if (null != channelId) {
              let tmp9ResultResult;
              embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channelId);
              if (embeddedActivitiesForChannel.some((applicationId) => applicationId.applicationId === closure_1_1)) {
                const obj7 = { applicationId, activityChannelId: channelId };
                const tmp9Result = handleJoinEmbeddedActivityDefault;
                const merged = Object.assign(obj6);
                tmp9ResultResult = tmp9Result(obj7);
              } else {
                const obj9 = { targetApplicationId: applicationId, channelId, commandOrigin: null, onConfirmActivityLaunchChecksAlertOpen: null };
                ({ commandOrigin: obj8.commandOrigin, onConfirmActivityLaunchChecksAlertOpen: obj8.onConfirmActivityLaunchChecksAlertOpen } = closure_0);
                const tmp9Result2 = handleUsePrimaryEntryPointAppCommandDefault;
                const merged1 = Object.assign(obj6);
                tmp9ResultResult = tmp9Result2(obj9);
              }
              c6 = 3;
              const obj10 = { value: tmp9ResultResult, done: true };
              return obj10;
            } else {
              const bot = tmp39.bot;
              let id;
              if (bot != null) {
                id = bot.id;
              }
              if (null == id) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                c4 = 1;
                const obj11 = { recipientIds: id };
                c5 = 2;
                c6 = 1;
                const obj12 = { value: obj4.openPrivateChannel(obj11), done: false };
                obj4 = ChannelActionCreatorsDefault;
                return obj12;
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          c6 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          channelId = value;
          c4 = 0;
          const obj23 = { targetApplicationId: applicationId, channelId, commandOrigin: closure_0.commandOrigin, onConfirmActivityLaunchChecksAlertOpen: closure_0.onConfirmActivityLaunchChecksAlertOpen };
          const tmp30 = closure_131_1(closure_131_2[20]);
          const merged2 = Object.assign(obj6);
          c6 = 3;
          obj = { value: tmp30(obj23), done: true };
          return obj;
        }
      } catch (tmp20) {
        if (0 === c4) {
          c6 = 3;
          throw tmp20;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityFlags = Constants.ActivityFlags;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("actions/GamesActionCreators.shared.tsx");

export const tryJoinAsFrame = function tryJoinAsFrame() {
  return obj(...arguments);
};
export const tryStartAsEmbeddedApp = function tryStartAsEmbeddedApp() {
  return obj(...arguments);
};
