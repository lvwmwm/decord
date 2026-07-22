// Module ID: 13492
// Function ID: 102386
// Name: UserProfilePrimaryGuildEditButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 27, 7835, 1849, 33, 4126, 689, 5461, 5481, 566, 13499]
// Exports: default

// Module 13492 (UserProfilePrimaryGuildEditButton)
import "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import { GuildTagBadgeSize } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import useGuildProfileEditForm from "useGuildProfileEditForm";

__exportStarResult1 = {};
__exportStarResult1 = { borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.tag = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = useGuildProfileEditForm.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  let disabled;
  let pendingPrimaryGuildId;
  let tagStyle;
  let user;
  ({ user, pendingPrimaryGuildId } = arg0);
  let arg1;
  let importDefault;
  let dependencyMap;
  function handleSelectPrimaryGuild(primaryGuildId) {
    let obj = pendingPrimaryGuildId(userAvailableGuildsWithTags[8]);
    obj = { primaryGuildId };
    obj.setPendingChanges(obj);
  }
  ({ disabled, tagStyle } = arg0);
  if (undefined === pendingPrimaryGuildId) {
    const primaryGuild = user.primaryGuild;
    let tmp3 = null;
    if (null != primaryGuild) {
      tmp3 = null;
      if (primaryGuild.identityEnabled) {
        const primaryGuild2 = user.primaryGuild;
        let identityGuildId;
        if (null != primaryGuild2) {
          identityGuildId = primaryGuild2.identityGuildId;
        }
        tmp3 = identityGuildId;
      }
    }
    pendingPrimaryGuildId = tmp3;
  }
  arg1 = pendingPrimaryGuildId;
  let obj = arg1(dependencyMap[6]);
  const items = [handleSelectPrimaryGuild];
  const items1 = [pendingPrimaryGuildId];
  const stateFromStores = obj.useStateFromStores(items, () => handleSelectPrimaryGuild.getGuild(pendingPrimaryGuildId), items1);
  importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  const userAvailableGuildsWithTags = obj1.useUserAvailableGuildsWithTags();
  dependencyMap = userAvailableGuildsWithTags;
  if (null != user) {
    if (userAvailableGuildsWithTags.length > 0) {
      let profile;
      if (null != stateFromStores) {
        profile = stateFromStores.profile;
      }
      let guildTagBadgeUrl = null != stateFromStores;
      if (guildTagBadgeUrl) {
        let obj2 = arg1(dependencyMap[9]);
        let badge;
        if (null != profile) {
          badge = profile.badge;
        }
        let tmp11;
        if (null != badge) {
          tmp11 = badge;
        }
        guildTagBadgeUrl = obj2.getGuildTagBadgeUrl(stateFromStores.id, tmp11, GuildTagBadgeSize.SIZE_24);
      }
      if (null != stateFromStores) {
        let name = stateFromStores.name;
      } else {
        const intl = arg1(dependencyMap[10]).intl;
        name = intl.string(arg1(dependencyMap[10]).t.ECv270);
      }
      let combined = name;
      if (null != profile) {
        const _HermesInternal = HermesInternal;
        combined = "" + name + ", " + profile.tag;
      }
      let obj3 = arg1(dependencyMap[11]);
      let num4 = 4;
      if (obj3.isAndroid()) {
        num4 = 1;
      }
      const sum = arg1(dependencyMap[12]).TextStyleSheet.text-md/semibold.fontSize + num4;
      obj = {};
      const intl2 = arg1(dependencyMap[10]).intl;
      obj.label = intl2.string(arg1(dependencyMap[10]).t.DUD+5n);
      obj.buttonText = name;
      obj = { text: combined };
      obj.accessibilityValue = obj;
      obj.onPress = function onPress() {
        let obj = stateFromStores(userAvailableGuildsWithTags[14]);
        obj = { availableGuilds: userAvailableGuildsWithTags };
        let tmp2 = null;
        if (null != stateFromStores) {
          tmp2 = stateFromStores;
        }
        obj.userPrimaryGuild = tmp2;
        obj.onSelectGuild = handleSelectPrimaryGuild;
        obj.openLazy(pendingPrimaryGuildId(userAvailableGuildsWithTags[16])(userAvailableGuildsWithTags[15], userAvailableGuildsWithTags.paths), "UserPrimaryGuildListBottomSheet", obj);
      };
      let tmp24 = null;
      if (null != stateFromStores) {
        obj1 = { guild: stateFromStores, size: arg1(dependencyMap[17]).GuildIconSizes.LARGE };
        tmp24 = jsx(importDefault(dependencyMap[17]), obj1);
        const tmp28 = importDefault(dependencyMap[17]);
      }
      obj.leading = tmp24;
      let tmp31Result = null;
      if (null != profile) {
        obj2 = {};
        const items2 = [tmp.tag, tagStyle];
        obj2.containerStyles = items2;
        obj3 = { lineHeight: sum };
        obj2.textStyle = obj3;
        const tag = profile.tag;
        let tmp34;
        if (null != tag) {
          tmp34 = tag;
        }
        obj2.guildTag = tmp34;
        obj2.guildBadge = guildTagBadgeUrl;
        obj2.badgeSize = GuildTagBadgeSize.SIZE_16;
        obj2.textVariant = "text-md/semibold";
        obj2.textColor = "text-default";
        tmp31Result = jsx(arg1(dependencyMap[18]).BaseGuildTagChiplet, obj2);
        const tmp31 = jsx;
      }
      obj.trailing = tmp31Result;
      obj.disabled = disabled;
      return jsx(arg1(dependencyMap[13]).UserProfileEditFormButton, obj);
    }
  }
  return null;
};
