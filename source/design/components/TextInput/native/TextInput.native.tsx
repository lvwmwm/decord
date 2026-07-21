// Module ID: 7506
// Function ID: 60137
// Name: TextInput
// Dependencies: [1476395029, 33554461, 2030043136, 31, 33, 4126]

// Module 7506 (TextInput)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = importAllResult.forwardRef((fieldLabel, ref) => {
  let accessibilityLabel;
  let label;
  let status;
  ({ label, accessibilityLabel, status } = fieldLabel);
  const id = importAllResult.useId();
  fieldLabel = fieldLabel.fieldLabel;
  if (null == fieldLabel) {
    let tmp2;
    if ("string" === typeof label) {
      tmp2 = label;
    }
    fieldLabel = tmp2;
  }
  if (null == status) {
    let str2;
    if (null != fieldLabel.errorMessage) {
      str2 = "error";
    }
    status = str2;
  }
  let obj = {};
  const merged = Object.assign(fieldLabel);
  let tmp5;
  if (null != label) {
    tmp5 = id;
  }
  obj["labelId"] = tmp5;
  obj = { ref };
  const merged1 = Object.assign(fieldLabel);
  obj["status"] = status;
  obj["fieldLabel"] = fieldLabel;
  if (!obj3.isAndroid()) {
    if (null == accessibilityLabel) {
      let tmp9;
      if ("string" === typeof label) {
        tmp9 = label;
      }
      accessibilityLabel = tmp9;
    }
    const tmp8 = accessibilityLabel;
  }
  obj["accessibilityLabel"] = tmp8;
  let tmp10;
  if (null != label) {
    tmp10 = id;
  }
  obj["accessibilityLabelledBy"] = tmp10;
  obj["children"] = jsx(ref(dependencyMap[3]).TextField, obj);
  return jsx(ref(dependencyMap[2]).Input, obj);
});
