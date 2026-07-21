// Module ID: 4017
// Function ID: 33430
// Name: NewGamesCoachmarkContent
// Dependencies: []
// Exports: GAME_SERVER_SURVEY_URL

// Module 4017 (NewGamesCoachmarkContent)
let closure_0 = importDefault(dependencyMap[1]);
let obj = { SELECT_GAME: "select-game", SERVER_SETTINGS: "server-settings" };
obj = { type: "go-to-step", step: obj.SERVER_SETTINGS };
obj = { type: "go-to-step", step: obj.SELECT_GAME };
let str = "1425215263548117002";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window = window;
  let str2 = "1415025086791942144";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str2 = "1415044199572832256";
  }
  str = str2;
}
let str4 = "1486428380437020672";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str4 = "1361763069696675961";
}
let str5 = "1402418491272986635";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window2 = window;
  let str6 = "1";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str6 = "356875570916753438";
  }
  str5 = str6;
}
let str8 = "1458530944955973852";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window3 = window;
  let str9 = "2";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str9 = "1458563423670501376";
  }
  str8 = str9;
}
class NewGamesCoachmarkContent {
  constructor() {
    tmp = closure_0(this, NewGamesCoachmarkContent);
    return;
  }
}
const importDefaultResultResult = importDefault(dependencyMap[0])(NewGamesCoachmarkContent);
let str11 = "1497097140001046528";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str11 = "1497100850261131334";
}
importDefaultResultResult.FEATURED_PRODUCT_ID = str11;
let str12 = "1497095960202051584";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str12 = "1440133627899023452";
}
importDefaultResultResult.FEATURED_GAME_ID = str12;
importDefaultResultResult.FEATURED_GAME_NAME = "Windrose";
importDefaultResultResult.SECOND_GAME_NAME = "Factorio";
importDefaultResultResult.THIRD_GAME_NAME = "V Rising";
const obj1 = {};
let str13 = "https://discord.shockbyte.com/support";
if (window.GLOBAL_ENV.RELEASE_CHANNEL === arg1(dependencyMap[2]).Environments.STAGING) {
  str13 = "https://purple-prod.shockbyte.dev/support";
}
obj1[arg1(dependencyMap[3]).GameServerProviderType.SHOCKBYTE] = str13;
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/game_server/GameServerConstants.tsx");

export const GameServerSetupStep = obj;
export const GAME_SERVER_DEFAULT_STEP_CONFIG = { steps: { [obj.SELECT_GAME]: { onBack: { type: "close" }, onNext: obj }, [obj.SERVER_SETTINGS]: { onBack: obj, onNext: { type: "save" } } } };
export const GAME_SERVER_SLIDE_PADDING = 24;
export const GAME_SERVER_SLIDE_WIDTH = 680;
export const GAME_SERVER_SLIDE_CONTENT_WIDTH = 632;
export const GAME_SERVER_MAX_INSTANCES = 10;
export const GAME_SERVER_MAX_NAME_LENGTH = 32;
export const GAME_SERVER_MIN_DELAY_TIME_MS = 1000;
export const GAME_SERVER_COLLECTION_ID = str;
export const RUNESCAPE_GAME_ID = str4;
export const MINECRAFT_GAME_ID = str5;
export const HYTALE_GAME_ID = str8;
export const NewGamesCoachmarkContent = importDefaultResultResult;
export const GameServerGameProvider = { SHOCKBYTE: 0, [0]: "SHOCKBYTE" };
export const GAME_SERVER_SUPPORT_URLS = obj1;
export const GAME_SERVER_TOS = { [arg1(dependencyMap[3]).GameServerProviderType.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" };
export const GAME_SERVER_SURVEY_URL = (arg0, arg1) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=" + arg0 + "&guild_id=" + arg1;
export const GAME_SERVER_POWERUP_SKU_ID = "0";
