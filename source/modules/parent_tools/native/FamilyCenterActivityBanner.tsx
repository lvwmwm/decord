// Module ID: 13778
// Function ID: 105641
// Name: FamilyCenterActivityBannerButton
// Dependencies: [31, 27, 33, 4130, 7123, 7124, 13779, 689, 11064, 1212, 2198, 13786, 13787, 4126, 5459, 2]
// Exports: default

// Module 13778 (FamilyCenterActivityBannerButton)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterActivityBannerButton() {
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp3 = importDefault(7124)();
  const tmp = callback2();
  let tmp4 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp3) {
      tmp4 = null;
    }
    obj = { style: tmp.container };
    let tmp7Result = require(13779) /* FamilyCenterTeenQRCodeButtonInner */;
    tmp7Result = closure_5(tmp3 ? tmp7Result.FamilyCenterParentQRCodeButton : tmp7Result.FamilyCenterTeenQRCodeButton, {});
    obj.children = tmp7Result;
    closure_5(closure_3, obj);
    const tmp5 = closure_5;
    const tmp6 = closure_3;
    const tmp7 = closure_5;
  }
  return tmp4;
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%" } });
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, elevation: 2 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = { maxWidth: 243, maxHeight: 119, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.art = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const hasMaxConnections = obj.useHasMaxConnections();
  let obj1 = require(11064) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const tmp = importDefault;
  const tmp2 = importDefault(7124)();
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText = obj1.useAgeSpecificText(intl.string(importDefault(2198)["T7GyW+"]), intl2.string(importDefault(2198).goKE2b));
  let obj2 = require(11064) /* useAgeSpecificText */;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2198)["T7GyW+"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj = { style: tmp3.container };
  obj = {};
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(importDefault(2198).MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }), intl4.format(importDefault(2198).EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  if (tmp2) {
    let tmp14 = 13786;
  } else {
    tmp14 = 13787;
  }
  obj.source = tmp(tmp14);
  obj.style = tmp3.art;
  const items = [callback(closure_4, obj), , , ];
  obj1 = { style: tmp3.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj2 = { style: tmp3.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
  items[2] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
  let tmp15 = null;
  if (!hasMaxConnections) {
    tmp15 = callback(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp15;
  obj.children = items;
  return closure_6(closure_3, obj);
};
