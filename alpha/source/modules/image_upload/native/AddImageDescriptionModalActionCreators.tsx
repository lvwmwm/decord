// Module ID: 12811
// Function ID: 12812
// Name: AddImageDescriptionModalActionCreators
// Dependencies: [5056, 5934, 12812, 2000, 2]

// Module 12811 (AddImageDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(12812, dependencyMap.paths), merged, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default obj;
