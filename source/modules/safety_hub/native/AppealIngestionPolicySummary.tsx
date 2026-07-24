// Module ID: 11072
// Function ID: 86178
// Name: AppealIngestionPolicySummary
// Dependencies: [31, 27, 33, 4130, 689, 7588, 3974, 4126, 1212, 2]
// Exports: default

// Module 11072 (AppealIngestionPolicySummary)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 18 };
_createForOfIteratorHelperLoose.userContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7588) /* parseMessageEmbedForProps */;
  let description;
  if (null != classification) {
    description = classification.description;
  }
  let obj1 = require(3974) /* hexToRgb */;
  obj = { style: tmp.policy };
  const capitalizeTextResult = obj.capitalizeText(description);
  obj = { style: tmp.sectionTitle, variant: "text-sm/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.xsdcxh);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj1 = { style: items1, children: callback(require(4126) /* Text */.Text, { variant: "text-md/semibold", children: capitalizeTextResult }) };
  items1 = [tmp.userContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  items[1] = callback(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
