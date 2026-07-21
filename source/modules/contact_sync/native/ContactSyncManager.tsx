// Module ID: 11699
// Function ID: 90838
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: removeLastUserContactsUpload

// Module 11699 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _requestAndSyncContacts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _requestAndSyncContacts = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ setStoredContacts: closure_10, deleteStoredContacts: closure_11, useContactSyncStore: closure_12 } = arg1(dependencyMap[8]));
const ContactPermissions = arg1(dependencyMap[9]).ContactPermissions;
const PlatformTypes = arg1(dependencyMap[10]).PlatformTypes;
let closure_15 = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
let tmp3 = (arg0) => {
  class ContactSyncLifecycleManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ContactSyncLifecycleManager);
      items1 = [...items];
      obj = closure_5(ContactSyncLifecycleManager);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ContactSyncLifecycleManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            }
      };
      tmp2Result.handleConnectionOpen = () => {
        if (null != currentUser.getCurrentUser()) {
          const localAccount = localAccount.getLocalAccount(constants.CONTACTS);
          if (obj.isContactSyncEnabled(localAccount)) {
            const result = tmp2Result(closure_1[12]).checkContactPermissions();
            result.then((arg0) => {
              if (arg0 === constants.AUTHORIZED) {
                callback(closure_1[13]).runAfterInteractions(() => function requestAndSyncContacts() {
                  return callback(...arguments);
                }());
                const obj = callback(closure_1[13]);
              }
            });
            const obj2 = tmp2Result(closure_1[12]);
          }
          const obj = tmp2Result(closure_1[12]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = ContactSyncLifecycleManager;
  callback2(ContactSyncLifecycleManager, arg0);
  return callback(ContactSyncLifecycleManager);
}(importDefault(dependencyMap[14]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/contact_sync/native/ContactSyncManager.tsx");

export default tmp3;
export const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
export const removeLastUserContactsUpload = function removeLastUserContactsUpload() {
  const Storage = arg1(dependencyMap[11]).Storage;
  Storage.remove(closure_15);
};
