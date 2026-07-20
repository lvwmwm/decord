// Module ID: 13448
// Function ID: 102143
// Name: useScrollToUserProfileEditFormSection
// Dependencies: []
// Exports: default

// Module 13448 (useScrollToUserProfileEditFormSection)
let closure_2 = importAll(dependencyMap[0]);
const findNodeHandle = arg1(dependencyMap[1]).findNodeHandle;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const ref = React.useRef({});
  const React = ref;
  const items = [closure_4];
  let closure_3 = arg1(dependencyMap[4]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    let tmp = null != arg1;
    if (tmp) {
      const current = ref.current;
      let tmp3;
      if (null != current) {
        tmp3 = current[closure_1];
      }
      tmp = null != tmp3;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = ref2.current[closure_1];
        const tmp = callback(ref.current);
        if (null != tmp) {
          if (null != obj) {
            obj.measureLayout(tmp, (arg0, arg1) => {
              const current = ref.current;
              if (null != current) {
                const obj = { x: arg0, y: arg1, animated: !closure_3 };
                current.scrollTo(obj);
              }
            });
          }
          obj = { scrollPosition: null };
          state.setState(obj);
        }
      }, 0);
    }
  });
  return ref;
};
