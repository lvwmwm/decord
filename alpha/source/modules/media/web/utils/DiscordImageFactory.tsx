// Module ID: 7796
// Function ID: 7797
// Name: DiscordImageFactory
// Dependencies: [7797, 7824, 2]

// Module 7796 (DiscordImageFactory)
import _mod7797 from "module_7797" /* 7797 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(7824);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod7797;
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
