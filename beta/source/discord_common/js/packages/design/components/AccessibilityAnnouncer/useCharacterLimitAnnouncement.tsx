// Module ID: 7861
// Function ID: 7862
// Name: useCharacterLimitAnnouncement
// Dependencies: [19, 5315, 2]
// Exports: useCharacterLimitAnnouncement

// Module 7861 (useCharacterLimitAnnouncement)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx");

export function useCharacterLimitAnnouncement(currentLength) {
  currentLength = currentLength.currentLength;
  const maxLength = currentLength.maxLength;
  const message = currentLength.message;
  const ref = message.useRef(false);
  const items = [currentLength, maxLength, message];
  const effect = message.useEffect(() => {
    if (null != maxLength) {
      if (currentLength >= tmp) {
        if (!ref.current) {
          tmp4.current = true;
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(message, "assertive");
        }
      }
      if (currentLength < tmp) {
        ref.current = false;
      }
    }
  }, items);
}
