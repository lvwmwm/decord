// Module ID: 14181
// Function ID: 109078
// Name: getEmojiId
// Dependencies: [31, 27, 1348, 33, 4130, 3771, 14179, 1273, 4126, 566, 4320, 1212, 4593, 2]
// Exports: ChannelBenefitRow, IntangibleBenefitRow

// Module 14181 (getEmojiId)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function getEmojiId(benefit) {
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      str = importDefault(3771).convertSurrogateToName(benefit.emoji_name, false);
      const obj = importDefault(3771);
    }
  }
  return str;
}
function BenefitRow(description) {
  let emojiId;
  let guildId;
  let title;
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = callback3();
  let obj = { style: tmp.container };
  const items = [callback(importDefault(14179), { guildId, id: emojiId, size: 22, fontSize: 18 }), callback(require(1273) /* Button */.Spacer, { size: 16 }), ];
  obj = { style: tmp.textContainer };
  const items1 = [title, ];
  let tmp6 = null;
  if (null != description) {
    obj = { style: tmp.description, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp6 = callback(require(4126) /* Text */.Text, obj);
  }
  items1[1] = tmp6;
  obj.children = items1;
  items[2] = closure_6(View, obj);
  obj.children = items;
  return closure_6(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = callback3();
  let obj = benefit(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [benefit.ref_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(benefit.ref_id), items1);
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl = benefit(1212).intl;
  obj.children = "[" + intl.string(benefit(1212).t.bz1PZX) + "]";
  let tmp4 = callback(benefit(4126).Text, obj);
  if (null != stateFromStores) {
    obj = { style: tmp.channelTitle };
    const obj1 = { style: tmp.channelIcon, size: benefit(1273).Icon.Sizes.CUSTOM, source: benefit(4593).getChannelIcon(stateFromStores) };
    const items2 = [callback(benefit(1273).Icon, obj1), ];
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp3 };
    items2[1] = callback(benefit(4126).Text, obj2);
    obj.children = items2;
    tmp4 = callback2(View, obj);
    const obj6 = benefit(4593);
  }
  const obj3 = { emojiId: getEmojiId(benefit), guildId: benefit.guildId, title: tmp4, description: benefit.description };
  return callback(BenefitRow, obj3);
};
export const IntangibleBenefitRow = function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  obj = { emojiId: getEmojiId(benefit), guildId: benefit.guildId, title: callback(require(4126) /* Text */.Text, obj), description: benefit.description };
  obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return callback(BenefitRow, obj);
};
