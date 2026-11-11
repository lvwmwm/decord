// Module ID: 18978
// Function ID: 18979
// Name: InterestPickerActionCreators
// Dependencies: [572, 2]
// Exports: markInterestPickerSeen, setInterestPickerOpen, setInterestPickerPicks

// Module 18978 (InterestPickerActionCreators)
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
export function setInterestPickerOpen(open) {
  const obj = DispatcherDefault;
  const obj2 = { type: "WATERWHEELS_INTEREST_PICKER_OPEN_CHANGE", open };
  obj.dispatch(obj2);
}
