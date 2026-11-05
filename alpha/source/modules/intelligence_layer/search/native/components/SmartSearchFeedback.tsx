// Module ID: 19070
// Function ID: 19071
// Name: SmartSearchFeedback
// Dependencies: [32, 19, 17, 14121, 21, 5143, 575, 14156, 14139, 504, 7433, 5763, 1113, 4252, 14780, 10055, 10057, 2]
// Exports: SmartSearchFeedback

// Module 19070 (SmartSearchFeedback)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4252 from "module_4252" /* 4252 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14139 */;
import SmartSearchActionCreators from "SmartSearchActionCreators" /* 14156 */;
import IconActionButtonDefault from "IconActionButton" /* 14780 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14121 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { feedbackContainer: obj2, buttonContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_6, height: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchFeedback.tsx");

export function SmartSearchFeedback(smartSearchQuery) {
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
  let obj2 = smartSearchQuery(7433);
  const items2 = [smartSearchQuery.requestKey];
  let tmp7Result2 = null;
  if (!_slicedToArray(obj2.useRecyclingState(null !== stateFromStores, items2), 1)[0]) {
    let stringResult;
    const obj3 = { style: tmp.feedbackContainer, children: items3 };
    const Text = tmp2(5763).Text;
    const intl = tmp2(1113).intl;
    const string = intl.string;
    if (null !== stateFromStores) {
      stringResult = string(tmp2(1113).t.kZbFIO);
    } else {
      stringResult = string(_modDef4252.uij9Dy);
    }
    const obj4 = { variant: "body-sm/medium", color: "text-muted", children: stringResult };
    items3 = [closure_6(Text, obj4), ];
    let tmp7Result = null === stateFromStores;
    if (tmp7Result) {
      const obj5 = { style: tmp.buttonContainer, children: items4 };
      const obj6 = {
        IconComponent: smartSearchQuery(10055).ThumbsUpIcon,
        onPress() {
              const obj = SmartSearchActionCreators;
              const obj2 = { smartSearchQuery, hasPositiveFeedback: true, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
              obj.setResultFeedback(obj2);
            },
        accessibilityLabel: intl2.string(_modDef4252["x/H32X"])
      };
      const tmp14 = IconActionButtonDefault;
      intl2 = tmp2(1113).intl;
      items4 = [closure_6(tmp14, obj6), ];
      const obj7 = {
        IconComponent: smartSearchQuery(10057).ThumbsDownIcon,
        noMargin: true,
        onPress() {
              const obj = SmartSearchActionCreators;
              const obj2 = { smartSearchQuery, hasPositiveFeedback: false, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault };
              obj.setResultFeedback(obj2);
            },
        accessibilityLabel: intl3.string(_modDef4252.FoToeH)
      };
      const tmp15 = IconActionButtonDefault;
      intl3 = tmp2(1113).intl;
      items4[1] = closure_6(tmp15, obj7);
      tmp7Result = tmp7(tmp8, obj5);
    }
    items3[1] = tmp7Result;
    tmp7Result2 = tmp7(tmp8, obj3);
  }
  return tmp7Result2;
}
