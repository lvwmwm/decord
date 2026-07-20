// Module ID: 1528
// Function ID: 17487
// Name: useNavigationState
// Dependencies: []
// Exports: default

// Module 1528 (useNavigationState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);

export default function useNavigationState(arg0) {
  const importDefault = arg0;
  const obj = importDefault(dependencyMap[2])();
  const dependencyMap = obj;
  const callback = callback(React.useState(() => arg0(obj.getState())), 2)[1];
  const React = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_3.current = arg0;
  });
  const items = [obj];
  const effect1 = React.useEffect(() => obj.addListener("state", (data) => {
    callback(ref.current(data.data.state));
  }), items);
  return arg0(obj.getState());
};
