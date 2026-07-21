// Module ID: 16326
// Function ID: 126009
// Name: GuildRoleSubscriptionBenefitModalHeader
// Dependencies: []
// Exports: default

// Module 16326 (GuildRoleSubscriptionBenefitModalHeader)
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const Fonts = arg1(dependencyMap[3]).Fonts;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.headerContainer = obj;
obj.headerButtonContainer = { "Null": true, "Null": "/assets/modules/guild_role_subscriptions/native/images", "Null": 16 };
obj.headerButtonStart = { alignItems: "flex-start" };
obj.headerButtonEnd = { alignItems: "flex-end" };
const obj1 = {};
const tmp3 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj.headerButton = obj1;
const importDefaultResult = importDefault(dependencyMap[7]);
const obj2 = {};
const merged1 = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_MUTED, 16));
obj.disabledButton = obj2;
obj.titleContainer = {};
const obj3 = {};
const importDefaultResult1 = importDefault(dependencyMap[7]);
const merged2 = Object.assign(importDefault(dependencyMap[7])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3["textAlign"] = "center";
obj.title = obj3;
obj.subtitle = { textAlign: "center" };
let closure_8 = obj.createStyles(obj);
const importDefaultResult2 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  let listingId;
  let onClose;
  let onSave;
  let title;
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = callback4();
  let obj = importAll(dependencyMap[8]);
  obj = { top: true, style: tmp.headerContainer };
  obj = { style: items, accessibilityRole: "button", onPress: onClose };
  const items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  const obj1 = { style: tmp.headerButton };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.ETE/oC);
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj1);
  const items1 = [callback2(importDefault(dependencyMap[10]), obj), , ];
  const obj2 = { style: tmp.titleContainer };
  const items2 = [callback2(arg1(dependencyMap[13]).LegacyText, { style: tmp.title, accessibilityRole: "header", children: title }), ];
  const obj4 = { delete: "a", dispatch: "isArray", raw: "textAlign", style: tmp.subtitle, children: callback(obj.useName(listingId), 1)[0] };
  items2[1] = callback2(arg1(dependencyMap[11]).Text, obj4);
  obj2.children = items2;
  items1[1] = callback3(View, obj2);
  const obj5 = { style: items3, accessibilityRole: "button", disabled: !canSave, onPress: onSave };
  const items3 = [, ];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  const obj3 = { style: tmp.title, accessibilityRole: "header", children: title };
  const tmp2 = callback3;
  const tmp4 = importDefault(dependencyMap[10]);
  const obj6 = {};
  const items4 = [tmp.headerButton, ];
  let disabledButton = !canSave;
  if (disabledButton) {
    disabledButton = tmp.disabledButton;
  }
  items4[1] = disabledButton;
  obj6.style = items4;
  const intl2 = arg1(dependencyMap[12]).intl;
  obj6.children = intl2.string(arg1(dependencyMap[12]).t.R3BPH+);
  obj5.children = callback2(arg1(dependencyMap[13]).LegacyText, obj6);
  items1[2] = callback2(importDefault(dependencyMap[10]), obj5);
  obj.children = items1;
  return tmp2(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
};
