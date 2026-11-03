// Module ID: 13342
// Function ID: 13343
// Name: MultiCharacterContent
// Dependencies: [19, 21, 5141, 7080, 5747, 1113, 2533, 13343, 2]
// Exports: default

// Module 13342 (MultiCharacterContent)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import _modDef2533 from "module_2533" /* 2533 */;
import Text_Text from "Text/Text" /* 5747 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 13343 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ statusText: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default function MultiCharacterContent(arg0) {
  let characters;
  let hasError;
  let intl2;
  let noun;
  let onSelect;
  let selectedCharacterId;
  let tmp5;
  ({ characters, noun } = arg0);
  ({ hasError, selectedCharacterId, onSelect } = arg0);
  const tmp = closure_4();
  if (null == characters) {
    let tmp10Result;
    if (hasError) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", style: tmp.statusText, children: intl2.string(_modDef2533.Rx9AlK) };
      const Text2 = tmp11(5747).Text;
      intl2 = tmp11(1113).intl;
      tmp10Result = tmp10(Text2, obj2);
    } else {
      tmp10Result = tmp10(tmp11(7080).ActivityIndicator, {});
    }
    tmp5 = tmp10Result;
  } else if (0 === characters.length) {
    const Text = Text_Text.Text;
    const intl = intl3.intl;
    const obj4 = { noun };
    tmp5 = <Text variant="text-md/normal" color="text-muted" style={tmp.statusText}>{intl.formatToPlainString(_modDef2533.cIerRX, obj4)}</Text>;
  } else {
    tmp5 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
  }
  return tmp5;
};
