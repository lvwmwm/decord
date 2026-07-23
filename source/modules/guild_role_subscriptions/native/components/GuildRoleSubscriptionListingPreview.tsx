// Module ID: 16460
// Function ID: 128266
// Name: PriceTier
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 5618, 1212, 14120, 14116, 5085, 16461, 16455, 16434, 14127, 2]
// Exports: GuildRoleSubscriptionListingPreview

// Module 16460 (PriceTier)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PriceTier(arg0) {
  let currency;
  let price;
  ({ price, currency } = arg0);
  let obj = Object.create(null);
  obj.price = 0;
  obj.currency = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = { style: tmp3.priceGroup };
  obj = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let obj2 = require(5618) /* formatSingleCurrencyPrice */;
  obj.children = obj2.formatPrice(price, currency);
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  const obj1 = { style: tmp3.priceInterval, variant: "eyebrow", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2 = { period: require(14120) /* getBenefitKey */.formatPlanInterval(merged) };
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t.isLGyX, obj2);
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback3(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importAll(14116);
  let obj1 = importAll(14116);
  let obj2 = importAll(14116);
  const first = callback(obj2.useImage(listingId), 1)[0];
  let obj3 = importAll(14116);
  obj = { style: tmp.header };
  obj = { variant: "heading-md/semibold", color: "interactive-text-active", children: callback(obj1.useName(listingId), 1)[0] };
  const items = [callback2(require(4126) /* Text */.Text, obj), , , , ];
  obj1 = { style: tmp.image };
  obj2 = {};
  let str = "";
  if (null != first) {
    str = first;
  }
  obj2.uri = str;
  obj1.source = obj2;
  items[1] = callback2(importDefault(5085), obj1);
  obj3 = {};
  const merged = Object.assign(callback(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = callback2(PriceTier, obj3);
  items[3] = callback2(require(16461) /* GuildPremiumRoleSubscribeButton */.GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = callback2(require(4126) /* Text */.Text, { variant: "text-sm/medium", children: callback(obj3.useDescription(listingId), 1)[0] });
  obj.children = items;
  return closure_7(View, obj);
}
function Content(arg0) {
  let children;
  let noBackground;
  let style;
  ({ children, noBackground, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const obj = {};
  const items = [tmp.content, , ];
  let contentWithBackground = true !== noBackground;
  if (contentWithBackground) {
    contentWithBackground = tmp.contentWithBackground;
  }
  items[1] = contentWithBackground;
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return closure_6(View, obj);
}
function SectionLabel(label) {
  let obj = Object.create(null);
  obj.label = 0;
  const merged = Object.assign(label, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { style: _createForOfIteratorHelperLoose().sectionLabel, variant: "eyebrow", color: "text-default", children: label.label };
  obj["children"] = callback2(require(4126) /* Text */.Text, obj);
  return callback2(Content, obj);
}
function LabeledSection(arg0) {
  let children;
  let label;
  ({ label, children } = arg0);
  let obj = Object.create(null);
  obj.label = 0;
  obj.children = 0;
  const merged = Object.assign(arg0, obj);
  obj = {};
  obj = {};
  const merged1 = Object.assign(merged);
  obj["label"] = label;
  const items = [callback2(SectionLabel, obj), ];
  const obj1 = {};
  const merged2 = Object.assign(merged);
  obj1["children"] = children;
  items[1] = callback2(Content, obj1);
  obj.children = items;
  return callback3(closure_8, obj);
}
function Separator() {
  let obj = {};
  obj = { style: _createForOfIteratorHelperLoose().separator };
  obj.children = callback2(View, obj);
  return callback2(Content, obj);
}
class BenefitsSection {
  constructor(arg0) {
    ({ guildId, label, benefits, look } = global);
    if (look === undefined) {
      tmp = jsxs;
      look = jsxs.FLAT;
    }
    listingId = global.listingId;
    c2 = undefined;
    tmp2 = jsxs();
    c2 = tmp2;
    if (0 === benefits.length) {
      tmp14 = null;
      return null;
    } else {
      str = "string";
      formatToPlainStringResult = label;
      if ("string" !== typeof label) {
        tmp3 = guildId;
        tmp4 = closure_3;
        num = 8;
        intl = require("getSystemLocale").intl;
        obj = {};
        obj.count = benefits.length;
        formatToPlainStringResult = intl.formatToPlainString(label, obj);
      }
      mapped = benefits.map((benefit) => {
        let obj = {};
        let benefitSpacing = arg1 > 0;
        if (benefitSpacing) {
          benefitSpacing = _undefined.benefitSpacing;
        }
        obj.style = benefitSpacing;
        obj = { guildId: closure_0, benefit, isInteractive: listingId !== outer1_0(outer1_3[14]).NEW_LISTING_EDIT_STATE_ID };
        obj.children = outer1_6(outer1_0(outer1_3[13]).GuildRoleSubscriptionBenefitPreview, obj);
        return outer1_6(outer1_5, obj, outer1_0(outer1_3[9]).getBenefitKey(benefit));
      });
      obj = {};
      tmp9 = jsxs;
      obj.noBackground = look === jsxs.ROUNDED;
      obj.label = formatToPlainStringResult;
      tmp10 = jsxs;
      tmp11 = mapped;
      tmp7 = jsx;
      tmp8 = LabeledSection;
      if (look !== jsxs.FLAT) {
        tmp12 = jsx;
        tmp13 = View;
        obj1 = {};
        obj1.style = tmp2.roundedBenefitsContainer;
        obj1.children = mapped;
        tmp11 = jsx(View, obj1);
      }
      obj.children = tmp11;
      return tmp7(tmp8, obj);
    }
  }
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderTopStartRadius: 8, borderTopEndRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { width: 80, height: 80, borderRadius: 40, marginTop: 16 };
_createForOfIteratorHelperLoose.priceGroup = { marginTop: 16, alignItems: "center" };
_createForOfIteratorHelperLoose.priceInterval = { marginTop: 4 };
_createForOfIteratorHelperLoose.content = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.contentWithBackground = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = { width: "100%", height: 1, marginTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.separator = obj2;
_createForOfIteratorHelperLoose.sectionLabel = { paddingVertical: 16 };
_createForOfIteratorHelperLoose.benefitSpacing = { marginTop: 16 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.roundedBenefitsContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 16 };
_createForOfIteratorHelperLoose.footer = { borderBottomStartRadius: 8, borderBottomEndRadius: 8, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj4;
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  let guildId;
  let listingId;
  const tmp = _createForOfIteratorHelperLoose();
  ({ guildId, listingId } = arg0);
  let obj = importAll(14116);
  const first = callback(obj.useChannelBenefits(listingId), 1)[0];
  let obj1 = importAll(14116);
  const first1 = callback(obj1.useIntangibleBenefits(listingId), 1)[0];
  let obj2 = importAll(14116);
  obj = { style: tmp.container };
  obj = {};
  const role = obj2.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [callback2(Header, obj), , , , ];
  obj1 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl.string(require(1212) /* getSystemLocale */.t.FJZmYx);
  obj1.children = callback2(require(14127) /* GuildRoleSubscriptionMemberPreview */.GuildRoleSubscriptionMemberPreview, { role });
  items[1] = callback2(LabeledSection, obj1);
  let tmp6 = first.length > 0;
  if (tmp6) {
    obj2 = {};
    const items1 = [callback2(Separator, {}), ];
    const obj3 = { guildId, benefits: first, label: require(1212) /* getSystemLocale */.t.sqjII9, listingId };
    items1[1] = callback2(BenefitsSection, obj3);
    obj2.children = items1;
    tmp6 = callback3(closure_8, obj2);
  }
  items[2] = tmp6;
  let tmp15 = first1.length > 0;
  if (tmp15) {
    const obj4 = {};
    const items2 = [callback2(Separator, {}), ];
    const obj5 = { guildId, benefits: first1, label: require(1212) /* getSystemLocale */.t.aBE7f9, listingId };
    items2[1] = callback2(BenefitsSection, obj5);
    obj4.children = items2;
    tmp15 = callback3(closure_8, obj4);
  }
  items[3] = tmp15;
  items[4] = callback2(Content, { style: tmp.footer });
  obj.children = items;
  return callback3(View, obj);
};
