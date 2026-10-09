// Module ID: 14871
// Function ID: 14872
// Name: EditGuildIdentityAvatar
// Dependencies: [19, 2124, 1390, 1085, 1392, 21, 5091, 504, 6848, 6872, 8267, 14785, 8277, 4728, 8274, 9242, 5055, 14786, 2000, 14775, 14775, 8265, 6191, 1126, 8366, 14788, 2]
// Exports: default

// Module 14871 (EditGuildIdentityAvatar)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9242 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
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
  let tmp24;
  let tmp25;
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
    const obj7 = { user: stateFromStores, guildId: tmp24, pendingAvatarSrc: tmp25, pendingAvatarDecoration, statusStyle, disableStatus, style: avatarStyle };
    tmp24 = undefined;
    const tmp20 = closure_11;
    const tmp6Result = tmp6(tmp3[24]);
    if (null !== pendingAvatar) {
      tmp24 = guildId;
    }
    tmp25 = undefined;
    if (null !== pendingAvatar) {
      tmp25 = pendingAvatarSrc;
    }
    items3 = [closure_10(tmp6Result, obj7), ];
    let tmp21Result = !disabled;
    if (tmp21Result) {
      const obj8 = { style: tmp.editAvatarIcon };
      tmp21Result = tmp21(tmp6(tmp3[25]), obj8);
    }
    items3[1] = tmp21Result;
    tmp20Result = tmp20(PressableOpacity, obj6);
  }
  return tmp20Result;
};
