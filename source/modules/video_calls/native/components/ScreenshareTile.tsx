// Module ID: 10561
// Function ID: 82497
// Name: ScreenShareTile
// Dependencies: [31, 27, 653, 33, 4130, 689, 10562, 5217, 1273, 10563, 4126, 1212, 2]
// Exports: default

// Module 10561 (ScreenShareTile)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK, overflow: "hidden", flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { marginBottom: 8, width: 60, height: 40 };
_createForOfIteratorHelperLoose.label = { lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose.liveContainer = { position: "absolute", top: 8, right: 8, zIndex: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap };
  obj = { gesture: importDefault(10562)(obj) };
  obj = { style: tmp.container };
  const obj1 = { style: tmp.liveContainer, children: callback(require(1273) /* Button */.LiveTag, {}) };
  const items = [callback(closure_3, obj1), , ];
  const tmp2 = importDefault(10562)(obj);
  items[1] = callback(closure_4, { source: importDefault(10563), style: tmp.image, resizeMode: "contain" });
  const obj3 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t.G84gtR);
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(require(5217) /* Directions */.GestureDetector, obj);
};
