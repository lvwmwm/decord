// Module ID: 7181
// Function ID: 57846
// Name: useBottomSheetRef
// Dependencies: []
// Exports: useBottomSheetRef

// Module 7181 (useBottomSheetRef)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  const ref = React.useRef(null);
  const React = ref;
  const items = [ref];
  return {
    bottomSheetRef: ref,
    bottomSheetClose: React.useCallback(() => {
      const current = ref.current;
      if (null != current) {
        current.closeActionSheet();
      }
    }, items)
  };
};
