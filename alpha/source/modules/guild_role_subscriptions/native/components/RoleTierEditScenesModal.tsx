// Module ID: 18269
// Function ID: 18270
// Name: RoleTierEditScenesModal
// Dependencies: [32, 19, 18259, 15300, 21, 5090, 38, 7079, 5009, 1126, 18270, 18258, 18271, 18292, 18295, 18297, 558, 576, 1630, 5940, 6174, 6679, 18299, 2]

// Module 18269 (RoleTierEditScenesModal)
import _modDef38 from "module_38" /* 38 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 18271 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18259 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let tmp3;
const GuildRoleSubscriptionGroupDetailsModalDefault = tmp3(18258);
const GuildRoleSubscriptionGroupGatingModalDefault = tmp3(18270);
const GuildRoleSubscriptionTierConfirmationModalDefault = tmp3(18292);
const GuildRoleSubscriptionTierDesignModalDefault = tmp3(18295);
const GuildRoleSubscriptionTierDetailsModalDefault = tmp3(18297);
function orderify(scene, arg1) {
  let obj2;
  const sum = arg1 + 1;
  if (typeof scene === "string") {
    obj2 = { stepNumber: sum, scene };
    const obj = { stepNumber: sum, scene };
  } else {
    obj2 = { stepNumber: sum };
    const merged = Object.assign(scene);
  }
  return obj2;
}
function buildScreenMap(arg0, handleClose) {
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  let obj5;
  let obj8;
  let stepScreenPropsMap;
  let steps;
  let sum;
  let tmp3;
  const headerRight = () => {
    let intl;
    obj = {
      source: merged(dependencyMap[8]),
      onPress() {
        return closure_1_1(DETAILS2);
      },
      accessibilityLabel: intl.string(obj(dependencyMap[9]).t.cpT0Cq)
    };
    const HeaderActionButton = obj(dependencyMap[7]).HeaderActionButton;
    intl = obj(dependencyMap[9]).intl;
    return closure_2_8(HeaderActionButton, obj);
  };
  ({ steps, stepScreenPropsMap } = arg0);
  let obj = {};
  let merged = Object.assign(arg0, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
  const mapped = steps.map(orderify);
  let num = 0;
  if (0 < steps.length) {
    do {
      sum = num + 1;
      let tmp5 = mapped[sum];
      let tmp6 = num;
      let scene1;
      let scene = mapped[num].scene;
      if (tmp5 != null) {
        scene1 = tmp5.scene;
      }
      if (scene1 == null) {
        scene1 = null;
      }
      let obj2 = { nextStep: scene1, stepsCount: tmp3 };
      let merged1 = Object.assign(mapped[num]);
      obj[scene] = obj2;
      num = sum;
    } while (sum < steps.length);
  }
  const obj3 = {
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let GATING = constants.GATING;
  const obj4 = {
    headerRight,
    render() {
      const GATING = constants.GATING;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[GATING];
      tmp5(tmp6, "Props not provided in screen map for scene " + GATING);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionGroupGatingModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  let merged2 = Object.assign(obj3);
  const GATING2 = constants.GATING;
  let closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj5 = {};
  } else {
    obj5 = stepScreenPropsMap[tmp12];
    if (obj5 == null) {
      obj5 = {};
    }
  }
  const obj6 = {};
  let merged3 = Object.assign(obj5);
  obj6[GATING] = obj4;
  let GROUP = tmp10.GROUP;
  const obj7 = {
    headerRight,
    render() {
      const GROUP = constants.GROUP;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[GROUP];
      tmp5(tmp6, "Props not provided in screen map for scene " + GROUP);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionGroupDetailsModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  let merged4 = Object.assign(obj3);
  const GROUP2 = tmp10.GROUP;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj8 = {};
  } else {
    obj8 = stepScreenPropsMap[tmp15];
    if (obj8 == null) {
      obj8 = {};
    }
  }
  const merged5 = Object.assign(obj8);
  obj6[GROUP] = obj7;
  let CHANNEL_BENEFITS = tmp10.CHANNEL_BENEFITS;
  const obj9 = {
    headerRight,
    render() {
      const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
      const tmp4 = _modDef38;
      const tmp5 = null != obj[CHANNEL_BENEFITS];
      tmp4(tmp5, "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const GuildRoleSubscriptionTierChannelBenefitsModal = GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierChannelBenefitsModal;
      const merged4 = Object.assign(obj);
      return metroImportAll(GuildRoleSubscriptionTierChannelBenefitsModal, obj2);
    }
  };
  const merged6 = Object.assign(obj3);
  const CHANNEL_BENEFITS2 = tmp10.CHANNEL_BENEFITS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj10 = {};
  } else {
    obj10 = stepScreenPropsMap[tmp18];
    if (obj10 == null) {
      obj10 = {};
    }
  }
  const merged7 = Object.assign(obj10);
  obj6[CHANNEL_BENEFITS] = obj9;
  let INTANGIBLE_BENEFITS = tmp10.INTANGIBLE_BENEFITS;
  const obj11 = {
    headerRight,
    render() {
      const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
      const tmp4 = _modDef38;
      const tmp5 = null != obj[INTANGIBLE_BENEFITS];
      tmp4(tmp5, "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const GuildRoleSubscriptionTierIntangibleBenefitsModal = GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierIntangibleBenefitsModal;
      const merged4 = Object.assign(obj);
      return metroImportAll(GuildRoleSubscriptionTierIntangibleBenefitsModal, obj2);
    }
  };
  const merged8 = Object.assign(obj3);
  const INTANGIBLE_BENEFITS2 = tmp10.INTANGIBLE_BENEFITS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj12 = {};
  } else {
    obj12 = stepScreenPropsMap[tmp21];
    if (obj12 == null) {
      obj12 = {};
    }
  }
  const merged9 = Object.assign(obj12);
  obj6[INTANGIBLE_BENEFITS] = obj11;
  let CONFIRMATION = tmp10.CONFIRMATION;
  const obj13 = {
    headerRight,
    render() {
      const CONFIRMATION = constants.CONFIRMATION;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[CONFIRMATION];
      tmp5(tmp6, "Props not provided in screen map for scene " + CONFIRMATION);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierConfirmationModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged10 = Object.assign(obj3);
  const CONFIRMATION2 = tmp10.CONFIRMATION;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj14 = {};
  } else {
    obj14 = stepScreenPropsMap[tmp24];
    if (obj14 == null) {
      obj14 = {};
    }
  }
  const merged11 = Object.assign(obj14);
  obj6[CONFIRMATION] = obj13;
  let DESIGN = tmp10.DESIGN;
  const obj15 = {
    headerRight,
    render() {
      const DESIGN = constants.DESIGN;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[DESIGN];
      tmp5(tmp6, "Props not provided in screen map for scene " + DESIGN);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierDesignModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged12 = Object.assign(obj3);
  const DESIGN2 = tmp10.DESIGN;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj16 = {};
  } else {
    obj16 = stepScreenPropsMap[tmp27];
    if (obj16 == null) {
      obj16 = {};
    }
  }
  const merged13 = Object.assign(obj16);
  obj6[DESIGN] = obj15;
  let DETAILS = tmp10.DETAILS;
  const obj17 = {
    headerRight,
    render() {
      const DETAILS = constants.DETAILS;
      const tmp5 = _modDef38;
      const tmp6 = null != obj[DETAILS];
      tmp5(tmp6, "Props not provided in screen map for scene " + DETAILS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      const tmp = merged;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      obj = {};
      merged = Object.assign(tmp);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj2 = {};
      const tmp3Result = GuildRoleSubscriptionTierDetailsModalDefault;
      const merged4 = Object.assign(obj);
      return metroImportAll(tmp3Result, obj2);
    }
  };
  const merged14 = Object.assign(obj3);
  const DETAILS2 = tmp10.DETAILS;
  closure_1 = handleClose;
  if (null == stepScreenPropsMap) {
    obj18 = {};
  } else {
    obj18 = stepScreenPropsMap[tmp30];
    if (obj18 == null) {
      obj18 = {};
    }
  }
  const merged15 = Object.assign(obj18);
  obj6[DETAILS] = obj17;
  return obj6;
}
let react = react_mod;
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleTierEditScenesModal(modalKey) {
  let closure_4;
  let first;
  let initialStack;
  let items;
  let onClose;
  let screens;
  let steps;
  let tmp12;
  _require = modalKey;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(34);
  const tmp4 = closure_11();
  modalKey = modalKey.modalKey;
  ({ steps, onClose } = modalKey);
  const tmp5 = first(closure_5(), 2);
  first = tmp5[0];
  react = tmp7;
  const tmp8 = closure_6();
  closure_5 = tmp8;
  const tmp9 = first(react.useState(0), 2);
  closure_6 = tmp9[1];
  const first1 = tmp9[0];
  const top = modalKey(onClose[18])().top;
  if (cResult[0] !== modalKey) {
    const fn = function c() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(modalKey);
    };
    cResult[0] = modalKey;
    cResult[1] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[1];
  }
  let closure_7 = tmp12;
  if (cResult[2] === tmp12) {
    if (cResult[3] === onClose) {
      let tmp13;
      let arr;
      if (cResult[4] === tmp8) {
        tmp13 = cResult[5];
      }
      let closure_8 = tmp13;
      if (cResult[6] !== steps) {
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function k(scene) {
            if (typeof scene !== "string") {
              scene = scene.scene;
            }
            return scene;
          };
          let num2 = 8;
          cResult[8] = fn2;
          tmp15 = fn2;
        } else {
          tmp15 = cResult[8];
        }
        const mapped = steps.map(tmp15);
        cResult[6] = steps;
        cResult[7] = mapped;
        arr = mapped;
      } else {
        arr = cResult[7];
      }
      if (cResult[9] === arr) {
        let tmp17;
        if (cResult[10] === tmp5[1]) {
          tmp17 = cResult[11];
        }
        if (cResult[12] === first) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === modalKey) {
              let tmp18;
              let tmp21;
              if (cResult[15] === arr) {
                tmp18 = cResult[16];
              }
              ({ screens, initialStack } = modalKey(onClose[20])(tmp18));
              const _Symbol2 = Symbol;
              modalKey(onClose[20])(tmp18);
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[9]).intl;
                const stringResult = intl.string(tmp(onClose[9]).t["13/7kX"]);
                cResult[17] = stringResult;
                tmp21 = stringResult;
              } else {
                tmp21 = cResult[17];
              }
              if (cResult[18] === tmp17) {
                if (cResult[19] === initialStack) {
                  let tmp23;
                  let tmp26;
                  if (cResult[20] === screens) {
                    tmp23 = cResult[21];
                  }
                  if (cResult[22] !== top) {
                    let obj2 = { top };
                    cResult[22] = top;
                    cResult[23] = obj2;
                    tmp26 = obj2;
                  } else {
                    tmp26 = cResult[23];
                  }
                  if (cResult[24] === tmp4.stepsIndicator) {
                    let tmp27;
                    if (cResult[25] === tmp26) {
                      tmp27 = cResult[26];
                    }
                    const sum = first1 + 1;
                    if (cResult[27] === arr.length) {
                      if (cResult[28] === tmp27) {
                        let tmp29;
                        if (cResult[29] === sum) {
                          tmp29 = cResult[30];
                        }
                        if (cResult[31] === tmp29) {
                          let tmp32;
                          if (cResult[32] === tmp23) {
                            tmp32 = cResult[33];
                          }
                          return tmp32;
                        }
                        let obj3 = { children: items };
                        items = [tmp23, tmp29];
                        const tmp35 = closure_10(arr, obj3);
                        cResult[31] = tmp29;
                        cResult[32] = tmp23;
                        cResult[33] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                    const obj4 = { style: tmp27, current: sum, total: arr.length };
                    const tmp31 = closure_8(modalKey(onClose[22]), obj4);
                    cResult[27] = arr.length;
                    cResult[28] = tmp27;
                    cResult[29] = sum;
                    cResult[30] = tmp31;
                    tmp29 = tmp31;
                  }
                  let items1 = [tmp4.stepsIndicator, tmp26];
                  cResult[24] = tmp4.stepsIndicator;
                  cResult[25] = tmp26;
                  cResult[26] = items1;
                  tmp27 = items1;
                }
              }
              const obj5 = { screens, initialRouteStack: initialStack, onWillFocus: tmp17, headerBackTitle: tmp21 };
              const tmp25 = closure_8(tmp(onClose[21]).Navigator, obj5);
              cResult[18] = tmp17;
              cResult[19] = initialStack;
              cResult[20] = screens;
              cResult[21] = tmp25;
              tmp23 = tmp25;
            }
          }
        }
        const fn3 = function x() {
          let tmp3;
          const obj = { screens: buildScreenMap(modalKey, closure_8), initialStack: tmp3 };
          _modDef38(arr.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
          const tmp = first;
          if (null == first) {
            const items = [{ name: arr[0] }];
            tmp3 = items;
            const obj2 = { name: arr[0] };
          } else {
            const items1 = [];
            let num2 = 0;
            tmp3 = items1;
            if (0 < arr.length) {
              const obj3 = { name: arr[num2] };
              items1.push(obj3);
              tmp3 = items1;
              while (arr[num2] !== tmp) {
                num2 = num2 + 1;
                tmp3 = items1;
                if (num2 < arr.length) {
                  continue;
                } else {
                  break;
                }
                break;
              }
            }
          }
          return obj;
        };
        cResult[12] = first;
        cResult[13] = tmp13;
        cResult[14] = modalKey;
        cResult[15] = arr;
        cResult[16] = fn3;
        tmp18 = fn3;
      }
      function handleSceneWillFocus(route) {
        const name = route.route.name;
        if (null != name) {
          closure_4(name);
          const findIndexResult = arr.findIndex((item) => item === name);
          if (findIndexResult >= 0) {
            closure_6(findIndexResult);
          }
        }
      }
      cResult[9] = arr;
      cResult[10] = tmp5[1];
      cResult[11] = handleSceneWillFocus;
      tmp17 = handleSceneWillFocus;
    }
  }
  function handleClose(arg0) {
    if (onClose != null) {
      tmp(arg0);
    }
    closure_7();
    closure_5();
  }
  cResult[2] = tmp12;
  cResult[3] = onClose;
  cResult[4] = tmp8;
  cResult[5] = handleClose;
  tmp13 = handleClose;
}) : (function RoleTierEditScenesModal(modalKey) {
  let closure_5;
  let initialStack;
  let intl;
  let items2;
  let items3;
  let screens;
  const f134229 = () => {
    let tmp3;
    const obj = { screens: buildScreenMap(modalKey, handleClose), initialStack: tmp3 };
    _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    const tmp = react;
    if (null == react) {
      const items = [{ name: memo[0] }];
      tmp3 = items;
      const obj2 = { name: memo[0] };
    } else {
      const items1 = [];
      let num2 = 0;
      tmp3 = items1;
      if (0 < memo.length) {
        const obj3 = { name: memo[num2] };
        items1.push(obj3);
        tmp3 = items1;
        while (memo[num2] !== tmp) {
          num2 = num2 + 1;
          tmp3 = items1;
          if (num2 < arr.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    return obj;
  };
  _require = modalKey;
  function handleClose(arg0) {
    if (onClose != null) {
      tmp(arg0);
    }
    closure_8();
    closure_6();
  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  let tmp = closure_11();
  const tmp2 = onClose(closure_5(), 2);
  [react, closure_5] = tmp2;
  closure_6 = closure_6();
  let tmp3 = onClose(react.useState(0), 2);
  let closure_7 = tmp3[1];
  const first = tmp3[0];
  let items = [modalKey];
  const top = modalKey(steps[18])().top;
  let closure_8 = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(modalKey);
  }, items);
  let items1 = [steps];
  const memo = react.useMemo(() => steps.map((scene) => {
    if (typeof scene !== "string") {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  let obj = { children: items2 };
  ({ screens, initialStack } = modalKey(steps[20])(f134229));
  const tmp5 = modalKey(steps[20])(f134229);
  let obj2 = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus: function handleSceneWillFocus(route) {
      const name = route.route.name;
      if (null != name) {
        closure_5(name);
        const findIndexResult = memo.findIndex((item) => item === name);
        if (findIndexResult >= 0) {
          closure_7(findIndexResult);
        }
      }
    },
    headerBackTitle: intl.string(require("intl").t["13/7kX"])
  };
  const Navigator = require("Navigator").Navigator;
  intl = require("intl").intl;
  items2 = [closure_8(Navigator, obj2), ];
  let obj3 = { style: items3, current: first + 1, total: memo.length };
  items3 = [tmp.stepsIndicator, { top }];
  items2[1] = closure_8(modalKey(steps[22]), obj3);
  return memo(handleClose, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default tmp4;
