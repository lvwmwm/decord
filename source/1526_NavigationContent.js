// Module ID: 1526
// Function ID: 17486
// Name: NavigationContent
// Dependencies: [31, 33]
// Exports: default

// Module 1526 (NavigationContent)
import result from "result";
import { jsx } from "jsxProd";

function NavigationContent(render) {
  return render.render(render.children);
}

export default function useComponent(current) {
  ref = ref.useRef(current);
  ref.current = current;
  const effect = ref.useEffect(() => {
    ref.current = null;
  });
  return ref.useRef((arg0) => {
    const current = ref.current;
    if (null === current) {
      const _Error = Error;
      const error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      const obj = { render: current, children: tmp };
      return outer1_1(outer1_2, obj);
    }
  }).current;
};
