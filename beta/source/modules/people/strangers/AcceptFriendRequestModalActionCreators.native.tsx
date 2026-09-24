// Module ID: 11213
// Function ID: 11214
// Name: AcceptFriendRequestModalActionCreators
// Dependencies: [11214, 1078, 21, 1245, 5143, 11215, 1984, 2]
// Exports: openAcceptFriendRequestConfirmModal

// Module 11213 (AcceptFriendRequestModalActionCreators)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5143 */;
import Constants2 from "Constants" /* 11214 */;
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
      return asyncRequireImpl(11215, dependencyMap.paths).then((result) => {
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
