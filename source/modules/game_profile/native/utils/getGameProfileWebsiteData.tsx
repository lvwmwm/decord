// Module ID: 11851
// Function ID: 91817
// Name: getGameProfileWebsiteData
// Dependencies: [333185024, 270270464, 492437504, 492371968, 491978752, 297467904, 491454464, 361496576, 131072, 91553792, 1040187392, 1442840592, 4211081262]
// Exports: default

// Module 11851 (getGameProfileWebsiteData)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[12]);
const result = _module.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = {};
    obj = { size: "md", color };
    obj.icon = jsx(require(dependencyMap[2]).GlobeEarthIcon, obj);
    obj.action = require(dependencyMap[3]).GameProfileTrackActionActions.WebsiteLink;
    const intl8 = require(dependencyMap[4]).intl;
    obj.title = intl8.string(require(dependencyMap[4]).t.fOUKvg);
    obj.url = category.url;
    return obj;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj1 = {};
    const obj2 = { size: "md", color };
    obj1.icon = jsx(require(dependencyMap[5]).XNeutralIcon, obj2);
    obj1.action = require(dependencyMap[3]).GameProfileTrackActionActions.XLink;
    const intl7 = require(dependencyMap[4]).intl;
    obj1.title = intl7.string(require(dependencyMap[4]).t.INic4y);
    obj1.url = category.url;
    return obj1;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = {};
    const obj4 = { size: "md", color };
    obj3.icon = jsx(require(dependencyMap[6]).YoutubeNeutralIcon, obj4);
    obj3.action = require(dependencyMap[3]).GameProfileTrackActionActions.YouTubeLink;
    const intl6 = require(dependencyMap[4]).intl;
    obj3.title = intl6.string(require(dependencyMap[4]).t.lNmxbE);
    obj3.url = category.url;
    return obj3;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = {};
    const obj6 = { size: "md", color };
    obj5.icon = jsx(require(dependencyMap[7]).FacebookNeutralIcon, obj6);
    obj5.action = require(dependencyMap[3]).GameProfileTrackActionActions.FacebookLink;
    const intl5 = require(dependencyMap[4]).intl;
    obj5.title = intl5.string(require(dependencyMap[4]).t.FjyREK);
    obj5.url = category.url;
    return obj5;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = {};
    const obj8 = { size: "md", color };
    obj7.icon = jsx(require(dependencyMap[8]).InstagramNeutralIcon, obj8);
    obj7.action = require(dependencyMap[3]).GameProfileTrackActionActions.InstagramLink;
    const intl4 = require(dependencyMap[4]).intl;
    obj7.title = intl4.string(require(dependencyMap[4]).t.cgR+IK);
    obj7.url = category.url;
    return obj7;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = {};
    const obj10 = { size: "md", color };
    obj9.icon = jsx(require(dependencyMap[9]).BlueskyNeutralIcon, obj10);
    obj9.action = require(dependencyMap[3]).GameProfileTrackActionActions.BlueskyLink;
    const intl3 = require(dependencyMap[4]).intl;
    obj9.title = intl3.string(require(dependencyMap[4]).t.D/PHq5);
    obj9.url = category.url;
    return obj9;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = {};
    const obj12 = { size: "md", color };
    obj11.icon = jsx(require(dependencyMap[10]).RedditNeutralIcon, obj12);
    obj11.action = require(dependencyMap[3]).GameProfileTrackActionActions.RedditLink;
    const intl2 = require(dependencyMap[4]).intl;
    obj11.title = intl2.string(require(dependencyMap[4]).t.Hgb+fc);
    obj11.url = category.url;
    return obj11;
  } else if (require(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = {};
    const obj13 = { size: "md", color };
    obj.icon = jsx(require(dependencyMap[11]).TwitchNeutralIcon, obj13);
    obj.action = require(dependencyMap[3]).GameProfileTrackActionActions.TwitchLink;
    const intl = require(dependencyMap[4]).intl;
    obj.title = intl.string(require(dependencyMap[4]).t.7xtz4G);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
