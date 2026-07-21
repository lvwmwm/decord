// Module ID: 8966
// Function ID: 70711
// Name: PlayStationLinkLanding
// Dependencies: []
// Exports: PlayStationLinkLanding

// Module 8966 (PlayStationLinkLanding)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).PlayStationLinkModalScenes;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ image: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp = callback();
  const articleURL = importDefault(dependencyMap[9]).getArticleURL(HelpdeskArticles.PS_CONNECTION);
  const intl = arg1(dependencyMap[5]).intl;
  const obj2 = importDefault(dependencyMap[9]);
  const items = [navigation];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = navigation(closure_2[5]).intl;
    obj.label = intl.string(navigation(closure_2[5]).t.+eJP7o);
    const intl2 = navigation(closure_2[5]).intl;
    obj.subLabel = intl2.string(navigation(closure_2[5]).t.+0VIUh);
    obj.icon = navigation(closure_2[6]).VoiceNormalIcon;
    const items = [obj, ];
    obj = {};
    const intl3 = navigation(closure_2[5]).intl;
    obj.label = intl3.string(navigation(closure_2[5]).t.ZH4QFa);
    obj.icon = navigation(closure_2[7]).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(closure_2[10]) }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.headerConnect = intl2.string(arg1(dependencyMap[5]).t.xAWHOy);
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.headerReconnect = intl3.string(arg1(dependencyMap[5]).t.ZJ/vBh);
  obj.body = intl.format(arg1(dependencyMap[5]).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(arg1(dependencyMap[11]).TwoWayLinkLanding, obj);
};
