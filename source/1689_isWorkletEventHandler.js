// Module ID: 1689
// Function ID: 18699
// Name: isWorkletEventHandler
// Dependencies: [6, 7, 99, 100, 1690, 1679, 1687]

// Module 1689 (isWorkletEventHandler)
import WorkletEventHandlerNative from "WorkletEventHandlerNative";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

const require = arg1;
function isWorkletEventHandler(workletEventHandler) {
  let hasItem = require(1679) /* flattenArray */.has("workletEventHandler", workletEventHandler);
  if (hasItem) {
    hasItem = workletEventHandler.workletEventHandler instanceof require(1687) /* WorkletEventHandlerNative */.WorkletEventHandler;
  }
  return hasItem;
}
function executeForEachEventHandler(obj) {
  for (const key10005 in arg0) {
    let tmp2 = key10005;
    let tmp3 = arg0[key10005];
    let tmp4 = isWorkletEventHandler;
    if (!isWorkletEventHandler(tmp3)) {
      continue;
    } else {
      let tmp = arg1(key10005, tmp3.workletEventHandler);
      continue;
    }
    continue;
  }
}
let closure_5 = importDefaultResult("managedComponent");
let closure_6 = importDefaultResult("componentOptions");
let closure_7 = importDefaultResult("eventViewTag");

export const NativeEventsManager = (() => {
  class NativeEventsManager {
    constructor(arg0, arg1) {
      tmp = outer1_2(this, NativeEventsManager);
      definePropertyResult = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_7, { writable: true, value: -1 });
      outer1_4(this, outer1_5)[outer1_5] = arg0;
      outer1_4(this, outer1_6)[outer1_6] = arg1;
      tmp5 = outer1_4(this, outer1_7);
      tmp5[outer1_7] = this.getEventViewTag();
      return;
    }
  }
  let obj = {
    key: "attachEvents",
    value: function attachEvents() {
      const self = this;
      outer1_9(outer1_4(this, outer1_5)[outer1_5].props, (arg0, registerForEvents) => {
        registerForEvents.registerForEvents(outer2_4(self, outer2_7)[outer2_7], arg0);
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "detachEvents",
    value: function detachEvents() {
      const self = this;
      outer1_9(outer1_4(this, outer1_5)[outer1_5].props, (arg0, unregisterFromEvents) => {
        unregisterFromEvents.unregisterFromEvents(outer2_4(self, outer2_7)[outer2_7]);
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "updateEvents",
    value: function updateEvents(layout) {
      let self = this;
      let closure_0 = layout;
      self = this;
      const eventViewTag = this.getEventViewTag(true);
      if (outer1_4(this, outer1_7)[outer1_7] !== eventViewTag) {
        outer1_9(layout, (arg0, unregisterFromEvents) => {
          unregisterFromEvents.unregisterFromEvents(outer2_4(self, outer2_7)[outer2_7]);
        });
        outer1_4(self, outer1_7)[outer1_7] = eventViewTag;
        self.attachEvents();
      } else {
        outer1_9(layout, (arg0, unregisterFromEvents) => {
          const tmp = outer2_4(self, outer2_5)[outer2_5].props[arg0];
          if (tmp) {
            if (tmp7) {
              unregisterFromEvents.unregisterFromEvents(outer2_4(self, outer2_7)[outer2_7]);
              tmp.workletEventHandler.registerForEvents(outer2_4(self, outer2_7)[outer2_7]);
              const workletEventHandler = tmp.workletEventHandler;
            }
            tmp7 = outer2_8(tmp) && tmp.workletEventHandler !== unregisterFromEvents;
          } else {
            unregisterFromEvents.unregisterFromEvents(outer2_4(self, outer2_7)[outer2_7]);
          }
        });
        outer1_9(outer1_4(self, outer1_5)[outer1_5].props, (arg0, registerForEvents) => {
          if (!layout[arg0]) {
            registerForEvents.registerForEvents(outer2_4(self, outer2_7)[outer2_7]);
          }
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEventViewTag",
    value: function getEventViewTag(arg0) {
      const self = this;
      const _componentRef = outer1_4(self, outer1_5)[outer1_5]._componentRef;
      if (null != _componentRef) {
        if (_componentRef.getScrollableNode) {
          const scrollableNode = _componentRef.getScrollableNode();
          let tmp16 = scrollableNode;
          if ("number" !== typeof scrollableNode) {
            const findNodeHandleResult = NativeEventsManager(outer1_1[4]).findNodeHandle(scrollableNode);
            let num7 = -1;
            if (null != findNodeHandleResult) {
              num7 = findNodeHandleResult;
            }
            tmp16 = num7;
            const obj4 = NativeEventsManager(outer1_1[4]);
          }
          return tmp16;
        }
      }
      const tmp2 = outer1_4(self, outer1_6)[outer1_6];
      if (null != tmp2) {
        if (tmp2.setNativeProps) {
          const findNodeHandleResult1 = NativeEventsManager(outer1_1[4]).findNodeHandle(outer1_4(self, outer1_5)[outer1_5]);
          let num5 = -1;
          if (null != findNodeHandleResult1) {
            num5 = findNodeHandleResult1;
          }
          let componentViewTag = num5;
          const obj3 = NativeEventsManager(outer1_1[4]);
        }
        return componentViewTag;
      }
      if (tmp) {
        if (null == _componentRef) {
          if (null == _componentRef) {
            const findNodeHandleResult2 = NativeEventsManager(outer1_1[4]).findNodeHandle(_componentRef);
            let num2 = -1;
            if (null != findNodeHandleResult2) {
              num2 = findNodeHandleResult2;
            }
            const obj2 = NativeEventsManager(outer1_1[4]);
          }
        }
        let _nativeTag = _componentRef.__nativeTag;
        if (null == _nativeTag) {
          _nativeTag = _componentRef._nativeTag;
        }
        let num3 = -1;
        if (null != _nativeTag) {
          num3 = _nativeTag;
        }
        num2 = num3;
      } else {
        componentViewTag = outer1_4(self, outer1_5)[outer1_5].getComponentViewTag();
        const obj = outer1_4(self, outer1_5)[outer1_5];
      }
    }
  };
  return callback(NativeEventsManager, items);
})();
