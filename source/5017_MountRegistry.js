// Module ID: 5017
// Function ID: 42822
// Name: MountRegistry
// Dependencies: []

// Module 5017 (MountRegistry)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class MountRegistry {
    constructor() {
      tmp = MountRegistry(this, MountRegistry);
      return;
    }
  }
  let closure_0 = MountRegistry;
  let obj = {
    key: "addMountListener",
    value: function addMountListener(arg0) {
      const MountRegistry = arg0;
      const self = this;
      const mountListeners = this.mountListeners;
      mountListeners.add(arg0);
      return () => {
        const mountListeners = self.mountListeners;
        mountListeners.delete(arg0);
      };
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "addUnmountListener",
    value: function addUnmountListener(arg0) {
      const MountRegistry = arg0;
      const self = this;
      const unmountListeners = this.unmountListeners;
      unmountListeners.add(arg0);
      return () => {
        const unmountListeners = self.unmountListeners;
        unmountListeners.delete(arg0);
      };
    }
  };
  items[1] = obj;
  obj = {
    key: "gestureHandlerWillMount",
    value: function gestureHandlerWillMount(closure_0) {
      const MountRegistry = closure_0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(arg0));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      const MountRegistry = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(arg0));
    }
  };
  items[4] = {
    key: "gestureWillMount",
    value: function gestureWillMount(arg0) {
      const MountRegistry = arg0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(arg0));
    }
  };
  items[5] = {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(nextResult) {
      const MountRegistry = nextResult;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(arg0));
    }
  };
  return callback(MountRegistry, null, items);
}();
tmp2.mountListeners = new Set();
const set = new Set();
tmp2.unmountListeners = new Set();

export const MountRegistry = tmp2;
