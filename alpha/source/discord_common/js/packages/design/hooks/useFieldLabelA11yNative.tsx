// Module ID: 5078
// Function ID: 5079
// Name: useFieldLabelA11yNative
// Dependencies: [19, 17, 5079, 2]
// Exports: useFieldLabelA11yNative

// Module 5078 (useFieldLabelA11yNative)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 5079 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx");

export function useFieldLabelA11yNative(merged) {
  let accessibilityLabel;
  let label;
  let tmp5;
  let tmp8;
  ({ label, accessibilityLabel } = merged);
  const id = react.useId();
  let tmp4;
  if (null != label) {
    tmp4 = id;
  }
  const obj = { labelId: tmp4, accessibilityLabel: tmp5, accessibilityLabelledBy: tmp8 };
  tmp5 = undefined;
  if (!(null != label && null == accessibilityLabel)) {
    if (accessibilityLabel == null) {
      const obj2 = react2;
      accessibilityLabel = obj2.getNodeText(label);
    }
    tmp5 = accessibilityLabel;
  }
  tmp8 = undefined;
  if (null != label && null == accessibilityLabel) {
    tmp8 = id;
  }
  return obj;
}
