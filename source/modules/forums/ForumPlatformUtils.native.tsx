// Module ID: 6722
// Function ID: 6723
// Name: getSystemLocale
// Dependencies: [1236, 2]

// Module 6722 (getSystemLocale)
const result = require("set").fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LG9VAi);
  }
};
