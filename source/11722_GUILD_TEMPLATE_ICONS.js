// Module ID: 11722
// Function ID: 91073
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: []

// Module 11722 (GUILD_TEMPLATE_ICONS)
let obj = { CREATE: importDefault(dependencyMap[0]), GAMING: importDefault(dependencyMap[1]), FRIENDS: importDefault(dependencyMap[2]), STUDY: importDefault(dependencyMap[3]), CLUBS: importDefault(dependencyMap[4]), CREATORS: importDefault(dependencyMap[5]), LOCAL_COMMUNITY: importDefault(dependencyMap[6]), SCHOOL_CLUB: importDefault(dependencyMap[4]) };
obj = { CREATE: require(dependencyMap[7]).PencilIllocon, GAMING: require(dependencyMap[7]).ControllerIllocon, FRIENDS: require(dependencyMap[7]).HeartIllocon, STUDY: require(dependencyMap[7]).AppleIllocon, CLUBS: require(dependencyMap[7]).BookIllocon, CREATORS: require(dependencyMap[7]).PaintIllocon, LOCAL_COMMUNITY: require(dependencyMap[7]).LeafIllocon, SCHOOL_CLUB: require(dependencyMap[7]).BookIllocon };
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
