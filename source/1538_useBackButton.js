// Module ID: 1538
// Function ID: 17524
// Name: useBackButton
// Dependencies: []
// Exports: default

// Module 1538 (useBackButton)
let closure_0 = importAll(dependencyMap[0]);
arg1(dependencyMap[1]).BackHandler;

export default function useBackButton(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let closure_0 = closure_1.addEventListener("hardwareBackPress", () => {
      const current = ref.current;
      let tmp = null != current;
      if (tmp) {
        const tmp2 = !current.canGoBack();
        let flag = !tmp2;
        if (!tmp2) {
          current.goBack();
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => ref.remove();
  }, items);
};
