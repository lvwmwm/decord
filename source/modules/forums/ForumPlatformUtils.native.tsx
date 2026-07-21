// Module ID: 7480
// Function ID: 60038
// Dependencies: []

// Module 7480
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.LG9VAi);
  }
};
