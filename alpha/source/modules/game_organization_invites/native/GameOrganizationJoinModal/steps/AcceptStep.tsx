// Module ID: 12250
// Function ID: 12251
// Name: AcceptStep
// Dependencies: [5, 32, 19, 17, 11896, 12244, 21, 4913, 575, 12242, 1500, 7095, 12056, 12251, 12259, 5595, 1112, 7811, 7813, 5929, 12246, 5504, 2639, 12261, 12262, 12249, 6545, 5511, 2]
// Exports: AcceptStep

// Module 12250 (AcceptStep)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12244 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c5, c6, id, navigation;

let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ GameOrganizationCharacterMode: metroImportDefault, GameOrganizationInviteAcceptStatus: metroImportAll } = GameOrganizationInviteConstants);
const onPress = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { text: { textAlign: "center" }, buttonGroup: { paddingVertical: 0 }, divider: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export function AcceptStep(code) {
  let ButtonGroup;
  let WmxMAI;
  let closure_5;
  let first;
  let formatToPlainString;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj17;
  let obj9;
  code = code.code;
  let character = code.character;
  navigation = undefined;
  let closure_3;
  let disabled;
  react = undefined;
  let obj = function _handleAcceptInvite() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let intl;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let joinStatus;
          let obj7;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              character = undefined;
              joinStatus = undefined;
              obj7 = undefined;
              closure_2_5(true);
              c4 = 2;
              id = undefined;
              const acceptGameOrganizationInvite = joinStatus(closure_2[12]).acceptGameOrganizationInvite;
              const tmp54 = joinStatus(closure_2[12]);
              const tmp55 = code;
              if (id != null) {
                id = id.id;
              }
              c5 = 3;
              c6 = 1;
              const obj4 = { value: acceptGameOrganizationInvite(tmp55, id), done: false };
              return obj4;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_5(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              const obj5 = { text: intl.string(character(closure_2[16]).t.fEptJP) };
              const open = joinStatus(closure_2[15]).open;
              const tmp37 = joinStatus(closure_2[15]);
              intl = character(closure_2[16]).intl;
              open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj5);
            } else {
              if (3 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  closure_130_5(false);
                  c6 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  character = value;
                  joinStatus = character.game_organization_join_status;
                  obj7 = { joinStatus, failureReason: character.game_organization_join_failure_reason, guildJoinStatus: character.guild_join_status, character };
                  character = closure_130_1;
                  if (closure_130_1 == null) {
                    character = null;
                  }
                  if (joinStatus === constants.JOINED) {
                    closure_1_9();
                    joinStatus(closure_2[13])(closure_130_0, obj7);
                  } else {
                    c5 = 4;
                    c6 = 1;
                    const obj8 = { value: joinStatus(closure_2[14])(closure_130_0, obj7), done: false };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_5(false);
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1_9();
              }
              c4 = 1;
            }
            c4 = 0;
            closure_130_5(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp57) {
          closure_3 = tmp57;
          if (0 === c4) {
            c6 = 3;
            throw tmp57;
          } else if (1 === tmp59) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_13();
  const tmp3 = navigation;
  const tmp4 = character(navigation[9])(code);
  obj = code(navigation[10]);
  navigation = obj.useNavigation();
  let characterMode;
  if (tmp4 != null) {
    characterMode = tmp4.characterMode;
  }
  closure_3 = tmp8;
  const tmp9 = disabled(react.useState(false), 2);
  disabled = tmp9[0];
  react = tmp9[1];
  const items = [navigation, disabled, tmp8];
  const layoutEffect = react.useLayoutEffect(() => {
    obj = code(navigation[11]);
    if (closure_3) {
      let headerCloseButton = obj.getHeaderCloseButton(() => {
        const tmp = first;
        if (!tmp) {
          onPress();
        }
      });
    } else {
      let tmp = first;
      headerCloseButton = obj.getHeaderBackButton(undefined, first);
    }
    const obj2 = {
      headerLeft(arg0) {
        obj = { disabled };
        const merged = Object.assign(arg0);
        return headerCloseButton(obj);
      },
      gestureEnabled: !first
    };
    navigation.setOptions(obj2);
  }, items);
  if (null == tmp4) {
    return null;
  } else {
    const displayNoun = tmp4.displayNoun;
    const linkedGuild = tmp4.linkedGuild;
    const ModalScreen = tmp5(tmp3[17]).ModalScreen;
    const ModalContent = tmp5(tmp3[18]).ModalContent;
    let obj2 = { spacing: tmp2(tmp3[8]).space.PX_32, children: items2 };
    const Stack4 = tmp5(tmp3[19]).Stack;
    let tmp17Result = tmp8;
    if (tmp17Result) {
      let obj3 = { children: items1 };
      let obj4 = { invite: tmp4 };
      items1 = [tmp18(tmp2(tmp3[20]), obj4), ];
      let obj5 = { style: tmp.divider };
      items1[1] = closure_10(obj, obj5);
      tmp17Result = tmp17(closure_11, obj3);
    }
    items2 = [tmp17Result, ];
    let obj6 = { spacing: tmp2(tmp3[8]).space.PX_48, children: items4 };
    const Stack = tmp5(tmp3[19]).Stack;
    let obj7 = { spacing: tmp2(tmp3[8]).space.PX_24, children: items3 };
    const Stack2 = tmp5(tmp3[19]).Stack;
    let obj8 = { variant: "heading-lg/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj9) };
    const Text = tmp5(tmp3[21]).Text;
    let intl = tmp5(tmp3[16]).intl;
    formatToPlainString = intl.formatToPlainString;
    let str = displayNoun;
    WmxMAI = tmp2(tmp3[22]).WmxMAI;
    if (displayNoun == null) {
      str = "other";
    }
    obj9 = { displayNoun: str };
    items3 = [tmp18(Text, obj8), ];
    const obj10 = { linkedGuild };
    items3[1] = closure_10(character(tmp3[23]), obj10);
    items4 = [tmp17(Stack2, obj7), ];
    const obj11 = { spacing: character(tmp3[8]).space.PX_24, children: items5 };
    const Stack3 = tmp5(tmp3[19]).Stack;
    let tmp18Result = !tmp8;
    if (tmp18Result) {
      const obj12 = { variant: "heading-lg/semibold", children: intl2.string(character(tmp3[22]).yFqGy8) };
      const Text2 = tmp5(tmp3[21]).Text;
      intl2 = tmp5(tmp3[16]).intl;
      tmp18Result = tmp18(Text2, obj12);
    }
    const obj13 = { children: items6 };
    items5 = [tmp18Result, ];
    const obj14 = { children: closure_12(Stack4, obj2) };
    const obj15 = { displayNoun };
    items5[1] = closure_10(character(tmp3[24]), obj15);
    items4[1] = closure_12(Stack3, obj11);
    items2[1] = closure_12(Stack, obj6);
    items6 = [tmp18(ModalContent, obj14), ];
    const obj16 = { children: closure_12(ButtonGroup, obj17) };
    const ModalFooter = tmp5(tmp3[25]).ModalFooter;
    obj17 = { style: tmp.buttonGroup, children: items7 };
    ButtonGroup = tmp5(tmp3[26]).ButtonGroup;
    const obj18 = {
      text: intl3.string(character(tmp3[22]).BaZ6nt),
      size: "lg",
      loading: disabled,
      disabled,
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        }
    };
    const Button = tmp5(tmp3[27]).Button;
    intl3 = tmp5(tmp3[16]).intl;
    items7 = [tmp18(Button, obj18), ];
    const obj19 = { text: intl4.string(code(tmp3[16]).t["ETE/oC"]), size: "lg", variant: "secondary", onPress, disabled };
    const Button2 = tmp5(tmp3[27]).Button;
    intl4 = tmp5(tmp3[16]).intl;
    items7[1] = closure_10(Button2, obj19);
    items6[1] = closure_10(ModalFooter, obj16);
    return closure_12(ModalScreen, obj13);
  }
}
