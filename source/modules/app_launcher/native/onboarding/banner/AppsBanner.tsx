// Module ID: 11334
// Function ID: 11335
// Name: AppsBaner
// Dependencies: [19, 17, 21, 4255, 11335, 11332, 1236, 2]
// Exports: default

// Module 11334 (AppsBaner)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  obj = { style: tmp.rocketIconContainer, children: jsx(importDefault(11335), obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View style={tmp.rocketIcon} />, text: null };
  const tmp2 = <View image={<View style={tmp.rocketIcon} />} text={null} />;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.sjRwMJ);
  return jsx(importDefault(11332), { image: <View style={tmp.rocketIcon} />, text: null });
};
