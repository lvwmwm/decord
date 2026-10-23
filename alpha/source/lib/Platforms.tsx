// Module ID: 6500
// Function ID: 6501
// Name: Platforms
// Dependencies: [1087, 2029, 586, 6501, 6502, 6503, 6504, 6505, 6506, 6507, 6508, 6509, 6510, 6511, 6512, 6513, 6514, 6515, 6516, 6517, 6518, 6519, 6520, 6521, 6522, 6523, 6524, 6525, 6526, 6527, 6528, 6529, 6530, 6531, 6532, 6533, 6534, 6535, 6536, 6537, 6538, 6539, 6540, 6541, 6542, 6543, 6544, 6545, 6546, 6547, 6548, 6549, 6550, 6551, 6552, 6553, 6554, 6555, 6556, 6557, 6558, 6559, 6560, 6561, 6562, 6563, 6564, 6565, 6566, 6567, 6568, 6569, 6570, 6571, 6572, 6573, 6574, 6575, 6576, 6577, 6578, 6579, 6580, 6581, 6582, 6583, 6584, 6585, 6586, 6587, 6588, 6589, 6590, 6591, 6592, 6593, 6594, 6595, 6596, 6597, 6598, 6599, 6600, 6601, 6602, 6603, 6604, 6605, 6606, 6607, 6608, 6609, 6610, 6611, 6612, 6613, 6614, 6615, 6616, 6617, 6618, 6619, 6620, 6621, 6622, 6623, 6624, 6625, 6626, 6627, 6628, 12, 1386, 2]

// Module 6500 (Platforms)
import Constants from "Constants" /* 1087 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2029 */;
import AssetRegistry from "AssetRegistry" /* 6501 */;
import AssetRegistry2 from "AssetRegistry" /* 6502 */;
import AssetRegistry3 from "AssetRegistry" /* 6503 */;
import AssetRegistry4 from "AssetRegistry" /* 6504 */;
import AssetRegistry5 from "AssetRegistry" /* 6505 */;
import AssetRegistry6 from "AssetRegistry" /* 6506 */;
import AssetRegistry7 from "AssetRegistry" /* 6507 */;
import AssetRegistry8 from "AssetRegistry" /* 6508 */;
import AssetRegistry9 from "AssetRegistry" /* 6509 */;
import AssetRegistry10 from "AssetRegistry" /* 6510 */;
import AssetRegistry11 from "AssetRegistry" /* 6511 */;
import AssetRegistry12 from "AssetRegistry" /* 6512 */;
import AssetRegistry13 from "AssetRegistry" /* 6513 */;
import AssetRegistry14 from "AssetRegistry" /* 6514 */;
import AssetRegistry15 from "AssetRegistry" /* 6515 */;
import AssetRegistry16 from "AssetRegistry" /* 6516 */;
import AssetRegistry17 from "AssetRegistry" /* 6517 */;
import AssetRegistry18 from "AssetRegistry" /* 6518 */;
import AssetRegistry19 from "AssetRegistry" /* 6519 */;
import AssetRegistry20 from "AssetRegistry" /* 6520 */;
import AssetRegistry21 from "AssetRegistry" /* 6521 */;
import AssetRegistry22 from "AssetRegistry" /* 6522 */;
import AssetRegistry23 from "AssetRegistry" /* 6523 */;
import AssetRegistry24 from "AssetRegistry" /* 6524 */;
import AssetRegistry25 from "AssetRegistry" /* 6525 */;
import AssetRegistry26 from "AssetRegistry" /* 6526 */;
import AssetRegistry27 from "AssetRegistry" /* 6527 */;
import AssetRegistry28 from "AssetRegistry" /* 6528 */;
import AssetRegistry29 from "AssetRegistry" /* 6529 */;
import AssetRegistry30 from "AssetRegistry" /* 6530 */;
import AssetRegistry31 from "AssetRegistry" /* 6531 */;
import AssetRegistry32 from "AssetRegistry" /* 6532 */;
import AssetRegistry33 from "AssetRegistry" /* 6533 */;
import AssetRegistry34 from "AssetRegistry" /* 6534 */;
import AssetRegistry35 from "AssetRegistry" /* 6535 */;
import AssetRegistry36 from "AssetRegistry" /* 6536 */;
import AssetRegistry37 from "AssetRegistry" /* 6537 */;
import AssetRegistry38 from "AssetRegistry" /* 6538 */;
import AssetRegistry39 from "AssetRegistry" /* 6539 */;
import AssetRegistry40 from "AssetRegistry" /* 6540 */;
import AssetRegistry41 from "AssetRegistry" /* 6541 */;
import AssetRegistry42 from "AssetRegistry" /* 6542 */;
import AssetRegistry43 from "AssetRegistry" /* 6543 */;
import AssetRegistry44 from "AssetRegistry" /* 6544 */;
import AssetRegistry45 from "AssetRegistry" /* 6545 */;
import AssetRegistry46 from "AssetRegistry" /* 6546 */;
import AssetRegistry47 from "AssetRegistry" /* 6547 */;
import AssetRegistry48 from "AssetRegistry" /* 6548 */;
import AssetRegistry49 from "AssetRegistry" /* 6549 */;
import AssetRegistry50 from "AssetRegistry" /* 6550 */;
import AssetRegistry51 from "AssetRegistry" /* 6551 */;
import AssetRegistry52 from "AssetRegistry" /* 6552 */;
import AssetRegistry53 from "AssetRegistry" /* 6553 */;
import AssetRegistry54 from "AssetRegistry" /* 6554 */;
import AssetRegistry55 from "AssetRegistry" /* 6555 */;
import AssetRegistry56 from "AssetRegistry" /* 6556 */;
import AssetRegistry57 from "AssetRegistry" /* 6557 */;
import AssetRegistry58 from "AssetRegistry" /* 6558 */;
import AssetRegistry59 from "AssetRegistry" /* 6559 */;
import AssetRegistry60 from "AssetRegistry" /* 6560 */;
import AssetRegistry61 from "AssetRegistry" /* 6561 */;
import AssetRegistry62 from "AssetRegistry" /* 6562 */;
import AssetRegistry63 from "AssetRegistry" /* 6563 */;
import AssetRegistry64 from "AssetRegistry" /* 6564 */;
import AssetRegistry65 from "AssetRegistry" /* 6565 */;
import AssetRegistry66 from "AssetRegistry" /* 6566 */;
import AssetRegistry67 from "AssetRegistry" /* 6567 */;
import AssetRegistry68 from "AssetRegistry" /* 6568 */;
import AssetRegistry69 from "AssetRegistry" /* 6569 */;
import AssetRegistry70 from "AssetRegistry" /* 6570 */;
import AssetRegistry71 from "AssetRegistry" /* 6571 */;
import AssetRegistry72 from "AssetRegistry" /* 6572 */;
import AssetRegistry73 from "AssetRegistry" /* 6573 */;
import AssetRegistry74 from "AssetRegistry" /* 6574 */;
import AssetRegistry75 from "AssetRegistry" /* 6575 */;
import AssetRegistry76 from "AssetRegistry" /* 6576 */;
import AssetRegistry77 from "AssetRegistry" /* 6577 */;
import AssetRegistry78 from "AssetRegistry" /* 6578 */;
import AssetRegistry79 from "AssetRegistry" /* 6579 */;
import AssetRegistry80 from "AssetRegistry" /* 6580 */;
import AssetRegistry81 from "AssetRegistry" /* 6581 */;
import AssetRegistry82 from "AssetRegistry" /* 6582 */;
import AssetRegistry83 from "AssetRegistry" /* 6583 */;
import AssetRegistry84 from "AssetRegistry" /* 6584 */;
import AssetRegistry85 from "AssetRegistry" /* 6585 */;
import AssetRegistry86 from "AssetRegistry" /* 6586 */;
import AssetRegistry87 from "AssetRegistry" /* 6587 */;
import AssetRegistry88 from "AssetRegistry" /* 6588 */;
import AssetRegistry89 from "AssetRegistry" /* 6589 */;
import AssetRegistry90 from "AssetRegistry" /* 6590 */;
import AssetRegistry91 from "AssetRegistry" /* 6591 */;
import AssetRegistry92 from "AssetRegistry" /* 6592 */;
import AssetRegistry93 from "AssetRegistry" /* 6593 */;
import AssetRegistry94 from "AssetRegistry" /* 6594 */;
import AssetRegistry95 from "AssetRegistry" /* 6595 */;
import AssetRegistry96 from "AssetRegistry" /* 6596 */;
import AssetRegistry97 from "AssetRegistry" /* 6597 */;
import AssetRegistry98 from "AssetRegistry" /* 6598 */;
import AssetRegistry99 from "AssetRegistry" /* 6599 */;
import AssetRegistry100 from "AssetRegistry" /* 6600 */;
import AssetRegistry101 from "AssetRegistry" /* 6601 */;
import AssetRegistry102 from "AssetRegistry" /* 6602 */;
import AssetRegistry103 from "AssetRegistry" /* 6603 */;
import AssetRegistry104 from "AssetRegistry" /* 6604 */;
import AssetRegistry105 from "AssetRegistry" /* 6605 */;
import AssetRegistry106 from "AssetRegistry" /* 6606 */;
import AssetRegistry107 from "AssetRegistry" /* 6607 */;
import AssetRegistry108 from "AssetRegistry" /* 6608 */;
import AssetRegistry109 from "AssetRegistry" /* 6609 */;
import AssetRegistry110 from "AssetRegistry" /* 6610 */;
import AssetRegistry111 from "AssetRegistry" /* 6611 */;
import AssetRegistry112 from "AssetRegistry" /* 6612 */;
import AssetRegistry113 from "AssetRegistry" /* 6613 */;
import AssetRegistry114 from "AssetRegistry" /* 6614 */;
import AssetRegistry115 from "AssetRegistry" /* 6615 */;
import AssetRegistry116 from "AssetRegistry" /* 6616 */;
import AssetRegistry117 from "AssetRegistry" /* 6617 */;
import AssetRegistry118 from "AssetRegistry" /* 6618 */;
import AssetRegistry119 from "AssetRegistry" /* 6619 */;
import AssetRegistry120 from "AssetRegistry" /* 6620 */;
import AssetRegistry121 from "AssetRegistry" /* 6621 */;
import AssetRegistry122 from "AssetRegistry" /* 6622 */;
import AssetRegistry123 from "AssetRegistry" /* 6623 */;
import AssetRegistry124 from "AssetRegistry" /* 6624 */;
import AssetRegistry125 from "AssetRegistry" /* 6625 */;
import AssetRegistry126 from "AssetRegistry" /* 6626 */;
import AssetRegistry127 from "AssetRegistry" /* 6627 */;
import AssetRegistry128 from "AssetRegistry" /* 6628 */;
import shims_mod from "shims" /* 586 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let domains, hasOwnProperty;

let obj16;
let obj43;
let obj7;
let shims;
const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = {
  type: PlatformTypes.TWITCH,
  name: "Twitch",
  color: shims.unsafe_getRawColor("PLATFORM_TWITCH"),
  icon: { lightPNG: AssetRegistry, darkPNG: AssetRegistry, whitePNG: AssetRegistry2, lightSVG: AssetRegistry3, darkSVG: AssetRegistry3, whiteSVG: AssetRegistry4 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://www.twitch.tv/" + encodeURIComponent(name.name);
  },
  domains: ["twitch.tv", "twitch.com"]
};
shims = shims_mod;
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = {
  type: PlatformTypes.YOUTUBE,
  name: "YouTube",
  color: shims.unsafe_getRawColor("PLATFORM_YOUTUBE"),
  icon: { lightPNG: AssetRegistry5, darkPNG: AssetRegistry5, whitePNG: AssetRegistry6, lightSVG: AssetRegistry7, darkSVG: AssetRegistry7, whiteSVG: AssetRegistry8 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
  },
  domains: ["youtube.com", "youtu.be"]
};
({ lightPNG: AssetRegistry, darkPNG: AssetRegistry, whitePNG: AssetRegistry2, lightSVG: AssetRegistry3, darkSVG: AssetRegistry3, whiteSVG: AssetRegistry4 });
shims = shims_mod;
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: shims.unsafe_getRawColor("PLATFORM_BATTLENET"), icon: { lightPNG: AssetRegistry9, darkPNG: AssetRegistry9, whitePNG: AssetRegistry10, lightSVG: AssetRegistry11, darkSVG: AssetRegistry11, whiteSVG: AssetRegistry12, blackSVG: AssetRegistry11 }, enabled: true, migrationData: obj7 };
({ lightPNG: AssetRegistry5, darkPNG: AssetRegistry5, whitePNG: AssetRegistry6, lightSVG: AssetRegistry7, darkSVG: AssetRegistry7, whiteSVG: AssetRegistry8 });
shims = shims_mod;
obj7 = { replacedBy: ApplicationIdentityAppIds.BATTLENET, helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord", deprecationDate: new Date("2026-09-22Z-07:00") };
({ lightPNG: AssetRegistry9, darkPNG: AssetRegistry9, whitePNG: AssetRegistry10, lightSVG: AssetRegistry11, darkSVG: AssetRegistry11, whiteSVG: AssetRegistry12, blackSVG: AssetRegistry11 });
items[2] = obj5;
const obj8 = {
  type: PlatformTypes.BLUESKY,
  name: "Bluesky",
  icon: { lightPNG: AssetRegistry13, darkPNG: AssetRegistry13, whitePNG: AssetRegistry14, lightSVG: AssetRegistry15, darkSVG: AssetRegistry15, whiteSVG: AssetRegistry16 },
  enabled: true,
  getPlatformUserUrl(id) {
    const encodeURIComponentResult = encodeURIComponent(id.id);
    return "https://bsky.app/profile/" + encodeURIComponentResult.replaceAll("%3A", ":");
  },
  isFederated: true,
  hasMetadata: true
};
new Date("2026-09-22Z-07:00");
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: shims.unsafe_getRawColor("PLATFORM_BUNGIE"), icon: { lightPNG: AssetRegistry17, darkPNG: AssetRegistry18, whitePNG: AssetRegistry19, lightSVG: AssetRegistry20, darkSVG: AssetRegistry21, whiteSVG: AssetRegistry22 }, enabled: true };
({ lightPNG: AssetRegistry13, darkPNG: AssetRegistry13, whitePNG: AssetRegistry14, lightSVG: AssetRegistry15, darkSVG: AssetRegistry15, whiteSVG: AssetRegistry16 });
shims = shims_mod;
items[4] = obj10;
const obj12 = {
  type: PlatformTypes.SKYPE,
  name: "Skype",
  color: shims.unsafe_getRawColor("PLATFORM_SKYPE"),
  icon: { lightPNG: AssetRegistry23, darkPNG: AssetRegistry23, whitePNG: AssetRegistry24, lightSVG: AssetRegistry25, darkSVG: AssetRegistry25, whiteSVG: AssetRegistry26 },
  enabled: false,
  getPlatformUserUrl(id) {
    return "skype:" + encodeURIComponent(id.id) + "?userinfo";
  }
};
({ lightPNG: AssetRegistry17, darkPNG: AssetRegistry18, whitePNG: AssetRegistry19, lightSVG: AssetRegistry20, darkSVG: AssetRegistry21, whiteSVG: AssetRegistry22 });
shims = shims_mod;
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: shims.unsafe_getRawColor("PLATFORM_LOL"), icon: { lightPNG: AssetRegistry27, darkPNG: AssetRegistry27, whitePNG: AssetRegistry28, lightSVG: AssetRegistry29, darkSVG: AssetRegistry29, whiteSVG: AssetRegistry30 }, enabled: true, migrationData: obj16 };
({ lightPNG: AssetRegistry23, darkPNG: AssetRegistry23, whitePNG: AssetRegistry24, lightSVG: AssetRegistry25, darkSVG: AssetRegistry25, whiteSVG: AssetRegistry26 });
shims = shims_mod;
obj16 = { replacedBy: ApplicationIdentityAppIds.RIOT_GAMES, helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking", deprecationDate: new Date("2026-07-10Z-07:00") };
({ lightPNG: AssetRegistry27, darkPNG: AssetRegistry27, whitePNG: AssetRegistry28, lightSVG: AssetRegistry29, darkSVG: AssetRegistry29, whiteSVG: AssetRegistry30 });
items[6] = obj14;
const obj17 = {
  type: PlatformTypes.STEAM,
  name: "Steam",
  color: shims.unsafe_getRawColor("PLATFORM_STEAM"),
  icon: { lightPNG: AssetRegistry31, darkPNG: AssetRegistry32, whitePNG: AssetRegistry32, lightSVG: AssetRegistry33, darkSVG: AssetRegistry34, whiteSVG: AssetRegistry34 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
  },
  hasMetadata: true
};
new Date("2026-07-10Z-07:00");
shims = shims_mod;
items[7] = obj17;
const obj19 = {
  type: PlatformTypes.REDDIT,
  name: "Reddit",
  color: shims.unsafe_getRawColor("PLATFORM_REDDIT"),
  icon: { lightPNG: AssetRegistry35, darkPNG: AssetRegistry35, whitePNG: AssetRegistry36, lightSVG: AssetRegistry37, darkSVG: AssetRegistry37, whiteSVG: AssetRegistry38 },
  enabled: true,
  domains: ["reddit.com"],
  getPlatformUserUrl(name) {
    return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
  },
  hasMetadata: true
};
({ lightPNG: AssetRegistry31, darkPNG: AssetRegistry32, whitePNG: AssetRegistry32, lightSVG: AssetRegistry33, darkSVG: AssetRegistry34, whiteSVG: AssetRegistry34 });
shims = shims_mod;
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: shims.unsafe_getRawColor("PLATFORM_FACEBOOK"), icon: { lightPNG: AssetRegistry39, darkPNG: AssetRegistry39, whitePNG: AssetRegistry40, lightSVG: AssetRegistry41, darkSVG: AssetRegistry41, whiteSVG: AssetRegistry42 }, domains: ["facebook.com"], enabled: true };
({ lightPNG: AssetRegistry35, darkPNG: AssetRegistry35, whitePNG: AssetRegistry36, lightSVG: AssetRegistry37, darkSVG: AssetRegistry37, whiteSVG: AssetRegistry38 });
shims = shims_mod;
items[9] = obj21;
const obj23 = {
  type: PlatformTypes.TWITTER_LEGACY,
  name: "Twitter",
  color: shims.unsafe_getRawColor("PLATFORM_TWITTER"),
  icon: { lightPNG: AssetRegistry43, darkPNG: AssetRegistry43, whitePNG: AssetRegistry44, lightSVG: AssetRegistry45, darkSVG: AssetRegistry45, whiteSVG: AssetRegistry46 },
  enabled: false,
  getPlatformUserUrl(name) {
    return "https://twitter.com/" + encodeURIComponent(name.name);
  },
  domains: ["twitter.com"],
  hasMetadata: true
};
({ lightPNG: AssetRegistry39, darkPNG: AssetRegistry39, whitePNG: AssetRegistry40, lightSVG: AssetRegistry41, darkSVG: AssetRegistry41, whiteSVG: AssetRegistry42 });
shims = shims_mod;
items[10] = obj23;
const obj25 = {
  type: PlatformTypes.TWITTER,
  name: "X",
  color: shims.unsafe_getRawColor("PLATFORM_TWITTER"),
  icon: { lightPNG: AssetRegistry47, darkPNG: AssetRegistry48, whitePNG: AssetRegistry49, lightSVG: AssetRegistry50, darkSVG: AssetRegistry51, whiteSVG: AssetRegistry52 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://x.com/" + encodeURIComponent(name.name);
  },
  domains: ["x.com"],
  hasMetadata: true
};
({ lightPNG: AssetRegistry43, darkPNG: AssetRegistry43, whitePNG: AssetRegistry44, lightSVG: AssetRegistry45, darkSVG: AssetRegistry45, whiteSVG: AssetRegistry46 });
shims = shims_mod;
items[11] = obj25;
const obj27 = {
  type: PlatformTypes.SPOTIFY,
  name: "Spotify",
  color: shims.unsafe_getRawColor("PLATFORM_SPOTIFY"),
  icon: { lightPNG: AssetRegistry53, darkPNG: AssetRegistry53, whitePNG: AssetRegistry54, lightSVG: AssetRegistry55, darkSVG: AssetRegistry55, whiteSVG: AssetRegistry56 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
  }
};
({ lightPNG: AssetRegistry47, darkPNG: AssetRegistry48, whitePNG: AssetRegistry49, lightSVG: AssetRegistry50, darkSVG: AssetRegistry51, whiteSVG: AssetRegistry52 });
shims = shims_mod;
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: shims.unsafe_getRawColor("PLATFORM_XBOX"), icon: { lightPNG: AssetRegistry57, darkPNG: AssetRegistry58, whitePNG: AssetRegistry58, lightSVG: AssetRegistry59, darkSVG: AssetRegistry60, whiteSVG: AssetRegistry60, customPNG: AssetRegistry61 }, enabled: true };
({ lightPNG: AssetRegistry53, darkPNG: AssetRegistry53, whitePNG: AssetRegistry54, lightSVG: AssetRegistry55, darkSVG: AssetRegistry55, whiteSVG: AssetRegistry56 });
shims = shims_mod;
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: shims.unsafe_getRawColor("PLATFORM_SAMSUNG"), icon: { lightPNG: AssetRegistry62, darkPNG: AssetRegistry62, whitePNG: AssetRegistry63, lightSVG: AssetRegistry64, darkSVG: AssetRegistry64, whiteSVG: AssetRegistry65 }, enabled: false };
({ lightPNG: AssetRegistry57, darkPNG: AssetRegistry58, whitePNG: AssetRegistry58, lightSVG: AssetRegistry59, darkSVG: AssetRegistry60, whiteSVG: AssetRegistry60, customPNG: AssetRegistry61 });
shims = shims_mod;
items[14] = obj31;
const obj33 = {
  type: PlatformTypes.GITHUB,
  name: "GitHub",
  color: shims.unsafe_getRawColor("PLATFORM_GITHUB"),
  icon: { lightPNG: AssetRegistry66, darkPNG: AssetRegistry67, whitePNG: AssetRegistry67, lightSVG: AssetRegistry68, darkSVG: AssetRegistry69, whiteSVG: AssetRegistry69 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://github.com/" + encodeURIComponent(name.name);
  },
  domains: ["github.com"]
};
({ lightPNG: AssetRegistry62, darkPNG: AssetRegistry62, whitePNG: AssetRegistry63, lightSVG: AssetRegistry64, darkSVG: AssetRegistry64, whiteSVG: AssetRegistry65 });
shims = shims_mod;
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: shims.unsafe_getRawColor("PLATFORM_PLAYSTATION"), icon: { lightPNG: AssetRegistry70, darkPNG: AssetRegistry71, whitePNG: AssetRegistry71, lightSVG: AssetRegistry72, darkSVG: AssetRegistry73, whiteSVG: AssetRegistry73 }, enabled: true };
({ lightPNG: AssetRegistry66, darkPNG: AssetRegistry67, whitePNG: AssetRegistry67, lightSVG: AssetRegistry68, darkSVG: AssetRegistry69, whiteSVG: AssetRegistry69 });
shims = shims_mod;
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: shims.unsafe_getRawColor("PLATFORM_PLAYSTATION"), icon: { lightPNG: AssetRegistry71, darkPNG: AssetRegistry70, whitePNG: AssetRegistry70, lightSVG: AssetRegistry73, darkSVG: AssetRegistry72, whiteSVG: AssetRegistry72 }, enabled: false };
({ lightPNG: AssetRegistry70, darkPNG: AssetRegistry71, whitePNG: AssetRegistry71, lightSVG: AssetRegistry72, darkSVG: AssetRegistry73, whiteSVG: AssetRegistry73 });
shims = shims_mod;
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: { lightPNG: AssetRegistry74, darkPNG: AssetRegistry75, whitePNG: AssetRegistry75, lightSVG: AssetRegistry76, darkSVG: AssetRegistry77, whiteSVG: AssetRegistry77 }, enabled: true };
({ lightPNG: AssetRegistry71, darkPNG: AssetRegistry70, whitePNG: AssetRegistry70, lightSVG: AssetRegistry73, darkSVG: AssetRegistry72, whiteSVG: AssetRegistry72 });
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: { lightPNG: AssetRegistry78, darkPNG: AssetRegistry78, whitePNG: AssetRegistry79, lightSVG: AssetRegistry80, darkSVG: AssetRegistry80, whiteSVG: AssetRegistry81, blackSVG: AssetRegistry82 }, enabled: true, migrationData: obj43 };
({ lightPNG: AssetRegistry74, darkPNG: AssetRegistry75, whitePNG: AssetRegistry75, lightSVG: AssetRegistry76, darkSVG: AssetRegistry77, whiteSVG: AssetRegistry77 });
obj43 = { replacedBy: ApplicationIdentityAppIds.RIOT_GAMES, helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking", deprecationDate: new Date("2026-07-10Z-07:00") };
({ lightPNG: AssetRegistry78, darkPNG: AssetRegistry78, whitePNG: AssetRegistry79, lightSVG: AssetRegistry80, darkSVG: AssetRegistry80, whiteSVG: AssetRegistry81, blackSVG: AssetRegistry82 });
items[19] = obj41;
const obj44 = {
  type: PlatformTypes.ROBLOX,
  name: "Roblox",
  icon: { lightPNG: AssetRegistry83, darkPNG: AssetRegistry84, whitePNG: AssetRegistry85, lightSVG: AssetRegistry86, darkSVG: AssetRegistry87, whiteSVG: AssetRegistry88 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
  }
};
new Date("2026-07-10Z-07:00");
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: { lightPNG: AssetRegistry89, darkPNG: AssetRegistry89, whitePNG: AssetRegistry90, lightSVG: AssetRegistry91, darkSVG: AssetRegistry91, whiteSVG: AssetRegistry92 }, enabled: true, hasMetadata: true };
({ lightPNG: AssetRegistry83, darkPNG: AssetRegistry84, whitePNG: AssetRegistry85, lightSVG: AssetRegistry86, darkSVG: AssetRegistry87, whiteSVG: AssetRegistry88 });
items[21] = obj46;
const obj48 = {
  type: PlatformTypes.EBAY,
  name: "eBay",
  icon: { lightPNG: AssetRegistry93, darkPNG: AssetRegistry93, whitePNG: AssetRegistry94, lightSVG: AssetRegistry95, darkSVG: AssetRegistry95, whiteSVG: AssetRegistry96 },
  enabled: true,
  hasMetadata: true,
  getPlatformUserUrl(name) {
    return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry89, darkPNG: AssetRegistry89, whitePNG: AssetRegistry90, lightSVG: AssetRegistry91, darkSVG: AssetRegistry91, whiteSVG: AssetRegistry92 });
items[22] = obj48;
const obj50 = {
  type: PlatformTypes.TIKTOK,
  name: "TikTok",
  icon: { lightPNG: AssetRegistry97, darkPNG: AssetRegistry98, whitePNG: AssetRegistry98, lightSVG: AssetRegistry99, darkSVG: AssetRegistry100, whiteSVG: AssetRegistry100 },
  enabled: false,
  hasMetadata: true,
  domains: ["tiktok.com"],
  getPlatformUserUrl(name) {
    return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry93, darkPNG: AssetRegistry93, whitePNG: AssetRegistry94, lightSVG: AssetRegistry95, darkSVG: AssetRegistry95, whiteSVG: AssetRegistry96 });
items[23] = obj50;
const obj52 = {
  type: PlatformTypes.INSTAGRAM,
  name: "Instagram",
  icon: { lightPNG: AssetRegistry101, darkPNG: AssetRegistry101, whitePNG: AssetRegistry102, lightSVG: AssetRegistry103, darkSVG: AssetRegistry103, whiteSVG: AssetRegistry104 },
  enabled: false,
  domains: ["instagram.com"],
  getPlatformUserUrl(name) {
    return "https://www.instagram.com/" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry97, darkPNG: AssetRegistry98, whitePNG: AssetRegistry98, lightSVG: AssetRegistry99, darkSVG: AssetRegistry100, whiteSVG: AssetRegistry100 });
items[24] = obj52;
const obj54 = {
  type: PlatformTypes.LETTERBOXD,
  name: "Letterboxd",
  icon: { lightPNG: AssetRegistry105, darkPNG: AssetRegistry106, whitePNG: AssetRegistry107, lightSVG: AssetRegistry108, darkSVG: AssetRegistry109, whiteSVG: AssetRegistry110 },
  enabled: true,
  domains: ["letterboxd.com"],
  getPlatformUserUrl(name) {
    return "https://letterboxd.com/" + encodeURIComponent(name.name) + "/";
  }
};
({ lightPNG: AssetRegistry101, darkPNG: AssetRegistry101, whitePNG: AssetRegistry102, lightSVG: AssetRegistry103, darkSVG: AssetRegistry103, whiteSVG: AssetRegistry104 });
items[25] = obj54;
const obj56 = {
  type: PlatformTypes.MASTODON,
  name: "Mastodon",
  icon: { lightPNG: AssetRegistry111, darkPNG: AssetRegistry111, whitePNG: AssetRegistry112, lightSVG: AssetRegistry113, darkSVG: AssetRegistry113, whiteSVG: AssetRegistry114 },
  enabled: false,
  getPlatformUserUrl(id) {
    return id.id;
  },
  isFederated: true,
  hasMetadata: true
};
({ lightPNG: AssetRegistry105, darkPNG: AssetRegistry106, whitePNG: AssetRegistry107, lightSVG: AssetRegistry108, darkSVG: AssetRegistry109, whiteSVG: AssetRegistry110 });
items[26] = obj56;
const obj58 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL"), icon: { lightPNG: AssetRegistry115, darkPNG: AssetRegistry115, whitePNG: AssetRegistry115, lightSVG: AssetRegistry116, darkSVG: AssetRegistry116, whiteSVG: AssetRegistry117 }, enabled: true };
({ lightPNG: AssetRegistry111, darkPNG: AssetRegistry111, whitePNG: AssetRegistry112, lightSVG: AssetRegistry113, darkSVG: AssetRegistry113, whiteSVG: AssetRegistry114 });
shims = shims_mod;
items[27] = obj58;
const obj60 = {
  type: PlatformTypes.DOMAIN,
  name: "Domain",
  icon: { lightPNG: AssetRegistry118, darkPNG: AssetRegistry119, whitePNG: AssetRegistry119, lightSVG: AssetRegistry120, darkSVG: AssetRegistry121, whiteSVG: AssetRegistry121 },
  getPlatformUserUrl(id) {
    return "https://" + id.id + "/";
  },
  enabled: true
};
({ lightPNG: AssetRegistry115, darkPNG: AssetRegistry115, whitePNG: AssetRegistry115, lightSVG: AssetRegistry116, darkSVG: AssetRegistry116, whiteSVG: AssetRegistry117 });
items[28] = obj60;
const obj62 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: { lightPNG: AssetRegistry122, darkPNG: AssetRegistry122, whitePNG: AssetRegistry122, lightSVG: AssetRegistry123, darkSVG: AssetRegistry123, whiteSVG: AssetRegistry123 }, enabled: true };
({ lightPNG: AssetRegistry118, darkPNG: AssetRegistry119, whitePNG: AssetRegistry119, lightSVG: AssetRegistry120, darkSVG: AssetRegistry121, whiteSVG: AssetRegistry121 });
items[29] = obj62;
const obj64 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: { lightPNG: AssetRegistry124, darkPNG: AssetRegistry125, whitePNG: AssetRegistry126, lightSVG: AssetRegistry127, darkSVG: AssetRegistry128, whiteSVG: AssetRegistry128 }, enabled: false };
({ lightPNG: AssetRegistry122, darkPNG: AssetRegistry122, whitePNG: AssetRegistry122, lightSVG: AssetRegistry123, darkSVG: AssetRegistry123, whiteSVG: AssetRegistry123 });
items[30] = obj64;
({ lightPNG: AssetRegistry124, darkPNG: AssetRegistry125, whitePNG: AssetRegistry126, lightSVG: AssetRegistry127, darkSVG: AssetRegistry128, whiteSVG: AssetRegistry128 });
let closure_3 = module_12.keyBy(items, "type");
let closure_4 = {};
let item = items.forEach((domains) => {
  let closure_0 = domains;
  domains = domains.domains;
  if (domains != null) {
    const item = domains.forEach((item) => {
      closure_4[item] = domains;
    });
  }
});
const obj66 = {
  get(arg0) {
    let tmp = closure_3[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const obj = URLUtilsDefault;
    const toURLSafeResult = obj.toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return closure_4[substr];
    }
  },
  isSupported(arg0) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(closure_3, arg0);
  },
  map(arg0) {
    return items.map(arg0);
  },
  filter(arg0) {
    const found = items.filter(arg0);
    const sorted = found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    return found;
  },
  find(cResult) {
    return items.find(cResult);
  }
};
const result = size.fileFinishedImporting("lib/Platforms.tsx");

export default obj66;
