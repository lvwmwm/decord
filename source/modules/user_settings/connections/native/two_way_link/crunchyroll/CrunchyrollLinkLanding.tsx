// Module ID: 8983
// Function ID: 70766
// Name: CrunchyrollLinkLanding
// Dependencies: []
// Exports: default

// Module 8983 (CrunchyrollLinkLanding)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).CrunchyrollLinkModalScenes;
({ HelpdeskArticles: closure_5, PlatformTypes: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ image: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = navigation(closure_2[5]).intl;
    obj.label = intl.string(navigation(closure_2[5]).t.2TXHQd);
    obj.icon = navigation(closure_2[6]).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  obj = { platformType: constants2.CRUNCHYROLL, img: importDefault(dependencyMap[9]), imgStyle: callback().image };
  const intl = arg1(dependencyMap[5]).intl;
  obj.headerConnect = intl.string(arg1(dependencyMap[5]).t.Da+3NJ);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.body = intl2.string(arg1(dependencyMap[5]).t.MaPpPL);
  const tmp = callback();
  obj.learnMoreLink = importDefault(dependencyMap[10]).getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(arg1(dependencyMap[8]).TwoWayLinkLanding, obj);
};
