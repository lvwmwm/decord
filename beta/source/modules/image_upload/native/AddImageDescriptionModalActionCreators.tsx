// Module ID: 10791
// Function ID: 10792
// Name: AddImageDescriptionModalActionCreators
// Dependencies: [4801, 5040, 10792, 1987, 2]

// Module 10791 (AddImageDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(10792, dependencyMap.paths), merged, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default obj;
