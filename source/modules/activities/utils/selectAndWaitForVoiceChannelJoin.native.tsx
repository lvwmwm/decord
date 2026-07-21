// Module ID: 10814
// Function ID: 83966
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 10814 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _selectAndWaitForVoiceChannelJoin() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _selectAndWaitForVoiceChannelJoin = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[7]);
let closure_9 = (arg0) => {
  class JoinTimeoutError {
    constructor() {
      self = this;
      tmp = closure_4(this, JoinTimeoutError);
      obj = closure_6(JoinTimeoutError);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = JoinTimeoutError;
  callback3(JoinTimeoutError, arg0);
  return callback2(JoinTimeoutError);
}(importDefault(dependencyMap[6])(Error));
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx");

export default function selectAndWaitForVoiceChannelJoin() {
  return _selectAndWaitForVoiceChannelJoin(...arguments);
};
