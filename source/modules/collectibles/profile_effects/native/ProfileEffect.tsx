// Module ID: 8212
// Function ID: 64913
// Name: usePreloadProfileEffect
// Dependencies: []
// Exports: default

// Module 8212 (usePreloadProfileEffect)
function usePreloadProfileEffect(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => new Set(arg0.map((src) => src.src)), items);
  const importDefault = memo;
  let closure_2 = React.useRef(memo);
  const ref = React.useRef(false);
  let closure_3 = ref;
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
    height: importDefault(dependencyMap[7])().height,
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
  const arg1 = useThumbnail;
  const thumbnailUrlOverride = useThumbnail.thumbnailUrlOverride;
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  const tmp = callback2();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  importDefault = reducedMotionSrc;
  let thumbnailPreviewSrc = profileEffect.thumbnailPreviewSrc;
  const tmp2 = useProfileDimensions();
  const width = tmp2.width;
  dependencyMap = width;
  const onLayout = tmp2.onLayout;
  const tmp3 = callback(React.useState(0), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  if (null != thumbnailUrlOverride) {
    thumbnailPreviewSrc = thumbnailUrlOverride;
  }
  React = thumbnailPreviewSrc;
  const items = [reducedMotionSrc, thumbnailPreviewSrc, width, useThumbnail];
  const effect = React.useEffect(() => {
    if (0 !== width) {
      const size = size.getSize(useThumbnail ? thumbnailPreviewSrc : reducedMotionSrc, (arg0, arg1) => {
        callback2(arg1 * (closure_2 / arg0));
      }, () => {
        callback2(closure_2 / callback(closure_2[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === first) {
    let obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
  } else {
    obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
    const obj1 = { flexWrap: true, alignItems: true, marginTop: true };
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
    obj.children = jsx(importDefault(dependencyMap[16]), obj1);
    const tmp11 = importDefault(dependencyMap[16]);
    const tmp8 = jsx;
  }
  return <closure_5 {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ profileEffects: { transparent: "text-sm/semibold", animationType: "text-link", visible: "True", onRequestClose: "True", statusBarTranslucent: "true", source: 424, index: 424, key: 100 }, effect: { position: "absolute" } });
function ProfileEffect(profileEffect) {
  let replayOnNavigationFocus;
  let style;
  profileEffect = profileEffect.profileEffect;
  const arg1 = profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  const importDefault = style;
  const paused = profileEffect.paused;
  const dependencyMap = paused;
  const tmp = callback2();
  const callback = tmp;
  const tmp2 = useProfileDimensions();
  const React = tmp2.width;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  const items = [profileEffect.effects];
  const memo = React.useMemo(() => profileEffect(paused[8]).sortEffectLayers(profileEffect.effects), items);
  const tmp3 = usePreloadProfileEffect(memo);
  const loaded = tmp3.loaded;
  let closure_7 = loaded;
  const onLayerLoaded = tmp3.onLayerLoaded;
  const jsx = React.useRef(-arg1(dependencyMap[9]).PROFILE_EFFECT_INTRO_DELAY);
  const tmp4 = callback(React.useState([]), 2);
  const callback2 = tmp4[0];
  let closure_11 = tmp4[1];
  const usePreloadProfileEffect = React.useRef([]);
  const useProfileDimensions = React.useRef(false);
  let closure_14 = React.useRef(memo);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    closure_9.current = -profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((start) => callback(closure_2[10]).shouldAnimate(start, ref.current));
    closure_12.current = mapped;
    callback(mapped);
  }, items1);
  const items2 = [loaded];
  const tmp6Result = importDefault(dependencyMap[11])(React.useCallback((arg0) => {
    if (loaded.current) {
      if (!ref3.current) {
        ref3.current = true;
        ref.current = -profileEffect(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
        ref2.current = [];
      }
      ref.current = ref.current + arg0;
      const current = ref4.current;
      const current1 = ref2.current;
      const profileEffect = current1;
      let closure_1 = current.length !== current1.length;
      const mapped = current.map((start) => {
        const shouldAnimateResult = current1(closure_2[10]).shouldAnimate(start, ref.current);
        if (shouldAnimateResult !== current1[arg1]) {
          let closure_1 = true;
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
  let obj = arg1(dependencyMap[12]);
  const items3 = [onLayerLoaded];
  const stateFromStores = obj.useStateFromStores(items3, () => onLayerLoaded.getState());
  let closure_18 = React.useRef(null);
  const items4 = [stateFromStores, stop, reset];
  const effect1 = React.useEffect(() => {
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
  const effect2 = React.useEffect(() => {
    if (paused) {
      stop();
    } else {
      reset();
    }
  }, items5);
  const items6 = [tmp, style];
  obj = {
    style: React.useMemo(() => {
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
  return <accessibilityLabel {...obj} />;
}
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let useThumbnail;
  let thumbnailUrlOverride = skuId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp = importDefault(dependencyMap[17])(skuId.skuId);
  useThumbnail = arg1(dependencyMap[8]).usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        obj = { profileEffect: useThumbnail };
        const merged = Object.assign(thumbnailUrlOverride);
        let tmp8 = <ProfileEffect {...obj} />;
      }
    }
    obj = { profileEffect: useThumbnail };
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
    obj.useThumbnail = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj.thumbnailUrlOverride = thumbnailUrlOverride;
    tmp8 = <StaticEffect {...obj} />;
  }
};
export { usePreloadProfileEffect };
