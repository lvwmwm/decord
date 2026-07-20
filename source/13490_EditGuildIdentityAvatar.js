// Module ID: 13490
// Function ID: 102399
// Name: EditGuildIdentityAvatar
// Dependencies: []
// Exports: default

// Module 13490 (EditGuildIdentityAvatar)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticsSections: closure_6, AnalyticsObjects: closure_7, UpsellTypes: closure_8 } = arg1(dependencyMap[3]));
const PremiumUpsellTypes = arg1(dependencyMap[4]).PremiumUpsellTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[6]).createStyles({ editAvatarIcon: { <string:2423925279>: null, <string:2596769915>: null } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

export default function EditGuildIdentityAvatar(userId) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let style;
  const guildId = userId.guildId;
  const arg1 = guildId;
  ({ disabled, disableStatus } = userId);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let importDefault;
  let dependencyMap;
  let closure_3;
  let closure_4;
  let closure_5;
  let result;
  let tmp9;
  let showRemoveAvatarResult;
  let PremiumUpsellTypes;
  ({ style, statusStyle, avatarStyle } = userId);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.getCurrentUser());
  importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != stateFromStores) {
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      member = setPendingAvatar.getMember(guildId, id);
      const tmp3 = guildId;
    }
    return member;
  });
  dependencyMap = stateFromStores1;
  const tmp = callback2();
  const analyticsLocations = importDefault(dependencyMap[8])(importDefault(dependencyMap[9]).EDIT_AVATAR).analyticsLocations;
  closure_3 = analyticsLocations;
  const tmp4 = importDefault(dependencyMap[8]);
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = importDefault(dependencyMap[10])({ guildId, analyticsLocations }));
  closure_4 = setPendingAvatar;
  const tmp6 = importDefault(dependencyMap[11])({ guildId, analyticsLocations });
  closure_5 = tmp6;
  const tmp5 = importDefault(dependencyMap[10])({ guildId, analyticsLocations });
  const pendingAvatarSrc = arg1(dependencyMap[12]).getPendingAvatarSrc({ userId: userId.userId, image: pendingAvatar });
  const obj3 = arg1(dependencyMap[12]);
  result = importDefault(dependencyMap[13]).canUsePremiumGuildMemberProfile(stateFromStores);
  const obj4 = importDefault(dependencyMap[13]);
  tmp9 = !importDefault(dependencyMap[13]).canUseAnimatedAvatar(stateFromStores);
  const obj5 = importDefault(dependencyMap[13]);
  let avatar;
  if (null != stateFromStores1) {
    avatar = stateFromStores1.avatar;
  }
  showRemoveAvatarResult = arg1(dependencyMap[14]).showRemoveAvatar(pendingAvatar, avatar);
  let tmp12 = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    let avatarDecoration;
    if (null != stateFromStores1) {
      avatarDecoration = stateFromStores1.avatarDecoration;
    }
    tmp12 = avatarDecoration;
  }
  PremiumUpsellTypes = tmp12;
  const items2 = [guildId, stateFromStores1, stateFromStores, result, tmp9, showRemoveAvatarResult, tmp12, analyticsLocations, tmp6, setPendingAvatar];
  let tmp16Result = null;
  if (null != stateFromStores) {
    obj = { style, disabled, onPress: tmp14, accessibilityRole: "button" };
    const intl = arg1(dependencyMap[23]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[23]).t.70lEQe);
    obj = { user: stateFromStores };
    let tmp23;
    if (null !== pendingAvatar) {
      tmp23 = guildId;
    }
    obj.guildId = tmp23;
    let tmp24;
    if (null !== pendingAvatar) {
      tmp24 = pendingAvatarSrc;
    }
    obj.pendingAvatarSrc = tmp24;
    obj.pendingAvatarDecoration = pendingAvatarDecoration;
    obj.statusStyle = statusStyle;
    obj.disableStatus = disableStatus;
    obj.style = avatarStyle;
    const items3 = [callback(importDefault(dependencyMap[24]), obj), ];
    let tmp25 = !disabled;
    if (tmp25) {
      obj1 = { style: tmp.editAvatarIcon };
      tmp25 = callback(importDefault(dependencyMap[25]), obj1);
    }
    items3[1] = tmp25;
    obj.children = items3;
    tmp16Result = closure_11(arg1(dependencyMap[22]).PressableOpacity, obj);
    const tmp16 = closure_11;
    const tmp19 = callback;
    const tmp21 = importDefault(dependencyMap[24]);
  }
  return tmp16Result;
};
