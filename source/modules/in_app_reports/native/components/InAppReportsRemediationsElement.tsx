// Module ID: 12333
// Function ID: 95958
// Name: RemediationsElement
// Dependencies: [31, 27, 33, 4130, 689, 5503, 1212, 2]
// Exports: default

// Module 12333 (RemediationsElement)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default function RemediationsElement(children) {
  let obj = { style: _createForOfIteratorHelperLoose().container };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["k+QA9N"]);
  obj.hasIcons = true;
  obj.children = children.children;
  obj.children = jsx(require(5503) /* TableRowGroupTitle */.TableRowGroup, {});
  return <View />;
};
