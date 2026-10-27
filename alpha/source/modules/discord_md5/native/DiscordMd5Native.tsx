// Module ID: 8160
// Function ID: 8161
// Name: DiscordMd5Native
// Dependencies: [7082, 1161, 2]

// Module 8160 (DiscordMd5Native)
import react_nativeDefault from "react-native" /* 1161 */;
import DiscordMd5 from "DiscordMd5" /* 7082 */;
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
