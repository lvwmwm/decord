// Module ID: 10956
// Function ID: 85147
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 6651, 10499, 653, 7527, 8328, 566, 10497, 10498, 6969, 2]
// Exports: QuestContentImpressionTrackerNative

// Module 10956 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE as closure_6 } from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import { AppStates } from "ME";
import { createElement } from "result";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function calculateVisibilityPercentage(visibilityRef) {
  visibilityRef = visibilityRef.visibilityRef;
  let tmp2;
  if (null != visibilityRef) {
    const current = visibilityRef.current;
    if (null != current) {
      const children = current.children;
      if (null != children) {
        tmp2 = children[tmp];
      }
    }
  }
  let layout;
  if (null != tmp2) {
    layout = tmp2.layout;
  }
  if (null != layout) {
    let layout1;
    if (null != visibilityRef) {
      const parent = visibilityRef.current.parent;
      if (null != parent) {
        layout1 = parent.layout;
      }
    }
    if (null != layout1) {
      const axis = visibilityRef.current.axis;
      let str = "vertical";
      if (null != axis) {
        str = axis;
      }
      if ("horizontal" === str) {
        if (null == visibilityRef.current.parent.scrollX) {
          return 0;
        } else {
          const items = [tmp2.layout.x, tmp2.layout.x + tmp2.layout.width];
          const items1 = [visibilityRef.current.parent.scrollX, visibilityRef.current.parent.scrollX + visibilityRef.current.parent.layout.width];
          let height = tmp2.layout.width;
          let items2 = items;
          let items3 = items1;
        }
      } else if (null == visibilityRef.current.parent.scrollY) {
        return 0;
      } else {
        items2 = [tmp2.layout.y, tmp2.layout.y + tmp2.layout.height];
        items3 = [visibilityRef.current.parent.scrollY, visibilityRef.current.parent.scrollY + visibilityRef.current.parent.layout.height];
        height = tmp2.layout.height;
      }
      if (null != visibilityRef.current.parent.firstItemOffset) {
        const firstItemOffset = visibilityRef.current.parent.firstItemOffset;
        items2[0] = items2[0] + firstItemOffset;
        items2[1] = items2[1] + firstItemOffset;
      }
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(items2[0], items3[0]);
      const _Math3 = Math;
      const _Math4 = Math;
      return Math.min(Math.max(0, Math.min(items2[1], items3[1]) - bound) / height, 1);
    }
  }
  return 0;
}
function useVisibilityData(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const visibilityRef = adContentIds.visibilityRef;
  const overrideVisibility = adContentIds.overrideVisibility;
  const joined = adContentIds.join("_");
  let obj = adContentIds(7527);
  const items = [joined];
  const tmp2 = callback(obj.useRecyclingState(false, items), 2);
  let first = tmp2[0];
  const dependencyMap = tmp4;
  const items1 = [adContentIds, tmp2[1], visibilityRef];
  const effect = React.useEffect(() => {
    (function initHandlers(arg0) {
      let children;
      let done;
      let visibilityRef;
      ({ setVisible: children, visibilityRef } = arg0);
      if (null != visibilityRef) {
        function _loop(value) {
          let closure_0 = value;
          const obj = {};
          const merged = Object.assign(visibilityRef.current.children[value]);
          obj["calculateVisibility"] = function calculateVisibility() {
            value(outer4_11({ visibilityRef: outer1_1, entityId: value }) >= outer4_6);
          };
          visibilityRef.current.children[value] = obj;
        }
        const tmp3 = outer2_9(tmp);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let _loopResult = _loop(iter.value);
            let iter2 = tmp3();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    })({ adContentIds: children, setVisible: closure_2, visibilityRef });
    children = undefined;
    if (null != visibilityRef) {
      const current = visibilityRef.current;
      if (null != current) {
        children = current.children;
      }
    }
    return () => {
      let iter2;
      if (null != children) {
        const tmp3 = outer2_9(children);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = children;
            let tmp5 = children[iter.value];
            if (null != tmp5) {
              tmp5.calculateVisibility = undefined;
            }
            iter2 = tmp3();
            iter = iter2;
          } while (!iter2.done);
        }
      }
    };
  }, items1);
  if (null != overrideVisibility) {
    first = overrideVisibility;
  }
  obj = { visible: first, visibleChanged: first !== visibilityRef(8328)(first) };
  return obj;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = function QuestContentImpressionTrackerNative(skipRemountKey) {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const tmp = obj.useStateFromStores(items, () => outer1_5.getState()) === AppStates.ACTIVE;
  const ref = React.useRef(null);
  let obj1 = require(10497) /* useQuestImpressionRef */;
  const adContentImpressionTrackerProps = obj1.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  obj = {};
  const merged = Object.assign(skipRemountKey);
  obj["adContentIds"] = adContentIds;
  const tmp3 = importDefault(8328)(tmp);
  obj = {};
  const merged1 = Object.assign(skipRemountKey);
  const merged2 = Object.assign(useVisibilityData(obj));
  obj["focused"] = tmp;
  obj["focusedChanged"] = tmp !== tmp3;
  obj["reference"] = ref;
  obj["isFocused"] = tmp;
  let key;
  if (!skipRemountKey.skipRemountKey) {
    key = adContentImpressionTrackerProps.key;
  }
  obj1 = {};
  const merged3 = Object.assign(obj);
  obj1["key"] = key;
  obj1["adContentIds"] = adContentIds;
  if (tmp11) {
    obj1["adCreativeType"] = require(6969) /* AdCreativeType */.AdCreativeType.QUEST;
    let tmp13 = obj1;
  } else {
    obj1["adCreativeType"] = skipRemountKey.adCreativeType;
    tmp13 = obj1;
  }
  return createElement(require(10498) /* getQuestPlacementCombinationKey */.QuestContentImpressionTracker, tmp13);
};
