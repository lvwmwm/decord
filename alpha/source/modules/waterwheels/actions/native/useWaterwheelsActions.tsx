// Module ID: 18873
// Function ID: 18874
// Name: useWaterwheelsActions
// Dependencies: [5, 19, 2138, 502, 5114, 14712, 1072, 6839, 5952, 10156, 7167, 1113, 2553, 7587, 18874, 572, 10392, 9467, 10212, 10217, 7358, 6859, 8134, 14721, 5289, 6854, 10150, 1282, 18875, 6860, 2]
// Exports: useWaterwheelsActions

// Module 18873 (useWaterwheelsActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5289 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6839 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import react_nativeDefault from "react-native" /* 8134 */;
import GameActionCreators from "GameActionCreators" /* 9467 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10156 */;
import NotificationUtilsDefault from "NotificationUtils" /* 14721 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18874 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 5114 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14712 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let application_status, assert, c0, c1, c5, c6, cause, closure_6, closure_8, closure_9, game, gamesWithSupplementalData, joinGuildResult, shouldOpenGameProfile, type, value2;

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
  obj = _asyncToGenerator(async (arg0, guildId, arg2) => {
    let closure_11;
    let closure_7;
    set = arg0;
    let closure_2 = arg2;
    let c12 = 0;
    let c13 = 0;
    let c10 = 0;
    return (async function(arg0, value, arg2) {
      let obj21;
      let obj30;
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
                  const isValidResult = null != obj18 && assert.isValid();
                  if (isValidResult) {
                    let tmp7Result;
                    if (closure_2_2 != null) {
                      tmp7Result = tmp7(obj18);
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
      if (c13 === 2) {
        c13 = 3;
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
          try {
            let obj18;
            let id2;
            let application_status2;
            let abortController;
            let closure_14;
            let hasJoinedGuild;
            let canOpenVerification;
            let report;
            c13 = 2;
            switch (c12) {
              case 0:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  obj18 = undefined;
                  application_status = undefined;
                  value2 = undefined;
                  id2 = undefined;
                  assert = undefined;
                  joinGuildResult = undefined;
                  closure_10 = undefined;
                  application_status2 = undefined;
                  abortController = undefined;
                  body = undefined;
                  closure_14 = undefined;
                  hasJoinedGuild = function hasJoinedGuild() {
                    const guild = closure_2_7.getGuild(closure_1_1);
                    let joinedAt;
                    if (guild != null) {
                      joinedAt = guild.joinedAt;
                    }
                    return null != joinedAt;
                  };
                  canOpenVerification = function canOpenVerification() {
                    let isValidResult = assert.isValid();
                    if (isValidResult) {
                      const guild = closure_2_7.getGuild(closure_1);
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
                      value2 = false;
                      id2 = id.getId();
                      const obj36 = WaterwheelsDiscoverJoinAttribution;
                      assert = obj36.captureDiscoverJoinAttribution(id, () => {

                      }, DispatcherDefault);
                      c10 = 3;
                      const obj37 = GuildActionCreatorsDefault;
                      joinGuildResult = obj37.joinGuild(tmp423, { autoNavigate: false });
                      c12 = 4;
                      c13 = 1;
                      let obj4 = { value: joinGuildResult, done: false };
                      return obj4;
                    }
                  }
                  c13 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 1:
              {
                id2 = set;
                report = report2;
                obj = _report;
                closure_14 = report();
                c10 = 17;
                joinGuildResult = canOpenVerification();
                let tmp369 = !joinGuildResult;
                if (!tmp369) {
                  joinGuildResult = undefined;
                  if (obj18 != null) {
                    joinGuildResult = obj18.outcome;
                  }
                  joinGuildResult = "verification_required" !== joinGuildResult;
                  if (joinGuildResult) {
                    let outcome;
                    if (obj18 != null) {
                      outcome = obj18.outcome;
                    }
                    joinGuildResult = "pending" !== outcome;
                  }
                  tmp369 = joinGuildResult;
                }
                if (!tmp369) {
                  if (null != application_status) {
                    const obj5 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                    const obj34 = closure_136_1(closure_136_2[15]);
                    obj34.dispatch(obj5);
                  }
                  joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                  closure_136_0(closure_136_2[29]);
                  joinGuildResult(guildId);
                }
                c10 = 0;
                set.delete(guildId);
                assert.dispose();
                joinGuildResult = closure_14;
                c12 = 25;
                c13 = 1;
                return { value: joinGuildResult, done: false };
              }
              case 2:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 3:
              {
                c10 = 1;
                cause = set;
                joinGuildResult = cause;
                const tmp308 = cause instanceof closure_136_0(closure_136_2[21]).JoinGuildRefusedError && null == cause.cause;
                if (!tmp308) {
                  const obj8 = { outcome: "failed", reason: obj30.classifyWaterwheelsJoinFailure(cause) };
                  obj18 = obj8;
                  obj30 = closure_136_0(closure_136_2[28]);
                }
                joinGuildResult = assert;
                let isValidResult = assert.isValid();
                if (isValidResult) {
                  joinGuildResult = isJoinFailureAlreadyShown(cause);
                  isValidResult = !joinGuildResult;
                }
                if (isValidResult) {
                  joinGuildResult = closure_136_14;
                  const intl8 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl8.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                report = report2;
                obj = _report;
                closure_14 = report();
                c10 = 16;
                joinGuildResult = canOpenVerification();
                let tmp329 = !joinGuildResult;
                if (!tmp329) {
                  joinGuildResult = undefined;
                  if (obj18 != null) {
                    joinGuildResult = obj18.outcome;
                  }
                  joinGuildResult = "verification_required" !== joinGuildResult;
                  if (joinGuildResult) {
                    let outcome1;
                    if (obj18 != null) {
                      outcome1 = obj18.outcome;
                    }
                    joinGuildResult = "pending" !== outcome1;
                  }
                  tmp329 = joinGuildResult;
                }
                if (!tmp329) {
                  if (null != application_status) {
                    const obj10 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                    const obj31 = closure_136_1(closure_136_2[15]);
                    obj31.dispatch(obj10);
                  }
                  joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                  closure_136_0(closure_136_2[29]);
                  joinGuildResult(guildId);
                }
                c10 = 0;
                set.delete(guildId);
                assert.dispose();
                joinGuildResult = closure_14;
                c12 = 23;
                c13 = 1;
                return { value: joinGuildResult, done: false };
              }
              case 4:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else {
                  application_status = value;
                  if (arg0 === 2) {
                    report = report2;
                    obj = _report;
                    closure_14 = report();
                    c10 = 5;
                    joinGuildResult = canOpenVerification();
                    let tmp275 = !joinGuildResult;
                    if (!tmp275) {
                      joinGuildResult = undefined;
                      if (obj18 != null) {
                        joinGuildResult = obj18.outcome;
                      }
                      joinGuildResult = "verification_required" !== joinGuildResult;
                      if (joinGuildResult) {
                        let outcome2;
                        if (obj18 != null) {
                          outcome2 = obj18.outcome;
                        }
                        joinGuildResult = "pending" !== outcome2;
                      }
                      tmp275 = joinGuildResult;
                    }
                    if (!tmp275) {
                      if (null != application_status) {
                        const obj12 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                        const obj26 = closure_136_1(closure_136_2[15]);
                        obj26.dispatch(obj12);
                      }
                      joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                      closure_136_0(closure_136_2[29]);
                      joinGuildResult(guildId);
                    }
                    c10 = 0;
                    set.delete(guildId);
                    assert.dispose();
                    joinGuildResult = closure_14;
                    c12 = 6;
                    c13 = 1;
                    return { value: joinGuildResult, done: false };
                  } else {
                    joinGuildResult = assert;
                    if (assert.isValid()) {
                      if (hasJoinedGuild()) {
                        obj18 = { outcome: "succeeded" };
                        value2 = undefined;
                        report = report2;
                        obj = _report;
                        closure_14 = report();
                        c10 = 9;
                        joinGuildResult = canOpenVerification();
                        let tmp244 = !joinGuildResult;
                        if (!tmp244) {
                          joinGuildResult = undefined;
                          if (obj18 != null) {
                            joinGuildResult = obj18.outcome;
                          }
                          joinGuildResult = "verification_required" !== joinGuildResult;
                          if (joinGuildResult) {
                            let outcome3;
                            if (obj18 != null) {
                              outcome3 = obj18.outcome;
                            }
                            joinGuildResult = "pending" !== outcome3;
                          }
                          tmp244 = joinGuildResult;
                        }
                        if (!tmp244) {
                          if (null != application_status) {
                            const obj14 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                            const obj23 = closure_136_1(closure_136_2[15]);
                            obj23.dispatch(obj14);
                          }
                          joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                          closure_136_0(closure_136_2[29]);
                          joinGuildResult(guildId);
                        }
                        c10 = 0;
                        set.delete(guildId);
                        assert.dispose();
                        joinGuildResult = closure_14;
                        c12 = 12;
                        c13 = 1;
                        return { value: joinGuildResult, done: false };
                      } else {
                        body = joinGuildResult.body;
                        closure_3 = body;
                        if (body == null) {
                          closure_3 = {};
                        }
                        closure_10 = closure_3;
                        const join_request = closure_10.join_request;
                        application_status = undefined;
                        if (join_request != null) {
                          application_status = join_request.application_status;
                        }
                        application_status2 = application_status;
                        if (closure_10.show_verification_form) {
                          if (assert.isValid()) {
                            c10 = 10;
                            const _AbortController = AbortController;
                            let self = this;
                            let self2 = this;
                            abortController = new AbortController();
                            c12 = 15;
                            c13 = 1;
                            const obj16 = {
                              value: obj21.withDiscoverRequestDeadline(abortController, () => {
                                                      let obj2;
                                                      const HTTP = set(closure_2[27]).HTTP;
                                                      const get = HTTP.get;
                                                      obj = { url: joinGuildResult.GUILD_MEMBER_REQUEST_TO_JOIN(guildId), rejectWithError: obj2.rejectWithMigratedError(), signal: signal.signal, timeout: { deadline: set(closure_2[26]).DISCOVER_REQUEST_DEADLINE_MS } };
                                                      obj2 = set(closure_2[27]);
                                                      ({ deadline: set(closure_2[26]).DISCOVER_REQUEST_DEADLINE_MS });
                                                      return get(obj);
                                                    }),
                              done: false
                            };
                            obj21 = closure_136_0(closure_136_2[26]);
                            return obj16;
                          }
                        }
                        if (hasJoinedGuild()) {
                          obj18 = { outcome: "succeeded" };
                        } else {
                          const tmp219 = value2;
                          if (tmp219) {
                            obj18 = { outcome: "verification_required" };
                          } else if (application_status2 === closure_136_0(closure_136_2[24]).GuildJoinRequestApplicationStatuses.APPROVED) {
                            obj18 = { outcome: "succeeded" };
                          } else if (application_status2 === closure_136_0(closure_136_2[24]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
                            obj18 = { outcome: "pending" };
                          } else {
                            if (!closure_10.show_verification_form) {
                              if (null == closure_10.join_request) {
                                obj18 = { outcome: "succeeded" };
                              }
                            }
                            obj18 = { outcome: "verification_required" };
                          }
                        }
                        c10 = 1;
                      }
                    } else {
                      report = report2;
                      obj = _report;
                      closure_14 = report();
                      c10 = 7;
                      joinGuildResult = canOpenVerification();
                      let tmp178 = !joinGuildResult;
                      if (!tmp178) {
                        joinGuildResult = undefined;
                        if (obj18 != null) {
                          joinGuildResult = obj18.outcome;
                        }
                        joinGuildResult = "verification_required" !== joinGuildResult;
                        if (joinGuildResult) {
                          let outcome4;
                          if (obj18 != null) {
                            outcome4 = obj18.outcome;
                          }
                          joinGuildResult = "pending" !== outcome4;
                        }
                        tmp178 = joinGuildResult;
                      }
                      if (!tmp178) {
                        if (null != application_status) {
                          const obj19 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                          const obj17 = closure_136_1(closure_136_2[15]);
                          obj17.dispatch(obj19);
                        }
                        joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                        closure_136_0(closure_136_2[29]);
                        joinGuildResult(guildId);
                      }
                      c10 = 0;
                      set.delete(guildId);
                      assert.dispose();
                      joinGuildResult = closure_14;
                      c12 = 9;
                      c13 = 1;
                      return { value: joinGuildResult, done: false };
                    }
                  }
                }
                break;
              }
              case 5:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 6:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                } else {
                  c13 = 3;
                  return { value: application_status, done: true };
                }
                break;
              }
              case 7:
              {
                c10 = 4;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl7 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl7.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 8:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 9:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                } else {
                  c13 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 10:
              {
                c10 = 6;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl6 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl6.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 11:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 12:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                } else {
                  c13 = 3;
                  return { value: value2, done: true };
                }
                break;
              }
              case 13:
              {
                c10 = 8;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl5 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl5.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 14:
              {
                c10 = 3;
                value2 = true;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl4 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl4.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 15:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  report = report2;
                  obj = _report;
                  closure_14 = report();
                  c10 = 12;
                  joinGuildResult = canOpenVerification();
                  let tmp92 = !joinGuildResult;
                  if (!tmp92) {
                    joinGuildResult = undefined;
                    if (obj18 != null) {
                      joinGuildResult = obj18.outcome;
                    }
                    joinGuildResult = "verification_required" !== joinGuildResult;
                    if (joinGuildResult) {
                      let outcome5;
                      if (obj18 != null) {
                        outcome5 = obj18.outcome;
                      }
                      joinGuildResult = "pending" !== outcome5;
                    }
                    tmp92 = joinGuildResult;
                  }
                  if (!tmp92) {
                    if (null != application_status) {
                      const obj29 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                      const obj9 = closure_136_1(closure_136_2[15]);
                      obj9.dispatch(obj29);
                    }
                    joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                    closure_136_0(closure_136_2[29]);
                    joinGuildResult(guildId);
                  }
                  c10 = 0;
                  set.delete(guildId);
                  assert.dispose();
                  joinGuildResult = closure_14;
                  c12 = 17;
                  c13 = 1;
                  return { value: joinGuildResult, done: false };
                } else {
                  body = value;
                  joinGuildResult = assert;
                  if (assert.isValid()) {
                    application_status = parseJoinRequest(body.body, guildId, id2);
                    application_status2 = application_status.application_status;
                    c10 = 3;
                  } else {
                    report = report2;
                    obj = _report;
                    closure_14 = report();
                    c10 = 14;
                    joinGuildResult = canOpenVerification();
                    let tmp57 = !joinGuildResult;
                    if (!tmp57) {
                      joinGuildResult = undefined;
                      if (obj18 != null) {
                        joinGuildResult = obj18.outcome;
                      }
                      joinGuildResult = "verification_required" !== joinGuildResult;
                      if (joinGuildResult) {
                        let outcome6;
                        if (obj18 != null) {
                          outcome6 = obj18.outcome;
                        }
                        joinGuildResult = "pending" !== outcome6;
                      }
                      tmp57 = joinGuildResult;
                    }
                    if (!tmp57) {
                      if (null != application_status) {
                        const obj33 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: application_status };
                        const obj6 = closure_136_1(closure_136_2[15]);
                        obj6.dispatch(obj33);
                      }
                      joinGuildResult = closure_136_0(closure_136_2[29]).transitionToMemberVerification;
                      closure_136_0(closure_136_2[29]);
                      joinGuildResult(guildId);
                    }
                    c10 = 0;
                    set.delete(guildId);
                    assert.dispose();
                    joinGuildResult = closure_14;
                    c12 = 20;
                    c13 = 1;
                    return { value: joinGuildResult, done: false };
                  }
                }
                break;
              }
              case 16:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 17:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                } else {
                  c13 = 3;
                  return { value, done: true };
                }
                break;
              }
              case 18:
              {
                c10 = 11;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl3 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl3.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 19:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 20:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                } else {
                  c13 = 3;
                  return { value: "HermesInternal", done: null };
                }
                break;
              }
              case 21:
              {
                c10 = 13;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl2 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl2.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 22:
              {
                c10 = 0;
                set.delete(guildId);
                joinGuildResult = assert.dispose();
                throw set;
              }
              case 23:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  return { value, done: true };
                }
                break;
              }
              case 24:
              {
                c10 = 15;
                const tmp7 = canOpenVerification;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const tmp10 = closure_136_0;
                  const intl = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
              case 25:
              {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  throw id2;
                }
                break;
              }
              default:
              {
                c10 = 2;
                if (canOpenVerification()) {
                  joinGuildResult = closure_136_14;
                  const intl9 = closure_136_0(closure_136_2[11]).intl;
                  closure_136_14(intl9.string(closure_136_1(closure_136_2[12]).grYfmA));
                }
                break;
              }
            }
          } catch (tmp412) {
            set = tmp412;
            switch (c10) {
              case 0:
              {
                c13 = 3;
                throw tmp413;
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
                c12 = 7;
                break;
              }
              case 6:
              {
                c12 = 8;
                break;
              }
              case 7:
              {
                c12 = 10;
                break;
              }
              case 8:
              {
                c12 = 11;
                break;
              }
              case 9:
              {
                c12 = 13;
                break;
              }
              case 10:
              {
                c12 = 14;
                break;
              }
              case 11:
              {
                c12 = 16;
                break;
              }
              case 12:
              {
                c12 = 18;
                break;
              }
              case 13:
              {
                c12 = 19;
                break;
              }
              case 14:
              {
                c12 = 21;
                break;
              }
              case 15:
              {
                c12 = 22;
                break;
              }
              case 16:
              {
                c12 = 24;
                break;
              }
              default:
              {
                c12 = 26;
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
const result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions() {
  const useRef = react.useRef;
  set = new Set();
  let ref = useRef(set);
  return react.useCallback((type, arg1) => {
    let _location;
    ref = type;
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return joinWaterwheelsGuild(ref.current, type.value.guild_id, arg1);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(() => {
        obj = ref(closure_2_2[10]);
        return obj.startLurking(closure_0.value.guild_id, {});
      }, () => {
        const intl = ref(closure_1_2[11]).intl;
        return intl.string(closure_1_1(closure_1_2[12]).d6U01J);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(() => {
        const provider = closure_0.value.provider;
        if (set.has(provider)) {
          obj = { platformType: provider, location: _location };
          closure_2_1(closure_2_2[20])(obj);
        }
      }, () => {
        const intl = ref(closure_1_2[11]).intl;
        return intl.string(closure_1_1(closure_1_2[12])["rdTp+3"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(() => {
        obj = ref(closure_2_2[13]);
        const obj2 = { href: closure_0.value.url };
        return obj.handleClick(obj2);
      }, () => {
        const intl = ref(closure_1_2[11]).intl;
        return intl.string(closure_1_1(closure_1_2[12])["4a9Wgk"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = ref(closure_1_2[11]).intl;
        return intl.string(closure_1_1(closure_1_2[12])["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return openWaterwheelsGame(type.value.game_id, arg1);
    } else {
      return Promise.resolve(type);
    }
  }, []);
}
export { openWaterwheelsGame };
export { joinWaterwheelsGuild };
