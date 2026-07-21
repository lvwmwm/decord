// Module ID: 8931
// Function ID: 70423
// Name: XboxLinkLanding
// Dependencies: []
// Exports: default

// Module 8931 (XboxLinkLanding)
let closure_3 = importAll(dependencyMap[0]);
const XboxLinkModalScenes = arg1(dependencyMap[1]).XboxLinkModalScenes;
({ HelpdeskArticles: closure_5, PlatformTypes: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ image: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp = callback();
  const articleURL = importDefault(dependencyMap[11]).getArticleURL(constants.XBOX_CONNECTION);
  const intl = arg1(dependencyMap[5]).intl;
  const obj2 = importDefault(dependencyMap[11]);
  const items = [navigation];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = navigation(closure_2[5]).intl;
    obj.label = intl.string(navigation(closure_2[5]).t.ihQXsb);
    obj.icon = navigation(closure_2[6]).VoiceNormalIcon;
    const items = [obj, , , ];
    obj = {};
    const intl2 = navigation(closure_2[5]).intl;
    obj.label = intl2.string(navigation(closure_2[5]).t.Xt1n4P);
    obj.icon = navigation(closure_2[7]).ScreenStreamIcon;
    items[1] = obj;
    obj = {};
    const intl3 = navigation(closure_2[5]).intl;
    obj.label = intl3.string(navigation(closure_2[5]).t.xqVY3p);
    obj.icon = navigation(closure_2[8]).GroupIcon;
    items[2] = obj;
    const obj1 = {};
    const intl4 = navigation(closure_2[5]).intl;
    obj1.label = intl4.string(navigation(closure_2[5]).t.iQsKVW);
    obj1.icon = navigation(closure_2[9]).GameControllerIcon;
    items[3] = obj1;
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(closure_2[12]) }), []);
  obj = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.headerConnect = intl2.string(arg1(dependencyMap[5]).t.m8aahn);
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.headerReconnect = intl3.string(arg1(dependencyMap[5]).t.z3rAhq);
  obj.body = intl.format(arg1(dependencyMap[5]).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(arg1(dependencyMap[13]).TwoWayLinkLanding, obj);
};
