// Module ID: 13635
// Function ID: 104739
// Name: UserProfileEditFormTextField
// Dependencies: [31, 33, 7645, 7574, 2]
// Exports: default

// Module 13635 (UserProfileEditFormTextField)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TextArea").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default function UserProfileEditFormTextField(inputRef) {
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let numberOfLines;
  ({ errorMessage, numberOfLines } = inputRef);
  ({ label, description, containerStyle } = inputRef);
  if (numberOfLines === undefined) {
    numberOfLines = 1;
  }
  inputRef = inputRef.inputRef;
  let obj = { label: 0, description: 0, errorMessage: 0, containerStyle: 0, numberOfLines: 0, inputRef: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(inputRef, obj);
  obj = { label, description, errorMessage, containerStyle };
  let str;
  if (null != errorMessage) {
    str = "error";
  }
  obj.status = str;
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    obj = { ref: inputRef };
    const merged2 = Object.assign(obj);
    let tmp10 = jsx(require(7645) /* TextArea */.TextArea, { ref: inputRef });
  } else {
    const obj1 = { ref: inputRef };
    const merged3 = Object.assign(obj);
    obj1["isClearable"] = true;
    tmp10 = jsx(require(7574) /* TextInput */.TextInput, { ref: inputRef });
  }
  return tmp10;
};
