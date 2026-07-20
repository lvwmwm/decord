// Module ID: 8568
// Function ID: 68086
// Name: RestrictedGuildProfileView
// Dependencies: []
// Exports: default

// Module 8568 (RestrictedGuildProfileView)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default function RestrictedGuildProfileView() {
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
  const obj3 = {};
  const tmp4 = importDefault(dependencyMap[7]);
  obj3.size = arg1(dependencyMap[8]).GuildIconSizes.XXLARGE;
  obj3.textStyle = styles.restrictedAcronym;
  obj2.children = callback(importDefault(dependencyMap[8]), obj3);
  obj1.children = callback(View, obj2);
  items[1] = callback(View, obj1);
  obj4 = { style: styles.body };
  const obj5 = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj5.children = intl.string(arg1(dependencyMap[10]).t.wZmueu);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj5), ];
  const obj6 = { INTEGRATION_CREATE: 3, ConstraintReasonCode: null };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj6.children = intl2.string(arg1(dependencyMap[10]).t.8mfCqY);
  items1[1] = callback(arg1(dependencyMap[9]).Text, obj6);
  obj4.children = items1;
  items[2] = callback2(View, obj4);
  obj.children = items;
  return callback2(View, obj);
};
