// Module ID: 7697
// Function ID: 7698
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7697 (useConstRef)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
