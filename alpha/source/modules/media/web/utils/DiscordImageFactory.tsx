// Module ID: 8014
// Function ID: 8015
// Name: DiscordImageFactory
// Dependencies: [8015, 8042, 2]

// Module 8014 (DiscordImageFactory)
import _mod8015 from "module_8015" /* 8015 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(8042);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod8015;
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
