// Module ID: 16503
// Function ID: 16504
// Name: SmartSearchRow
// Dependencies: [5, 32, 19, 17, 4825, 11846, 11847, 7303, 21, 4836, 576, 8179, 504, 16458, 16504, 11848, 16510, 16511, 16490, 16512, 16514, 2]
// Exports: default

// Module 16503 (SmartSearchRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16504 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11846 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11847 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5, citation, entry;

let COLLAPSED_FRAME_HEIGHT;
let c9;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
({ MAX_PRESENTED_CITATIONS: c9, COLLAPSED_FRAME_HEIGHT } = IntelligenceSearchConstants);
let closure_10 = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { collapsedFrame: { height: COLLAPSED_FRAME_HEIGHT }, content: obj2, divider: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_40, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles(obj);
let closure_14 = react.memo((entry) => {
  let closure_3;
  let guildId;
  let hasKeywordResults;
  let items7;
  let items8;
  let items9;
  let requestKey;
  let searchContext;
  let tmp14Result;
  let tmp21;
  let tmp22;
  let tmp22Result;
  ({ searchContext, hasKeywordResults } = entry);
  entry = entry.entry;
  let isExpanded;
  let flashListContext;
  let onPressConversationCitation;
  ({ guildId, requestKey } = entry);
  let tmp = closure_13();
  const tmp3 = isExpanded;
  let obj = hasKeywordResults(isExpanded[11]);
  const items = [requestKey];
  const tmp4 = flashListContext(obj.useRecyclingState(false, items), 2);
  isExpanded = tmp4[0];
  _asyncToGenerator = tmp6;
  const tmp2Result = hasKeywordResults(tmp3[11]);
  flashListContext = tmp2Result.useFlashListContext();
  const items1 = [onPressConversationCitation];
  const tmp2Result4 = hasKeywordResults(tmp3[12]);
  const stateFromStores = tmp2Result4.useStateFromStores(items1, () => onPressConversationCitation.useReducedMotion);
  const items2 = [flashListContext, isExpanded, tmp6, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    closure_3(!first);
    if (first) {
      const obj = flashListContext;
      if (flashListContext != null) {
        const ref = obj.getRef();
        if (ref != null) {
          const obj2 = { animated: !stateFromStores };
          ref.scrollToTop(obj2);
        }
      }
    }
  }, items2);
  const tmp2Result5 = hasKeywordResults(tmp3[13]);
  const onPressMessageItem = tmp2Result5.useOnPressMessageItem({ searchContext });
  const tmp2Result6 = hasKeywordResults(tmp3[13]);
  onPressConversationCitation = tmp2Result6.useOnPressConversationCitation({ searchContext });
  const useCallback = stateFromStores.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            if ("conversation" === closure_0.sourceType) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: onPressConversationCitation(tmp17), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 0;
          c5 = 3;
          const obj = { value: undefined, done: true };
          return obj;
        }
        onPressMessageItem(closure_0.channelId, closure_0.messageId);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items3 = [onPressMessageItem, onPressConversationCitation];
  let closure_8 = useCallback(function() {
    return closure_0(...arguments);
  }, items3);
  const items4 = [entry.citations, hasKeywordResults];
  const memo = stateFromStores.useMemo(() => {
    const citations = entry.citations;
    let substr = citations;
    if (hasKeywordResults) {
      substr = citations.slice(0, React4);
    }
    return substr;
  }, items4);
  const items5 = [memo];
  const memo1 = stateFromStores.useMemo(() => {
    let closure_0 = memo;
    return memo.map((citation, index) => {
      const obj = { citation, isChannelGroupStart: tmp };
      return obj;
    });
  }, items5);
  const items6 = [entry.queryText];
  const lineClamp = stateFromStores.useMemo(() => {
    const tmp = new MessageSearchResultParserDefault(entry.queryText, closure_10);
    return tmp;
  }, items6);
  if (entry.status !== hasKeywordResults(tmp3[15]).IntelligenceSearchStatus.LOADING) {
    if (entry.status !== hasKeywordResults(tmp3[15]).IntelligenceSearchStatus.LOADED) {
      return null;
    }
  }
  const status = entry.status;
  let collapsedFrame = null;
  const LOADING = tmp2(tmp3[15]).IntelligenceSearchStatus.LOADING;
  if (hasKeywordResults && !isExpanded) {
    collapsedFrame = tmp.collapsedFrame;
  }
  const tmp17 = status === LOADING;
  let obj2 = { style: items7, children: items9 };
  items7 = [collapsedFrame, tmp.content];
  if (tmp17) {
    let obj3 = { isCollapsed: tmp7 };
    tmp14Result = tmp18(tmp19(tmp3[16]), obj3);
    tmp21 = tmp19;
    tmp22 = tmp18;
  } else {
    let obj4 = { children: items8 };
    let obj5 = { answerText: entry.answerText, citations: memo, guildId };
    items8 = [
      closure_11(entry(tmp3[17]), obj5),
      memo1.map((citation) => {
          let HeaderlessMessageRow;
          citation = citation.citation;
          if (citation.isChannelGroupStart) {
            HeaderlessMessageRow = entry(first[18]);
          } else {
            HeaderlessMessageRow = hasKeywordResults(first[18]).HeaderlessMessageRow;
          }
          const obj = {
            message: lineClamp.parse(citation.message),
            onPress() {
              return closure_8(citation);
            },
            lineClamp
          };
          return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
        })
    ];
    tmp14Result = tmp14(tmp15, obj4);
    tmp21 = tmp19;
    tmp22 = tmp18;
  }
  items9 = [tmp14Result, , ];
  if (hasKeywordResults && !isExpanded) {
    tmp22Result = tmp22(tmp21(tmp3[19]), { height: 72 });
  } else {
    tmp22Result = null;
    if (tmp17) {
      tmp22Result = tmp22(tmp21(tmp3[19]), { height: 120 });
    }
  }
  items9[1] = tmp22Result;
  let tmp22Result2 = hasKeywordResults && !tmp17;
  if (tmp22Result2) {
    const obj6 = { isExpanded, onPress: callback };
    tmp22Result2 = tmp22(tmp21(tmp3[20]), obj6);
  }
  items9[2] = tmp22Result2;
  const children = [tmp14(tmp15, obj2), ];
  if (hasKeywordResults) {
    const obj7 = { style: tmp.divider };
    hasKeywordResults = tmp22(tmp15, obj7);
  }
  children[1] = hasKeywordResults;
  return closure_12(onPressMessageItem, { children });
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default function SmartSearchRow(guildId) {
  guildId = guildId.guildId;
  const requestKey = guildId.requestKey;
  const items = [IntelligenceSearchStore];
  const items1 = [guildId, requestKey];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => IntelligenceSearchStore.getAnswer(guildId, requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { entry: stateFromStores };
    const merged = Object.assign(guildId);
    tmp2 = closure_11(closure_14, obj2);
  }
  return tmp2;
};
