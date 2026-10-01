// Module ID: 16702
// Function ID: 16703
// Name: MessageRequestMutualServers
// Dependencies: [19, 17, 21, 4836, 5896, 16703, 1115, 12115, 4832, 5435, 2]
// Exports: default

// Module 16702 (MessageRequestMutualServers)
import react_native from "react-native" /* 17 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, label: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default function MessageRequestMutualServers(textVariant) {
  let combined;
  let formatResult;
  let iconSize;
  let items;
  let items1;
  let onPress;
  let style;
  let userId;
  ({ onPress, iconSize } = textVariant);
  ({ userId, style } = textVariant);
  if (iconSize === undefined) {
    iconSize = iconSize(5896).GuildIconSizes.XXSMALL_12;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = closure_6();
  let obj = iconSize(16703);
  const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = tmp4(1115).intl;
    const obj2 = { count: mutualGuildsForMessageRequests.length };
    formatResult = intl2.format(tmp4(1115).t.eE3oep, obj2);
  } else {
    const intl = tmp4(1115).intl;
    formatResult = intl.string(tmp4(1115).t.jpY0X5);
  }
  const obj3 = { style: items, children: items1 };
  items = [tmp3.container, style];
  let tmp9 = length > 0;
  const tmp7 = closure_5;
  const tmp8 = View;
  if (tmp9) {
    const obj4 = {
      size: iconSize,
      names: substr.map((name) => name.name),
      children: substr.map((guild) => {
          const obj = { guild, size: iconSize };
          return React3(GuildIconDefault, obj, guild.id);
        })
    };
    const GuildIconPile = tmp4(12115).GuildIconPile;
    tmp9 = closure_4(GuildIconPile, obj4);
  }
  items1 = [tmp9, ];
  const obj5 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: combined };
  combined = formatResult;
  const Text = tmp4(4832).Text;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  items1[1] = closure_4(Text, obj5);
  const tmp7Result = tmp7(tmp8, obj3);
  let tmp11Result = tmp7Result;
  if (null != onPress) {
    tmp11Result = tmp7Result;
    if (mutualGuildsForMessageRequests.length > 0) {
      const obj6 = { accessibilityRole: "button", onPress, children: tmp7Result };
      tmp11Result = tmp11(tmp4(5435).PressableOpacity, obj6);
    }
  }
  return tmp11Result;
};
