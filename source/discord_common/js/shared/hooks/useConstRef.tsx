// Module ID: 5928
// Function ID: 52642
// Name: useConstRef
// Dependencies: [31, 2]
// Exports: default

// Module 5928 (useConstRef)
import result from "result";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
