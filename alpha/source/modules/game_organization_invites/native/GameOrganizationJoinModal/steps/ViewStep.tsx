// Module ID: 13152
// Function ID: 13153
// Name: ViewStep
// Dependencies: [32, 19, 11327, 13151, 21, 5009, 1498, 13153, 13148, 13154, 7964, 7965, 6022, 575, 13155, 5619, 1114, 2405, 8653, 13156, 13158, 5629, 2]
// Exports: ViewStep

// Module 13152 (ViewStep)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11327 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13151 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
const constants = GameOrganizationInviteConstants.GameOrganizationCharacterMode;
let closure_6 = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx");

export function ViewStep(code) {
  let application;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let maxMembers;
  let memberCount;
  let obj16;
  let obj8;
  let organization;
  code = code.code;
  _require = undefined;
  importDefault = undefined;
  let selectedCharacterId;
  let found;
  const tmp = closure_9();
  let tmp2 = _require;
  const tmp3 = selectedCharacterId;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp5 = require("useResolvedGameOrganizationInvite")(code);
  let characterMode;
  if (tmp5 != null) {
    characterMode = tmp5.characterMode;
  }
  let tmp7 = characterMode === constants.MULTI;
  importDefault = tmp7;
  let tmp9 = null;
  const useGameOrganizationCharacterEligibilityFetch = tmp2(tmp3[8]).useGameOrganizationCharacterEligibilityFetch;
  tmp2(tmp3[8]);
  if (tmp7) {
    tmp9 = code;
  }
  const gameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch(tmp9);
  const data = gameOrganizationCharacterEligibilityFetch.data;
  const error = gameOrganizationCharacterEligibilityFetch.error;
  const tmp11 = found(react.useState(null), 2);
  selectedCharacterId = tmp11[0];
  found = undefined;
  const tmp13 = tmp11[1];
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  if (null == tmp5) {
    return null;
  } else {
    ({ organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
    const tmp17 = require("getGameOrganizationDisplayNoun")(obj2);
    const ModalScreen = tmp2(tmp3[10]).ModalScreen;
    const ModalContent = tmp2(tmp3[11]).ModalContent;
    const obj3 = { spacing: require("native").space.PX_48, children: items5 };
    const Stack2 = tmp2(tmp3[12]).Stack;
    const obj4 = { spacing: require("native").space.PX_24, children: items1 };
    const Stack3 = tmp2(tmp3[12]).Stack;
    const obj5 = { spacing: require("native").space.PX_16, align: "center", children: items };
    const Stack4 = tmp2(tmp3[12]).Stack;
    const obj6 = { iconUrl: organization.iconUrl, size: 64 };
    items = [closure_7(tmp4(tmp3[14]), obj6), ];
    const obj7 = { variant: "heading-xl/semibold", style: tmp.text, children: intl3.formatToPlainString(require("module_2405").gptW7Y, obj8) };
    const Text2 = tmp2(tmp3[15]).Text;
    intl3 = tmp2(tmp3[16]).intl;
    obj8 = { noun: tmp17, orgName: organization.name };
    items[1] = closure_7(Text2, obj7);
    items1 = [closure_8(Stack4, obj5), ];
    const obj9 = { direction: "horizontal", align: "center", justify: "center", spacing: require("native").space.PX_16, children: items3 };
    const Stack5 = tmp2(tmp3[12]).Stack;
    const obj10 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items2 };
    const Stack6 = tmp2(tmp3[12]).Stack;
    const obj11 = { iconUrl: application.iconUrl, size: 16, borderRadius: require("native").radii.xs };
    const tmp4Result = require("GameOrganizationIcon");
    items2 = [closure_7(tmp4Result, obj11), ];
    const obj12 = { variant: "heading-md/medium", children: application.name };
    items2[1] = closure_7(tmp2(tmp3[15]).Text, obj12);
    items3 = [closure_8(Stack6, obj10), ];
    let tmp18Result = null != memberCount && null != maxMembers;
    if (tmp18Result) {
      const obj13 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items4 };
      const Stack = tmp2(tmp3[12]).Stack;
      const obj14 = { size: "xs", color: require("native").colors.ICON_MUTED };
      const GroupIcon = tmp2(tmp3[18]).GroupIcon;
      items4 = [closure_7(GroupIcon, obj14), ];
      const obj15 = { variant: "heading-md/medium", children: intl.formatToPlainString(require("module_2405").VuENGl, obj16) };
      const Text = tmp2(tmp3[15]).Text;
      intl = tmp2(tmp3[16]).intl;
      obj16 = { count: memberCount, max: maxMembers };
      items4[1] = closure_7(Text, obj15);
      tmp18Result = tmp18(Stack, obj13);
    }
    items3[1] = tmp18Result;
    items1[1] = closure_8(Stack5, obj9);
    items5 = [closure_8(Stack3, obj4), ];
    let tmp19Result = tmp7;
    if (tmp19Result) {
      const obj17 = { characters: data, hasError: null != error, selectedCharacterId, onSelect: tmp13, noun: tmp17 };
      tmp19Result = tmp19(tmp4(tmp3[19]), obj17);
    }
    items5[1] = tmp19Result;
    const obj18 = { children: closure_8(Stack2, obj3) };
    const items6 = [closure_7(ModalContent, obj18), ];
    const ModalFooter = tmp2(tmp3[20]).ModalFooter;
    const obj19 = {
      text: intl2.string(tmp2(tmp3[16]).t["3PatSz"]),
      size: "lg",
      disabled: tmp7,
      onPress() {
          let tmp2;
          const navigate = navigation.navigate;
          const ACCEPT = constants.ACCEPT;
          if (closure_1) {
            if (null != found) {
              tmp2 = { character: tmp3 };
              const obj = { character: tmp3 };
            }
          }
          return navigate(ACCEPT, tmp2);
        }
    };
    const Button = tmp2(tmp3[21]).Button;
    intl2 = tmp2(tmp3[16]).intl;
    if (tmp7) {
      tmp7 = null == found;
    }
    const obj20 = { children: items6 };
    const obj21 = { children: closure_7(Button, obj19) };
    items6[1] = closure_7(ModalFooter, obj21);
    return closure_8(ModalScreen, obj20);
  }
}
