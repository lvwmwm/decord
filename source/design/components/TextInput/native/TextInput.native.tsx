// Module ID: 7507
// Function ID: 60160
// Name: TextInput
// Dependencies: [1493172245, 33554461, 2030043136, 31, 33, 4126]

// Module 7507 (TextInput)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = importAllResult.forwardRef((errorMessage, ref) => {
  let accessibilityLabel;
  let label;
  let status;
  ({ label, accessibilityLabel, status } = errorMessage);
  const id = importAllResult.useId();
  if (null == status) {
    let str;
    if (null != errorMessage.errorMessage) {
      str = "error";
    }
    status = str;
  }
  let obj = {};
  const merged = Object.assign(errorMessage);
  let tmp4;
  if (null != label) {
    tmp4 = id;
  }
  obj["labelId"] = tmp4;
  obj = { ref };
  const merged1 = Object.assign(errorMessage);
  obj["status"] = status;
  if (!obj3.isAndroid()) {
    if (null == accessibilityLabel) {
      let tmp8;
      if ("string" === typeof label) {
        tmp8 = label;
      }
      accessibilityLabel = tmp8;
    }
    const tmp7 = accessibilityLabel;
  }
  obj["accessibilityLabel"] = tmp7;
  let tmp9;
  if (null != label) {
    tmp9 = id;
  }
  obj["accessibilityLabelledBy"] = tmp9;
  obj["children"] = jsx(ref(dependencyMap[3]).TextField, obj);
  return jsx(ref(dependencyMap[2]).Input, obj);
});
