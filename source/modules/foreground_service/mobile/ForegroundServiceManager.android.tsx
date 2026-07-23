// Module ID: 6999
// Function ID: 55955
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 27, 652, 636, 4530, 2]

// Module 6999 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import addToken from "addToken";
import isUndefinedOrNull from "isUndefinedOrNull";
import { NativeModules } from "get ActivityIndicator";
import tmp4 from "LifecycleManager";

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
let tmp2 = (() => {
  class ForegroundServiceManager {
    constructor() {
      self = this;
      tmp = outer1_6(this, self);
      map = new Map();
      this.serviceNotifications = map;
      this.serviceNotificationIdentifier = 1;
      this.handleChange = () => {
        if (self.serviceNotifications.size > 0) {
          const ForegroundServiceModule2 = outer2_8.ForegroundServiceModule;
          const serviceNotifications = self.serviceNotifications;
          const items = [];
          HermesBuiltin.arraySpread(serviceNotifications.values(), 0);
          ForegroundServiceModule2.startService(items);
        } else {
          const ForegroundServiceModule = outer2_8.ForegroundServiceModule;
          ForegroundServiceModule.stopService();
        }
      };
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {

    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "terminate",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "addServiceHandler",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      return new Promise((arg0) => {
        const serviceNotificationIdentifier = self.serviceNotificationIdentifier;
        self.serviceNotificationIdentifier = self.serviceNotificationIdentifier + 1;
        self.updateServiceHandler(serviceNotificationIdentifier, closure_1);
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
          outer1_1(outer1_2[6]).stopRequest(outer1_11(arg0));
          const serviceNotifications3 = self.serviceNotifications;
          serviceNotifications3.delete(arg0);
          self.handleChange();
          const obj2 = outer1_1(outer1_2[6]);
        }
      } else {
        const serviceNotifications4 = self.serviceNotifications;
        if (!tmp17(serviceNotifications4.get(arg0), usesGateway)) {
          const obj = outer1_1(outer1_2[6]);
          if (usesGateway.usesGateway) {
            obj.setRequestedBy(outer1_11(arg0));
          } else {
            obj.stopRequest(outer1_11(arg0));
          }
          const serviceNotifications = self.serviceNotifications;
          const result = serviceNotifications.set(arg0, usesGateway);
          self.handleChange();
        }
        tmp17 = ForegroundServiceManager(outer1_2[7]);
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
      const ForegroundServiceModule = outer1_8.ForegroundServiceModule;
      ForegroundServiceModule.isServiceRunning(arg0);
    }
  };
  return callback2(ForegroundServiceManager, items);
})();
tmp2 = new tmp2();
let closure_9 = tmp2;
tmp4 = new tmp4();
let result = require("_inherits").fileFinishedImporting("modules/foreground_service/mobile/ForegroundServiceManager.android.tsx");

export default tmp4;
