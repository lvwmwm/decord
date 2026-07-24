// Module ID: 1507
// Function ID: 17343
// Name: useFocusEffect
// Dependencies: [31, 1508]
// Exports: default

// Module 1507 (useFocusEffect)
import result from "result";


export default function useFocusEffect(c5) {
  const importDefault = c5;
  let tmp = importDefault(1508)();
  const dependencyMap = tmp;
  if (undefined !== arguments[1]) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [c5, tmp];
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
      if (!c1) {
        if (undefined !== callback) {
          callback();
        }
        callback = callback();
        c1 = true;
      }
    });
    let closure_4 = tmp.addListener("blur", () => {
      if (undefined !== callback) {
        callback();
      }
      callback = undefined;
      let c1 = false;
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
