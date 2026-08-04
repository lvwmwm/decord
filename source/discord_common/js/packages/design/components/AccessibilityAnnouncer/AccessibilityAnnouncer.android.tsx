// Module ID: 3998
// Function ID: 3999
// Name: AccessibilityAnnouncer
// Dependencies: [17, 3999, 2]

// Module 3998 (AccessibilityAnnouncer)
import { AccessibilityInfo } from "get ActivityIndicator";

let result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = require(3999) /* updateAccessibilityAnnouncerLiveRegionMessage */.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = require(3999) /* updateAccessibilityAnnouncerLiveRegionMessage */;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
