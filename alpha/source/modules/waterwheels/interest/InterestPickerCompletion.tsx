// Module ID: 18977
// Function ID: 18978
// Name: InterestPickerCompletion
// Dependencies: [2]
// Exports: getInterestPickerCompletion

// Module 18977 (InterestPickerCompletion)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerCompletion.tsx");

export function getInterestPickerCompletion(arg0, arg1) {
  let arr2;
  const items = [];
  const tmp2 = arg1;
  if (tmp2) {
    arr2 = items;
  } else {
    HermesBuiltin.arraySpread(items, arg0, 0);
    arr2 = items;
  }
  return { picks: arr2, pick_count: arr2.length, pick_ids: arr2 };
}
