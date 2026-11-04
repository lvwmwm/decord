// Module ID: 18666
// Function ID: 18667
// Name: useInterestPickerCatalog
// Dependencies: [19, 18667, 18668, 2]
// Exports: default

// Module 18666 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18668 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(arg0) {
  let interestPickerGameList;
  let obj = interestPickerGameList(18667);
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
