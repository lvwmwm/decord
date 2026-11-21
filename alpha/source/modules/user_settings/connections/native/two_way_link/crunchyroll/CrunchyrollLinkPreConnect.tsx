// Module ID: 7211
// Function ID: 7212
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 7206, 1071, 7212, 21, 4913, 1500, 7067, 7213, 1112, 2]
// Exports: default

// Module 7211 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 7206 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 7212 */;
import AssetRegistryDefault from "AssetRegistry" /* 7213 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  const obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(7067).TwoWayLinkPreConnect;
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1112).t.siPkNp)} body={intl2.string(navigation(1112).t.oS4NEH)} redirectDestination={redirectDestination} />;
};
