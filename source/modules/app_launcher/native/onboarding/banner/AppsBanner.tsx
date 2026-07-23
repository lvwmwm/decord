// Module ID: 11183
// Function ID: 86943
// Name: AppsBaner
// Dependencies: [31, 27, 33, 4130, 11184, 11181, 1212, 2]
// Exports: default

// Module 11183 (AppsBaner)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  obj = { style: tmp.rocketIconContainer, children: jsx(importDefault(11184), obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View style={tmp.rocketIcon} /> };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} />;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.sjRwMJ);
  return jsx(importDefault(11181), { image: <View style={tmp.rocketIcon} /> });
};
