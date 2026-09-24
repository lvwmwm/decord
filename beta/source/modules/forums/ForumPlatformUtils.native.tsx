// Module ID: 8710
// Function ID: 8711
// Name: ForumPlatformUtils
// Dependencies: [1119, 2]

// Module 8710 (ForumPlatformUtils)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};
