// Module ID: 8829
// Function ID: 8830
// Name: HeaderAvatar
// Dependencies: [19, 17, 5015, 4926, 5761, 21, 5014, 575, 1187, 504, 5762, 8830, 8737, 8831, 8820, 6980, 2]
// Exports: default

// Module 8829 (HeaderAvatar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { avatarStatusStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default function HeaderAvatar(animate) {
  let activities;
  let avatarDecoration;
  let avatarDecoration1;
  let disableStatus;
  let guildId;
  let isMobileOnline;
  let isVROnline;
  let items4;
  let obj11;
  let obj8;
  let onPress;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let status;
  let statusStyle;
  let style;
  let tmp11Result;
  let tmp16;
  let tmp44Result;
  let tmp5Result;
  let tmp5Result2;
  let useReducedMotion;
  let user;
  ({ user, guildId } = animate);
  ({ pendingAvatarSrc, style, onPress, size } = animate);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = animate);
  if (size === undefined) {
    const tmp = guildId;
    size = guildId(1187).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0, ref: 0 }));
  const id = user.id;
  const tmp4 = closure_8();
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [PresenceStore];
  const items2 = [id];
  const obj2 = guildId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(id), isVROnline: PresenceStore.isVROnline(id), status: PresenceStore.getStatus(id), activities: PresenceStore.getActivities(id), customStatusActivity: PresenceStore.findActivity(id, (type) => type.type === guildId(closure_1_2[10]).ActivityTypes.CUSTOM_STATUS) };
    return obj;
  }, items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  const items3 = [GuildMemberStore];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  });
  const obj4 = { pendingValue: pendingAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
  avatarDecoration = undefined;
  const tmp11 = id(8830);
  const getProfilePreviewValue = guildId(8737).getProfilePreviewValue;
  guildId(8737);
  const tmp10 = id;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const obj5 = { isMobileOnline, isVROnline, size, status: tmp16, statusStyle: items4, streaming: tmp10(8831)(activities), animate: flag, avatarDecoration: tmp11Result };
  tmp16 = null;
  tmp11Result = tmp11(getProfilePreviewValue(obj4));
  if (!disableStatus) {
    tmp16 = status;
  }
  items4 = [tmp4.avatarStatusStyle, statusStyle];
  if (flag) {
    flag = !stateFromStores;
  }
  if (null != onPress) {
    const obj6 = { ref: animate.ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton", children: <Avatar {...obj8} /> };
    const PressableOpacity = tmp5(6980).PressableOpacity;
    const merged1 = Object.assign(merged);
    const Avatar = tmp5(1187).Avatar;
    if (undefined !== pendingAvatarSrc) {
      const obj7 = { source: tmp5Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result = guildId(8820);
      const merged2 = Object.assign(obj5);
      obj8 = obj7;
    } else {
      obj8 = { user, guildId };
      const merged3 = Object.assign(obj5);
    }
    tmp44Result = tmp29(PressableOpacity, obj6);
  } else {
    const obj9 = { ref: animate.ref, style, accessibilityRole: "image", accessible: true, children: <Avatar2 {...obj11} /> };
    const merged4 = Object.assign(merged);
    const Avatar2 = tmp5(1187).Avatar;
    const tmp45 = View;
    if (undefined !== pendingAvatarSrc) {
      const obj10 = { source: tmp5Result2.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result2 = guildId(8820);
      const merged5 = Object.assign(obj5);
      obj11 = obj10;
    } else {
      obj11 = { user, guildId };
      const merged6 = Object.assign(obj5);
    }
    tmp44Result = tmp44(tmp45, obj9);
  }
  return tmp44Result;
};
