// Module ID: 8159
// Function ID: 8160
// Name: DiscordImageFactory
// Dependencies: [8160, 8187, 2]

// Module 8159 (DiscordImageFactory)
import _mod8160 from "module_8160" /* 8160 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(8187);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod8160;
    const detectFileResult = obj.detectFile(uint8Array);
    let mimeType;
    if (detectFileResult != null) {
      mimeType = detectFileResult.mimeType;
    }
    let obj2 = null;
    if ("image/png" === mimeType) {
      const DiscordImagePng = DiscordImagePng2.DiscordImagePng;
      obj2 = DiscordImagePng.create(byteLength);
    }
    return obj2;
  }
}

export { DiscordImageFactory };
