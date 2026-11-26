// Module ID: 16180
// Function ID: 16181
// Name: EditGuildIdentityAvatar
// Dependencies: [19, 4955, 1387, 1071, 1389, 21, 5043, 504, 6379, 6380, 11944, 16051, 9502, 2174, 6375, 9586, 5257, 16052, 2120, 16046, 16046, 14455, 6152, 1112, 9521, 16054, 2]
// Exports: default

// Module 16180 (EditGuildIdentityAvatar)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9586 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ AnalyticsSections: metroRequire, AnalyticsObjects: metroImportDefault, UpsellTypes: metroImportAll } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ editAvatarIcon: { position: "absolute", right: 0 } });
let result = size.fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

export default function EditGuildIdentityAvatar(guildId) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let intl;
  let items3;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let style;
  guildId = guildId.guildId;
  ({ disabled, disableStatus } = guildId);
  const userId = guildId.userId;
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let stateFromStores1;
  setPendingAvatar = undefined;
  let handleUploadAvatarSelect;
  let c8;
  let avatarDecoration;
  ({ style, statusStyle, avatarStyle } = guildId);
  let tmp2 = guildId;
  let tmp3 = stateFromStores1;
  let tmp = closure_12();
  let obj = guildId(stateFromStores1[7]);
  const items = [handleUploadAvatarSelect];
  const stateFromStores = obj.useStateFromStores(items, () => handleUploadAvatarSelect.getCurrentUser());
  let obj2 = guildId(stateFromStores1[7]);
  const items1 = [setPendingAvatar];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != stateFromStores) {
      let id;
      const getMember = GuildMemberStore.getMember;
      const tmp4 = guildId;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      member = getMember(tmp4, id);
    }
    return member;
  });
  const tmp6 = stateFromStores;
  const tmp7 = stateFromStores(stateFromStores1[8]);
  const analyticsLocations = tmp7(stateFromStores(stateFromStores1[9]).EDIT_AVATAR).analyticsLocations;
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations }));
  const tmp8 = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations });
  const tmp9 = stateFromStores(stateFromStores1[11])({ guildId, analyticsLocations });
  handleUploadAvatarSelect = tmp9;
  let obj3 = guildId(stateFromStores1[12]);
  const pendingAvatarSrc = obj3.getPendingAvatarSrc({ userId, image: pendingAvatar });
  let obj4 = stateFromStores(stateFromStores1[13]);
  let result = obj4.canUsePremiumGuildMemberProfile(stateFromStores);
  let c6 = result;
  const obj5 = stateFromStores(stateFromStores1[13]);
  const tmp12 = !obj5.canUseAnimatedAvatar(stateFromStores);
  const showAnimatedAvatarUpsell = tmp12;
  let avatar;
  const showRemoveAvatar = guildId(stateFromStores1[14]).showRemoveAvatar;
  const tmp13 = guildId(stateFromStores1[14]);
  if (stateFromStores1 != null) {
    avatar = stateFromStores1.avatar;
  }
  const showRemoveAvatarResult = showRemoveAvatar(pendingAvatar, avatar);
  c8 = showRemoveAvatarResult;
  let tmp16 = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = undefined;
    if (stateFromStores1 != null) {
      avatarDecoration = stateFromStores1.avatarDecoration;
    }
    tmp16 = avatarDecoration;
  }
  avatarDecoration = tmp16;
  const items2 = [guildId, stateFromStores1, stateFromStores, result, tmp12, showRemoveAvatarResult, tmp16, analyticsLocations, tmp9, setPendingAvatar];
  let tmp20Result = null;
  if (null != stateFromStores) {
    const obj6 = { style, disabled, onPress: tmp18, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[23]).t["70lEQe"]), children: items3 };
    const PressableOpacity = tmp2(tmp3[22]).PressableOpacity;
    intl = tmp2(tmp3[23]).intl;
    const obj7 = { user: stateFromStores, guildId, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, style: avatarStyle };
    items3 = [closure_10(tmp6(tmp3[24]), obj7), ];
    let tmp21Result = !disabled;
    const tmp20 = closure_11;
    const tmp21 = closure_10;
    if (tmp21Result) {
      const obj8 = { style: tmp.editAvatarIcon };
      tmp21Result = tmp21(tmp6(tmp3[25]), obj8);
    }
    items3[1] = tmp21Result;
    tmp20Result = tmp20(PressableOpacity, obj6);
  }
  return tmp20Result;
};
