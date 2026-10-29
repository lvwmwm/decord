// Module ID: 19760
// Function ID: 19761
// Name: HowItWorksSection
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 5271, 1125, 19761, 1199, 19765, 19769, 2]

// Module 19760 (HowItWorksSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5271 */;
import PerksTicketSpotIllustration from "PerksTicketSpotIllustration" /* 19761 */;
import AnnouncementMegaphoneSpotIllustration from "AnnouncementMegaphoneSpotIllustration" /* 19765 */;
import CoinsAndBagSpotIllustration from "CoinsAndBagSpotIllustration" /* 19769 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: obj2, cardNumber: size, howItWorksCardDescription: obj3, howItWorksCardIcon: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 16 } };
obj2 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj3 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
let closure_5 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function HowItWorksCard(arg0) {
  let Illustration;
  let cardNumber;
  let description;
  let items;
  const obj = react2;
  const cResult = obj.c(17);
  ({ cardNumber, Illustration, description } = arg0);
  const tmp4 = closure_5();
  const combined = "" + cardNumber + " - " + description;
  if (cResult[0] === cardNumber) {
    let tmp6;
    let tmp8;
    if (cResult[1] === tmp4.cardNumber) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== Illustration) {
      const tmp10 = _false(Illustration, { width: 108 });
      cResult[3] = Illustration;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.howItWorksCardIcon) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === description) {
        let tmp15;
        if (cResult[9] === tmp4.howItWorksCardDescription) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.card) {
          if (cResult[12] === combined) {
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp11) {
                let tmp18;
                if (cResult[15] === tmp15) {
                  tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
          }
        }
        const obj2 = { style: tmp4.card, accessible: true, accessibilityLabel: combined, children: items };
        items = [tmp6, tmp11, tmp15];
        const tmp21 = React3(View, obj2);
        cResult[11] = tmp4.card;
        cResult[12] = combined;
        cResult[13] = tmp6;
        cResult[14] = tmp11;
        cResult[15] = tmp15;
        cResult[16] = tmp21;
        tmp18 = tmp21;
      }
      const obj3 = { style: tmp4.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
      const tmp17 = _false(Text_Text.Text, obj3);
      cResult[8] = description;
      cResult[9] = tmp4.howItWorksCardDescription;
      cResult[10] = tmp17;
      tmp15 = tmp17;
    }
    const obj4 = { style: tmp4.howItWorksCardIcon, children: tmp8 };
    const tmp14 = _false(View, obj4);
    cResult[5] = tmp4.howItWorksCardIcon;
    cResult[6] = tmp8;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const obj5 = { style: tmp4.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const tmp7 = _false(Text_Text.Text, obj5);
  cResult[0] = cardNumber;
  cResult[1] = tmp4.cardNumber;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function HowItWorksCard(Illustration) {
  let cardNumber;
  let description;
  let items;
  ({ cardNumber, description } = Illustration);
  Illustration = Illustration.Illustration;
  const tmp = closure_5();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: items };
  items = [, , ];
  const obj2 = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  items[0] = _false(Text_Text.Text, obj2);
  const obj3 = { style: tmp.howItWorksCardIcon, children: _false(Illustration, { width: 108 }) };
  items[1] = _false(View, obj3);
  const obj4 = { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
  items[2] = _false(Text_Text.Text, obj4);
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function HowItWorksSection() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp11;
  let tmp15;
  let tmp19;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cardNumber: 1, description: intl.string(intl4.t.lT0ZNS), Illustration: PerksTicketSpotIllustration.PerksTicketSpotIllustration };
    intl = tmp(1125).intl;
    const tmp9 = _false(closure_6, obj2);
    const tmp10 = _false(native.Spacer, { size: 12 });
    cResult[0] = tmp9;
    cResult[1] = tmp10;
    tmp5 = tmp9;
    tmp6 = tmp10;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), Illustration: AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration };
    intl2 = tmp(1125).intl;
    const tmp14 = _false(closure_6, obj3);
    cResult[2] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp4.horizontalContainer) {
    const obj4 = { style: tmp4.horizontalContainer, children: items };
    items = [tmp5, tmp6, tmp11];
    const tmp18 = React3(View, obj4);
    cResult[3] = tmp4.horizontalContainer;
    cResult[4] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), Illustration: CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration };
    intl3 = tmp(1125).intl;
    const tmp22 = _false(closure_6, obj5);
    cResult[5] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    let tmp23;
    if (cResult[7] === tmp15) {
      tmp23 = cResult[8];
    }
    return tmp23;
  }
  const obj6 = { style: tmp4.container, children: items1 };
  items1 = [tmp15, tmp19];
  const tmp24 = React3(View, obj6);
  cResult[6] = tmp4.container;
  cResult[7] = tmp15;
  cResult[8] = tmp24;
  tmp23 = tmp24;
}) : (function HowItWorksSection() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.horizontalContainer, children: items };
  const obj3 = { cardNumber: 1, description: intl.string(intl4.t.lT0ZNS), Illustration: PerksTicketSpotIllustration.PerksTicketSpotIllustration };
  intl = intl4.intl;
  items = [_false(closure_6, obj3), _false(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), Illustration: AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration };
  intl2 = intl4.intl;
  items[2] = _false(closure_6, obj4);
  items1 = [React3(View, obj2), ];
  const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), Illustration: CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration };
  intl3 = intl4.intl;
  items1[1] = _false(closure_6, obj5);
  return React3(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default tmp5;
