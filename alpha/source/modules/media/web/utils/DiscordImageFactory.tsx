// Module ID: 8017
// Function ID: 8018
// Name: DiscordImageFactory
// Dependencies: [8018, 8045, 2]

// Module 8017 (DiscordImageFactory)
import _mod8018 from "module_8018" /* 8018 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(8045);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod8018;
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
