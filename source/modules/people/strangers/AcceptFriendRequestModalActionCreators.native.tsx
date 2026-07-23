// Module ID: 9060
// Function ID: 71147
// Name: openAcceptFriendRequestConfirmModal
// Dependencies: [9061, 653, 33, 675, 4471, 9062, 1934, 2]
// Exports: openAcceptFriendRequestConfirmModal

// Module 9060 (openAcceptFriendRequestConfirmModal)
import { ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID as closure_3 } from "RELATIONSHIP_COUNT_ANIMATION_THRESHOLD";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  let importDefault;
  let require;
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  let obj = importDefault(675);
  obj = { type: closure_3 };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {
    importer() {
      return outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          let closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onCancel"] = function onCancel() {
            closure_0.onClose();
            if (null != outer3_1) {
              outer3_1();
            }
          };
          obj["onConfirm"] = outer2_0;
          return outer3_5(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
