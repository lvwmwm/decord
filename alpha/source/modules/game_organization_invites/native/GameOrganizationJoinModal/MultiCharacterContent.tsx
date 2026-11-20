// Module ID: 12118
// Function ID: 12119
// Name: MultiCharacterContent
// Dependencies: [19, 21, 6900, 12119, 2]
// Exports: default

// Module 12118 (MultiCharacterContent)
import Fragment from "Fragment" /* 21 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6900 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 12119 */;
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
