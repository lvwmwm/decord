// Module ID: 4711
// Function ID: 40998
// Name: DiscordImageFactory
// Dependencies: []

// Module 4711 (DiscordImageFactory)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class DiscordImageFactory {
    constructor() {
      tmp = closure_2(this, DiscordImageFactory);
      return;
    }
  }
  const arg1 = DiscordImageFactory;
  const items = [
    {
      key: "create",
      value(byteLength) {
        const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
        let obj = DiscordImageFactory(closure_1[2]);
        const detectFileResult = obj.detectFile(uint8Array);
        let mimeType;
        if (null != detectFileResult) {
          mimeType = detectFileResult.mimeType;
        }
        obj = null;
        if ("image/png" === mimeType) {
          const DiscordImagePng = DiscordImageFactory(closure_1[3]).DiscordImagePng;
          obj = DiscordImagePng.create(byteLength);
        }
        return obj;
      }
    }
  ];
  return callback(DiscordImageFactory, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");

export const DiscordImageFactory = tmp2;
