// Module ID: 4689
// Function ID: 40817
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4689 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
const tmp2 = (arg0) => {
  class DiscordMd5Native {
    constructor() {
      self = this;
      tmp = closure_3(this, DiscordMd5Native);
      obj = closure_6(DiscordMd5Native);
      tmp2 = closure_5;
      if (closure_9()) {
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
  const arg1 = DiscordMd5Native;
  callback2(DiscordMd5Native, arg0);
  const items = [
    {
      key: "fromFileUri",
      value(arg0) {
        let num = arg1;
        if (arg1 === undefined) {
          num = 4096;
        }
        if (obj.isAndroid()) {
          if (null == callback(closure_2[7])) {
            const _Error = Error;
            const error = new Error("RTNFileManager doesn't exist?");
            let rejectResult = Promise.reject(error);
          } else {
            rejectResult = callback(closure_2[7]).getFileHash(arg0, "md5", num);
            const obj2 = callback(closure_2[7]);
          }
        } else {
          const DCDFileManager = DCDFileManager.DCDFileManager;
          return DCDFileManager.getFileHash(arg0, "md5", num);
        }
      }
    }
  ];
  return callback(DiscordMd5Native, null, items);
}(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default tmp2;
