// Module ID: 8413
// Function ID: 8414
// Name: createDisplayNameStylesMobile
// Dependencies: [5010, 4921, 1384, 1404, 2]
// Exports: createDisplayNameStylesMobile, getDisplayNameFontIdForMobileUser

// Module 8413 (createDisplayNameStylesMobile)
import DisplayNameFont from "DisplayNameFont" /* 1404 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export function createDisplayNameStylesMobile(author, member) {
  const displayNameStylesEnabled = AccessibilityStore.displayNameStylesEnabled;
  const currentUser = UserStore.getCurrentUser();
  let displayNameStyles = author.displayNameStyles;
  const tmp2 = null != currentUser && currentUser.id === author.id;
  if (tmp2) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  let fontId;
  if (member != null) {
    const displayNameStyles2 = member.displayNameStyles;
    if (displayNameStyles2 != null) {
      fontId = displayNameStyles2.fontId;
    }
  }
  if (fontId == null) {
    let fontId1;
    if (displayNameStyles != null) {
      fontId1 = displayNameStyles.fontId;
    }
    fontId = fontId1;
  }
  if (null != fontId) {
    if (displayNameStylesEnabled) {
      return { fontId };
    }
  }
}
export function getDisplayNameFontIdForMobileUser(user, guildId1) {
  if (null != user) {
    let member = null;
    if (null != guildId1) {
      member = GuildMemberStore.getMember(guildId1, user.id);
    }
    const displayNameStylesEnabled = AccessibilityStore.displayNameStylesEnabled;
    const currentUser = UserStore.getCurrentUser();
    let displayNameStyles = user.displayNameStyles;
    const tmp6 = null != currentUser && currentUser.id === user.id;
    if (tmp6) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    let fontId;
    if (member != null) {
      const displayNameStyles2 = member.displayNameStyles;
      if (displayNameStyles2 != null) {
        fontId = displayNameStyles2.fontId;
      }
    }
    if (fontId == null) {
      let fontId1;
      if (displayNameStyles != null) {
        fontId1 = displayNameStyles.fontId;
      }
      fontId = fontId1;
    }
    let tmp9;
    if (null != fontId) {
      if (displayNameStylesEnabled) {
        tmp9 = { fontId };
        const obj = { fontId };
      }
    }
    let fontId2;
    if (tmp9 != null) {
      fontId2 = tmp9.fontId;
    }
    if (null != fontId2) {
      if (fontId2 !== DisplayNameFont.DisplayNameFont.DEFAULT) {
        return fontId2;
      }
    }
  }
}
