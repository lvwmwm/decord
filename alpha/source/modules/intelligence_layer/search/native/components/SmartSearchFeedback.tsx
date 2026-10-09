// Module ID: 17319
// Function ID: 17320
// Name: SmartSearchFeedback
// Dependencies: [32, 19, 17, 11994, 21, 5091, 587, 12029, 12012, 558, 576, 504, 8608, 1126, 4053, 5087, 12797, 9331, 9333, 2]

// Module 17319 (SmartSearchFeedback)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef4053 from "module_4053" /* 4053 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12012 */;
import SmartSearchActionCreators from "SmartSearchActionCreators" /* 12029 */;
import IconActionButtonDefault from "IconActionButton" /* 12797 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 11994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { feedbackContainer: obj2, buttonContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_6, height: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchFeedback(smartSearchQuery) {
  let first;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj = smartSearchQuery(576);
  const cResult = obj.c(19);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SmartSearchResultsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === smartSearchQuery.guildId) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === smartSearchQuery.requestKey) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = smartSearchQuery(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] !== smartSearchQuery.requestKey) {
      const items1 = [smartSearchQuery.requestKey];
      cResult[5] = smartSearchQuery.requestKey;
      cResult[6] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[6];
    }
    let tmp14 = null;
    const tmpResult2 = smartSearchQuery(8608);
    if (!_slicedToArray(tmpResult2.useRecyclingState(null !== stateFromStores, tmp10), 1)[0]) {
      let tmp15;
      let tmp18;
      if (cResult[7] !== stateFromStores) {
        let stringResult;
        const intl = tmp(1126).intl;
        const string = intl.string;
        if (null !== stateFromStores) {
          stringResult = string(tmp(1126).t.kZbFIO);
        } else {
          stringResult = string(_modDef4053.uij9Dy);
        }
        cResult[7] = stateFromStores;
        cResult[8] = stringResult;
        tmp15 = stringResult;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp15) {
        let obj2 = { variant: "text-sm/medium", color: "text-muted", children: tmp15 };
        const tmp20 = closure_6(smartSearchQuery(5087).Text, obj2);
        cResult[9] = tmp15;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === smartSearchQuery) {
          let tmp21;
          if (cResult[13] === tmp4.buttonContainer) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.feedbackContainer) {
            if (cResult[16] === tmp18) {
              let tmp29;
              if (cResult[17] === tmp21) {
                tmp29 = cResult[18];
              }
              tmp14 = tmp29;
            }
          }
          const obj3 = { style: tmp4.feedbackContainer, children: items2 };
          items2 = [tmp18, tmp21];
          const tmp32 = closure_7(View, obj3);
          cResult[15] = tmp4.feedbackContainer;
          cResult[16] = tmp18;
          cResult[17] = tmp21;
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
      }
      let tmp22 = null === stateFromStores;
      if (tmp22) {
        const obj4 = { style: tmp4.buttonContainer, children: items3 };
        const obj5 = {
          source: null,
          IconComponent: smartSearchQuery(9331).ThumbsUpIcon,
          onPress() {
                  const obj = SmartSearchActionCreators;
                  const obj2 = { smartSearchQuery, hasPositiveFeedback: true, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
                  obj.setResultFeedback(obj2);
                },
          accessibilityLabel: intl2.string(_modDef4053["x/H32X"])
        };
        const tmp27 = IconActionButtonDefault;
        intl2 = tmp(1126).intl;
        items3 = [closure_6(tmp27, obj5), ];
        const obj6 = {
          source: null,
          IconComponent: smartSearchQuery(9333).ThumbsDownIcon,
          noMargin: true,
          onPress() {
                  const obj = SmartSearchActionCreators;
                  const obj2 = { smartSearchQuery, hasPositiveFeedback: false, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
                  obj.setResultFeedback(obj2);
                },
          accessibilityLabel: intl3.string(_modDef4053.FoToeH)
        };
        const tmp28 = IconActionButtonDefault;
        intl3 = tmp(1126).intl;
        items3[1] = closure_6(tmp28, obj6);
        tmp22 = closure_7(View, obj4);
      }
      cResult[11] = stateFromStores;
      cResult[12] = smartSearchQuery;
      cResult[13] = tmp4.buttonContainer;
      cResult[14] = tmp22;
      tmp21 = tmp22;
    }
    return tmp14;
  }
  const fn = function y() {
    return SmartSearchResultsStore.getResultFeedback(smartSearchQuery.guildId, smartSearchQuery.requestKey);
  };
  const items4 = [, ];
  ({ guildId: arr2[0], requestKey: arr2[1] } = smartSearchQuery);
  cResult[1] = smartSearchQuery.guildId;
  cResult[2] = smartSearchQuery.requestKey;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp8 = items4;
  tmp7 = fn;
}) : (function SmartSearchFeedback(smartSearchQuery) {
  let intl2;
  let intl3;
  let items3;
  let items4;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const tmp = closure_8();
  let obj = smartSearchQuery(504);
  const items = [SmartSearchResultsStore];
  const items1 = [, ];
  ({ guildId: arr2[0], requestKey: arr2[1] } = smartSearchQuery);
  const stateFromStores = obj.useStateFromStores(items, () => SmartSearchResultsStore.getResultFeedback(smartSearchQuery.guildId, smartSearchQuery.requestKey), items1);
  let obj2 = smartSearchQuery(8608);
  const items2 = [smartSearchQuery.requestKey];
  let tmp7Result2 = null;
  if (!_slicedToArray(obj2.useRecyclingState(null !== stateFromStores, items2), 1)[0]) {
    let stringResult;
    const obj3 = { style: tmp.feedbackContainer, children: items3 };
    const Text = tmp2(5087).Text;
    const intl = tmp2(1126).intl;
    const string = intl.string;
    if (null !== stateFromStores) {
      stringResult = string(tmp2(1126).t.kZbFIO);
    } else {
      stringResult = string(_modDef4053.uij9Dy);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
    items3 = [closure_6(Text, obj4), ];
    let tmp7Result = null === stateFromStores;
    if (tmp7Result) {
      const obj5 = { style: tmp.buttonContainer, children: items4 };
      const obj6 = {
        source: null,
        IconComponent: smartSearchQuery(9331).ThumbsUpIcon,
        onPress() {
              const obj = SmartSearchActionCreators;
              const obj2 = { smartSearchQuery, hasPositiveFeedback: true, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
              obj.setResultFeedback(obj2);
            },
        accessibilityLabel: intl2.string(_modDef4053["x/H32X"])
      };
      const tmp14 = IconActionButtonDefault;
      intl2 = tmp2(1126).intl;
      items4 = [closure_6(tmp14, obj6), ];
      const obj7 = {
        source: null,
        IconComponent: smartSearchQuery(9333).ThumbsDownIcon,
        noMargin: true,
        onPress() {
              const obj = SmartSearchActionCreators;
              const obj2 = { smartSearchQuery, hasPositiveFeedback: false, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
              obj.setResultFeedback(obj2);
            },
        accessibilityLabel: intl3.string(_modDef4053.FoToeH)
      };
      const tmp15 = IconActionButtonDefault;
      intl3 = tmp2(1126).intl;
      items4[1] = closure_6(tmp15, obj7);
      tmp7Result = tmp7(tmp8, obj5);
    }
    items3[1] = tmp7Result;
    tmp7Result2 = tmp7(tmp8, obj3);
  }
  return tmp7Result2;
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchFeedback.tsx");

export const SmartSearchFeedback = tmp4;
