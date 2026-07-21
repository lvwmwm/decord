// Module ID: 8985
// Function ID: 70782
// Name: CrunchyrollLinkPreConnect
// Dependencies: []
// Exports: default

// Module 8985 (CrunchyrollLinkPreConnect)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).CrunchyrollLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
let closure_6 = arg1(dependencyMap[3]).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ image: { "Null": 1665208787, "Null": 1912603216 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: importDefault(dependencyMap[8]), imgStyle: callback().image };
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.siPkNp);
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.body = intl2.string(arg1(dependencyMap[9]).t.oS4NEH);
  obj.redirectDestination = closure_6;
  return jsx(arg1(dependencyMap[7]).TwoWayLinkPreConnect, obj);
};
