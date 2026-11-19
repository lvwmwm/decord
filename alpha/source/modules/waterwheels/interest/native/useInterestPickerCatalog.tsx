// Module ID: 19664
// Function ID: 19665
// Name: useInterestPickerCatalog
// Dependencies: [19, 17876, 17877, 2]
// Exports: default

// Module 19664 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 17877 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  let interestPickerGameList;
  let obj = interestPickerGameList(17876);
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
