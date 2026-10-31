// Module ID: 16459
// Function ID: 16460
// Name: UserProfileEditFormTextField
// Dependencies: [19, 21, 7253, 7082, 2]
// Exports: default

// Module 16459 (UserProfileEditFormTextField)
import Fragment from "Fragment" /* 21 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7082 */;
import TextArea2 from "TextArea" /* 7253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default function UserProfileEditFormTextField(inputRef) {
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let numberOfLines;
  let str;
  let tmp9;
  ({ errorMessage, numberOfLines } = inputRef);
  ({ label, description, containerStyle } = inputRef);
  if (numberOfLines === undefined) {
    numberOfLines = 1;
  }
  inputRef = inputRef.inputRef;
  const merged = Object.assign(inputRef, Object.assign({ label: 0, description: 0, errorMessage: 0, containerStyle: 0, numberOfLines: 0, inputRef: 0 }));
  const obj = { label, description, errorMessage, containerStyle, status: str };
  str = undefined;
  if (null != errorMessage) {
    str = "error";
  }
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    const TextArea = TextArea2.TextArea;
    const merged2 = Object.assign(obj);
    tmp9 = <TextArea ref={inputRef} />;
  } else {
    const TextInput = TextInput_TextInput.TextInput;
    const merged3 = Object.assign(obj);
    tmp9 = <TextInput ref={inputRef} clearable />;
  }
  return tmp9;
};
