// Module ID: 12177
// Function ID: 93625
// Name: createBuildOverrideEmbed
// Dependencies: []
// Exports: createBuildOverrideEmbed

// Module 12177 (createBuildOverrideEmbed)
const Image = require(dependencyMap[0]).Image;
let closure_5 = importDefault(dependencyMap[1]);
const State = require(dependencyMap[1]).State;
const InviteTypes = require(dependencyMap[2]).InviteTypes;
const _module = require(dependencyMap[14]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx");

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, arg1) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(dependencyMap[3])(arg1));
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
        if (null != targetBuildOverride[closure_0(undefined, closure_3[4]).DEVICE_FIELD]) {
          id = tmp7.id;
        }
      }
    }
    let tmp8 = null != id;
    if (tmp8) {
      const overrides = currentBuildOverride.overrides;
      let id1;
      if (null != overrides) {
        if (null != overrides[closure_0(undefined, closure_3[4]).DEVICE_FIELD]) {
          id1 = tmp12.id;
        }
      }
      tmp8 = id === id1;
    }
    obj = importAll(dependencyMap[6]);
    const tmp15Result = importDefault(dependencyMap[5])(buildOverride.override, [-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016798304201565856, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009336992387569061], obj.getConstants().Version);
    if (currentBuildOverride.state !== State.Invalid) {
      if (buildOverride.state !== State.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            if (tmp15Result.valid) {
              obj = {};
              const merged1 = Object.assign(baseColors);
              const intl3 = require(dependencyMap[7]).intl;
              obj["headerText"] = intl3.string(require(dependencyMap[7]).t.Wj3LW4).toLocaleUpperCase();
              obj["headerColor"] = colors.headerColor;
              const intl4 = require(dependencyMap[7]).intl;
              const override = buildOverride.override;
              let type;
              if (null != override) {
                const targetBuildOverride2 = override.targetBuildOverride;
                if (null != targetBuildOverride2) {
                  if (null != targetBuildOverride2[closure_0(undefined, closure_3[4]).DEVICE_FIELD]) {
                    type = tmp44.type;
                  }
                }
              }
              if ("branch" === type) {
                let RCYGot = require(dependencyMap[7]).t.p9TwTG;
              } else {
                RCYGot = require(dependencyMap[7]).t.RCYGot;
              }
              obj["titleText"] = intl4.string(RCYGot);
              obj["titleColor"] = colors.titleColor;
              obj["subtitle"] = id;
              obj["subtitleColor"] = colors.subtitleColor;
              obj["thumbnailUrl"] = Image.resolveAssetSource(importDefault(dependencyMap[13])).uri;
              let str17 = "primary";
              if (tmp8) {
                str17 = "destructive";
              }
              obj["acceptButtonVariant"] = str17;
              const intl5 = require(dependencyMap[7]).intl;
              const string = intl5.string;
              let str19 = require(dependencyMap[7]).t;
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
              const stringResult = intl3.string(require(dependencyMap[7]).t.Wj3LW4);
            }
          }
        }
      }
    }
    const obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl = require(dependencyMap[7]).intl;
    const tmp15 = importDefault(dependencyMap[5]);
    obj1["headerText"] = intl.string(require(dependencyMap[7]).t.d34xi4).toLocaleUpperCase();
    const stringResult2 = intl.string(require(dependencyMap[7]).t.d34xi4);
    obj1["titleColor"] = require(dependencyMap[8]).processColorOrThrow(importDefault(dependencyMap[9]).unsafe_rawColors.RED_400);
    if (tmp15Result.valid) {
      const intl2 = require(dependencyMap[7]).intl;
      let reason = intl2.string(require(dependencyMap[7]).t.ODXApH);
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
    const obj4 = require(dependencyMap[8]);
    if (obj5.isThemeDark(arg1)) {
      let tmp32Result = tmp32(tmp33[11]);
    } else {
      tmp32Result = tmp32(tmp33[12]);
    }
    obj1["thumbnailUrl"] = Image.resolveAssetSource(tmp32Result).uri;
    obj1["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
    obj1["type"] = InviteTypes.GUILD;
    return obj1;
  }
  const tmp = importDefault(dependencyMap[3])(arg1);
};
