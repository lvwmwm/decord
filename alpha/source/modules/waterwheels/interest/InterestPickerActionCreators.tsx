// Module ID: 18574
// Function ID: 18575
// Name: InterestPickerActionCreators
// Dependencies: [572, 2]
// Exports: markInterestPickerSeen, setInterestPickerPicks

// Module 18574 (InterestPickerActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerActionCreators.tsx");

export function setInterestPickerPicks(gameIds) {
  const obj = DispatcherDefault;
  const obj2 = { type: "WATERWHEELS_INTEREST_PICKER_SET_PICKS", gameIds };
  obj.dispatch(obj2);
}
export function markInterestPickerSeen() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_SEEN" });
}
