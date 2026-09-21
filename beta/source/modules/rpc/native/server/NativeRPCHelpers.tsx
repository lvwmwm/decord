// Module ID: 9581
// Function ID: 9582
// Name: NativeRPCHelpers
// Dependencies: [5, 4663, 1078, 9582, 9577, 2]
// Exports: getDeprecatedVoiceSettings, getVoiceSettings, validateSocketClient

// Module 9581 (NativeRPCHelpers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const TransportTypes = fn(4663).TransportTypes;
const RPCCloseCodes = fn(1078).RPCCloseCodes;
let closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            constants = 0;
            closure_131_0 = closure_0;
            closure_131_1 = closure_1;
            closure_131_2 = dependencyMap;
            const result = closure_0(9582).validateOriginAndUpdateSocket(closure_0, closure_1);
            if (null == dependencyMap) {
              const obj5 = { closeCode: constants.INVALID_CLIENTID };
              const tmp23 = new closure_1(9577)(obj5, "No Client ID Specified");
              c6 = 3;
              const obj6 = { value: Promise.reject(tmp23), done: true };
              return obj6;
            } else {
              c5 = 1;
              c6 = 1;
              const obj7 = { value: closure_0(9582).processSocketThrottlers(tmp32, tmp30.transport !== tmp2.POST_MESSAGE, tmp30.abortController.signal), done: false };
              return obj7;
            }
            const obj10 = closure_0(9582);
            tmp32 = dependencyMap;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c6 = 3;
          const obj9 = { value: closure_0(9582).validateSocketApplication(closure_131_0, closure_131_2, closure_131_1), done: true };
          return obj9;
        }
      } catch (tmp25) {
        c6 = tmp;
        throw tmp25;
      }
    }
  })();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

export const validateSocketClient = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getDeprecatedVoiceSettings = () => closure_0(9582).getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (arg0) => closure_0(9582).getVoiceSettingsWithShortcut(arg0, () => "");
