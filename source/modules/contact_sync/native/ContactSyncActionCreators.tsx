// Module ID: 11695
// Function ID: 90837
// Name: _updateDiscoverability
// Dependencies: []

// Module 11695 (_updateDiscoverability)
function _updateDiscoverability() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateDiscoverability = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, FriendDiscoveryFlags: closure_6, PlatformTypes: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}();
const obj = {
  updateName: () => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(),
  updateDiscoverability(arg0) {
    return _updateDiscoverability(...arguments);
  },
  updateContactSyncEnabled: () => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }()
};
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/contact_sync/native/ContactSyncActionCreators.tsx");

export default obj;
