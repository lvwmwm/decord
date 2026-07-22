// Module ID: 4690
// Function ID: 40833
// Name: DiscordMd5
// Dependencies: []

// Module 4690 (DiscordMd5)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const tmp2 = () => {
  class DiscordMd5 {
    constructor() {
      tmp = closure_3(this, DiscordMd5);
      return;
    }
  }
  const dependencyMap = DiscordMd5;
  let obj = { key: "fromBlob" };
  let closure_0 = callback(async (arg0) => closure_1.fromArrayBuffer(yield arg0.arrayBuffer()));
  obj.value = function fromBlob(arg0) {
    return callback(...arguments);
  };
  const items = [obj, , ];
  obj = {
    key: "fromArrayBuffer",
    value(arg0) {
      const _ArrayBuffer = callback(DiscordMd5[3]).ArrayBuffer;
      return _ArrayBuffer.hash(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "fromDataURI",
    value(arg0) {
      let closure_0 = arg0;
      const resolved = Promise.resolve();
      return resolved.then(() => {
        let length;
        const match = /^data:[^;]*;base64,(.*)$/.exec(arg0);
        if (null == match) {
          const _Error = Error;
          const error = new Error("Not a base64 data URI");
          throw error;
        } else {
          const _atob = atob;
          const atobResult = atob(match[1]);
          const _ArrayBuffer2 = ArrayBuffer;
          const arrayBuffer = new ArrayBuffer(atobResult.length);
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(arrayBuffer);
          let num = 0;
          if (0 < atobResult.length) {
            do {
              uint8Array[num] = atobResult.charCodeAt(num);
              num = num + 1;
              length = atobResult.length;
            } while (num < length);
          }
          const _ArrayBuffer = arg0(closure_1[3]).ArrayBuffer;
          return _ArrayBuffer.hash(arrayBuffer);
        }
        const obj = /^data:[^;]*;base64,(.*)$/;
      });
    }
  };
  items[2] = obj;
  return callback2(DiscordMd5, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/discord_md5/DiscordMd5.tsx");

export default tmp2;
