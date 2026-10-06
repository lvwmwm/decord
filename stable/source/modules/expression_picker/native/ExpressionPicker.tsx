// Module ID: 9855
// Function ID: 9856
// Name: ExpressionPicker
// Dependencies: [19, 17, 1230, 1086, 1381, 21, 4837, 588, 558, 576, 9856, 9646, 1489, 1617, 9060, 5017, 9671, 9857, 5267, 9061, 9858, 9859, 9881, 2]

// Module 9855 (ExpressionPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5017 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9646 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 9671 */;
import react from "react" /* 19 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1230 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, setKeyboardContextResult;

let PADDING_HORIZONTAL;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { expressionPickerContainer: obj2, expressionPickerContent: { flex: 1 }, segmentedControl: obj3, segmentedControlUnpadded: { paddingHorizontal: 0 } };
obj2 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
obj3 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let closure_2;
  let expressionPickerSelectedIndex;
  let expressionPickerViewType;
  let expressionType;
  let height;
  let hideGifFavorites;
  let inPortalKeyboard;
  let initialGifQuery;
  let onBackspace;
  let onPressEmoji;
  let onPressGIF;
  let onPressSticker;
  let ref;
  let stickerFormats;
  let tmp19;
  let visibleTabs;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(56);
  ({ bottomSheetRef, bottomSheetIndex, channel, expressionType, hideGifFavorites, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs, initialGifQuery, stickerFormats, height, inPortalKeyboard } = arg0);
  const tmp4 = undefined !== hideGifFavorites && hideGifFavorites;
  if (undefined === visibleTabs) {
    visibleTabs = closure_6;
  }
  const tmp5 = closure_11();
  let obj2 = react;
  _require = react.useRef(false);
  if (cResult[0] === expressionType) {
    let tmp6;
    let tmp9;
    let tmp12;
    let tmp11;
    let tmp15;
    if (cResult[1] === visibleTabs) {
      tmp6 = cResult[2];
    }
    const tmp8 = expressionPickerViewType(9856)(tmp6);
    ({ expressionPickerSelectedIndex, expressionPickerViewType } = tmp8);
    const prop = tmp8.expressionPickerTabStrings;
    if (cResult[3] !== channel) {
      const guildId = channel.getGuildId();
      cResult[3] = channel;
      cResult[4] = guildId;
      tmp9 = guildId;
    } else {
      tmp9 = cResult[4];
    }
    dependencyMap = tmp9;
    if (cResult[5] !== tmp9) {
      class H {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      const items = [tmp9];
      cResult[5] = tmp9;
      cResult[6] = H;
      cResult[7] = items;
      tmp12 = items;
      tmp11 = H;
    } else {
      class H {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      tmp12 = cResult[7];
    }
    const effect = obj2.useEffect(tmp11, tmp12);
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
      tmp15 = W;
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
      let tmp17;
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
        tmp17 = U;
      } else {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
      }
      const mapped = prop.map(tmp17);
      cResult[9] = prop;
      cResult[10] = mapped;
    } else {
      class U {
        constructor(arg0) {
          obj = { id: arg0, label: arg0, page: null };
          return obj;
        }
      }
    }
    if (cResult[12] === expressionPickerSelectedIndex) {
      let tmp22;
      let tmp21;
      let tmp27;
      class U {
        constructor(arg0) {
          obj = { id: arg0, label: arg0, page: null };
          return obj;
        }
      }
      const tmpResult = require("SegmentedControlState");
      const segmentedControlState = tmpResult.useSegmentedControlState(tmp19);
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
        tmp22 = items1;
        tmp21 = tmp23;
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
        tmp28[0] = expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER;
        cResult[18] = expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER;
        cResult[19] = tmp28;
        tmp27 = tmp28;
      } else {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
      }
      const tmp29 = expressionPickerViewType(9857)(tmp27);
      const tmpResult2 = require("useIsScreenReaderEnabled");
      const isScreenReaderEnabled = tmpResult2.useIsScreenReaderEnabled();
      if (cResult[20] === tmp29) {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        if (cResult[23] !== height) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          let tmp35 = null != height;
          if (tmp35) {
            class U {
              constructor(arg0) {
                obj = { id: arg0, label: arg0, page: null };
                return obj;
              }
            }
            tmp36[0] = height;
            tmp35 = tmp36;
          }
          cResult[23] = height;
          cResult[24] = tmp35;
        } else {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
        }
        if (cResult[25] === tmp5.expressionPickerContainer) {
          class U {
            constructor(arg0) {
              obj = { id: arg0, label: arg0, page: null };
              return obj;
            }
          }
          const tmp38 = inPortalKeyboard ? tmp5.segmentedControl : tmp5.segmentedControlUnpadded;
          if (cResult[28] !== segmentedControlState) {
            class U {
              constructor(arg0) {
                obj = { id: arg0, label: arg0, page: null };
                return obj;
              }
            }
            let obj3 = { state: segmentedControlState };
            cResult[28] = segmentedControlState;
            cResult[29] = closure_9(require("SegmentedControl").SegmentedControl, obj3);
            const tmp40 = closure_9(require("SegmentedControl").SegmentedControl, obj3);
          } else {
            class U {
              constructor(arg0) {
                obj = { id: arg0, label: arg0, page: null };
                return obj;
              }
            }
          }
          if (cResult[30] === tmp38) {
            class U {
              constructor(arg0) {
                obj = { id: arg0, label: arg0, page: null };
                return obj;
              }
            }
            if (cResult[33] === tmp31) {
              let tmp47;
              class U {
                constructor(arg0) {
                  obj = { id: arg0, label: arg0, page: null };
                  return obj;
                }
              }
              if (cResult[36] === bottomSheetIndex) {
                class U {
                  constructor(arg0) {
                    obj = { id: arg0, label: arg0, page: null };
                    return obj;
                  }
                }
              }
              if (expressionPickerViewType === constants.EMOJI) {
                class U {
                  constructor(arg0) {
                    obj = { id: arg0, label: arg0, page: null };
                    return obj;
                  }
                }
                let obj4 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
                tmp47 = closure_9(expressionPickerViewType(9858), obj4);
              } else {
                class U {
                  constructor(arg0) {
                    obj = { id: arg0, label: arg0, page: null };
                    return obj;
                  }
                }
              }
              cResult[36] = bottomSheetIndex;
              cResult[37] = bottomSheetRef;
              cResult[38] = channel;
              cResult[39] = expressionPickerViewType;
              cResult[40] = tmp4;
              cResult[41] = inPortalKeyboard;
              cResult[42] = initialGifQuery;
              cResult[43] = onBackspace;
              cResult[44] = onPressEmoji;
              cResult[45] = onPressGIF;
              cResult[46] = onPressSticker;
              cResult[47] = stickerFormats;
              cResult[48] = tmp47;
            }
            const items2 = [tmp5.expressionPickerContent, tmp31];
            cResult[33] = tmp31;
            cResult[34] = tmp5.expressionPickerContent;
            cResult[35] = items2;
          }
          let obj5 = { style: tmp38, children: tmp39 };
          cResult[30] = tmp38;
          cResult[31] = tmp39;
          cResult[32] = closure_9(View, obj5);
          const tmp44 = closure_9(View, obj5);
        }
        const items3 = [tmp5.expressionPickerContainer, tmp34];
        cResult[25] = tmp5.expressionPickerContainer;
        cResult[26] = tmp34;
        cResult[27] = items3;
      }
      if (isScreenReaderEnabled) {
        class U {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        tmp33[0] = tmp29.safeAreaBottomKeyboardAware;
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
      cResult[22] = tmp32;
    }
    const obj6 = { pageWidth: 0, defaultIndex: expressionPickerSelectedIndex, onSetActiveIndex: tmp15, items: tmp16 };
    cResult[12] = expressionPickerSelectedIndex;
    cResult[13] = tmp16;
    cResult[14] = obj6;
    tmp19 = obj6;
  }
  const obj7 = { expressionType, expressionPickerTabs: visibleTabs };
  cResult[0] = expressionType;
  cResult[1] = visibleTabs;
  cResult[2] = obj7;
  tmp6 = obj7;
}) : ((hideGifFavorites) => {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let height;
  let inPortalKeyboard;
  let initialGifQuery;
  let items4;
  let items5;
  let obj4;
  let onBackspace;
  let onPressEmoji;
  let onPressGIF;
  let onPressSticker;
  let ref;
  let stickerFormats;
  let tmp17Result;
  let visibleTabs;
  ({ bottomSheetRef, bottomSheetIndex, channel } = hideGifFavorites);
  let flag = hideGifFavorites.hideGifFavorites;
  const expressionType = hideGifFavorites.expressionType;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = hideGifFavorites);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = hideGifFavorites);
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = hideGifFavorites);
  const tmp = closure_11();
  importDefault = memo.useRef(false);
  const tmp2 = importDefault;
  const tmp4 = require("useExpressionPickerTabData")({ expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  const expressionPickerSelectedIndex = tmp4.expressionPickerSelectedIndex;
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const obj = TopEmojisUtils;
    const result = obj.maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj = channel(expressionPickerViewType[14]);
  let obj2 = {
    pageWidth: 0,
    defaultIndex: expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      const obj = channel(expressionPickerViewType[12]);
      obj.setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState(obj2);
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      const obj2 = { tab: expressionPickerViewType, badged: false };
      const obj4 = AppAnalyticsUtilsDefault;
      obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
    } else if (expressionPickerViewType === hasOwnProperty.EMOJI) {
      const obj3 = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj3);
      ref.current = true;
    } else {
      const obj5 = { tab: tmp2, badged: false };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
      ref.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  const tmp10 = require("useExpressionPickerInsets");
  if (!tmp12) {
    tmp12 = expressionPickerViewType === tmp11.STICKER;
  }
  const tmp10Result = tmp10({ hasCategories: tmp12 });
  const tmp7Result = channel(expressionPickerViewType[18]);
  if (tmp7Result.useIsScreenReaderEnabled()) {
    let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  const tmp14 = closure_10;
  if (tmp16) {
    let obj5 = { height };
    tmp16 = obj5;
  }
  const obj6 = { style: items3, children: items4 };
  items3[1] = tmp16;
  items4 = [, ];
  const obj7 = { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[19]).SegmentedControl, { state: segmentedControlState }) };
  items4[0] = closure_9(View, obj7);
  const obj8 = { style: items5, children: tmp17Result };
  items5 = [tmp.expressionPickerContent, obj4];
  if (expressionPickerViewType === constants.EMOJI) {
    const obj9 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    tmp17Result = tmp17(tmp2(tmp3[20]), obj9);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj10 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: flag, initialQuery: initialGifQuery, onPressGIF };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    tmp17Result = tmp17(tmp2(tmp3[21]), obj10);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj12 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = tmp17(tmp2(tmp3[22]), obj12);
    }
  }
  items4[1] = closure_9(View, obj8);
  return tmp14(View, obj6);
}));
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;
