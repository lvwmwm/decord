// Module ID: 12768
// Function ID: 12769
// Name: joinFrameActivity
// Dependencies: [5, 2042, 4856, 5666, 6811, 1084, 2023, 584, 11439, 11397, 5662, 11440, 10820, 1125, 11458, 12769, 11252, 10815, 6410, 12770, 9287, 7448, 11386, 2]
// Exports: default

// Module 12768 (joinFrameActivity)
import Constants2 from "Constants" /* 2023 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7448 */;
import UserActivityActionCreators from "UserActivityActionCreators" /* 11386 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c7, channel, closure_7, messageId, preferredChannelId, session_id, session_id2, set, voiceStateForSession;

let c10;
let c9;
let metroImportAll;
let obj = function _joinFrameActivity() {
  obj = _asyncToGenerator(async (arg0) => {
    let id = arg0;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    const iter = (async function(arg0, value) {
      let obj20;
      let tmp117;
      function getActivityChannelId() {
        return closure_1_14(...arguments);
      }
      function getVoiceChannelAppChannelId() {
        return closure_1_13(...arguments);
      }
      if (c10 === 2) {
        c10 = 3;
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
        let c8;
        try {
          let c1;
          let c2;
          let intent;
          let hasItem1;
          let secret;
          let closure_16;
          let frameId;
          let fail;
          let tmp47;
          let tmp46;
          c10 = 2;
          switch (preferredChannelId) {
            case 0:
            {
              let c0;
              let c3;
              let c4;
              let c5;
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                closure_6 = tmp;
                id = undefined;
                c1 = undefined;
                c2 = undefined;
                session_id = undefined;
                channelId = undefined;
                messageId = undefined;
                intent = undefined;
                ({ application: c0, userId: c1, activity: c2, sessionId: c3, channelId: c4, messageId: c5, intent } = closure_0);
                if (intent === undefined) {
                  intent = constants.PLAY;
                }
                id = undefined;
                session_id2 = undefined;
                set = undefined;
                hasItem1 = undefined;
                channel = undefined;
                secret = undefined;
                closure_16 = undefined;
                frameId = undefined;
                session_id = undefined;
                fail = function fail() {
                  obj = obj6(closure_2_2[7]);
                  const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
                  obj.dispatch(obj2);
                  return false;
                };
                preferredChannelId = 1;
                c10 = 1;
                return { value: "Reflect", done: true };
              }
              break;
            }
            case 1:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                const idValue = id.id;
                if (null != session_id) {
                  const obj5 = { type: "ACTIVITY_JOIN_LOADING", applicationId: id };
                  const obj12 = closure_134_1(closure_134_2[7]);
                  obj12.dispatch(obj5);
                }
                obj6 = c2;
                if (c2 == null) {
                  let tmp58 = null;
                  if (null != session_id) {
                    obj6 = { application_id: id, session_id };
                    tmp58 = obj6;
                  }
                  obj6 = tmp58;
                }
                session_id2 = obj6;
                tmp47 = undefined;
                if (null != session_id2) {
                  const obj15 = closure_134_0(closure_134_2[8]);
                  if (obj15.shouldOpenAppChannel(idValue)) {
                    session_id = getActivityChannelId(session_id2, c1);
                    preferredChannelId = 2;
                    c10 = 1;
                    return { value: session_id, done: false };
                  }
                }
                preferredChannelId = tmp47;
                const obj16 = closure_134_0(closure_134_2[9]);
                set = obj16.getFrameSurfaces(closure_134_4.getApplication(idValue));
                const hasItem = set.has(closure_134_0(closure_134_2[10]).EmbeddedSurfaceType.MAIN);
                hasItem1 = !hasItem && set.has(closure_134_0(closure_134_2[10]).EmbeddedSurfaceType.APP_CHANNEL);
                tmp46 = null;
                if (null != preferredChannelId) {
                  const obj8 = { preferredChannelId, fallback: hasItem1 };
                  session_id = closure_134_1(closure_134_2[11])(idValue, obj8);
                  preferredChannelId = 3;
                  c10 = 1;
                  return { value: session_id, done: false };
                } else {
                  channel = tmp46;
                  session_id = null;
                  if (null == channel) {
                    session_id = undefined;
                    const tmp169 = idValue;
                    const tmp170 = c1;
                    if (session_id2 != null) {
                      session_id = session_id2.session_id;
                    }
                    closure_2 = session_id;
                    if (session_id == null) {
                      closure_2 = session_id;
                    }
                    session_id = getVoiceChannelAppChannelId(tmp169, tmp170, closure_2);
                    preferredChannelId = 4;
                    c10 = 1;
                    return { value: session_id, done: false };
                  } else {
                    if (null == channel) {
                      if (null == session_id) {
                        session_id = set.has;
                        if (!session_id(closure_134_0(closure_134_2[10]).EmbeddedSurfaceType.MAIN)) {
                          session_id = hasItem1;
                          if (session_id) {
                            if (null == preferredChannelId) {
                              session_id = closure_134_1(closure_134_2[11])(idValue);
                              preferredChannelId = 5;
                              c10 = 1;
                              return { value: session_id, done: false };
                            }
                          } else {
                            const tmp96 = closure_134_1(closure_134_2[12]);
                            const intl2 = closure_134_0(closure_134_2[13]).intl;
                            tmp96(intl2.string(closure_134_0(closure_134_2[13]).t["7XR9+7"]));
                            session_id = fail();
                            c10 = 3;
                            return { value: false, done: true };
                          }
                        }
                      }
                    }
                    if (null != session_id) {
                      const obj13 = { channelId: session_id };
                      session_id = closure_134_1(closure_134_2[14])(obj13);
                      preferredChannelId = 6;
                      c10 = 1;
                      return { value: session_id, done: false };
                    } else {
                      secret = null;
                      if (null != session_id) {
                        c8 = 1;
                        session_id = closure_134_2[16];
                        const getJoinSecret = closure_134_1(session_id).getJoinSecret;
                        const tmp143 = closure_134_1(session_id);
                        if (null != messageId) {
                          session_id = channelId;
                        } else {
                          channelId = session_id;
                          if (session_id == null) {
                            session_id = channel;
                            channelId = undefined;
                            if (channel != null) {
                              channelId = session_id.channelId;
                            }
                          }
                          let closure_3 = channelId;
                          if (channelId == null) {
                            closure_3 = channelId;
                          }
                          session_id = closure_3;
                        }
                        session_id = getJoinSecret(tmp144, tmp145, tmp146, session_id, messageId);
                        preferredChannelId = 9;
                        c10 = 1;
                        return { value: session_id, done: false };
                      } else {
                        if (null != session_id) {
                          const obj18 = { frameId: closure_134_7(id, obj20.voiceChannelAppSurface(session_id)), launched: Promise.resolve() };
                          session_id = obj18;
                          obj20 = closure_134_0(closure_134_2[19]);
                        } else {
                          session_id = closure_134_1(closure_134_2[8]);
                          const obj19 = { applicationId: id, channel, invite: tmp117 };
                          tmp117 = undefined;
                          if (null != channelId) {
                            if (null != messageId) {
                              tmp117 = { channelId, messageId };
                              const obj22 = { channelId, messageId };
                            }
                          }
                          session_id = session_id(obj19);
                        }
                        frameId = session_id.frameId;
                        session_id = session_id.launched;
                        if (null == secret) {
                          c10 = 3;
                          return { value: true, done: true };
                        } else {
                          const obj23 = { type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: id };
                          const obj21 = closure_134_1(closure_134_2[7]);
                          obj21.dispatch(obj23);
                          c8 = 2;
                          preferredChannelId = 11;
                          c10 = 1;
                          return { value: session_id, done: false };
                        }
                      }
                    }
                  }
                }
              }
              break;
            }
            case 2:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else {
                tmp47 = value;
                if (arg0 === 2) {
                  c10 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 3:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else {
                tmp46 = value;
                if (arg0 === 2) {
                  c10 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else {
                session_id = value;
                if (arg0 === 2) {
                  c10 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 5:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                channel = value;
              }
              break;
            }
            case 6:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else if (value) {
                session_id = closure_134_1(closure_134_2[15]);
                session_id(session_id);
              } else {
                session_id = fail();
                c10 = 3;
                return { value: false, done: true };
              }
              break;
            }
            case 7:
            {
              c8 = 0;
              let closure_20 = closure_7;
              const getActivityLaunchErrorInfo = closure_134_0(closure_134_2[17]).getActivityLaunchErrorInfo;
              const self = this;
              const self2 = this;
              closure_134_0(closure_134_2[17]);
              const tmp35 = new closure_134_1(closure_134_2[18])(closure_20);
              session_id = getActivityLaunchErrorInfo(tmp35, id);
              preferredChannelId = 8;
              c10 = 1;
              return { value: session_id, done: false };
            }
            case 8:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                closure_16 = value;
                session_id = closure_16.errorCode;
                const tmp205 = closure_134_1(closure_134_2[12]);
                if (session_id === closure_134_8.UNKNOWN_SESSION) {
                  const intl = closure_134_0(closure_134_2[13]).intl;
                  session_id = intl.string(closure_134_0(closure_134_2[13]).t["7XR9+7"]);
                } else {
                  session_id = closure_16.message;
                }
                session_id = tmp205(session_id);
                fail();
                c10 = 3;
                return { value: false, done: true };
              }
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                c10 = 3;
                return { value, done: true };
              } else {
                secret = value.secret;
                c8 = 0;
              }
              break;
            }
            case 10:
            {
              c8 = 0;
              fail();
              c10 = 3;
              return { value: false, done: true };
            }
            case 11:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                c10 = 3;
                return { value, done: true };
              } else {
                obj = closure_134_1(closure_134_2[20]);
                session_id = obj.waitFrameSubscribed(frameId, closure_134_10.ACTIVITY_JOIN);
                preferredChannelId = 12;
                c10 = 1;
                return { value: session_id, done: false };
              }
              break;
            }
            default:
            {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                c10 = 3;
                return { value, done: true };
              } else {
                c8 = 0;
                const obj37 = { type: "ACTIVITY_JOIN", applicationId: id, parentApplicationId: null, frameId, secret, intent, embedded: true };
                const obj33 = closure_134_1(closure_134_2[7]);
                obj33.dispatch(obj37);
                c10 = 3;
                return { value: true, done: true };
              }
              break;
            }
          }
        } catch (tmp193) {
          closure_7 = tmp193;
          if (0 === c8) {
            c10 = 3;
            throw tmp193;
          } else if (1 === tmp195) {
            preferredChannelId = 7;
          } else {
            preferredChannelId = 10;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _getVoiceChannelAppChannelId() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj3;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_6 = tmp4;
            let closure_5 = tmp;
            closure_1 = undefined;
            const obj7 = voiceStateForSession;
            voiceStateForSession = voiceStateForSession.getVoiceStateForSession(closure_1, closure_2);
            let channelId = voiceStateForSession;
            const tmp25 = closure_1;
            if (voiceStateForSession == null) {
              channelId = obj7.getVoiceStateForUser(tmp25);
            }
            channelId = undefined;
            if (channelId != null) {
              channelId = channelId.channelId;
            }
            if (null == channelId) {
              c8 = 3;
              return { value: null, done: true };
            } else {
              channel = channel.getChannel(channelId);
              if (channel == null) {
                c7 = 1;
                c8 = 1;
                const obj5 = { value: obj3.openChannel(channelId), done: false };
                obj3 = ChannelActionCreatorsDefault;
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel = value;
        }
        closure_1 = channel;
        let type;
        if (closure_1 != null) {
          type = closure_1.type;
        }
        let id = null;
        if (type === closure_134_9.GUILD_VOICE) {
          id = null;
          if (closure_1.application_id === closure_0) {
            id = closure_1.id;
          }
        }
        c8 = 3;
        const obj6 = { value: id, done: true };
        return obj6;
      } catch (tmp20) {
        c8 = 3;
        throw tmp20;
      }
    }
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
const makeFrameId = FramesConstants.makeFrameId;
({ AbortCodes: metroImportAll, ChannelTypes: c9, RPCEvents: c10 } = Constants);
const ActivityIntent = Constants2.ActivityIntent;
const result = size.fileFinishedImporting("modules/frames/joinFrameActivity.tsx");

export default function joinFrameActivity() {
  return obj(...arguments);
};
