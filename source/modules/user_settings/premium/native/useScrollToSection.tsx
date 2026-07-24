// Module ID: 12424
// Function ID: 96455
// Name: useScrollToSection
// Dependencies: [31, 2]
// Exports: default

// Module 12424 (useScrollToSection)
import result from "result";

const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  const React = arg0;
  let closure_1 = arg1;
  let closure_2 = React.useRef(false);
  const items = [arg1, arg0];
  return {
    createSectionLayoutHandler: React.useCallback((arg0) => {
      let result = arg0;
      return (nativeEvent) => {
        let current = ref !== outer1_1;
        if (!current) {
          current = outer1_2.current;
        }
        if (!current) {
          outer1_2.current = true;
          const current2 = ref.current;
          if (null != current2) {
            const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
            current2.scrollTo(obj);
          }
        }
      };
    }, items)
  };
};
