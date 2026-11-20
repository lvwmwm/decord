// Module ID: 19482
// Function ID: 19483
// Name: useInterestPickerCatalog
// Dependencies: [19, 17703, 17704, 2]
// Exports: default

// Module 19482 (useInterestPickerCatalog)
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 17704 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestPickerCatalog.tsx");

export default function useInterestPickerCatalog(InterestPickerStep) {
  let interestPickerGameList;
  let obj = interestPickerGameList(17703);
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
