// Module ID: 13620
// Function ID: 104633
// Name: EditGuildIdentityAvatar
// Dependencies: [31, 1917, 1849, 653, 1851, 33, 4130, 566, 5464, 5484, 7840, 13580, 7854, 3776, 7846, 7941, 4098, 13581, 1934, 13582, 13582, 7838, 4660, 1212, 7880, 13583, 2]
// Exports: default

// Module 13620 (EditGuildIdentityAvatar)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AnalyticsSections: closure_6, AnalyticsObjects: closure_7, UpsellTypes: closure_8 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ editAvatarIcon: { position: "absolute", right: 0 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

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
  ({ disabled, disableStatus } = userId);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let stateFromStores;
  let stateFromStores1;
  let analyticsLocations;
  setPendingAvatar = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  ({ style, statusStyle, avatarStyle } = userId);
  let obj = guildId(stateFromStores1[7]);
  const items = [c5];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getCurrentUser());
  let obj1 = guildId(stateFromStores1[7]);
  const items1 = [setPendingAvatar];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
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
  let tmp = callback2();
  analyticsLocations = stateFromStores(stateFromStores1[8])(stateFromStores(stateFromStores1[9]).EDIT_AVATAR).analyticsLocations;
  const tmp4 = stateFromStores(stateFromStores1[8]);
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations }));
  const tmp6 = stateFromStores(stateFromStores1[11])({ guildId, analyticsLocations });
  c5 = tmp6;
  const tmp5 = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations });
  const pendingAvatarSrc = guildId(stateFromStores1[12]).getPendingAvatarSrc({ userId: userId.userId, image: pendingAvatar });
  const obj3 = guildId(stateFromStores1[12]);
  let result = stateFromStores(stateFromStores1[13]).canUsePremiumGuildMemberProfile(stateFromStores);
  c6 = result;
  const obj4 = stateFromStores(stateFromStores1[13]);
  const tmp9 = !stateFromStores(stateFromStores1[13]).canUseAnimatedAvatar(stateFromStores);
  c7 = tmp9;
  const obj5 = stateFromStores(stateFromStores1[13]);
  let avatar;
  if (null != stateFromStores1) {
    avatar = stateFromStores1.avatar;
  }
  const showRemoveAvatarResult = guildId(stateFromStores1[14]).showRemoveAvatar(pendingAvatar, avatar);
  c8 = showRemoveAvatarResult;
  let tmp12 = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    let avatarDecoration;
    if (null != stateFromStores1) {
      avatarDecoration = stateFromStores1.avatarDecoration;
    }
    tmp12 = avatarDecoration;
  }
  c9 = tmp12;
  const items2 = [guildId, stateFromStores1, stateFromStores, result, tmp9, showRemoveAvatarResult, tmp12, analyticsLocations, tmp6, setPendingAvatar];
  let tmp16Result = null;
  if (null != stateFromStores) {
    obj = { style, disabled, onPress: tmp14, accessibilityRole: "button" };
    const intl = guildId(stateFromStores1[23]).intl;
    obj.accessibilityLabel = intl.string(guildId(stateFromStores1[23]).t["70lEQe"]);
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
    const items3 = [callback(stateFromStores(stateFromStores1[24]), obj), ];
    let tmp25 = !disabled;
    if (tmp25) {
      obj1 = { style: tmp.editAvatarIcon };
      tmp25 = callback(stateFromStores(stateFromStores1[25]), obj1);
    }
    items3[1] = tmp25;
    obj.children = items3;
    tmp16Result = closure_11(guildId(stateFromStores1[22]).PressableOpacity, obj);
    const tmp16 = closure_11;
    const tmp19 = callback;
    const tmp21 = stateFromStores(stateFromStores1[24]);
  }
  return tmp16Result;
};
