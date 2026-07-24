// Module ID: 12733
// Function ID: 99167
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 587, 566, 686, 2]

// Module 12733 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c7 = null;
let c8 = null;
let c9 = null;
let tmp2 = ((Store) => {
  class MaintenanceStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, MaintenanceStore);
      obj = outer1_5(MaintenanceStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MaintenanceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = MaintenanceStore(outer1_1[5]).Storage;
      const outer1_9 = Storage.get("MaintenanceStore");
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIncident",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getScheduledMaintenance",
    value() {
      let scheduled_until;
      if (null != outer1_8) {
        scheduled_until = outer1_8.scheduled_until;
      }
      if (null == scheduled_until) {
        let scheduled_for;
        if (null != outer1_8) {
          scheduled_for = outer1_8.scheduled_for;
        }
        scheduled_until = scheduled_for;
      }
      let tmp3 = null;
      if (null != outer1_8) {
        tmp3 = null;
        if (outer1_8.id !== outer1_9) {
          if (null == scheduled_until) {
            tmp3 = outer1_8;
          } else {
            const _Date = Date;
            const _Date2 = Date;
            const timestamp = Date.now();
            const date = new Date(scheduled_until);
            tmp3 = null;
          }
        }
      }
      return tmp3;
    }
  };
  items[2] = obj;
  return callback(MaintenanceStore, items);
})(require("initialize").Store);
tmp2.displayName = "MaintenanceStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c7 = null;
  },
  STATUS_PAGE_INCIDENT: function handleIncident(incident) {
    incident = incident.incident;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function handleScheduledMaintenance(maintenance) {
    maintenance = maintenance.maintenance;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function handleScheduledMaintenanceAck() {
    if (null == _null) {
      return false;
    } else {
      const id = _null.id;
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set("MaintenanceStore", id);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/StatusPageStore.tsx");

export default tmp2;
