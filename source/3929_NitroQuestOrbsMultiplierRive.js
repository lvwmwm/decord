// Module ID: 3929
// Function ID: 32421
// Name: NitroQuestOrbsMultiplierRive
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0]

// Module 3929 (NitroQuestOrbsMultiplierRive)
import closure_4 from "result";
import importAllResult from "result";
import { jsx } from "result";
import result from "result";

let closure_3 = ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive"];
let closure_7 = { Torbs_Multiply: { reducedMotion: "boolean" }, Shards_All_Nitro: { reducedMotion: "boolean" }, Orb Mid Shine: { reducedMotion: "boolean" }, Torbs_Shine: { reducedMotion: "boolean" } };
let closure_8 = { Torbs_Multiply: ["isActive"], Shards_All_Nitro: ["isActive"], Orb Mid Shine: ["isActive"], Torbs_Shine: ["isActive"] };
let closure_9 = {
  Torbs_Multiply: function TorbsMultiplyBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  Shards_All_Nitro: function ShardsAllNitroBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  Orb Mid Shine: function OrbMidShineBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  Torbs_Shine: function TorbsShineBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function NitroQuestOrbsMultiplierRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Torbs_Multiply";
  if (undefined !== artboard) {
    str = artboard;
  }
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const importDefault = dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const dependencyMap = onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[closure_0]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = callback(tmp, obj);
    }
    return tmp2;
  }, items);
  const obj = { ref, src: importDefault(dependencyMap[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(ref(dependencyMap[3]).BaseRive, obj);
});
result = result.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/NitroQuestOrbsMultiplierRive.tsx");

export const NitroQuestOrbsMultiplierRive = importAllResult.forwardRef(function NitroQuestOrbsMultiplierRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
