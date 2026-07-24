// Module ID: 6937
// Function ID: 55336
// Name: useConstRef
// Dependencies: [31, 2]
// Exports: default

// Module 6937 (useConstRef)
import result from "result";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
