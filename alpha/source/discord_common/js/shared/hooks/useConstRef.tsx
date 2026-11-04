// Module ID: 7980
// Function ID: 7981
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 7980 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = react.useRef(current);
  ref.current = current;
  return ref;
};
