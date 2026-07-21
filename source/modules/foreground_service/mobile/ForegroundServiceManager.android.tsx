// Module ID: 6993
// Function ID: 55898
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6993 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function socketToken(arg0) {
  return "ForegroundService:" + arg0;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let tmp2 = () => {
  class ForegroundServiceManager {
    constructor() {
      ForegroundServiceManager = this;
      tmp = closure_6(this, ForegroundServiceManager);
      map = new Map();
      this.serviceNotifications = map;
      this.serviceNotificationIdentifier = 1;
      this.handleChange = () => {
        if (self.serviceNotifications.size > 0) {
          const ForegroundServiceModule2 = closure_8.ForegroundServiceModule;
          const serviceNotifications = self.serviceNotifications;
          const items = [];
          HermesBuiltin.arraySpread(serviceNotifications.values(), 0);
          ForegroundServiceModule2.startService(items);
        } else {
          const ForegroundServiceModule = closure_8.ForegroundServiceModule;
          ForegroundServiceModule.stopService();
        }
      };
      return;
    }
  }
  const importDefault = ForegroundServiceManager;
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "terminate",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "addServiceHandler",
    value(arg0) {
      const ForegroundServiceManager = this;
      return new Promise((arg0) => {
        const serviceNotificationIdentifier = self.serviceNotificationIdentifier;
        self.serviceNotificationIdentifier = self.serviceNotificationIdentifier + 1;
        self.updateServiceHandler(serviceNotificationIdentifier, arg0);
        arg0(serviceNotificationIdentifier);
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateServiceHandler",
    value(arg0, usesGateway) {
      const self = this;
      if (null == usesGateway) {
        const serviceNotifications2 = self.serviceNotifications;
        if (serviceNotifications2.has(arg0)) {
          callback(closure_2[6]).stopRequest(callback3(arg0));
          const serviceNotifications3 = self.serviceNotifications;
          serviceNotifications3.delete(arg0);
          self.handleChange();
          const obj2 = callback(closure_2[6]);
        }
      } else {
        const serviceNotifications4 = self.serviceNotifications;
        if (!tmp17(serviceNotifications4.get(arg0), usesGateway)) {
          const obj = callback(closure_2[6]);
          if (usesGateway.usesGateway) {
            obj.setRequestedBy(callback3(arg0));
          } else {
            obj.stopRequest(callback3(arg0));
          }
          const serviceNotifications = self.serviceNotifications;
          const result = serviceNotifications.set(arg0, usesGateway);
          self.handleChange();
        }
        const tmp17 = ForegroundServiceManager(closure_2[7]);
      }
    }
  };
  items[4] = {
    key: "removeServiceHandler",
    value(arg0) {
      this.updateServiceHandler(arg0, null);
    }
  };
  items[5] = {
    key: "isForegroundServiceRunning",
    value(arg0) {
      const ForegroundServiceModule = obj.ForegroundServiceModule;
      ForegroundServiceModule.isServiceRunning(arg0);
    }
  };
  return callback2(ForegroundServiceManager, items);
}();
tmp2 = new tmp2();
let tmp4 = (arg0) => {
  class ForegroundServiceLifecycleManager {
    constructor() {
      self = this;
      tmp = closure_6(this, ForegroundServiceLifecycleManager);
      obj = closure_4(ForegroundServiceLifecycleManager);
      tmp2 = closure_3;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ForegroundServiceLifecycleManager;
  callback(ForegroundServiceLifecycleManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      closure_9.initialize();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "_terminate",
    value() {
      closure_9.terminate();
    }
  };
  items[1] = obj;
  obj = {
    key: "addServiceHandler",
    value(arg0) {
      return closure_9.addServiceHandler(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateServiceHandler",
    value(arg0, arg1) {
      closure_9.updateServiceHandler(arg0, arg1);
    }
  };
  items[4] = {
    key: "removeServiceHandler",
    value(arg0) {
      closure_9.removeServiceHandler(arg0);
    }
  };
  items[5] = {
    key: "isForegroundServiceRunning",
    value(arg0) {
      const result = closure_9.isForegroundServiceRunning(arg0);
    }
  };
  return callback2(ForegroundServiceLifecycleManager, items);
}(importDefault(dependencyMap[8]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/foreground_service/mobile/ForegroundServiceManager.android.tsx");

export default tmp4;
