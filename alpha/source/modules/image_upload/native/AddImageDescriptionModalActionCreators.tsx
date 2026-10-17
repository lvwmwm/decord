// Module ID: 13742
// Function ID: 13743
// Name: AddImageDescriptionModalActionCreators
// Dependencies: [5155, 6190, 13743, 2002, 2]

// Module 13742 (AddImageDescriptionModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(13743, dependencyMap.paths), merged, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default obj;
