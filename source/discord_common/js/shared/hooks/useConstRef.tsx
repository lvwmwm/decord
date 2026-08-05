// Module ID: 7050
// Function ID: 7051
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7050 (useConstRef)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
