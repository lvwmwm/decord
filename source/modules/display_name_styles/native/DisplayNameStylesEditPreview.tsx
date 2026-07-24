// Module ID: 14290
// Function ID: 109718
// Name: ChatPreview
// Dependencies: [31, 27, 33, 4130, 689, 7935, 1873, 8279, 1212, 2556, 9837, 3800, 1273, 8558, 8559, 4126, 2]
// Exports: default

// Module 14290 (ChatPreview)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function ChatPreview(arg0) {
  let displayName;
  let displayNameStyles;
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.chatContainer, pointerEvents: "none" };
  const memo = React.useMemo(() => {
    const obj = outer1_0(outer1_2[11]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  obj = { user, size: require(1273) /* Button */.AvatarSizes.NORMAL, guildId };
  const items = [callback(require(1273) /* Button */.Avatar, obj), ];
  obj = { style: tmp.chatContent };
  const obj1 = { style: tmp.chatHeader };
  const obj2 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: require(8559) /* DisplayNameStyleColorPreset */.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles };
  const items1 = [callback(importDefault(8558), obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo };
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.string(importDefault(2556).h5Cuej);
  items2[1] = callback(require(4126) /* Text */.Text, obj4);
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
_createForOfIteratorHelperLoose.previewSection = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.chatPreviewWrapper = obj1;
_createForOfIteratorHelperLoose.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
_createForOfIteratorHelperLoose.chatContainer = { flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.chatContent = { flex: 1 };
_createForOfIteratorHelperLoose.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
_createForOfIteratorHelperLoose.chatTimestamp = { marginTop: -8 };
_createForOfIteratorHelperLoose.chatMessageText = {};
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  let displayName;
  let guildId;
  let pendingNameplate;
  let selectedFontId;
  let user;
  let userNameplate;
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = selectedFontId(selectedColors[5]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ userNameplate, pendingNameplate } = guildMemberAndUserPendingNameplate);
  let obj1 = selectedFontId(selectedColors[6]);
  const nameplateData = obj1.getNameplateData(guildMemberAndUserPendingNameplate.guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = React.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  obj = { style: tmp.previewSection };
  obj = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320 };
  const intl = selectedFontId(selectedColors[8]).intl;
  obj.accessibilityLabel = intl.string(selectedEffectId(selectedColors[9]).zoh6MT);
  const items1 = [callback(selectedEffectId(selectedColors[7]), obj), , ];
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
  obj2.children = callback(selectedFontId(selectedColors[10]).NameplatePreview, obj3);
  items1[2] = callback(View, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
