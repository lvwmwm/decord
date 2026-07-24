// Module ID: 8904
// Function ID: 70155
// Name: VoiceBadges
// Dependencies: [31, 4217, 33, 4130, 689, 5515, 5501, 8905, 1273, 5462, 8906, 8917, 8959, 4361, 8561, 8537, 566, 6980, 4126, 1212, 5165, 4543, 8961, 3969, 8620, 8970, 2]
// Exports: MemberRowItem, VoicePanelFormSection

// Module 8904 (VoiceBadges)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function VoiceBadges(arg0) {
  let muteDeafenIconState;
  let videoIconState;
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.voiceBadgesContainer };
  let tmp4 = null;
  if (null != muteDeafenIconState) {
    obj = { style: tmp.iconWrapper };
    obj = { state: muteDeafenIconState, size: require(1273) /* Button */.IconSizes.SMALL, style: tmp.icon };
    obj.children = callback(require(8905) /* VideoDisabledSvgIcon */.MuteDeafenIcon, obj);
    tmp4 = callback(importDefault(5515), obj);
    const tmp8 = importDefault(5515);
  }
  const items = [tmp4, ];
  let tmp11 = null;
  if (null != videoIconState) {
    const obj1 = { style: tmp.iconWrapper };
    const obj2 = { state: videoIconState, size: require(1273) /* Button */.IconSizes.SMALL, style: tmp.icon };
    obj1.children = callback(require(8905) /* VideoDisabledSvgIcon */.VideoIcon, obj2);
    tmp11 = callback(importDefault(5515), obj1);
    const tmp15 = importDefault(5515);
  }
  items[1] = tmp11;
  obj.children = items;
  return closure_6(importDefault(5515), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" } };
_createForOfIteratorHelperLoose = { marginLeft: 8, padding: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.iconWrapper = _createForOfIteratorHelperLoose;
let obj1 = { width: 16, height: 16, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.icon = obj1;
_createForOfIteratorHelperLoose.notConnectedAvatar = { opacity: 0.5 };
_createForOfIteratorHelperLoose.memberRow = { flexDirection: "row", alignItems: "center", gap: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  obj = { style: items };
  items = [_createForOfIteratorHelperLoose().container, style.style];
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback(importDefault(5515), obj);
};
export const MemberRowItem = function MemberRowItem(user) {
  let guildId;
  let nick;
  let notConnected;
  let showRing;
  let showSecureFramesUI;
  user = user.user;
  const channelId = user.channelId;
  let flag = user.selfStream;
  if (flag === undefined) {
    flag = false;
  }
  ({ nick, guildId, notConnected } = user);
  if (notConnected === undefined) {
    notConnected = false;
  }
  ({ showSecureFramesUI, showRing } = user);
  if (showSecureFramesUI === undefined) {
    showSecureFramesUI = false;
  }
  let analyticsLocations;
  let id;
  let stateFromStores;
  const tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = channelId(flag[9])().analyticsLocations;
  let obj = user(flag[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj1 = user(flag[10]);
  const videoIconState = obj1.useVideoIconState(user.id, guildId);
  id = user.id;
  let obj2 = user(flag[11]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId: id, channelId });
  let obj3 = user(flag[12]);
  const canRing = obj3.useCanRing(user, "MemberRowItem");
  obj = { userId: user.id, guildId };
  let obj5 = user(flag[14]);
  const displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: channelId(flag[13])(obj) });
  let items = [id, channelId, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    channelId(flag[15])({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  let obj6 = user(flag[16]);
  const items1 = [id];
  stateFromStores = obj6.useStateFromStores(items1, () => user(flag[17]).getStreamerActivityByUserId(id, id));
  const items2 = [stateFromStores, flag];
  const memo = analyticsLocations.useMemo(() => {
    if (!flag) {
      return null;
    } else {
      if (null == stateFromStores) {
        const intl = user(flag[19]).intl;
        intl.string(user(flag[19]).t.eXan7B);
      }
      let formatResult = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1 };
      const intl2 = user(flag[19]).intl;
      formatResult = {};
      if (null == stateFromStores.details) {
        formatResult.name = stateFromStores.name;
        formatResult = intl2.format(tmp7, formatResult);
        formatResult.children = formatResult;
        tmp4(user(flag[18]).Text, formatResult);
      }
      const details = stateFromStores.details;
      tmp4 = stateFromStores;
    }
  }, items2);
  obj = { onPress: callback };
  obj1 = { user, guildId, size: user(flag[8]).AvatarSizes.REFRESH_MEDIUM_32 };
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj1.style = notConnectedAvatar;
  obj.icon = stateFromStores(user(flag[8]).Avatar, obj1);
  obj.subLabel = memo;
  if (showRing) {
    if (canRing) {
      obj2 = {
        size: "sm",
        variant: "secondary",
        onPress() {
              const items = [user.id];
              return channelId(flag[22]).ring(channelId, items, "voice_panel_floating_cta");
            }
      };
      let intl = user(flag[19]).intl;
      obj2.text = intl.string(user(flag[19]).t.bHa9kN);
      let tmp14 = stateFromStores(user(flag[21]).Button, obj2);
    }
    obj.trailing = tmp14;
    if (null == nick) {
      nick = user(flag[23]).getName(user);
      const obj12 = user(flag[23]);
    }
    obj3 = { style: tmp.memberRow };
    const obj4 = { variant: "text-md/semibold" };
    let str2 = "text-default";
    if (notConnected) {
      str2 = "text-muted";
    }
    obj4.color = str2;
    let tmp29 = null != displayNameStylesFont;
    if (tmp29) {
      obj5 = { fontFamily: displayNameStylesFont };
      tmp29 = obj5;
    }
    obj4.style = tmp29;
    obj4.children = nick;
    const items3 = [stateFromStores(user(flag[18]).Text, obj4), , ];
    obj6 = { userId: user.id };
    items3[1] = stateFromStores(channelId(flag[24]), obj6);
    let tmp33 = null;
    if (showSecureFramesUI) {
      tmp33 = null;
      if (isUserSecureFramesVerified) {
        const obj7 = { size: "xs", style: tmp.icon };
        tmp33 = stateFromStores(user(flag[25]).ShieldLockIcon, obj7);
      }
    }
    items3[2] = tmp33;
    obj3.children = items3;
    obj.label = closure_6(channelId(flag[5]), obj3);
    return stateFromStores(user(flag[20]).TableRow, obj);
  }
  if (null != muteDeafenIconState) {
    const obj8 = { muteDeafenIconState, videoIconState };
    tmp14 = stateFromStores(VoiceBadges, obj8);
  }
};
