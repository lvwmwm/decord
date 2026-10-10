// Module ID: 14877
// Function ID: 14878
// Name: UserProfilePrimaryGuildEditButton
// Dependencies: [19, 2087, 7887, 21, 5092, 587, 504, 14878, 14879, 8289, 8288, 1126, 1382, 5088, 14851, 5056, 14881, 2000, 6158, 8858, 2]
// Exports: default

// Module 14877 (UserProfilePrimaryGuildEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import GuildTagConstants from "GuildTagConstants" /* 7887 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let obj2;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const jsx = Fragment.jsx;
let obj = { tag: obj2 };
obj2 = { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  let disabled;
  let items2;
  let obj8;
  let pendingPrimaryGuildId;
  let tagStyle;
  let user;
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let userAvailableGuildsWithTags;
  function handleSelectPrimaryGuild(primaryGuildId) {
    const obj = pendingPrimaryGuildId(handleSelectPrimaryGuild[10]);
    const obj2 = { primaryGuildId };
    obj.setPendingChanges(obj2);
  }
  ({ disabled, tagStyle } = arg0);
  const tmp = closure_6();
  if (undefined === pendingPrimaryGuildId) {
    const primaryGuild = user.primaryGuild;
    let identityEnabled;
    if (primaryGuild != null) {
      identityEnabled = primaryGuild.identityEnabled;
    }
    let tmp4 = null;
    if (identityEnabled) {
      const primaryGuild2 = user.primaryGuild;
      let identityGuildId;
      if (primaryGuild2 != null) {
        identityGuildId = primaryGuild2.identityGuildId;
      }
      tmp4 = identityGuildId;
    }
    pendingPrimaryGuildId = tmp4;
  }
  let obj = pendingPrimaryGuildId(handleSelectPrimaryGuild[6]);
  const items = [GuildStore];
  const items1 = [pendingPrimaryGuildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(pendingPrimaryGuildId), items1);
  let obj2 = pendingPrimaryGuildId(handleSelectPrimaryGuild[7]);
  userAvailableGuildsWithTags = obj2.useUserAvailableGuildsWithTags();
  const obj3 = pendingPrimaryGuildId(handleSelectPrimaryGuild[8]);
  userAvailableGuildsWithTags.length > 0 || obj3.useGuildTagCreationUpsell("UserProfilePrimaryGuildEditButton").isUpsellVisible;
  const tmp6Result = pendingPrimaryGuildId(handleSelectPrimaryGuild[9]);
  const userPrimaryGuild = tmp6Result.getUserPrimaryGuild(user.primaryGuild);
  if (null != user) {
    let name;
    let profile;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    let tag;
    if (profile != null) {
      tag = profile.tag;
    }
    if (tag == null) {
      let tag1;
      if (null == stateFromStores && null != pendingPrimaryGuildId && pendingPrimaryGuildId === userPrimaryGuild.guildId) {
        tag1 = userPrimaryGuild.tag;
      }
      tag = tag1;
    }
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    if (badge == null) {
      let badge1;
      if (null == stateFromStores && null != pendingPrimaryGuildId && pendingPrimaryGuildId === userPrimaryGuild.guildId) {
        badge1 = userPrimaryGuild.badge;
      }
      badge = badge1;
    }
    let guildTagBadgeUrl = null != pendingPrimaryGuildId;
    if (guildTagBadgeUrl) {
      const tmp6Result3 = pendingPrimaryGuildId(handleSelectPrimaryGuild[9]);
      guildTagBadgeUrl = tmp6Result3.getGuildTagBadgeUrl(pendingPrimaryGuildId, badge, GuildTagBadgeSize.SIZE_24);
    }
    if (null != stateFromStores) {
      name = stateFromStores.name;
    } else {
      const intl = tmp6(tmp7[11]).intl;
      const string = intl.string;
      const t = tmp6(tmp7[11]).t;
      if (null == stateFromStores && null != pendingPrimaryGuildId && pendingPrimaryGuildId === userPrimaryGuild.guildId) {
        name = string(t.dtwqPR);
      } else {
        name = string(t.ECv270);
      }
    }
    let combined = name;
    if (null != tag) {
      const _HermesInternal = HermesInternal;
      combined = "" + name + ", " + tag;
    }
    let num = 4;
    const tmp6Result4 = pendingPrimaryGuildId(handleSelectPrimaryGuild[12]);
    if (tmp6Result4.isAndroid()) {
      num = 1;
    }
    const sum = tmp6(tmp7[13]).TextStyleSheet["text-md/semibold"].fontSize + num;
    const UserProfileEditFormButton = tmp6(tmp7[14]).UserProfileEditFormButton;
    const intl2 = tmp6(tmp7[11]).intl;
    let tmp23Result = null;
    const obj5 = { text: combined };
    if (null != stateFromStores) {
      const obj6 = { guild: stateFromStores, size: pendingPrimaryGuildId(handleSelectPrimaryGuild[18]).GuildIconSizes.LARGE };
      const tmp26 = userAvailableGuildsWithTags(handleSelectPrimaryGuild[18]);
      tmp23Result = tmp23(tmp26, obj6);
    }
    let tmp23Result2 = null;
    if (null != tag) {
      const obj7 = { containerStyles: items2, textStyle: obj8, guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16, textVariant: "text-md/semibold", textColor: "text-default" };
      items2 = [tmp.tag, tagStyle];
      obj8 = { lineHeight: sum };
      tmp23Result2 = tmp23(tmp6(tmp7[19]).BaseGuildTagChiplet, obj7);
    }
    return <UserProfileEditFormButton label={intl2.string(pendingPrimaryGuildId(handleSelectPrimaryGuild[11]).t["DUD+5n"])} buttonText={name} accessibilityValue={obj5} onPress={function handleOpenSelectPrimaryGuild() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { availableGuilds: userAvailableGuildsWithTags, selectedGuildId: pendingPrimaryGuildId, onSelectGuild: handleSelectPrimaryGuild };
      obj.openLazy(asyncRequire(14881, dependencyMap.paths), "UserPrimaryGuildListBottomSheet", obj2);
    }} leading={tmp23Result} trailing={tmp23Result2} disabled={disabled} />;
  }
  return null;
};
