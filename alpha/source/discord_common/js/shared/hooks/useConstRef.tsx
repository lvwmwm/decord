// Module ID: 7275
// Function ID: 7276
// Name: useConstRef
// Dependencies: [19, 2]
// Exports: default

// Module 7275 (useConstRef)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = noop.useRef(current);
  ref.current = current;
  return ref;
};
