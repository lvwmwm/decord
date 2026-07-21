// Module ID: 6932
// Function ID: 55270
// Name: useConstRef
// Dependencies: []
// Exports: default

// Module 6932 (useConstRef)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};
