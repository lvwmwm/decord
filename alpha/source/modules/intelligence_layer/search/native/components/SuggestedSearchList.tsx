// Module ID: 18650
// Function ID: 18651
// Name: SuggestedSearchList
// Dependencies: [19, 17, 21, 5009, 575, 18651, 5619, 1114, 4120, 18652, 2]

// Module 18650 (SuggestedSearchList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 18652 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { text: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function SuggestedSearchList(smartSearchQuery) {
  let intl;
  let items1;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const source = smartSearchQuery.source;
  let suggestedSearches;
  const tmp = closure_6();
  let obj = smartSearchQuery(suggestedSearches[5]);
  suggestedSearches = obj.useSuggestedSearches(smartSearchQuery, { source, trackShown: true }).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text, ];
    let num = 0;
    const Text = tmp2(tmp3[6]).Text;
    const tmp7 = closure_5;
    const tmp8 = View;
    const tmp9 = closure_4;
    if (flag) {
      num = source(tmp3[4]).space.PX_16;
    }
    const obj2 = { children: items1 };
    const obj4 = { marginTop: num };
    items[1] = obj4;
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: items, children: intl.string(source(suggestedSearches[8]).bzswFC) };
    intl = tmp2(tmp3[7]).intl;
    items1 = [
      tmp9(Text, obj3),
      suggestedSearches.map((suggestedSearch, index) => {
          const obj = { suggestedSearch, smartSearchQuery, suggestionSource: source, index, numSuggestedSearches: suggestedSearches.length };
          return React3(SuggestedSearchRowDefault, obj, suggestedSearch.suggestionId);
        })
    ];
    tmp7Result = tmp7(tmp8, obj2);
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default memoResult;
