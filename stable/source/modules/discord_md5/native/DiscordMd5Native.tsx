// Module ID: 8886
// Function ID: 8887
// Name: DiscordMd5Native
// Dependencies: [7802, 1149, 2]

// Module 8886 (DiscordMd5Native)
import react_nativeDefault from "react-native" /* 1149 */;
import DiscordMd5 from "DiscordMd5" /* 7802 */;
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
