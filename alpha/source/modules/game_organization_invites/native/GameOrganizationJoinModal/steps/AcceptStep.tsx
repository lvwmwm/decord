// Module ID: 14080
// Function ID: 14081
// Name: AcceptStep
// Dependencies: [5, 32, 19, 12369, 14074, 21, 5306, 14072, 1502, 7493, 12536, 14081, 14093, 6015, 1113, 8208, 8210, 6337, 575, 5929, 2565, 14095, 14096, 14079, 6951, 5936, 2]
// Exports: AcceptStep

// Module 14080 (AcceptStep)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 14074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c5, closure_3, constants, id, navigation;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
let closure_6 = GameOrganizationInviteConstants.GameOrganizationInviteAcceptStatus;
const onPress = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" }, buttonGroup: { paddingVertical: 0 } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export function AcceptStep(code) {
  let ButtonGroup;
  let WmxMAI;
  let closure_4;
  let disabled;
  let first;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj7;
  code = code.code;
  let character = code.character;
  navigation = undefined;
  disabled = undefined;
  _slicedToArray = undefined;
  let obj = function _handleAcceptInvite() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let intl;
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              character = undefined;
              joinStatus = undefined;
              obj7 = undefined;
              closure_2_4(true);
              c4 = 2;
              id = undefined;
              const acceptGameOrganizationInvite = joinStatus(closure_2[10]).acceptGameOrganizationInvite;
              const tmp54 = joinStatus(closure_2[10]);
              const tmp55 = code;
              if (id != null) {
                id = id.id;
              }
              c5 = 3;
              constants = 1;
              const obj4 = { value: acceptGameOrganizationInvite(tmp55, id), done: false };
              return obj4;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_4(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              const obj5 = { text: intl.string(character(closure_2[14]).t.fEptJP) };
              const open = joinStatus(closure_2[13]).open;
              const tmp37 = joinStatus(closure_2[13]);
              intl = character(closure_2[14]).intl;
              open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj5);
            } else {
              if (3 === c5) {
                if (arg0 === 1) {
                  constants = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  closure_130_4(false);
                  constants = 3;
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
                    closure_1_7();
                    joinStatus(closure_2[11])(closure_130_0, obj7);
                  } else {
                    c5 = 4;
                    constants = 1;
                    const obj8 = { value: joinStatus(closure_2[12])(closure_130_0, obj7), done: false };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_4(false);
                constants = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1_7();
              }
              c4 = 1;
            }
            c4 = 0;
            closure_130_4(false);
            constants = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp57) {
          closure_3 = tmp57;
          if (0 === c4) {
            constants = 3;
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
  const tmp = closure_10();
  const tmp3 = navigation;
  const tmp4 = character(navigation[7])(code);
  obj = code(navigation[8]);
  navigation = obj.useNavigation();
  [disabled, _slicedToArray] = obj.useState(false);
  const items = [navigation, disabled];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_0;
    obj = code(navigation[9]);
    const headerBackButton = obj.getHeaderBackButton(undefined, first);
    const obj2 = {
      headerLeft(arg0) {
        obj = { disabled };
        const merged = Object.assign(arg0);
        return closure_0(obj);
      },
      gestureEnabled: !first
    };
    navigation.setOptions(obj2);
  }, items);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    const linkedGuild = tmp4.linkedGuild;
    const ModalScreen = tmp5(tmp3[15]).ModalScreen;
    const ModalContent = tmp5(tmp3[16]).ModalContent;
    let obj2 = { spacing: tmp2(tmp3[18]).space.PX_48, children: items2 };
    const Stack2 = tmp5(tmp3[17]).Stack;
    let obj3 = { spacing: tmp2(tmp3[18]).space.PX_24, children: items1 };
    const Stack3 = tmp5(tmp3[17]).Stack;
    let obj4 = { variant: "heading-lg/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj7) };
    const Text2 = tmp5(tmp3[19]).Text;
    const intl4 = tmp5(tmp3[14]).intl;
    formatToPlainString = intl4.formatToPlainString;
    WmxMAI = tmp2(tmp3[20]).WmxMAI;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: items4 };
    let obj6 = { children: tmp11(Stack2, obj2) };
    obj7 = { displayNoun: str };
    items1 = [tmp12(Text2, obj4), ];
    let obj8 = { linkedGuild };
    items1[1] = closure_8(character(tmp3[21]), obj8);
    items2 = [tmp11(Stack3, obj3), ];
    const obj9 = { spacing: character(tmp3[18]).space.PX_24, children: items3 };
    const Stack = tmp5(tmp3[17]).Stack;
    const obj10 = { variant: "heading-lg/semibold", children: intl.string(character(tmp3[20]).yFqGy8) };
    const Text = tmp5(tmp3[19]).Text;
    intl = tmp5(tmp3[14]).intl;
    items3 = [tmp12(Text, obj10), tmp12(tmp2(tmp3[22]), {})];
    items2[1] = closure_9(Stack, obj9);
    items4 = [tmp12(ModalContent, obj6), ];
    const obj11 = { children: closure_9(ButtonGroup, obj12) };
    const ModalFooter = tmp5(tmp3[23]).ModalFooter;
    obj12 = { style: tmp.buttonGroup, children: items5 };
    ButtonGroup = tmp5(tmp3[24]).ButtonGroup;
    const obj13 = {
      text: intl2.string(character(tmp3[20]).BaZ6nt),
      size: "lg",
      loading: disabled,
      disabled,
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        }
    };
    const Button = tmp5(tmp3[25]).Button;
    intl2 = tmp5(tmp3[14]).intl;
    items5 = [tmp12(Button, obj13), ];
    const obj14 = { text: intl3.string(code(tmp3[14]).t["ETE/oC"]), size: "lg", variant: "secondary", onPress, disabled };
    const Button2 = tmp5(tmp3[25]).Button;
    intl3 = tmp5(tmp3[14]).intl;
    items5[1] = closure_8(Button2, obj14);
    items4[1] = closure_8(ModalFooter, obj11);
    return closure_9(ModalScreen, obj5);
  }
}
