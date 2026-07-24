// Module ID: 8816
// Function ID: 69572
// Name: UnsupportedFeatureModal
// Dependencies: [31, 27, 33, 5517, 5087, 4337, 4126, 1212, 2]
// Exports: default

// Module 8816 (UnsupportedFeatureModal)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported" };
  obj = {};
  obj = {
    title: onDismiss.title,
    headerLeft: onDismiss(5087).getHeaderCloseButton(() => {
      let arr = outer1_1(outer1_2[5]);
      arr = arr.pop();
      if (null != onDismiss) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 } };
      obj = { variant: "text-lg/normal", color: "text-default" };
      const intl = onDismiss(outer1_2[7]).intl;
      obj.children = intl.string(onDismiss(outer1_2[7]).t.I22zuX);
      obj.children = outer1_4(onDismiss(outer1_2[6]).Text, obj);
      return outer1_4(outer1_3, obj);
    }
  };
  obj.Unsupported = obj;
  obj.screens = obj;
  return jsx(onDismiss(5517).Navigator, {
    title: onDismiss.title,
    headerLeft: onDismiss(5087).getHeaderCloseButton(() => {
      let arr = outer1_1(outer1_2[5]);
      arr = arr.pop();
      if (null != onDismiss) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 } };
      obj = { variant: "text-lg/normal", color: "text-default" };
      const intl = onDismiss(outer1_2[7]).intl;
      obj.children = intl.string(onDismiss(outer1_2[7]).t.I22zuX);
      obj.children = outer1_4(onDismiss(outer1_2[6]).Text, obj);
      return outer1_4(outer1_3, obj);
    }
  });
};
