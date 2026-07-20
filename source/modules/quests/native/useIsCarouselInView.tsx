// Module ID: 13848
// Function ID: 104755
// Name: useIsCarouselInView
// Dependencies: []
// Exports: default

// Module 13848 (useIsCarouselInView)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default function useIsCarouselInView() {
  const containerRef = React.useRef(null);
  const importDefault = containerRef;
  const height = importDefault(dependencyMap[2])().height;
  const dependencyMap = height;
  const callback = React.useRef(height);
  const items = [height];
  const effect = React.useEffect(() => {
    closure_2.current = height;
  }, items);
  const tmp3 = callback(React.useState(true), 2);
  const isInView = tmp3[0];
  const React = tmp3[1];
  let closure_4 = React.useRef(isInView);
  const effect1 = React.useEffect(() => {
    const interval = setInterval(() => {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const bound = Math.min(arg5 + arg3, ref.current);
          let tmp2 = arg3 > 0;
          if (tmp2) {
            tmp2 = Math.max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
          }
          if (tmp2 !== ref2.current) {
            ref2.current = tmp2;
            callback(tmp2);
          }
        });
      }
    }, 1000);
    return () => clearInterval(closure_0);
  }, []);
  return { containerRef, isInView };
};
