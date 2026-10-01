// Module ID: 8264
// Function ID: 8265
// Name: ProfileEffect
// Dependencies: [32, 19, 17, 4825, 1980, 21, 4836, 1479, 8265, 8266, 8267, 8269, 504, 1094, 8270, 8268, 5899, 7672, 2]
// Exports: default, usePreloadProfileEffect

// Module 8264 (ProfileEffect)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import useProfileEffectDefault from "useProfileEffect" /* 7672 */;
import utils from "utils" /* 8265 */;
import profile_effects_constants from "profile_effects/constants" /* 8266 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 8267 */;
import ProfileEffectLayerDefault from "ProfileEffectLayer" /* 8270 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let hasOwnProperty;
let metroRequire;
function StaticEffect(useThumbnail) {
  let accessibilityLabel;
  let bannerAdjustment;
  let c0;
  let c2;
  let c3;
  let items1;
  let obj3;
  let obj4;
  let profileEffect;
  let thumbnailPreviewSrc;
  let tmp3;
  let tmp8;
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  _slicedToArray = undefined;
  let thumbnailUrlOverride;
  const tmp = closure_10();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  c0 = undefined;
  ({ thumbnailPreviewSrc, accessibilityLabel } = profileEffect);
  [tmp3, c0] = thumbnailUrlOverride.useState(0);
  _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  const height = reducedMotionSrc(1479)().height;
  const callback = thumbnailUrlOverride.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  dependencyMap = tmp3;
  [tmp8, c3] = thumbnailUrlOverride.useState(0);
  _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  const obj = thumbnailUrlOverride;
  const tmp4 = reducedMotionSrc;
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  const items = [reducedMotionSrc, thumbnailUrlOverride, tmp3, useThumbnail];
  const effect = obj.useEffect(() => {
    if (0 !== c2) {
      metroRequire = metroRequire.getSize(useThumbnail ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        closure_1_3(arg1 * (closure_1_2 / arg0));
      }, () => {
        closure_1_3(closure_1_2 / useThumbnail(c2[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === tmp8) {
    obj3 = { style: tmp.profileEffects, pointerEvents: "none", onLayout: callback };
    const obj2 = { style: tmp.profileEffects, pointerEvents: "none", onLayout: callback };
  } else {
    obj3 = { style: tmp.profileEffects, pointerEvents: "none", onLayout: callback, children: null };
    tmp4(5899);
    if (useThumbnail) {
      reducedMotionSrc = thumbnailUrlOverride;
    }
    size = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: obj4, alt: accessibilityLabel, height: tmp8, width: tmp3, style: items1 };
    items1 = [tmp.effect, ];
    const size1 = { width: tmp3, height: tmp8, top: 0 - bannerAdjustment };
    obj4 = { uri: reducedMotionSrc };
    items1[1] = size1;
  }
  return <tmp11 {...obj3} />;
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
let jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
function ProfileEffect(profileEffect) {
  let _undefined;
  let _undefined2;
  let c10;
  let c11;
  let closure_0;
  let profileEffects;
  let replayOnNavigationFocus;
  let style;
  let width;
  profileEffect = profileEffect.profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  const paused = profileEffect.paused;
  width = undefined;
  c10 = undefined;
  c11 = undefined;
  let tmp = c10();
  _slicedToArray = tmp;
  closure_0 = undefined;
  [width, closure_0] = width.useState(0);
  const height = style(paused[7])().height;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const callback = width.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = width.useMemo(() => {
    const obj = utils;
    return obj.sortEffectLayers(profileEffect.effects);
  }, items);
  const items1 = [memo];
  const memo1 = width.useMemo(() => {
    set = new Set(memo.map((src) => src.src));
    return set;
  }, items1);
  let closure_2 = width.useRef(memo1);
  const ref = width.useRef(false);
  const items2 = [memo1];
  const effect = width.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items2);
  const onLoad = width.useCallback((arg0) => {
    if (!ref.current) {
      const current = ref.current;
      current.delete(arg0);
      if (0 === ref.current.size) {
        tmp.current = true;
      }
    }
  }, []);
  jsx = width.useRef(-profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = _slicedToArray(width.useState([]), 2);
  const tmp8 = _slicedToArray(width.useState([]), 2);
  const ref2 = width.useRef([]);
  const ref3 = width.useRef(false);
  const ref4 = width.useRef(memo);
  const items3 = [memo];
  const effect1 = width.useEffect(() => {
    ref4.current = memo;
    ref3.current = false;
    ref.current = -profile_effects_constants.PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((item) => {
      const obj = profileEffect(paused[10]);
      return obj.shouldAnimate(item, ref.current);
    });
    ref2.current = mapped;
    _undefined2(mapped);
  }, items3);
  const items4 = [ref];
  const tmp10 = style(paused[11]);
  const tmp10Result = tmp10(width.useCallback((arg0) => {
    if (ref.current) {
      if (!ref3.current) {
        tmp.current = true;
        ref.current = -profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
        ref2.current = [];
      }
      ref.current = ref.current + arg0;
      const current = ref4.current;
      const current1 = ref2.current;
      let c1 = current.length !== current1.length;
      const mapped = current.map((item, index) => {
        const obj = ProfileEffectUtils;
        const shouldAnimateResult = obj.shouldAnimate(item, ref.current);
        if (shouldAnimateResult !== current1[index]) {
          c1 = true;
        }
        return shouldAnimateResult;
      });
      const tmp11 = c1;
      const tmp9 = ref2;
      if (tmp11) {
        tmp9.current = mapped;
        _undefined2(mapped);
      }
    }
  }, items4));
  const stop = tmp10Result.stop;
  const reset = tmp10Result.reset;
  let obj = profileEffect(paused[12]);
  const items5 = [onLoad];
  const stateFromStores = obj.useStateFromStores(items5, () => onLoad.getState());
  const ref5 = width.useRef(null);
  const items6 = [stateFromStores, stop, reset];
  const effect2 = width.useEffect(() => {
    if (null !== ref5.current) {
      if (ref5.current !== stateFromStores) {
        if (stateFromStores === ConstantsIOS.AppStates.ACTIVE) {
          reset();
        } else {
          stop();
        }
        ref5.current = stateFromStores;
      }
    } else {
      ref5.current = stateFromStores;
    }
  }, items6);
  const items7 = [paused, stop, reset];
  const effect3 = width.useEffect(() => {
    const tmp = paused;
    if (tmp) {
      stop();
    } else {
      reset();
    }
  }, items7);
  const items8 = [tmp, style];
  return <accessibilityLabel style={width.useMemo(() => {
    const items = [profileEffects.profileEffects, style];
    return items;
  }, items8)} pointerEvents="none" onLayout={callback}>{memo.map((layerConfig, index) => {
    let flag = c10[index];
    const sum = layerConfig.src + index;
    if (flag == null) {
      flag = false;
    }
    return jsx(ProfileEffectLayerDefault, { layerConfig, animate: flag, paused, width, accessibilityLabel, onLoad, loaded: ref.current }, sum);
  })}</accessibilityLabel>;
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = useProfileEffectDefault(skuId.skuId);
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = utils;
  const potentiallyRandomizedProfileEffect = obj2.usePotentiallyRandomizedProfileEffect(tmp);
  let tmp4 = null;
  if (null != potentiallyRandomizedProfileEffect) {
    if (!stateFromStores) {
      let tmp10;
      if (!skuId.useThumbnail) {
        const merged = Object.assign(skuId);
        tmp10 = <ProfileEffect profileEffect={potentiallyRandomizedProfileEffect} />;
      }
      tmp4 = tmp10;
    }
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail: obj4.useThumbnail, thumbnailUrlOverride: obj4.thumbnailUrlOverride } = skuId);
    tmp10 = <StaticEffect profileEffect={potentiallyRandomizedProfileEffect} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
  }
  return tmp4;
};
export const usePreloadProfileEffect = function usePreloadProfileEffect(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    set = new Set(memo.map((src) => src.src));
    return set;
  }, items);
  let closure_2 = react.useRef(memo);
  const items1 = [memo];
  const ref = react.useRef(false);
  const effect = react.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items1);
  const obj = {
    loaded: ref,
    onLayerLoaded: react.useCallback((arg0) => {
      if (!ref.current) {
        const current = ref.current;
        current.delete(arg0);
        if (0 === ref.current.size) {
          tmp.current = true;
        }
      }
    }, [])
  };
  return obj;
};
