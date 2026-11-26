// Module ID: 8143
// Function ID: 8144
// Name: DiscordMd5Native
// Dependencies: [7340, 1148, 2]

// Module 8143 (DiscordMd5Native)
import react_nativeDefault from "react-native" /* 1148 */;
import DiscordMd5 from "DiscordMd5" /* 7340 */;
import size from "module_2" /* 2 */;

class DiscordMd5Native extends DiscordMd5 {
  static fromFileUri(uri) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 4096;
    }
    const obj = react_nativeDefault;
    return obj.getFileHash(uri, "md5", num);
  }
}
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default DiscordMd5Native;
