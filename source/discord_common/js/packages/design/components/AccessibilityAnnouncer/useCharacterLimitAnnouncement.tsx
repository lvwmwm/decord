// Module ID: 7587
// Function ID: 60745
// Name: useCharacterLimitAnnouncement
// Dependencies: [31, 3844, 2]
// Exports: useCharacterLimitAnnouncement

// Module 7587 (useCharacterLimitAnnouncement)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx");

export const useCharacterLimitAnnouncement = function useCharacterLimitAnnouncement(currentLength) {
  currentLength = currentLength.currentLength;
  const maxLength = currentLength.maxLength;
  const message = currentLength.message;
  let closure_3 = message.useRef(false);
  const items = [currentLength, maxLength, message];
  const effect = message.useEffect(() => {
    if (null != maxLength) {
      if (currentLength >= maxLength) {
        if (!ref.current) {
          ref.current = true;
          const AccessibilityAnnouncer = currentLength(maxLength[1]).AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(message, "assertive");
        }
      }
      if (currentLength < maxLength) {
        ref.current = false;
      }
    }
  }, items);
};
