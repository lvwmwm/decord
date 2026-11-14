// Module ID: 17677
// Function ID: 17678
// Name: OrbsArcadeGameGraphic
// Dependencies: [32, 19, 17, 5307, 21, 5306, 575, 504, 10146, 9730, 6020, 2]
// Exports: default, hasOrbsArcadeGameGraphic

// Module 17677 (OrbsArcadeGameGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 6020 */;
import AssetUtils from "AssetUtils" /* 10146 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { graphic: obj2, graphicMedia: { width: "100%", height: "100%" } };
obj2 = { width: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH, maxWidth: "100%", alignSelf: "center", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default function OrbsArcadeGameGraphic(game) {
  let asset;
  let closure_1;
  let first;
  let obj4;
  let obj6;
  let sheetVideoAsset;
  let useReducedMotion;
  game = game.game;
  sheetVideoAsset = undefined;
  importDefault = undefined;
  const tmp = closure_8();
  ({ asset, sheetVideoAsset } = game);
  let obj = sheetVideoAsset(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first, importDefault] = react.useState(null);
  const items1 = [sheetVideoAsset];
  const memo = react.useMemo(() => {
    let result = null;
    if (null != sheetVideoAsset) {
      size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = sheetVideoAsset);
      const obj = AssetUtils;
      result = obj.convertVideoToFirstFrameImageWithMediaProxy(tmp.url, size);
    }
    return result;
  }, items1);
  const tmp2 = sheetVideoAsset;
  if (asset == null) {
    asset = memo;
  }
  const obj2 = { style: tmp.graphic, children: null };
  if (null != sheetVideoAsset) {
    if (!stateFromStores) {
      let tmp8Result;
      if (first !== sheetVideoAsset.url) {
        const obj3 = {
          style: tmp.graphicMedia,
          source: obj4,
          poster: memo,
          posterResizeMode: "cover",
          resizeMode: "cover",
          onError() {
                  return closure_1(sheetVideoAsset.url);
                },
          muted: true,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants"
        };
        obj4 = { uri: sheetVideoAsset.url };
        const VideoComponent = tmp2(9730).VideoComponent;
        tmp8Result = tmp8(VideoComponent, obj3);
      }
      obj2.children = tmp8Result;
      return <tmp9 {...obj2} />;
    }
  }
  let tmp8Result2 = null;
  if (null != asset) {
    const obj5 = { source: obj6, style: tmp.graphicMedia, resizeMode: "cover", accessible: false };
    obj6 = { uri: asset };
    tmp8Result2 = tmp8(FastImageDefault, obj5);
  }
  tmp8Result = tmp8Result2;
};
export function hasOrbsArcadeGameGraphic(stateFromStores) {
  return null != stateFromStores.asset || null != stateFromStores.sheetVideoAsset;
}
