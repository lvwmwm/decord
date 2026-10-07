// Module ID: 4590
// Function ID: 4591
// Name: AccessibilityAnnouncer
// Dependencies: [17, 4591, 2]

// Module 4590 (AccessibilityAnnouncer)
import react_native from "react-native" /* 17 */;
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4591 */;
import size from "module_2" /* 2 */;

const AccessibilityInfo = react_native.AccessibilityInfo;
let obj = {
  announce(intl, polite) {
    if ("polite" === polite) {
      const obj = AccessibilityAnnouncerLiveRegion;
      const result = obj.updateAccessibilityAnnouncerLiveRegionMessage(intl);
    } else {
      const result1 = AccessibilityInfo.announceForAccessibility(intl);
    }
  },
  clearAnnouncements() {
    return null;
  }
};
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx");

export const AccessibilityAnnouncer = obj;
