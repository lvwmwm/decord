// Module ID: 8933
// Function ID: 70415
// Name: XboxLinkPreConnect
// Dependencies: []
// Exports: default

// Module 8933 (XboxLinkPreConnect)
let closure_3 = importAll(dependencyMap[0]);
const XboxLinkModalScenes = arg1(dependencyMap[1]).XboxLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ image: { aze: true, azj: true } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  let obj = arg1(dependencyMap[5]);
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
  const memo = React.useMemo(() => ({ uri: callback(closure_2[6]) }), []);
  obj = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image };
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.e/z3na);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.body = intl2.string(arg1(dependencyMap[8]).t.7tXu0i);
  return jsx(arg1(dependencyMap[7]).TwoWayLinkPreConnect, obj);
};
