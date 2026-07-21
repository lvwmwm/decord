// Module ID: 9052
// Function ID: 71093
// Name: openAcceptFriendRequestConfirmModal
// Dependencies: []
// Exports: openAcceptFriendRequestConfirmModal

// Module 9052 (openAcceptFriendRequestConfirmModal)
let closure_3 = require(dependencyMap[0]).ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const jsx = require(dependencyMap[2]).jsx;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: closure_0, onCancel: closure_1 } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj = { type: closure_3 };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          let closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onCancel"] = function onCancel() {
            arg0.onClose();
            if (null != callback) {
              callback();
            }
          };
          obj["onConfirm"] = closure_0;
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[4]).openLazy(obj);
};
