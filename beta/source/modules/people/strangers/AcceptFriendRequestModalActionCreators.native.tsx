// Module ID: 10893
// Function ID: 10894
// Name: AcceptFriendRequestModalActionCreators
// Dependencies: [10894, 1072, 21, 1252, 6123, 10895, 2118, 2]
// Exports: openAcceptFriendRequestConfirmModal

// Module 10893 (AcceptFriendRequestModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import Constants2 from "Constants" /* 10894 */;
import size from "module_2" /* 2 */;

const type = Constants2.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type };
  obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  const obj3 = actions_AlertActionCreatorsDefault;
  const obj4 = {
    importer() {
      let onConfirm;
      const promise = asyncRequire(10895, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          closure_0 = arg0;
          const merged = Object.assign(arg0);
          return <closure_0 onCancel={function onCancel() {
            closure_0.onClose();
            if (closure_2_1 != null) {
              tmp2();
            }
          }} onConfirm={onConfirm} />;
        };
      });
    },
    isDismissable: false
  };
  obj3.openLazy(obj4);
}
