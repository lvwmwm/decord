// Module ID: 3968
// Function ID: 3969
// Name: AccessibilityAnnouncer
// Dependencies: [17, 3969, 2]

// Module 3968 (AccessibilityAnnouncer)
import { AccessibilityInfo } from "get ActivityIndicator";

let result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const result = require(3969) /* updateAccessibilityAnnouncerLiveRegionMessage */.updateAccessibilityAnnouncerLiveRegionMessage(intl);
      const obj = require(3969) /* updateAccessibilityAnnouncerLiveRegionMessage */;
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
