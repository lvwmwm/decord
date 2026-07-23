// Module ID: 4714
// Function ID: 41016
// Name: DiscordImageFactory
// Dependencies: [6, 7, 4715, 4742, 2]

// Module 4714 (DiscordImageFactory)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class DiscordImageFactory {
    constructor() {
      tmp = outer1_2(this, DiscordImageFactory);
      return;
    }
  }
  const items = [
    {
      key: "create",
      value(byteLength) {
        const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
        let obj = DiscordImageFactory(outer1_1[2]);
        const detectFileResult = obj.detectFile(uint8Array);
        let mimeType;
        if (null != detectFileResult) {
          mimeType = detectFileResult.mimeType;
        }
        obj = null;
        if ("image/png" === mimeType) {
          const DiscordImagePng = DiscordImageFactory(outer1_1[3]).DiscordImagePng;
          obj = DiscordImagePng.create(byteLength);
        }
        return obj;
      }
    }
  ];
  return callback(DiscordImageFactory, null, items);
})();
const result = require("detectFile").fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");

export const DiscordImageFactory = tmp2;
