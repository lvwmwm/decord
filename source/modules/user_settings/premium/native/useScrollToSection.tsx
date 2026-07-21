// Module ID: 7448
// Function ID: 59734
// Name: useScrollToSection
// Dependencies: []
// Exports: default

// Module 7448 (useScrollToSection)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  const React = arg0;
  let closure_2 = React.useRef(false);
  const items = [arg1, arg0];
  return {
    createSectionLayoutHandler: React.useCallback((arg0) => (nativeEvent) => {
      let current = nativeEvent !== closure_1;
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        const current2 = nativeEvent.current;
        if (null != current2) {
          const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
          current2.scrollTo(obj);
        }
      }
    }, items)
  };
};
