// Module ID: 11361
// Function ID: 11362
// Name: AcceptFriendRequestModalActionCreators
// Dependencies: [11362, 1071, 21, 1256, 6047, 11363, 2120, 2]
// Exports: openAcceptFriendRequestConfirmModal

// Module 11361 (AcceptFriendRequestModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6047 */;
import Constants2 from "Constants" /* 11362 */;
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
      const promise = asyncRequire(11363, dependencyMap.paths);
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
