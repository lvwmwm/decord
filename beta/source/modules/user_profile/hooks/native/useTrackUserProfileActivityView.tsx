// Module ID: 12595
// Function ID: 12596
// Name: useTrackUserProfileActivityView
// Dependencies: [32, 19, 8254, 504, 2]
// Exports: default

// Module 12595 (useTrackUserProfileActivityView)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useState: closure_4 } = react);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  let closure_2;
  let onAction;
  ({ userId: require, onAction } = arg0);
  _slicedToArray = undefined;
  const items = [ContentInventoryOutboxStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ContentInventoryOutboxStore.isFetchingUserOutbox(require));
  const tmp2 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp2[1];
  let closure_3 = tmp3;
  const items1 = [tmp3, onAction];
  closure_3(() => {
    const tmp = closure_3;
    if (tmp) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      closure_2(true);
    }
  }, items1);
};
