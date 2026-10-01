// Module ID: 8565
// Function ID: 8566
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 8562, 21, 4836, 1485, 8566, 8542, 1115, 2]
// Exports: PlayStationLinkPreConnect

// Module 8565 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8562 */;
import _modDef8566 from "module_8566" /* 8566 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_6();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef8566 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(8542).TwoWayLinkPreConnect;
  const intl = navigation(1115).intl;
  const intl2 = navigation(1115).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1115).t["6n+UPR"])} body={intl2.string(navigation(1115).t.JaaqIf)} />;
};
