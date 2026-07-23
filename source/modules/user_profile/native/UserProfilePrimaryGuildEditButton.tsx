// Module ID: 13606
// Function ID: 104542
// Name: UserProfilePrimaryGuildEditButton
// Dependencies: [31, 1838, 7632, 33, 4130, 689, 566, 13607, 7844, 7845, 1212, 477, 4126, 13589, 4098, 13608, 1934, 5515, 8577, 2]
// Exports: default

// Module 13606 (UserProfilePrimaryGuildEditButton)
import "result";
import closure_3 from "_createForOfIteratorHelperLoose";
import { GuildTagBadgeSize } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.tag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("items").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  let disabled;
  let pendingPrimaryGuildId;
  let tagStyle;
  let user;
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let stateFromStores;
  let userAvailableGuildsWithTags;
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
  let obj = pendingPrimaryGuildId(userAvailableGuildsWithTags[6]);
  const items = [handleSelectPrimaryGuild];
  const items1 = [pendingPrimaryGuildId];
  stateFromStores = obj.useStateFromStores(items, () => handleSelectPrimaryGuild.getGuild(pendingPrimaryGuildId), items1);
  let obj1 = pendingPrimaryGuildId(userAvailableGuildsWithTags[7]);
  userAvailableGuildsWithTags = obj1.useUserAvailableGuildsWithTags();
  if (null != user) {
    if (userAvailableGuildsWithTags.length > 0) {
      let profile;
      if (null != stateFromStores) {
        profile = stateFromStores.profile;
      }
      let guildTagBadgeUrl = null != stateFromStores;
      if (guildTagBadgeUrl) {
        let obj2 = pendingPrimaryGuildId(userAvailableGuildsWithTags[9]);
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
        const intl = pendingPrimaryGuildId(userAvailableGuildsWithTags[10]).intl;
        name = intl.string(pendingPrimaryGuildId(userAvailableGuildsWithTags[10]).t.ECv270);
      }
      let combined = name;
      if (null != profile) {
        const _HermesInternal = HermesInternal;
        combined = "" + name + ", " + profile.tag;
      }
      let obj3 = pendingPrimaryGuildId(userAvailableGuildsWithTags[11]);
      let num4 = 4;
      if (obj3.isAndroid()) {
        num4 = 1;
      }
      const sum = pendingPrimaryGuildId(userAvailableGuildsWithTags[12]).TextStyleSheet["text-md/semibold"].fontSize + num4;
      obj = {};
      const intl2 = pendingPrimaryGuildId(userAvailableGuildsWithTags[10]).intl;
      obj.label = intl2.string(pendingPrimaryGuildId(userAvailableGuildsWithTags[10]).t["DUD+5n"]);
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
        obj1 = { guild: stateFromStores, size: pendingPrimaryGuildId(userAvailableGuildsWithTags[17]).GuildIconSizes.LARGE };
        tmp24 = jsx(stateFromStores(userAvailableGuildsWithTags[17]), { guild: stateFromStores, size: pendingPrimaryGuildId(userAvailableGuildsWithTags[17]).GuildIconSizes.LARGE });
        const tmp28 = stateFromStores(userAvailableGuildsWithTags[17]);
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
        tmp31Result = jsx(pendingPrimaryGuildId(userAvailableGuildsWithTags[18]).BaseGuildTagChiplet, {});
        const tmp31 = jsx;
      }
      obj.trailing = tmp31Result;
      obj.disabled = disabled;
      return jsx(pendingPrimaryGuildId(userAvailableGuildsWithTags[13]).UserProfileEditFormButton, { text: combined });
    }
  }
  return null;
};
