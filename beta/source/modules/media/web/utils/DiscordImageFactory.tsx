// Module ID: 5495
// Function ID: 5496
// Name: DiscordImageFactory
// Dependencies: [5496, 5523, 2]

// Module 5495 (DiscordImageFactory)
import _mod5496 from "module_5496" /* 5496 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(5523);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod5496;
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
