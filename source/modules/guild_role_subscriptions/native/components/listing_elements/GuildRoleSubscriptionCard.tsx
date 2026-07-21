// Module ID: 14002
// Function ID: 106508
// Name: SectionTitle
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 2162688, 918159360, 37093376, 131072, 108789760, 117440512]
// Exports: Content

// Module 14002 (SectionTitle)
import closure_4 from "__exportStarResult1";
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

class SectionTitle {
  constructor(arg0) {
    tmp = closure_9();
    obj = { style: tmp.sectionTitle, children: global.children };
    return jsx(require("__exportStarResult1").Text, obj);
  }
}
class Separator {
  constructor() {
    obj = { style: closure_9().separator };
    return jsx(View, obj);
  }
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = __exportStarResult1);
__exportStarResult1 = { sectionTitle: { textTransform: "uppercase" } };
__exportStarResult1 = { 0: "Array", 9223372036854775807: "isArray", 9223372036854775807: "constructor", -9223372036854775808: "Boolean", backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
__exportStarResult1.separator = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  let guildId;
  let listingId;
  ({ listingId, guildId } = arg0);
  const arg1 = guildId;
  let obj = importAll(dependencyMap[7]);
  const first = callback(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj1 = importAll(dependencyMap[7]);
  const first1 = callback(obj1.useChannelBenefits(listingId), 1)[0];
  let obj2 = importAll(dependencyMap[7]);
  const first2 = callback(obj2.useIntangibleBenefits(listingId), 1)[0];
  let obj3 = importAll(dependencyMap[7]);
  const role = obj3.useRole(listingId, guildId);
  obj = {
    renderGap() {
      return callback(closure_11, {});
    }
  };
  obj = {};
  obj1 = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.DJ+bGu);
  const items = [callback2(SectionTitle, obj1), callback2(arg1(dependencyMap[10]).Spacer, { size: 8 }), callback2(arg1(dependencyMap[11]).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj.children = items;
  const items1 = [callback3(closure_7, obj), , , ];
  let tmp4 = null;
  if (first.size > 0) {
    obj2 = {};
    obj3 = {};
    const intl2 = arg1(dependencyMap[9]).intl;
    const obj4 = { numEmojis: first.size };
    obj3.children = intl2.format(arg1(dependencyMap[9]).t.oDeFmv, obj4);
    const items2 = [callback2(SectionTitle, obj3), , ];
    const obj5 = { size: 14 };
    items2[1] = callback2(arg1(dependencyMap[10]).Spacer, obj5);
    const obj6 = {};
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj6.emojiIds = items3;
    obj6.guildId = guildId;
    items2[2] = callback2(importDefault(dependencyMap[12]), obj6);
    obj2.children = items2;
    tmp4 = callback3(closure_7, obj2);
    const tmp14 = importDefault(dependencyMap[12]);
  }
  items1[1] = tmp4;
  let tmp18 = null;
  if (first1.length > 0) {
    const obj7 = {};
    const obj8 = {};
    const intl3 = arg1(dependencyMap[9]).intl;
    const obj9 = { numChannels: length };
    obj8.children = intl3.format(arg1(dependencyMap[9]).t.l40GUu, obj9);
    const items4 = [callback2(SectionTitle, obj8), , ];
    const obj10 = { size: 14 };
    items4[1] = callback2(arg1(dependencyMap[10]).Spacer, obj10);
    const obj11 = { gap: 14, children: first1.map((benefit) => callback(guildId(closure_3[13]).ChannelBenefitRow, { benefit, guildId }, benefit.ref_id)) };
    items4[2] = callback2(arg1(dependencyMap[8]).GappedList, obj11);
    obj7.children = items4;
    tmp18 = callback3(closure_7, obj7);
  }
  items1[2] = tmp18;
  let tmp27 = null;
  if (first2.length > 0) {
    const obj12 = {};
    const obj13 = {};
    const intl4 = arg1(dependencyMap[9]).intl;
    const obj14 = { numIntangibles: length2 };
    obj13.children = intl4.format(arg1(dependencyMap[9]).t.4V/Mfi, obj14);
    const items5 = [callback2(SectionTitle, obj13), , ];
    const obj15 = { size: 14 };
    items5[1] = callback2(arg1(dependencyMap[10]).Spacer, obj15);
    const obj16 = { gap: 14, children: first2.map((benefit) => callback(guildId(closure_3[13]).IntangibleBenefitRow, { benefit, guildId }, arg1)) };
    items5[2] = callback2(arg1(dependencyMap[8]).GappedList, obj16);
    obj12.children = items5;
    tmp27 = callback3(closure_7, obj12);
  }
  items1[3] = tmp27;
  obj.children = items1;
  return callback3(arg1(dependencyMap[8]).GappedList, obj);
};
