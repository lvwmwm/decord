// Module ID: 5242
// Function ID: 45264
// Name: MountRegistry
// Dependencies: [6, 7]

// Module 5242 (MountRegistry)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class MountRegistry {
    constructor() {
      tmp = MountRegistry(this, MountRegistry);
      return;
    }
  }
  let obj = {
    key: "addMountListener",
    value: function addMountListener(arg0) {
      let _classCallCheck = arg0;
      const self = this;
      let mountListeners = this.mountListeners;
      mountListeners.add(arg0);
      return () => {
        const mountListeners = self.mountListeners;
        mountListeners.delete(_classCallCheck);
      };
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "addUnmountListener",
    value: function addUnmountListener(arg0) {
      let _classCallCheck = arg0;
      const self = this;
      let unmountListeners = this.unmountListeners;
      unmountListeners.add(arg0);
      return () => {
        const unmountListeners = self.unmountListeners;
        unmountListeners.delete(_classCallCheck);
      };
    }
  };
  items[1] = obj;
  obj = {
    key: "gestureHandlerWillMount",
    value: function gestureHandlerWillMount(outer1_0) {
      let _classCallCheck = outer1_0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(_classCallCheck));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      let _classCallCheck = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(_classCallCheck));
    }
  };
  items[4] = {
    key: "gestureWillMount",
    value: function gestureWillMount(arg0) {
      let _classCallCheck = arg0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(_classCallCheck));
    }
  };
  items[5] = {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(nextResult) {
      let _classCallCheck = nextResult;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(_classCallCheck));
    }
  };
  return callback(MountRegistry, null, items);
})();
tmp2.mountListeners = new Set();
const set = new Set();
tmp2.unmountListeners = new Set();

export const MountRegistry = tmp2;
