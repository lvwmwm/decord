// Module ID: 19880
// Function ID: 19881
// Name: HowItWorksSection
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 19881, 1187, 19885, 19889, 2]
// Exports: default

// Module 19880 (HowItWorksSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import PerksTicketSpotIllustration from "PerksTicketSpotIllustration" /* 19881 */;
import AnnouncementMegaphoneSpotIllustration from "AnnouncementMegaphoneSpotIllustration" /* 19885 */;
import CoinsAndBagSpotIllustration from "CoinsAndBagSpotIllustration" /* 19889 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let size;
function HowItWorksCard(Illustration) {
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
}
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: obj2, cardNumber: size, howItWorksCardDescription: obj3, howItWorksCardIcon: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 16 } };
obj2 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj3 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
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
  items = [_false(HowItWorksCard, obj3), _false(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), Illustration: AnnouncementMegaphoneSpotIllustration.AnnouncementMegaphoneSpotIllustration };
  intl2 = intl4.intl;
  items[2] = _false(HowItWorksCard, obj4);
  items1 = [React3(View, obj2), ];
  const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), Illustration: CoinsAndBagSpotIllustration.CoinsAndBagSpotIllustration };
  intl3 = intl4.intl;
  items1[1] = _false(HowItWorksCard, obj5);
  return React3(View, obj);
};
