// Module ID: 1527
// Function ID: 17485
// Name: useNavigationContainerRef
// Dependencies: []
// Exports: default

// Module 1527 (useNavigationContainerRef)
let closure_2 = importAll(dependencyMap[0]);

export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = importDefault(dependencyMap[1])();
  }
  return ref.current;
};
