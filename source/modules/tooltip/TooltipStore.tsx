// Module ID: 10672
// Function ID: 83270
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 587, 566, 686, 2]

// Module 10672 (_isNativeReflectConstruct)
import Storage from "Storage";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { StorageKeys } from "ME";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let set = new Set();
const set1 = new Set();
let tmp4 = ((Store) => {
  class TooltipStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, TooltipStore);
      items1 = [...items];
      obj = outer1_5(TooltipStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.canShowTooltip = (arg0) => {
        let hasItem = outer2_8.has(arg0);
        if (hasItem) {
          hasItem = !outer2_9.has(arg0);
        }
        return hasItem;
      };
      tmp2Result.hasShownTooltip = (arg0) => outer2_8.has(arg0);
      return tmp2Result;
    }
  }
  callback2(TooltipStore, Store);
  let items = [
    {
      key: "initialize",
      value() {
        const Storage = TooltipStore(outer1_1[6]).Storage;
        let items = Storage.get(outer1_7.ACKNOWLEDGED_TOOLTIPS_KEY, []);
        if (null == items) {
          items = [];
        }
        const outer1_9 = Set(...items);
      }
    }
  ];
  return callback(TooltipStore, items);
})(require("initialize").Store);
tmp4.displayName = "TooltipStore";
tmp4 = new tmp4(require("dispatcher"), {
  TOOLTIP_ACKNOWLEDGE: function handleTooltipAcknowledge(tooltip) {
    if (null != set1) {
      set1.add(tooltip.tooltip);
    }
    const Storage = require(587) /* Storage */.Storage;
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
let result = set.fileFinishedImporting("modules/tooltip/TooltipStore.tsx");

export default tmp4;
