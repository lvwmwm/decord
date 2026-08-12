// Module ID: 7196
// Function ID: 7197
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7196 (useConstRef)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
