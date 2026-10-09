// Module ID: 7778
// Function ID: 7779
// Name: DiscordImageFactory
// Dependencies: [7779, 7806, 2]

// Module 7778 (DiscordImageFactory)
import _mod7779 from "module_7779" /* 7779 */;
import size from "module_2" /* 2 */;

let tmp2;
const DiscordImagePng2 = tmp2(7806);
const result = size.fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
class DiscordImageFactory {
  static create(byteLength) {
    const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
    const obj = _mod7779;
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
