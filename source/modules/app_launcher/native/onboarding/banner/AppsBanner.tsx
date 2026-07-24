// Module ID: 11213
// Function ID: 87212
// Name: AppsBaner
// Dependencies: [31, 27, 33, 4130, 11214, 11211, 1212, 2]
// Exports: default

// Module 11213 (AppsBaner)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  obj = { style: tmp.rocketIconContainer, children: jsx(importDefault(11214), obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View style={tmp.rocketIcon} /> };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} />;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.sjRwMJ);
  return jsx(importDefault(11211), { image: <View style={tmp.rocketIcon} /> });
};
