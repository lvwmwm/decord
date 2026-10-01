// Module ID: 14226
// Function ID: 14227
// Name: PasskeyInitStep
// Dependencies: [32, 19, 17, 14214, 14215, 21, 4836, 576, 504, 14227, 4832, 1115, 5745, 7363, 4790, 4800, 14229, 1981, 9713, 5999, 5917, 14230, 1485, 6014, 6370, 6795, 8053, 2]
// Exports: default

// Module 14226 (PasskeyInitStep)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6014 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14214 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function CredentialList(navigation) {
  let _undefined;
  let c2;
  let c3;
  let intl;
  let intl2;
  let items1;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = navigation;
  const tmp2 = dependencyMap;
  let obj = navigation(504);
  let items = [WebAuthnStore];
  const credentials = obj.useStateFromStoresObject(items, () => {
    const obj = { credentials: credentials.getCredentials() };
    return obj;
  }).credentials;
  const tmp3 = closure_10();
  let closure_1 = tmp3;
  [c2, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (0 === credentials.length) {
    let obj2 = { style: tmp3.upsellContainer, children: items1 };
    items1 = [closure_8(tmp(14227).PasskeysSpotIllustration, { scale: 0.6 }), ];
    let obj3 = { variant: "text-md/normal", style: tmp3.upsellText, children: intl2.string(tmp(1115).t.FSNwFW) };
    const Text = tmp(4832).Text;
    intl2 = tmp(1115).intl;
    items1[1] = closure_8(Text, obj3);
    return closure_9(View, obj2);
  } else {
    let obj4 = {
      title: intl.string(tmp(1115).t["4RIqrQ"]),
      hasIcons: false,
      children: credentials.map((label) => {
          let ButtonGroup;
          let TrashIcon;
          let deleting;
          let formatResult;
          let intl;
          let intl2;
          let items;
          let obj2;
          let obj4;
          let setDeleting;
          let tmp2Result;
          let obj = { label: label.name, trailing: closure_1_9(ButtonGroup, obj2), subLabel: formatResult };
          const credential = label;
          const TableRow = navigation(loading[20]).TableRow;
          obj2 = { style: closure_1.iconButtonGroup, children: items };
          ButtonGroup = navigation(loading[12]).ButtonGroup;
          const obj3 = {
            variant: "secondary",
            icon: closure_1_8(TrashIcon, obj4),
            accessibilityLabel: intl.string(navigation(loading[11]).t.N86XcP),
            size: "sm",
            disabled: loading,
            loading,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { credential, deleting, setDeleting };
              return obj.openLazy(asyncRequire(14229, dependencyMap.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj2);
            }
          };
          const IconButton = navigation(loading[13]).IconButton;
          obj4 = { color: closure_1(loading[7]).colors.TEXT_FEEDBACK_CRITICAL };
          TrashIcon = navigation(loading[14]).TrashIcon;
          intl = navigation(loading[11]).intl;
          items = [closure_1_8(IconButton, obj3), ];
          const obj5 = {
            variant: "secondary",
            icon: closure_1_8(navigation(loading[18]).PencilIcon, {}),
            accessibilityLabel: intl2.string(navigation(loading[11]).t.bt75uw),
            size: "sm",
            disabled: loading,
            loading,
            onPress() {
              const obj = { credential };
              navigation.push(WebAuthnScreens.EDIT, obj);
            }
          };
          const IconButton2 = navigation(loading[13]).IconButton;
          intl2 = navigation(loading[11]).intl;
          items[1] = closure_1_8(IconButton2, obj5);
          formatResult = null;
          const tmp = closure_1_8;
          if (null != label.last_used) {
            const intl3 = tmp2(tmp3[11]).intl;
            const format = intl3.format;
            const obj6 = { lastUsed: tmp2Result.formatDate(label.last_used) };
            const v7JgxF5 = tmp2(tmp3[11]).t["7JgxF5"];
            tmp2Result = navigation(loading[21]);
            formatResult = format(v7JgxF5, obj6);
          }
          return tmp(TableRow, obj, label.id);
        })
    };
    const TableRowGroup = tmp(5999).TableRowGroup;
    intl = tmp(1115).intl;
    return closure_8(TableRowGroup, obj4);
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, upsellContainer: obj3, upsellText: obj4, iconButtonGroup: obj5, headerAddButton: { alignSelf: "center" } };
obj2 = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
obj5 = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_11 = { top: 12, bottom: 12, left: 12, right: 12 };
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  let hitSlop;
  let obj4;
  let obj5;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    navigation = undefined;
    let hasFetchedCredentials;
    let tmp = navigation;
    const tmp2 = hasFetchedCredentials;
    let obj = navigation(hasFetchedCredentials[22]);
    navigation = obj.useNavigation();
    const tmp5 = closure_10();
    let closure_1 = tmp5;
    const items = [WebAuthnStore];
    const obj2 = navigation(hasFetchedCredentials[8]);
    hasFetchedCredentials = obj2.useStateFromStoresObject(items, () => {
      const obj = { hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() };
      return obj;
    }).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = react.useEffect(() => {
      const tmp = hasFetchedCredentials;
      if (!tmp) {
        const obj = WebAuthnActionCreators;
        const webAuthnCredentials = obj.fetchWebAuthnCredentials();
      }
    }, items1);
    const items2 = [navigation, tmp5.headerAddButton];
    const layoutEffect = react.useLayoutEffect(() => {
      let headerAddButton;
      let obj = {
        headerRight() {
          let intl;
          if (navigation(hasFetchedCredentials[24]).hasWebAuthn) {
            const obj = {
              text: intl.string(navigation(hasFetchedCredentials[11]).t.OYkgVk),
              style: headerAddButton.headerAddButton,
              hitSlop,
              onPress() {
                  closure_1_0.push(constants.REGISTER);
                },
              foregroundRipple: true
            };
            const HeaderActionButton = tmp(tmp2[25]).HeaderActionButton;
            intl = tmp(tmp2[11]).intl;
            return closure_2_8(HeaderActionButton, obj);
          }
        }
      };
      navigation.setOptions(obj);
    }, items2);
    const obj3 = { children: closure_8(View, obj4) };
    obj4 = { style: tmp5.container, children: closure_8(CredentialList, obj5) };
    obj5 = { navigation };
    const Form = navigation(hasFetchedCredentials[26]).Form;
    return closure_8(Form, obj3);
  }
};
