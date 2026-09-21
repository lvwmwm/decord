// Module ID: 10499
// Function ID: 10500
// Name: EmojiPickerListComponent
// Dependencies: [19, 5678, 5682, 10439, 1222, 21, 4758, 4497, 10500, 6863, 1613, 558, 568, 4413, 7317, 10488, 2]

// Module 10499 (EmojiPickerListComponent)
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4413 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4497 */;
import PortalToNativeViewDefault from "PortalToNativeView" /* 7317 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 10488 */;
import EmojiPickerNativeComponent2 from "EmojiPickerNativeComponent" /* 10500 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5678 */;

const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const EmojiCategoryTypes = fn(5682).EmojiCategoryTypes;
const IMAGE_SIZE = fn(10439).IMAGE_SIZE;
const PADDING_VERTICAL = fn(1222).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4758);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = ReanimatedRexport.createAnimatedComponent(EmojiPickerNativeComponentDefault);
const BottomSheetModal = fn(6863);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(fn(6863).SCROLLABLE_TYPE.SCROLLVIEW, EmojiPickerNativeComponent);
const MetaQuestUtils = fn(1613);
const IS_META_QUEST = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData2 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else{if(index===1){runOnJS(scrollingEnabled)(true);}}}" };
const __initData3 = { code: "function EmojiPickerListComponentAndroidTsx3(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData4 = { code: "function EmojiPickerListComponentAndroidTsx4(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((categoryIndexActive, ref) => {
  const cResult = bottomSheetIndex(data[12]).c(38);
  ({ analyticsLocations, bottomSheetIndex } = categoryIndexActive);
  categoryIndexActive = categoryIndexActive.categoryIndexActive;
  data = categoryIndexActive.data;
  ({ animateEmoji, guildId } = categoryIndexActive);
  const inPortalKeyboard = categoryIndexActive.inPortalKeyboard;
  ({ paddingTop, paddingBottom, onPressEmoji } = categoryIndexActive);
  const onLongPressEmoji = categoryIndexActive.onLongPressEmoji;
  const onShowNitroUpsell = categoryIndexActive.onShowNitroUpsell;
  const useTier0UpsellContent = categoryIndexActive.useTier0UpsellContent;
  let obj = bottomSheetIndex(data[12]);
  ref = guildId.useRef(null);
  if (cResult[0] !== data.hasGuildData) {
    const fn = function f() {
      let hasGuildData = null != ref.current;
      if (hasGuildData) {
        hasGuildData = data.hasGuildData;
      }
      if (hasGuildData) {
        const Commands = EmojiPickerNativeComponent2.Commands;
        Commands.refreshEmojis(ref.current);
      }
    };
    cResult[0] = data.hasGuildData;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== data) {
    const items = [ref, data];
    cResult[2] = data;
    cResult[3] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  function scrollingEnabled(arg0) {
    if (null != ref.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }
  const tmp4 = closure_11();
  class B {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  B.__closure = { bottomSheetIndex };
  B.__workletHash = 10656486632396;
  B.__initData = __initData;
  class N {
    constructor(arg0) {
      tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        num = 0;
        tmp = categoryIndexActive < 0;
      }
      if (!tmp) {
        tmp = closure_13;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === categoryIndexActive) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[7]);
          tmp8 = scrollingEnabled;
          flag2 = false;
          tmp9 = obj2.runOnJS(scrollingEnabled)(false);
        } else {
          num3 = 1;
          if (1 === categoryIndexActive) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[7]);
            tmp4 = scrollingEnabled;
            flag = true;
            tmp5 = obj.runOnJS(scrollingEnabled)(true);
          }
        }
      }
      return;
    }
  }
  const tmpResult = bottomSheetIndex(data[7]);
  N.__closure = { inPortalKeyboard, IS_META_QUEST, runOnJS: bottomSheetIndex(data[7]).runOnJS, scrollingEnabled };
  N.__workletHash = 11529436039893;
  N.__initData = __initData2;
  const animatedReaction = tmpResult.useAnimatedReaction(B, N);
  if (cResult[4] !== guildId) {
    class K {
      constructor(arg0) {
        emojiId = categoryIndexActive.emojiId;
        if (null != emojiId) {
          tmp5 = closure_4;
          tmp6 = guildId;
          disambiguatedEmojiContext = closure_4.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
    cResult[4] = guildId;
    cResult[5] = K;
  } else {
    class K {
      constructor(arg0) {
        emojiId = categoryIndexActive.emojiId;
        if (null != emojiId) {
          tmp5 = closure_4;
          tmp6 = guildId;
          disambiguatedEmojiContext = closure_4.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
  }
  K = tmp10;
  if (cResult[6] === tmp10) {
    class K {
      constructor(arg0) {
        emojiId = categoryIndexActive.emojiId;
        if (null != emojiId) {
          tmp5 = closure_4;
          tmp6 = guildId;
          disambiguatedEmojiContext = closure_4.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[13]);
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
    if (cResult[9] === tmp10) {
      class K {
        constructor(arg0) {
          emojiId = categoryIndexActive.emojiId;
          if (null != emojiId) {
            tmp5 = closure_4;
            tmp6 = guildId;
            disambiguatedEmojiContext = closure_4.getDisambiguatedEmojiContext(guildId);
            byId = disambiguatedEmojiContext.getById(emojiId);
          } else {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[13]);
            byId = obj.getByName(tmp);
          }
          return byId;
        }
      }
      if (cResult[12] !== categoryIndexActive) {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
        class G {
          constructor(arg0) {
            tmp = closure_10(categoryIndexActive.nativeEvent);
            if (null != tmp) {
              tmp2 = onLongPressEmoji;
              tmp3 = onLongPressEmoji(tmp);
            }
            return;
          }
        }
        cResult[13] = V;
      } else {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
      }
      class G {
        constructor(arg0) {
          tmp = closure_10(categoryIndexActive.nativeEvent);
          if (null != tmp) {
            tmp2 = onLongPressEmoji;
            tmp3 = onLongPressEmoji(tmp);
          }
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
        class G {
          constructor(arg0) {
            tmp = closure_10(categoryIndexActive.nativeEvent);
            if (null != tmp) {
              tmp2 = onLongPressEmoji;
              tmp3 = onLongPressEmoji(tmp);
            }
            return;
          }
        }
        const tmp16 = tmp17;
      } else {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
      }
      const imperativeHandle = obj2.useImperativeHandle(ref, tmp16);
      if (cResult[17] !== animateEmoji) {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
        tmp21[0] = animateEmoji;
        class G {
          constructor(arg0) {
            tmp = closure_10(categoryIndexActive.nativeEvent);
            if (null != tmp) {
              tmp2 = onLongPressEmoji;
              tmp3 = onLongPressEmoji(tmp);
            }
            return;
          }
        }
        cResult[17] = animateEmoji;
        cResult[18] = tmp21;
      } else {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
      }
      if (cResult[19] === tmp20) {
        class V {
          constructor(arg0) {
            result = categoryIndexActive.set(categoryIndexActive.nativeEvent.index);
            return;
          }
        }
      }
      const obj4 = { config: tmp20, emojiData: data, emojiMargin: onShowNitroUpsell, emojiSize: onLongPressEmoji, onPressEmoji: tmp11, onLongPressEmoji: tmp12, onStickyHeaderRender: tmp13, onShowNitroUpsell: tmp14, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp4.container };
      const tmp27 = ref(closure_12, obj4);
      cResult[19] = tmp20;
      cResult[20] = data;
      cResult[21] = tmp12;
      cResult[22] = tmp11;
      class B {
        constructor() {
          return bottomSheetIndex.get();
        }
      }
      cResult[24] = tmp13;
      cResult[25] = paddingBottom;
      cResult[26] = paddingTop;
      class N {
        constructor(arg0) {
          tmp = !inPortalKeyboard;
          if (inPortalKeyboard) {
            num = 0;
            tmp = categoryIndexActive < 0;
          }
          if (!tmp) {
            tmp = closure_13;
          }
          if (!tmp) {
            num2 = 0;
            if (0 === categoryIndexActive) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[7]);
              tmp8 = scrollingEnabled;
              flag2 = false;
              tmp9 = obj2.runOnJS(scrollingEnabled)(false);
            } else {
              num3 = 1;
              if (1 === categoryIndexActive) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[7]);
                tmp4 = scrollingEnabled;
                flag = true;
                tmp5 = obj.runOnJS(scrollingEnabled)(true);
              }
            }
          }
          return;
        }
      }
      cResult[28] = useTier0UpsellContent;
      cResult[29] = tmp27;
    }
    class G {
      constructor(arg0) {
        tmp = closure_10(categoryIndexActive.nativeEvent);
        if (null != tmp) {
          tmp2 = onLongPressEmoji;
          tmp3 = onLongPressEmoji(tmp);
        }
        return;
      }
    }
    cResult[9] = tmp10;
    cResult[10] = onLongPressEmoji;
    cResult[11] = G;
  }
  class Q {
    constructor(arg0) {
      tmp = closure_10(categoryIndexActive.nativeEvent);
      if (null != tmp) {
        tmp2 = onPressEmoji;
        tmp3 = onPressEmoji(tmp);
      }
      return;
    }
  }
  cResult[6] = tmp10;
  cResult[7] = onPressEmoji;
  cResult[8] = Q;
}) : ((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const bottomSheetIndex = analyticsLocations.bottomSheetIndex;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  const guildId = analyticsLocations.guildId;
  const inPortalKeyboard = analyticsLocations.inPortalKeyboard;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let callback1;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    let hasGuildData = null != ref.current;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.refreshEmojis(ref.current);
    }
  }, items);
  const scrollingEnabled = data.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let tmp = ref();
  class H {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  H.__closure = { bottomSheetIndex };
  H.__workletHash = 5721747051790;
  H.__initData = __initData3;
  class D {
    constructor(arg0) {
      tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        num = 0;
        tmp = analyticsLocations < 0;
      }
      if (!tmp) {
        tmp = closure_13;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === analyticsLocations) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[7]);
          tmp8 = closure_12;
          flag2 = false;
          tmp9 = obj2.runOnJS(closure_12)(false);
        } else {
          num3 = 1;
          if (1 === analyticsLocations) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[7]);
            tmp4 = closure_12;
            flag = true;
            tmp5 = obj.runOnJS(closure_12)(true);
          }
        }
      }
      return;
    }
  }
  let obj = analyticsLocations(categoryIndexActive[7]);
  D.__closure = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled };
  D.__workletHash = 3717292116277;
  D.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      byId = UnicodeEmojisDefault.getByName(tmp);
    }
    return byId;
  }, items1);
  const items2 = [onPressEmoji, callback1];
  const items3 = [onLongPressEmoji, callback1];
  const callback2 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items2);
  const items4 = [categoryIndexActive];
  const callback3 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items3);
  const items5 = [onShowNitroUpsell];
  const callback4 = data.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items4);
  const callback5 = data.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items5);
  const imperativeHandle = data.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, animated.index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items6 = [animateEmoji];
  let obj2 = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled };
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const obj3 = { config: data.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items6), emojiData: data, emojiMargin: onPressEmoji, emojiSize: inPortalKeyboard, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp.container };
  const obj4 = { children: null };
  const items8 = [
    onLongPressEmoji(scrollingEnabled, { config: data.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items6), emojiData: data, emojiMargin: onPressEmoji, emojiSize: inPortalKeyboard, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp.container }),
    data.useMemo(() => {
      let tmp = null;
      if (data.hasSearchUpsell) {
        const obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: null };
        const obj2 = { guildId, analyticsLocations, useTier0UpsellContent };
        obj.children = closure_2_8(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj2);
        tmp = closure_2_8(PortalToNativeViewDefault, obj);
      }
      return tmp;
    }, items7)
  ];
  obj4.children = items8;
  return useTier0UpsellContent(onShowNitroUpsell, obj4);
}));
