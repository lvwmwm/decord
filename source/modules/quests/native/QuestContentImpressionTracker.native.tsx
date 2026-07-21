// Module ID: 10918
// Function ID: 84896
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: QuestContentImpressionTrackerNative

// Module 10918 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = adContentIds;
  const visibilityRef = adContentIds.visibilityRef;
  const importDefault = visibilityRef;
  const overrideVisibility = adContentIds.overrideVisibility;
  const joined = adContentIds.join("_");
  let obj = arg1(dependencyMap[5]);
  const items = [joined];
  const tmp2 = callback(obj.useRecyclingState(false, items), 2);
  let first = tmp2[0];
  const dependencyMap = tmp4;
  const items1 = [adContentIds, tmp2[1], visibilityRef];
  const effect = React.useEffect(() => {
    function initHandlers(arg0) {
      let done;
      let visibilityRef;
      ({ setVisible: closure_0, visibilityRef } = arg0);
      if (null != visibilityRef) {
        function _loop(value) {
          const obj = {};
          const merged = Object.assign(visibilityRef.current.children[value]);
          obj["calculateVisibility"] = function calculateVisibility() {
            arg0(callback({ visibilityRef: closure_1, entityId: arg0 }) >= closure_6);
          };
          visibilityRef.current.children[value] = obj;
        }
        const tmp3 = callback(tmp);
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
    }({ adContentIds, setVisible: tmp4, visibilityRef });
    let children;
    if (null != visibilityRef) {
      const current = visibilityRef.current;
      if (null != current) {
        children = current.children;
      }
    }
    const adContentIds = children;
    return () => {
      let iter2;
      if (null != children) {
        const tmp3 = callback(children);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = closure_0;
            let tmp5 = closure_0[iter.value];
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
  obj = { visible: first, visibleChanged: first !== importDefault(dependencyMap[6])(first) };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const AppStates = arg1(dependencyMap[4]).AppStates;
const createElement = arg1(dependencyMap[1]).createElement;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = function QuestContentImpressionTrackerNative(skipRemountKey) {
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const tmp = obj.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  const ref = React.useRef(null);
  let obj1 = arg1(dependencyMap[8]);
  const adContentImpressionTrackerProps = obj1.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  obj = {};
  const merged = Object.assign(skipRemountKey);
  obj["adContentIds"] = adContentIds;
  const tmp3 = importDefault(dependencyMap[6])(tmp);
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
    obj1["adCreativeType"] = arg1(dependencyMap[10]).AdCreativeType.QUEST;
    let tmp13 = obj1;
  } else {
    obj1["adCreativeType"] = skipRemountKey.adCreativeType;
    tmp13 = obj1;
  }
  return createElement(arg1(dependencyMap[9]).QuestContentImpressionTracker, tmp13);
};
