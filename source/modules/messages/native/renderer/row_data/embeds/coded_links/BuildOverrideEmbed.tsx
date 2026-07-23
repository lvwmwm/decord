// Module ID: 12295
// Function ID: 95802
// Name: createBuildOverrideEmbed
// Dependencies: [27, 10440, 6979, 7633, 10939, 12296, 1554, 1212, 7625, 689, 3976, 10953, 10954, 12294, 2]
// Exports: createBuildOverrideEmbed

// Module 12295 (createBuildOverrideEmbed)
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { State } from "_isNativeReflectConstruct";
import { InviteTypes } from "InviteSendStates";

const result = require("InviteSendStates").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx");

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, closure_2) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7633)(closure_2));
  const currentBuildOverride = store.getCurrentBuildOverride();
  const buildOverride = store.getBuildOverride(code);
  if (buildOverride.state === State.Resolving) {
    let obj = { headerText: "RESOLVING" };
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    obj.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else {
    const override2 = buildOverride.override;
    let id;
    if (null != override2) {
      const targetBuildOverride = override2.targetBuildOverride;
      if (null != targetBuildOverride) {
        const tmp7 = targetBuildOverride[require(undefined, 10939) /* setBuildOverrideForBranch */.DEVICE_FIELD];
        if (null != tmp7) {
          id = tmp7.id;
        }
      }
    }
    let tmp8 = null != id;
    if (tmp8) {
      const overrides = currentBuildOverride.overrides;
      let id1;
      if (null != overrides) {
        const tmp12 = overrides[require(undefined, 10939) /* setBuildOverrideForBranch */.DEVICE_FIELD];
        if (null != tmp12) {
          id1 = tmp12.id;
        }
      }
      tmp8 = id === id1;
    }
    obj = importAll(1554);
    const tmp15Result = importDefault(12296)(buildOverride.override, ["discord_ios", "discord_android"], obj.getConstants().Version);
    if (currentBuildOverride.state !== State.Invalid) {
      if (buildOverride.state !== State.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            if (tmp15Result.valid) {
              obj = {};
              const merged1 = Object.assign(baseColors);
              const intl3 = require(1212) /* getSystemLocale */.intl;
              obj["headerText"] = intl3.string(require(1212) /* getSystemLocale */.t.Wj3LW4).toLocaleUpperCase();
              obj["headerColor"] = colors.headerColor;
              const intl4 = require(1212) /* getSystemLocale */.intl;
              const override = buildOverride.override;
              let type;
              if (null != override) {
                const targetBuildOverride2 = override.targetBuildOverride;
                if (null != targetBuildOverride2) {
                  const tmp44 = targetBuildOverride2[require(undefined, 10939) /* setBuildOverrideForBranch */.DEVICE_FIELD];
                  if (null != tmp44) {
                    type = tmp44.type;
                  }
                }
              }
              if ("branch" === type) {
                let RCYGot = require(1212) /* getSystemLocale */.t.p9TwTG;
              } else {
                RCYGot = require(1212) /* getSystemLocale */.t.RCYGot;
              }
              obj["titleText"] = intl4.string(RCYGot);
              obj["titleColor"] = colors.titleColor;
              obj["subtitle"] = id;
              obj["subtitleColor"] = colors.subtitleColor;
              obj["thumbnailUrl"] = Image.resolveAssetSource(importDefault(12294)).uri;
              let str17 = "primary";
              if (tmp8) {
                str17 = "destructive";
              }
              obj["acceptButtonVariant"] = str17;
              const intl5 = require(1212) /* getSystemLocale */.intl;
              const string = intl5.string;
              let str19 = require(1212) /* getSystemLocale */.t;
              if (tmp8) {
                let stringResult1 = string(str19.tX4xrt);
              } else {
                stringResult1 = string(str19.nOunHC);
              }
              obj["acceptLabelText"] = stringResult1;
              obj["embedCanBeTapped"] = true;
              obj["canBeAccepted"] = true;
              str19 = "type";
              obj["type"] = InviteTypes.GUILD;
              const stringResult = intl3.string(require(1212) /* getSystemLocale */.t.Wj3LW4);
            }
          }
        }
      }
    }
    const obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl = require(1212) /* getSystemLocale */.intl;
    const tmp15 = importDefault(12296);
    obj1["headerText"] = intl.string(require(1212) /* getSystemLocale */.t.d34xi4).toLocaleUpperCase();
    const stringResult2 = intl.string(require(1212) /* getSystemLocale */.t.d34xi4);
    obj1["titleColor"] = require(7625) /* processColorOrThrow */.processColorOrThrow(importDefault(689).unsafe_rawColors.RED_400);
    if (tmp15Result.valid) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let reason = intl2.string(require(1212) /* getSystemLocale */.t.ODXApH);
    } else {
      reason = tmp15Result.reason;
    }
    obj1["titleText"] = reason;
    obj1["subtitle"] = id;
    let subtitleColor;
    if (null != id) {
      subtitleColor = colors.subtitleColor;
    }
    obj1["subtitleColor"] = subtitleColor;
    const obj4 = require(7625) /* processColorOrThrow */;
    if (obj5.isThemeDark(closure_2)) {
      let tmp32Result = tmp32(10953);
    } else {
      tmp32Result = tmp32(10954);
    }
    obj1["thumbnailUrl"] = Image.resolveAssetSource(tmp32Result).uri;
    obj1["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
    obj1["type"] = InviteTypes.GUILD;
    return obj1;
  }
  const tmp = importDefault(7633)(closure_2);
};
