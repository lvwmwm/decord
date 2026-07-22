// Module ID: 13521
// Function ID: 102568
// Name: CredentialList
// Dependencies: []
// Exports: default

// Module 13521 (CredentialList)
function CredentialList(navigation) {
  const arg1 = navigation.navigation;
  let importDefault;
  let closure_2;
  let callback;
  function credentialTrailer(label) {
    const navigation = label;
    let obj = { style: tmp.iconButtonGroup };
    obj = { variant: "secondary" };
    obj = { color: tmp(closure_2[7]).colors.TEXT_FEEDBACK_CRITICAL };
    obj.icon = callback(navigation(closure_2[14]).TrashIcon, obj);
    const intl = navigation(closure_2[11]).intl;
    obj.accessibilityLabel = intl.string(navigation(closure_2[11]).t.N86XcP);
    obj.size = "sm";
    obj.disabled = closure_2;
    obj.loading = closure_2;
    obj.onPress = function onPress() {
      let obj = callback(paths[15]);
      obj = { credential: arg0, deleting: paths, setDeleting: closure_3 };
      return obj.openLazy(arg0(paths[17])(paths[16], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
    };
    const items = [callback(navigation(closure_2[13]).IconButton, obj), ];
    const obj1 = { variant: "secondary", icon: callback(navigation(closure_2[18]).PencilIcon, {}) };
    const intl2 = navigation(closure_2[11]).intl;
    obj1.accessibilityLabel = intl2.string(navigation(closure_2[11]).t.bt75uw);
    obj1.size = "sm";
    obj1.disabled = closure_2;
    obj1.loading = closure_2;
    obj1.onPress = function onPress() {
      arg0.push(constants.EDIT, { credential: arg0 });
    };
    items[1] = callback(navigation(closure_2[13]).IconButton, obj1);
    obj.children = items;
    return callback2(navigation(closure_2[12]).ButtonGroup, obj);
  }
  let obj = arg1(closure_2[8]);
  const items = [closure_7];
  const credentials = obj.useStateFromStoresObject(items, () => ({ credentials: credentials.getCredentials() })).credentials;
  const tmp = callback4();
  importDefault = tmp;
  const tmp2 = callback(credentialTrailer.useState(false), 2);
  closure_2 = tmp2[0];
  callback = tmp2[1];
  if (0 === credentials.length) {
    obj = { style: tmp.upsellContainer };
    obj = { source: importDefault(closure_2[9]), style: tmp.keychainImage };
    const items1 = [callback2(closure_5, obj), ];
    const obj1 = { variant: "text-md/normal", style: tmp.upsellText };
    const intl2 = arg1(closure_2[11]).intl;
    obj1.children = intl2.string(arg1(closure_2[11]).t.FSNwFW);
    items1[1] = callback2(arg1(closure_2[10]).Text, obj1);
    obj.children = items1;
    return callback3(closure_6, obj);
  } else {
    const obj2 = {};
    const intl = arg1(closure_2[11]).intl;
    obj2.title = intl.string(arg1(closure_2[11]).t.4RIqrQ);
    obj2.hasIcons = false;
    obj2.children = credentials.map((label) => {
      let obj = { label: label.name, trailing: credentialTrailer(label) };
      let formatResult = null;
      if (null != label.last_used) {
        const intl = navigation(closure_2[11]).intl;
        obj = { lastUsed: navigation(closure_2[21]).formatDate(label.last_used) };
        formatResult = intl.format(navigation(closure_2[11]).t.7JgxF5, obj);
        const obj3 = navigation(closure_2[21]);
      }
      obj.subLabel = formatResult;
      return closure_9(navigation(closure_2[20]).TableRow, obj, label.id);
    });
    return callback2(arg1(closure_2[19]).TableRowGroup, obj2);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const WebAuthnScreens = arg1(dependencyMap[4]).WebAuthnScreens;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginLeft: importDefault(dependencyMap[7]).space.PX_16, marginRight: importDefault(dependencyMap[7]).space.PX_16, marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.upsellContainer = { marginTop: importDefault(dependencyMap[7]).space.PX_16, alignItems: "center" };
const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_16, alignItems: "center" };
obj.upsellText = { color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE, marginTop: importDefault(dependencyMap[7]).space.PX_16, textAlign: "center" };
const obj2 = { color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE, marginTop: importDefault(dependencyMap[7]).space.PX_16, textAlign: "center" };
obj.iconButtonGroup = { flexDirection: "row", paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
obj.keychainImage = {};
let closure_11 = obj.createStyles(obj);
const obj3 = { flexDirection: "row", paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let arg1;
    let importDefault;
    let obj = arg1(dependencyMap[22]);
    const navigation = obj.useNavigation();
    arg1 = navigation;
    let obj1 = arg1(dependencyMap[8]);
    const items = [closure_7];
    const hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({ hasFetchedCredentials: closure_7.hasFetchedCredentials() })).hasFetchedCredentials;
    importDefault = hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = React.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = navigation(closure_2[23]).fetchWebAuthnCredentials();
        const obj = navigation(closure_2[23]);
      }
    }, items1);
    const items2 = [navigation];
    const layoutEffect = React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (callback(closure_2[24]).hasWebAuthn) {
            const obj = {};
            const intl = callback(closure_2[11]).intl;
            obj.text = intl.string(callback(closure_2[11]).t.OYkgVk);
            obj.onPress = function onPress() {

            };
            obj.foregroundRipple = true;
            return callback2(callback(closure_2[25]).HeaderActionButton, obj);
          }
        }
      });
    }, items2);
    obj = {};
    obj = { style: callback4().container };
    obj1 = { navigation };
    obj.children = callback2(CredentialList, obj1);
    obj.children = callback2(closure_6, obj);
    return callback2(arg1(dependencyMap[26]).Form, obj);
  }
};
