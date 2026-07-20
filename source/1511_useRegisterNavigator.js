// Module ID: 1511
// Function ID: 17387
// Name: useRegisterNavigator
// Dependencies: []
// Exports: default

// Module 1511 (useRegisterNavigator)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);

export default function useRegisterNavigator() {
  const first = callback(React.useState(() => first(context[2]).nanoid()), 1)[0];
  const arg1 = first;
  const context = React.useContext(arg1(dependencyMap[3]).SingleNavigatorContext);
  const dependencyMap = context;
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
    throw error;
  } else {
    const items = [context, first];
    const effect = React.useEffect(() => {
      const first = context.unregister;
      context.register(first);
      return () => unregister(unregister);
    }, items);
    return first;
  }
};
