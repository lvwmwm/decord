// Module ID: 12245
// Function ID: 12246
// Name: ViewStep
// Dependencies: [32, 19, 12244, 21, 1500, 12242, 12239, 7811, 7813, 5929, 575, 12246, 12247, 12249, 5511, 1112, 2]
// Exports: ViewStep

// Module 12245 (ViewStep)
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12244 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let closure_5 = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx");

export function ViewStep(code) {
  let Button;
  let Stack;
  let intl;
  let items;
  let items1;
  let obj5;
  let obj9;
  let selectedCharacterId;
  let tmp7;
  code = code.code;
  _require = undefined;
  selectedCharacterId = undefined;
  let found;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp4 = selectedCharacterId(found[5])(code);
  const obj2 = require("useGameOrganizationCharacterEligibilityFetch");
  const data = obj2.useGameOrganizationCharacterEligibilityFetch(code).data;
  [selectedCharacterId, tmp7] = react.useState(null);
  found = undefined;
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  let tmp9 = null;
  if (null != tmp4) {
    const obj3 = { children: items1 };
    const ModalScreen = tmp(tmp2[7]).ModalScreen;
    const obj4 = { children: closure_7(Stack, obj5) };
    const ModalContent = tmp(tmp2[8]).ModalContent;
    obj5 = { spacing: selectedCharacterId(found[10]).space.PX_48, children: items };
    Stack = tmp(tmp2[9]).Stack;
    const obj6 = { invite: tmp4 };
    items = [closure_6(selectedCharacterId(found[11]), obj6), ];
    const obj7 = { characters: data, selectedCharacterId, onSelect: tmp7, displayNoun: tmp4.displayNoun };
    items[1] = closure_6(selectedCharacterId(found[12]), obj7);
    items1 = [closure_6(ModalContent, obj4), ];
    const obj8 = { children: closure_6(Button, obj9) };
    const ModalFooter = tmp(tmp2[13]).ModalFooter;
    obj9 = {
      text: intl.string(require("intl").t["3PatSz"]),
      size: "lg",
      disabled: null == found,
      onPress() {
          const obj = { character: found };
          return navigation.navigate(constants.ACCEPT, obj);
        }
    };
    Button = tmp(tmp2[14]).Button;
    intl = tmp(tmp2[15]).intl;
    items1[1] = closure_6(ModalFooter, obj8);
    tmp9 = closure_7(ModalScreen, obj3);
  }
  return tmp9;
}
