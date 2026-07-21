// Module ID: 8573
// Function ID: 68100
// Name: getBackgroundForProfile
// Dependencies: []
// Exports: default

// Module 8573 (getBackgroundForProfile)
function getBackgroundForProfile(theme, token) {
  const items = [token, ];
  const obj = token(dependencyMap[5]);
  const obj2 = token(dependencyMap[6]);
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
  const arg1 = guildProfile;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = guild.getGuild(guildProfile.id);
    if (null == guild) {
      guild = guildProfile(closure_2[10]).fromGuildProfile(guildProfile);
      const obj = guildProfile(closure_2[10]);
    }
    const features = guild.features;
    return features.has(constants.DISCOVERABLE);
  });
  if (stateFromStores) {
    if (null != guildProfile.customBanner) {
      obj = {};
      ({ id: obj3.id, customBanner: obj3.splash } = guildProfile);
      obj.size = importDefault(dependencyMap[13])() * importDefault(dependencyMap[11])().width;
      obj = { style: tmp2.imageBanner };
      obj.source = importDefault(dependencyMap[12]).getGuildDiscoverySplashSource(obj);
      return callback(closure_5, obj);
    }
  }
  return callback(GuildProfileGradient, { guildProfile });
}
function GuildProfileGradient(guildProfile) {
  const tmp = styles();
  let obj = arg1(dependencyMap[15]);
  const token = obj.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = importDefault(dependencyMap[14])();
  const profilePrimaryColor = arg1(dependencyMap[16]).useProfilePrimaryColor(guildProfile.guildProfile, token);
  obj = { style: tmp.colorBanner, start: frozen.START, end: frozen.END };
  const obj2 = arg1(dependencyMap[16]);
  obj.colors = getBackgroundForProfile(tmp2, profilePrimaryColor);
  return callback(importDefault(dependencyMap[17]), obj);
}
function JoinForFullAccessCard() {
  let obj = { style: styles().joinForFullAccessCard };
  obj = {};
  const intl = arg1(dependencyMap[20]).intl;
  obj.children = intl.string(arg1(dependencyMap[20]).t.us0bE8);
  const items = [callback(arg1(dependencyMap[19]).Text, obj), ];
  obj = {};
  const intl2 = arg1(dependencyMap[20]).intl;
  obj.children = intl2.string(arg1(dependencyMap[20]).t.fTtTTp);
  items[1] = callback(arg1(dependencyMap[19]).Text, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[18]).Card, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.colorBanner = {};
obj.imageBanner = {};
obj.body = {};
obj.error = { <string:3798027838>: 8, <string:1627573841>: null, <string:3151386190>: "\u270A\u{1F3FF}", <string:45572556>: true };
obj.buttonContainer = { marginTop: 160 };
obj.header = { flex: "SERVER_GUIDE_CHANNEL_SELECTED", flexDirection: "_gameProfileResults", gap: "r", overflow: "MERCH_STORE", flexDirection: "isArray" };
const tmp3 = arg1(dependencyMap[4]);
obj.avatarBackground = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.restrictedAcronym = { fontSize: 24 };
obj.joinForFullAccessCard = { gap: 4 };
const styles = obj.createStyles(obj);
const frozen = Object.freeze({ START: {}, END: { max: null, guildId: null } });
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileView.tsx");

export default function GuildProfileView(guildProfile) {
  guildProfile = guildProfile.guildProfile;
  const arg1 = guildProfile;
  let flag = guildProfile.isLurkerServerPreview;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = styles();
  const items = [guildProfile];
  let obj = { style: tmp.container };
  const memo = React.useMemo(() => {
    if (null == guildProfile) {
      return null;
    } else {
      let obj = callback(closure_2[12]);
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
    tmp5 = callback(importDefault(dependencyMap[21]), {});
  }
  items1[1] = tmp5;
  items1[2] = callback(importDefault(dependencyMap[22]), { profile: guildProfile, guildIconSource: memo });
  obj = { style: tmp.body };
  let tmp11 = null != guildProfile.description;
  if (tmp11) {
    tmp11 = guildProfile.description.length > 0;
  }
  if (tmp11) {
    obj = { children: guildProfile.description };
    tmp11 = callback(arg1(dependencyMap[19]).Text, obj);
  }
  const items2 = [tmp11, ];
  if (flag) {
    let tmp21 = callback(JoinForFullAccessCard, {});
  } else {
    const obj1 = {};
    const obj2 = { profile: guildProfile };
    const items3 = [callback(importDefault(dependencyMap[23]), obj2), ];
    const obj3 = { profile: guildProfile };
    items3[1] = callback(importDefault(dependencyMap[24]), obj3);
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
export const useStyles = styles;
export const DiagonalGradient = frozen;
