// Module ID: 7314
// Function ID: 7315
// Name: DiscordImageFactory
// Dependencies: [7315, 7342, 2]

// Module 7314 (DiscordImageFactory)
import _mod7315 from "module_7315" /* 7315 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(7342);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod7315;
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
