// Module ID: 8576
// Function ID: 8577
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 8573, 1074, 7786, 21, 4836, 1485, 8542, 8577, 1115, 2]
// Exports: default

// Module 8576 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 7786 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 8573 */;
import AssetRegistryDefault from "AssetRegistry" /* 8577 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  const obj = navigation(1485);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(8542).TwoWayLinkPreConnect;
  const intl = navigation(1115).intl;
  const intl2 = navigation(1115).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1115).t.siPkNp)} body={intl2.string(navigation(1115).t.oS4NEH)} redirectDestination={redirectDestination} />;
};
