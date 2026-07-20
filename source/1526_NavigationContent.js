// Module ID: 1526
// Function ID: 17480
// Name: NavigationContent
// Dependencies: []
// Exports: default

// Module 1526 (NavigationContent)
let closure_0 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
function NavigationContent(render) {
  return render.render(render.children);
}

export default function useComponent(current) {
  const ref = React.useRef(current);
  const React = ref;
  ref.current = current;
  const effect = React.useEffect(() => {
    ref.current = null;
  });
  return React.useRef((arg0) => {
    const current = ref.current;
    if (null === current) {
      const _Error = Error;
      const error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      const obj = { render: current, children: tmp };
      return callback(closure_2, obj);
    }
  }).current;
};
