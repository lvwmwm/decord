// Module ID: 1507
// Function ID: 17341
// Name: useFocusEffect
// Dependencies: [31, 1478]
// Exports: default

// Module 1507 (useFocusEffect)
import module_31 from "module_31";


export default function useFocusEffect(module_31) {
  const importDefault = module_31;
  const tmp = importDefault(dependencyMap[1])();
  const dependencyMap = tmp;
  if (undefined !== arguments[1]) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [module_31, tmp];
  const effect = React.useEffect(() => {
    let tmp = false;
    function callback() {
      const tmp = callback();
      return tmp;
    }
    if (tmp.isFocused()) {
      let closure_0 = callback();
      tmp = true;
    }
    let closure_3 = tmp.addListener("focus", () => {
      if (!closure_1) {
        if (undefined !== callback) {
          callback();
        }
        const callback = callback();
        closure_1 = true;
      }
    });
    let closure_4 = tmp.addListener("blur", () => {
      if (undefined !== callback) {
        callback();
      }
      let callback;
      let closure_1 = false;
    });
    return () => {
      if (undefined !== callback) {
        callback();
      }
      callback2();
      callback3();
    };
  }, items);
};
