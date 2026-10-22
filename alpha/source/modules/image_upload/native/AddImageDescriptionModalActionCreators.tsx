// Module ID: 13923
// Function ID: 13924
// Name: AddImageDescriptionModalActionCreators
// Dependencies: [5196, 6657, 13924, 2002, 2]

// Module 13923 (AddImageDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(13924, dependencyMap.paths), merged, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default obj;
