// Module ID: 7769
// Function ID: 7770
// Name: DiscordImageFactory
// Dependencies: [7770, 7797, 2]

// Module 7769 (DiscordImageFactory)
import _mod7770 from "module_7770" /* 7770 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(7797);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod7770;
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
