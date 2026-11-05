// Module ID: 18710
// Function ID: 18711
// Name: useInterestPickerCatalog
// Dependencies: [19, 18711, 18712, 2]
// Exports: default

// Module 18710 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18712 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  let interestPickerGameList;
  let obj = interestPickerGameList(18711);
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
