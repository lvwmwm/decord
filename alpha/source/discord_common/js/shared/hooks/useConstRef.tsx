// Module ID: 7771
// Function ID: 7772
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 7771 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = react.useRef(current);
  ref.current = current;
  return ref;
};
