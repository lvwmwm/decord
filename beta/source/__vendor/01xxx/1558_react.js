// Module ID: 1558
// Function ID: 1559
// Name: react
// Dependencies: [19, 1528]
// Exports: useFocusEffect

// Module 1558 (react)
import _mod1528 from "module_1528" /* 1528 */;
import react from "react" /* 19 */;

let _undefined, c0, c1, navigation;


export const useFocusEffect = function useFocusEffect(react) {
  let closure_0 = react;
  const obj = _mod1528;
  navigation = obj.useNavigation();
  if (undefined !== arguments[1]) {
    let tmp2 = globalThis;
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [react, navigation];
  const effect = react.useEffect(() => {
    navigation = false;
    if (navigation.isFocused()) {
      let tmp3;
      let tmp = c0;
      const tmp2 = c0();
      if (undefined === tmp2) {
        tmp3 = tmp2;
      }
      c0 = tmp3;
      navigation = true;
    }
    let closure_2 = obj.addListener("focus", () => {
      const tmp = c1;
      if (!tmp) {
        let tmp5;
        if (undefined !== _undefined) {
          _undefined();
        }
        const tmp4 = _undefined();
        if (undefined === tmp4) {
          tmp5 = tmp4;
        }
        _undefined = tmp5;
        c1 = true;
      }
    });
    let closure_3 = obj.addListener("blur", () => {
      if (undefined !== _undefined) {
        _undefined();
      }
      _undefined = undefined;
      c1 = false;
    });
    return () => {
      if (undefined !== _undefined) {
        _undefined();
      }
      closure_2();
      closure_3();
    };
  }, items);
};
