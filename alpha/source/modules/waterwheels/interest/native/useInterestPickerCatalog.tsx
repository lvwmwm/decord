// Module ID: 18571
// Function ID: 18572
// Name: useInterestPickerCatalog
// Dependencies: [19, 18572, 18573, 2]
// Exports: default

// Module 18571 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18573 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(arg0) {
  let interestPickerGameList;
  let obj = interestPickerGameList(18572);
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
