// Module ID: 5985
// Function ID: 5986
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 5985 (useConstRef)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
