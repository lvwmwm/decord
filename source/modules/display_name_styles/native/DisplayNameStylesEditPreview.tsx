// Module ID: 14108
// Function ID: 107141
// Name: ChatPreview
// Dependencies: []
// Exports: default

// Module 14108 (ChatPreview)
function ChatPreview(arg0) {
  let displayName;
  let displayNameStyles;
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.chatContainer, pointerEvents: "none" };
  const memo = React.useMemo(() => {
    const obj = callback(closure_2[11]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  obj = { user, size: arg1(dependencyMap[12]).AvatarSizes.NORMAL, guildId };
  const items = [callback(arg1(dependencyMap[12]).Avatar, obj), ];
  obj = { style: tmp.chatContent };
  const obj1 = { style: tmp.chatHeader };
  const obj2 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: arg1(dependencyMap[14]).EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles };
  const items1 = [callback(importDefault(dependencyMap[13]), obj2), ];
  const obj3 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.chatTimestamp, children: memo };
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  obj1.children = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { style: tmp.chatMessageText };
  const intl = arg1(dependencyMap[8]).intl;
  obj4.children = intl.string(importDefault(dependencyMap[9]).h5Cuej);
  items2[1] = callback(arg1(dependencyMap[15]).Text, obj4);
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { muted: true, paused: "/assets/modules/premium/native/images/perks", presences: 300, tooltipTitle: 175, PREMIUM_GIFT_CUSTOMIZATION: null, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.previewSection = obj;
const obj1 = { "Null": null, "Null": "Group 9", "Null": 1, "Null": 2, "Null": 0, borderRadius: importDefault(dependencyMap[4]).radii.sm, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.chatPreviewWrapper = obj1;
obj.nameplatePreviewWrapper = {};
const tmp2 = arg1(dependencyMap[2]);
obj.chatContainer = { flexDirection: "row", borderRadius: importDefault(dependencyMap[4]).radii.sm, padding: importDefault(dependencyMap[4]).space.PX_16, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, gap: importDefault(dependencyMap[4]).space.PX_12 };
obj.chatContent = { flex: 1 };
obj.chatHeader = {};
obj.chatTimestamp = { marginTop: -8 };
obj.chatMessageText = {};
let closure_7 = obj.createStyles(obj);
const obj2 = { flexDirection: "row", borderRadius: importDefault(dependencyMap[4]).radii.sm, padding: importDefault(dependencyMap[4]).space.PX_16, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, gap: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  let displayName;
  let guildId;
  let pendingNameplate;
  let selectedFontId;
  let user;
  let userNameplate;
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  const arg1 = selectedFontId;
  selectedEffectId = selectedEffectId.selectedEffectId;
  const importDefault = selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const dependencyMap = selectedColors;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ userNameplate, pendingNameplate } = guildMemberAndUserPendingNameplate);
  let obj1 = arg1(dependencyMap[6]);
  const nameplateData = obj1.getNameplateData(guildMemberAndUserPendingNameplate.guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = React.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  obj = { style: tmp.previewSection };
  obj = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320 };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(importDefault(dependencyMap[9]).zoh6MT);
  const items1 = [callback(importDefault(dependencyMap[7]), obj), , ];
  obj1 = { style: tmp.chatPreviewWrapper, children: callback(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) };
  items1[1] = callback(View, obj1);
  const obj2 = { style: tmp.nameplatePreviewWrapper };
  const obj3 = { user, nameplate: pendingNameplate };
  let tmp11;
  if (null == pendingNameplate) {
    if (null != nameplateData) {
      userNameplate = nameplateData;
    }
    tmp11 = userNameplate;
  }
  obj3.nameplateData = tmp11;
  obj3.guildId = guildId;
  obj3.pendingDisplayNameStyles = memo;
  obj3.pendingGlobalName = displayName;
  obj2.children = callback(arg1(dependencyMap[10]).NameplatePreview, obj3);
  items1[2] = callback(View, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
