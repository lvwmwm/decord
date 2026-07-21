// Module ID: 7874
// Function ID: 62692
// Dependencies: []

// Module 7874
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const ActivityTypes = arg1(dependencyMap[5]).ActivityTypes;
const jsx = arg1(dependencyMap[6]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.avatarStatusStyle = obj;
let closure_9 = arg1(dependencyMap[7]).createStyles(obj);
const obj2 = arg1(dependencyMap[7]);
const forwardRefResult = importAllResult.forwardRef((user, ref) => {
  let activities;
  let disableStatus;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let pendingAvatarDecoration;
  let size;
  let status;
  let statusStyle;
  let style;
  user = user.user;
  ref = user;
  const guildId = user.guildId;
  const importDefault = guildId;
  ({ pendingAvatarSrc: closure_2, style, onPress, size } = user);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = user);
  if (size === undefined) {
    size = ref(dependencyMap[9]).AvatarSizes.XXLARGE;
  }
  let flag = user.animate;
  if (flag === undefined) {
    flag = true;
  }
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(user, obj);
  let View;
  let closure_4;
  let closure_5;
  function renderAvatar() {
    if (undefined !== closure_2) {
      let obj = {};
      const obj3 = user(closure_2[14]);
      obj.source = obj3.getAvatarSource(user, guildId, closure_2, stateFromStores);
      const merged = Object.assign(obj);
    } else {
      obj = { user, guildId };
      const merged1 = Object.assign(obj);
    }
    return closure_8(user(closure_2[9]).Avatar, obj);
  }
  const id = user.id;
  View = id;
  let obj1 = ref(dependencyMap[10]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  closure_4 = stateFromStores;
  let obj2 = ref(dependencyMap[10]);
  const items1 = [closure_6];
  const items2 = [id];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ isMobileOnline: store.isMobileOnline(id), isVROnline: store.isVROnline(id), status: store.getStatus(id), activities: store.getActivities(id), customStatusActivity: store.findActivity(id, (type) => type.type === constants.CUSTOM_STATUS) }), items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  const tmp5 = callback();
  const items3 = [closure_5];
  const stateFromStores1 = ref(dependencyMap[10]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = obj.getMember(guildId, id);
    }
    return member;
  });
  const obj4 = ref(dependencyMap[10]);
  const tmp9 = importDefault(dependencyMap[11]);
  obj = { pendingValue: pendingAvatarDecoration };
  let avatarDecoration;
  if (null != user) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (null != stateFromStores1) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  obj = { isMobileOnline, isVROnline, size };
  let tmp13 = null;
  const obj5 = ref(dependencyMap[12]);
  if (!disableStatus) {
    tmp13 = status;
  }
  obj.status = tmp13;
  const items4 = [tmp5.avatarStatusStyle, statusStyle];
  obj.statusStyle = items4;
  obj.streaming = importDefault(dependencyMap[13])(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj.animate = flag;
  obj.avatarDecoration = tmp9(ref(dependencyMap[12]).getProfilePreviewValue(obj));
  closure_5 = obj;
  if (null != onPress) {
    obj1 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    const merged1 = Object.assign(merged);
    obj1["children"] = renderAvatar();
    let tmp19 = jsx(ref(dependencyMap[15]).PressableOpacity, obj1);
  } else {
    obj2 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged2 = Object.assign(merged);
    obj2["children"] = renderAvatar();
    tmp19 = <View {...obj2} />;
  }
  return tmp19;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default forwardRefResult;
