// Module ID: 12563
// Function ID: 96662
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12563 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = null;
let closure_8 = null;
let closure_9 = null;
let tmp2 = (Store) => {
  class MaintenanceStore {
    constructor() {
      self = this;
      tmp = closure_2(this, MaintenanceStore);
      obj = closure_5(MaintenanceStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MaintenanceStore;
  callback2(MaintenanceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = MaintenanceStore(closure_1[5]).Storage;
      let closure_9 = Storage.get("MaintenanceStore");
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIncident",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getScheduledMaintenance",
    value() {
      let scheduled_until;
      if (null != closure_8) {
        scheduled_until = closure_8.scheduled_until;
      }
      if (null == scheduled_until) {
        let scheduled_for;
        if (null != closure_8) {
          scheduled_for = closure_8.scheduled_for;
        }
        scheduled_until = scheduled_for;
      }
      let tmp3 = null;
      if (null != closure_8) {
        tmp3 = null;
        if (closure_8.id !== closure_9) {
          if (null == scheduled_until) {
            tmp3 = closure_8;
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
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "MaintenanceStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_7 = null;
  },
  STATUS_PAGE_INCIDENT: function handleIncident(incident) {
    incident = incident.incident;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function handleScheduledMaintenance(maintenance) {
    maintenance = maintenance.maintenance;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function handleScheduledMaintenanceAck() {
    if (null == id) {
      return false;
    } else {
      const id2 = id.id;
      const Storage = arg1(dependencyMap[5]).Storage;
      const result = Storage.set("MaintenanceStore", id2);
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/StatusPageStore.tsx");

export default tmp2;
