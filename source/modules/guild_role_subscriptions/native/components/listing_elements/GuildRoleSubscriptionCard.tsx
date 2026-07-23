// Module ID: 14126
// Function ID: 108736
// Name: SectionTitle
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 14116, 9405, 1212, 1273, 14127, 14128, 14131, 2]
// Exports: Content

// Module 14126 (SectionTitle)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class SectionTitle {
  constructor(arg0) {
    tmp = c9();
    obj = { variant: "text-xs/bold", color: "text-default" };
    obj.style = tmp.sectionTitle;
    obj.children = global.children;
    return jsx(require("Text").Text, obj);
  }
}
class Separator {
  constructor() {
    obj = { style: c9().separator };
    return jsx(View, obj);
  }
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { sectionTitle: { textTransform: "uppercase" } };
_createForOfIteratorHelperLoose = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 24 };
_createForOfIteratorHelperLoose.separator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  let guildId;
  let listingId;
  ({ listingId, guildId } = arg0);
  let obj = importAll(14116);
  const first = callback(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj1 = importAll(14116);
  const first1 = callback(obj1.useChannelBenefits(listingId), 1)[0];
  let obj2 = importAll(14116);
  const first2 = callback(obj2.useIntangibleBenefits(listingId), 1)[0];
  let obj3 = importAll(14116);
  const role = obj3.useRole(listingId, guildId);
  obj = {
    renderGap() {
      return outer1_6(outer1_11, {});
    }
  };
  obj = {};
  obj1 = {};
  const intl = guildId(1212).intl;
  obj1.children = intl.string(guildId(1212).t["DJ+bGu"]);
  const items = [callback2(SectionTitle, obj1), callback2(guildId(1273).Spacer, { size: 8 }), callback2(guildId(14127).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj.children = items;
  const items1 = [callback3(closure_7, obj), , , ];
  let tmp4 = null;
  if (first.size > 0) {
    obj2 = {};
    obj3 = {};
    const intl2 = guildId(1212).intl;
    const obj4 = { numEmojis: first.size };
    obj3.children = intl2.format(guildId(1212).t.oDeFmv, obj4);
    const items2 = [callback2(SectionTitle, obj3), , ];
    const obj5 = { size: 14 };
    items2[1] = callback2(guildId(1273).Spacer, obj5);
    const obj6 = {};
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj6.emojiIds = items3;
    obj6.guildId = guildId;
    items2[2] = callback2(importDefault(14128), obj6);
    obj2.children = items2;
    tmp4 = callback3(closure_7, obj2);
    const tmp14 = importDefault(14128);
  }
  items1[1] = tmp4;
  let tmp18 = null;
  if (first1.length > 0) {
    const obj7 = {};
    const obj8 = {};
    const intl3 = guildId(1212).intl;
    const obj9 = { numChannels: length };
    obj8.children = intl3.format(guildId(1212).t.l40GUu, obj9);
    const items4 = [callback2(SectionTitle, obj8), , ];
    const obj10 = { size: 14 };
    items4[1] = callback2(guildId(1273).Spacer, obj10);
    const obj11 = { gap: 14, children: first1.map((benefit) => outer1_6(guildId(outer1_3[13]).ChannelBenefitRow, { benefit, guildId }, benefit.ref_id)) };
    items4[2] = callback2(guildId(9405).GappedList, obj11);
    obj7.children = items4;
    tmp18 = callback3(closure_7, obj7);
  }
  items1[2] = tmp18;
  let tmp27 = null;
  if (first2.length > 0) {
    const obj12 = {};
    const obj13 = {};
    const intl4 = guildId(1212).intl;
    const obj14 = { numIntangibles: length2 };
    obj13.children = intl4.format(guildId(1212).t["4V/Mfi"], obj14);
    const items5 = [callback2(SectionTitle, obj13), , ];
    const obj15 = { size: 14 };
    items5[1] = callback2(guildId(1273).Spacer, obj15);
    const obj16 = { gap: 14, children: first2.map((benefit) => outer1_6(guildId(outer1_3[13]).IntangibleBenefitRow, { benefit, guildId }, arg1)) };
    items5[2] = callback2(guildId(9405).GappedList, obj16);
    obj12.children = items5;
    tmp27 = callback3(closure_7, obj12);
  }
  items1[3] = tmp27;
  obj.children = items1;
  return callback3(guildId(9405).GappedList, obj);
};
