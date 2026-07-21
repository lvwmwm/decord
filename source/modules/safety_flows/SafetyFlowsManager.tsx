// Module ID: 16430
// Function ID: 126927
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16430 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpenSupplemental() {
  arg1(dependencyMap[5]).openSafetyFlow();
}
function handleSafetyFlowsModalOpen() {
  arg1(dependencyMap[5]).openSafetyFlow();
}
function handleUserRequiredActionUpdate(requiredAction) {
  arg1(dependencyMap[5]).openSafetyFlow({ requiredAction: requiredAction.requiredAction });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class SafetyFlowsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, SafetyFlowsManager);
      items1 = [...items];
      obj = closure_5(SafetyFlowsManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CONNECTION_OPEN_SUPPLEMENTAL: closure_8, SAFETY_FLOWS_MODAL_OPEN: closure_9, USER_REQUIRED_ACTION_UPDATE: closure_10 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = SafetyFlowsManager;
  callback2(SafetyFlowsManager, arg0);
  return callback(SafetyFlowsManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_flows/SafetyFlowsManager.tsx");

export default tmp2;
