// Module ID: 7901
// Function ID: 7902
// Name: useCharacterLimitAnnouncement
// Dependencies: [19, 3997, 2]
// Exports: useCharacterLimitAnnouncement

// Module 7901 (useCharacterLimitAnnouncement)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx");

export const useCharacterLimitAnnouncement = function useCharacterLimitAnnouncement(currentLength) {
  currentLength = currentLength.currentLength;
  const maxLength = currentLength.maxLength;
  const message = currentLength.message;
  let closure_3;
  closure_3 = message.useRef(false);
  const items = [currentLength, maxLength, message];
  const effect = message.useEffect(() => {
    if (null != maxLength) {
      if (currentLength >= tmp) {
        if (!ref.current) {
          tmp4.current = true;
          const AccessibilityAnnouncer = currentLength(maxLength[1]).AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(message, "assertive");
        }
      }
      if (currentLength < tmp) {
        ref.current = false;
      }
    }
  }, items);
};
