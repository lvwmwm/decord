// Module ID: 12170
// Function ID: 12171
// Name: GameOrganizationCantJoinActionSheet
// Dependencies: [19, 4663, 11834, 21, 5006, 12171, 504, 6714, 2557, 11163, 7396, 1113, 5390, 2]
// Exports: default

// Module 12170 (GameOrganizationCantJoinActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import transitionToGuild from "transitionToGuild" /* 6714 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12171 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const _modDef2557 = tmp(2557);
function hideSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(hasOwnProperty);
}
({ GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY: hasOwnProperty, GameOrganizationCantJoinReasons: metroRequire } = GameOrganizationInviteConstants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx");

export default function GameOrganizationCantJoinActionSheet(arg0) {
  let code;
  let intl3;
  let intl4;
  let reason;
  const tmp = importDefault;
  let tmp2 = dependencyMap;
  ({ code, reason } = arg0);
  const tmp3 = useResolvedGameOrganizationInviteDefault(code);
  let guildId;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  let obj = guildId(504);
  const items = [GuildStore];
  [][0] = guildId;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
    return tmp2;
  });
  if (null == tmp3) {
    return null;
  } else {
    let lXyJMS;
    let str = tmp3.displayNoun;
    if (str == null) {
      str = "other";
    }
    if (reason === constants.NO_CHARACTERS) {
      lXyJMS = _modDef2557.lXyJMS;
    } else {
      lXyJMS = _modDef2557["IIR/NZ"];
    }
    const PromoSheet = tmp5(11163).PromoSheet;
    const intl = tmp5(1113).intl;
    const obj3 = { displayNoun: str };
    const intl2 = tmp5(1113).intl;
    const obj4 = { displayNoun: str, guildName: tmp3.linkedGuild.name };
    const Button = tmp5(5390).Button;
    if (stateFromStores) {
      const obj5 = { text: intl4.string(_modDef2557.H1wMHV), size: "lg", onPress: tmp7 };
      intl4 = tmp5(1113).intl;
    } else {
      ({ text: intl3.string(guildId(1113).t.cpT0Cq), variant: "secondary", size: "lg", onPress: hideSheet });
      intl3 = tmp5(1113).intl;
    }
    return <PromoSheet header={null} title={intl.formatToPlainString(_modDef2557.DinVUQ, obj3)} description={intl2.formatToPlainString(lXyJMS, obj4)} actions={null} />;
  }
};
