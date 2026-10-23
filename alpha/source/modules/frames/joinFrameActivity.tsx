// Module ID: 12671
// Function ID: 12672
// Name: joinFrameActivity
// Dependencies: [5, 4821, 4901, 1087, 2026, 584, 11376, 11208, 10776, 6373, 10781, 1128, 9254, 11324, 10719, 2]
// Exports: default

// Module 12671 (joinFrameActivity)
import Constants2 from "Constants" /* 2026 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10719 */;
import UserActivityActionCreators from "UserActivityActionCreators" /* 11324 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let channel, channelId, closure_4, closure_5, secret, session_id;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _joinFrameActivity() {
  obj = _asyncToGenerator(async (arg0) => {
    let id = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let intent;
      function getActivityChannelId() {
        return secret(...arguments);
      }
      function getAppChannel() {
        return closure_1_13(...arguments);
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_8;
          let closure_9;
          let closure_13;
          let closure_14;
          let frameId;
          let activityLaunchErrorInfo;
          let fail;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              id = undefined;
              c1 = undefined;
              c2 = undefined;
              session_id = undefined;
              c4 = undefined;
              c5 = undefined;
              intent = undefined;
              ({ application: c0, userId: c1, activity: c2, sessionId: c3, channelId: c4, messageId: c5, intent } = closure_0);
              if (intent === undefined) {
                intent = constants.PLAY;
              }
              id = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              secret = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              frameId = undefined;
              activityLaunchErrorInfo = undefined;
              fail = function fail() {
                obj = obj7(channelId[5]);
                const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
                obj.dispatch(obj2);
                return false;
              };
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else {
            let tmp47;
            if (1 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                id = id.id;
                if (null != session_id) {
                  const obj6 = { type: "ACTIVITY_JOIN_LOADING", applicationId: id };
                  const obj12 = closure_132_1(closure_132_2[5]);
                  obj12.dispatch(obj6);
                }
                obj7 = c2;
                if (c2 == null) {
                  let tmp58 = null;
                  if (null != session_id) {
                    obj7 = { application_id: id, session_id };
                    tmp58 = obj7;
                  }
                  obj7 = tmp58;
                }
                closure_8 = obj7;
                if (null != closure_8) {
                  const obj15 = closure_132_0(closure_132_2[6]);
                  if (obj15.shouldOpenAppChannel(id)) {
                    activityLaunchErrorInfo = getActivityChannelId(closure_8, c1);
                    c7 = 2;
                    c8 = 1;
                    return { value: activityLaunchErrorInfo, done: false };
                  }
                }
              }
            } else {
              if (2 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else {
                  tmp47 = value;
                  if (arg0 === 2) {
                    c8 = 3;
                    return { value, done: true };
                  }
                }
              } else {
                if (3 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else {
                    activityLaunchErrorInfo = value;
                    if (arg0 === 2) {
                      c8 = 3;
                      return { value, done: true };
                    }
                  }
                } else if (4 === c7) {
                  c6 = 0;
                  let closure_17 = closure_5;
                  const getActivityLaunchErrorInfo = closure_132_0(closure_132_2[8]).getActivityLaunchErrorInfo;
                  const self = this;
                  const self2 = this;
                  closure_132_0(closure_132_2[8]);
                  const tmp44 = new closure_132_1(closure_132_2[9])(closure_17);
                  activityLaunchErrorInfo = getActivityLaunchErrorInfo(tmp44, id);
                  c7 = 5;
                  c8 = 1;
                  return { value: activityLaunchErrorInfo, done: false };
                } else if (5 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c8 = 3;
                    return { value, done: true };
                  } else {
                    closure_13 = value;
                    activityLaunchErrorInfo = closure_13.errorCode;
                    const tmp126 = closure_132_1(closure_132_2[10]);
                    if (activityLaunchErrorInfo === closure_132_6.UNKNOWN_SESSION) {
                      const intl = closure_132_0(closure_132_2[11]).intl;
                      activityLaunchErrorInfo = intl.string(closure_132_0(closure_132_2[11]).t["7XR9+7"]);
                    } else {
                      activityLaunchErrorInfo = closure_13.message;
                    }
                    activityLaunchErrorInfo = tmp126(activityLaunchErrorInfo);
                    fail();
                    c8 = 3;
                    return { value: false, done: true };
                  }
                } else if (6 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c8 = 3;
                    return { value, done: true };
                  } else {
                    secret = value.secret;
                    c6 = 0;
                  }
                } else if (7 === c7) {
                  c6 = 0;
                  fail();
                  c8 = 3;
                  return { value: false, done: true };
                } else if (8 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 0;
                    c8 = 3;
                    return { value, done: true };
                  } else {
                    const obj4 = closure_132_1(closure_132_2[12]);
                    activityLaunchErrorInfo = obj4.waitFrameSubscribed(frameId, closure_132_9.ACTIVITY_JOIN);
                    c7 = 9;
                    c8 = 1;
                    return { value: activityLaunchErrorInfo, done: false };
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  return { value, done: true };
                } else {
                  c6 = 0;
                  obj = closure_132_1(closure_132_2[5]);
                  const obj20 = { type: "ACTIVITY_JOIN", applicationId: id, parentApplicationId: null, frameId, secret, intent, embedded: true };
                  obj.dispatch(obj20);
                  c8 = 3;
                  return { value: true, done: true };
                }
                const obj21 = { applicationId: id, channel: activityLaunchErrorInfo };
                closure_14 = closure_132_1(closure_132_2[6])(obj21);
                frameId = closure_14.frameId;
                activityLaunchErrorInfo = closure_14.launched;
                if (null == secret) {
                  c8 = 3;
                  return { value: true, done: true };
                } else {
                  const obj22 = { type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: id };
                  const obj17 = closure_132_1(closure_132_2[5]);
                  obj17.dispatch(obj22);
                  c6 = 2;
                  c7 = 8;
                  c8 = 1;
                  return { value: activityLaunchErrorInfo, done: false };
                }
              }
              secret = null;
              if (null != session_id) {
                c6 = 1;
                activityLaunchErrorInfo = closure_132_2[7];
                channelId = c4;
                const getJoinSecret = closure_132_1(activityLaunchErrorInfo).getJoinSecret;
                const tmp94 = closure_132_1(activityLaunchErrorInfo);
                if (c4 == null) {
                  channelId = undefined;
                  if (activityLaunchErrorInfo != null) {
                    channelId = activityLaunchErrorInfo.channelId;
                  }
                }
                activityLaunchErrorInfo = getJoinSecret(tmp95, tmp96, tmp97, channelId, c5);
                c7 = 6;
                c8 = 1;
                return { value: activityLaunchErrorInfo, done: false };
              }
            }
            closure_9 = tmp47;
            activityLaunchErrorInfo = null;
            if (null != closure_9) {
              activityLaunchErrorInfo = getAppChannel(id, closure_9);
              c7 = 3;
              c8 = 1;
              return { value: activityLaunchErrorInfo, done: false };
            }
          }
        } catch (tmp115) {
          closure_5 = tmp115;
          if (0 === c6) {
            c8 = 3;
            throw tmp115;
          } else if (1 === tmp117) {
            c7 = 4;
          } else {
            c7 = 7;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _getActivityChannelId() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c5 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp3;
            closure_0 = undefined;
            c4 = 1;
            c3 = 2;
            c5 = 1;
            const obj5 = { value: obj3.getMetadata(closure_0, closure_1), done: false };
            obj3 = UserActivityActionCreators;
            return obj5;
          }
        } else if (1 === c3) {
          c4 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          let channel_id;
          if (closure_0 != null) {
            channel_id = closure_0.channel_id;
          }
          let channel_id1;
          if (typeof channel_id === "string") {
            channel_id1 = closure_0.channel_id;
          }
          c4 = 0;
          c5 = 3;
          obj = { value: channel_id1, done: true };
          return obj;
        }
      } catch (tmp11) {
        if (0 === c4) {
          c5 = 3;
          throw tmp11;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAppChannel() {
  let constants2;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            channel = channel.getChannel(closure_1);
            if (null == channel) {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj6.fetchApplicationChannels(closure_0), done: false };
              obj6 = ConjureActionCreators;
              return obj5;
            } else {
              let tmp12 = null;
              if (channel.type === constants.GUILD_APP) {
                tmp12 = null;
                if (channel.application_id === closure_0) {
                  tmp12 = null;
                  if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
                    const obj7 = { guildId: null, channelId: null };
                    ({ guild_id: obj4.guildId, id: obj4.channelId } = channel);
                    tmp12 = obj7;
                  }
                }
              }
              c4 = 3;
              const obj8 = { value: tmp12, done: true };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_1 = value.find((channel_id) => channel_id.channel_id === closure_1_0);
          let tmp7 = null;
          if (null != closure_1) {
            obj = { guildId: closure_1.guild_id, channelId: closure_1.channel_id };
            tmp7 = obj;
          }
          c4 = 3;
          const obj16 = { value: tmp7, done: true };
          return obj16;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
({ AbortCodes: metroRequire, ChannelTypes: metroImportDefault, Permissions: metroImportAll, RPCEvents: c9 } = Constants);
const ActivityIntent = Constants2.ActivityIntent;
const result = size.fileFinishedImporting("modules/frames/joinFrameActivity.tsx");

export default function joinFrameActivity() {
  return obj(...arguments);
};
