// Module ID: 1551
// Function ID: 1552
// Name: useNavigationContainerRef
// Dependencies: [19, 1498]
// Exports: default

// Module 1551 (useNavigationContainerRef)
import noop from "noop";


export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = importDefault(1498)();
  }
  return ref.current;
};
