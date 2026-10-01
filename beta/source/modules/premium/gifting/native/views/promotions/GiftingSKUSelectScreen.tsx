// Module ID: 10506
// Function ID: 10507
// Name: GiftingSKUSelectScreen
// Dependencies: [32, 19, 17, 21, 4836, 576, 1613, 4832, 1115, 10507, 5281, 2]
// Exports: default

// Module 10506 (GiftingSKUSelectScreen)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import GiftingSKUCardsGridDefault from "GiftingSKUCardsGrid" /* 10507 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scroll: { flex: 1 }, contentContainer: obj3, header: obj4, subtitle: { textAlign: "center" }, buttonContainer: obj5, headerContainer: obj6 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
obj4 = { textAlign: "center", padding: nativeDefault.space.PX_8 };
obj5 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
obj6 = { marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(defaultHighlightedReward) {
  let Button;
  let closure_4;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj7;
  defaultHighlightedReward = defaultHighlightedReward.defaultHighlightedReward;
  const claimableRewards = defaultHighlightedReward.claimableRewards;
  const onSelect = defaultHighlightedReward.onSelect;
  first = undefined;
  closure_4 = undefined;
  first1 = undefined;
  metroRequire = undefined;
  const allRewards = defaultHighlightedReward.allRewards;
  let tmp = closure_9();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, closure_4] = react.useState(defaultHighlightedReward);
  [first1, metroRequire] = react.useState(false);
  const items = [onSelect, first, claimableRewards];
  const callback = react.useCallback(() => {
    const found = claimableRewards.find((item) => item === first);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [first, claimableRewards];
  const callback1 = react.useCallback((arg0) => {
    closure_4(arg0);
    closure_6(true);
  }, []);
  const memo = react.useMemo(() => {
    const someResult = null != first && claimableRewards.some((item) => item === first);
    return someResult;
  }, items1);
  const items2 = [first, claimableRewards, first1, defaultHighlightedReward, memo];
  const effect = react.useEffect(() => {
    if (0 === claimableRewards.length) {
      closure_4(undefined);
    } else {
      const tmp = memo;
      if (!tmp) {
        let tmp7;
        const someResult = !first1 && null != defaultHighlightedReward && obj.some((item) => item === defaultHighlightedReward);
        const tmp6 = closure_4;
        if (someResult) {
          tmp7 = defaultHighlightedReward;
        }
        tmp6(tmp7);
      }
    }
  }, items2);
  const obj = { style: tmp.container, children: items5 };
  const obj2 = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer, children: items4 };
  const obj3 = { style: tmp.headerContainer, children: items3 };
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(intl4.t["+ByEeM"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3 = [metroImportDefault(Text, obj4), ];
  const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl2.string(intl4.t.vPeaOS) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items3[1] = metroImportDefault(Text2, obj5);
  items4 = [metroImportAll(hasOwnProperty, obj3), metroImportDefault(GiftingSKUCardsGridDefault, { rewardsToDisplay: allRewards, claimableRewards, onSelect: callback1, highlightedSkuId: first })];
  items5 = [metroImportAll(metroRequire, obj2), ];
  const obj6 = { style: items6, children: metroImportDefault(Button, obj7) };
  items6 = [tmp.buttonContainer, { paddingBottom: bottom }];
  obj7 = { text: intl3.string(intl4.t["3d0Nmb"]), onPress: callback, disabled: null == first || !memo };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items5[1] = metroImportDefault(hasOwnProperty, obj6);
  return metroImportAll(hasOwnProperty, obj);
};
