// Module ID: 8673
// Function ID: 8674
// Name: getSystemLocale
// Dependencies: [1236, 2]

// Module 8673 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LG9VAi);
  }
};
