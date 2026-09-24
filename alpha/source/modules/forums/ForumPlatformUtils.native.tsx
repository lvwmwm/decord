// Module ID: 8752
// Function ID: 8753
// Name: ForumPlatformUtils
// Dependencies: [1115, 2]

// Module 8752 (ForumPlatformUtils)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};
