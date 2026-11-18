// Module ID: 12195
// Function ID: 12196
// Name: ViewStep
// Dependencies: [32, 19, 11856, 12194, 21, 4823, 1502, 12192, 12189, 12019, 7722, 7724, 5837, 575, 12047, 5414, 1113, 2555, 6949, 12196, 12198, 5421, 2]
// Exports: ViewStep

// Module 12195 (ViewStep)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12194 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
const constants = GameOrganizationInviteConstants.GameOrganizationCharacterMode;
let closure_6 = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx");

export function ViewStep(code) {
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
  let maxMembers;
  let memberCount;
  let obj11;
  let obj15;
  let obj8;
  let obj9;
  let organization;
  let prop;
  code = code.code;
  _require = undefined;
  importDefault = undefined;
  let selectedCharacterId;
  let found;
  let tmp2 = _require;
  const tmp3 = selectedCharacterId;
  const tmp = closure_9();
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
    ({ displayNoun, organization } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const application = tmp5.application;
    const obj2 = { displayNoun, lowercase: true };
    const tmp16 = require("getGameOrganizationDisplayNoun")(obj2);
    const ModalScreen = tmp2(tmp3[10]).ModalScreen;
    const ModalContent = tmp2(tmp3[11]).ModalContent;
    const obj3 = { spacing: require("native").space.PX_48, children: items3 };
    const Stack2 = tmp2(tmp3[12]).Stack;
    const obj4 = { spacing: require("native").space.PX_16, align: "center", children: items };
    const Stack3 = tmp2(tmp3[12]).Stack;
    const obj5 = { iconUrl: organization.iconUrl, size: 64, fallback: "guild" };
    items = [closure_7(tmp4(tmp3[14]), obj5), ];
    const obj6 = { spacing: require("native").space.PX_8, align: "center", children: items1 };
    const Stack4 = tmp2(tmp3[12]).Stack;
    const obj7 = { variant: "body-md/medium", color: "text-subtle", children: formatToPlainString(prop, obj8) };
    const Text2 = tmp2(tmp3[15]).Text;
    const intl3 = tmp2(tmp3[16]).intl;
    formatToPlainString = intl3.formatToPlainString;
    obj8 = { noun: require("getGameOrganizationDisplayNoun")(obj9) };
    prop = tmp4(tmp3[17])["jKi+kc"];
    obj9 = { displayNoun };
    items1 = [closure_7(Text2, obj7), , ];
    const obj10 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: intl4.format(require("module_2555").gptW7Y, obj11) };
    const Heading = tmp2(tmp3[15]).Heading;
    intl4 = tmp2(tmp3[16]).intl;
    obj11 = {
      noun: tmp16,
      orgName: organization.name,
      gameName: application.name,
      orgNameHook(children, arg1) {
          const obj = { variant: "heading-xl/semibold", color: "text-strong", children };
          return closure_1_7(closure_0(first[15]).Text, obj, arg1);
        }
    };
    items1[1] = closure_7(Heading, obj10);
    let tmp17Result = null != memberCount && null != maxMembers;
    if (tmp17Result) {
      const obj12 = { spacing: require("native").space.PX_4, direction: "horizontal", align: "center", justify: "center", children: items2 };
      const Stack = tmp2(tmp3[12]).Stack;
      const obj13 = { size: "xs", color: require("native").colors.ICON_MUTED };
      const GroupIcon = tmp2(tmp3[18]).GroupIcon;
      items2 = [closure_7(GroupIcon, obj13), ];
      const obj14 = { variant: "heading-sm/medium", color: "text-subtle", children: intl.formatToPlainString(require("module_2555").VuENGl, obj15) };
      const Text = tmp2(tmp3[15]).Text;
      intl = tmp2(tmp3[16]).intl;
      obj15 = { count: memberCount, max: maxMembers };
      items2[1] = closure_7(Text, obj14);
      tmp17Result = tmp17(Stack, obj12);
    }
    items1[2] = tmp17Result;
    items[1] = closure_8(Stack4, obj6);
    items3 = [closure_8(Stack3, obj4), ];
    let tmp18Result = tmp7;
    if (tmp18Result) {
      const obj16 = { characters: data, selectedCharacterId, onSelect: tmp12, noun: tmp16 };
      tmp18Result = tmp18(tmp4(tmp3[19]), obj16);
    }
    items3[1] = tmp18Result;
    const obj17 = { children: closure_8(Stack2, obj3) };
    const items4 = [closure_7(ModalContent, obj17), ];
    const ModalFooter = tmp2(tmp3[20]).ModalFooter;
    const obj18 = {
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
    const obj19 = { children: items4 };
    const obj20 = { children: closure_7(Button, obj18) };
    items4[1] = closure_7(ModalFooter, obj20);
    return closure_8(ModalScreen, obj19);
  }
}
