// Module ID: 12240
// Function ID: 12241
// Name: MultiCharacterContent
// Dependencies: [19, 21, 7020, 12241, 2]
// Exports: default

// Module 12240 (MultiCharacterContent)
import Fragment from "Fragment" /* 21 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7020 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 12241 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default function MultiCharacterContent(characters) {
  let tmp7;
  characters = characters.characters;
  if (null == characters) {
    tmp7 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  } else {
    tmp7 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId: tmp, onSelect: tmp2, displayNoun: tmp3 });
  }
  return tmp7;
};
