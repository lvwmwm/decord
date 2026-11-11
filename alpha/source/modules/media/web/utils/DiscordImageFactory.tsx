// Module ID: 8841
// Function ID: 8842
// Name: DiscordImageFactory
// Dependencies: [8842, 8869, 2]

// Module 8841 (DiscordImageFactory)
import _mod8842 from "module_8842" /* 8842 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(8869);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod8842;
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
