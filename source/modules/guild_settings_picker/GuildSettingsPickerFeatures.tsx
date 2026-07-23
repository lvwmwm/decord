// Module ID: 12897
// Function ID: 100089
// Name: useGuildSettingsPickerFeature
// Dependencies: [57, 31, 3758, 12898, 12899, 1212, 566, 2]
// Exports: useGuildSettingsPickerFeature

// Module 12897 (useGuildSettingsPickerFeature)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let obj = { "server-subscriptions-onboarding": require("module_12898"), "server-subscriptions-create-tier-from-template": require("module_12899") };
let closure_6 = {
  title() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.V42OaH);
  },
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["7dJ16X"]);
  },
  selectGuildCta() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.LhlgY9);
  },
  createGuildDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.anOisx);
  },
  createGuildCta() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => (arg0) => outer2_4.canAccessGuildSettings(arg0), [], require(566) /* initialize */.statesWillNeverBeEqual);
  }
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  if (null != feature) {
    tmp2 = obj[feature];
  }
  let first = callback(React.useState(tmp2), 1)[0];
  let closure_0 = closure_6.useIsGuildSupported();
  let isGuildSupported;
  if (null != first) {
    if (null != first.useIsGuildSupported) {
      isGuildSupported = first.useIsGuildSupported();
    }
  }
  obj = {};
  const merged = Object.assign(closure_6);
  if (null == first) {
    first = {};
  }
  const merged1 = Object.assign(first);
  obj = {
    title: obj.title(),
    description: obj.description(),
    selectGuildCta: obj.selectGuildCta(),
    createGuildDescription: obj.createGuildDescription(),
    createGuildCta: obj.createGuildCta(),
    canCreateGuild: obj.canCreateGuild,
    isGuildSupported(arg0, arg1) {
      let tmp = callback(arg0, arg1);
      if (tmp) {
        let tmp4;
        if (null != isGuildSupported) {
          tmp4 = isGuildSupported(arg0, arg1);
        }
        tmp = false !== tmp4;
      }
      return tmp;
    }
  };
  return obj;
};
