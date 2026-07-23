// Module ID: 13815
// Function ID: 105843
// Name: FamilyCenterMaxConnectionsBlurb
// Dependencies: [31, 27, 6770, 10134, 33, 4130, 689, 7123, 7124, 11064, 1212, 2198, 4126, 10137, 5459, 5121, 13776, 13816, 13818, 13827, 2]
// Exports: default

// Module 13815 (FamilyCenterMaxConnectionsBlurb)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import { THROUGHLINE_URL } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function FamilyCenterMaxConnectionsBlurb() {
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = _createForOfIteratorHelperLoose();
  require(11064) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  intl.formatToPlainString(importDefault(2198)["1/PzIj"], { maxConnections: importDefault(7124)() ? closure_5 : closure_6 });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  let tmp7 = null;
  if (hasMaxConnections) {
    obj = { style: tmp.container };
    obj = { variant: "text-xxs/medium", color: "text-muted", children: tmp6 };
    obj.children = callback(require(4126) /* Text */.Text, obj);
    tmp7 = callback(closure_3, obj);
  }
  return tmp7;
}
function FamilyCenterHelpLineInfo() {
  const tmp = callback3();
  let obj = require(10137) /* useShouldShowHelplineLink */;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  require(10137) /* useShouldShowHelplineLink */;
  if (shouldShowHelplineLink) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" };
    let formatResult = intl2.format(importDefault(2198)["KOwsf/"], obj);
  } else {
    formatResult = null;
    if (tmp4) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(importDefault(2198)["6tsC8u"], obj);
    }
  }
  let tmp13 = null;
  if (null != formatResult) {
    const obj1 = { style: tmp.container };
    const obj2 = { style: tmp.supportHeader, variant: "heading-sm/semibold" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl3.string(importDefault(2198)["7/tVhv"]);
    const items = [callback(require(4126) /* Text */.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj3);
    obj1.children = items;
    tmp13 = callback2(closure_3, obj1);
  }
  return tmp13;
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_5, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = items);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderTopWidth: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { container: { display: "flex", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 } };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj1.supportHeader = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj1);
const obj4 = { scrollView: { flex: 1 } };
let obj2 = { display: "flex", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj4.container = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj4);
const obj5 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = callback4();
  let obj = { style: tmp.scrollView };
  obj = { bottom: true };
  obj = { style: tmp.container };
  const items = [callback(importDefault(13776), {}), callback(importDefault(13816), {}), callback(importDefault(13818), {}), callback(importDefault(13827), {}), callback(FamilyCenterMaxConnectionsBlurb, {}), callback(FamilyCenterHelpLineInfo, {})];
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  obj.children = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};
