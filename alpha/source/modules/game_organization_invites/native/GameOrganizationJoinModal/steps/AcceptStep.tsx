// Module ID: 13466
// Function ID: 13467
// Name: AcceptStep
// Dependencies: [5, 32, 19, 13460, 21, 5142, 13457, 1499, 7067, 11824, 5839, 1113, 8045, 8047, 6161, 575, 5753, 2530, 13467, 13468, 13465, 6825, 5760, 2]
// Exports: AcceptStep

// Module 13466 (AcceptStep)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13460 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, id, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ closeGameOrganizationJoinModal: metroRequire, GameOrganizationJoinScenes: metroImportDefault } = GameOrganizationJoinModalConstants);
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
  const character = code.character;
  navigation = undefined;
  disabled = undefined;
  _slicedToArray = undefined;
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
          let characterName;
          let joinStatus;
          let failureReason;
          let guild_join_status;
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
              characterName = undefined;
              joinStatus = undefined;
              failureReason = undefined;
              guild_join_status = undefined;
              closure_2_4(true);
              c4 = 2;
              id = undefined;
              const acceptGameOrganizationInvite = joinStatus(failureReason[9]).acceptGameOrganizationInvite;
              const tmp49 = joinStatus(failureReason[9]);
              const tmp50 = code;
              if (id != null) {
                id = id.id;
              }
              c5 = 3;
              c6 = 1;
              const obj4 = { value: acceptGameOrganizationInvite(tmp50, id), done: false };
              return obj4;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_4(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              const obj5 = { text: intl.string(characterName(failureReason[11]).t.fEptJP) };
              const open = joinStatus(failureReason[10]).open;
              const tmp14 = joinStatus(failureReason[10]);
              intl = characterName(failureReason[11]).intl;
              open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj5);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_4(false);
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              characterName = value;
              joinStatus = characterName.game_organization_join_status;
              failureReason = characterName.game_organization_join_failure_reason;
              guild_join_status = characterName.guild_join_status;
              const obj6 = { joinStatus, failureReason, guildJoinStatus: guild_join_status, characterName };
              let name;
              const push = closure_130_2.push;
              const OUTCOME = constants.OUTCOME;
              if (closure_130_1 != null) {
                name = closure_130_1.name;
              }
              characterName = name;
              if (name == null) {
                characterName = null;
              }
              push(OUTCOME, obj6);
              c4 = 1;
            }
            c4 = 0;
            closure_130_4(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
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
  const tmp4 = character(navigation[6])(code);
  obj = code(navigation[7]);
  navigation = obj.useNavigation();
  [disabled, _slicedToArray] = obj.useState(false);
  const items = [navigation, disabled];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_0;
    obj = code(navigation[8]);
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
    const ModalScreen = tmp5(tmp3[12]).ModalScreen;
    const ModalContent = tmp5(tmp3[13]).ModalContent;
    let obj2 = { spacing: tmp2(tmp3[15]).space.PX_48, children: items2 };
    const Stack2 = tmp5(tmp3[14]).Stack;
    let obj3 = { spacing: tmp2(tmp3[15]).space.PX_24, children: items1 };
    const Stack3 = tmp5(tmp3[14]).Stack;
    let obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj7) };
    const Text2 = tmp5(tmp3[16]).Text;
    const intl4 = tmp5(tmp3[11]).intl;
    formatToPlainString = intl4.formatToPlainString;
    WmxMAI = tmp2(tmp3[17]).WmxMAI;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: items4 };
    let obj6 = { children: tmp11(Stack2, obj2) };
    obj7 = { displayNoun: str };
    items1 = [tmp12(Text2, obj4), ];
    const obj8 = { linkedGuild };
    items1[1] = closure_8(character(tmp3[18]), obj8);
    items2 = [tmp11(Stack3, obj3), ];
    const obj9 = { spacing: character(tmp3[15]).space.PX_24, children: items3 };
    const Stack = tmp5(tmp3[14]).Stack;
    const obj10 = { variant: "heading-lg/semibold", children: intl.string(character(tmp3[17]).yFqGy8) };
    const Text = tmp5(tmp3[16]).Text;
    intl = tmp5(tmp3[11]).intl;
    items3 = [tmp12(Text, obj10), tmp12(tmp2(tmp3[19]), {})];
    items2[1] = closure_9(Stack, obj9);
    items4 = [tmp12(ModalContent, obj6), ];
    const obj11 = { children: closure_9(ButtonGroup, obj12) };
    const ModalFooter = tmp5(tmp3[20]).ModalFooter;
    obj12 = { style: tmp.buttonGroup, children: items5 };
    ButtonGroup = tmp5(tmp3[21]).ButtonGroup;
    const obj13 = {
      text: intl2.string(character(tmp3[17]).BaZ6nt),
      size: "lg",
      loading: disabled,
      disabled,
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        }
    };
    const Button = tmp5(tmp3[22]).Button;
    intl2 = tmp5(tmp3[11]).intl;
    items5 = [tmp12(Button, obj13), ];
    const obj14 = { text: intl3.string(code(tmp3[11]).t["ETE/oC"]), size: "lg", variant: "secondary", onPress, disabled };
    const Button2 = tmp5(tmp3[22]).Button;
    intl3 = tmp5(tmp3[11]).intl;
    items5[1] = closure_8(Button2, obj14);
    items4[1] = closure_8(ModalFooter, obj11);
    return closure_9(ModalScreen, obj5);
  }
}
