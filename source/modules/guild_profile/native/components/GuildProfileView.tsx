// Module ID: 8624
// Function ID: 68386
// Name: getBackgroundForProfile
// Dependencies: [31, 27, 1838, 653, 33, 3840, 3842, 4130, 689, 566, 1387, 1450, 1392, 8625, 4066, 3834, 8626, 4554, 5167, 4126, 1212, 8627, 8628, 8630, 11910, 2]
// Exports: default

// Module 8624 (getBackgroundForProfile)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function getBackgroundForProfile(closure_2, token) {
  const items = [token, ];
  const obj = require(3840) /* isThemeLight */;
  const obj2 = require(3842) /* ManaContext */;
  if (isThemeDarkResult) {
    let brightenColorResult = obj2.brightenColor(token, 0.8);
  } else {
    brightenColorResult = obj2.darkenColor(token, 0.8);
  }
  items[1] = brightenColorResult;
  return items;
}
function GuildProfileBackground(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let obj = guildProfile(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = outer1_6.getGuild(guildProfile.id);
    if (null == guild) {
      guild = guildProfile(outer1_2[10]).fromGuildProfile(guildProfile);
      const obj = guildProfile(outer1_2[10]);
    }
    const features = guild.features;
    return features.has(outer1_7.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = {};
      ({ id: obj3.id, customBanner: obj3.splash } = guildProfile);
      obj.size = importDefault(8625)() * importDefault(1450)().width;
      obj = { style: tmp2.imageBanner };
      obj.source = importDefault(1392).getGuildDiscoverySplashSource(obj);
      return callback(closure_5, obj);
    }
  }
  return callback(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = importDefault(4066)();
  const profilePrimaryColor = require(8626) /* useProfilePrimaryColor */.useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END };
  const obj2 = require(8626) /* useProfilePrimaryColor */;
  obj.colors = getBackgroundForProfile(tmp2, profilePrimaryColor);
  return callback(importDefault(4554), obj);
}
function JoinForFullAccessCard() {
  let obj = { variant: "secondary", border: "none", style: _createForOfIteratorHelperLoose().joinForFullAccessCard };
  obj = { variant: "text-md/semibold", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.us0bE8);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.fTtTTp);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(require(5167) /* getCardBackgroundToken */.Card, obj);
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.colorBanner = { height: 140, width: "100%" };
_createForOfIteratorHelperLoose.imageBanner = { height: 140, width: "100%", objectFit: "cover" };
_createForOfIteratorHelperLoose.body = { marginTop: 12, paddingHorizontal: 16, gap: 16 };
_createForOfIteratorHelperLoose.error = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
_createForOfIteratorHelperLoose.buttonContainer = { marginTop: 160 };
_createForOfIteratorHelperLoose.header = { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 };
let obj1 = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.avatarBackground = obj1;
_createForOfIteratorHelperLoose.restrictedAcronym = { fontSize: 24 };
_createForOfIteratorHelperLoose.joinForFullAccessCard = { gap: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const frozen = Object.freeze({ START: { x: 0, y: 1 }, END: { x: 1.5, y: 0 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  let flag = guildProfile.isLurkerServerPreview;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  const items = [guildProfile];
  let obj = { style: tmp.container };
  const memo = React.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      let obj = outer1_1(outer1_2[12]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      obj.size = 96;
      obj.canAnimate = true;
      const guildIconSource = obj.getGuildIconSource(obj);
      let uri = null;
      if ("number" !== typeof guildIconSource) {
        uri = guildIconSource.uri;
      }
      return uri;
    }
  }, items);
  const items1 = [callback(GuildProfileBackground, { guildProfile }), , , ];
  let tmp5 = flag;
  if (flag) {
    tmp5 = callback(importDefault(8627), {});
  }
  items1[1] = tmp5;
  items1[2] = callback(importDefault(8628), { profile: guildProfile, guildIconSource: memo });
  obj = { style: tmp.body };
  let tmp11 = null != guildProfile.description;
  if (tmp11) {
    tmp11 = guildProfile.description.length > 0;
  }
  if (tmp11) {
    obj = { variant: "text-md/medium", color: "text-subtle", children: guildProfile.description };
    tmp11 = callback(guildProfile(4126).Text, obj);
  }
  const items2 = [tmp11, ];
  if (flag) {
    let tmp21 = callback(JoinForFullAccessCard, {});
  } else {
    const obj1 = {};
    const obj2 = { profile: guildProfile };
    const items3 = [callback(importDefault(8630), obj2), ];
    const obj3 = { profile: guildProfile };
    items3[1] = callback(importDefault(11910), obj3);
    obj1.children = items3;
    tmp21 = callback2(closure_10, obj1);
  }
  items2[1] = tmp21;
  obj.children = items2;
  items1[3] = callback2(closure_4, obj);
  obj.children = items1;
  return callback2(closure_4, obj);
};
export { getBackgroundForProfile };
export const useStyles = _createForOfIteratorHelperLoose;
export const DiagonalGradient = frozen;
