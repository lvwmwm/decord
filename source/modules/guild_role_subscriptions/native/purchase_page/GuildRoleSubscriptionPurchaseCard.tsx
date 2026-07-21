// Module ID: 15150
// Function ID: 114298
// Name: GuildRoleSubscriptionPurchaseCard
// Dependencies: []
// Exports: default

// Module 15150 (GuildRoleSubscriptionPurchaseCard)
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
obj.headerText = { "Null": 7, "Null": 370 };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: "%AsyncIteratorPrototype%", display: "_headers", flexDirection: "png", alignItems: "SHEET_HANDLE_WIDTH" };
obj.headerDot = obj2;
const obj3 = { GameIconImageSize: "<string:1358643473>", EmbeddedActivityLaunchability: "<string:3748724738>", subtitle: "<string:822083584>", borderColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_HOVER };
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
  obj = { ind: null, PX_8: null };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  obj2 = { style: tmp.headerText };
  const obj3 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000, children: callback(obj1.useName(listingId), 1)[0] };
  const items = [callback2(arg1(dependencyMap[10]).Text, obj3), callback2(View, { style: tmp.headerDot }), ];
  const obj5 = { hasMaxConnections: -0.00000000003092285168288388, isBoostOnlySubscription: -1020848100503384400000000000000000000000, children: formattedSubscriptionPlan };
  items[2] = callback2(arg1(dependencyMap[10]).Text, obj5);
  obj2.children = items;
  const items1 = [callback3(View, obj2), callback2(arg1(dependencyMap[11]).Spacer, { size: 16 }), , , ];
  const obj6 = { <string:1643205302>: true, <string:1415816450>: true, <string:4283523744>: true, children: callback(obj.useDescription(listingId), 1)[0] };
  items1[2] = callback2(arg1(dependencyMap[8]).TruncatedText, obj6);
  items1[3] = callback2(arg1(dependencyMap[11]).Spacer, { size: 24 });
  items1[4] = callback2(importDefault(dependencyMap[12]), { listingId });
  obj1.children = items1;
  const items2 = [callback3(View, obj1), callback2(View, { style: tmp.seperator }), ];
  const obj8 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj9 };
  const obj10 = { hasMaxConnections: null, isBoostOnlySubscription: null, style: { textTransform: "uppercase" } };
  const intl = arg1(dependencyMap[14]).intl;
  obj10.children = intl.string(arg1(dependencyMap[14]).t.UdEvUi);
  const items3 = [callback2(arg1(dependencyMap[10]).Text, obj10), callback2(arg1(dependencyMap[11]).Spacer, { size: 24 }), callback2(arg1(dependencyMap[15]).Content, { listingId, guildId: guildId.guildId })];
  obj8.children = items3;
  items2[2] = callback3(arg1(dependencyMap[13]).BottomSheetScrollView, obj8);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(arg1(dependencyMap[9]).BottomSheet, obj);
};
