// Module ID: 4357
// Function ID: 38653
// Name: useDisplayNameStyles
// Dependencies: []
// Exports: default

// Module 4357 (useDisplayNameStyles)
const useContext = require(dependencyMap[0]).useContext;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStyles.tsx");

export default function useDisplayNameStyles() {
  let guildId;
  let ignoreDisabledStylesSetting;
  let pendingDisplayNameStyles;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ userId: closure_0, guildId } = obj);
  let importDefault = guildId;
  ({ pendingDisplayNameStyles, ignoreDisabledStylesSetting } = obj);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  let dependencyMap;
  const displayNameStylesEnabled = require(dependencyMap[3]).useDisplayNameStylesEnabled({ location: "useDisplayNameStyles" });
  const obj2 = require(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = authStore.getUser(closure_0);
    } else {
      user = authStore.getCurrentUser();
    }
    return user;
  });
  dependencyMap = stateFromStores;
  const tmp3 = useContext(importDefault(dependencyMap[5]));
  let tmp4 = null;
  if (null == guildId) {
    importDefault = tmp3;
    guildId = tmp3;
  }
  const obj3 = require(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = require(dependencyMap[4]).useStateFromStores(items1, () => {
    let member = null;
    if (null != tmp3) {
      member = null;
      if (null != stateFromStores) {
        member = member.getMember(tmp3, stateFromStores.id);
      }
    }
    return member;
  });
  if (!displayNameStylesEnabled) {
    if (!ignoreDisabledStylesSetting) {
      return null;
    }
  }
  if (undefined !== pendingDisplayNameStyles) {
    let tmp9 = pendingDisplayNameStyles;
    if (tmp4 === pendingDisplayNameStyles) {
      tmp9 = pendingDisplayNameStyles;
      if (tmp4 != guildId) {
        tmp4 = tmp4 == stateFromStores;
        let displayNameStyles;
        if (!tmp4) {
          displayNameStyles = stateFromStores.displayNameStyles;
        }
        tmp9 = displayNameStyles;
      }
    }
    let displayNameStyles1 = tmp9;
  } else {
    displayNameStyles1 = undefined;
    if (tmp4 != stateFromStores1) {
      displayNameStyles1 = stateFromStores1.displayNameStyles;
    }
    if (tmp4 == displayNameStyles1) {
      let displayNameStyles2;
      if (tmp4 != stateFromStores) {
        displayNameStyles2 = stateFromStores.displayNameStyles;
      }
      displayNameStyles1 = displayNameStyles2;
    }
  }
};
