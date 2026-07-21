// Module ID: 10632
// Function ID: 83015
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10632 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const StorageKeys = arg1(dependencyMap[5]).StorageKeys;
const set = new Set();
const set1 = new Set();
let tmp4 = (Store) => {
  class TooltipStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, TooltipStore);
      items1 = [...items];
      obj = closure_5(TooltipStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.canShowTooltip = (arg0) => {
        let hasItem = set.has(arg0);
        if (hasItem) {
          hasItem = !set2.has(arg0);
        }
        return hasItem;
      };
      tmp2Result.hasShownTooltip = (arg0) => set.has(arg0);
      return tmp2Result;
    }
  }
  const arg1 = TooltipStore;
  callback2(TooltipStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        const Storage = TooltipStore(closure_1[6]).Storage;
        let items = Storage.get(constants.ACKNOWLEDGED_TOOLTIPS_KEY, []);
        if (null == items) {
          items = [];
        }
        let closure_9 = Set(...items);
      }
    }
  ];
  return callback(TooltipStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp4.displayName = "TooltipStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (null != set1) {
      set1.add(tooltip.tooltip);
    }
    const Storage = arg1(dependencyMap[6]).Storage;
    const result = Storage.set(StorageKeys.ACKNOWLEDGED_TOOLTIPS_KEY, Array(set1));
  },
  TOOLTIP_SHOW_ATTEMPT: function hasAttemptedToShowTooltip(arg0) {
    let ignoreMaxShownLimit;
    let tooltip;
    ({ tooltip, ignoreMaxShownLimit } = arg0);
    if (!set.has(tooltip)) {
      if (!set1.has(tooltip)) {
        if (!ignoreMaxShownLimit) {
          ignoreMaxShownLimit = set.size < 1;
        }
        if (ignoreMaxShownLimit) {
          set.add(tooltip);
        }
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tmp4;
