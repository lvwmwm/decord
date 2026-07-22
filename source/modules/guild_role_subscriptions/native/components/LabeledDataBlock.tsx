// Module ID: 13995
// Function ID: 106382
// Name: LabeledDataBlock
// Dependencies: []
// Exports: default

// Module 13995 (LabeledDataBlock)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { 795895862: "GAME_CLICKED_LANDING", 1467115836: "COLLECTIBLES_SHOP_ENTRY_MARKETING", 210973987: "construct", 1637835161: "isArray", 2022602892: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.container = obj;
obj.title = { marginRight: 4 };
const obj1 = {};
const tmp3 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[6])(arg1(dependencyMap[2]).Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.data = obj1;
obj.titleSection = { 0: 930167211465604600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000007836384246803317, 9223372036854775807: 28788265.235748198 };
let closure_5 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  let children;
  let icon;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.container, style];
  obj = { style: tmp.titleSection };
  obj = { alignSelf: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017519946539580565, justifyContent: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406163257, alignItems: 0.12701430925608292, backgroundColor: -8364235214453645000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.title, children: title };
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj), ];
  let tmp4 = null != icon;
  if (tmp4) {
    const obj1 = { accessibilityRole: "button", onPress: onPressIcon };
    const obj2 = { size: arg1(dependencyMap[9]).Icon.Sizes.SMALL, source: icon };
    obj1.children = callback(arg1(dependencyMap[9]).Icon, obj2);
    tmp4 = callback(arg1(dependencyMap[8]).PressableOpacity, obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  const items2 = [closure_4(View, obj), ];
  let tmp8 = children;
  if ("string" === typeof children) {
    const obj3 = { style: tmp.data, children };
    tmp8 = callback(arg1(dependencyMap[9]).LegacyText, obj3);
  }
  items2[1] = tmp8;
  obj.children = items2;
  return closure_4(View, obj);
};
