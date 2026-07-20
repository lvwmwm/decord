// Module ID: 1689
// Function ID: 18692
// Name: isWorkletEventHandler
// Dependencies: []

// Module 1689 (isWorkletEventHandler)
function isWorkletEventHandler(workletEventHandler) {
  let hasItem = arg1(dependencyMap[5]).has("workletEventHandler", workletEventHandler);
  if (hasItem) {
    hasItem = workletEventHandler.workletEventHandler instanceof arg1(dependencyMap[6]).WorkletEventHandler;
  }
  return hasItem;
}
function executeForEachEventHandler(obj) {
  for (const key10005 in arg0) {
    let tmp2 = key10005;
    let tmp3 = arg0[key10005];
    let tmp4 = closure_8;
    if (!closure_8(tmp3)) {
      continue;
    } else {
      let tmp = arg1(key10005, tmp3.workletEventHandler);
      // continue
    }
    continue;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_5 = importDefaultResult("managedComponent");
let closure_6 = importDefaultResult("componentOptions");
let closure_7 = importDefaultResult("eventViewTag");

export const NativeEventsManager = () => {
  class NativeEventsManager {
    constructor(arg0, arg1) {
      tmp = closure_2(this, NativeEventsManager);
      definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_6, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_7, { 1409241855: "center", 1426019839: "100%" });
      closure_4(this, closure_5)[closure_5] = arg0;
      closure_4(this, closure_6)[closure_6] = arg1;
      tmp5 = closure_4(this, closure_7);
      tmp5[closure_7] = this.getEventViewTag();
      return;
    }
  }
  const arg1 = NativeEventsManager;
  let obj = {
    key: "attachEvents",
    value: function attachEvents() {
      const NativeEventsManager = this;
      callback3(callback2(this, closure_5)[closure_5].props, (arg0, registerForEvents) => {
        registerForEvents.registerForEvents(callback(self, closure_7)[closure_7], arg0);
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "detachEvents",
    value: function detachEvents() {
      const NativeEventsManager = this;
      callback3(callback2(this, closure_5)[closure_5].props, (arg0, unregisterFromEvents) => {
        unregisterFromEvents.unregisterFromEvents(callback(self, closure_7)[closure_7]);
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "updateEvents",
    value: function updateEvents(layout) {
      let self = this;
      const NativeEventsManager = layout;
      self = this;
      const eventViewTag = this.getEventViewTag(true);
      if (callback2(this, closure_7)[closure_7] !== eventViewTag) {
        callback3(layout, (arg0, unregisterFromEvents) => {
          unregisterFromEvents.unregisterFromEvents(callback(self, closure_7)[closure_7]);
        });
        callback2(self, closure_7)[closure_7] = eventViewTag;
        self.attachEvents();
      } else {
        callback3(layout, (arg0, unregisterFromEvents) => {
          const tmp = callback(self, closure_5)[closure_5].props[arg0];
          if (tmp) {
            if (tmp7) {
              unregisterFromEvents.unregisterFromEvents(callback(self, closure_7)[closure_7]);
              tmp.workletEventHandler.registerForEvents(callback(self, closure_7)[closure_7]);
              const workletEventHandler = tmp.workletEventHandler;
            }
            const tmp7 = callback2(tmp) && tmp.workletEventHandler !== unregisterFromEvents;
          } else {
            unregisterFromEvents.unregisterFromEvents(callback(self, closure_7)[closure_7]);
          }
        });
        callback3(callback2(self, closure_5)[closure_5].props, (arg0, registerForEvents) => {
          if (!arg0[arg0]) {
            registerForEvents.registerForEvents(callback(self, closure_7)[closure_7]);
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
      const _componentRef = callback2(self, closure_5)[closure_5]._componentRef;
      if (null != _componentRef) {
        if (_componentRef.getScrollableNode) {
          const scrollableNode = _componentRef.getScrollableNode();
          let tmp16 = scrollableNode;
          if ("number" !== typeof scrollableNode) {
            const findNodeHandleResult = NativeEventsManager(closure_1[4]).findNodeHandle(scrollableNode);
            let num7 = -1;
            if (null != findNodeHandleResult) {
              num7 = findNodeHandleResult;
            }
            tmp16 = num7;
            const obj4 = NativeEventsManager(closure_1[4]);
          }
          return tmp16;
        }
      }
      const tmp2 = callback2(self, closure_6)[closure_6];
      if (null != tmp2) {
        if (tmp2.setNativeProps) {
          const findNodeHandleResult1 = NativeEventsManager(closure_1[4]).findNodeHandle(callback2(self, closure_5)[closure_5]);
          let num5 = -1;
          if (null != findNodeHandleResult1) {
            num5 = findNodeHandleResult1;
          }
          let componentViewTag = num5;
          const obj3 = NativeEventsManager(closure_1[4]);
        }
        return componentViewTag;
      }
      if (tmp) {
        if (null == _componentRef) {
          if (null == _componentRef) {
            const findNodeHandleResult2 = NativeEventsManager(closure_1[4]).findNodeHandle(_componentRef);
            let num2 = -1;
            if (null != findNodeHandleResult2) {
              num2 = findNodeHandleResult2;
            }
            const obj2 = NativeEventsManager(closure_1[4]);
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
        componentViewTag = callback2(self, closure_5)[closure_5].getComponentViewTag();
        const obj = callback2(self, closure_5)[closure_5];
      }
    }
  };
  return callback(NativeEventsManager, items);
}();
