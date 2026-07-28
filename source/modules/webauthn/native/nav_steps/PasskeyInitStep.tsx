// Module ID: 13742
// Function ID: 105353
// Name: CredentialList
// Dependencies: [57, 31, 27, 13730, 13731, 33, 4165, 689, 566, 13732, 4161, 1212, 5000, 6661, 4124, 4133, 13743, 1935, 9078, 5536, 5198, 13745, 1456, 5627, 9175, 6731, 7611, 2]
// Exports: default

// Module 13742 (CredentialList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function CredentialList(navigation) {
  navigation = navigation.navigation;
  let importDefault;
  let dependencyMap;
  let callback;
  function credentialTrailer(label) {
    let closure_0 = label;
    let obj = { style: _undefined.iconButtonGroup };
    obj = { variant: "secondary" };
    obj = { color: _undefined(689).colors.TEXT_FEEDBACK_CRITICAL };
    obj.icon = outer1_9(navigation(4124).TrashIcon, obj);
    const intl = navigation(1212).intl;
    obj.accessibilityLabel = intl.string(navigation(1212).t.N86XcP);
    obj.size = "sm";
    obj.disabled = dependencyMap;
    obj.loading = dependencyMap;
    obj.onPress = function onPress() {
      let obj = callback(paths[15]);
      obj = { credential: closure_0, deleting: outer1_2, setDeleting: outer1_3 };
      return obj.openLazy(navigation(paths[17])(paths[16], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
    };
    const items = [outer1_9(navigation(6661).IconButton, obj), ];
    const obj1 = { variant: "secondary", icon: outer1_9(navigation(9078).PencilIcon, {}) };
    const intl2 = navigation(1212).intl;
    obj1.accessibilityLabel = intl2.string(navigation(1212).t.bt75uw);
    obj1.size = "sm";
    obj1.disabled = dependencyMap;
    obj1.loading = dependencyMap;
    obj1.onPress = function onPress() {
      label.push(outer2_8.EDIT, { credential: label });
    };
    items[1] = outer1_9(navigation(6661).IconButton, obj1);
    obj.children = items;
    return outer1_10(navigation(5000).ButtonGroup, obj);
  }
  let obj = navigation(566);
  let items = [_isNativeReflectConstruct];
  const credentials = obj.useStateFromStoresObject(items, () => ({ credentials: outer1_7.getCredentials() })).credentials;
  const tmp = _createForOfIteratorHelperLoose();
  importDefault = tmp;
  const tmp2 = callback(credentialTrailer.useState(false), 2);
  dependencyMap = tmp2[0];
  callback = tmp2[1];
  if (0 === credentials.length) {
    obj = { style: tmp.upsellContainer };
    obj = { source: importDefault(13732), style: tmp.keychainImage };
    const items1 = [callback2(closure_5, obj), ];
    let obj1 = { variant: "text-md/normal", style: tmp.upsellText };
    let intl2 = navigation(1212).intl;
    obj1.children = intl2.string(navigation(1212).t.FSNwFW);
    items1[1] = callback2(navigation(4161).Text, obj1);
    obj.children = items1;
    return callback3(closure_6, obj);
  } else {
    const obj2 = {};
    let intl = navigation(1212).intl;
    obj2.title = intl.string(navigation(1212).t["4RIqrQ"]);
    obj2.hasIcons = false;
    obj2.children = credentials.map((label) => {
      let obj = { label: label.name, trailing: credentialTrailer(label) };
      let formatResult = null;
      if (null != label.last_used) {
        const intl = navigation(1212).intl;
        obj = { lastUsed: navigation(13745).formatDate(label.last_used) };
        formatResult = intl.format(navigation(1212).t["7JgxF5"], obj);
        const obj3 = navigation(13745);
      }
      obj.subLabel = formatResult;
      return outer1_9(navigation(5198).TableRow, obj, label.id);
    });
    return callback2(navigation(5536).TableRowGroup, obj2);
  }
}
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginRight: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.upsellContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.upsellText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.iconButtonGroup = { flexDirection: "row", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.keychainImage = { height: 125, width: 161 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { flexDirection: "row", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let navigation;
    let hasFetchedCredentials;
    let obj = navigation(1456);
    navigation = obj.useNavigation();
    let obj1 = navigation(566);
    const items = [_isNativeReflectConstruct];
    hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({ hasFetchedCredentials: outer1_7.hasFetchedCredentials() })).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = React.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = navigation(outer1_2[23]).fetchWebAuthnCredentials();
        const obj = navigation(outer1_2[23]);
      }
    }, items1);
    const items2 = [navigation];
    const layoutEffect = React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (navigation(outer2_2[24]).hasWebAuthn) {
            const obj = {};
            const intl = navigation(outer2_2[11]).intl;
            obj.text = intl.string(navigation(outer2_2[11]).t.OYkgVk);
            obj.onPress = function onPress() {
              outer2_0.push(outer3_8.REGISTER);
            };
            obj.foregroundRipple = true;
            return outer2_9(navigation(outer2_2[25]).HeaderActionButton, obj);
          }
        }
      });
    }, items2);
    obj = {};
    obj = { style: _createForOfIteratorHelperLoose().container };
    obj1 = { navigation };
    obj.children = callback2(CredentialList, obj1);
    obj.children = callback2(closure_6, obj);
    return callback2(navigation(7611).Form, obj);
  }
};
