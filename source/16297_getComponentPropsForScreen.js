// Module ID: 16297
// Function ID: 125772
// Name: getComponentPropsForScreen
// Dependencies: []
// Exports: default

// Module 16297 (getComponentPropsForScreen)
function getComponentPropsForScreen(arg0, arg1, arg2) {
  let obj = arg1[arg0];
  let runtimeProps;
  importDefault(dependencyMap[6])(null != obj, "Props not provided in screen map for scene " + arg0);
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
  arg1 = arg0;
  const importDefault = arg1;
  return () => {
    const obj = {
      source: arg1(closure_2[8]),
      onPress() {
        return callback(closure_0);
      }
    };
    const intl = arg0(closure_2[9]).intl;
    obj.accessibilityLabel = intl.string(arg0(closure_2[9]).t.cpT0Cq);
    return callback(arg0(closure_2[7]).HeaderActionButton, obj);
  };
}
function buildInitialRouteStack(arg0, arg1) {
  importDefault(dependencyMap[6])(arg0.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
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
  const merged = Object.assign(arg0, obj);
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
  return function getScreens(arg0, merged, arg2, stepScreenPropsMap) {
    let obj = {
      fullscreen: true,
      headerTitle() {
        return null;
      }
    };
    obj = {};
    obj = {};
    merged = Object.assign(obj);
    obj["headerRight"] = callback2(constants.GATING, arg2);
    const merged1 = Object.assign(callback(constants.GATING, stepScreenPropsMap));
    obj["render"] = function render() {
      const obj = {};
      const tmp = callback2(constants.GATING, arg0, arg1);
      const merged = Object.assign(tmp);
      return callback(arg1(closure_2[10]), obj);
    };
    obj[constants.GATING] = obj;
    const obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["headerRight"] = callback2(constants.GROUP, arg2);
    const merged3 = Object.assign(callback(constants.GROUP, stepScreenPropsMap));
    obj1["render"] = function render() {
      const obj = {};
      const tmp = callback2(constants.GROUP, arg0, arg1);
      const merged = Object.assign(tmp);
      return callback(arg1(closure_2[11]), obj);
    };
    obj[constants.GROUP] = obj1;
    const obj2 = {};
    const merged4 = Object.assign(obj);
    obj2["headerRight"] = callback2(constants.CHANNEL_BENEFITS, arg2);
    const merged5 = Object.assign(callback(constants.CHANNEL_BENEFITS, stepScreenPropsMap));
    obj2["render"] = function render() {
      const merged = Object.assign(callback2(constants.CHANNEL_BENEFITS, arg0, arg1));
      return callback(arg0(closure_2[12]).GuildRoleSubscriptionTierChannelBenefitsModal, {});
    };
    obj[constants.CHANNEL_BENEFITS] = obj2;
    const obj3 = {};
    const merged6 = Object.assign(obj);
    obj3["headerRight"] = callback2(constants.INTANGIBLE_BENEFITS, arg2);
    const merged7 = Object.assign(callback(constants.INTANGIBLE_BENEFITS, stepScreenPropsMap));
    obj3["render"] = function render() {
      const merged = Object.assign(callback2(constants.INTANGIBLE_BENEFITS, arg0, arg1));
      return callback(arg0(closure_2[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal, {});
    };
    obj[constants.INTANGIBLE_BENEFITS] = obj3;
    const obj4 = {};
    const merged8 = Object.assign(obj);
    obj4["headerRight"] = callback2(constants.CONFIRMATION, arg2);
    const merged9 = Object.assign(callback(constants.CONFIRMATION, stepScreenPropsMap));
    obj4["render"] = function render() {
      const obj = {};
      const tmp = callback2(constants.CONFIRMATION, arg0, arg1);
      const merged = Object.assign(tmp);
      return callback(arg1(closure_2[13]), obj);
    };
    obj[constants.CONFIRMATION] = obj4;
    const obj5 = {};
    const merged10 = Object.assign(obj);
    obj5["headerRight"] = callback2(constants.DESIGN, arg2);
    const merged11 = Object.assign(callback(constants.DESIGN, stepScreenPropsMap));
    obj5["render"] = function render() {
      const obj = {};
      const tmp = callback2(constants.DESIGN, arg0, arg1);
      const merged = Object.assign(tmp);
      return callback(arg1(closure_2[14]), obj);
    };
    obj[constants.DESIGN] = obj5;
    const obj6 = {};
    const merged12 = Object.assign(obj);
    obj6["headerRight"] = callback2(constants.DETAILS, arg2);
    const merged13 = Object.assign(callback(constants.DETAILS, stepScreenPropsMap));
    obj6["render"] = function render() {
      const obj = {};
      const tmp = callback2(constants.DETAILS, arg0, arg1);
      const merged = Object.assign(tmp);
      return callback(arg1(closure_2[15]), obj);
    };
    obj[constants.DETAILS] = obj6;
    return obj;
  }(obj, merged, arg1, stepScreenPropsMap);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ useCurrentTierEditScene: closure_5, useResetTierEditState: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = arg1(dependencyMap[3]).GuildRoleSubscriptionsTierScenes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ stepsIndicator: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  let initialStack;
  let screens;
  const arg1 = modalKey;
  function handleClose(memo, arg1) {
    if (null != onClose) {
      onClose(memo);
    }
    callback4();
    callback2();
  }
  modalKey = modalKey.modalKey;
  const importDefault = modalKey;
  const steps = modalKey.steps;
  const dependencyMap = steps;
  const callback = modalKey.onClose;
  const tmp2 = callback(callback2(), 2);
  const React = tmp2[0];
  const callback2 = tmp2[1];
  const callback3 = callback3();
  const tmp3 = callback(React.useState(0), 2);
  let closure_7 = tmp3[1];
  const items = [modalKey];
  const callback4 = React.useCallback(() => {
    modalKey(steps[17]).popWithKey(modalKey);
  }, items);
  const items1 = [steps];
  const memo = React.useMemo(() => steps.map((scene) => {
    if ("string" !== typeof scene) {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  const tmp = callback5();
  let obj = {};
  ({ screens, initialStack } = importDefault(dependencyMap[18])(() => ({ screens: callback6(arg0, handleClose), initialStack: callback5(memo, closure_4) })));
  obj = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(route) {
      const name = route.route.name;
      route = name;
      if (null != name) {
        callback(name);
        const findIndexResult = memo.findIndex((arg0) => arg0 === name);
        if (findIndexResult >= 0) {
          callback3(findIndexResult);
        }
      }
    }
  };
  const intl = arg1(dependencyMap[9]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[9]).t.13/7kX);
  const items2 = [callback4(arg1(dependencyMap[19]).Navigator, obj), ];
  obj = { style: items3, current: tmp3[0] + 1, total: memo.length };
  const items3 = [tmp.stepsIndicator, { top: importDefault(dependencyMap[16])().top }];
  items2[1] = callback4(importDefault(dependencyMap[20]), obj);
  obj.children = items2;
  return handleClose(memo, obj);
};
