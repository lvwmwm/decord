// Module ID: 15460
// Function ID: 118996
// Name: AddFriendsContactSyncEmptyState
// Dependencies: [31, 27, 33, 4130, 689, 11722, 4126, 1212, 5459, 11709, 4543, 11705, 2]
// Exports: default

// Module 15460 (AddFriendsContactSyncEmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
let obj1 = { height: 135, width: 216, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerImage = obj1;
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%", textAlign: "center" };
_createForOfIteratorHelperLoose.title = obj2;
_createForOfIteratorHelperLoose.subtitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_48, width: "100%", alignContent: "center" };
_createForOfIteratorHelperLoose.subtitleText = { textAlign: "center" };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_48, width: "100%", alignContent: "center" };
_createForOfIteratorHelperLoose.trailing = { width: "100%", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { width: "100%", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.content };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: importDefault(11722) };
  const items = [callback(closure_4, obj), , , ];
  obj = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["/G+nci"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.subtitle };
  const obj2 = { style: tmp.subtitleText, variant: "text-sm/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const obj3 = { learnMoreHook: require(11709) /* isContactSyncAvailable */.handleOpenLearnMoreLink };
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.OXdOPf, obj3);
  obj1.children = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
  items[2] = callback(closure_3, obj1);
  const obj4 = { style: tmp.trailing };
  const obj5 = { variant: "primary", size: "lg" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl3.string(require(1212) /* getSystemLocale */.t.QUXSpo);
  obj5.onPress = function onPress() {
    outer1_0(outer1_2[11]).openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj4.children = callback(require(4543) /* Button */.Button, obj5);
  items[3] = callback(closure_3, obj4);
  obj.children = items;
  return callback2(closure_3, obj);
};
