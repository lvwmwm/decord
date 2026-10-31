// Module ID: 19975
// Function ID: 19976
// Name: GuildRoleSubscriptionListingPreview
// Dependencies: [32, 19, 17, 21, 5014, 575, 5624, 7413, 1113, 17207, 17203, 5717, 19976, 19977, 19951, 17215, 2]
// Exports: GuildRoleSubscriptionListingPreview

// Module 19975 (GuildRoleSubscriptionListingPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import PriceUtils from "PriceUtils" /* 7413 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 17207 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 17215 */;
import GuildRoleSubscriptionsActionCreatorExtras from "GuildRoleSubscriptionsActionCreatorExtras" /* 19951 */;
import GuildPremiumRoleSubscribeButton from "GuildPremiumRoleSubscribeButton" /* 19976 */;
import GuildRoleSubscriptionBenefitPreview2 from "GuildRoleSubscriptionBenefitPreview" /* 19977 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
function PriceTier(arg0) {
  let currency;
  let format;
  let isLGyX;
  let items;
  let obj3;
  let obj5;
  let obj6;
  let price;
  ({ price, currency } = arg0);
  const merged = Object.assign(arg0, Object.assign({ price: 0, currency: 0 }));
  const tmp2 = closure_9();
  const obj = { style: tmp2.priceGroup, children: items };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: obj3.formatPrice(price, currency) };
  const Text = Text_Text.Text;
  obj3 = PriceUtils;
  items = [metroRequire(Text, obj2), ];
  const obj4 = { style: tmp2.priceInterval, variant: "eyebrow", color: "text-default", children: format(isLGyX, obj5) };
  const Text2 = Text_Text.Text;
  const intl = intl2.intl;
  format = intl.format;
  obj5 = { period: obj6.formatPlanInterval(merged) };
  isLGyX = intl2.t.isLGyX;
  obj6 = GuildRoleSubscriptionTypeUtils;
  items[1] = metroRequire(Text2, obj4);
  return metroImportDefault(View, obj);
}
function Header(listingId) {
  let items;
  listingId = listingId.listingId;
  const onSubscribePress = listingId.onSubscribePress;
  const tmp = closure_9();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useName(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(obj3.useImage(listingId), 1)[0];
  const obj5 = { style: tmp.header, children: items };
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useDescription(listingId), 1)[0];
  items = [metroRequire(Text_Text.Text, { variant: "heading-md/semibold", color: "interactive-text-active", children: first1 }), , , , ];
  const obj6 = { style: tmp.image, source: { uri: str } };
  const tmp10 = FastImageDefault;
  const tmp6 = metroImportDefault;
  const tmp7 = View;
  if (str == null) {
    str = "";
  }
  items[1] = metroRequire(tmp10, obj6);
  const obj7 = {};
  const merged = Object.assign(first);
  items[2] = metroRequire(PriceTier, obj7);
  items[3] = metroRequire(GuildPremiumRoleSubscribeButton.GuildPremiumRoleSubscribeButton, { onPress: onSubscribePress });
  items[4] = metroRequire(Text_Text.Text, { variant: "text-sm/medium", children: first2 });
  return tmp6(tmp7, obj5);
}
function Content(arg0) {
  let children;
  let noBackground;
  let style;
  ({ children, noBackground, style } = arg0);
  const tmp = closure_9();
  const style1 = [tmp.content, , ];
  let contentWithBackground = true !== noBackground;
  const tmp2 = metroRequire;
  const tmp3 = View;
  if (contentWithBackground) {
    contentWithBackground = tmp.contentWithBackground;
  }
  style1[1] = contentWithBackground;
  style1[2] = style;
  return tmp2(tmp3, { style: style1, children });
}
function SectionLabel(label) {
  let obj2;
  label = label.label;
  const merged = Object.assign(label, Object.assign({ label: 0 }));
  const obj = { children: metroRequire(Text_Text.Text, obj2) };
  const tmp2 = closure_9();
  const merged1 = Object.assign(merged);
  obj2 = { style: tmp2.sectionLabel, variant: "eyebrow", color: "text-default", children: label };
  return metroRequire(Content, obj);
}
function LabeledSection(arg0) {
  let children;
  let items;
  let label;
  ({ label, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, children: 0 }));
  const obj = { children: items };
  const obj2 = { label };
  const merged1 = Object.assign(merged);
  items = [metroRequire(SectionLabel, obj2), ];
  const obj3 = { children };
  const merged2 = Object.assign(merged);
  items[1] = metroRequire(Content, obj3);
  return metroImportDefault(metroImportAll, obj);
}
function Separator() {
  let obj2;
  const obj = { children: metroRequire(View, obj2) };
  obj2 = { style: closure_9().separator };
  return metroRequire(Content, obj);
}
class BenefitsSection {
  constructor(listingId) {
    let benefits;
    let guildId;
    let label;
    let look;
    let tmp4Result;
    ({ guildId: require, label, benefits, look } = listingId);
    if (look === undefined) {
      look = obj11.FLAT;
    }
    listingId = listingId.listingId;
    let tmp2 = closure_9();
    let benefitSpacing = tmp2;
    if (0 === benefits.length) {
      return null;
    } else {
      let formatToPlainStringResult = label;
      if (typeof label !== "string") {
        const intl = intl2.intl;
        let obj2 = { count: benefits.length };
        formatToPlainStringResult = intl.formatToPlainString(label, obj2);
      }
      const mapped = benefits.map((benefit, index) => {
        let GuildRoleSubscriptionBenefitPreview;
        let obj2;
        benefitSpacing = index > 0;
        const tmp2 = View;
        if (benefitSpacing) {
          benefitSpacing = benefitSpacing.benefitSpacing;
        }
        const obj = { style: benefitSpacing, children: metroRequire(GuildRoleSubscriptionBenefitPreview, obj2) };
        obj2 = { guildId: require, benefit, isInteractive: listingId !== GuildRoleSubscriptionsActionCreatorExtras.NEW_LISTING_EDIT_STATE_ID };
        GuildRoleSubscriptionBenefitPreview = GuildRoleSubscriptionBenefitPreview2.GuildRoleSubscriptionBenefitPreview;
        const obj3 = GuildRoleSubscriptionTypeUtils;
        return metroRequire(tmp2, obj, obj3.getBenefitKey(benefit));
      });
      let obj = { noBackground: look === obj11.ROUNDED, label: formatToPlainStringResult, children: tmp4Result };
      tmp4Result = mapped;
      const tmp5 = LabeledSection;
      if (look !== obj11.FLAT) {
        let obj3 = { style: tmp2.roundedBenefitsContainer, children: mapped };
        tmp4Result = tmp4(View, obj3);
      }
      return closure_6(tmp5, obj);
    }
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, image: size, priceGroup: obj4, priceInterval: obj5, content: obj6, contentWithBackground: obj7, separator: size1, sectionLabel: obj8, benefitSpacing: obj9, roundedBenefitsContainer: obj10, footer: { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 } };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: nativeDefault.space.PX_16 };
size = { width: 80, height: 80, borderRadius: 40, marginTop: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj5 = { marginTop: nativeDefault.space.PX_4 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size1 = { width: "100%", height: 1, marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { paddingVertical: nativeDefault.space.PX_16 };
obj9 = { marginTop: nativeDefault.space.PX_16 };
obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16 };
const React4 = createStyles(obj);
let obj11 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj11;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export function GuildRoleSubscriptionListingPreview(arg0) {
  let guildId;
  let intl;
  let items;
  let items1;
  let items2;
  let listingId;
  const tmp = closure_9();
  ({ guildId, listingId } = arg0);
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useChannelBenefits(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = { style: tmp.container, children: items };
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj5 = {};
  const role = obj3.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  items = [metroRequire(Header, obj5), , , , ];
  const obj6 = { label: intl.string(intl2.t.FJZmYx), children: metroRequire(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { role }) };
  intl = intl2.intl;
  items[1] = metroRequire(LabeledSection, obj6);
  let tmp4Result = first.length > 0;
  const tmp5 = View;
  if (tmp4Result) {
    const obj7 = { children: items1 };
    items1 = [metroRequire(Separator, {}), ];
    const obj8 = { guildId, benefits: first, label: intl2.t.sqjII9, listingId };
    items1[1] = metroRequire(BenefitsSection, obj8);
    tmp4Result = tmp4(metroImportAll, obj7);
  }
  items[2] = tmp4Result;
  let tmp4Result2 = first1.length > 0;
  if (tmp4Result2) {
    const obj9 = { children: items2 };
    items2 = [metroRequire(Separator, {}), ];
    const obj10 = { guildId, benefits: first1, label: intl2.t.aBE7f9, listingId };
    items2[1] = metroRequire(BenefitsSection, obj10);
    tmp4Result2 = tmp4(metroImportAll, obj9);
  }
  items[3] = tmp4Result2;
  obj11 = { style: tmp.footer };
  items[4] = metroRequire(Content, obj11);
  return metroImportDefault(tmp5, obj4);
}
