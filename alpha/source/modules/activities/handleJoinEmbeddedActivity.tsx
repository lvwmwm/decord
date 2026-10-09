// Module ID: 10812
// Function ID: 10813
// Name: handleJoinEmbeddedActivity
// Dependencies: [5, 5437, 2064, 2115, 1390, 2063, 2024, 10813, 4698, 10814, 10794, 10793, 10447, 10805, 8496, 11298, 10778, 2]
// Exports: default

// Module 10812 (handleJoinEmbeddedActivity)
import Constants from "Constants" /* 2024 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserStore from "UserStore" /* 1390 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, analyticsLocations, application, applicationId, channel, channelId, componentId, currentEmbeddedApplication, customId, inviterUserId, locationObject, referrerId, sectionName, source, user;

let obj = function _handleJoinEmbeddedActivityInternal() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let obj12;
      let obj6;
      if (componentId === 2) {
        componentId = 3;
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
          let currentEmbeddedActivity;
          let closure_16;
          componentId = 2;
          if (0 === analyticsLocations) {
            if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else if (arg0 === 2) {
              componentId = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              applicationId = undefined;
              channelId = undefined;
              locationObject = undefined;
              sectionName = undefined;
              source = undefined;
              inviterUserId = undefined;
              customId = undefined;
              referrerId = undefined;
              ({ applicationId: c0, activityChannelId: c1, locationObject: c2, analyticsLocations: c3, componentId: c4, sectionName: c5, source: c6, inviterUserId: c7, customId: c8, referrerId: c9 } = closure_0);
              channel = undefined;
              guildId = undefined;
              user = undefined;
              currentEmbeddedActivity = undefined;
              currentEmbeddedApplication = undefined;
              application = undefined;
              closure_16 = undefined;
              let closure_17;
              analyticsLocations = 1;
              componentId = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === analyticsLocations) {
            if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else if (arg0 === 2) {
              componentId = 3;
              return { value, done: true };
            } else {
              channel = closure_130_5.getChannel(channelId);
              guildId = undefined;
              const obj23 = channel;
              if (channel != null) {
                guildId = obj23.getGuildId();
              }
              user = closure_130_7.getCurrentUser();
              if (null == user) {
                componentId = 3;
                return { value: false, done: true };
              } else {
                if (null != channel) {
                  if (null != channelId) {
                    currentEmbeddedActivity = closure_130_8.getCurrentEmbeddedActivity();
                    currentEmbeddedApplication = undefined;
                    applicationId = undefined;
                    if (currentEmbeddedActivity != null) {
                      applicationId = currentEmbeddedActivity.applicationId;
                    }
                    if (null != applicationId) {
                      let applicationId1;
                      const getApplication = closure_130_4.getApplication;
                      if (currentEmbeddedActivity != null) {
                        applicationId1 = currentEmbeddedActivity.applicationId;
                      }
                      currentEmbeddedApplication = getApplication(applicationId1);
                    }
                    if (closure_130_6.getVoiceChannelId() === channelId) {
                      if (null != currentEmbeddedActivity) {
                        if (currentEmbeddedActivity.applicationId === applicationId) {
                          const obj16 = closure_130_0(closure_130_2[8]);
                          const embeddedActivityLocationChannelId = obj16.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
                          if (embeddedActivityLocationChannelId === closure_130_6.getVoiceChannelId()) {
                            closure_130_1(closure_130_2[9])(guildId, currentEmbeddedActivity.location);
                            componentId = 3;
                            const obj8 = { value: Promise.resolve(true), done: true };
                            return obj8;
                          }
                        }
                      }
                    }
                    analyticsLocations = 2;
                    componentId = 1;
                    const obj9 = { value: closure_130_1(closure_130_2[10])(applicationId, channelId), done: false };
                    return obj9;
                  }
                }
                componentId = 3;
                const obj10 = { value: Promise.resolve(false), done: true };
                return obj10;
              }
            }
          } else if (2 === analyticsLocations) {
            if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else if (arg0 === 2) {
              componentId = 3;
              return { value, done: true };
            } else {
              application = value;
              analyticsLocations = 3;
              componentId = 1;
              const obj13 = { applicationId, application, channel, currentEmbeddedApplication, user };
              const obj14 = { value: obj12.confirmActivityLaunchChecks(obj13), done: false };
              obj12 = closure_130_0(closure_130_2[11]);
              return obj14;
            }
          } else {
            if (3 === analyticsLocations) {
              if (arg0 === 1) {
                componentId = 3;
                throw value;
              } else if (arg0 === 2) {
                componentId = 3;
                return { value, done: true };
              } else if (value) {
                if (null != channel) {
                  closure_16 = closure_130_1(closure_130_2[12])(channel.id);
                  closure_17 = closure_130_9.includes(channel.type);
                  if (closure_16) {
                    analyticsLocations = 4;
                    componentId = 1;
                    const obj17 = { channelId: channel.id, bypassChangeModal: null != currentEmbeddedApplication };
                    const obj18 = { value: closure_130_1(closure_130_2[13])(obj17), done: false };
                    return obj18;
                  } else {
                    const obj4 = closure_130_0(closure_130_2[14]);
                    componentId = 3;
                    return { value: false, done: true };
                  }
                } else if (null == channel) {
                  componentId = 3;
                  return { value: false, done: true };
                }
              } else {
                componentId = 3;
                return { value: false, done: true };
              }
            } else if (4 === analyticsLocations) {
              if (arg0 === 1) {
                componentId = 3;
                throw value;
              } else if (arg0 === 2) {
                componentId = 3;
                return { value, done: true };
              } else if (!value) {
                componentId = 3;
                return { value: false, done: true };
              }
            } else if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else if (arg0 === 2) {
              componentId = 3;
              return { value, done: true };
            } else {
              componentId = 3;
              return { value, done: true };
            }
            if (null != channelId) {
              closure_130_1(closure_130_2[15])(channelId);
            }
            if (null != currentEmbeddedActivity) {
              const obj5 = closure_130_0(closure_130_2[16]);
              const result = obj5.maybeDisconnectFromCurrentActivity(currentEmbeddedActivity.location);
            }
            const obj21 = { channelId, applicationId, isStart: false, analyticsLocations, locationObject, componentId, sectionName, source, inviterUserId, customId, referrerId };
            analyticsLocations = 5;
            componentId = 1;
            const obj22 = { value: obj6.runPrimaryAppCommandOrJoinEmbeddedActivity(obj21), done: false };
            obj6 = closure_130_0(closure_130_2[16]);
            return obj22;
          }
        } catch (tmp117) {
          componentId = 3;
          throw tmp117;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let closure_9 = Constants.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
let result = size.fileFinishedImporting("modules/activities/handleJoinEmbeddedActivity.tsx");

export default function handleJoinEmbeddedActivity(arg0) {
  let closure_0;
  _require = arg0;
  const wrapPreemptiveActivityPopout = require("ActivityPopoutUtils").wrapPreemptiveActivityPopout;
  require("ActivityPopoutUtils");
  obj = require("ActivityPopoutUtils");
  return wrapPreemptiveActivityPopout(obj.shouldOpenActivityInPopoutWindow(), () => {
    function handleJoinEmbeddedActivityInternal() {
      return closure_1_10(...arguments);
    }
    return handleJoinEmbeddedActivityInternal(closure_0);
  });
};
