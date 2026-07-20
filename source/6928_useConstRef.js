// Module ID: 6928
// Function ID: 55260
// Name: useConstRef
// Dependencies: []
// Exports: default

// Module 6928 (useConstRef)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
