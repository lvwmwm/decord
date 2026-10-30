// Module ID: 13159
// Function ID: 13160
// Name: AcceptStep
// Dependencies: [5, 32, 19, 13151, 21, 5009, 13153, 1498, 11618, 5707, 1114, 7964, 7965, 6022, 575, 5619, 2405, 13160, 13161, 13158, 6761, 5629, 2]
// Exports: AcceptStep

// Module 13159 (AcceptStep)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13151 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, dependencyMap, id;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ closeGameOrganizationJoinModal: metroRequire, GameOrganizationJoinScenes: metroImportDefault } = GameOrganizationJoinModalConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" }, buttonGroup: { paddingVertical: 0 } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export function AcceptStep(code) {
  let ButtonGroup;
  let WmxMAI;
  let _undefined;
  let c3;
  let closure_2;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let obj7;
  let tmp7;
  code = code.code;
  const character = code.character;
  dependencyMap = undefined;
  c3 = undefined;
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
              _undefined(true);
              c4 = 2;
              id = undefined;
              const acceptGameOrganizationInvite = joinStatus(failureReason[8]).acceptGameOrganizationInvite;
              const tmp49 = joinStatus(failureReason[8]);
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
            closure_130_3(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              const obj5 = { text: intl.string(characterName(failureReason[10]).t.fEptJP) };
              const open = joinStatus(failureReason[9]).open;
              const tmp14 = joinStatus(failureReason[9]);
              intl = characterName(failureReason[10]).intl;
              open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj5);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_3(false);
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
            closure_130_3(false);
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
  const tmp3 = dependencyMap;
  const tmp4 = character(13153)(code);
  obj = code(1498);
  dependencyMap = obj.useNavigation();
  [tmp7, c3] = obj(react.useState(false), 2);
  const tmp6 = obj(react.useState(false), 2);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    const linkedGuild = tmp4.linkedGuild;
    const ModalScreen = tmp5(7964).ModalScreen;
    const ModalContent = tmp5(7965).ModalContent;
    let obj2 = { spacing: tmp2(575).space.PX_48, children: items1 };
    const Stack2 = tmp5(6022).Stack;
    let obj3 = { spacing: tmp2(575).space.PX_24, children: items };
    const Stack3 = tmp5(6022).Stack;
    let obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj7) };
    const Text2 = tmp5(5619).Text;
    const intl4 = tmp5(1114).intl;
    formatToPlainString = intl4.formatToPlainString;
    WmxMAI = tmp2(2405).WmxMAI;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: items3 };
    let obj6 = { children: tmp9(Stack2, obj2) };
    obj7 = { displayNoun: str };
    items = [tmp10(Text2, obj4), ];
    const obj8 = { linkedGuild };
    items[1] = closure_8(character(13160), obj8);
    items1 = [tmp9(Stack3, obj3), ];
    const obj9 = { spacing: character(575).space.PX_24, children: items2 };
    const Stack = tmp5(6022).Stack;
    const obj10 = { variant: "heading-lg/semibold", children: intl.string(character(2405).yFqGy8) };
    const Text = tmp5(5619).Text;
    intl = tmp5(1114).intl;
    items2 = [tmp10(Text, obj10), tmp10(tmp2(13161), {})];
    items1[1] = closure_9(Stack, obj9);
    items3 = [tmp10(ModalContent, obj6), ];
    const obj11 = { children: closure_9(ButtonGroup, obj12) };
    const ModalFooter = tmp5(13158).ModalFooter;
    obj12 = { style: tmp.buttonGroup, children: items4 };
    ButtonGroup = tmp5(6761).ButtonGroup;
    const obj13 = {
      text: intl2.string(character(2405).BaZ6nt),
      size: "lg",
      loading: tmp7,
      disabled: tmp7,
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        }
    };
    const Button = tmp5(5629).Button;
    intl2 = tmp5(1114).intl;
    items4 = [tmp10(Button, obj13), ];
    const obj14 = { text: intl3.string(code(1114).t["ETE/oC"]), size: "lg", variant: "secondary", onPress, disabled: tmp7 };
    const Button2 = tmp5(5629).Button;
    intl3 = tmp5(1114).intl;
    items4[1] = closure_8(Button2, obj14);
    items3[1] = closure_8(ModalFooter, obj11);
    return closure_9(ModalScreen, obj5);
  }
}
