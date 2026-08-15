// Module ID: 7449
// Function ID: 7450
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7449 (useConstRef)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
