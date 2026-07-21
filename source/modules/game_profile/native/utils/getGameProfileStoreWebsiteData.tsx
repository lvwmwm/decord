// Module ID: 8600
// Function ID: 68267
// Name: getGameProfileStoreWebsiteData
// Dependencies: []
// Exports: default

// Module 8600 (getGameProfileStoreWebsiteData)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = {};
    obj = { size: "md" };
    obj.icon = jsx(arg1(dependencyMap[3]).SteamNeutralIcon, obj);
    obj.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.SteamStoreLink;
    const intl7 = arg1(dependencyMap[5]).intl;
    obj.title = intl7.string(arg1(dependencyMap[5]).t.FsANs4);
    obj.url = category.url;
    return obj;
  } else if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj1 = {};
    const obj2 = { size: "md" };
    obj1.icon = jsx(arg1(dependencyMap[6]).EpicGamesNeutralIcon, obj2);
    obj1.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.EpicStoreLink;
    const intl6 = arg1(dependencyMap[5]).intl;
    obj1.title = intl6.string(arg1(dependencyMap[5]).t.ZbBMHa);
    obj1.url = category.url;
    return obj1;
  } else if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj3 = {};
    const obj4 = { size: "md" };
    obj3.icon = jsx(arg1(dependencyMap[7]).RobloxNeutralIcon, obj4);
    obj3.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.RobloxStoreLink;
    const intl5 = arg1(dependencyMap[5]).intl;
    obj3.title = intl5.string(arg1(dependencyMap[5]).t.pJ+P+h);
    obj3.url = category.url;
    return obj3;
  } else if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = {};
    const obj6 = { size: "md" };
    obj5.icon = jsx(arg1(dependencyMap[8]).BattlenetNeutralIcon, obj6);
    obj5.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.BattlenetStoreLink;
    const intl4 = arg1(dependencyMap[5]).intl;
    obj5.title = intl4.string(arg1(dependencyMap[5]).t.A7grp+);
    obj5.url = category.url;
    return obj5;
  } else if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj7 = {};
    const obj8 = { size: "md" };
    obj7.icon = jsx(arg1(dependencyMap[9]).RiotGamesNeutralIcon, obj8);
    obj7.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.RiotStoreLink;
    const intl3 = arg1(dependencyMap[5]).intl;
    obj7.title = intl3.string(arg1(dependencyMap[5]).t.h6MapL);
    obj7.url = category.url;
    return obj7;
  } else if (arg1(dependencyMap[2]).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj9 = {};
    const obj10 = { size: "md" };
    obj9.icon = jsx(arg1(dependencyMap[10]).MinecraftNeutralIcon, obj10);
    obj9.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.MinecraftStoreLink;
    const intl2 = arg1(dependencyMap[5]).intl;
    obj9.title = intl2.string(arg1(dependencyMap[5]).t.HZbmO+);
    obj9.url = category.url;
    return obj9;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = {};
    const obj11 = { size: "md" };
    obj.icon = jsx(arg1(dependencyMap[11]).XboxNeutralIcon, obj11);
    obj.action = arg1(dependencyMap[4]).GameProfileTrackActionActions.XboxGamePassStoreLink;
    const intl = arg1(dependencyMap[5]).intl;
    obj.title = intl.string(arg1(dependencyMap[5]).t.QpN/Iz);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
