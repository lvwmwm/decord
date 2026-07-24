// Module ID: 9792
// Function ID: 76116
// Name: GiftingSKUSelectScreen
// Dependencies: [57, 31, 27, 33, 4130, 689, 1557, 4126, 1212, 9793, 4543, 2]
// Exports: default

// Module 9792 (GiftingSKUSelectScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scroll = { flex: 1 };
let obj1 = { display: "flex", flexDirection: "column", padding: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.contentContainer = obj1;
_createForOfIteratorHelperLoose.header = { textAlign: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
let obj2 = { textAlign: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(defaultHighlightedReward), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  const items = [onSelect, first, claimableRewards];
  const callback = React.useCallback(() => {
    const found = claimableRewards.find((arg0) => arg0 === outer1_3);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [first, claimableRewards];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    callback2(true);
  }, []);
  const memo = React.useMemo(() => {
    let someResult = null != first;
    if (someResult) {
      someResult = claimableRewards.some((arg0) => arg0 === outer1_3);
    }
    return someResult;
  }, items1);
  const items2 = [first, claimableRewards, first1, defaultHighlightedReward, memo];
  const effect = React.useEffect(() => {
    if (0 === claimableRewards.length) {
      callback(undefined);
    } else if (!memo) {
      let someResult = !first1;
      if (someResult) {
        someResult = null != defaultHighlightedReward;
      }
      if (someResult) {
        someResult = claimableRewards.some((arg0) => arg0 === outer1_0);
      }
      let tmp9;
      if (someResult) {
        tmp9 = defaultHighlightedReward;
      }
      callback(tmp9);
      const tmp8 = callback;
    }
  }, items2);
  let obj = { style: tmp.container };
  obj = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer };
  obj = { style: tmp.headerContainer };
  const obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  const intl = defaultHighlightedReward(onSelect[8]).intl;
  obj1.children = intl.string(defaultHighlightedReward(onSelect[8]).t["+ByEeM"]);
  const items3 = [memo(defaultHighlightedReward(onSelect[7]).Text, obj1), ];
  const obj2 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default" };
  const intl2 = defaultHighlightedReward(onSelect[8]).intl;
  obj2.children = intl2.string(defaultHighlightedReward(onSelect[8]).t.vPeaOS);
  items3[1] = memo(defaultHighlightedReward(onSelect[7]).Text, obj2);
  obj.children = items3;
  const items4 = [callback(first1, obj), memo(claimableRewards(onSelect[9]), { rewardsToDisplay: rewardsToDisplay.allRewards, claimableRewards, onSelect: callback1, highlightedSkuId: first })];
  obj.children = items4;
  const items5 = [callback(closure_6, obj), ];
  const obj3 = { style: items6 };
  items6 = [tmp.buttonContainer, { paddingBottom: claimableRewards(onSelect[6])().bottom }];
  const obj4 = {};
  const intl3 = defaultHighlightedReward(onSelect[8]).intl;
  obj4.text = intl3.string(defaultHighlightedReward(onSelect[8]).t["3d0Nmb"]);
  obj4.onPress = callback;
  obj4.disabled = null == first || !memo;
  obj3.children = memo(defaultHighlightedReward(onSelect[10]).Button, obj4);
  items5[1] = memo(first1, obj3);
  obj.children = items5;
  return callback(first1, obj);
};
