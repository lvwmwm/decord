// Module ID: 17940
// Function ID: 17941
// Name: FavoritesEmptyState
// Dependencies: [19, 17, 21, 4945, 587, 558, 576, 13687, 10655, 1128, 3402, 5195, 5935, 5205, 10954, 2]

// Module 17940 (FavoritesEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import Text_Text from "Text/Text" /* 5195 */;
import components_Button_Button from "components/Button/Button" /* 5205 */;
import Stack_Stack from "Stack/Stack" /* 5935 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 10655 */;
import PlusMediumIcon from "PlusMediumIcon" /* 10954 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 13687 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, text: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesEmptyState() {
  let first;
  let intl3;
  let items;
  let items1;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const container = tmp4.container;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 });
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  const text = tmp4.text;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3402["wh+Rz1"]);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4.text) {
    const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: text, children: tmp9 };
    const tmp14 = hasOwnProperty(Text_Text.Heading, obj2);
    cResult[3] = tmp4.text;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  const text2 = tmp4.text;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(_modDef3402["+SuGKb"]);
    cResult[5] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-default", style: text2, children: tmp15 };
    const tmp20 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[6] = tmp4.text;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    let tmp21;
    let tmp23;
    if (cResult[9] === tmp18) {
      tmp21 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "primary", text: intl3.string(_modDef3402["6kk0gM"]), icon: hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {}), onPress: first };
      const Button = tmp(5205).Button;
      intl3 = tmp(1128).intl;
      const tmp26 = hasOwnProperty(Button, obj4);
      cResult[11] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[11];
    }
    if (cResult[12] === tmp4.container) {
      let tmp27;
      if (cResult[13] === tmp21) {
        tmp27 = cResult[14];
      }
      return tmp27;
    }
    const obj5 = { style: container, children: items };
    items = [tmp6, tmp21, tmp23];
    const tmp30 = metroRequire(View, obj5);
    cResult[12] = tmp4.container;
    cResult[13] = tmp21;
    cResult[14] = tmp30;
    tmp27 = tmp30;
  }
  const obj6 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack = tmp(5935).Stack;
  items1 = [tmp12, tmp18];
  const tmp22 = metroRequire(Stack, obj6);
  cResult[8] = tmp12;
  cResult[9] = tmp18;
  cResult[10] = tmp22;
  tmp21 = tmp22;
}) : (function FavoritesEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  const callback = react.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
  }, []);
  items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj2 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(_modDef3402["wh+Rz1"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items1 = [hasOwnProperty(Heading, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(_modDef3402["+SuGKb"]) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = hasOwnProperty(Text, obj4);
  items[1] = metroRequire(Stack, obj2);
  const obj5 = { variant: "primary", text: intl3.string(_modDef3402["6kk0gM"]), icon: hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {}), onPress: callback };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = hasOwnProperty(Button, obj5);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default tmp3;
