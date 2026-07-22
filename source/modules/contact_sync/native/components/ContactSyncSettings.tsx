// Module ID: 13633
// Function ID: 103267
// Name: syncContacts
// Dependencies: []
// Exports: default

// Module 13633 (syncContacts)
function syncContacts(arg0, arg1, arg2) {
  return _syncContacts(...arguments);
}
function _syncContacts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _syncContacts = obj;
  return obj(...arguments);
}
function updateFriendSync(localAccount, phone, arg2) {
  return _updateFriendSync(...arguments);
}
function _updateFriendSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateFriendSync = obj;
  return obj(...arguments);
}
function handleSyncContacts(localAccount, phone, arg2) {
  if (null == localAccount) {
    let obj = importDefault(dependencyMap[11]);
    obj = { type: constants3.CONTACT_SYNC_MODAL };
    obj = { page: "User Settings" };
    obj.location = obj;
    obj.track(constants.OPEN_MODAL, obj);
    const obj1 = { page: "User Settings" };
    phone(dependencyMap[12]).openContactSyncModal({}, obj1);
    const obj4 = phone(dependencyMap[12]);
  } else {
    updateFriendSync(localAccount, phone, arg2);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ deleteStoredContacts: closure_5, setStoredContacts: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_7, FriendDiscoveryFlags: closure_8, AnalyticsSections: closure_9 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
const tmp5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettings.tsx");

export default function ContactSyncSettings() {
  let obj = arg1(dependencyMap[6]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const arg1 = contactSyncAccount;
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  const importDefault = phone;
  let isStaffResult;
  if (null != stateFromStores) {
    isStaffResult = stateFromStores.isStaff();
  }
  let obj3 = arg1(dependencyMap[6]);
  const FriendDiscoverySettings = arg1(dependencyMap[14]).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj4 = arg1(dependencyMap[15]);
  const hasFlagResult = obj4.hasFlag(setting, constants2.FIND_BY_PHONE);
  const dependencyMap = hasFlagResult;
  let obj5 = arg1(dependencyMap[15]);
  const hasFlagResult1 = obj5.hasFlag(setting, constants2.FIND_BY_EMAIL);
  let closure_3 = hasFlagResult1;
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.bGSsnc);
  let tmp10 = null;
  if (isStaffResult) {
    obj1 = {};
    const obj2 = { "Null": "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl", "Null": null, onValueChange: arg1(dependencyMap[6]).adminDeleteContactSync };
    const items1 = [callback2(arg1(dependencyMap[16]).FormSwitchRow, obj2), callback2(arg1(dependencyMap[16]).FormDivider, {})];
    obj1.children = items1;
    tmp10 = callback3(closure_11, obj1);
  }
  const items2 = [tmp10, , ];
  obj3 = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj3.label = intl2.string(arg1(dependencyMap[8]).t.uSvEy7);
  obj3.value = obj3.isContactSyncEnabled(contactSyncAccount);
  obj3.onValueChange = function onValueChange(arg0) {
    callback(contactSyncAccount, phone, arg0);
  };
  items2[1] = callback2(arg1(dependencyMap[16]).FormSwitchRow, obj3);
  let tmp16 = null;
  if (null != contactSyncAccount) {
    obj4 = {};
    const items3 = [callback2(arg1(dependencyMap[16]).FormDivider, {}), ];
    obj5 = {};
    const intl3 = arg1(dependencyMap[8]).intl;
    obj5.label = intl3.string(arg1(dependencyMap[8]).t.nAsWKy);
    const obj6 = { label: contactSyncAccount.name };
    obj5.trailing = callback2(arg1(dependencyMap[16]).FormRow.Arrow, obj6);
    obj5.onPress = function onPress() {
      phone(hasFlagResult[11]).track(constants.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
      const obj = phone(hasFlagResult[11]);
      phone(hasFlagResult[17]).pushLazy(contactSyncAccount(hasFlagResult[19])(hasFlagResult[18], hasFlagResult.paths), "Contact Sync Name Update Modal");
    };
    items3[1] = callback2(arg1(dependencyMap[16]).FormRow, obj5);
    obj4.children = items3;
    tmp16 = callback3(closure_11, obj4);
  }
  items2[2] = tmp16;
  obj.children = items2;
  const items4 = [callback3(arg1(dependencyMap[16]).FormSection, obj), , , ];
  const obj7 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  const obj8 = { onClick: arg1(dependencyMap[6]).handleOpenLearnMoreLink };
  obj7.children = intl4.format(arg1(dependencyMap[8]).t.BoR0dO, obj8);
  items4[1] = callback2(arg1(dependencyMap[16]).FormHint, obj7);
  const obj9 = {};
  const intl5 = arg1(dependencyMap[8]).intl;
  obj9.children = intl5.string(arg1(dependencyMap[8]).t.cW1nr9);
  items4[2] = callback2(arg1(dependencyMap[16]).FormHint, obj9);
  const obj10 = {};
  const intl6 = arg1(dependencyMap[8]).intl;
  obj10.title = intl6.string(arg1(dependencyMap[8]).t.0t2wRW);
  const obj11 = {};
  const intl7 = arg1(dependencyMap[8]).intl;
  obj11.label = intl7.string(arg1(dependencyMap[8]).t.eJnn0+);
  const intl8 = arg1(dependencyMap[8]).intl;
  obj11.subLabel = intl8.string(arg1(dependencyMap[8]).t.X7pIKN);
  obj11.value = hasFlagResult;
  obj11.onValueChange = function onValueChange(phone) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone, email: hasFlagResult1 };
    const result = obj.updateDiscoverability(obj);
  };
  const items5 = [callback2(arg1(dependencyMap[16]).FormSwitchRow, obj11), callback2(arg1(dependencyMap[16]).FormDivider, {}), ];
  const obj12 = {};
  const intl9 = arg1(dependencyMap[8]).intl;
  obj12.label = intl9.string(arg1(dependencyMap[8]).t.dI4d4S);
  const intl10 = arg1(dependencyMap[8]).intl;
  obj12.subLabel = intl10.string(arg1(dependencyMap[8]).t.ilGsHE);
  obj12.value = hasFlagResult1;
  obj12.onValueChange = function onValueChange(email) {
    let obj = phone(hasFlagResult[10]);
    obj = { phone: hasFlagResult, email };
    const result = obj.updateDiscoverability(obj);
  };
  items5[2] = callback2(arg1(dependencyMap[16]).FormSwitchRow, obj12);
  obj10.children = items5;
  items4[3] = callback3(arg1(dependencyMap[16]).FormSection, obj10);
  obj.children = items4;
  return callback3(closure_11, obj);
};
export { syncContacts };
export { updateFriendSync };
export { handleSyncContacts };
