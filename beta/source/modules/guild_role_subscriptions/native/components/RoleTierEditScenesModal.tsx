// Module ID: 17570
// Function ID: 17571
// Name: RoleTierEditScenesModal
// Dependencies: [32, 19, 17557, 14750, 21, 4836, 38, 6795, 6413, 1115, 17571, 17556, 17572, 17592, 17595, 17597, 1613, 5039, 5910, 6421, 17599, 2]
// Exports: default

// Module 17570 (RoleTierEditScenesModal)
import _modDef38 from "module_38" /* 38 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
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
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
let closure_7 = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  let closure_5;
  let initialStack;
  let intl;
  let items2;
  let items3;
  let screens;
  _require = modalKey;
  function handleClose(arg0) {

  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  let tmp = closure_11();
  const tmp2 = onClose(closure_5(), 2);
  [react, closure_5] = tmp2;
  closure_6 = closure_6();
  let tmp3 = onClose(react.useState(0), 2);
  closure_7 = tmp3[1];
  const first = tmp3[0];
  let items = [modalKey];
  const top = modalKey(steps[16])().top;
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
  let tmp5 = modalKey(steps[18])(() => {
    let obj10;
    let obj12;
    let obj14;
    let obj16;
    let obj18;
    let obj5;
    let obj8;
    let stepScreenPropsMap;
    let sum;
    let tmp35;
    let tmp4;
    const headerRight = () => {
      let intl;
      const obj = {
        source: closure_2_1(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: intl.string(closure_2_0(steps[9]).t.cpT0Cq)
      };
      const HeaderActionButton = closure_2_0(steps[7]).HeaderActionButton;
      intl = closure_2_0(steps[9]).intl;
      return closure_2_8(HeaderActionButton, obj);
    };
    let tmp = handleClose;
    ({ steps, stepScreenPropsMap } = modalKey);
    let obj = {};
    let merged = Object.assign(modalKey, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
    const mapped = steps.map(orderify);
    let num = 0;
    if (0 < steps.length) {
      do {
        sum = num + 1;
        let tmp6 = mapped[sum];
        let scene1;
        let scene = mapped[num].scene;
        if (tmp6 != null) {
          scene1 = tmp6.scene;
        }
        if (scene1 == null) {
          scene1 = null;
        }
        let obj2 = { nextStep: scene1, stepsCount: tmp4 };
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
        const tmp5 = modalKey(steps[6]);
        const tmp6 = null != obj[GATING];
        tmp5(tmp6, "Props not provided in screen map for scene " + GATING);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = modalKey;
        const tmp4 = steps;
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
        const tmp3Result = tmp3(tmp4[10]);
        const merged4 = Object.assign(obj);
        return closure_2_8(tmp3Result, obj2);
      }
    };
    let merged2 = Object.assign(obj3);
    const GATING2 = constants.GATING;
    let closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj5 = {};
    } else {
      obj5 = stepScreenPropsMap[tmp13];
      if (obj5 == null) {
        obj5 = {};
      }
    }
    const obj6 = {};
    let merged3 = Object.assign(obj5);
    obj6[GATING] = obj4;
    let GROUP = tmp11.GROUP;
    const obj7 = {
      headerRight,
      render() {
        const GROUP = constants.GROUP;
        const tmp5 = modalKey(steps[6]);
        const tmp6 = null != obj[GROUP];
        tmp5(tmp6, "Props not provided in screen map for scene " + GROUP);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = modalKey;
        const tmp4 = steps;
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
        const tmp3Result = tmp3(tmp4[11]);
        const merged4 = Object.assign(obj);
        return closure_2_8(tmp3Result, obj2);
      }
    };
    let merged4 = Object.assign(obj3);
    const GROUP2 = tmp11.GROUP;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj8 = {};
    } else {
      obj8 = stepScreenPropsMap[tmp16];
      if (obj8 == null) {
        obj8 = {};
      }
    }
    const merged5 = Object.assign(obj8);
    obj6[GROUP] = obj7;
    let CHANNEL_BENEFITS = tmp11.CHANNEL_BENEFITS;
    const obj9 = {
      headerRight,
      render() {
        const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
        const tmp4 = closure_2_1(steps[6]);
        const tmp5 = null != obj[CHANNEL_BENEFITS];
        tmp4(tmp5, "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = steps;
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
        const GuildRoleSubscriptionTierChannelBenefitsModal = closure_2_0(tmp3[12]).GuildRoleSubscriptionTierChannelBenefitsModal;
        const merged4 = Object.assign(obj);
        return closure_2_8(GuildRoleSubscriptionTierChannelBenefitsModal, obj2);
      }
    };
    const merged6 = Object.assign(obj3);
    const CHANNEL_BENEFITS2 = tmp11.CHANNEL_BENEFITS;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj10 = {};
    } else {
      obj10 = stepScreenPropsMap[tmp19];
      if (obj10 == null) {
        obj10 = {};
      }
    }
    const merged7 = Object.assign(obj10);
    obj6[CHANNEL_BENEFITS] = obj9;
    let INTANGIBLE_BENEFITS = tmp11.INTANGIBLE_BENEFITS;
    const obj11 = {
      headerRight,
      render() {
        const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
        const tmp4 = closure_2_1(steps[6]);
        const tmp5 = null != obj[INTANGIBLE_BENEFITS];
        tmp4(tmp5, "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = steps;
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
        const GuildRoleSubscriptionTierIntangibleBenefitsModal = closure_2_0(tmp3[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal;
        const merged4 = Object.assign(obj);
        return closure_2_8(GuildRoleSubscriptionTierIntangibleBenefitsModal, obj2);
      }
    };
    const merged8 = Object.assign(obj3);
    const INTANGIBLE_BENEFITS2 = tmp11.INTANGIBLE_BENEFITS;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj12 = {};
    } else {
      obj12 = stepScreenPropsMap[tmp22];
      if (obj12 == null) {
        obj12 = {};
      }
    }
    const merged9 = Object.assign(obj12);
    obj6[INTANGIBLE_BENEFITS] = obj11;
    let CONFIRMATION = tmp11.CONFIRMATION;
    const obj13 = {
      headerRight,
      render() {
        const CONFIRMATION = constants.CONFIRMATION;
        const tmp5 = modalKey(steps[6]);
        const tmp6 = null != obj[CONFIRMATION];
        tmp5(tmp6, "Props not provided in screen map for scene " + CONFIRMATION);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = modalKey;
        const tmp4 = steps;
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
        const tmp3Result = tmp3(tmp4[13]);
        const merged4 = Object.assign(obj);
        return closure_2_8(tmp3Result, obj2);
      }
    };
    const merged10 = Object.assign(obj3);
    const CONFIRMATION2 = tmp11.CONFIRMATION;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj14 = {};
    } else {
      obj14 = stepScreenPropsMap[tmp25];
      if (obj14 == null) {
        obj14 = {};
      }
    }
    const merged11 = Object.assign(obj14);
    obj6[CONFIRMATION] = obj13;
    let DESIGN = tmp11.DESIGN;
    const obj15 = {
      headerRight,
      render() {
        const DESIGN = constants.DESIGN;
        const tmp5 = modalKey(steps[6]);
        const tmp6 = null != obj[DESIGN];
        tmp5(tmp6, "Props not provided in screen map for scene " + DESIGN);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = modalKey;
        const tmp4 = steps;
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
        const tmp3Result = tmp3(tmp4[14]);
        const merged4 = Object.assign(obj);
        return closure_2_8(tmp3Result, obj2);
      }
    };
    const merged12 = Object.assign(obj3);
    const DESIGN2 = tmp11.DESIGN;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj16 = {};
    } else {
      obj16 = stepScreenPropsMap[tmp28];
      if (obj16 == null) {
        obj16 = {};
      }
    }
    const merged13 = Object.assign(obj16);
    obj6[DESIGN] = obj15;
    let DETAILS = tmp11.DETAILS;
    const obj17 = {
      headerRight,
      render() {
        const DETAILS = constants.DETAILS;
        const tmp5 = modalKey(steps[6]);
        const tmp6 = null != obj[DETAILS];
        tmp5(tmp6, "Props not provided in screen map for scene " + DETAILS);
        const getRuntimeProps = tmp2.getRuntimeProps;
        let runtimeProps;
        const tmp = merged;
        const tmp3 = modalKey;
        const tmp4 = steps;
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
        const tmp3Result = tmp3(tmp4[15]);
        const merged4 = Object.assign(obj);
        return closure_2_8(tmp3Result, obj2);
      }
    };
    const merged14 = Object.assign(obj3);
    const DETAILS2 = tmp11.DETAILS;
    closure_1 = tmp;
    if (null == stepScreenPropsMap) {
      obj18 = {};
    } else {
      obj18 = stepScreenPropsMap[tmp31];
      if (obj18 == null) {
        obj18 = {};
      }
    }
    const obj19 = { screens: obj6, initialStack: tmp35 };
    const merged15 = Object.assign(obj18);
    obj6[DETAILS] = obj17;
    _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    const tmp33 = react;
    if (null == react) {
      const items = [{ name: memo[0] }];
      tmp35 = items;
      const obj20 = { name: memo[0] };
    } else {
      const items1 = [];
      let num2 = 0;
      tmp35 = items1;
      if (0 < memo.length) {
        const obj21 = { name: memo[num2] };
        items1.push(obj21);
        tmp35 = items1;
        while (memo[num2] !== tmp33) {
          num2 = num2 + 1;
          tmp35 = items1;
          if (num2 < arr.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    return obj19;
  });
  let obj = { children: items2 };
  ({ screens, initialStack } = tmp5);
  let obj2 = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(onDidFocus) {
      const name = onDidFocus.route.name;
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
  items2[1] = closure_8(modalKey(steps[20]), obj3);
  return memo(handleClose, obj);
};
