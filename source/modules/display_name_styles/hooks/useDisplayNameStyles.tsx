// Module ID: 4361
// Function ID: 38693
// Name: useDisplayNameStyles
// Dependencies: [31, 1917, 1849, 4362, 566, 4364, 2]
// Exports: default

// Module 4361 (useDisplayNameStyles)
import { useContext } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStyles.tsx");

export default function useDisplayNameStyles() {
  let guildId;
  let ignoreDisabledStylesSetting;
  let pendingDisplayNameStyles;
  let require;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ userId: require, guildId } = obj);
  ({ pendingDisplayNameStyles, ignoreDisabledStylesSetting } = obj);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  let stateFromStores;
  const displayNameStylesEnabled = require(stateFromStores[3]).useDisplayNameStylesEnabled({ location: "useDisplayNameStyles" });
  const obj2 = require(stateFromStores[3]);
  const items = [closure_5];
  stateFromStores = require(stateFromStores[4]).useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = outer1_5.getUser(closure_0);
    } else {
      user = outer1_5.getCurrentUser();
    }
    return user;
  });
  const tmp3 = useContext(guildId(stateFromStores[5]));
  let tmp4 = null;
  if (null == guildId) {
    guildId = tmp3;
    guildId = tmp3;
  }
  const obj3 = require(stateFromStores[4]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(stateFromStores[4]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != stateFromStores) {
        member = outer1_4.getMember(guildId, stateFromStores.id);
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
