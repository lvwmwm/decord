// Module ID: 10843
// Function ID: 10844
// Name: ScreenshareTile
// Dependencies: [19, 17, 1085, 21, 5091, 587, 558, 576, 10844, 1200, 6163, 10845, 1126, 5087, 6333, 2]

// Module 10843 (ScreenshareTile)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import FastImageDefault from "FastImage" /* 6163 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 10844 */;
import AssetRegistryDefault from "AssetRegistry" /* 10845 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const NOOP = Constants.NOOP;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenShareTile(arg0) {
  let items;
  let onDoubleTap;
  let onSingleTap;
  const obj = react2;
  const cResult = obj.c(19);
  ({ onSingleTap, onDoubleTap } = arg0);
  if (undefined === onSingleTap) {
    onSingleTap = NOOP;
  }
  if (undefined === onDoubleTap) {
    onDoubleTap = NOOP;
  }
  const tmp4 = closure_7();
  if (cResult[0] === onDoubleTap) {
    let tmp5;
    let tmp9;
    let tmp12;
    let tmp16;
    let tmp20;
    let tmp22;
    if (cResult[1] === onSingleTap) {
      tmp5 = cResult[2];
    }
    const tmp7 = useParticipantTileTapGestureDefault(tmp5);
    const _Symbol = Symbol;
    const container = tmp4.container;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = hasOwnProperty(native.LiveTag, {});
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== tmp4.liveContainer) {
      const obj2 = { style: tmp4.liveContainer, children: tmp9 };
      const tmp15 = hasOwnProperty(View, obj2);
      cResult[4] = tmp4.liveContainer;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.image) {
      const obj3 = { source: AssetRegistryDefault, style: tmp4.image, resizeMode: "contain" };
      const tmp6Result = FastImageDefault;
      const tmp19 = hasOwnProperty(tmp6Result, obj3);
      cResult[6] = tmp4.image;
      cResult[7] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[7];
    }
    const _Symbol2 = Symbol;
    const label = tmp4.label;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl2.t.G84gtR);
      cResult[8] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] !== tmp4.label) {
      const obj4 = { style: label, variant: "text-xs/bold", color: "text-overlay-light", children: tmp20 };
      const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[9] = tmp4.label;
      cResult[10] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] === tmp4.container) {
      if (cResult[12] === tmp22) {
        if (cResult[13] === tmp12) {
          let tmp25;
          if (cResult[14] === tmp16) {
            tmp25 = cResult[15];
          }
          if (cResult[16] === tmp7) {
            let tmp29;
            if (cResult[17] === tmp25) {
              tmp29 = cResult[18];
            }
            return tmp29;
          }
          const obj5 = { gesture: tmp7, children: tmp25 };
          const tmp31 = hasOwnProperty(LegacyBaseButton.GestureDetector, obj5);
          cResult[16] = tmp7;
          cResult[17] = tmp25;
          cResult[18] = tmp31;
          tmp29 = tmp31;
        }
      }
    }
    const obj6 = { style: container, children: items };
    items = [tmp12, tmp16, tmp22];
    const tmp28 = metroRequire(View, obj6);
    cResult[11] = tmp4.container;
    cResult[12] = tmp22;
    cResult[13] = tmp12;
    cResult[14] = tmp16;
    cResult[15] = tmp28;
    tmp25 = tmp28;
  }
  const obj7 = { onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap };
  cResult[0] = onDoubleTap;
  cResult[1] = onSingleTap;
  cResult[2] = obj7;
  tmp5 = obj7;
}) : (function ScreenShareTile(onSingleTap) {
  let intl;
  let items;
  let obj2;
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = closure_7();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: metroRequire(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  const obj3 = { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items = [hasOwnProperty(View, obj3), , ];
  const obj4 = { source: AssetRegistryDefault, style: tmp.image, resizeMode: "contain" };
  const tmp3 = FastImageDefault;
  items[1] = hasOwnProperty(tmp3, obj4);
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: intl.string(intl2.t.G84gtR) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[2] = hasOwnProperty(Text, obj5);
  return hasOwnProperty(GestureDetector, obj);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default tmp4;
