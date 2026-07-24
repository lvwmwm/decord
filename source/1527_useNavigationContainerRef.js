// Module ID: 1527
// Function ID: 17492
// Name: useNavigationContainerRef
// Dependencies: [31, 1474]
// Exports: default

// Module 1527 (useNavigationContainerRef)
import result from "result";


export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = importDefault(1474)();
  }
  return ref.current;
};
