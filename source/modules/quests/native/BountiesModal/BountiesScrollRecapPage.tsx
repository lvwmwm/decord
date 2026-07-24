// Module ID: 13998
// Function ID: 107065
// Name: BountiesRecapOrbsBackground
// Dependencies: [31, 27, 4122, 33, 689, 4130, 477, 8043, 13999, 8346, 14000, 1557, 566, 14001, 4126, 1212, 8749, 4543, 2]
// Exports: BountiesScrollRecapPage

// Module 13998 (BountiesRecapOrbsBackground)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
function BountiesRecapOrbsBackground(arg0) {
  let reducedMotion;
  let style;
  ({ style, reducedMotion } = arg0);
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    obj = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none" };
    obj = { url: importDefault(13999), style: closure_3.absoluteFillObject, autoplay: !reducedMotion };
    obj.children = callback(require(8043) /* useAPNGPlayerControls */.APNGPlayer, obj);
    let tmpResult = tmp(closure_4, obj);
  } else {
    const obj1 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj2 = { uri: importDefault(14000) };
    obj1.source = obj2;
    obj1.style = style;
    obj1.paused = reducedMotion;
    tmpResult = tmp(require(8346) /* _isNativeReflectConstruct */.VideoComponent, obj1);
  }
  return tmpResult;
}
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const lg = require("_createForOfIteratorHelperLoose").radii.lg;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { overflow: "hidden", borderRadius: lg, backgroundColor: importDefault(689).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.root = obj;
  obj = { flex: 1, paddingHorizontal: importDefault(689).space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.content = obj;
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  obj.headerLabel = { paddingBottom: importDefault(689).space.PX_4, textTransform: "uppercase" };
  const obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: importDefault(689).space.PX_24, gap: importDefault(689).space.PX_8 };
  obj.titleRow = obj2;
  const obj1 = { paddingBottom: importDefault(689).space.PX_4, textTransform: "uppercase" };
  obj.actions = { position: "absolute", left: importDefault(689).space.PX_24, right: importDefault(689).space.PX_24, gap: importDefault(689).space.PX_12 };
  const obj4 = {};
  const obj3 = { position: "absolute", left: importDefault(689).space.PX_24, right: importDefault(689).space.PX_24, gap: importDefault(689).space.PX_12 };
  let num = 0;
  if (obj8.isIOS()) {
    num = 6;
  }
  obj4.marginTop = num;
  obj4.lineHeight = 46;
  obj.orbAmount = obj4;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  let onClose;
  let style;
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = callback3();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  obj = { style: items1, pointerEvents: "box-none" };
  items1 = [tmp.root, style];
  obj = { style: closure_3.absoluteFillObject, pointerEvents: "none" };
  const obj1 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  const obj2 = { uri: importDefault(14001) };
  obj1.source = obj2;
  obj1.style = closure_3.absoluteFillObject;
  obj1.paused = stateFromStores;
  const items2 = [callback(require(8346) /* _isNativeReflectConstruct */.VideoComponent, obj1), callback(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj.children = items2;
  const items3 = [callback2(closure_4, obj), ];
  const obj4 = { style: tmp.content, pointerEvents: "box-none" };
  const obj5 = { style: tmp.centeredCopy, pointerEvents: "none" };
  const obj6 = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl.string(require(1212) /* getSystemLocale */.t.d6Rrn6);
  const items4 = [callback(require(4126) /* Text */.Text, obj6), , ];
  const obj7 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount };
  const obj8 = { style: tmp.titleRow };
  const items5 = [callback(require(8749) /* OrbsIcon */.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj9 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items5[1] = callback(require(4126) /* Text */.Text, obj9);
  obj8.children = items5;
  obj7.children = callback2(closure_4, obj8);
  items4[1] = callback(closure_4, obj7);
  const obj10 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" } };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj10.children = intl2.string(require(1212) /* getSystemLocale */.t.x0Ffz3);
  items4[2] = callback(require(4126) /* Text */.Text, obj10);
  obj5.children = items4;
  const items6 = [callback2(closure_4, obj5), ];
  const obj11 = {};
  const items7 = [tmp.actions, ];
  const obj3 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  const tmp2 = importDefault(1557)();
  items7[1] = { bottom: importDefault(1557)().bottom + importDefault(689).space.PX_8 };
  obj11.style = items7;
  const obj13 = { grow: true, variant: "primary", text: null, size: "lg" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj13.text = intl3.string(require(1212) /* getSystemLocale */.t.i4jeWR);
  obj13.onPress = onClose;
  obj11.children = callback(require(4543) /* Button */.Button, obj13);
  items6[1] = callback(closure_4, obj11);
  obj4.children = items6;
  items3[1] = callback2(closure_4, obj4);
  obj.children = items3;
  return callback2(closure_4, obj);
};
