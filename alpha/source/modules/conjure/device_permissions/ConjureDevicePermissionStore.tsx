// Module ID: 10767
// Function ID: 10768
// Name: ConjureDevicePermissionStore
// Dependencies: [502, 504, 584, 2]

// Module 10767 (ConjureDevicePermissionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let obj = { users: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ConjureDevicePermissionStore extends DeviceSettingsStore {
  initialize(users) {
    this.waitFor(AuthenticationStore);
    users = undefined;
    if (users != null) {
      users = users.users;
    }
    if (users == null) {
      users = {};
    }
  }
  getDecision(applicationId, permission) {
    const id = AuthenticationStore.getId();
    let tmp2 = null;
    if (null != id) {
      let tmp5;
      if (obj.users[id] != null) {
        if (obj.users[id][applicationId] != null) {
          tmp5 = tmp7[permission];
        }
      }
      if (tmp5 == null) {
        tmp5 = null;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = ConjureDevicePermissionStore.prototype;
ConjureDevicePermissionStore.displayName = "ConjureDevicePermissionStore";
ConjureDevicePermissionStore.persistKey = "ConjureDevicePermissionStore";
obj = {
  CONJURE_DEVICE_PERMISSIONS_DECIDE: function handleDecide(allowed) {
    let applicationId;
    let permissions;
    ({ applicationId, permissions } = allowed);
    allowed = allowed.allowed;
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else {
      const users = obj.users;
      let tmp3 = users[id];
      if (tmp3 == null) {
        obj = {};
        users[id] = obj;
        tmp3 = obj;
      }
      let tmp4 = tmp3[applicationId];
      if (tmp4 == null) {
        const obj2 = {};
        tmp3[applicationId] = obj2;
        tmp4 = obj2;
      }
      const tmp6 = permissions[Symbol.iterator]();
      while (tmp6 !== undefined) {
        let str3 = "denied";
        if (allowed) {
          str3 = "granted";
        }
        tmp4[tmp8] = str3;
        continue;
      }
      const obj3 = {};
      const merged = Object.assign(obj);
      obj = obj3;
    }
  },
  CONJURE_DEVICE_PERMISSIONS_RESET: function handleReset(permissions) {
    permissions = permissions.permissions;
    let closure_0;
    const applicationId = permissions.applicationId;
    const id = AuthenticationStore.getId();
    let tmp2 = null;
    if (null != id) {
      let tmp5;
      if (obj.users[id] != null) {
        tmp5 = tmp4[applicationId];
      }
      tmp2 = tmp5;
    }
    closure_0 = tmp2;
    if (null != tmp2) {
      if (permissions.some((item) => null != closure_0[item])) {
        for (const item10021 of permissions) {
          delete tmp2[item10021];
          continue;
        }
        obj = {};
        const merged = Object.assign(obj);
      }
    }
    return false;
  }
};
const conjureDevicePermissionStore = new ConjureDevicePermissionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/ConjureDevicePermissionStore.tsx");

export default conjureDevicePermissionStore;
