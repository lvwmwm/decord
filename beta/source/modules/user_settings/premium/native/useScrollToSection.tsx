// Module ID: 12963
// Function ID: 12964
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 12963 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  let items;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = react.useRef(false);
  let obj = {
    createSectionLayoutHandler: react.useCallback((arg0) => {
      let ref2;
      const ref = arg0;
      return (nativeEvent) => {
        const current = ref !== closure_1 || ref2.current;
        if (!current) {
          ref2.current = true;
          const current2 = ref.current;
          if (current2 != null) {
            const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
            current2.scrollTo(obj);
          }
        }
      };
    }, items)
  };
  items = [arg1, arg0];
  return obj;
};
