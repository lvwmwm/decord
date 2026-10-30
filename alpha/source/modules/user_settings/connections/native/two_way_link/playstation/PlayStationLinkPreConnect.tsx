// Module ID: 14589
// Function ID: 14590
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 14586, 21, 5009, 1498, 14590, 9714, 1114, 2]
// Exports: PlayStationLinkPreConnect

// Module 14589 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 14586 */;
import _modDef14590 from "module_14590" /* 14590 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export function PlayStationLinkPreConnect(platformType) {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_6();
  let obj = navigation(1498);
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
    const obj = { uri: _modDef14590 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(9714).TwoWayLinkPreConnect;
  const intl = navigation(1114).intl;
  const intl2 = navigation(1114).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1114).t["6n+UPR"])} body={intl2.string(navigation(1114).t.JaaqIf)} />;
}
