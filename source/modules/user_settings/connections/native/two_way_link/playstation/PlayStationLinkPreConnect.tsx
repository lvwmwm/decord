// Module ID: 8968
// Function ID: 70717
// Name: PlayStationLinkPreConnect
// Dependencies: []
// Exports: PlayStationLinkPreConnect

// Module 8968 (PlayStationLinkPreConnect)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).PlayStationLinkModalScenes;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ image: { bhk: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008702820173914571, bic: 9126805519.375 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  let obj = arg1(dependencyMap[4]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = React.useMemo(() => ({ uri: callback(closure_2[5]) }), []);
  obj = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image };
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.6n+UPR);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.body = intl2.string(arg1(dependencyMap[7]).t.JaaqIf);
  return jsx(arg1(dependencyMap[6]).TwoWayLinkPreConnect, obj);
};
