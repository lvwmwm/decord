// Module ID: 20395
// Function ID: 20396
// Name: useInterestPickerCatalog
// Dependencies: [19, 19072, 19073, 2]
// Exports: default

// Module 20395 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 19073 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  let interestPickerGameList;
  let obj = interestPickerGameList(19072);
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
