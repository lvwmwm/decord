// Module ID: 7566
// Function ID: 60341
// Name: getSystemLocale
// Dependencies: [1212, 2]

// Module 7566 (getSystemLocale)
const result = require("set").fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.LG9VAi);
  }
};
