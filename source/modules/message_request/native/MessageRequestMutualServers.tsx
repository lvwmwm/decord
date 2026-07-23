// Module ID: 15563
// Function ID: 120027
// Name: MessageRequestMutualServers
// Dependencies: [31, 27, 33, 4130, 5515, 15564, 1212, 11651, 4126, 4660, 2]
// Exports: default

// Module 15563 (MessageRequestMutualServers)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, label: { flexShrink: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default function MessageRequestMutualServers(textVariant) {
  let iconSize;
  let onPress;
  let style;
  let userId;
  ({ onPress, iconSize } = textVariant);
  ({ userId, style } = textVariant);
  if (iconSize === undefined) {
    iconSize = iconSize(5515).GuildIconSizes.XXSMALL_12;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = callback2();
  let obj = iconSize(15564);
  const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = iconSize(1212).intl;
    obj = { count: length };
    let formatResult = intl2.format(iconSize(1212).t.eE3oep, obj);
  } else {
    const intl = iconSize(1212).intl;
    formatResult = intl.string(iconSize(1212).t.jpY0X5);
  }
  obj = { style: items };
  items = [tmp3.container, style];
  let tmp11 = length > 0;
  if (tmp11) {
    const obj1 = { size: iconSize, names: substr.map((name) => name.name), children: substr.map((guild) => outer1_4(outer1_1(outer1_2[4]), { guild, size: iconSize }, guild.id)) };
    tmp11 = callback(iconSize(11651).GuildIconPile, obj1);
  }
  const items1 = [tmp11, ];
  const obj2 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label };
  let combined = formatResult;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  obj2.children = combined;
  items1[1] = callback(iconSize(4126).Text, obj2);
  obj.children = items1;
  const tmp9Result = closure_5(View, obj);
  let tmp19 = tmp9Result;
  if (null != onPress) {
    tmp19 = tmp9Result;
    if (length > 0) {
      const obj3 = { accessibilityRole: "button", onPress, children: tmp9Result };
      tmp19 = callback(iconSize(4660).PressableOpacity, obj3);
    }
  }
  return tmp19;
};
