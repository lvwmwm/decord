// Module ID: 16134
// Function ID: 125072
// Name: RedesignDiscoverabilityLanding
// Dependencies: [31, 27, 33, 4130, 689, 1557, 5084, 4126, 1212, 5085, 11785, 11709, 4543, 2]
// Exports: default

// Module 16134 (RedesignDiscoverabilityLanding)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.topContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.growContainer = { flexGrow: 2 };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.image = { width: "100%", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj2 = { width: "100%", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
const result = require("jsxProd").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container, alwaysBounceVertical: false };
  obj = { flexGrow: 2, paddingTop: require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + 32, paddingBottom: importDefault(1557)().bottom + 16, paddingHorizontal: importDefault(689).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.topContainer };
  const items = [callback(closure_3, obj), , , , , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.n8nw6j);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.KMW0kP);
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { resizeMode: "contain", style: tmp.image, source: importDefault(11785) };
  items[3] = callback(importDefault(5085), obj3);
  const obj4 = { style: tmp.info, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const items1 = [intl3.string(require(1212) /* getSystemLocale */.t.ci12MJ), " ", ];
  const intl4 = require(1212) /* getSystemLocale */.intl;
  items1[2] = intl4.format(require(1212) /* getSystemLocale */.t.VcSQ4n, {
    learnMoreHook(children) {
      const obj = { onPress: outer1_0(outer1_2[11]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      return outer1_5(outer1_0(outer1_2[7]).Text, obj, arg1);
    }
  });
  obj4.children = items1;
  items[4] = callback2(require(4126) /* Text */.Text, obj4);
  items[5] = callback(closure_3, { style: tmp.growContainer });
  const obj7 = { variant: "primary", size: "lg" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl5.string(require(1212) /* getSystemLocale */.t.gHPk3I);
  obj7.onPress = onNext.onNext;
  items[6] = callback(require(4543) /* Button */.Button, obj7);
  obj.children = items;
  return callback2(closure_4, obj);
};
