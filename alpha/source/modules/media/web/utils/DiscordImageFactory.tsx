// Module ID: 7797
// Function ID: 7798
// Name: DiscordImageFactory
// Dependencies: [7798, 7825, 2]

// Module 7797 (DiscordImageFactory)
import _mod7798 from "module_7798" /* 7798 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(7825);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod7798;
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
