// Module ID: 12323
// Function ID: 95932
// Name: createDisplayNameStylesMobile
// Dependencies: [4122, 1849, 2]
// Exports: createDisplayNameStylesMobile

// Module 12323 (createDisplayNameStylesMobile)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export const createDisplayNameStylesMobile = function createDisplayNameStylesMobile(author, merged) {
  currentUser = currentUser.getCurrentUser();
  let displayNameStyles = author.displayNameStyles;
  if (tmp2) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  let fontId;
  if (null != merged) {
    const displayNameStyles2 = merged.displayNameStyles;
    if (null != displayNameStyles2) {
      fontId = displayNameStyles2.fontId;
    }
  }
  if (null == fontId) {
    let fontId1;
    if (null != displayNameStyles) {
      fontId1 = displayNameStyles.fontId;
    }
    fontId = fontId1;
  }
  if (null != fontId) {
    if (obj.displayNameStylesEnabled) {
      obj = { fontId };
      return obj;
    }
  }
};
