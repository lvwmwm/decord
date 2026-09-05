// Module ID: 4272
// Function ID: 4273
// Name: AccessibilityAnnouncer
// Dependencies: [17, 4273, 2]

// Module 4272 (AccessibilityAnnouncer)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 4273 */;

const AccessibilityInfo = get_ActivityIndicator.AccessibilityInfo;
let result = set.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = updateAccessibilityAnnouncerLiveRegionMessage.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = updateAccessibilityAnnouncerLiveRegionMessage;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
