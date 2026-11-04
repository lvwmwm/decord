// Module ID: 18680
// Function ID: 18681
// Name: useInterestPickerCatalog
// Dependencies: [19, 18681, 18682, 2]
// Exports: default

// Module 18680 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18682 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(arg0) {
  let interestPickerGameList;
  let obj = interestPickerGameList(18681);
  interestPickerGameList = obj.useInterestPickerGameList(arg0);
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
