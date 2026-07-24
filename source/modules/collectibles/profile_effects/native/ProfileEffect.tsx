// Module ID: 8262
// Function ID: 65178
// Name: usePreloadProfileEffect
// Dependencies: [57, 31, 27, 4122, 6651, 33, 4130, 1450, 8263, 8264, 8265, 8267, 566, 668, 8268, 8266, 5085, 8269, 2]
// Exports: default

// Module 8262 (usePreloadProfileEffect)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function usePreloadProfileEffect(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => new Set(closure_0.map((src) => src.src)), items);
  let closure_2 = React.useRef(memo);
  const ref = React.useRef(false);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    closure_2.current = memo;
    ref.current = 0 === memo.size;
  }, items1);
  return {
    loaded: ref,
    onLayerLoaded: React.useCallback((arg0) => {
      if (!ref.current) {
        const current = ref.current;
        current.delete(arg0);
        if (0 === ref.current.size) {
          ref.current = true;
        }
      }
    }, [])
  };
}
function useProfileDimensions() {
  const tmp = callback(React.useState(0), 2);
  let closure_0 = tmp[1];
  return {
    height: importDefault(1450)().height,
    width: tmp[0],
    onLayout: React.useCallback((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
}
function StaticEffect(useThumbnail) {
  let bannerAdjustment;
  let profileEffect;
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  const thumbnailUrlOverride = useThumbnail.thumbnailUrlOverride;
  let reducedMotionSrc;
  let width;
  let callback;
  let thumbnailPreviewSrc;
  const tmp = callback2();
  reducedMotionSrc = profileEffect.reducedMotionSrc;
  thumbnailPreviewSrc = profileEffect.thumbnailPreviewSrc;
  const tmp2 = useProfileDimensions();
  width = tmp2.width;
  const onLayout = tmp2.onLayout;
  const tmp3 = callback(thumbnailPreviewSrc.useState(0), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  if (null != thumbnailUrlOverride) {
    thumbnailPreviewSrc = thumbnailUrlOverride;
  }
  const items = [reducedMotionSrc, thumbnailPreviewSrc, width, useThumbnail];
  const effect = thumbnailPreviewSrc.useEffect(() => {
    if (0 !== width) {
      const size = outer1_6.getSize(useThumbnail ? thumbnailPreviewSrc : reducedMotionSrc, (arg0, arg1) => {
        outer1_3(arg1 * (outer1_2 / arg0));
      }, () => {
        outer1_3(outer1_2 / useThumbnail(width[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === first) {
    let obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
  } else {
    obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
    const obj1 = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true };
    const obj2 = {};
    if (useThumbnail) {
      reducedMotionSrc = thumbnailPreviewSrc;
    }
    obj2.uri = reducedMotionSrc;
    obj1.source = obj2;
    obj1.alt = profileEffect.accessibilityLabel;
    obj1.height = first;
    obj1.width = width;
    const items1 = [tmp.effect, ];
    obj = { width, height: first, top: 0 - bannerAdjustment };
    items1[1] = obj;
    obj1.style = items1;
    obj.children = jsx(reducedMotionSrc(width[16]), { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true });
    const tmp11 = reducedMotionSrc(width[16]);
    const tmp8 = jsx;
  }
  return <closure_5 {...obj} />;
}
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
function ProfileEffect(profileEffect) {
  let replayOnNavigationFocus;
  let style;
  profileEffect = profileEffect.profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  const paused = profileEffect.paused;
  const tmp = callback2();
  const callback = tmp;
  const tmp2 = useProfileDimensions();
  const width = tmp2.width;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const memo = width.useMemo(() => profileEffect(paused[8]).sortEffectLayers(profileEffect.effects), items);
  let tmp3 = usePreloadProfileEffect(memo);
  const loaded = tmp3.loaded;
  const onLayerLoaded = tmp3.onLayerLoaded;
  const jsx = width.useRef(-profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY);
  const tmp4 = callback(width.useState([]), 2);
  callback2 = tmp4[0];
  let closure_11 = tmp4[1];
  usePreloadProfileEffect = width.useRef([]);
  useProfileDimensions = width.useRef(false);
  let closure_14 = width.useRef(memo);
  const items1 = [memo];
  const effect = width.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    closure_9.current = -profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((start) => profileEffect(paused[10]).shouldAnimate(start, outer1_9.current));
    closure_12.current = mapped;
    callback(mapped);
  }, items1);
  const items2 = [loaded];
  const tmp6Result = style(paused[11])(width.useCallback((arg0) => {
    if (loaded.current) {
      if (!ref3.current) {
        ref3.current = true;
        ref.current = -profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
        ref2.current = [];
      }
      ref.current = ref.current + arg0;
      const current = ref4.current;
      const current1 = ref2.current;
      let closure_1 = current.length !== current1.length;
      const mapped = current.map((start) => {
        const shouldAnimateResult = profileEffect(paused[10]).shouldAnimate(start, outer1_9.current);
        if (shouldAnimateResult !== current1[arg1]) {
          let c1 = true;
        }
        return shouldAnimateResult;
      });
      if (closure_1) {
        ref2.current = mapped;
        callback(mapped);
      }
    }
  }, items2));
  const stop = tmp6Result.stop;
  const reset = tmp6Result.reset;
  let obj = profileEffect(paused[12]);
  const items3 = [onLayerLoaded];
  const stateFromStores = obj.useStateFromStores(items3, () => onLayerLoaded.getState());
  let closure_18 = width.useRef(null);
  const items4 = [stateFromStores, stop, reset];
  const effect1 = width.useEffect(() => {
    if (null !== ref5.current) {
      if (ref5.current !== stateFromStores) {
        if (stateFromStores === profileEffect(paused[13]).AppStates.ACTIVE) {
          reset();
        } else {
          stop();
        }
        ref5.current = stateFromStores;
      }
    } else {
      ref5.current = stateFromStores;
    }
  }, items4);
  const items5 = [paused, stop, reset];
  const effect2 = width.useEffect(() => {
    if (paused) {
      stop();
    } else {
      reset();
    }
  }, items5);
  const items6 = [tmp, style];
  obj = {
    style: width.useMemo(() => {
      const items = [tmp.profileEffects, style];
      return items;
    }, items6),
    pointerEvents: "none",
    onLayout: tmp2.onLayout,
    children: memo.map((layerConfig) => {
      let tmp3 = null != tmp2;
      const sum = layerConfig.src + arg1;
      if (tmp3) {
        tmp3 = tmp2;
      }
      const obj = { layerConfig, animate: tmp3, paused, width, accessibilityLabel, onLoad: onLayerLoaded, loaded: loaded.current };
      return ref(style(paused[14]), obj, sum);
    })
  };
  return <accessibilityLabel style={width.useMemo(() => {
    const items = [tmp.profileEffects, style];
    return items;
  }, items6)} pointerEvents="none" onLayout={tmp2.onLayout}>{memo.map((layerConfig) => {
    let tmp3 = null != tmp2;
    const sum = layerConfig.src + arg1;
    if (tmp3) {
      tmp3 = tmp2;
    }
    const obj = { layerConfig, animate: tmp3, paused, width, accessibilityLabel, onLoad: onLayerLoaded, loaded: loaded.current };
    return ref(style(paused[14]), obj, sum);
  })}</accessibilityLabel>;
}
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let useThumbnail;
  let thumbnailUrlOverride = skuId;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.useReducedMotion);
  const tmp = importDefault(8269)(skuId.skuId);
  useThumbnail = require(8263) /* randomizeProfileEffect */.usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        obj = { profileEffect: useThumbnail };
        const merged = Object.assign(thumbnailUrlOverride);
        let tmp8 = <ProfileEffect profileEffect={useThumbnail} />;
      }
    }
    obj = { profileEffect: useThumbnail };
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
    obj.useThumbnail = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj.thumbnailUrlOverride = thumbnailUrlOverride;
    tmp8 = <StaticEffect profileEffect={useThumbnail} />;
  }
};
export { usePreloadProfileEffect };
