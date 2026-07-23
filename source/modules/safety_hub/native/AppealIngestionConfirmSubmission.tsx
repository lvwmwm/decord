// Module ID: 11049
// Function ID: 86006
// Name: AppealIngestionConfirmSubmission
// Dependencies: [31, 27, 11026, 653, 33, 4130, 566, 11031, 1212, 11041, 11050, 7543, 4126, 4098, 11048, 1934, 686, 11044, 11045, 2]
// Exports: default

// Module 11049 (AppealIngestionConfirmSubmission)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = callback2();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_4.getAppealClassificationId());
  let obj1 = require(11031) /* useSafetyHubClassifications */;
  if (null == stateFromStores) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let obj2 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_4.getAppealSignal());
  let obj3 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => outer1_4.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (null != classification) {
    flagged_content = classification.flagged_content;
  }
  if (null == flagged_content) {
    flagged_content = [];
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t["C5q+pW"]);
  obj = {};
  const items3 = [callback(require(11041) /* getHeader */.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(require(1212) /* getSystemLocale */.t["G2g/g5"]) }), ];
  obj = { style: tmp.container };
  obj1 = {};
  const stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t["G2g/g5"]);
  const tmp8 = View;
  const tmp9 = importDefault(11050);
  const items4 = [require(7543) /* parseMessageEmbedForProps */.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj1.reasons = items4.filter((arg0) => arg0.length > 0);
  const items5 = [callback(tmp9, obj1), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp19 = flagged_content.length > 0;
    if (tmp19) {
      obj2 = { flaggedContent: flagged_content };
      tmp19 = callback(importDefault(11044), obj2);
    }
    items5[2] = tmp19;
    obj3 = { classification: safetyHubClassification.classification };
    items5[3] = callback(importDefault(11045), obj3);
    obj.children = items5;
    items3[1] = tmp7(tmp8, obj);
    obj.children = items3;
    return tmp7(require(11041) /* getHeader */.AppealIngestionModalScreen, obj);
  } else {
    const obj4 = {
      variant: "heading-md/normal",
      color: "text-link",
      style: tmp.detailsAction,
      onPress() {
          let obj = outer1_1(outer1_2[13]);
          obj = {
            onSave(userInput) {
              let obj = outer2_1(outer2_2[16]);
              obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              obj.dispatch(obj);
              outer2_1(outer2_2[13]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              return outer2_1(outer2_2[13]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          };
          return obj.openLazy(outer1_0(outer1_2[15])(outer1_2[14], outer1_2.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
        }
    };
    if (stateFromStores2.length > 0) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult2 = intl4.string(require(1212) /* getSystemLocale */.t.tnE3bZ);
    } else {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult2 = intl3.string(require(1212) /* getSystemLocale */.t.uoQFIp);
    }
    obj4.children = stringResult2;
    callback(require(4126) /* Text */.Text, obj4);
    const tmp10 = callback;
  }
};
