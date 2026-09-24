// Module ID: 11223
// Function ID: 11224
// Name: AcceptFriendRequestModalActionCreators
// Dependencies: [11224, 1074, 21, 1241, 5196, 11225, 1980, 2]
// Exports: openAcceptFriendRequestConfirmModal

// Module 11223 (AcceptFriendRequestModalActionCreators)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import Constants2 from "Constants" /* 11224 */;
import size from "module_2" /* 2 */;

const type = Constants2.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type });
  const obj2 = { type };
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(11225, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onCancel = function onCancel() {
            closure_0.onClose();
            if (closure_2_1 != null) {
              tmp2();
            }
          };
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
