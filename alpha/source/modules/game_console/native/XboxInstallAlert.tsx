// Module ID: 11954
// Function ID: 11955
// Name: XboxInstallAlert
// Dependencies: [19, 9717, 21, 5009, 575, 6025, 1114, 1188, 11955, 1376, 5704, 2]
// Exports: default

// Module 11954 (XboxInstallAlert)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import LinkingDefault from "Linking" /* 5704 */;
import AlertDefault from "Alert" /* 6025 */;
import AssetRegistryDefault from "AssetRegistry" /* 11955 */;
import react from "react" /* 19 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9717 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let size;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = Fragment.jsx;
let obj = { externalLinkIcon: size };
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  let closure_0;
  _require = closure_6();
  AlertDefault;
  const merged = Object.assign(arg0);
  const intl = require("intl").intl;
  const intl2 = require("intl").intl;
  const intl3 = require("intl").intl;
  const intl4 = require("intl").intl;
  return <tmp title={intl.string(require("intl").t["12Kx2v"])} body={intl2.string(require("intl").t.msZW3j)} confirmText={intl3.string(require("intl").t["n+VrqG"])} cancelText={intl4.string(require("intl").t.kYaBOg)} fillCancelText renderConfirmRightIcon={function renderConfirmRightIcon() {
    const Icon = native.Icon;
    return <Icon source={AssetRegistryDefault} style={closure_0.externalLinkIcon} />;
  }} onConfirm={function onConfirm() {
    const obj = closure_0(dependencyMap[9]);
    const isAndroidResult = obj.isAndroid();
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  }} />;
};
