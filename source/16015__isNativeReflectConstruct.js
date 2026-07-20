// Module ID: 16015
// Function ID: 122957
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16015 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class ParticipantFocusManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = ParticipantFocusManager(this, ParticipantFocusManager);
      items1 = [...items];
      obj = closure_3(ParticipantFocusManager);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.stores = map.set(closure_6, tmp2Result.handleFocusParticipant);
      return tmp2Result;
    }
  }
  let closure_0 = ParticipantFocusManager;
  callback2(ParticipantFocusManager, arg0);
  const items = [
    {
      key: "handleFocusParticipant",
      value() {
        const channelId = store.getChannelId();
        if (null != channelId) {
          const selectedParticipantId = store2.getSelectedParticipantId(channelId);
          const videoParticipants = store2.getVideoParticipants(channelId);
          const rTCConnection = store.getRTCConnection();
          if (null != rTCConnection) {
            const found = videoParticipants.find((id) => id.id === closure_0 && !id.localVideoDisabled);
            let id;
            if (null != found) {
              id = found.id;
            }
            const result = rTCConnection.setSelectedParticipant(id);
          }
        }
      }
    }
  ];
  return callback(ParticipantFocusManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default tmp2;
