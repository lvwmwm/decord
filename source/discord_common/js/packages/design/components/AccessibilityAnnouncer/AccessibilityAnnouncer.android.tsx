// Module ID: 3841
// Function ID: 32013
// Name: AccessibilityAnnouncer
// Dependencies: []

// Module 3841 (AccessibilityAnnouncer)
const AccessibilityInfo = require(dependencyMap[0]).AccessibilityInfo;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = require(dependencyMap[1]).updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = require(dependencyMap[1]);
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
