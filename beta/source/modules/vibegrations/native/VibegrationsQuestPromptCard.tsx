// Module ID: 17056
// Function ID: 17057
// Name: VibegrationsQuestPromptCard
// Dependencies: [5, 32, 19, 17, 7944, 1186, 1078, 21, 4758, 580, 558, 568, 15372, 5666, 7942, 504, 7965, 17057, 4497, 4759, 15380, 10564, 7969, 4469, 10570, 4754, 1119, 3682, 5188, 5824, 2]

// Module 17056 (VibegrationsQuestPromptCard)
import nativeDefault from "native" /* 580 */;
import _modDef3682 from "module_3682" /* 3682 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import timing from "timing" /* 4759 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import VibegrationsQuestPrompt from "VibegrationsQuestPrompt" /* 17057 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7944 */;
import ThemeStore from "ThemeStore" /* 1186 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function sameDeliveredQuestState(quest, quest2) {
  return quest.quest === quest2.quest && quest.overridden === quest2.overridden && quest.gatesClosed === quest2.gatesClosed;
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1078).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { root: null, opaque: null, body: null, header: null, tile: null, copy: null, actions: null, action: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj2.root = rect;
obj2.opaque = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj2.body = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
obj2.tile = size;
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let watchableQuest = _require;
  let watchableQuestResult4 = dependencyMap;
  const cResult = require("c").c(10);
  const obj = require("c");
  const adDecisionForPlacement = require("useQuestForPlacement").useAdDecisionForPlacement(require("QuestTypes").AdPlacement.MOBILE_HOME_DOCK_AREA);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  if (cResult[0] !== creative) {
    const deliveredQuestId = watchableQuest(7942).getDeliveredQuestId(creative);
    cResult[0] = creative;
    cResult[1] = deliveredQuestId;
    let tmp5 = deliveredQuestId;
    const watchableQuestResult = watchableQuest(7942);
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const fn = function l() {
      const questPreviewOverride = QuestStore.getQuestPreviewOverride(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      let tmp4 = null;
      if (null != closure_0) {
        const quests = tmp.quests;
        value = quests.get(tmp3);
        if (value == null) {
          value = null;
        }
        tmp4 = value;
      }
      let tmp6 = questPreviewOverride;
      if (questPreviewOverride == null) {
        tmp6 = tmp4;
      }
      return { quest: tmp6, overridden: null != questPreviewOverride, gatesClosed: QuestStore.isQuestAccessSuspended || null != QuestStore.questEnrollmentBlockedUntil };
    };
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const obj2 = require("useQuestForPlacement");
  const stateFromStores = watchableQuest(504).useStateFromStores(tmp7, tmp9, tmp10, sameDeliveredQuestState);
  ({ quest, overridden, gatesClosed } = stateFromStores);
  let tmp12 = null;
  if (null != quest) {
    tmp12 = null;
    if (watchableQuestResult2.hasWatchVideoOnMobileTasks(quest)) {
      if (cResult[6] === gatesClosed) {
        if (cResult[7] === overridden) {
        }
      }
      watchableQuest = watchableQuest(17057).watchableQuest;
      const obj3 = { overridden, gatesClosed };
      watchableQuestResult4 = watchableQuest(quest, obj3);
      cResult[6] = gatesClosed;
      cResult[7] = overridden;
      cResult[8] = quest;
      cResult[9] = watchableQuestResult4;
      const watchableQuestResult3 = watchableQuest(17057);
    }
    watchableQuestResult2 = watchableQuest(7965);
  }
  return tmp12;
}) : (() => {
  const adDecisionForPlacement = deliveredQuestId(15372).useAdDecisionForPlacement(deliveredQuestId(5666).AdPlacement.MOBILE_HOME_DOCK_AREA);
  const obj = deliveredQuestId(15372);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  deliveredQuestId = deliveredQuestId(7942).getDeliveredQuestId(creative);
  const obj2 = deliveredQuestId(7942);
  const items = [QuestStore];
  const items1 = [deliveredQuestId];
  const stateFromStores = deliveredQuestId(504).useStateFromStores(items, () => {
    const questPreviewOverride = QuestStore.getQuestPreviewOverride(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
    let tmp4 = null;
    if (null != deliveredQuestId) {
      const quests = tmp.quests;
      value = quests.get(tmp3);
      if (value == null) {
        value = null;
      }
      tmp4 = value;
    }
    let tmp6 = questPreviewOverride;
    if (questPreviewOverride == null) {
      tmp6 = tmp4;
    }
    return { quest: tmp6, overridden: null != questPreviewOverride, gatesClosed: QuestStore.isQuestAccessSuspended || null != QuestStore.questEnrollmentBlockedUntil };
  }, items1, sameDeliveredQuestState);
  const quest = stateFromStores.quest;
  let watchableQuestResult = null;
  if (null != quest) {
    watchableQuestResult = null;
    if (tmpResult3.hasWatchVideoOnMobileTasks(quest)) {
      const obj3 = { overridden: tmp7, gatesClosed: tmp8 };
      watchableQuestResult = tmp(17057).watchableQuest(quest, obj3);
      const tmpResult4 = tmp(17057);
    }
    tmpResult3 = tmp(7965);
  }
  return watchableQuestResult;
});
let closure_16 = { code: "function VibegrationsQuestPromptCardTsx1(finished){const{runOnJS,unmount}=this.__closure;if(finished===true){runOnJS(unmount)();}}" };
const __initData = { code: "function VibegrationsQuestPromptCardTsx2(){const{progress}=this.__closure;return{opacity:progress.get()};}" };
let closure_18 = { code: "function VibegrationsQuestPromptCardTsx3(finished){const{runOnJS,unmount}=this.__closure;if(finished===true)runOnJS(unmount)();}" };
const __initData2 = { code: "function VibegrationsQuestPromptCardTsx4(){const{progress}=this.__closure;return{opacity:progress.get()};}" };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  let obj = require("c");
  const obj2 = noop;
  [tmp5, tmp6] = noop.useState(arg0);
  importDefault = tmp6;
  let tmp7 = arg0;
  if (arg0) {
    tmp7 = !tmp5;
  }
  if (tmp7) {
    tmp6(true);
  }
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
  let num = 0;
  if (arg0) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function _() {
      return tmp6(false);
    };
    cResult[0] = fn;
    let unmount = fn;
  } else {
    unmount = cResult[0];
  }
  if (cResult[1] === sharedValue) {
    if (cResult[2] === arg0) {
      let tmp11 = cResult[3];
      let tmp12 = cResult[4];
    }
    const effect = obj2.useEffect(tmp11, tmp12);
    class S {
      constructor() {
        obj = { opacity: closure_2.get() };
        return obj;
      }
    }
    const obj3 = { progress: sharedValue };
    S.__closure = obj3;
    S.__workletHash = 14712862852075;
    S.__initData = __initData;
    const animatedStyle = tmp(tmp2[18]).useAnimatedStyle(S);
    if (cResult[5] === tmp5) {
      if (cResult[6] === animatedStyle) {
        let tmp16 = cResult[7];
      }
      return tmp16;
    }
    const obj4 = { mounted: tmp5, opacity: animatedStyle };
    cResult[5] = tmp5;
    cResult[6] = animatedStyle;
    cResult[7] = obj4;
    tmp16 = obj4;
    const tmpResult2 = tmp(tmp2[18]);
  }
  const fn2 = function p() {
    const tmp2 = timing;
    const withTiming = tmp2.withTiming;
    if (closure_0) {
      const result = set(withTiming(1, { duration: 250 }));
    } else {
      const fn = function s(arg0) {
        if (true === arg0) {
          closure_0(sharedValue[18]).runOnJS(unmount)();
          const obj = closure_0(sharedValue[18]);
        }
      };
      let obj = { runOnJS: ReanimatedRexport.runOnJS, unmount };
      fn.__closure = obj;
      fn.__workletHash = 9961134287921;
      fn.__initData = __initData;
      const result1 = set(withTiming(0, { duration: 150 }, "respect-motion-settings", fn));
    }
  };
  const items = [sharedValue, unmount, arg0];
  cResult[1] = sharedValue;
  cResult[2] = arg0;
  cResult[3] = fn2;
  cResult[4] = items;
  tmp12 = items;
  tmp11 = fn2;
}) : ((arg0) => {
  _require = arg0;
  [tmp2, tmp3] = noop.useState(arg0);
  importDefault = tmp3;
  let tmp4 = arg0;
  if (arg0) {
    tmp4 = !tmp2;
  }
  if (tmp4) {
    tmp3(true);
  }
  const tmp = _slicedToArray(noop.useState(arg0), 2);
  const tmp6 = _require;
  const tmp7 = sharedValue;
  let num = 0;
  if (arg0) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  const unmount = obj.useCallback(() => tmp3(false), []);
  const items = [sharedValue, unmount, arg0];
  const effect = obj.useEffect(() => {
    const tmp2 = timing;
    const withTiming = tmp2.withTiming;
    if (closure_0) {
      const result = set(withTiming(1, { duration: 250 }));
    } else {
      const fn = function s(arg0) {
        if (true === arg0) {
          closure_0(sharedValue[18]).runOnJS(unmount)();
          const obj = closure_0(sharedValue[18]);
        }
      };
      let obj = { runOnJS: ReanimatedRexport.runOnJS, unmount };
      fn.__closure = obj;
      fn.__workletHash = 7562751789749;
      fn.__initData = __initData;
      const result1 = set(withTiming(0, { duration: 150 }, "respect-motion-settings", fn));
    }
  }, items);
  const obj3 = { mounted: tmp2, opacity: null };
  const obj2 = require("ReanimatedRexport");
  let fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 6604870552877;
  fn.__initData = __initData2;
  obj3.opacity = tmp6(tmp7[18]).useAnimatedStyle(fn);
  return obj3;
});
ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsQuestPromptCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((open) => {
  const cResult = require("c").c(52);
  open = open.open;
  const tmp4 = closure_13();
  const tmp5 = closure_15();
  _require = tmp5;
  const tmp7 = _slicedToArray(noop.useState(require("VibegrationsQuestPrompt").isQuestPromptDismissed), 2);
  importDefault = tmp7[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function h() {
      return state.getState().theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let obj = require("c");
  let obj2 = noop;
  const tmp6 = _slicedToArray;
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  let tmp13 = open;
  if (open) {
    tmp13 = !tmp7[0];
  }
  if (tmp13) {
    tmp13 = null != tmp5;
  }
  const tmpResult = require("initialize");
  ({ opacity, mounted } = closure_20(tmp13));
  const tmp6Result = tmp6(obj2.useState(tmp5), 2);
  const first = tmp6Result[0];
  let tmp18 = null != tmp5;
  if (tmp18) {
    tmp18 = tmp5 !== first;
  }
  if (tmp18) {
    tmp6Result[1](tmp5);
  }
  let tmp20 = tmp5;
  if (tmp5 == null) {
    tmp20 = first;
  }
  if (cResult[2] !== tmp5) {
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              if (null != tmp2) {
                const QUEST_BAR_MOBILE = tmp2(5666).QuestContent.QUEST_BAR_MOBILE;
                closure_128_0 = QUEST_BAR_MOBILE;
                const userStatus = tmp2.userStatus;
                let enrolledAt;
                if (userStatus != null) {
                  enrolledAt = userStatus.enrolledAt;
                }
                if (null == enrolledAt) {
                  const obj5 = { questContent: tmp2(5666).QuestContent.QUEST_BAR_MOBILE, questContentCTA: tmp2(7969).QuestContentCTA.START_QUEST, sourceQuestContent: QUEST_BAR_MOBILE };
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: tmp2(10564).enrollInQuest(tmp2.id, obj5), done: false };
                  return obj6;
                } else {
                  const obj7 = { questId: tmp2.id, sourceQuestContent: QUEST_BAR_MOBILE };
                  tmp3(15380)(obj7);
                }
              }
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value.type === tmp2(10564).QuestEnrollmentResultType.SUCCESS) {
              const obj8 = { questId: tmp2.id, sourceQuestContent: closure_128_0 };
              tmp3(15380)(obj8);
            }
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    });
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[2] = tmp5;
    cResult[3] = fn2;
    let tmp21 = fn2;
  } else {
    tmp21 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function k() {
      VibegrationsQuestPrompt.dismissQuestPrompt();
      closure_1(true);
    };
    cResult[4] = fn3;
    let tmp23 = fn3;
  } else {
    tmp23 = cResult[4];
  }
  if (mounted) {
    if (null != tmp20) {
      if (cResult[5] !== stateFromStores) {
        const tmp26 = tmp(4469).isThemeDark(stateFromStores) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        cResult[5] = stateFromStores;
        cResult[6] = tmp26;
        const tmpResult3 = tmp(4469);
      } else {
        if (cResult[7] === tmp20) {
          if (cResult[8] === tmp24) {
            let tmp28 = cResult[9];
          }
          const url = tmp28.url;
          if (cResult[10] === opacity) {
            if (cResult[11] === tmp4.root) {
              let tmp30 = cResult[12];
            }
            let str = "none";
            if (open) {
              str = "auto";
            }
            if (cResult[13] === tmp4.tile) {
              if (cResult[14] === url) {
                let tmp34 = cResult[15];
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { variant: "text-md/semibold", color: "text-strong", children: null };
                const intl = tmp(1119).intl;
                obj3.children = intl.string(_modDef3682["09LJ+I"]);
                const tmp41 = closure_11(tmp(4754).Text, obj3);
                cResult[16] = tmp41;
                let tmp38 = tmp41;
              } else {
                tmp38 = cResult[16];
              }
              if (cResult[17] !== tmp20.config.messages.questName) {
                const intl2 = tmp(1119).intl;
                let obj4 = { questName: tmp20.config.messages.questName };
                const formatResult = intl2.format(tmp(1119).t.EQa7os, obj4);
                cResult[17] = tmp20.config.messages.questName;
                cResult[18] = formatResult;
                let tmp42 = formatResult;
              } else {
                tmp42 = cResult[18];
              }
              if (cResult[19] !== tmp42) {
                let obj5 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, children: tmp42 };
                const tmp46 = closure_11(tmp(4754).Text, obj5);
                cResult[19] = tmp42;
                cResult[20] = tmp46;
                let tmp44 = tmp46;
              } else {
                tmp44 = cResult[20];
              }
              if (cResult[21] === tmp4.copy) {
                if (cResult[22] === tmp44) {
                  let tmp47 = cResult[23];
                }
                if (cResult[24] === tmp4.header) {
                  if (cResult[25] === tmp34) {
                    if (cResult[26] === tmp47) {
                      let tmp51 = cResult[27];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
                      const intl3 = tmp(1119).intl;
                      obj6.text = intl3.string(_modDef3682.egO5fO);
                      obj6.onPress = tmp23;
                      const tmp58 = closure_11(tmp(5188).Button, obj6);
                      cResult[28] = tmp58;
                      let tmp55 = tmp58;
                    } else {
                      tmp55 = cResult[28];
                    }
                    if (cResult[29] !== tmp4.action) {
                      let obj7 = { style: tmp4.action, children: tmp55 };
                      const tmp62 = closure_11(closure_7, obj7);
                      cResult[29] = tmp4.action;
                      cResult[30] = tmp62;
                      let tmp59 = tmp62;
                    } else {
                      tmp59 = cResult[30];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = tmp(1119).intl;
                      const stringResult = intl4.string(tmp(1119).t.kUQLMJ);
                      cResult[31] = stringResult;
                      let tmp63 = stringResult;
                    } else {
                      tmp63 = cResult[31];
                    }
                    if (cResult[32] !== tmp21) {
                      let obj8 = { variant: "primary", size: "sm", text: tmp63, onPress: tmp21 };
                      const tmp67 = closure_11(tmp(5188).Button, obj8);
                      cResult[32] = tmp21;
                      cResult[33] = tmp67;
                      let tmp65 = tmp67;
                    } else {
                      tmp65 = cResult[33];
                    }
                    if (cResult[34] === tmp4.action) {
                      if (cResult[35] === tmp65) {
                        let tmp68 = cResult[36];
                      }
                      if (cResult[37] === tmp4.actions) {
                        if (cResult[38] === tmp59) {
                          if (cResult[39] === tmp68) {
                            let tmp72 = cResult[40];
                          }
                          if (cResult[41] === tmp4.body) {
                            if (cResult[42] === tmp51) {
                              if (cResult[43] === tmp72) {
                                let tmp76 = cResult[44];
                              }
                              if (cResult[45] === tmp4.opaque) {
                                if (cResult[46] === tmp76) {
                                  let tmp81 = cResult[47];
                                }
                                if (cResult[48] === tmp81) {
                                  if (cResult[49] === tmp30) {
                                    if (cResult[50] === str) {
                                      let tmp85 = cResult[51];
                                    }
                                    return tmp85;
                                  }
                                }
                                const obj9 = { style: tmp30, pointerEvents: str, children: tmp81 };
                                const tmp88 = closure_11(ReanimatedRexportDefault.View, obj9);
                                cResult[48] = tmp81;
                                cResult[49] = tmp30;
                                cResult[50] = str;
                                cResult[51] = tmp88;
                                tmp85 = tmp88;
                              }
                              const obj10 = { style: tmp31, children: tmp76 };
                              const tmp84 = closure_11(closure_7, obj10);
                              cResult[45] = tmp4.opaque;
                              cResult[46] = tmp76;
                              cResult[47] = tmp84;
                              tmp81 = tmp84;
                            }
                          }
                          const obj11 = { variant: "primary", shadow: "high", children: null };
                          const obj12 = { style: tmp32, children: null };
                          const items1 = [tmp51, tmp72];
                          obj12.children = items1;
                          obj11.children = closure_12(closure_7, obj12);
                          const tmp80 = closure_11(tmp(5824).Card, obj11);
                          cResult[41] = tmp4.body;
                          cResult[42] = tmp51;
                          cResult[43] = tmp72;
                          cResult[44] = tmp80;
                          tmp76 = tmp80;
                        }
                      }
                      const obj13 = { style: tmp4.actions, children: null };
                      const items2 = [tmp59, tmp68];
                      obj13.children = items2;
                      const tmp75 = closure_12(closure_7, obj13);
                      cResult[37] = tmp4.actions;
                      cResult[38] = tmp59;
                      cResult[39] = tmp68;
                      cResult[40] = tmp75;
                      tmp72 = tmp75;
                    }
                    const obj14 = { style: tmp4.action, children: tmp65 };
                    const tmp71 = closure_11(closure_7, obj14);
                    cResult[34] = tmp4.action;
                    cResult[35] = tmp65;
                    cResult[36] = tmp71;
                    tmp68 = tmp71;
                  }
                }
                const obj15 = { style: tmp33, children: null };
                const items3 = [tmp34, tmp47];
                obj15.children = items3;
                const tmp54 = closure_12(closure_7, obj15);
                cResult[24] = tmp4.header;
                cResult[25] = tmp34;
                cResult[26] = tmp47;
                cResult[27] = tmp54;
                tmp51 = tmp54;
              }
              const obj16 = { style: tmp4.copy, children: null };
              const items4 = [tmp38, tmp44];
              obj16.children = items4;
              const tmp50 = closure_12(closure_7, obj16);
              cResult[21] = tmp4.copy;
              cResult[22] = tmp44;
              cResult[23] = tmp50;
              tmp47 = tmp50;
            }
            let tmp35 = null;
            if ("" !== url) {
              const obj17 = { accessibilityIgnoresInvertColors: true, source: null, style: null };
              const obj18 = { uri: url };
              obj17.source = obj18;
              obj17.style = tmp4.tile;
              tmp35 = closure_11(closure_6, obj17);
            }
            cResult[13] = tmp4.tile;
            cResult[14] = url;
            cResult[15] = tmp35;
            tmp34 = tmp35;
          }
          const items5 = [tmp4.root, opacity];
          cResult[10] = opacity;
          cResult[11] = tmp4.root;
          cResult[12] = items5;
          tmp30 = items5;
        }
        const questAsset = tmp(10570).getQuestAsset(tmp20, tmp(10570).QuestAssetType.GAME_TILE, tmp24);
        cResult[7] = tmp20;
        cResult[8] = cResult[6];
        cResult[9] = questAsset;
        tmp28 = questAsset;
        const tmpResult4 = tmp(10570);
      }
    }
  }
  return null;
}) : ((open) => {
  open = open.open;
  importDefault = undefined;
  const tmp = closure_13();
  const tmp2 = closure_15();
  _require = tmp2;
  [tmp7, c1] = noop.useState(require("VibegrationsQuestPrompt").isQuestPromptDismissed);
  const tmp5 = _slicedToArray;
  const tmp6 = _slicedToArray(noop.useState(require("VibegrationsQuestPrompt").isQuestPromptDismissed), 2);
  const items = [ThemeStore];
  let tmp10 = open;
  const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState().theme);
  if (open) {
    tmp10 = !tmp7;
  }
  if (tmp10) {
    tmp10 = null != tmp2;
  }
  let obj2 = require("initialize");
  ({ mounted, opacity } = closure_20(tmp10));
  const tmp5Result = tmp5(noop.useState(tmp2), 2);
  const first = tmp5Result[0];
  let tmp15 = null != tmp2;
  if (tmp15) {
    tmp15 = tmp2 !== first;
  }
  if (tmp15) {
    tmp5Result[1](tmp2);
  }
  let tmp17 = tmp2;
  if (tmp2 == null) {
    tmp17 = first;
  }
  const items1 = [tmp2];
  const callback = obj.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            if (null != tmp2) {
              const QUEST_BAR_MOBILE = tmp2(5666).QuestContent.QUEST_BAR_MOBILE;
              closure_128_0 = QUEST_BAR_MOBILE;
              const userStatus = tmp2.userStatus;
              let enrolledAt;
              if (userStatus != null) {
                enrolledAt = userStatus.enrolledAt;
              }
              if (null == enrolledAt) {
                const obj5 = { questContent: tmp2(5666).QuestContent.QUEST_BAR_MOBILE, questContentCTA: tmp2(7969).QuestContentCTA.START_QUEST, sourceQuestContent: QUEST_BAR_MOBILE };
                dependencyMap = 1;
                c3 = 1;
                const obj6 = { value: tmp2(10564).enrollInQuest(tmp2.id, obj5), done: false };
                return obj6;
              } else {
                const obj7 = { questId: tmp2.id, sourceQuestContent: QUEST_BAR_MOBILE };
                tmp5(15380)(obj7);
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value.type === tmp2(10564).QuestEnrollmentResultType.SUCCESS) {
            const obj8 = { questId: closure_129_0.id, sourceQuestContent: closure_128_0 };
            tmp5(15380)(obj8);
          }
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  }), items1);
  if (mounted) {
    if (null != tmp17) {
      const tmp3Result = tmp3(10570);
      const url = tmp3Result.getQuestAsset(tmp17, tmp3(10570).QuestAssetType.GAME_TILE, tmp3(4469).isThemeDark(stateFromStores) ? tmp26.DARK : tmp26.LIGHT).url;
      const obj3 = { style: null, pointerEvents: null, children: null };
      const items2 = [tmp.root, opacity];
      obj3.style = items2;
      let str = "none";
      if (open) {
        str = "auto";
      }
      obj3.pointerEvents = str;
      let obj4 = { style: tmp.opaque, children: null };
      let obj5 = { style: tmp.body, children: null };
      let obj6 = { style: tmp.header, children: null };
      let tmp20Result = null;
      if ("" !== url) {
        let obj7 = { accessibilityIgnoresInvertColors: true, source: null, style: null };
        let obj8 = { uri: url };
        obj7.source = obj8;
        obj7.style = tmp.tile;
        tmp20Result = tmp20(closure_6, obj7);
      }
      const obj9 = { variant: "primary", shadow: "high", children: null };
      const items3 = [tmp20Result, ];
      const obj10 = { style: tmp.copy, children: null };
      const obj11 = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl = tmp3(1119).intl;
      obj11.children = intl.string(_modDef3682["09LJ+I"]);
      const items4 = [closure_11(tmp3(4754).Text, obj11), ];
      const obj12 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, children: null };
      const intl2 = tmp3(1119).intl;
      const obj13 = { questName: tmp17.config.messages.questName };
      obj12.children = intl2.format(tmp3(1119).t.EQa7os, obj13);
      items4[1] = closure_11(tmp3(4754).Text, obj12);
      obj10.children = items4;
      items3[1] = closure_12(closure_7, obj10);
      obj6.children = items3;
      const items5 = [closure_12(closure_7, obj6), ];
      const obj14 = { style: tmp.actions, children: null };
      const obj15 = { style: tmp.action, children: null };
      const obj16 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp3(1119).intl;
      obj16.text = intl3.string(_modDef3682.egO5fO);
      obj16.onPress = tmp19;
      obj15.children = closure_11(tmp3(5188).Button, obj16);
      const items6 = [closure_11(closure_7, obj15), ];
      const obj17 = { style: tmp.action, children: null };
      const obj18 = { variant: "primary", size: "sm", text: null, onPress: null };
      const intl4 = tmp3(1119).intl;
      obj18.text = intl4.string(tmp3(1119).t.kUQLMJ);
      obj18.onPress = callback;
      obj17.children = closure_11(tmp3(5188).Button, obj18);
      items6[1] = closure_11(closure_7, obj17);
      obj14.children = items6;
      items5[1] = closure_12(closure_7, obj14);
      obj5.children = items5;
      obj9.children = closure_12(closure_7, obj5);
      obj4.children = closure_11(tmp3(5824).Card, obj9);
      obj3.children = closure_11(closure_7, obj4);
      return closure_11(ReanimatedRexportDefault.View, obj3);
    }
  }
  return null;
});
