// Module ID: 16597
// Function ID: 16598
// Name: ClearAllIncomingRequestsAlertModal
// Dependencies: [5, 19, 21, 9195, 5209, 1115, 5209, 2]
// Exports: default

// Module 16597 (ClearAllIncomingRequestsAlertModal)
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c0, c1;

let closure_4;
let hasOwnProperty;
function handleConfirm() {
  return obj(...arguments);
}
let obj = function _handleConfirm() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: obj2.clearPendingRelationships(), done: false };
            obj2 = RelationshipActionCreatorsDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  incomingRequestCount = incomingRequestCount.incomingRequestCount;
  obj = { title: intl.string(intl5.t.z2pFjo), content: intl2.formatToPlainString(intl5.t["0nTvEw"], { incomingRequestCount }), actions: hasOwnProperty(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", onPress: handleConfirm, text: intl3.string(intl5.t["cY+Oob"]) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React3(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React3(AlertActionButton2, obj4, "cancel");
  return React3(AlertModal, obj);
};
