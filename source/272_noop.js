// Module ID: 272
// Function ID: 3396
// Name: noop
// Dependencies: []

// Module 272 (noop)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[2]);
const obj = arg1(dependencyMap[3]);
({ measure: closure_5, measureInWindow: closure_6, measureLayout: closure_7, getBoundingClientRect: closure_8, setNativeProps: closure_9 } = importDefaultResult(arg1(dependencyMap[3]).getFabricUIManager()));
function noop() {

}

export default () => {
  class ReactFabricHostComponent {
    constructor(arg0, arg1, arg2) {
      tmp = closure_3(this, ReactFabricHostComponent);
      this.__nativeTag = arg0;
      this._viewConfig = arg1;
      this.__internalInstanceHandle = arg2;
      return;
    }
  }
  const arg1 = ReactFabricHostComponent;
  let obj = {
    key: "blur",
    value: function blur() {
      callback(closure_2[4]).blurTextInput(this);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "focus",
    value: function focus() {
      callback(closure_2[4]).focusTextInput(this);
    }
  };
  items[1] = obj;
  obj = {
    key: "measure",
    value: function measure(arg0) {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (null != nodeFromInternalInstanceHandle) {
        callback3(nodeFromInternalInstanceHandle, arg0, tmp);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (null != nodeFromInternalInstanceHandle) {
        callback4(nodeFromInternalInstanceHandle, arg0);
      }
    }
  };
  items[4] = {
    key: "measureLayout",
    value: function measureLayout(__internalInstanceHandle) {
      let tmp = arg1;
      let tmp2 = arg2;
      if ("number" !== typeof __internalInstanceHandle) {
        if (__internalInstanceHandle instanceof ReactFabricHostComponent) {
          const self = this;
          const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
          const obj = ReactFabricHostComponent(closure_2[5]);
          const nodeFromInternalInstanceHandle1 = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(__internalInstanceHandle.__internalInstanceHandle);
          if (tmp8) {
            if (null == tmp2) {
              tmp2 = closure_10;
            }
            if (null == tmp) {
              tmp = closure_10;
            }
            closure_7(nodeFromInternalInstanceHandle, nodeFromInternalInstanceHandle1, tmp2, tmp);
            const tmp9 = closure_7;
          }
          const obj2 = ReactFabricHostComponent(closure_2[5]);
          const tmp8 = null != nodeFromInternalInstanceHandle && null != nodeFromInternalInstanceHandle1;
        }
      }
    }
  };
  items[5] = {
    key: "unstable_getBoundingClientRect",
    value: function unstable_getBoundingClientRect() {
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (null != nodeFromInternalInstanceHandle) {
        const tmp3 = callback5(nodeFromInternalInstanceHandle, true);
        if (tmp3) {
          const _DOMRect = DOMRect;
          const dOMRect = new DOMRect(tmp3[0], tmp3[1], tmp3[2], tmp3[3]);
          return dOMRect;
        }
      }
      const dOMRect1 = new DOMRect(0, 0, 0, 0);
      return dOMRect1;
    }
  };
  items[6] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let obj = ReactFabricHostComponent(closure_2[6]);
      obj = obj.create(arg0, this._viewConfig.validAttributes);
      const nodeFromInternalInstanceHandle = ReactFabricHostComponent(closure_2[5]).getNodeFromInternalInstanceHandle(this.__internalInstanceHandle);
      if (tmp3) {
        callback6(nodeFromInternalInstanceHandle, obj);
      }
    }
  };
  return callback(ReactFabricHostComponent, items);
}();
