// Module ID: 8366
// Function ID: 8367
// Name: HeaderAvatar
// Dependencies: [109, 19, 17, 5080, 2124, 5107, 1085, 21, 5091, 587, 558, 576, 1200, 504, 8274, 8367, 8368, 8357, 6191, 2]

// Module 8366 (HeaderAvatar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let tmp2;
const profile_customization_ProfileCustomizationUtils = tmp2(8357);
let closure_3 = ["user", "guildId", "disableStatus", "pendingAvatarSrc", "pendingAvatarDecoration", "style", "statusStyle", "onPress", "size", "animate", "ref"];
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let obj = { avatarStatusStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderAvatar(user) {
  let XXLARGE;
  let activities;
  let animate;
  let disableStatus;
  let fn;
  let id;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let ref;
  let stateFromStores;
  let statusStyle;
  let style;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp8;
  let useReducedMotion;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(54);
  if (cResult[0] !== user) {
    user = user.user;
    dependencyMap = user;
    const guildId = user.guildId;
    _require = guildId;
    ({ disableStatus, pendingAvatarSrc } = user);
    let closure_1 = pendingAvatarSrc;
    ({ pendingAvatarDecoration, style, statusStyle, onPress, size, animate, ref } = user);
    const tmp17 = stateFromStores(user, id);
    cResult[0] = user;
    cResult[1] = tmp17;
    cResult[2] = disableStatus;
    cResult[3] = guildId;
    cResult[4] = onPress;
    cResult[5] = pendingAvatarDecoration;
    cResult[6] = pendingAvatarSrc;
    cResult[7] = ref;
    cResult[8] = statusStyle;
    cResult[9] = style;
    cResult[10] = size;
    cResult[11] = animate;
    cResult[12] = user;
    XXLARGE = size;
    tmp8 = pendingAvatarDecoration;
  } else {
    _require = cResult[3];
    tmp8 = cResult[5];
    closure_1 = cResult[6];
    XXLARGE = cResult[10];
    dependencyMap = cResult[12];
  }
  if (undefined === XXLARGE) {
    XXLARGE = tmp(1200).AvatarSizes.XXLARGE;
  }
  closure_11();
  id = tmp14.id;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[13] = items;
    cResult[14] = F;
    tmp20 = F;
    tmp19 = items;
  } else {
    tmp19 = cResult[13];
    tmp20 = cResult[14];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp19, tmp20);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[15] = items1;
    tmp23 = items1;
  } else {
    tmp23 = cResult[15];
  }
  if (cResult[16] !== id) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const items2 = [id];
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[16] = id;
    cResult[17] = E;
    cResult[18] = items2;
    tmp26 = items2;
    tmp25 = E;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    tmp26 = cResult[18];
  }
  const tmpResult4 = tmp(504);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp23, tmp25, tmp26);
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const items3 = [GuildMemberStore];
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[19] = items3;
    tmp28 = items3;
  } else {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
  }
  if (cResult[20] === tmp6) {
    class E {
      constructor() {
        obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
        return obj;
      }
    }
    const tmpResult5 = tmp(504);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp28, fn);
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    if (tmp14 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    if (stateFromStores1 != null) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    if (cResult[23] === tmp6) {
      class E {
        constructor() {
          obj = { isMobileOnline: closure_8.isMobileOnline(id), isVROnline: closure_8.isVROnline(id), status: closure_8.getStatus(id), activities: closure_8.getActivities(id), customStatusActivity: closure_8.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) };
          return obj;
        }
      }
    }
    let obj2 = { pendingValue: tmp8, userValue: undefined, guildValue: undefined, guildId: tmp6 };
    const tmpResult6 = tmp(8274);
    const profilePreviewValue = tmpResult6.getProfilePreviewValue(obj2);
    cResult[23] = tmp6;
    cResult[24] = tmp8;
    cResult[25] = undefined;
    cResult[26] = undefined;
    cResult[27] = profilePreviewValue;
  }
  fn = function w() {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, id);
    }
    return member;
  };
  cResult[20] = tmp6;
  cResult[21] = id;
  cResult[22] = fn;
}) : (function HeaderAvatar(animate) {
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
    size = guildId(1200).AvatarSizes.XXLARGE;
  }
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(animate, Object.assign({ user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0, ref: 0 }));
  const id = user.id;
  const tmp4 = closure_11();
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
  const tmp11 = id(8367);
  const getProfilePreviewValue = guildId(8274).getProfilePreviewValue;
  guildId(8274);
  const tmp10 = id;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const obj5 = { isMobileOnline, isVROnline, size, status: tmp16, statusStyle: items4, streaming: tmp10(8368)(activities), animate: flag, avatarDecoration: tmp11Result };
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
    const PressableOpacity = tmp5(6191).PressableOpacity;
    const merged1 = Object.assign(merged);
    const Avatar = tmp5(1200).Avatar;
    if (undefined !== pendingAvatarSrc) {
      const obj7 = { source: tmp5Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result = guildId(8357);
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
    const Avatar2 = tmp5(1200).Avatar;
    const tmp45 = View;
    if (undefined !== pendingAvatarSrc) {
      const obj10 = { source: tmp5Result2.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      tmp5Result2 = guildId(8357);
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

export default tmp3;
