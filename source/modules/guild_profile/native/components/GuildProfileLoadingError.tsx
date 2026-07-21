// Module ID: 11871
// Function ID: 91901
// Name: GuildProfileLoadingError
// Dependencies: []
// Exports: default

// Module 11871 (GuildProfileLoadingError)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onPress) {
  let obj = arg1(dependencyMap[3]);
  const styles = obj.useStyles();
  let obj1 = arg1(dependencyMap[5]);
  obj = { style: styles.container };
  const token = obj1.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner };
  const tmp2 = importDefault(dependencyMap[4])();
  obj.start = arg1(dependencyMap[3]).DiagonalGradient.START;
  obj.end = arg1(dependencyMap[3]).DiagonalGradient.END;
  let obj4 = arg1(dependencyMap[3]);
  obj.colors = obj4.getBackgroundForProfile(tmp2, token);
  const items = [callback(importDefault(dependencyMap[7]), obj), , ];
  obj1 = { style: styles.header };
  const obj2 = { style: styles.avatarBackground };
  const obj3 = { style: styles.avatarBackground };
  obj4 = { size: "lg", color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_WARNING };
  obj3.children = callback(arg1(dependencyMap[8]).WarningIcon, obj4);
  obj2.children = callback(View, obj3);
  obj1.children = callback(View, obj2);
  items[1] = callback(View, obj1);
  const obj5 = { style: styles.body };
  const obj6 = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj6.children = intl.string(arg1(dependencyMap[10]).t.DmIUGK);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj6), ];
  const obj7 = { style: styles.error, onPress: onPress.onRetry, accessibilityRole: "button" };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj7.accessibilityLabel = intl2.string(arg1(dependencyMap[10]).t.s1fAEw);
  const obj8 = { size: "sm", color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_WARNING };
  const items2 = [callback(arg1(dependencyMap[8]).WarningIcon, obj8), ];
  const obj9 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj9.children = intl3.string(arg1(dependencyMap[10]).t.tmGHjc);
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj9);
  obj7.children = items2;
  items1[1] = callback2(arg1(dependencyMap[11]).PressableOpacity, obj7);
  obj5.children = items1;
  items[2] = callback2(View, obj5);
  obj.children = items;
  return callback2(View, obj);
};
