// Module ID: 16437
// Function ID: 128080
// Name: getComponentPropsForScreen
// Dependencies: [57, 31, 16424, 14094, 33, 4130, 44, 5788, 7607, 1212, 16438, 16423, 16439, 16459, 16462, 16464, 1557, 4337, 5450, 5519, 16466, 2]
// Exports: default

// Module 16437 (getComponentPropsForScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getComponentPropsForScreen(arg0, arg1, arg2) {
  let obj = arg1[arg0];
  let runtimeProps;
  importDefault(44)(null != obj, "Props not provided in screen map for scene " + arg0);
  if (null != obj.getRuntimeProps) {
    runtimeProps = obj.getRuntimeProps();
  }
  if (null == runtimeProps) {
    runtimeProps = {};
  }
  obj = {};
  const merged = Object.assign(arg2);
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(runtimeProps);
  let extraProps = obj.extraProps;
  if (null == extraProps) {
    extraProps = [];
  }
  const merged3 = Object.assign(extraProps);
  return obj;
}
function getScreenPropsForScene(arg0, arg1) {
  if (null == arg1) {
    return {};
  } else {
    let obj = arg1[arg0];
    if (null == obj) {
      obj = {};
    }
    return obj;
  }
}
function getHeaderRight(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return () => {
    const obj = {
      source: callback2(outer1_2[8]),
      onPress() {
        return outer1_1(outer1_0);
      }
    };
    const intl = callback(outer1_2[9]).intl;
    obj.accessibilityLabel = intl.string(callback(outer1_2[9]).t.cpT0Cq);
    return outer1_8(callback(outer1_2[7]).HeaderActionButton, obj);
  };
}
function buildInitialRouteStack(arg0, arg1) {
  importDefault(44)(arg0.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
  if (null == arg1) {
    let obj = { name: arg0[0] };
    const items = [obj];
    return items;
  } else {
    const items1 = [];
    let num = 0;
    if (0 < arg0.length) {
      obj = { name: arg0[num] };
      items1.push(obj);
      while (arg0[num] !== arg1) {
        num = num + 1;
        if (num >= arg0.length) {
          break;
        }
      }
    }
    return items1;
  }
}
function orderify(scene) {
  const sum = arg1 + 1;
  if ("string" === typeof scene) {
    let obj = { stepNumber: sum, scene };
  } else {
    obj = {};
    const merged = Object.assign(scene);
    obj["stepNumber"] = sum;
  }
  return obj;
}
function buildScreenMap(arg0, arg1) {
  let stepScreenPropsMap;
  let steps;
  ({ steps, stepScreenPropsMap } = arg0);
  let obj = Object.create(null);
  let num = 0;
  obj.steps = 0;
  obj.stepScreenPropsMap = 0;
  let merged = Object.assign(arg0, obj);
  obj = {};
  const mapped = steps.map(orderify);
  if (0 < steps.length) {
    do {
      let tmp5 = mapped[num + 1];
      let scene;
      if (null != tmp5) {
        scene = tmp5.scene;
      }
      let tmp7 = null;
      if (null != scene) {
        tmp7 = scene;
      }
      obj = {};
      let tmp8 = obj;
      let merged1 = Object.assign(mapped[num]);
      obj["nextStep"] = tmp7;
      obj["stepsCount"] = tmp4;
      obj[mapped[num].scene] = obj;
      num = num + 1;
    } while (num < steps.length);
  }
  return (function getScreens(arg0, merged, arg2, stepScreenPropsMap) {
    let closure_0 = arg0;
    let closure_1 = merged;
    let obj = {
      fullscreen: true,
      headerTitle() {
        return null;
      }
    };
    obj = {};
    obj = {};
    merged = Object.assign(obj);
    obj["headerRight"] = outer1_14(outer1_7.GATING, arg2);
    const merged1 = Object.assign(outer1_13(outer1_7.GATING, stepScreenPropsMap));
    obj["render"] = function render() {
      const obj = {};
      const tmp = outer2_12(outer2_7.GATING, closure_0, closure_1);
      const merged = Object.assign(tmp);
      return outer2_8(outer2_1(outer2_2[10]), obj);
    };
    obj[outer1_7.GATING] = obj;
    const obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["headerRight"] = outer1_14(outer1_7.GROUP, arg2);
    const merged3 = Object.assign(outer1_13(outer1_7.GROUP, stepScreenPropsMap));
    obj1["render"] = function render() {
      const obj = {};
      const tmp = outer2_12(outer2_7.GROUP, closure_0, closure_1);
      const merged = Object.assign(tmp);
      return outer2_8(outer2_1(outer2_2[11]), obj);
    };
    obj[outer1_7.GROUP] = obj1;
    const obj2 = {};
    const merged4 = Object.assign(obj);
    obj2["headerRight"] = outer1_14(outer1_7.CHANNEL_BENEFITS, arg2);
    const merged5 = Object.assign(outer1_13(outer1_7.CHANNEL_BENEFITS, stepScreenPropsMap));
    obj2["render"] = function render() {
      const merged = Object.assign(outer2_12(outer2_7.CHANNEL_BENEFITS, closure_0, closure_1));
      return outer2_8(outer2_0(outer2_2[12]).GuildRoleSubscriptionTierChannelBenefitsModal, {});
    };
    obj[outer1_7.CHANNEL_BENEFITS] = obj2;
    const obj3 = {};
    const merged6 = Object.assign(obj);
    obj3["headerRight"] = outer1_14(outer1_7.INTANGIBLE_BENEFITS, arg2);
    const merged7 = Object.assign(outer1_13(outer1_7.INTANGIBLE_BENEFITS, stepScreenPropsMap));
    obj3["render"] = function render() {
      const merged = Object.assign(outer2_12(outer2_7.INTANGIBLE_BENEFITS, closure_0, closure_1));
      return outer2_8(outer2_0(outer2_2[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal, {});
    };
    obj[outer1_7.INTANGIBLE_BENEFITS] = obj3;
    const obj4 = {};
    const merged8 = Object.assign(obj);
    obj4["headerRight"] = outer1_14(outer1_7.CONFIRMATION, arg2);
    const merged9 = Object.assign(outer1_13(outer1_7.CONFIRMATION, stepScreenPropsMap));
    obj4["render"] = function render() {
      const obj = {};
      const tmp = outer2_12(outer2_7.CONFIRMATION, closure_0, closure_1);
      const merged = Object.assign(tmp);
      return outer2_8(outer2_1(outer2_2[13]), obj);
    };
    obj[outer1_7.CONFIRMATION] = obj4;
    const obj5 = {};
    const merged10 = Object.assign(obj);
    obj5["headerRight"] = outer1_14(outer1_7.DESIGN, arg2);
    const merged11 = Object.assign(outer1_13(outer1_7.DESIGN, stepScreenPropsMap));
    obj5["render"] = function render() {
      const obj = {};
      const tmp = outer2_12(outer2_7.DESIGN, closure_0, closure_1);
      const merged = Object.assign(tmp);
      return outer2_8(outer2_1(outer2_2[14]), obj);
    };
    obj[outer1_7.DESIGN] = obj5;
    const obj6 = {};
    const merged12 = Object.assign(obj);
    obj6["headerRight"] = outer1_14(outer1_7.DETAILS, arg2);
    const merged13 = Object.assign(outer1_13(outer1_7.DETAILS, stepScreenPropsMap));
    obj6["render"] = function render() {
      const obj = {};
      const tmp = outer2_12(outer2_7.DETAILS, closure_0, closure_1);
      const merged = Object.assign(tmp);
      return outer2_8(outer2_1(outer2_2[15]), obj);
    };
    obj[outer1_7.DETAILS] = obj6;
    return obj;
  })(obj, merged, arg1, stepScreenPropsMap);
}
({ useCurrentTierEditScene: closure_5, useResetTierEditState: closure_6 } = _createForOfIteratorHelperLoose);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  let initialStack;
  let screens;
  const _require = modalKey;
  function handleClose(memo, arg1) {
    if (null != onClose) {
      onClose(memo);
    }
    callback4();
    callback2();
  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  const tmp2 = onClose(callback(), 2);
  const React = tmp2[0];
  callback = tmp2[1];
  callback2 = callback2();
  const tmp3 = onClose(React.useState(0), 2);
  let closure_7 = tmp3[1];
  const items = [modalKey];
  const callback3 = React.useCallback(() => {
    modalKey(steps[17]).popWithKey(modalKey);
  }, items);
  const items1 = [steps];
  const memo = React.useMemo(() => steps.map((scene) => {
    if ("string" !== typeof scene) {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  const tmp = callback4();
  let obj = {};
  ({ screens, initialStack } = modalKey(steps[18])(() => ({ screens: outer1_17(closure_0, handleClose), initialStack: outer1_15(memo, result) })));
  obj = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(route) {
      const name = route.route.name;
      if (null != name) {
        callback(name);
        const findIndexResult = memo.findIndex((arg0) => arg0 === name);
        if (findIndexResult >= 0) {
          callback3(findIndexResult);
        }
      }
    }
  };
  const intl = _require(steps[9]).intl;
  obj.headerBackTitle = intl.string(_require(steps[9]).t["13/7kX"]);
  const items2 = [callback3(_require(steps[19]).Navigator, obj), ];
  obj = { style: items3, current: tmp3[0] + 1, total: memo.length };
  items3 = [tmp.stepsIndicator, { top: modalKey(steps[16])().top }];
  items2[1] = callback3(modalKey(steps[20]), obj);
  obj.children = items2;
  return handleClose(memo, obj);
};
