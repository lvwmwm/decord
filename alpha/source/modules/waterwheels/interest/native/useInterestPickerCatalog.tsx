// Module ID: 19668
// Function ID: 19669
// Name: useInterestPickerCatalog
// Dependencies: [19, 17883, 17884, 2]
// Exports: default

// Module 19668 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 17884 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  let interestPickerGameList;
  let obj = interestPickerGameList(17883);
  interestPickerGameList = obj.useInterestPickerGameList(InterestPickerStep);
  const items = [interestPickerGameList];
  return react.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      const obj = InterestPickerCatalogs;
      interestPickerCatalog = obj.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
};
