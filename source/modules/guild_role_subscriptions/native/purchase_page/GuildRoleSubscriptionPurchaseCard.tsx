// Module ID: 15147
// Function ID: 114264
// Name: GuildRoleSubscriptionPurchaseCard
// Dependencies: []
// Exports: default

// Module 15147 (GuildRoleSubscriptionPurchaseCard)
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj.container = obj;
obj.header = {};
const tmp3 = arg1(dependencyMap[3]);
obj.content = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.headerText = {};
const obj2 = { "Bool(true)": "<string:906821633>", "Bool(true)": "<string:3578855425>", "Bool(true)": "<string:1339831>", "Bool(true)": "<string:979435520>", "Bool(true)": "<string:2369412434>", backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.headerDot = obj2;
const obj3 = { flexDirection: null, paddingRight: null, alignItems: null, borderColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.seperator = obj3;
let closure_8 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const tmp = callback4();
  let obj = importAll(dependencyMap[7]);
  let obj1 = importAll(dependencyMap[7]);
  let obj2 = arg1(dependencyMap[8]);
  const formattedSubscriptionPlan = obj2.useFormattedSubscriptionPlan(listingId);
  obj = { 1891290120: null, -475247768: null };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  obj2 = { style: tmp.headerText };
  const items = [callback2(arg1(dependencyMap[10]).Text, { children: callback(obj1.useName(listingId), 1)[0] }), callback2(View, { style: tmp.headerDot }), callback2(arg1(dependencyMap[10]).Text, { children: formattedSubscriptionPlan })];
  obj2.children = items;
  const items1 = [callback3(View, obj2), callback2(arg1(dependencyMap[11]).Spacer, { size: 16 }), , , ];
  const obj4 = { -9223372036854775808: "value", 0: "container", 0: "construct", children: callback(obj.useDescription(listingId), 1)[0] };
  items1[2] = callback2(arg1(dependencyMap[8]).TruncatedText, obj4);
  items1[3] = callback2(arg1(dependencyMap[11]).Spacer, { size: 24 });
  items1[4] = callback2(importDefault(dependencyMap[12]), { listingId });
  obj1.children = items1;
  const items2 = [callback3(View, obj1), callback2(View, { style: tmp.seperator }), ];
  const obj6 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj7 };
  const obj8 = { style: { textTransform: "uppercase" } };
  const intl = arg1(dependencyMap[14]).intl;
  obj8.children = intl.string(arg1(dependencyMap[14]).t.UdEvUi);
  const items3 = [callback2(arg1(dependencyMap[10]).Text, obj8), callback2(arg1(dependencyMap[11]).Spacer, { size: 24 }), callback2(arg1(dependencyMap[15]).Content, { listingId, guildId: guildId.guildId })];
  obj6.children = items3;
  items2[2] = callback3(arg1(dependencyMap[13]).BottomSheetScrollView, obj6);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(arg1(dependencyMap[9]).BottomSheet, obj);
};
