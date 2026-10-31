// Module ID: 16665
// Function ID: 16666
// Name: PasskeyInitStep
// Dependencies: [5, 32, 19, 17, 16568, 1072, 21, 5014, 575, 504, 16666, 5624, 1113, 6767, 8028, 5738, 16658, 5958, 1187, 16670, 5258, 16671, 1994, 10232, 7060, 6975, 16672, 1497, 6748, 7118, 7558, 8177, 2]
// Exports: default

// Module 16665 (PasskeyInitStep)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6748 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 16568 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, deleting, dependencyMap, setDeleting;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
function CredentialList(navigation) {
  let _undefined;
  let _undefined2;
  let c2;
  let c3;
  let intl;
  let intl2;
  let items1;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  c3 = undefined;
  let tmp = navigation;
  const tmp2 = dependencyMap;
  let obj = navigation(504);
  let items = [WebAuthnStore];
  const credentials = obj.useStateFromStoresObject(items, () => {
    const obj = { credentials: credentials.getCredentials() };
    return obj;
  }).credentials;
  let tmp3 = closure_11();
  let closure_1 = tmp3;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [c2, c3] = tmp4;
  if (0 === credentials.length) {
    let tmp6 = closure_10;
    let tmp7 = View;
    let obj2 = { style: tmp3.upsellContainer, children: items1 };
    let tmp8 = closure_9;
    items1 = [closure_9(tmp(16666).PasskeysSpotIllustration, { scale: 0.6 }), ];
    let obj3 = { variant: "text-md/normal", style: tmp3.upsellText, children: intl2.string(tmp(1113).t.FSNwFW) };
    const Text = tmp(5624).Text;
    intl2 = tmp(1113).intl;
    items1[1] = closure_9(Text, obj3);
    return closure_10(View, obj2);
  } else {
    let tmp5 = closure_9;
    let obj4 = {
      title: intl.string(tmp(1113).t["4RIqrQ"]),
      hasIcons: false,
      children: credentials.map((label) => {
          let ButtonGroup;
          let TrashIcon;
          let formatResult;
          let intl;
          let intl2;
          let items;
          let obj2;
          let obj4;
          let tmp2Result;
          const tmp3 = loading;
          let tmp = closure_1_9;
          let obj = { label: label.name, trailing: closure_1_10(ButtonGroup, obj2), subLabel: formatResult };
          const credential = label;
          const TableRow = navigation(loading[25]).TableRow;
          obj2 = { style: closure_1.iconButtonGroup, children: items };
          ButtonGroup = navigation(loading[13]).ButtonGroup;
          let obj3 = {
            variant: "secondary",
            icon: closure_1_9(TrashIcon, obj4),
            accessibilityLabel: intl.string(navigation(loading[12]).t.N86XcP),
            size: "sm",
            disabled: loading,
            loading,
            onPress: _undefined2(function*(arg0, value) {
              let closure_0;
              let intl;
              let intl2;
              let intl3;
              let intl4;
              if (setDeleting === 2) {
                setDeleting = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  let tmp;
                  setDeleting = 2;
                  if (0 === deleting) {
                    if (arg0 === 1) {
                      setDeleting = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      setDeleting = 3;
                      let obj3 = { value, done: true };
                      return obj3;
                    } else {
                      tmp = undefined;
                      closure_1 = undefined;
                      const flag = true;
                      setDeleting(true);
                      let obj5 = tmp(paths[16]);
                      deleting = 1;
                      setDeleting = 1;
                      let obj4 = { value: obj5.isLastRemainingMfaFactor("webauthn"), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    setDeleting = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    setDeleting = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    closure_1 = value;
                    const flag2 = false;
                    setDeleting(false);
                    const tmp53 = closure_1;
                    if (tmp53) {
                      const tmp20 = closure_2_1(paths[17]);
                      const obj7 = {
                        title: intl.string(tmp(paths[12]).t["J/x6ns"]),
                        body: intl2.string(tmp(paths[12]).t.IMKkcn),
                        confirmColor: tmp(paths[18]).ButtonColors.RED,
                        confirmText: intl3.string(tmp(paths[12]).t.zYOk0f),
                        cancelText: intl4.string(tmp(paths[12]).t["lqK//z"]),
                        onConfirm() {
                                  return closure_1_0(...arguments);
                                }
                      };
                      const tmp21 = tmp;
                      const show = tmp20.show;
                      intl = tmp(paths[12]).intl;
                      intl2 = tmp(paths[12]).intl;
                      intl3 = tmp(paths[12]).intl;
                      intl4 = tmp(paths[12]).intl;
                      tmp = _undefined2(function*(arg0, value) {
                        let obj2;
                        if (c4 === 2) {
                          c4 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "HermesInternal", done: "HermesInternal" };
                          }
                        } else {
                          let c3;
                          try {
                            c4 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c4 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                setDeleting(true);
                                c3 = 1;
                                c1 = 2;
                                c4 = 1;
                                const obj5 = { value: obj2.deleteWebAuthnCredentialWithToast(tmp), done: false };
                                obj2 = tmp(c2[19]);
                                return obj5;
                              }
                            } else if (1 === tmp4) {
                              c3 = 0;
                              setDeleting(false);
                              throw closure_2;
                            } else if (arg0 === 1) {
                              c4 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c3 = 0;
                              setDeleting(false);
                              c4 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c3 = 0;
                              setDeleting(false);
                              c4 = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          } catch (tmp21) {
                            closure_2 = tmp21;
                            if (0 === c3) {
                              c4 = 3;
                              throw tmp21;
                            } else {
                              c1 = 1;
                            }
                          }
                        }
                      });
                      show(obj7);
                    } else {
                      let obj = closure_2_1(paths[20]);
                      const obj8 = { credential: closure_129_0, deleting, setDeleting };
                      const str = "WEBAUTHN_DELETE_SHEET_KEY";
                      obj.openLazy(tmp(paths[22])(paths[21], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj8);
                    }
                    setDeleting = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp45) {
                  setDeleting = 3;
                  throw tmp45;
                }
              }
            })
          };
          const IconButton = navigation(loading[14]).IconButton;
          obj4 = { color: closure_1(loading[8]).colors.TEXT_FEEDBACK_CRITICAL };
          TrashIcon = navigation(loading[15]).TrashIcon;
          intl = navigation(loading[12]).intl;
          items = [closure_1_9(IconButton, obj3), ];
          let obj5 = {
            variant: "secondary",
            icon: closure_1_9(navigation(loading[23]).PencilIcon, {}),
            accessibilityLabel: intl2.string(navigation(loading[12]).t.bt75uw),
            size: "sm",
            disabled: loading,
            loading,
            onPress() {
              const obj = { credential };
              navigation.push(UserSettingsSections.WEBAUTHN_EDIT, obj);
            }
          };
          const IconButton2 = navigation(loading[14]).IconButton;
          intl2 = navigation(loading[12]).intl;
          items[1] = closure_1_9(IconButton2, obj5);
          formatResult = null;
          if (null != label.last_used) {
            let intl3 = tmp2(tmp3[12]).intl;
            const format = intl3.format;
            let obj6 = { lastUsed: tmp2Result.formatDate(label.last_used) };
            const v7JgxF5 = tmp2(tmp3[12]).t["7JgxF5"];
            tmp2Result = navigation(tmp3[26]);
            formatResult = format(v7JgxF5, obj6);
          }
          return tmp(TableRow, obj, label.id);
        })
    };
    const TableRowGroup = tmp(7060).TableRowGroup;
    intl = tmp(1113).intl;
    return closure_9(TableRowGroup, obj4);
  }
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, upsellContainer: obj3, upsellText: obj4, iconButtonGroup: obj5, headerAddButton: { alignSelf: "center" } };
obj2 = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
obj5 = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let closure_12 = { top: 12, bottom: 12, left: 12, right: 12 };
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep() {
  let hasFetchedCredentials;
  let hitSlop;
  let obj4;
  let obj = navigation(hasFetchedCredentials[27]);
  navigation = obj.useNavigation();
  const tmp2 = closure_11();
  let closure_1 = tmp2;
  const items = [WebAuthnStore];
  const obj2 = navigation(hasFetchedCredentials[9]);
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
  const items2 = [navigation, tmp2.headerAddButton];
  const layoutEffect = react.useLayoutEffect(() => {
    let headerAddButton;
    let obj = {
      headerRight() {
        let intl;
        if (navigation(hasFetchedCredentials[29]).hasWebAuthn) {
          const obj = {
            text: intl.string(navigation(hasFetchedCredentials[12]).t.OYkgVk),
            style: headerAddButton.headerAddButton,
            hitSlop,
            onPress() {
                closure_1_0.push(constants.WEBAUTHN_REGISTER);
              },
            foregroundRipple: true
          };
          const HeaderActionButton = tmp(tmp2[30]).HeaderActionButton;
          intl = tmp(tmp2[12]).intl;
          return closure_2_9(HeaderActionButton, obj);
        }
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const obj3 = { children: closure_9(View, obj4) };
  obj4 = { style: tmp2.container, children: closure_9(CredentialList, { navigation }) };
  const Form = navigation(hasFetchedCredentials[31]).Form;
  return closure_9(Form, obj3);
};
