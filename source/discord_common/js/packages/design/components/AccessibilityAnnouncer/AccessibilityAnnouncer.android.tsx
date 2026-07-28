// Module ID: 3878
// Function ID: 32135
// Name: AccessibilityAnnouncer
// Dependencies: [27, 3879, 2]

// Module 3878 (AccessibilityAnnouncer)
import { AccessibilityInfo } from "get ActivityIndicator";

let result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = require(3879) /* updateAccessibilityAnnouncerLiveRegionMessage */.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = require(3879) /* updateAccessibilityAnnouncerLiveRegionMessage */;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
