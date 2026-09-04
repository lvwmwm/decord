// Module ID: 8332
// Function ID: 8333
// Name: getSystemLocale
// Dependencies: [1233, 2]

// Module 8332 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LG9VAi);
  }
};
