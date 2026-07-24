// Module ID: 11423
// Function ID: 88817
// Name: NewBadge
// Dependencies: [31, 27, 33, 4130, 477, 689, 3976, 8869, 4066, 4126, 1212, 2]
// Exports: default

// Module 11423 (NewBadge)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = { textAlign: "center", textTransform: "uppercase" };
  let num = 0;
  if (obj3.isIOS()) {
    num = 1;
  }
  obj.marginTop = num;
  obj.text = obj;
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.round, paddingHorizontal: 6, paddingVertical: 3 };
  obj3 = require(477) /* set */;
  if (obj5.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = importDefault(689).colors.BACKGROUND_BRAND;
    }
    obj.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj.base = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = importDefault(689).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp = importDefault(8869)();
  const tmp2 = importDefault(4066)();
  const tmp3 = callback(tmp, tmp2);
  let obj = { style: tmp3.base };
  obj = { variant: "text-xxs/bold", style: tmp3.text };
  if (obj3.isThemeLight(tmp2)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj.color = str;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xxs/bold", style: tmp3.text });
  return <View variant="text-xxs/bold" style={tmp3.text} />;
};
