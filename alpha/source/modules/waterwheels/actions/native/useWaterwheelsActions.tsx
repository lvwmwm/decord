// Module ID: 19002
// Function ID: 19003
// Name: useWaterwheelsActions
// Dependencies: [5, 19, 2141, 502, 5177, 14825, 1072, 6902, 6015, 10225, 7230, 1113, 2569, 7653, 19003, 572, 10461, 9534, 10281, 10286, 7422, 6922, 8200, 14834, 5352, 6917, 7683, 10219, 1285, 19004, 6923, 2]
// Exports: useWaterwheelsActions

// Module 19002 (useWaterwheelsActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5352 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6902 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import react_nativeDefault from "react-native" /* 8200 */;
import GameActionCreators from "GameActionCreators" /* 9534 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import NotificationUtilsDefault from "NotificationUtils" /* 14834 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 19003 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2141 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 5177 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14825 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let application_status, assert, body2, c0, c1, c5, c6, cause, closure_11, closure_4, closure_6, closure_8, game, gamesWithSupplementalData, shouldOpenGameProfile, type, value2;

let AbortCodes;
let PlatformTypes;
let c9;
function openErrorToast(text) {
  obj = ToastActionCreatorsDefault;
  const obj2 = { text };
  obj.open("waterwheels-action-error", obj2);
}
function openWaterwheelsGame() {
  return obj(...arguments);
}
let obj = function _openWaterwheelsGame() {
  obj = _asyncToGenerator(async (gameId, arg1) => {
    let closure_5;
    let closure_1 = arg1;
    let c12 = 0;
    let c13 = 0;
    let c10 = 0;
    return (async (arg0, value) => {
      let obj6;
      function isOpenable() {
        game = game.getGame(closure_1_0);
        let tmp2 = null != game;
        if (tmp2) {
          obj = closure_0(value[16]);
          tmp2 = !obj.isGameDisabled(game);
        }
        return tmp2;
      }
      if (c13 === 2) {
        c13 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c13 = 2;
          switch (c12) {
            case 0:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                closure_6 = tmp;
                value = undefined;
                shouldOpenGameProfile = undefined;
                const obj24 = WaterwheelsDiscoverJoinAttribution;
                assert = obj24.captureDiscoverJoinAttribution(AuthenticationStore, () => {

                }, DispatcherDefault);
                c10 = 3;
                gamesWithSupplementalData = game;
                const tmp230 = gameId;
                if (null == game.getGame(gameId)) {
                  const items = [tmp230];
                  const obj19 = GameActionCreators;
                  gamesWithSupplementalData = obj19.fetchGamesWithSupplementalData(items);
                  c12 = 4;
                  c13 = 1;
                  return { value: gamesWithSupplementalData, done: false };
                } else {
                  gamesWithSupplementalData = assert.isValid();
                  if (gamesWithSupplementalData) {
                    shouldOpenGameProfile = isOpenable();
                    gamesWithSupplementalData = shouldOpenGameProfile;
                    if (gamesWithSupplementalData) {
                      const obj5 = { gameId, gameProfileModalChecks: obj6, source: closure_134_0(closure_134_2[19]).GameProfileSources.GameSheet };
                      obj6 = { gameId, shouldOpenGameProfile };
                      const openGameProfileModal = closure_134_1(closure_134_2[18]).openGameProfileModal;
                      closure_134_1(closure_134_2[18]);
                      openGameProfileModal(obj5);
                      gamesWithSupplementalData = assert;
                      if (assert.isValid()) {
                        value = { outcome: "succeeded" };
                      }
                    } else {
                      gamesWithSupplementalData = { outcome: "failed", reason: "other" };
                      value = gamesWithSupplementalData;
                    }
                    c10 = 14;
                    gamesWithSupplementalData = value;
                    let outcome;
                    if (value != null) {
                      outcome = gamesWithSupplementalData.outcome;
                    }
                    const isValidResult = "failed" === outcome && assert.isValid();
                    if (isValidResult) {
                      gamesWithSupplementalData = closure_134_14;
                      const intl4 = closure_134_0(closure_134_2[11]).intl;
                      closure_134_14(intl4.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
                    }
                    c10 = 17;
                    const isValidResult1 = null != value && assert.isValid();
                    if (isValidResult1) {
                      gamesWithSupplementalData = undefined;
                      if (closure_1 != null) {
                        gamesWithSupplementalData = tmp190(value);
                      }
                      c12 = 23;
                      c13 = 1;
                      return { value: gamesWithSupplementalData, done: false };
                    } else {
                      c10 = 0;
                      gamesWithSupplementalData = assert;
                      assert.dispose();
                      c13 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    c10 = 9;
                    gamesWithSupplementalData = undefined;
                    if (value != null) {
                      gamesWithSupplementalData = value.outcome;
                    }
                    gamesWithSupplementalData = "failed" === gamesWithSupplementalData && assert.isValid();
                    if (gamesWithSupplementalData) {
                      const intl3 = closure_134_0(closure_134_2[11]).intl;
                      gamesWithSupplementalData = closure_134_14(intl3.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
                    }
                    c10 = 12;
                    gamesWithSupplementalData = null != value && assert.isValid();
                    if (gamesWithSupplementalData) {
                      gamesWithSupplementalData = closure_1 == null;
                      let tmp157Result;
                      if (!gamesWithSupplementalData) {
                        gamesWithSupplementalData = value;
                        tmp157Result = tmp157(value);
                      }
                      c12 = 16;
                      c13 = 1;
                      return { value: tmp157Result, done: false };
                    } else {
                      c10 = 0;
                      gamesWithSupplementalData = assert.dispose();
                      c13 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  }
                }
              }
              break;
            }
            case 1:
            {
              closure_8 = closure_11;
              c10 = 2;
              gamesWithSupplementalData = value;
              let outcome1;
              if (value != null) {
                outcome1 = gamesWithSupplementalData.outcome;
              }
              const isValidResult2 = "failed" === outcome1 && assert.isValid();
              if (isValidResult2) {
                gamesWithSupplementalData = closure_134_14;
                const intl2 = closure_134_0(closure_134_2[11]).intl;
                closure_134_14(intl2.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
              }
              c10 = 21;
              const isValidResult3 = null != value && assert.isValid();
              if (isValidResult3) {
                gamesWithSupplementalData = undefined;
                if (closure_1 != null) {
                  gamesWithSupplementalData = tmp136(value);
                }
                c12 = 29;
                c13 = 1;
                return { value: gamesWithSupplementalData, done: false };
              } else {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                throw closure_8;
              }
              break;
            }
            case 2:
            {
              assert = closure_11;
              c10 = 22;
              const isValidResult4 = null != value && assert.isValid();
              if (!isValidResult4) {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                throw assert;
              } else {
                gamesWithSupplementalData = undefined;
                if (closure_1 != null) {
                  gamesWithSupplementalData = tmp111(value);
                }
                c12 = 31;
                c13 = 1;
                return { value: gamesWithSupplementalData, done: false };
              }
              break;
            }
            case 3:
            {
              c10 = 1;
              gamesWithSupplementalData = assert;
              if (assert.isValid()) {
                value = { outcome: "failed", reason: "other" };
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 4;
                gamesWithSupplementalData = value;
                let outcome2;
                if (value != null) {
                  outcome2 = gamesWithSupplementalData.outcome;
                }
                const isValidResult5 = "failed" === outcome2 && assert.isValid();
                if (isValidResult5) {
                  gamesWithSupplementalData = closure_134_14;
                  const intl = closure_134_0(closure_134_2[11]).intl;
                  closure_134_14(intl.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
                }
                c10 = 7;
                const isValidResult6 = null != value && assert.isValid();
                if (isValidResult6) {
                  gamesWithSupplementalData = undefined;
                  if (closure_1 != null) {
                    gamesWithSupplementalData = tmp99(value);
                  }
                  c12 = 9;
                  c13 = 1;
                  return { value: gamesWithSupplementalData, done: false };
                } else {
                  c10 = 0;
                  gamesWithSupplementalData = assert;
                  assert.dispose();
                  c13 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 5:
            {
              closure_9 = closure_11;
              c10 = 8;
              const isValidResult7 = null != value && assert.isValid();
              if (isValidResult7) {
                gamesWithSupplementalData = undefined;
                if (closure_1 != null) {
                  gamesWithSupplementalData = tmp77(value);
                }
                c12 = 11;
                c13 = 1;
                return { value: gamesWithSupplementalData, done: false };
              } else {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                throw closure_9;
              }
              break;
            }
            case 6:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 7:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 8:
            {
              c10 = 6;
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 10:
            {
              c10 = 5;
              break;
            }
            case 11:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 12:
            {
              game = closure_11;
              c10 = 13;
              const isValidResult8 = null != value && assert.isValid();
              if (isValidResult8) {
                gamesWithSupplementalData = undefined;
                if (closure_1 != null) {
                  gamesWithSupplementalData = tmp55(value);
                }
                c12 = 18;
                c13 = 1;
                return { value: gamesWithSupplementalData, done: false };
              } else {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                throw game;
              }
              break;
            }
            case 13:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 14:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 15:
            {
              c10 = 11;
              break;
            }
            case 16:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 17:
            {
              c10 = 10;
              break;
            }
            case 18:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 19:
            {
              shouldOpenGameProfile = closure_11;
              c10 = 18;
              const isValidResult9 = null != value && assert.isValid();
              if (isValidResult9) {
                gamesWithSupplementalData = undefined;
                if (closure_1 != null) {
                  gamesWithSupplementalData = tmp33(value);
                }
                c12 = 25;
                c13 = 1;
                return { value: gamesWithSupplementalData, done: false };
              } else {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                throw shouldOpenGameProfile;
              }
              break;
            }
            case 20:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 21:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 22:
            {
              c10 = 16;
              break;
            }
            case 23:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 24:
            {
              c10 = 15;
              break;
            }
            case 25:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 26:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 27:
            {
              c10 = 0;
              gamesWithSupplementalData = assert.dispose();
              throw closure_11;
            }
            case 28:
            {
              c10 = 20;
              break;
            }
            case 29:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                assert.dispose();
                c13 = 3;
                obj = { value, done: true };
                return obj;
              }
              break;
            }
            case 30:
            {
              c10 = 19;
              break;
            }
            default:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                gamesWithSupplementalData = assert;
                assert.dispose();
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
          }
        } catch (tmp200) {
          closure_11 = tmp200;
          switch (c10) {
            case 0:
            {
              c13 = 3;
              throw tmp201;
            }
            case 1:
            {
              c12 = 1;
              break;
            }
            case 2:
            {
              c12 = 2;
              break;
            }
            case 3:
            {
              c12 = 3;
              break;
            }
            case 4:
            {
              c12 = 5;
              break;
            }
            case 5:
            {
              c12 = 6;
              break;
            }
            case 6:
            {
              c12 = 7;
              break;
            }
            case 7:
            {
              c12 = 8;
              break;
            }
            case 8:
            {
              c12 = 10;
              break;
            }
            case 9:
            {
              c12 = 12;
              break;
            }
            case 10:
            {
              c12 = 13;
              break;
            }
            case 11:
            {
              c12 = 14;
              break;
            }
            case 12:
            {
              c12 = 15;
              break;
            }
            case 13:
            {
              c12 = 17;
              break;
            }
            case 14:
            {
              c12 = 19;
              break;
            }
            case 15:
            {
              c12 = 20;
              break;
            }
            case 16:
            {
              c12 = 21;
              break;
            }
            case 17:
            {
              c12 = 22;
              break;
            }
            case 18:
            {
              c12 = 24;
              break;
            }
            case 19:
            {
              c12 = 26;
              break;
            }
            case 20:
            {
              c12 = 27;
              break;
            }
            case 21:
            {
              c12 = 28;
              break;
            }
            default:
            {
              c12 = 30;
              break;
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function requestNotifications() {
  return obj(...arguments);
}
obj = function _requestNotifications() {
  let authorizationStatus;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (authorizationStatus.authorizationStatus !== constants.DENIED) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: obj2.requestPermission(), done: false };
            obj2 = NotificationUtilsDefault;
            return obj5;
          } else {
            react_nativeDefault();
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c0 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function joinWaterwheelsGuild() {
  return obj(...arguments);
}
obj = function _joinWaterwheelsGuild() {
  let id;
  obj = _asyncToGenerator(async (arg0, guildId, arg2, arg3) => {
    let closure_12;
    let closure_9;
    set = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c13 = 0;
    let c14 = 0;
    let c11 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let obj30;
      let obj45;
      let signal;
      const report2 = function report() {
        return obj(...arguments);
      };
      function _report() {
        obj = closure_2_3(function*(arg0, value) {
          if (c0 === 2) {
            c0 = 3;
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
            let c2;
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c2 = 1;
                  const isValidResult = null != obj24 && assert.isValid();
                  if (isValidResult) {
                    let tmp7Result;
                    if (closure_2_2 != null) {
                      tmp7Result = tmp7(obj24);
                    }
                    c1 = 2;
                    c0 = 1;
                    const obj4 = { value: tmp7Result, done: false };
                    return obj4;
                  } else {
                    c2 = 0;
                  }
                }
              } else if (1 === tmp3) {
                c2 = 0;
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c0 = 3;
                obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              if (0 === c2) {
                c0 = 3;
                throw tmp10;
              } else {
                c1 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      }
      function parseJoinRequest(body, arg1, arg2) {
        let form_responses;
        let str2;
        if (null != body) {
          if (typeof body === "object") {
            const _Array2 = Array;
            if (!Array.isArray(body)) {
              if (set2.has(body.application_status)) {
                if (body.guild_id === arg1) {
                  if (null != arg2) {
                    if (body.user_id === arg2) {
                      if (typeof body.join_request_id === "string") {
                        if (0 !== body.join_request_id.length) {
                          if (body.id === body.join_request_id) {
                            if (typeof body.created_at === "string") {
                              if (0 !== body.created_at.length) {
                                if ("last_seen" in body) {
                                  if (null === body.last_seen) {
                                    if ("rejection_reason" in body) {
                                      if (null === body.rejection_reason) {
                                        if (null != body.form_responses) {
                                          const _Array = Array;
                                        }
                                        obj = { form_responses, rejection_reason: str2 };
                                        const merged = Object.assign(body);
                                        form_responses = body.form_responses;
                                        if (form_responses == null) {
                                          form_responses = [];
                                        }
                                        str2 = body.rejection_reason;
                                        if (str2 == null) {
                                          str2 = "";
                                        }
                                        return obj;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Invalid join request response");
              throw error;
            }
          }
        }
        const error1 = new Error("Invalid join request response");
        throw error1;
      }
      function isJoinFailureAlreadyShown(body) {
        if (body instanceof closure_1_0(closure_1_2[21]).JoinGuildRefusedError) {
          return true;
        } else {
          let code;
          if (body != null) {
            body = body.body;
            if (body != null) {
              code = body.code;
            }
          }
          const hasItem = null != code && set.has(code);
          return hasItem;
        }
      }
      if (c14 === 2) {
        c14 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let str2 = "pending";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c11;
          try {
            let obj24;
            let c8;
            let id2;
            let tmp537;
            let application_status2;
            let abortController;
            let closure_16;
            let hasJoinedGuild;
            let canOpenVerification;
            let fn;
            let report;
            c14 = 2;
            switch (c13) {
              case 0:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  obj24 = undefined;
                  application_status = undefined;
                  value2 = undefined;
                  c8 = undefined;
                  id2 = undefined;
                  assert = undefined;
                  body = undefined;
                  tmp537 = undefined;
                  application_status2 = undefined;
                  abortController = undefined;
                  body2 = undefined;
                  closure_16 = undefined;
                  hasJoinedGuild = function hasJoinedGuild() {
                    const guild = value2.getGuild(closure_1_1);
                    let joinedAt;
                    if (guild != null) {
                      joinedAt = guild.joinedAt;
                    }
                    return null != joinedAt;
                  };
                  canOpenVerification = function canOpenVerification() {
                    let isValidResult = assert.isValid();
                    if (isValidResult) {
                      const guild = value2.getGuild(closure_1);
                      let joinedAt;
                      if (guild != null) {
                        joinedAt = guild.joinedAt;
                      }
                      isValidResult = null == joinedAt;
                    }
                    return isValidResult;
                  };
                  if (!hasJoinedGuild()) {
                    if (!set.has(guildId)) {
                      set.add(guildId);
                      if (closure_3 != null) {
                        closure_3(guildId, true);
                      }
                      value2 = false;
                      c8 = false;
                      id2 = id.getId();
                      const obj57 = WaterwheelsDiscoverJoinAttribution;
                      assert = obj57.captureDiscoverJoinAttribution(id, () => {

                      }, DispatcherDefault);
                      c11 = 3;
                      const obj58 = GuildActionCreatorsDefault;
                      fn = obj58.joinGuild(tmp548, { autoNavigate: false });
                      c13 = 4;
                      c14 = 1;
                      let obj4 = { value: fn, done: false };
                      return obj4;
                    }
                  }
                  c14 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 1:
              {
                closure_8 = tmp537;
                report = report2;
                obj = _report;
                closure_16 = report();
                c11 = 17;
                fn = c8;
                if (fn) {
                  fn = assert;
                  let isValidResult = assert.isValid();
                  if (isValidResult) {
                    fn = hasJoinedGuild;
                    isValidResult = hasJoinedGuild();
                  }
                  if (isValidResult) {
                    fn = guildId;
                    const obj55 = closure_137_0(closure_137_2[26]);
                    isValidResult = obj55.shouldShowMembershipVerificationGate(guildId);
                  }
                  if (isValidResult) {
                    const obj56 = closure_137_0(closure_137_2[30]);
                    const result = obj56.transitionToMemberVerification(guildId);
                  }
                } else {
                  fn = !canOpenVerification();
                  canOpenVerification();
                  if (!fn) {
                    let outcome;
                    if (obj24 != null) {
                      outcome = obj24.outcome;
                    }
                    let tmp482 = "verification_required" !== outcome;
                    if (tmp482) {
                      let outcome1;
                      if (obj24 != null) {
                        outcome1 = obj24.outcome;
                      }
                      tmp482 = "pending" !== outcome1;
                    }
                    fn = tmp482;
                  }
                  if (!fn) {
                    fn = application_status;
                    if (null != application_status) {
                      const obj5 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                      const obj52 = closure_137_1(closure_137_2[15]);
                      fn = obj52.dispatch(obj5);
                    }
                    const obj54 = closure_137_0(closure_137_2[30]);
                    fn = obj54.transitionToMemberVerification(guildId);
                  }
                }
                c11 = 0;
                set.delete(guildId);
                fn = closure_3;
                if (closure_3 != null) {
                  fn(guildId, false);
                }
                assert.dispose();
                fn = closure_16;
                c13 = 25;
                c14 = 1;
                return { value: fn, done: false };
              }
              case 2:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp463 = tmp537;
                if (closure_3 != null) {
                  fn = tmp468(guildId, false);
                }
                fn = assert.dispose();
                throw tmp463;
              }
              case 3:
              {
                c11 = 1;
                cause = tmp537;
                fn = cause;
                const tmp401 = cause instanceof closure_137_0(closure_137_2[21]).JoinGuildRefusedError && null == cause.cause;
                if (!tmp401) {
                  const obj11 = { outcome: "failed", reason: obj45.classifyWaterwheelsJoinFailure(cause) };
                  obj24 = obj11;
                  obj45 = closure_137_0(closure_137_2[29]);
                }
                fn = assert;
                let isValidResult1 = assert.isValid();
                if (isValidResult1) {
                  fn = isJoinFailureAlreadyShown(cause);
                  isValidResult1 = !fn;
                }
                if (isValidResult1) {
                  fn = closure_137_14;
                  const intl8 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl8.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                report = report2;
                obj = _report;
                closure_16 = report();
                c11 = 16;
                fn = c8;
                if (fn) {
                  fn = assert;
                  let isValidResult2 = assert.isValid();
                  if (isValidResult2) {
                    fn = hasJoinedGuild;
                    isValidResult2 = hasJoinedGuild();
                  }
                  if (isValidResult2) {
                    fn = guildId;
                    const obj49 = closure_137_0(closure_137_2[26]);
                    isValidResult2 = obj49.shouldShowMembershipVerificationGate(guildId);
                  }
                  if (isValidResult2) {
                    const obj50 = closure_137_0(closure_137_2[30]);
                    const result1 = obj50.transitionToMemberVerification(guildId);
                  }
                } else {
                  fn = !canOpenVerification();
                  canOpenVerification();
                  if (!fn) {
                    let outcome2;
                    if (obj24 != null) {
                      outcome2 = obj24.outcome;
                    }
                    let tmp425 = "verification_required" !== outcome2;
                    if (tmp425) {
                      let outcome3;
                      if (obj24 != null) {
                        outcome3 = obj24.outcome;
                      }
                      tmp425 = "pending" !== outcome3;
                    }
                    fn = tmp425;
                  }
                  if (!fn) {
                    fn = application_status;
                    if (null != application_status) {
                      const obj13 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                      const obj46 = closure_137_1(closure_137_2[15]);
                      fn = obj46.dispatch(obj13);
                    }
                    const obj48 = closure_137_0(closure_137_2[30]);
                    fn = obj48.transitionToMemberVerification(guildId);
                  }
                }
                c11 = 0;
                set.delete(guildId);
                fn = closure_3;
                if (closure_3 != null) {
                  fn(guildId, false);
                }
                assert.dispose();
                fn = closure_16;
                c13 = 23;
                c14 = 1;
                return { value: fn, done: false };
              }
              case 4:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else {
                  application_status = value;
                  if (arg0 === 2) {
                    report = report2;
                    obj = _report;
                    closure_16 = report();
                    c11 = 5;
                    fn = c8;
                    if (fn) {
                      fn = assert;
                      let isValidResult3 = assert.isValid();
                      if (isValidResult3) {
                        fn = hasJoinedGuild;
                        isValidResult3 = hasJoinedGuild();
                      }
                      if (isValidResult3) {
                        fn = guildId;
                        const obj41 = closure_137_0(closure_137_2[26]);
                        isValidResult3 = obj41.shouldShowMembershipVerificationGate(guildId);
                      }
                      if (isValidResult3) {
                        const obj42 = closure_137_0(closure_137_2[30]);
                        const result2 = obj42.transitionToMemberVerification(guildId);
                      }
                    } else {
                      fn = !canOpenVerification();
                      canOpenVerification();
                      if (!fn) {
                        let outcome4;
                        if (obj24 != null) {
                          outcome4 = obj24.outcome;
                        }
                        let tmp357 = "verification_required" !== outcome4;
                        if (tmp357) {
                          let outcome5;
                          if (obj24 != null) {
                            outcome5 = obj24.outcome;
                          }
                          tmp357 = "pending" !== outcome5;
                        }
                        fn = tmp357;
                      }
                      if (!fn) {
                        fn = application_status;
                        if (null != application_status) {
                          const obj18 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                          const obj38 = closure_137_1(closure_137_2[15]);
                          fn = obj38.dispatch(obj18);
                        }
                        const obj40 = closure_137_0(closure_137_2[30]);
                        fn = obj40.transitionToMemberVerification(guildId);
                      }
                    }
                    c11 = 0;
                    set.delete(guildId);
                    fn = closure_3;
                    if (closure_3 != null) {
                      fn(guildId, false);
                    }
                    assert.dispose();
                    fn = closure_16;
                    c13 = 6;
                    c14 = 1;
                    return { value: fn, done: false };
                  } else {
                    body = value;
                    fn = assert;
                    if (assert.isValid()) {
                      const bodyValue = body.body;
                      closure_4 = bodyValue;
                      if (bodyValue == null) {
                        closure_4 = {};
                      }
                      tmp537 = closure_4;
                      fn = hasJoinedGuild();
                      if (fn) {
                        if (tmp537.show_verification_form) {
                          fn = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate;
                          closure_137_0(closure_137_2[26]);
                          if (fn(guildId)) {
                            obj24 = { outcome: "verification_required" };
                            c8 = true;
                          }
                          value2 = undefined;
                          report = report2;
                          obj = _report;
                          closure_16 = report();
                          c11 = 9;
                          fn = c8;
                          if (fn) {
                            fn = assert;
                            let isValidResult4 = assert.isValid();
                            if (isValidResult4) {
                              fn = hasJoinedGuild;
                              isValidResult4 = hasJoinedGuild();
                            }
                            if (isValidResult4) {
                              fn = guildId;
                              const obj35 = closure_137_0(closure_137_2[26]);
                              isValidResult4 = obj35.shouldShowMembershipVerificationGate(guildId);
                            }
                            if (isValidResult4) {
                              const obj36 = closure_137_0(closure_137_2[30]);
                              const result3 = obj36.transitionToMemberVerification(guildId);
                            }
                          } else {
                            fn = !canOpenVerification();
                            canOpenVerification();
                            if (!fn) {
                              let outcome6;
                              if (obj24 != null) {
                                outcome6 = obj24.outcome;
                              }
                              let tmp312 = "verification_required" !== outcome6;
                              if (tmp312) {
                                let outcome7;
                                if (obj24 != null) {
                                  outcome7 = obj24.outcome;
                                }
                                tmp312 = "pending" !== outcome7;
                              }
                              fn = tmp312;
                            }
                            if (!fn) {
                              fn = application_status;
                              if (null != application_status) {
                                const obj20 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                                const obj32 = closure_137_1(closure_137_2[15]);
                                fn = obj32.dispatch(obj20);
                              }
                              const obj34 = closure_137_0(closure_137_2[30]);
                              fn = obj34.transitionToMemberVerification(guildId);
                            }
                          }
                          c11 = 0;
                          set.delete(guildId);
                          fn = closure_3;
                          if (closure_3 != null) {
                            fn(guildId, false);
                          }
                          assert.dispose();
                          fn = closure_16;
                          c13 = 12;
                          c14 = 1;
                          return { value: fn, done: false };
                        }
                        obj24 = { outcome: "succeeded" };
                      } else {
                        fn = tmp270.join_request;
                        application_status = undefined;
                        if (fn != null) {
                          application_status = fn.application_status;
                        }
                        application_status2 = application_status;
                        fn = tmp537.show_verification_form;
                        if (fn) {
                          fn = assert.isValid();
                          if (fn) {
                            c11 = 10;
                            const _AbortController = AbortController;
                            let self = this;
                            let self2 = this;
                            abortController = new AbortController();
                            fn = () => {
                              let obj2;
                              const HTTP = set(closure_2[28]).HTTP;
                              const get = HTTP.get;
                              obj = { url: closure_9.GUILD_MEMBER_REQUEST_TO_JOIN(guildId), rejectWithError: obj2.rejectWithMigratedError(), signal: signal.signal, timeout: { deadline: set(closure_2[27]).DISCOVER_REQUEST_DEADLINE_MS } };
                              obj2 = set(closure_2[28]);
                              ({ deadline: set(closure_2[27]).DISCOVER_REQUEST_DEADLINE_MS });
                              return get(obj);
                            };
                            c13 = 15;
                            c14 = 1;
                            const obj22 = { value: obj30.withDiscoverRequestDeadline(abortController, fn), done: false };
                            obj30 = closure_137_0(closure_137_2[27]);
                            return obj22;
                          }
                        }
                        fn = hasJoinedGuild();
                        if (fn) {
                          obj24 = { outcome: "succeeded" };
                        } else {
                          fn = value2;
                          if (fn) {
                            obj24 = { outcome: "verification_required" };
                          } else {
                            fn = closure_137_0(closure_137_2[24]).GuildJoinRequestApplicationStatuses.APPROVED;
                            if (application_status2 === fn) {
                              obj24 = { outcome: "succeeded" };
                            } else {
                              fn = closure_137_0(closure_137_2[24]).GuildJoinRequestApplicationStatuses.SUBMITTED;
                              if (application_status2 === fn) {
                                obj24 = { outcome: "pending" };
                              } else {
                                fn = tmp537.show_verification_form;
                                if (!fn) {
                                  if (null == tmp537.join_request) {
                                    obj24 = { outcome: "succeeded" };
                                  }
                                }
                                obj24 = { outcome: "verification_required" };
                              }
                            }
                          }
                        }
                        c11 = 1;
                      }
                    } else {
                      report = report2;
                      obj = _report;
                      closure_16 = report();
                      c11 = 7;
                      fn = c8;
                      if (fn) {
                        fn = assert;
                        let isValidResult5 = assert.isValid();
                        if (isValidResult5) {
                          fn = hasJoinedGuild;
                          isValidResult5 = hasJoinedGuild();
                        }
                        if (isValidResult5) {
                          fn = guildId;
                          const obj26 = closure_137_0(closure_137_2[26]);
                          isValidResult5 = obj26.shouldShowMembershipVerificationGate(guildId);
                        }
                        if (isValidResult5) {
                          const obj27 = closure_137_0(closure_137_2[30]);
                          const result4 = obj27.transitionToMemberVerification(guildId);
                        }
                      } else {
                        fn = !canOpenVerification();
                        canOpenVerification();
                        if (!fn) {
                          let outcome8;
                          if (obj24 != null) {
                            outcome8 = obj24.outcome;
                          }
                          let tmp226 = "verification_required" !== outcome8;
                          if (tmp226) {
                            let outcome9;
                            if (obj24 != null) {
                              outcome9 = obj24.outcome;
                            }
                            tmp226 = "pending" !== outcome9;
                          }
                          fn = tmp226;
                        }
                        if (!fn) {
                          fn = application_status;
                          if (null != application_status) {
                            const obj28 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                            const obj23 = closure_137_1(closure_137_2[15]);
                            fn = obj23.dispatch(obj28);
                          }
                          const obj25 = closure_137_0(closure_137_2[30]);
                          fn = obj25.transitionToMemberVerification(guildId);
                        }
                      }
                      c11 = 0;
                      set.delete(guildId);
                      fn = closure_3;
                      if (closure_3 != null) {
                        fn(guildId, false);
                      }
                      assert.dispose();
                      fn = closure_16;
                      c13 = 9;
                      c14 = 1;
                      return { value: fn, done: false };
                    }
                  }
                }
                break;
              }
              case 5:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp209 = tmp537;
                if (closure_3 != null) {
                  fn = tmp214(guildId, false);
                }
                fn = assert.dispose();
                throw tmp209;
              }
              case 6:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                } else {
                  c14 = 3;
                  return { value: application_status, done: true };
                }
                break;
              }
              case 7:
              {
                c11 = 4;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl7 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl7.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 8:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp190 = tmp537;
                if (closure_3 != null) {
                  fn = tmp195(guildId, false);
                }
                fn = assert.dispose();
                throw tmp190;
              }
              case 9:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                } else {
                  c14 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 10:
              {
                c11 = 6;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl6 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl6.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 11:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp172 = tmp537;
                if (closure_3 != null) {
                  fn = tmp177(guildId, false);
                }
                fn = assert.dispose();
                throw tmp172;
              }
              case 12:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                } else {
                  c14 = 3;
                  return { value: value2, done: true };
                }
                break;
              }
              case 13:
              {
                c11 = 8;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl5 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl5.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 14:
              {
                c11 = 3;
                value2 = true;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl4 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl4.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 15:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  report = report2;
                  obj = _report;
                  closure_16 = report();
                  c11 = 12;
                  fn = c8;
                  if (fn) {
                    fn = assert;
                    let isValidResult6 = assert.isValid();
                    if (isValidResult6) {
                      fn = hasJoinedGuild;
                      isValidResult6 = hasJoinedGuild();
                    }
                    if (isValidResult6) {
                      fn = guildId;
                      const obj15 = closure_137_0(closure_137_2[26]);
                      isValidResult6 = obj15.shouldShowMembershipVerificationGate(guildId);
                    }
                    if (isValidResult6) {
                      const obj16 = closure_137_0(closure_137_2[30]);
                      const result5 = obj16.transitionToMemberVerification(guildId);
                    }
                  } else {
                    fn = !canOpenVerification();
                    canOpenVerification();
                    if (!fn) {
                      let outcome10;
                      if (obj24 != null) {
                        outcome10 = obj24.outcome;
                      }
                      let tmp117 = "verification_required" !== outcome10;
                      if (tmp117) {
                        let outcome11;
                        if (obj24 != null) {
                          outcome11 = obj24.outcome;
                        }
                        tmp117 = "pending" !== outcome11;
                      }
                      fn = tmp117;
                    }
                    if (!fn) {
                      fn = application_status;
                      if (null != application_status) {
                        const obj44 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                        const obj12 = closure_137_1(closure_137_2[15]);
                        fn = obj12.dispatch(obj44);
                      }
                      const obj14 = closure_137_0(closure_137_2[30]);
                      fn = obj14.transitionToMemberVerification(guildId);
                    }
                  }
                  c11 = 0;
                  set.delete(guildId);
                  fn = closure_3;
                  if (closure_3 != null) {
                    fn(guildId, false);
                  }
                  assert.dispose();
                  fn = closure_16;
                  c13 = 17;
                  c14 = 1;
                  return { value: fn, done: false };
                } else {
                  body2 = value;
                  fn = assert;
                  if (assert.isValid()) {
                    application_status = parseJoinRequest(body2.body, guildId, id2);
                    application_status2 = application_status.application_status;
                    c11 = 3;
                  } else {
                    report = report2;
                    obj = _report;
                    closure_16 = report();
                    c11 = 14;
                    fn = c8;
                    if (fn) {
                      fn = assert;
                      let isValidResult7 = assert.isValid();
                      if (isValidResult7) {
                        fn = hasJoinedGuild;
                        isValidResult7 = hasJoinedGuild();
                      }
                      if (isValidResult7) {
                        fn = guildId;
                        const obj9 = closure_137_0(closure_137_2[26]);
                        isValidResult7 = obj9.shouldShowMembershipVerificationGate(guildId);
                      }
                      if (isValidResult7) {
                        const obj10 = closure_137_0(closure_137_2[30]);
                        const result6 = obj10.transitionToMemberVerification(guildId);
                      }
                    } else {
                      fn = !canOpenVerification();
                      canOpenVerification();
                      if (!fn) {
                        let outcome12;
                        if (obj24 != null) {
                          outcome12 = obj24.outcome;
                        }
                        let tmp68 = "verification_required" !== outcome12;
                        if (tmp68) {
                          let outcome13;
                          if (obj24 != null) {
                            outcome13 = obj24.outcome;
                          }
                          tmp68 = "pending" !== outcome13;
                        }
                        fn = tmp68;
                      }
                      if (!fn) {
                        fn = application_status;
                        if (null != application_status) {
                          const obj51 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                          const obj6 = closure_137_1(closure_137_2[15]);
                          fn = obj6.dispatch(obj51);
                        }
                        const obj8 = closure_137_0(closure_137_2[30]);
                        fn = obj8.transitionToMemberVerification(guildId);
                      }
                    }
                    c11 = 0;
                    set.delete(guildId);
                    fn = closure_3;
                    if (closure_3 != null) {
                      fn(guildId, false);
                    }
                    assert.dispose();
                    fn = closure_16;
                    c13 = 20;
                    c14 = 1;
                    return { value: fn, done: false };
                  }
                }
                break;
              }
              case 16:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp51 = tmp537;
                if (closure_3 != null) {
                  fn = tmp56(guildId, false);
                }
                fn = assert.dispose();
                throw tmp51;
              }
              case 17:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                } else {
                  c14 = 3;
                  return { value, done: true };
                }
                break;
              }
              case 18:
              {
                c11 = 11;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl3 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl3.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 19:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp32 = tmp537;
                if (closure_3 != null) {
                  fn = tmp37(guildId, false);
                }
                fn = assert.dispose();
                throw tmp32;
              }
              case 20:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                } else {
                  c14 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 21:
              {
                c11 = 13;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl2 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl2.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 22:
              {
                c11 = 0;
                set.delete(guildId);
                const tmp14 = tmp537;
                if (closure_3 != null) {
                  fn = tmp19(guildId, false);
                }
                fn = assert.dispose();
                throw tmp14;
              }
              case 23:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  return { value, done: true };
                }
                break;
              }
              case 24:
              {
                c11 = 15;
                const tmp7 = canOpenVerification;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const tmp10 = closure_137_2;
                  const intl = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
              case 25:
              {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c14 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  throw closure_8;
                }
                break;
              }
              default:
              {
                c11 = 2;
                if (canOpenVerification()) {
                  fn = closure_137_14;
                  const intl9 = closure_137_0(closure_137_2[11]).intl;
                  closure_137_14(intl9.string(closure_137_1(closure_137_2[12]).grYfmA));
                }
                break;
              }
            }
          } catch (tmp537) {
            switch (c11) {
              case 0:
              {
                c14 = 3;
                throw tmp538;
              }
              case 1:
              {
                c13 = 1;
                break;
              }
              case 2:
              {
                c13 = 2;
                break;
              }
              case 3:
              {
                c13 = 3;
                break;
              }
              case 4:
              {
                c13 = 5;
                break;
              }
              case 5:
              {
                c13 = 7;
                break;
              }
              case 6:
              {
                c13 = 8;
                break;
              }
              case 7:
              {
                c13 = 10;
                break;
              }
              case 8:
              {
                c13 = 11;
                break;
              }
              case 9:
              {
                c13 = 13;
                break;
              }
              case 10:
              {
                c13 = 14;
                break;
              }
              case 11:
              {
                c13 = 16;
                break;
              }
              case 12:
              {
                c13 = 18;
                break;
              }
              case 13:
              {
                c13 = 19;
                break;
              }
              case 14:
              {
                c13 = 21;
                break;
              }
              case 15:
              {
                c13 = 22;
                break;
              }
              case 16:
              {
                c13 = 24;
                break;
              }
              default:
              {
                c13 = 26;
                break;
              }
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function runGuarded(requestNotifications, arg1) {
  return obj(...arguments);
}
obj = function _runGuarded() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp2;
            closure_0 = closure_1;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: closure_0(), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp5) {
            c4 = 0;
            closure_131_14(closure_0());
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        if (0 === c4) {
          c6 = 3;
          throw tmp13;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AbortCodes, Endpoints: c9, PlatformTypes } = Constants);
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
let items = [, , ];
({ USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0], TOO_MANY_USER_GUILDS: arr[1], GUILD_AT_CAPACITY: arr[2] } = AbortCodes);
let set = new Set(items);
new Set(Object.values(PlatformTypes));
const waterwheels = "waterwheels";
const set2 = new Set(Object.values(MemberVerificationTypes.GuildJoinRequestApplicationStatuses));
let result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions(callback) {
  let closure_0 = callback;
  const useRef = react.useRef;
  set = new Set();
  const ref = useRef(set);
  const items = [callback];
  return react.useCallback((type, arg1) => {
    let _location;
    let closure_0 = type;
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return joinWaterwheelsGuild(ref.current, type.value.guild_id, arg1, closure_0);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(() => {
        obj = callback(closure_2_2[10]);
        return obj.startLurking(closure_0.value.guild_id, {});
      }, () => {
        const intl = callback(closure_1_2[11]).intl;
        return intl.string(ref(closure_1_2[12]).d6U01J);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(() => {
        const provider = closure_0.value.provider;
        if (set.has(provider)) {
          obj = { platformType: provider, location: _location };
          ref(closure_2_2[20])(obj);
        }
      }, () => {
        const intl = callback(closure_1_2[11]).intl;
        return intl.string(ref(closure_1_2[12])["rdTp+3"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(() => {
        obj = callback(closure_2_2[13]);
        const obj2 = { href: closure_0.value.url };
        return obj.handleClick(obj2);
      }, () => {
        const intl = callback(closure_1_2[11]).intl;
        return intl.string(ref(closure_1_2[12])["4a9Wgk"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = callback(closure_1_2[11]).intl;
        return intl.string(ref(closure_1_2[12])["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return openWaterwheelsGame(type.value.game_id, arg1);
    } else {
      return Promise.resolve(type);
    }
  }, items);
}
export { openWaterwheelsGame };
export { joinWaterwheelsGuild };
