// Module ID: 8853
// Function ID: 69863
// Name: VoiceBadges
// Dependencies: []
// Exports: MemberRowItem, VoicePanelFormSection

// Module 8853 (VoiceBadges)
function VoiceBadges(arg0) {
  let muteDeafenIconState;
  let videoIconState;
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.voiceBadgesContainer };
  let tmp4 = null;
  if (null != muteDeafenIconState) {
    obj = { style: tmp.iconWrapper };
    obj = { state: muteDeafenIconState, size: arg1(dependencyMap[8]).IconSizes.SMALL, style: tmp.icon };
    obj.children = callback(arg1(dependencyMap[7]).MuteDeafenIcon, obj);
    tmp4 = callback(importDefault(dependencyMap[5]), obj);
    const tmp8 = importDefault(dependencyMap[5]);
  }
  const items = [tmp4, ];
  let tmp11 = null;
  if (null != videoIconState) {
    const obj1 = { style: tmp.iconWrapper };
    const obj2 = { state: videoIconState, size: arg1(dependencyMap[8]).IconSizes.SMALL, style: tmp.icon };
    obj1.children = callback(arg1(dependencyMap[7]).VideoIcon, obj2);
    tmp11 = callback(importDefault(dependencyMap[5]), obj1);
    const tmp15 = importDefault(dependencyMap[5]);
  }
  items[1] = tmp11;
  obj.children = items;
  return closure_6(importDefault(dependencyMap[5]), obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.iconWrapper = obj;
const obj1 = { aze: "<string:16777479>", azj: "<string:36295491>", tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.icon = obj1;
obj.notConnectedAvatar = { opacity: 0.5 };
obj.memberRow = {};
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  obj = { style: items };
  const items = [callback2().container, style.style];
  const tmp3 = callback2();
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = callback(arg1(dependencyMap[6]).TableRowGroup, obj);
  return callback(importDefault(dependencyMap[5]), obj);
};
export const MemberRowItem = function MemberRowItem(user) {
  let guildId;
  let nick;
  let notConnected;
  let showRing;
  let showSecureFramesUI;
  user = user.user;
  const arg1 = user;
  const channelId = user.channelId;
  const importDefault = channelId;
  let flag = user.selfStream;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  ({ nick, guildId, notConnected } = user);
  if (notConnected === undefined) {
    notConnected = false;
  }
  ({ showSecureFramesUI, showRing } = user);
  if (showSecureFramesUI === undefined) {
    showSecureFramesUI = false;
  }
  let React;
  let closure_4;
  let stateFromStores;
  const tmp = callback2();
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  React = analyticsLocations;
  let obj = arg1(dependencyMap[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj1 = arg1(dependencyMap[10]);
  const videoIconState = obj1.useVideoIconState(user.id, guildId);
  const id = user.id;
  closure_4 = id;
  let obj2 = arg1(dependencyMap[11]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId: id, channelId });
  let obj3 = arg1(dependencyMap[12]);
  const canRing = obj3.useCanRing(user, "MemberRowItem");
  obj = { userId: user.id, guildId };
  let obj5 = arg1(dependencyMap[14]);
  const displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[13])(obj) });
  const items = [id, channelId, analyticsLocations];
  const callback = React.useCallback(() => {
    channelId(flag[15])({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  let obj6 = arg1(dependencyMap[16]);
  const items1 = [closure_4];
  stateFromStores = obj6.useStateFromStores(items1, () => user(flag[17]).getStreamerActivityByUserId(id, id));
  const items2 = [stateFromStores, flag];
  const memo = React.useMemo(() => {
    if (!flag) {
      return null;
    } else {
      if (null == stateFromStores) {
        const intl = user(flag[19]).intl;
        intl.string(user(flag[19]).t.eXan7B);
      }
      let formatResult = { 9223372036854775807: 3309567, 9223372036854775807: 601874432, 9223372036854775807: 4319821 };
      const intl2 = user(flag[19]).intl;
      formatResult = {};
      if (null == stateFromStores.details) {
        formatResult.name = stateFromStores.name;
        formatResult = intl2.format(tmp7, formatResult);
        formatResult.children = formatResult;
        tmp4(user(flag[18]).Text, formatResult);
      }
      const details = stateFromStores.details;
      const tmp4 = stateFromStores;
    }
  }, items2);
  obj = { onPress: callback };
  obj1 = { user, guildId, size: arg1(dependencyMap[8]).AvatarSizes.REFRESH_MEDIUM_32 };
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj1.style = notConnectedAvatar;
  obj.icon = stateFromStores(arg1(dependencyMap[8]).Avatar, obj1);
  obj.subLabel = memo;
  if (showRing) {
    if (canRing) {
      obj2 = {
        onPress() {
              const items = [user.id];
              return channelId(flag[22]).ring(channelId, items, "voice_panel_floating_cta");
            }
      };
      const intl = arg1(dependencyMap[19]).intl;
      obj2.text = intl.string(arg1(dependencyMap[19]).t.bHa9kN);
      let tmp14 = stateFromStores(arg1(dependencyMap[21]).Button, obj2);
    }
    obj.trailing = tmp14;
    if (null == nick) {
      nick = arg1(dependencyMap[23]).getName(user);
      const obj12 = arg1(dependencyMap[23]);
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
    const items3 = [stateFromStores(arg1(dependencyMap[18]).Text, obj4), , ];
    obj6 = { userId: user.id };
    items3[1] = stateFromStores(importDefault(dependencyMap[24]), obj6);
    let tmp33 = null;
    if (showSecureFramesUI) {
      tmp33 = null;
      if (isUserSecureFramesVerified) {
        const obj7 = { size: "xs", style: tmp.icon };
        tmp33 = stateFromStores(arg1(dependencyMap[25]).ShieldLockIcon, obj7);
      }
    }
    items3[2] = tmp33;
    obj3.children = items3;
    obj.label = closure_6(importDefault(dependencyMap[5]), obj3);
    return stateFromStores(arg1(dependencyMap[20]).TableRow, obj);
  }
  if (null != muteDeafenIconState) {
    const obj8 = { muteDeafenIconState, videoIconState };
    tmp14 = stateFromStores(VoiceBadges, obj8);
  }
};
