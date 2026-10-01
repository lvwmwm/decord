// Module ID: 7110
// Function ID: 7111
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 7110 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = react.useRef(current);
  ref.current = current;
  return ref;
};
