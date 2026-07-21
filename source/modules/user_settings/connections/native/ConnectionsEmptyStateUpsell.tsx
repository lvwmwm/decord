// Module ID: 13739
// Function ID: 103905
// Name: EmptyStateCard
// Dependencies: []
// Exports: default

// Module 13739 (EmptyStateCard)
function EmptyStateCard(platform) {
  platform = platform.platform;
  const arg1 = platform;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[6])();
  const importDefault = tmp2;
  const items = [platform];
  const callback = React.useCallback(() => {
    let obj = { platformType: platform.type, location: constants.CONNECTIONS_EMPTY_STATE };
    tmp2(connectionBackgroundColor[7])(obj);
    obj = { platformType: platform.type };
    const result = platform(connectionBackgroundColor[8]).trackEmptyStateCardClicked(obj);
  }, items);
  let obj = arg1(dependencyMap[9]);
  const connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
  const dependencyMap = connectionBackgroundColor;
  const items1 = [connectionBackgroundColor, platform.icon.darkPNG, platform.icon.lightPNG, platform.icon.whitePNG, tmp2];
  const memo = React.useMemo(() => {
    if (null != connectionBackgroundColor) {
      let whitePNG = platform.icon.whitePNG;
    } else {
      const icon = platform.icon;
      whitePNG = platform(connectionBackgroundColor[11]).isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG;
      const obj2 = platform(connectionBackgroundColor[11]);
    }
    return platform(connectionBackgroundColor[10]).makeSource(whitePNG);
  }, items1);
  obj = { onPress: callback, style: tmp.card, border: "strong" };
  obj = {};
  const items2 = [tmp.iconContainer, ];
  let tmp9 = null != platform.color;
  if (tmp9) {
    const obj1 = { backgroundColor: connectionBackgroundColor };
    tmp9 = obj1;
  }
  items2[1] = tmp9;
  obj.style = items2;
  obj.children = callback(arg1(dependencyMap[13]).Icon, { style: tmp.icon, source: memo, resizeMode: "contain", disableColor: true, accessibilityLabel: platform.name });
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[12]).Card, obj);
}
function OtherConnectionsCard(count) {
  const callback = React.useCallback(() => {
    callback2(paths[14]).openLazy(callback(paths[16])(paths[15], paths.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: callback3().card, border: "strong" };
  obj = { children: "+" + count.count };
  obj.children = callback(arg1(dependencyMap[17]).Text, obj);
  return callback(arg1(dependencyMap[12]).Card, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticsLocations = arg1(dependencyMap[2]).AnalyticsLocations;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = { container: { -1034713870: null, -421288570: null }, content: {}, card: {}, textContainer: { marginTop: 32 }, text: { textAlign: "center" } };
  obj = { borderRadius: importDefault(dependencyMap[5]).radii.round };
  obj.iconContainer = obj;
  obj.icon = {};
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[18]);
  const emptyStatePlatforms = obj.useEmptyStatePlatforms();
  const arg1 = emptyStatePlatforms;
  const items = [emptyStatePlatforms];
  const memo = React.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = React.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  obj = {};
  const items2 = [tmp.container, ];
  obj = { paddingBottom: importDefault(dependencyMap[19])().bottom };
  items2[1] = obj;
  obj.style = items2;
  const obj1 = { style: tmp.content };
  const obj2 = { <string:3747870501>: "CountryCodesSets", <string:726980327>: "R/FK4A", <string:1299923571>: "construct", style: tmp.textContainer };
  const obj3 = { paused: 1090519040, disableFocus: 269484, preventsDisplaySleepDuringVideoPlayback: 104612097, children: memo.map((platform) => callback(closure_9, { platform }, platform.type)) };
  const items3 = [callback(arg1(dependencyMap[20]).Stack, obj3), ];
  const obj4 = { paused: 1090519040, disableFocus: 269484, preventsDisplaySleepDuringVideoPlayback: 104612097 };
  const items4 = [memo1.map((platform) => callback(closure_9, { platform }, platform.type)), callback(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 })];
  obj4.children = items4;
  items3[1] = callback2(arg1(dependencyMap[20]).Stack, obj4);
  obj2.children = items3;
  const items5 = [callback2(arg1(dependencyMap[20]).Stack, obj2), ];
  const obj6 = { <string:2572247649>: null, <string:1364418988>: null, style: tmp.textContainer };
  const obj7 = { style: tmp.text };
  const intl = arg1(dependencyMap[21]).intl;
  obj7.children = intl.string(arg1(dependencyMap[21]).t.JlrHXb);
  const items6 = [callback(arg1(dependencyMap[17]).Text, obj7), ];
  const obj8 = { style: tmp.text };
  const intl2 = arg1(dependencyMap[21]).intl;
  obj8.children = intl2.string(arg1(dependencyMap[21]).t.XijaQP);
  items6[1] = callback(arg1(dependencyMap[17]).Text, obj8);
  obj6.children = items6;
  items5[1] = callback2(arg1(dependencyMap[20]).Stack, obj6);
  obj1.children = items5;
  obj.children = callback2(View, obj1);
  return callback(View, obj);
};
