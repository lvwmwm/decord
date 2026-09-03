// Module ID: 7452
// Function ID: 7453
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7452 (useConstRef)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
