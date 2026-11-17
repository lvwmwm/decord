// Module ID: 7619
// Function ID: 7620
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 7614, 1072, 7620, 21, 5310, 1502, 7475, 7621, 1113, 2]
// Exports: default

// Module 7619 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 7614 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 7620 */;
import AssetRegistryDefault from "AssetRegistry" /* 7621 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const redirectDestination = CrunchyrollConnectionConstants.CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  const obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(7475).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1113).t.siPkNp)} body={intl2.string(navigation(1113).t.oS4NEH)} redirectDestination={redirectDestination} />;
};
