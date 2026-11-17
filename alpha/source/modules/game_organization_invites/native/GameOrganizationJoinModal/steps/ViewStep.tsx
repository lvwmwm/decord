// Module ID: 12899
// Function ID: 12900
// Name: ViewStep
// Dependencies: [32, 19, 12573, 12898, 21, 5310, 1502, 12896, 12893, 12734, 8219, 8221, 6335, 575, 12900, 5923, 1113, 2565, 7446, 12901, 12903, 5930, 2]
// Exports: ViewStep

// Module 12899 (ViewStep)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12898 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
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
  let closure_0;
  let closure_1;
  let displayNoun;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let maxMembers;
  let memberCount;
  let obj10;
  let obj11;
  let obj13;
  let obj17;
  let organization;
  let prop;
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
  const data = useGameOrganizationCharacterEligibilityFetch(tmp9).data;
  const tmp10 = found(react.useState(null), 2);
  selectedCharacterId = tmp10[0];
  found = undefined;
  const tmp12 = tmp10[1];
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  if (null == tmp5) {
    return null;
  } else {
    ({ displayNoun, organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun, lowercase: true };
    const tmp16 = require("getGameOrganizationDisplayNoun")(obj2);
    const ModalScreen = tmp2(tmp3[10]).ModalScreen;
    const ModalContent = tmp2(tmp3[11]).ModalContent;
    const obj3 = { spacing: require("native").space.PX_48, children: items4 };
    const Stack2 = tmp2(tmp3[12]).Stack;
    const obj4 = { spacing: require("native").space.PX_16, align: "center", children: items };
    const Stack3 = tmp2(tmp3[12]).Stack;
    const obj5 = { iconUrl: organization.iconUrl, size: 64 };
    items = [closure_7(tmp4(tmp3[14]), obj5), ];
    const obj6 = { spacing: require("native").space.PX_8, align: "center", children: items2 };
    const Stack4 = tmp2(tmp3[12]).Stack;
    const obj7 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items1 };
    const Stack5 = tmp2(tmp3[12]).Stack;
    const obj8 = { iconUrl: application.iconUrl, size: 16, borderRadius: require("native").radii.xs };
    const tmp4Result = require("GameOrganizationIcon");
    items1 = [closure_7(tmp4Result, obj8), ];
    const obj9 = { variant: "body-md/medium", color: "text-subtle", children: formatToPlainString(prop, obj10) };
    const Text2 = tmp2(tmp3[15]).Text;
    const intl3 = tmp2(tmp3[16]).intl;
    formatToPlainString = intl3.formatToPlainString;
    obj10 = { noun: require("getGameOrganizationDisplayNoun")(obj11) };
    prop = tmp4(tmp3[17])["jKi+kc"];
    obj11 = { displayNoun };
    items1[1] = closure_7(Text2, obj9);
    items2 = [closure_8(Stack5, obj7), , ];
    const obj12 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: intl4.format(require("module_2565").gptW7Y, obj13) };
    const Heading = tmp2(tmp3[15]).Heading;
    intl4 = tmp2(tmp3[16]).intl;
    obj13 = {
      noun: tmp16,
      orgName: organization.name,
      gameName: application.name,
      orgNameHook(children, arg1) {
          const obj = { variant: "heading-xl/semibold", color: "text-strong", children };
          return closure_1_7(closure_0(first[15]).Text, obj, arg1);
        }
    };
    items2[1] = closure_7(Heading, obj12);
    let tmp17Result = null != memberCount && null != maxMembers;
    if (tmp17Result) {
      const obj14 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", style: tmp.inlineStack, children: items3 };
      const Stack = tmp2(tmp3[12]).Stack;
      const obj15 = { size: "xs", color: require("native").colors.ICON_MUTED };
      const GroupIcon = tmp2(tmp3[18]).GroupIcon;
      items3 = [closure_7(GroupIcon, obj15), ];
      const obj16 = { variant: "heading-sm/medium", color: "text-subtle", children: intl.formatToPlainString(require("module_2565").VuENGl, obj17) };
      const Text = tmp2(tmp3[15]).Text;
      intl = tmp2(tmp3[16]).intl;
      obj17 = { count: memberCount, max: maxMembers };
      items3[1] = closure_7(Text, obj16);
      tmp17Result = tmp17(Stack, obj14);
    }
    items2[2] = tmp17Result;
    items[1] = closure_8(Stack4, obj6);
    items4 = [closure_8(Stack3, obj4), ];
    let tmp18Result = tmp7;
    if (tmp18Result) {
      const obj18 = { characters: data, selectedCharacterId, onSelect: tmp12, noun: tmp16 };
      tmp18Result = tmp18(tmp4(tmp3[19]), obj18);
    }
    items4[1] = tmp18Result;
    const obj19 = { children: closure_8(Stack2, obj3) };
    const items5 = [closure_7(ModalContent, obj19), ];
    const ModalFooter = tmp2(tmp3[20]).ModalFooter;
    const obj20 = {
      text: intl2.string(tmp2(tmp3[16]).t["3PatSz"]),
      size: "lg",
      disabled: tmp7,
      onPress() {
          let tmp2;
          const navigate = closure_0.navigate;
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
    const obj21 = { children: items5 };
    const obj22 = { children: closure_7(Button, obj20) };
    items5[1] = closure_7(ModalFooter, obj22);
    return closure_8(ModalScreen, obj21);
  }
}
