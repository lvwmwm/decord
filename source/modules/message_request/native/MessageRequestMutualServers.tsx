// Module ID: 15435
// Function ID: 117771
// Name: MessageRequestMutualServers
// Dependencies: []
// Exports: default

// Module 15435 (MessageRequestMutualServers)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null }, label: { flexShrink: 1 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default function MessageRequestMutualServers(textVariant) {
  let iconSize;
  let onPress;
  let style;
  let userId;
  ({ onPress, iconSize } = textVariant);
  ({ userId, style } = textVariant);
  if (iconSize === undefined) {
    iconSize = arg1(dependencyMap[4]).GuildIconSizes.XXSMALL_12;
  }
  const arg1 = iconSize;
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = callback2();
  let obj = arg1(dependencyMap[5]);
  const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = arg1(dependencyMap[6]).intl;
    obj = { count: length };
    let formatResult = intl2.format(arg1(dependencyMap[6]).t.eE3oep, obj);
  } else {
    const intl = arg1(dependencyMap[6]).intl;
    formatResult = intl.string(arg1(dependencyMap[6]).t.jpY0X5);
  }
  obj = { style: items };
  const items = [tmp3.container, style];
  let tmp11 = length > 0;
  if (tmp11) {
    const obj1 = { size: iconSize, names: substr.map((name) => name.name), children: substr.map((guild) => callback2(callback(closure_2[4]), { guild, size: iconSize }, guild.id)) };
    tmp11 = callback(arg1(dependencyMap[7]).GuildIconPile, obj1);
  }
  const items1 = [tmp11, ];
  const obj2 = { variant: str, style: tmp3.label };
  let combined = formatResult;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  obj2.children = combined;
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj.children = items1;
  const tmp9Result = closure_5(View, obj);
  let tmp19 = tmp9Result;
  if (null != onPress) {
    tmp19 = tmp9Result;
    if (length > 0) {
      const obj3 = { accessibilityRole: "button", onPress, children: tmp9Result };
      tmp19 = callback(arg1(dependencyMap[9]).PressableOpacity, obj3);
    }
  }
  return tmp19;
};
