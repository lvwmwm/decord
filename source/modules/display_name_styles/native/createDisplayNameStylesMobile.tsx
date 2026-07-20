// Module ID: 12198
// Function ID: 93720
// Name: createDisplayNameStylesMobile
// Dependencies: []
// Exports: createDisplayNameStylesMobile

// Module 12198 (createDisplayNameStylesMobile)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export const createDisplayNameStylesMobile = function createDisplayNameStylesMobile(author, merged) {
  const currentUser = currentUser.getCurrentUser();
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
      const obj = { fontId };
      return obj;
    }
  }
};
