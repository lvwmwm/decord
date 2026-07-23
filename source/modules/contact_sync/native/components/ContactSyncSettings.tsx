// Module ID: 13747
// Function ID: 105423
// Name: syncContacts
// Dependencies: [5, 31, 1849, 11708, 653, 33, 11709, 3831, 1212, 9176, 11713, 675, 11705, 566, 3803, 1360, 7495, 4337, 13748, 1934, 2]
// Exports: default

// Module 13747 (syncContacts)
import closure_3 from "jsxProd";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import setStoredContacts from "setStoredContacts";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function syncContacts(closure_1, closure_0, arg2) {
  return _syncContacts(...arguments);
}
function _syncContacts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function updateFriendSync(localAccount, phone, arg2) {
  return _updateFriendSync(...arguments);
}
function _updateFriendSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    let obj = importDefault(675);
    obj = { type: constants3.CONTACT_SYNC_MODAL };
    obj = { page: "User Settings" };
    obj.location = obj;
    obj.track(constants.OPEN_MODAL, obj);
    const obj1 = { page: "User Settings" };
    require(11705) /* handleNameInputScreenOrSuggestions */.openContactSyncModal({}, obj1);
    const obj4 = require(11705) /* handleNameInputScreenOrSuggestions */;
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
}
({ deleteStoredContacts: closure_5, setStoredContacts: closure_6 } = setStoredContacts);
({ AnalyticEvents: closure_7, FriendDiscoveryFlags: closure_8, AnalyticsSections: closure_9 } = ME);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  let obj = contactSyncAccount(11709);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = contactSyncAccount(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.getCurrentUser());
  let phone;
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  let isStaffResult;
  if (null != stateFromStores) {
    isStaffResult = stateFromStores.isStaff();
  }
  let obj3 = contactSyncAccount(11709);
  const FriendDiscoverySettings = contactSyncAccount(3803).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj4 = contactSyncAccount(1360);
  const hasFlagResult = obj4.hasFlag(setting, constants2.FIND_BY_PHONE);
  const dependencyMap = hasFlagResult;
  let obj5 = contactSyncAccount(1360);
  const hasFlagResult1 = obj5.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj = {};
  obj = {};
  const intl = contactSyncAccount(1212).intl;
  obj.title = intl.string(contactSyncAccount(1212).t.bGSsnc);
  let tmp10 = null;
  if (isStaffResult) {
    obj1 = {};
    const obj2 = { label: "STAFF ONLY - Find your friends deletion", value: true, onValueChange: contactSyncAccount(11709).adminDeleteContactSync };
    const items1 = [callback2(contactSyncAccount(7495).FormSwitchRow, obj2), callback2(contactSyncAccount(7495).FormDivider, {})];
    obj1.children = items1;
    tmp10 = callback3(closure_11, obj1);
  }
  const items2 = [tmp10, , ];
  obj3 = {};
  const intl2 = contactSyncAccount(1212).intl;
  obj3.label = intl2.string(contactSyncAccount(1212).t.uSvEy7);
  obj3.value = obj3.isContactSyncEnabled(contactSyncAccount);
  obj3.onValueChange = function onValueChange(arg0) {
    outer1_17(contactSyncAccount, phone, arg0);
  };
  items2[1] = callback2(contactSyncAccount(7495).FormSwitchRow, obj3);
  let tmp16 = null;
  if (null != contactSyncAccount) {
    obj4 = {};
    const items3 = [callback2(contactSyncAccount(7495).FormDivider, {}), ];
    obj5 = {};
    const intl3 = contactSyncAccount(1212).intl;
    obj5.label = intl3.string(contactSyncAccount(1212).t.nAsWKy);
    const obj6 = { label: contactSyncAccount.name };
    obj5.trailing = callback2(contactSyncAccount(7495).FormRow.Arrow, obj6);
    obj5.onPress = function onPress() {
      phone(hasFlagResult[11]).track(outer1_7.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
      const obj = phone(hasFlagResult[11]);
      phone(hasFlagResult[17]).pushLazy(contactSyncAccount(hasFlagResult[19])(hasFlagResult[18], hasFlagResult.paths), "Contact Sync Name Update Modal");
    };
    items3[1] = callback2(contactSyncAccount(7495).FormRow, obj5);
    obj4.children = items3;
    tmp16 = callback3(closure_11, obj4);
  }
  items2[2] = tmp16;
  obj.children = items2;
  const items4 = [callback3(contactSyncAccount(7495).FormSection, obj), , , ];
  const obj7 = {};
  const intl4 = contactSyncAccount(1212).intl;
  const obj8 = { onClick: contactSyncAccount(11709).handleOpenLearnMoreLink };
  obj7.children = intl4.format(contactSyncAccount(1212).t.BoR0dO, obj8);
  items4[1] = callback2(contactSyncAccount(7495).FormHint, obj7);
  const obj9 = {};
  const intl5 = contactSyncAccount(1212).intl;
  obj9.children = intl5.string(contactSyncAccount(1212).t.cW1nr9);
  items4[2] = callback2(contactSyncAccount(7495).FormHint, obj9);
  const obj10 = {};
  const intl6 = contactSyncAccount(1212).intl;
  obj10.title = intl6.string(contactSyncAccount(1212).t["0t2wRW"]);
  const obj11 = {};
  const intl7 = contactSyncAccount(1212).intl;
  obj11.label = intl7.string(contactSyncAccount(1212).t["eJnn0+"]);
  const intl8 = contactSyncAccount(1212).intl;
  obj11.subLabel = intl8.string(contactSyncAccount(1212).t.X7pIKN);
  obj11.value = hasFlagResult;
  obj11.onValueChange = function onValueChange(phone) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone, email: hasFlagResult1 };
    const result = obj.updateDiscoverability(obj);
  };
  const items5 = [callback2(contactSyncAccount(7495).FormSwitchRow, obj11), callback2(contactSyncAccount(7495).FormDivider, {}), ];
  const obj12 = {};
  const intl9 = contactSyncAccount(1212).intl;
  obj12.label = intl9.string(contactSyncAccount(1212).t.dI4d4S);
  const intl10 = contactSyncAccount(1212).intl;
  obj12.subLabel = intl10.string(contactSyncAccount(1212).t.ilGsHE);
  obj12.value = hasFlagResult1;
  obj12.onValueChange = function onValueChange(email) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone: closure_2, email };
    const result = obj.updateDiscoverability(obj);
  };
  items5[2] = callback2(contactSyncAccount(7495).FormSwitchRow, obj12);
  obj10.children = items5;
  items4[3] = callback3(contactSyncAccount(7495).FormSection, obj10);
  obj.children = items4;
  return callback3(closure_11, obj);
};
export { syncContacts };
export { updateFriendSync };
export { handleSyncContacts };
