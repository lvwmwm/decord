// Module ID: 7703
// Function ID: 7704
// Name: HeaderAvatar
// Dependencies: [19, 17, 4825, 2108, 4876, 1074, 21, 4836, 576, 1177, 504, 7704, 7611, 7705, 7693, 5435, 2]

// Module 7703 (HeaderAvatar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let obj = { avatarStatusStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((animate, ref) => {
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
    size = guildId(1177).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0 }));
  const id = user.id;
  const tmp4 = closure_9();
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [PresenceStore];
  const items2 = [id];
  const obj2 = guildId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(id), isVROnline: PresenceStore.isVROnline(id), status: PresenceStore.getStatus(id), activities: PresenceStore.getActivities(id), customStatusActivity: PresenceStore.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
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
  const tmp11 = id(7704);
  const getProfilePreviewValue = guildId(7611).getProfilePreviewValue;
  guildId(7611);
  const tmp10 = id;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const obj5 = { isMobileOnline, isVROnline, size, status: tmp16, statusStyle: items4, streaming: tmp10(7705)(activities), animate: flag, avatarDecoration: tmp11Result };
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
    const obj6 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton", children: <Avatar {...obj8} /> };
    const PressableOpacity = tmp5(5435).PressableOpacity;
    const merged1 = Object.assign(merged);
    const Avatar = tmp5(1177).Avatar;
    if (undefined !== pendingAvatarSrc) {
      const obj7 = { source: tmp5Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result = guildId(7693);
      const merged2 = Object.assign(obj5);
      obj8 = obj7;
    } else {
      obj8 = { user, guildId };
      const merged3 = Object.assign(obj5);
    }
    tmp44Result = tmp29(PressableOpacity, obj6);
  } else {
    const obj9 = { ref, style, accessibilityRole: "image", accessible: true, children: <Avatar2 {...obj11} /> };
    const merged4 = Object.assign(merged);
    const Avatar2 = tmp5(1177).Avatar;
    const tmp45 = View;
    if (undefined !== pendingAvatarSrc) {
      const obj10 = { source: tmp5Result2.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result2 = guildId(7693);
      const merged5 = Object.assign(obj5);
      obj11 = obj10;
    } else {
      obj11 = { user, guildId };
      const merged6 = Object.assign(obj5);
    }
    tmp44Result = tmp44(tmp45, obj9);
  }
  return tmp44Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default forwardRefResult;
