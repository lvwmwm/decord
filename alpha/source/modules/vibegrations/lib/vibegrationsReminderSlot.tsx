// Module ID: 16693
// Function ID: 16694
// Name: vibegrationsReminderSlot
// Dependencies: [32, 19, 12905, 16692, 16694, 558, 576, 16608, 16140, 2]
// Exports: clampToObserved, hasOpenAsk, markVibegrationsReminderActivity, nextReminderLayers, reminderActivityAt, reminderSlotTurn

// Module 16693 (vibegrationsReminderSlot)
import react2 from "react" /* 576 */;
import useVibegrationsWindowFocusedDefault from "useVibegrationsWindowFocused" /* 16140 */;
import useVibegrationsPublishActionDefault from "useVibegrationsPublishAction" /* 16608 */;
import vibegrationsPublishCard from "vibegrationsPublishCard" /* 16692 */;
import vibegrationsIdeasOffer from "vibegrationsIdeasOffer" /* 16694 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set;

let hasOwnProperty;
let metroRequire;
const f125892 = (item) => {
  const obj = { leaving: true };
  const merged = Object.assign(item);
  return obj;
};
function selectVibegrationsReminder(arr, unseen) {
  if (unseen.unseen) {
    return { shown: null, nextDueAt: null };
  } else {
    const found = arr.filter((eligible) => eligible.eligible);
    const first = found.sort((priority, priority2) => priority2.priority - priority.priority)[0];
    if (null == first) {
      return { shown: null, nextDueAt: null };
    } else {
      let obj2;
      const _Math3 = Math;
      let num = unseen.lastMessageAt;
      const _Math2 = Math;
      const now = unseen.now;
      const clock = first.clock;
      const max2 = Math.max;
      if (num == null) {
        num = -Infinity;
      }
      let num2 = unseen.lastActivityAt;
      if (num2 == null) {
        num2 = -Infinity;
      }
      let num3 = unseen.seenAt;
      if (num3 == null) {
        num3 = -Infinity;
      }
      let num4 = -Infinity;
      if ("visit" === clock) {
        num4 = unseen.visitStartedAt;
      }
      const _Math = Math;
      const sum = unseen.now + Math.max(0, first.idleDelayMs - max(0, now - max2(num, num2, num3, num4)));
      if (sum <= unseen.now) {
        obj2 = { shown: first.key, nextDueAt: null };
        const obj = { shown: first.key, nextDueAt: null };
      } else {
        obj2 = { shown: null, nextDueAt: sum };
      }
      return obj2;
    }
  }
}
function nextReminderClockState(projectId, projectId2, now) {
  let bound;
  let bound2;
  let tmp61;
  if (projectId.projectId !== projectId2.projectId) {
    const tmp54 = now();
    const obj3 = { now: tmp54, visitStartedAt: tmp54, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp61, outdatedShown: false, outdatedBackoff: 0 };
    const merged = Object.assign(projectId2);
    bound = null;
    if (null != projectId2.messageAt) {
      const _Math3 = Math;
      bound = Math.min(projectId2.messageAt, tmp54);
    }
    tmp61 = null;
    if (!projectId2.visible) {
      tmp61 = tmp54;
    }
    return obj3;
  } else {
    if (projectId.draftHasText === projectId2.draftHasText) {
      if (projectId.publishing === projectId2.publishing) {
        if (projectId.drift === projectId2.drift) {
          if (projectId.messageAt === projectId2.messageAt) {
            if (projectId.visible === projectId2.visible) {
              return projectId;
            }
          }
        }
      }
    }
    const tmp = now();
    const obj = { now: tmp };
    const merged1 = Object.assign(projectId);
    let tmp5 = obj;
    if (projectId.draftHasText !== projectId2.draftHasText) {
      const obj4 = { lastActivityAt: tmp };
      const merged2 = Object.assign(obj);
      ({ draftHasText: obj2.draftHasText, draftHasText: obj2.draftTyped } = projectId2);
      tmp5 = obj4;
    }
    let tmp9 = tmp5;
    if (projectId.publishing !== projectId2.publishing) {
      const obj5 = { publishing: projectId2.publishing, lastActivityAt: tmp, outdatedShown: false, outdatedBackoff: 0 };
      const merged3 = Object.assign(tmp5);
      tmp9 = obj5;
    }
    let tmp13 = tmp9;
    if (projectId.drift !== projectId2.drift) {
      const obj6 = { drift: projectId2.drift };
      const merged4 = Object.assign(tmp9);
      let tmp17 = obj6;
      if (!projectId2.drift) {
        const obj7 = { outdatedShown: false, outdatedBackoff: 0 };
        const merged5 = Object.assign(obj6);
        tmp17 = obj7;
      }
      tmp13 = tmp17;
    }
    let tmp21 = tmp13;
    if (projectId.messageAt !== projectId2.messageAt) {
      let bound1 = null;
      if (null != projectId2.messageAt) {
        const _Math = Math;
        bound1 = Math.min(projectId2.messageAt, tmp);
      }
      const obj8 = { messageAt: projectId2.messageAt, lastMessageAt: bound1 };
      const merged6 = Object.assign(tmp13);
      let tmp27 = obj8;
      if (obj8.outdatedShown) {
        tmp27 = obj8;
        if (!obj8.publishing) {
          const _Math2 = Math;
          const obj9 = { outdatedShown: false, outdatedBackoff: bound2 };
          bound2 = Math.min(obj8.outdatedBackoff + 1, items.length - 1);
          const merged7 = Object.assign(obj8);
          tmp27 = obj9;
        }
      }
      tmp21 = tmp27;
      const tmp34 = projectId2.visible || null == projectId.messageAt;
      if (!tmp34) {
        const obj10 = { unseen: true };
        const merged8 = Object.assign(tmp27);
        tmp21 = obj10;
      }
    }
    let tmp38 = tmp21;
    if (projectId.visible !== projectId2.visible) {
      let obj27;
      const obj11 = { visible: projectId2.visible };
      const merged9 = Object.assign(tmp21);
      if (projectId2.visible) {
        let tmp44;
        let hiddenAt = projectId.hiddenAt;
        if (hiddenAt == null) {
          hiddenAt = tmp;
        }
        if (tmp - hiddenAt >= c8) {
          const obj12 = { visitStartedAt: tmp };
          const merged10 = Object.assign(obj11);
          tmp44 = obj12;
        } else {
          tmp44 = obj11;
          if (obj11.unseen) {
            const obj13 = { seenAt: tmp };
            const merged11 = Object.assign(obj11);
            tmp44 = obj13;
          }
        }
        const obj14 = { hiddenAt: null, unseen: false };
        const merged12 = Object.assign(tmp44);
        obj27 = obj14;
      } else {
        obj27 = { hiddenAt: tmp, unseen: false };
        const merged13 = Object.assign(obj11);
      }
      tmp38 = obj27;
    }
    return tmp38;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ isStrandedSegment: hasOwnProperty, turnSettled: metroRequire } = VibegrationsChatStore);
let items = [60000, 180000, 600000];
let c8 = 600000;
let obj = {
  key: "outdated",
  priority: 2,
  idleDelayMs: 60000,
  backoffDelaysMs: items,
  clock: "persistent",
  eligible(draftTyped) {
    let showsOutdatedNoticeResult = !draftTyped.draftTyped;
    if (showsOutdatedNoticeResult) {
      const obj = vibegrationsPublishCard;
      showsOutdatedNoticeResult = obj.showsOutdatedNotice(tmp);
    }
    return showsOutdatedNoticeResult;
  }
};
let items1 = [
  obj,
  {
    key: "ideas",
    priority: 1,
    idleDelayMs: 60000,
    clock: "visit",
    eligible(arg0) {
      let draftHasText;
      let publish;
      let turn;
      ({ turn, publish, draftHasText } = arg0);
      let isIdeasOfferTurnResult = !draftHasText;
      if (isIdeasOfferTurnResult) {
        let publishing;
        if (publish != null) {
          publishing = publish.publishing;
        }
        isIdeasOfferTurnResult = true !== publishing;
      }
      if (isIdeasOfferTurnResult) {
        const obj = vibegrationsIdeasOffer;
        isIdeasOfferTurnResult = obj.isIdeasOfferTurn(turn);
      }
      if (isIdeasOfferTurnResult) {
        let result = null != turn.publishCta;
        if (result) {
          const obj2 = vibegrationsPublishCard;
          result = obj2.isVibegrationsPublishCtaVisible(publish);
        }
        isIdeasOfferTurnResult = !result;
      }
      return isIdeasOfferTurnResult;
    }
  }
];
const map = new Map();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arr, draftHasText) => {
  let closure_2;
  let messageAt;
  let nextDueAt;
  let obj2;
  let outdatedBackoff;
  let shown;
  let tmp33;
  let tmp34;
  const f125894 = (backoffDelaysMs) => {
    let idleDelayMs;
    const obj = { idleDelayMs, eligible: null != obj2 && backoffDelaysMs.eligible(tmp4) };
    const merged = Object.assign(backoffDelaysMs);
    backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
    idleDelayMs = undefined;
    if (backoffDelaysMs != null) {
      idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
    }
    if (idleDelayMs == null) {
      idleDelayMs = backoffDelaysMs.idleDelayMs;
    }
    null != obj2 && backoffDelaysMs.eligible(tmp4);
    return obj;
  };
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(30);
  const tmp2 = useVibegrationsPublishActionDefault(arg0);
  const tmp3 = useVibegrationsWindowFocusedDefault();
  let diff = arr.length - 1;
  let tmp5 = null;
  if (0 <= diff) {
    while (true) {
      let tmp6 = arr[diff];
      if ("publish_notice" === tmp6.kind) {
        diff = diff - 1;
        tmp5 = null;
        if (0 > diff) {
          break;
        }
      } else {
        tmp5 = null;
        if ("user" === tmp6.role) {
          break;
        } else {
          tmp5 = tmp6;
          if (closure_6(tmp6)) {
            break;
          } else {
            tmp5 = null;
            if (!nextDueAt(arr, diff)) {
              break;
            }
          }
        }
      }
      break;
    }
  }
  if (cResult[0] === draftHasText) {
    if (cResult[1] === arr) {
      if (cResult[2] === arg0) {
        let publishing;
        const tmp10 = cResult[3];
        if (tmp2 != null) {
          publishing = tmp2.publishing;
        }
        if (tmp10 === publishing) {
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp17;
          let tmp18;
          let state;
          const tmp12 = cResult[4];
          if (tmp2 != null) {
            const status = tmp2.status;
            if (status != null) {
              state = status.state;
            }
          }
          if (tmp12 === state) {
            tmp14 = cResult[5];
            tmp15 = cResult[6];
            tmp16 = cResult[7];
            tmp17 = cResult[8];
            tmp18 = cResult[9];
          }
          if (cResult[10] === tmp14) {
            if (cResult[11] === tmp15) {
              if (cResult[12] === tmp16) {
                if (cResult[13] === tmp17) {
                  if (cResult[14] === tmp18) {
                    let tmp29;
                    let tmp30;
                    if (cResult[15] === tmp3) {
                      tmp29 = cResult[16];
                    }
                    importDefault = tmp29;
                    if (cResult[17] !== tmp29) {
                      const fn = function w() {
                        let bound;
                        let tmp5;
                        const timestamp = Date.now();
                        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0 };
                        const merged = Object.assign(messageAt);
                        bound = null;
                        if (null != messageAt.messageAt) {
                          const _Math = Math;
                          bound = Math.min(tmp.messageAt, timestamp);
                        }
                        tmp5 = null;
                        if (!messageAt.visible) {
                          tmp5 = timestamp;
                        }
                        return obj;
                      };
                      cResult[17] = tmp29;
                      cResult[18] = fn;
                      tmp30 = fn;
                    } else {
                      tmp30 = cResult[18];
                    }
                    [tmp33, tmp34] = obj2.useState(tmp30);
                    dependencyMap = tmp34;
                    let _Date = Date;
                    _slicedToArray(obj2.useState(tmp30), 2);
                    const tmp37 = nextReminderClockState(tmp33, tmp29, Date.now);
                    _slicedToArray = tmp37;
                    let tmp38 = null;
                    const obj3 = obj2;
                    if (null != tmp5) {
                      let tmp39 = null != tmp5.awaitingUser || null != tmp5.secretRequest || null != tmp5.settingsRequest;
                      if (!tmp39) {
                        const intake = tmp5.intake;
                        let num13;
                        if (intake != null) {
                          num13 = intake.questions.length;
                        }
                        if (num13 == null) {
                          num13 = 0;
                        }
                        tmp39 = num13 > 0;
                      }
                      tmp38 = null;
                      if (!tmp39) {
                        obj2 = { turn: tmp5, publish: tmp2, draftHasText, draftTyped: tmp37.draftTyped && draftHasText };
                        tmp38 = obj2;
                      }
                    }
                    obj2 = tmp38;
                    ({ shown, nextDueAt } = selectVibegrationsReminder(items1.map(f125894), tmp37));
                    selectVibegrationsReminder(items1.map(f125894), tmp37);
                    if ("outdated" === shown) {
                      if (!tmp37.outdatedShown) {
                        const obj4 = { outdatedShown: true };
                        class D {
                          constructor() {
                            function onActivity() {
                              closure_0 = Date.now();
                              closure_1_2((arg0) => {
                                const obj = { now: lastActivityAt, lastActivityAt };
                                const merged = Object.assign(arg0);
                                return obj;
                              });
                            }
                            let obj = map;
                            set = map.get(onActivity);
                            const tmp = onActivity;
                            if (set == null) {
                              const _Set = Set;
                              const self = this;
                              const self2 = this;
                              set = new Set();
                            }
                            const result = obj.set(tmp, set);
                            set.add(onActivity);
                            return () => {
                              set.delete(onActivity);
                              if (0 === set.size) {
                                map.delete(closure_0);
                              }
                            };
                          }
                        }
                        let merged = Object.assign(tmp37);
                        tmp34(obj4);
                      }
                      if (cResult[19] === arg0) {
                        if (cResult[22] !== arg0) {
                          items = [arg0];
                          class D {
                            constructor() {
                              function onActivity() {
                                closure_0 = Date.now();
                                closure_1_2((arg0) => {
                                  const obj = { now: lastActivityAt, lastActivityAt };
                                  const merged = Object.assign(arg0);
                                  return obj;
                                });
                              }
                              let obj = map;
                              set = map.get(onActivity);
                              const tmp = onActivity;
                              if (set == null) {
                                const _Set = Set;
                                const self = this;
                                const self2 = this;
                                set = new Set();
                              }
                              const result = obj.set(tmp, set);
                              set.add(onActivity);
                              return () => {
                                set.delete(onActivity);
                                if (0 === set.size) {
                                  map.delete(closure_0);
                                }
                              };
                            }
                          }
                          cResult[22] = arg0;
                          cResult[23] = items;
                        }
                        class D {
                          constructor() {
                            function onActivity() {
                              closure_0 = Date.now();
                              closure_1_2((arg0) => {
                                const obj = { now: lastActivityAt, lastActivityAt };
                                const merged = Object.assign(arg0);
                                return obj;
                              });
                            }
                            let obj = map;
                            set = map.get(onActivity);
                            const tmp = onActivity;
                            if (set == null) {
                              const _Set = Set;
                              const self = this;
                              const self2 = this;
                              set = new Set();
                            }
                            const result = obj.set(tmp, set);
                            set.add(onActivity);
                            return () => {
                              set.delete(onActivity);
                              if (0 === set.size) {
                                map.delete(closure_0);
                              }
                            };
                          }
                        }
                        if (cResult[24] === nextDueAt) {
                          let tmp49;
                          if (cResult[25] === tmp34) {
                            tmp49 = cResult[26];
                          }
                          if (cResult[27] === tmp37.now) {
                            let tmp50;
                            if (cResult[28] === nextDueAt) {
                              tmp50 = cResult[29];
                            }
                            const effect = obj3.useEffect(tmp49, tmp50);
                            class D {
                              constructor() {
                                function onActivity() {
                                  closure_0 = Date.now();
                                  closure_1_2((arg0) => {
                                    const obj = { now: lastActivityAt, lastActivityAt };
                                    const merged = Object.assign(arg0);
                                    return obj;
                                  });
                                }
                                let obj = map;
                                set = map.get(onActivity);
                                const tmp = onActivity;
                                if (set == null) {
                                  const _Set = Set;
                                  const self = this;
                                  const self2 = this;
                                  set = new Set();
                                }
                                const result = obj.set(tmp, set);
                                set.add(onActivity);
                                return () => {
                                  set.delete(onActivity);
                                  if (0 === set.size) {
                                    map.delete(closure_0);
                                  }
                                };
                              }
                            }
                          }
                          class D {
                            constructor() {
                              function onActivity() {
                                closure_0 = Date.now();
                                closure_1_2((arg0) => {
                                  const obj = { now: lastActivityAt, lastActivityAt };
                                  const merged = Object.assign(arg0);
                                  return obj;
                                });
                              }
                              let obj = map;
                              set = map.get(onActivity);
                              const tmp = onActivity;
                              if (set == null) {
                                const _Set = Set;
                                const self = this;
                                const self2 = this;
                                set = new Set();
                              }
                              const result = obj.set(tmp, set);
                              set.add(onActivity);
                              return () => {
                                set.delete(onActivity);
                                if (0 === set.size) {
                                  map.delete(closure_0);
                                }
                              };
                            }
                          }
                          tmp51[0] = nextDueAt;
                          tmp51[1] = tmp37.now;
                          cResult[27] = tmp37.now;
                          cResult[28] = nextDueAt;
                          cResult[29] = tmp51;
                          tmp50 = tmp51;
                        }
                        const fn2 = function x() {
                          if (null != nextDueAt) {
                            const _setTimeout = setTimeout;
                            const _Math = Math;
                            const _Date = Date;
                            const timeout = setTimeout(() => closure_1_2((arg0) => {
                              const obj = { now: Date.now() };
                              const merged = Object.assign(arg0);
                              return obj;
                            }), Math.max(0, tmp - Date.now()));
                            return () => clearTimeout(closure_0);
                          }
                        };
                        cResult[24] = nextDueAt;
                        cResult[25] = tmp34;
                        cResult[26] = fn2;
                        tmp49 = fn2;
                      }
                      class D {
                        constructor() {
                          function onActivity() {
                            closure_0 = Date.now();
                            closure_1_2((arg0) => {
                              const obj = { now: lastActivityAt, lastActivityAt };
                              const merged = Object.assign(arg0);
                              return obj;
                            });
                          }
                          let obj = map;
                          set = map.get(onActivity);
                          const tmp = onActivity;
                          if (set == null) {
                            const _Set = Set;
                            const self = this;
                            const self2 = this;
                            set = new Set();
                          }
                          const result = obj.set(tmp, set);
                          set.add(onActivity);
                          return () => {
                            set.delete(onActivity);
                            if (0 === set.size) {
                              map.delete(closure_0);
                            }
                          };
                        }
                      }
                      cResult[19] = arg0;
                      cResult[20] = tmp34;
                      cResult[21] = D;
                    }
                    if (tmp37 !== tmp33) {
                      tmp34(tmp37);
                    }
                  }
                }
              }
            }
          }
          const obj5 = { projectId: tmp14, draftHasText: tmp15, publishing: tmp16, drift: tmp17, messageAt: tmp18, visible: tmp3 };
          cResult[10] = tmp14;
          cResult[11] = tmp15;
          cResult[12] = tmp16;
          cResult[13] = tmp17;
          cResult[14] = tmp18;
          cResult[15] = tmp3;
          cResult[16] = obj5;
          tmp29 = obj5;
        }
      }
    }
  }
  const atResult = arr.at(-1);
  let publishing1;
  if (tmp2 != null) {
    publishing1 = tmp2.publishing;
  }
  if (tmp2 != null) {
    const status2 = tmp2.status;
    class D {
      constructor() {
        function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = { now: lastActivityAt, lastActivityAt };
            const merged = Object.assign(arg0);
            return obj;
          });
        }
        let obj = map;
        set = map.get(onActivity);
        const tmp = onActivity;
        if (set == null) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
        }
        const result = obj.set(tmp, set);
        set.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
  }
  let maxResult = null;
  if (null != atResult) {
    let num = atResult.finished_at;
    class D {
      constructor() {
        function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = { now: lastActivityAt, lastActivityAt };
            const merged = Object.assign(arg0);
            return obj;
          });
        }
        let obj = map;
        set = map.get(onActivity);
        const tmp = onActivity;
        if (set == null) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
        }
        const result = obj.set(tmp, set);
        set.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
    const created_at = atResult.created_at;
    if (num == null) {
      num = 0;
    }
    let num2 = atResult.settled_at;
    if (num2 == null) {
      num2 = 0;
    }
    maxResult = max(created_at, num, num2);
  }
  cResult[0] = draftHasText;
  cResult[1] = arr;
  cResult[2] = arg0;
  let publishing2;
  if (tmp2 != null) {
    publishing2 = tmp2.publishing;
  }
  cResult[3] = publishing2;
  if (tmp2 != null) {
    const status3 = tmp2.status;
    class D {
      constructor() {
        function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = { now: lastActivityAt, lastActivityAt };
            const merged = Object.assign(arg0);
            return obj;
          });
        }
        let obj = map;
        set = map.get(onActivity);
        const tmp = onActivity;
        if (set == null) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
        }
        const result = obj.set(tmp, set);
        set.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
  }
  cResult[4] = undefined;
  cResult[5] = arg0;
  cResult[6] = draftHasText;
  cResult[7] = true === publishing1;
  cResult[8] = "changes" === undefined;
  cResult[9] = maxResult;
  tmp18 = maxResult;
  tmp17 = tmp28;
  tmp16 = tmp27;
  tmp15 = draftHasText;
  tmp14 = arg0;
}) : ((projectId, arr, draftHasText) => {
  let closure_2;
  let maxResult;
  let nextDueAt;
  let obj;
  let obj3;
  let outdatedBackoff;
  let publishing;
  let shown;
  let state;
  let tmp15;
  let tmp16;
  const f125897 = () => {
    let bound;
    let tmp5;
    const timestamp = Date.now();
    obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0 };
    const merged = Object.assign(obj);
    bound = null;
    if (null != obj.messageAt) {
      const _Math = Math;
      bound = Math.min(tmp.messageAt, timestamp);
    }
    tmp5 = null;
    if (!obj.visible) {
      tmp5 = timestamp;
    }
    return obj;
  };
  const f125898 = (backoffDelaysMs) => {
    let idleDelayMs;
    obj = { idleDelayMs, eligible: null != obj3 && backoffDelaysMs.eligible(tmp4) };
    const merged = Object.assign(backoffDelaysMs);
    backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
    idleDelayMs = undefined;
    if (backoffDelaysMs != null) {
      idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
    }
    if (idleDelayMs == null) {
      idleDelayMs = backoffDelaysMs.idleDelayMs;
    }
    null != obj3 && backoffDelaysMs.eligible(tmp4);
    return obj;
  };
  let closure_0 = projectId;
  let tmp = obj(16608)(projectId);
  let diff = arr.length - 1;
  let tmp4 = null;
  const tmp2 = obj(16140)();
  if (0 <= diff) {
    while (true) {
      let tmp5 = arr[diff];
      if ("publish_notice" === tmp5.kind) {
        diff = diff - 1;
        tmp4 = null;
        if (0 > diff) {
          break;
        }
      } else {
        tmp4 = null;
        if ("user" === tmp5.role) {
          break;
        } else {
          tmp4 = tmp5;
          if (closure_6(tmp5)) {
            break;
          } else {
            tmp4 = null;
            if (!nextDueAt(arr, diff)) {
              break;
            }
          }
        }
      }
      break;
    }
  }
  const atResult = arr.at(-1);
  obj = { projectId, draftHasText, publishing: true === publishing, drift: "changes" === state, messageAt: maxResult, visible: tmp2 };
  publishing = undefined;
  if (tmp != null) {
    publishing = tmp.publishing;
  }
  state = undefined;
  if (tmp != null) {
    const status = tmp.status;
    if (status != null) {
      state = status.state;
    }
  }
  maxResult = null;
  if (null != atResult) {
    let num = atResult.finished_at;
    let _Math = Math;
    const created_at = atResult.created_at;
    if (num == null) {
      num = 0;
    }
    let num2 = atResult.settled_at;
    if (num2 == null) {
      num2 = 0;
    }
    maxResult = max(created_at, num, num2);
  }
  [tmp15, tmp16] = obj3.useState(f125897);
  dependencyMap = tmp16;
  _slicedToArray(obj3.useState(f125897), 2);
  const tmp17 = nextReminderClockState(tmp15, obj, Date.now);
  _slicedToArray = tmp17;
  let tmp18 = null;
  if (null != tmp4) {
    let tmp19 = null != tmp4.awaitingUser || null != tmp4.secretRequest || null != tmp4.settingsRequest;
    if (!tmp19) {
      const intake = tmp4.intake;
      let num3;
      if (intake != null) {
        num3 = intake.questions.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp19 = num3 > 0;
    }
    tmp18 = null;
    if (!tmp19) {
      obj3 = { turn: tmp4, publish: tmp, draftHasText, draftTyped: tmp17.draftTyped && draftHasText };
      tmp18 = obj3;
    }
  }
  obj3 = tmp18;
  ({ shown, nextDueAt } = selectVibegrationsReminder(items1.map(f125898), tmp17));
  selectVibegrationsReminder(items1.map(f125898), tmp17);
  if ("outdated" === shown) {
    if (!tmp17.outdatedShown) {
      const obj4 = { outdatedShown: true };
      let merged = Object.assign(tmp17);
      tmp16(obj4);
    }
    items = [projectId];
    const effect = obj2.useEffect(function() {
      function onActivity() {
        let closure_0 = Date.now();
        closure_1_2((arg0) => {
          obj = { now: lastActivityAt, lastActivityAt };
          const merged = Object.assign(arg0);
          return obj;
        });
      }
      obj = map;
      set = map.get(onActivity);
      const tmp = onActivity;
      if (set == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
      }
      const result = obj.set(tmp, set);
      set.add(onActivity);
      return () => {
        set.delete(onActivity);
        if (0 === set.size) {
          map.delete(projectId);
        }
      };
    }, items);
    items1 = [nextDueAt, tmp17.now];
    const effect1 = obj2.useEffect(() => {
      let closure_0;
      if (null != nextDueAt) {
        const _setTimeout = setTimeout;
        const _Math = Math;
        const _Date = Date;
        const timeout = setTimeout(() => closure_1_2((arg0) => {
          obj = { now: Date.now() };
          const merged = Object.assign(arg0);
          return obj;
        }), Math.max(0, tmp - Date.now()));
        return () => clearTimeout(closure_0);
      }
    }, items1);
    return shown;
  }
  if (tmp17 !== tmp15) {
    tmp16(tmp17);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((key) => {
  let arr2;
  let first;
  let items2;
  let tmp13;
  let tmp16;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [arr2, tmp5] = react.useState(first);
  let closure_0 = tmp5;
  _slicedToArray(react.useState(first), 2);
  const found = arr2.find((leaving) => !leaving.leaving);
  key = undefined;
  const obj2 = react;
  if (found != null) {
    key = found.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== key) {
    closure_0 = key;
    const found1 = arr2.filter((key) => key.key !== closure_0);
    const mapped = found1.map(f125892);
    let tmp9 = mapped;
    if (null != key) {
      items1 = [];
      const obj3 = { key, leaving: false };
      items1[HermesBuiltin.arraySpread(items1, mapped, 0)] = obj3;
      tmp9 = items1;
    }
    tmp5(tmp9);
  }
  if (cResult[1] !== arr2) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(leaving) {
        return leaving.leaving;
      };
      cResult[3] = fn;
      tmp14 = fn;
    } else {
      tmp14 = cResult[3];
    }
    const someResult = arr2.some(tmp14);
    cResult[1] = arr2;
    cResult[2] = someResult;
    tmp13 = someResult;
  } else {
    tmp13 = cResult[2];
  }
  let closure_1 = tmp13;
  if (cResult[4] !== tmp13) {
    class A {
      constructor() {
        if (closure_1) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 180;
          closure_0 = setTimeout(() => closure_0(() => { /* body not rendered: F153196 */ }), 180);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    cResult[4] = tmp13;
    cResult[5] = A;
    tmp16 = A;
  } else {
    class A {
      constructor() {
        if (closure_1) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 180;
          closure_0 = setTimeout(() => closure_0(() => { /* body not rendered: F153196 */ }), 180);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[6] === tmp13) {
    class A {
      constructor() {
        if (closure_1) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 180;
          closure_0 = setTimeout(() => closure_0(() => { /* body not rendered: F153196 */ }), 180);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const effect = obj2.useEffect(tmp16, items2);
    return arr2;
  }
  items2 = [tmp13, arr2];
  cResult[6] = tmp13;
  cResult[7] = arr2;
  cResult[8] = items2;
}) : ((key) => {
  let arr;
  let tmp3;
  const f125905 = (leaving) => leaving.leaving;
  let obj = react;
  [arr, tmp3] = react.useState([]);
  let closure_0 = tmp3;
  _slicedToArray(react.useState([]), 2);
  const found = arr.find((leaving) => !leaving.leaving);
  key = undefined;
  if (found != null) {
    key = found.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== key) {
    closure_0 = key;
    const found1 = arr.filter((key) => key.key !== closure_0);
    const mapped = found1.map(f125892);
    let tmp7 = mapped;
    if (null != key) {
      items = [];
      const obj2 = { key, leaving: false };
      items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj2;
      tmp7 = items;
    }
    tmp3(tmp7);
  }
  items1 = [arr.some(f125905), arr];
  const someResult = arr.some(f125905);
  const effect = obj.useEffect(() => {
    if (closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return arr;
});
function reminderSlotTurn(arg0) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arg0[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("user" === tmp2.role) {
          break;
        } else if (metroRequire(tmp2)) {
          return tmp2;
        } else if (!hasOwnProperty(arg0, diff)) {
          return null;
        }
      }
      diff = diff - 1;
    }
    return null;
  }
  return null;
}
function hasOpenAsk(awaitingUser) {
  let tmp = null != awaitingUser.awaitingUser || null != awaitingUser.secretRequest || null != awaitingUser.settingsRequest;
  if (!tmp) {
    const intake = awaitingUser.intake;
    let num;
    if (intake != null) {
      num = intake.questions.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp = num > 0;
  }
  return tmp;
}
function reminderActivityAt(finished_at) {
  let num = finished_at.finished_at;
  const _Math = Math;
  const created_at = finished_at.created_at;
  if (num == null) {
    num = 0;
  }
  let num2 = finished_at.settled_at;
  if (num2 == null) {
    num2 = 0;
  }
  return max(created_at, num, num2);
}
function clampToObserved(arg0, arg1) {
  return Math.min(arg0, arg1);
}
function nextReminderLayers(arr, key) {
  let closure_0 = key;
  const found = arr.filter((key) => key.key !== closure_0);
  const mapped = found.map(f125892);
  let tmp3 = mapped;
  if (null != key) {
    items = [];
    const obj = { key, leaving: false };
    items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj;
    tmp3 = items;
  }
  return tmp3;
}
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsReminderSlot.tsx");

export const VIBEGRATIONS_REMINDER_IDLE_DELAY_MS = 60000;
export const VIBEGRATIONS_OUTDATED_BACKOFF_MS = items;
export const VIBEGRATIONS_REMINDER_LONG_ABSENCE_MS = 600000;
export const VIBEGRATIONS_REMINDER_ENTER_MS = 280;
export const VIBEGRATIONS_REMINDER_EXIT_MS = 180;
export const VIBEGRATIONS_REMINDERS = items1;
export { reminderSlotTurn };
export { hasOpenAsk };
export { reminderActivityAt };
export { clampToObserved };
export { selectVibegrationsReminder };
export const markVibegrationsReminderActivity = function markVibegrationsReminderActivity(projectId) {
  const value = map.get(projectId);
  if (value != null) {
    const item = value.forEach((fn) => fn());
  }
};
export const useVibegrationsReminder = tmp4;
export { nextReminderLayers };
export const useVibegrationsReminderLayers = tmp5;
