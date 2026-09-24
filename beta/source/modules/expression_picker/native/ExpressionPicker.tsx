// Module ID: 10688
// Function ID: 10689
// Name: ExpressionPicker
// Dependencies: [19, 17, 1222, 1078, 1379, 21, 4790, 580, 558, 568, 10689, 10481, 1486, 1614, 9900, 4970, 10506, 10690, 5205, 9901, 10691, 10692, 10714, 2]

// Module 10688 (ExpressionPicker)
import nativeDefault from "native" /* 580 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4970 */;
import TopEmojisUtils from "TopEmojisUtils" /* 10481 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 10506 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ExpressionPickerConstants = fn(1222);
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = fn(1078).AnalyticEvents;
const EmojiIntention = fn(1379).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj = { expressionPickerContainer: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL }, expressionPickerContent: { flex: 1 }, segmentedControl: { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 }, segmentedControlUnpadded: { paddingHorizontal: 0 } };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
let obj4 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(56);
  ({ bottomSheetRef, bottomSheetIndex, channel, expressionType, hideGifFavorites, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs, initialGifQuery, stickerFormats, height, inPortalKeyboard } = arg0);
  if (undefined === visibleTabs) {
    visibleTabs = closure_6;
  }
  closure_11();
  _require = noop.useRef(false);
  if (cResult[0] === expressionType) {
    if (cResult[1] === visibleTabs) {
      let tmp5 = cResult[2];
    }
    const tmp7 = expressionPickerViewType(10689)(tmp5);
    ({ expressionPickerSelectedIndex, expressionPickerViewType } = tmp7);
    const prop = tmp7.expressionPickerTabStrings;
    if (cResult[3] !== channel) {
      const guildId = channel.getGuildId();
      cResult[3] = channel;
      cResult[4] = guildId;
      let tmp8 = guildId;
    } else {
      tmp8 = cResult[4];
    }
    dependencyMap = tmp8;
    if (cResult[5] !== tmp8) {
      class H {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      const items = [tmp8];
      cResult[5] = tmp8;
      cResult[6] = H;
      cResult[7] = items;
      let tmp11 = items;
      const tmp10 = H;
    } else {
      class H {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      tmp11 = cResult[7];
    }
    const effect = obj2.useEffect(tmp10, tmp11);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
          return;
        }
      }
      cResult[8] = W;
      const tmp14 = W;
    } else {
      class W {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
          return;
        }
      }
    }
    if (cResult[9] !== prop) {
      class W {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
          return;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        cResult[11] = U;
        const tmp16 = U;
      } else {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
      }
      const mapped = prop.map(tmp16);
      cResult[9] = prop;
      cResult[10] = mapped;
    } else {
      class U {
        constructor(arg0) {
          obj = { id: arg0, label: arg0, page: null };
          return obj;
        }
      }
      if (cResult[12] === expressionPickerSelectedIndex) {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        const segmentedControlState = tmp(9900).useSegmentedControlState(tmp19);
        if (cResult[15] !== expressionPickerViewType) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          const items1 = [expressionPickerViewType];
          cResult[15] = expressionPickerViewType;
          cResult[16] = tmp23;
          cResult[17] = items1;
          let tmp22 = items1;
          const tmp21 = tmp23;
        } else {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          tmp22 = cResult[17];
        }
        const effect1 = obj2.useEffect(tmp21, tmp22);
        if (cResult[18] !== (expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER)) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          tmp28[0] = tmp26;
          cResult[18] = tmp26;
          cResult[19] = tmp28;
          const tmp27 = tmp28;
        } else {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
        }
        const tmp29 = tmp6(10690)(tmp27);
        const tmpResult = tmp(9900);
        const isScreenReaderEnabled = tmp(5205).useIsScreenReaderEnabled();
        if (cResult[20] === tmp29) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
        }
        if (isScreenReaderEnabled) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          tmp32[0] = tmp29.safeAreaBottomKeyboardAware;
        } else {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
        }
        cResult[20] = tmp29;
        cResult[21] = isScreenReaderEnabled;
        cResult[22] = tmp31;
        const tmpResult2 = tmp(5205);
      }
      let obj3 = { pageWidth: 0, defaultIndex: expressionPickerSelectedIndex, onSetActiveIndex: tmp14, items: tmp15 };
      cResult[12] = expressionPickerSelectedIndex;
      cResult[13] = tmp15;
      cResult[14] = obj3;
      tmp19 = obj3;
    }
    tmp6 = expressionPickerViewType;
  }
  let obj4 = { expressionType, expressionPickerTabs: visibleTabs };
  cResult[0] = expressionType;
  cResult[1] = visibleTabs;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : ((expressionType) => {
  ({ bottomSheetRef, bottomSheetIndex, channel } = expressionType);
  let flag = expressionType.hideGifFavorites;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = expressionType);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = expressionType);
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = expressionType);
  const tmp = closure_11();
  importDefault = memo.useRef(false);
  const tmp4 = require("useExpressionPickerTabData")({ expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj = channel(expressionPickerViewType[14]);
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[12]).setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, dependencyMap2[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  });
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      const obj2 = { tab: expressionPickerViewType, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
    } else if (expressionPickerViewType === constants.EMOJI) {
      const obj3 = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj3);
      tmp.current = true;
    } else {
      const obj5 = { tab: tmp2, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
      tmp.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  let obj2 = {
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[12]).setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, dependencyMap2[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  if (!tmp12) {
    tmp12 = expressionPickerViewType === tmp11.STICKER;
  }
  const tmp10 = require("useExpressionPickerInsets");
  const tmp10Result = require("useExpressionPickerInsets")({ hasCategories: tmp12 });
  if (tmp7Result.useIsScreenReaderEnabled()) {
    let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  if (tmp16) {
    let obj5 = { height };
    tmp16 = obj5;
  }
  const obj6 = { style: items3, children: null };
  items3[1] = tmp16;
  const tmp14 = closure_10;
  tmp7Result = channel(expressionPickerViewType[18]);
  const items4 = [closure_9(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[19]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj8 = { style: null, children: null };
  const items5 = [tmp.expressionPickerContent, obj4];
  obj8.style = items5;
  if (expressionPickerViewType === constants.EMOJI) {
    const obj9 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    let tmp17Result = tmp17(tmp2(tmp3[20]), obj9);
  } else if (expressionPickerViewType === tmp11.GIF) {
    const obj10 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: null, initialQuery: null, onPressGIF: null };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    obj10.hideFavorites = flag;
    obj10.initialQuery = initialGifQuery;
    obj10.onPressGIF = onPressGIF;
    tmp17Result = tmp17(tmp2(tmp3[21]), obj10);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === tmp11.STICKER) {
      const obj12 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = tmp17(tmp2(tmp3[22]), obj12);
    }
  }
  obj8.children = tmp17Result;
  items4[1] = closure_9(View, obj8);
  obj6.children = items4;
  return tmp14(View, obj6);
}));
