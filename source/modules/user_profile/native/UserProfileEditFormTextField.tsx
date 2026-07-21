// Module ID: 13461
// Function ID: 102204
// Name: UserProfileEditFormTextField
// Dependencies: []
// Exports: default

// Module 13461 (UserProfileEditFormTextField)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

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
  let obj = { 0: true, 9223372036854775807: true, 0: true, 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true };
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
    let tmp10 = jsx(arg1(dependencyMap[2]).TextArea, obj);
  } else {
    const obj1 = { ref: inputRef };
    const merged3 = Object.assign(obj);
    obj1["isClearable"] = true;
    tmp10 = jsx(arg1(dependencyMap[3]).TextInput, obj1);
  }
  return tmp10;
};
