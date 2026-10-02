// Module ID: 5496
// Function ID: 5497
// Name: DiscordImageFactory
// Dependencies: [5497, 5524, 2]

// Module 5496 (DiscordImageFactory)
import _mod5497 from "module_5497" /* 5497 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(5524);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod5497;
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
