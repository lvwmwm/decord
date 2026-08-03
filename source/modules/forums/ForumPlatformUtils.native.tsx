// Module ID: 7693
// Function ID: 7694
// Name: getSystemLocale
// Dependencies: [1236, 2]

// Module 7693 (getSystemLocale)
const result = require("set").fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LG9VAi);
  }
};
