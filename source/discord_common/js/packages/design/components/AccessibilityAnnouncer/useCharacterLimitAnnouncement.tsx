// Module ID: 7506
// Function ID: 60146
// Name: useCharacterLimitAnnouncement
// Dependencies: []
// Exports: useCharacterLimitAnnouncement

// Module 7506 (useCharacterLimitAnnouncement)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx");

export const useCharacterLimitAnnouncement = function useCharacterLimitAnnouncement(currentLength) {
  currentLength = currentLength.currentLength;
  const arg1 = currentLength;
  const maxLength = currentLength.maxLength;
  const dependencyMap = maxLength;
  const message = currentLength.message;
  const React = message;
  let closure_3 = React.useRef(false);
  const items = [currentLength, maxLength, message];
  const effect = React.useEffect(() => {
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
