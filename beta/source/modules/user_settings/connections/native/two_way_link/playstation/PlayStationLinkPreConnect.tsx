// Module ID: 7596
// Function ID: 7597
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 7593, 21, 5306, 1502, 7597, 7465, 1113, 2]
// Exports: PlayStationLinkPreConnect

// Module 7596 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7593 */;
import _modDef7597 from "module_7597" /* 7597 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export function PlayStationLinkPreConnect(arg0) {
  let autoStart;
  let platformType;
  navigation = undefined;
  ({ platformType, autoStart } = arg0);
  const tmp = closure_6();
  let obj = navigation(1502);
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
    const obj = { uri: _modDef7597 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(7465).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1113).t["6n+UPR"])} body={intl2.string(navigation(1113).t.JaaqIf)} autoStart={autoStart} />;
}
