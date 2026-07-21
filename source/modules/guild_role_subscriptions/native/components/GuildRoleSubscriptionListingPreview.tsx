// Module ID: 16327
// Function ID: 125989
// Name: PriceTier
// Dependencies: []
// Exports: GuildRoleSubscriptionListingPreview

// Module 16327 (PriceTier)
function PriceTier(arg0) {
  let currency;
  let price;
  ({ price, currency } = arg0);
  let obj = Object.create(null);
  obj.price = 0;
  obj.currency = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback4();
  obj = { style: tmp3.priceGroup };
  obj = {};
  let obj2 = arg1(dependencyMap[7]);
  obj.children = obj2.formatPrice(price, currency);
  const items = [callback2(arg1(dependencyMap[6]).Text, obj), ];
  const obj1 = { style: tmp3.priceInterval };
  const intl = arg1(dependencyMap[8]).intl;
  obj2 = { period: arg1(dependencyMap[9]).formatPlanInterval(merged) };
  obj1.children = intl.format(arg1(dependencyMap[8]).t.isLGyX, obj2);
  items[1] = callback2(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items;
  return callback3(View, obj);
}
function Header(onPress) {
  const listingId = onPress.listingId;
  const tmp = callback4();
  let obj = importAll(dependencyMap[10]);
  let obj1 = importAll(dependencyMap[10]);
  let obj2 = importAll(dependencyMap[10]);
  const first = callback(obj2.useImage(listingId), 1)[0];
  obj = { style: tmp.header };
  const items = [callback2(arg1(dependencyMap[6]).Text, { children: callback(obj1.useName(listingId), 1)[0] }), , , , ];
  obj = { style: tmp.image };
  obj1 = {};
  let str = "";
  const obj4 = importAll(dependencyMap[10]);
  const tmp3 = closure_7;
  const tmp4 = View;
  const tmp5 = callback2;
  if (null != first) {
    str = first;
  }
  obj1.uri = str;
  obj.source = obj1;
  items[1] = tmp5(importDefault(dependencyMap[11]), obj);
  obj2 = {};
  const merged = Object.assign(callback(obj.useSubscriptionPlan(listingId), 1)[0]);
  items[2] = callback2(PriceTier, obj2);
  items[3] = callback2(arg1(dependencyMap[12]).GuildPremiumRoleSubscribeButton, { onPress: onPress.onSubscribePress });
  items[4] = callback2(arg1(dependencyMap[6]).Text, { variant: "text-sm/medium", children: callback(obj4.useDescription(listingId), 1)[0] });
  obj.children = items;
  return tmp3(tmp4, obj);
}
function Content(arg0) {
  let children;
  let noBackground;
  let style;
  ({ children, noBackground, style } = arg0);
  const tmp = callback4();
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
function SectionLabel(children) {
  let obj = Object.create(null);
  obj.label = 0;
  const merged = Object.assign(children, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { style: callback4().sectionLabel, children: children.label };
  obj["children"] = callback2(arg1(dependencyMap[6]).Text, obj);
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
  obj = { style: callback4().separator };
  obj.children = callback2(View, obj);
  return callback2(Content, obj);
}
class BenefitsSection {
  constructor(arg0) {
    ({ guildId: closure_0, label, benefits, look } = global);
    if (look === undefined) {
      tmp = jsxs;
      look = jsxs.FLAT;
    }
    importDefault = global.listingId;
    closure_2 = undefined;
    tmp2 = jsxs();
    closure_2 = tmp2;
    if (0 === benefits.length) {
      tmp14 = null;
      return null;
    } else {
      str = "string";
      formatToPlainStringResult = label;
      if ("string" !== typeof label) {
        tmp3 = arg1;
        tmp4 = dependencyMap;
        num = 8;
        intl = arg1(dependencyMap[8]).intl;
        obj = {};
        obj.count = benefits.length;
        formatToPlainStringResult = intl.formatToPlainString(label, obj);
      }
      mapped = benefits.map((benefit) => {
        let obj = {};
        let benefitSpacing = arg1 > 0;
        if (benefitSpacing) {
          benefitSpacing = tmp2.benefitSpacing;
        }
        obj.style = benefitSpacing;
        obj = { guildId: callback, benefit, isInteractive: listingId !== callback(closure_3[14]).NEW_LISTING_EDIT_STATE_ID };
        obj.children = callback2(callback(closure_3[13]).GuildRoleSubscriptionBenefitPreview, obj);
        return callback2(closure_5, obj, callback(closure_3[9]).getBenefitKey(benefit));
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
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { padding: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.header = obj;
obj.image = { "Null": "isArray", "Null": "memo", "Null": "w", "Null": "isArray" };
obj.priceGroup = { "Null": "center", "Null": "center" };
obj.priceInterval = { marginTop: 4 };
obj.content = { paddingHorizontal: 16 };
const tmp3 = arg1(dependencyMap[3]);
obj.contentWithBackground = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = { "Bool(false)": null, "Bool(false)": true, "Bool(false)": true, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.separator = obj2;
obj.sectionLabel = { paddingVertical: 16 };
obj.benefitSpacing = { marginTop: 16 };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.roundedBenefitsContainer = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.lg, padding: 16 };
obj.footer = { "Null": true, "Null": null, "Null": 8 };
let closure_9 = obj.createStyles(obj);
const obj4 = { FLAT: 0, [0]: "FLAT", ROUNDED: 1, [1]: "ROUNDED" };
BenefitsSection.Looks = obj4;
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.lg, padding: 16 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionListingPreview.tsx");

export { BenefitsSection };
export const GuildRoleSubscriptionListingPreview = function GuildRoleSubscriptionListingPreview(arg0) {
  let guildId;
  let listingId;
  const tmp = callback4();
  ({ guildId, listingId } = arg0);
  let obj = importAll(dependencyMap[10]);
  const first = callback(obj.useChannelBenefits(listingId), 1)[0];
  let obj1 = importAll(dependencyMap[10]);
  const first1 = callback(obj1.useIntangibleBenefits(listingId), 1)[0];
  let obj2 = importAll(dependencyMap[10]);
  obj = { style: tmp.container };
  obj = {};
  const role = obj2.useRole(listingId, guildId);
  const merged = Object.assign(arg0);
  const items = [callback2(Header, obj), , , , ];
  obj1 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj1.label = intl.string(arg1(dependencyMap[8]).t.FJZmYx);
  obj1.children = callback2(arg1(dependencyMap[15]).GuildRoleSubscriptionMemberPreview, { role });
  items[1] = callback2(LabeledSection, obj1);
  let tmp6 = first.length > 0;
  if (tmp6) {
    obj2 = {};
    const items1 = [callback2(Separator, {}), ];
    const obj3 = { guildId, benefits: first, label: arg1(dependencyMap[8]).t.sqjII9, listingId };
    items1[1] = callback2(BenefitsSection, obj3);
    obj2.children = items1;
    tmp6 = callback3(closure_8, obj2);
  }
  items[2] = tmp6;
  let tmp15 = first1.length > 0;
  if (tmp15) {
    const obj4 = {};
    const items2 = [callback2(Separator, {}), ];
    const obj5 = { guildId, benefits: first1, label: arg1(dependencyMap[8]).t.aBE7f9, listingId };
    items2[1] = callback2(BenefitsSection, obj5);
    obj4.children = items2;
    tmp15 = callback3(closure_8, obj4);
  }
  items[3] = tmp15;
  items[4] = callback2(Content, { style: tmp.footer });
  obj.children = items;
  return callback3(View, obj);
};
