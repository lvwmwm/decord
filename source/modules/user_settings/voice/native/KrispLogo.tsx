// Module ID: 10717
// Function ID: 83412
// Name: handleKrispLinkPressed
// Dependencies: []
// Exports: default

// Module 10717 (handleKrispLinkPressed)
function handleKrispLinkPressed() {
  let obj = importDefault(dependencyMap[5]);
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.text = intl.string(arg1(dependencyMap[7]).t.hvVgAZ);
  obj.href = articleURL;
  obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  obj.location = obj;
  importDefault(dependencyMap[6]).track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj);
  const obj2 = importDefault(dependencyMap[6]);
  importDefault(dependencyMap[8]).openURL(articleURL);
}
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4, Pressable: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9, HelpdeskArticles: closure_10 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[4]));
let closure_13 = { logo: { ti: 15184817064634068000000000000000000000000000000000000000000000000000000000000000000, scales: NaN, flexDirection: 15185413057925726000000000000000000000000000000000000000000000000000000000000000000 }, detailsView: { getAsyncContextStrategy: "y", videoBackground: "isArray", numUses: "accessible", cardGraphic: "hasDiversityParent", GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED: "IconComponent" } };
const tmp5 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj1 = arg1(dependencyMap[10]);
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp2Result = tmp2(tmp3[11]);
  } else {
    tmp2Result = tmp2(tmp3[12]);
  }
  obj = { style: closure_13.detailsView };
  obj = { style: closure_13.logo, source: tmp2Result };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.vFiCSx);
  const items1 = [callback(closure_3, obj), ];
  obj1 = { accessibilityRole: "link" };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[7]).t.hvVgAZ);
  obj1.onPress = handleKrispLinkPressed;
  const obj2 = { cachedAt: "<string:3344105473>", edpbxy: "<string:3465102384>" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj2.children = intl3.string(arg1(dependencyMap[7]).t.hvVgAZ);
  obj1.children = callback(arg1(dependencyMap[13]).Text, obj2);
  items1[1] = callback(closure_5, obj1);
  obj.children = items1;
  return callback2(closure_4, obj);
};
export { handleKrispLinkPressed };
