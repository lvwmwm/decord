// Module ID: 11362
// Function ID: 11363
// Name: tryJoinAsFrame
// Dependencies: [5, 4822, 6772, 4823, 5712, 1087, 6776, 7409, 11356, 11361, 11363, 4892, 12710, 2031, 5626, 11396, 11395, 10767, 6780, 12713, 12714, 7411, 2]
// Exports: tryJoinAsFrame, tryStartAsEmbeddedApp

// Module 11362 (tryJoinAsFrame)
import Constants from "Constants" /* 1087 */;
import FramesConstants from "FramesConstants" /* 6776 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11356 */;
import getOrFetchApplicationDefault from "getOrFetchApplication" /* 11361 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 11363 */;
import handleUsePrimaryEntryPointAppCommandDefault from "handleUsePrimaryEntryPointAppCommand" /* 12714 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PresenceStore from "PresenceStore" /* 5712 */;
import size from "module_2" /* 2 */;

let application, c8, c9, channelId2, customId, embeddedActivitiesForChannel, inviterUserId, referrerId, source, user;

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
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        let sessionId;
        let channelId;
        let messageId;
        let intent;
        let _location;
        let userId;
        let isFrameApp;
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
            const tmp46 = getFrameSurfaces;
            let closure_5 = tmp46;
            isFrameApp = tmp46.isFrameApp;
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
        } else if (isFrameApp(value)) {
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
    let closure_2;
    const applicationId = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let tmp11;
      function startFrame() {
        return closure_1_12(...arguments);
      }
      function startActivity() {
        return closure_1_13(...arguments);
      }
      closure_1 = await getOrFetchApplicationDefault(applicationId.applicationId);
      const obj8 = closure_130_0(closure_130_2[8]);
      if (obj8.canOpenFrame(closure_1)) {
        tmp11 = startFrame(applicationId, closure_1);
      } else {
        obj = closure_130_0(closure_130_2[8]);
        tmp11 = !obj.isFrameApp(closure_1);
        const isFrameAppResult = obj.isFrameApp(closure_1);
        if (tmp11) {
          let tmp15 = null;
          if (null != closure_1) {
            tmp15 = null;
            const obj2 = closure_130_0(closure_130_2[13]);
            if (obj2.supportsEmbeddedSurface(closure_1, closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN)) {
              tmp15 = startActivity(applicationId, closure_1);
            }
          }
          tmp11 = tmp15;
        }
      }
      return tmp11;
    })();
  });
  return obj(...arguments);
};
obj = function _startFrame() {
  obj = _asyncToGenerator(async (applicationId, channelId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let analyticsLocations;
      let c0;
      let c1;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let fromLink;
      let obj9;
      if (source === 2) {
        source = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          let guildId;
          let obj6;
          let obj7;
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
              let closure_3 = tmp;
              closure_2 = tmp4;
              applicationId = undefined;
              channelId = undefined;
              fromLink = undefined;
              channelId2 = undefined;
              customId = undefined;
              referrerId = undefined;
              source = undefined;
              inviterUserId = undefined;
              analyticsLocations = undefined;
              application = undefined;
              ({ applicationId: c0, channelId: c1, fromLink } = closure_0);
              const tmp87 = closure_0;
              if (fromLink === undefined) {
                fromLink = false;
              }
              ({ linkChannelId: c3, customId: c4, referrerId: c5, source: c6, inviterUserId: c7, analyticsLocations } = tmp87);
              if (analyticsLocations === undefined) {
                analyticsLocations = [];
              }
              application = closure_1;
              user = undefined;
              guildId = undefined;
              obj6 = undefined;
              obj7 = undefined;
              id = undefined;
              frameParticipantId = undefined;
              referrerId = 1;
              source = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === referrerId) {
            if (arg0 === 1) {
              source = 3;
              throw value;
            } else if (arg0 === 2) {
              source = 3;
              return { value, done: true };
            } else {
              user = closure_131_6.getChannel(channelId);
              guildId = undefined;
              const obj17 = user;
              if (user != null) {
                guildId = obj17.getGuildId();
              }
              obj6 = { isStart: true, analyticsLocations, source, inviterUserId, channelId, guildId };
              obj7 = { customId, referrerId };
              const tmp21 = fromLink;
              if (!tmp21) {
                const obj4 = closure_131_0(closure_131_2[8]);
                const frameSurfaces = obj4.getFrameSurfaces(application);
                if (frameSurfaces.has(closure_131_0(closure_131_2[14]).EmbeddedSurfaceType.MAIN)) {
                  closure_131_1(closure_131_2[16])(channelId);
                  customId = 1;
                  closure_131_1(closure_131_2[17]);
                  const obj8 = { applicationId, surface: null, analyticsContext: null, launch: null };
                  if (null != user) {
                    let tmp45;
                    if (null != guildId) {
                      tmp45 = { type: closure_131_0(closure_131_2[14]).EmbeddedSurfaceType.MAIN, channelId: user.id, guildId };
                      const obj10 = { type: closure_131_0(closure_131_2[14]).EmbeddedSurfaceType.MAIN, channelId: user.id, guildId };
                    }
                    obj8.surface = tmp45;
                    obj8.analyticsContext = obj6;
                    obj8.launch = obj7;
                    referrerId = 3;
                    source = 1;
                    const obj11 = { value: tmp39(obj8), done: false };
                    return obj11;
                  }
                  tmp45 = closure_131_9;
                }
              }
              source = 3;
              const obj12 = { applicationId, application, analyticsContext: obj6, launch: obj7, preferAppChannel: fromLink, channelId: channelId2 };
              const obj13 = { value: obj9.tryLaunchAsFrame(obj12), done: true };
              obj9 = closure_131_0(closure_131_2[15]);
              return obj13;
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
              const obj15 = closure_131_0(closure_131_2[18]);
              frameParticipantId = obj15.getFrameParticipantId(obj14);
              if (null != closure_131_5.getParticipant(user.id, frameParticipantId)) {
                closure_131_1(closure_131_2[19])(user.id, frameParticipantId);
              }
            }
            customId = 0;
            source = 3;
            return { value: true, done: true };
          }
        } catch (tmp66) {
          if (0 === customId) {
            source = 3;
            throw tmp66;
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
        return { value: "IconComponent", done: "+352" };
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
