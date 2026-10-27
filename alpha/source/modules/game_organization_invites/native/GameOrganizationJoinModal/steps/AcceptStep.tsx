// Module ID: 12740
// Function ID: 12741
// Name: AcceptStep
// Dependencies: [5, 32, 19, 17, 12734, 21, 4972, 587, 558, 576, 5670, 5235, 5978, 12736, 1502, 11324, 5664, 1125, 7901, 7902, 2403, 12741, 12739, 6697, 5245, 2]
// Exports: AcceptStep

// Module 12740 (AcceptStep)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2403 from "module_2403" /* 2403 */;
import Text_Text from "Text/Text" /* 5235 */;
import FastImageDefault from "FastImage" /* 5670 */;
import Stack_Stack from "Stack/Stack" /* 5978 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12736 */;
import GameOrganizationLinkedServerCardDefault from "GameOrganizationLinkedServerCard" /* 12741 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12734 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ closeGameOrganizationJoinModal: metroImportDefault, GameOrganizationJoinScenes: metroImportAll } = GameOrganizationJoinModalConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { text: { textAlign: "center" }, benefitCard: { flex: 1 }, benefitImage: obj2 };
obj2 = { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitCard(arg0) {
  let img;
  let items;
  let obj5;
  let text;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  ({ text, img } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === img) {
    let tmp5;
    let tmp11;
    if (cResult[1] === tmp4.benefitImage) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== text) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", children: text };
      const tmp13 = React4(Text_Text.Text, obj2);
      cResult[3] = text;
      cResult[4] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.benefitCard) {
      if (cResult[6] === tmp5) {
        let tmp14;
        if (cResult[7] === tmp11) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
    }
    const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp4.benefitCard, children: items };
    const Stack = tmp(5978).Stack;
    items = [tmp5, tmp11];
    const tmp17 = authStore(Stack, obj3);
    cResult[5] = tmp4.benefitCard;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
  if (null != img) {
    const obj4 = { source: obj5, style: tmp4.benefitImage, resizeMode: "cover", accessible: false };
    obj5 = { uri: img };
    tmp8 = React4(FastImageDefault, obj4);
  } else {
    const obj6 = { style: tmp4.benefitImage };
    tmp8 = React4(View, obj6);
  }
  cResult[0] = img;
  cResult[1] = tmp4.benefitImage;
  cResult[2] = tmp8;
  tmp5 = tmp8;
}) : (function BenefitCard(img) {
  let items;
  let obj3;
  let tmp6;
  let tmp8;
  img = img.img;
  const text = img.text;
  const tmp = closure_11();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.benefitCard, children: items };
  const Stack = Stack_Stack.Stack;
  const tmp2 = authStore;
  if (null != img) {
    const obj2 = { source: obj3, style: tmp.benefitImage, resizeMode: "cover", accessible: false };
    obj3 = { uri: img };
    tmp8 = React4(FastImageDefault, obj2);
    tmp6 = React4;
  } else {
    tmp6 = React4;
    const obj4 = { style: tmp.benefitImage };
    tmp8 = React4(View, obj4);
  }
  items = [tmp8, tmp6(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: text })];
  return tmp2(Stack, obj);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export const AcceptStep = function AcceptStep(code) {
  let ButtonGroup;
  let WmxMAI;
  let _undefined;
  let c2;
  let closure_1;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj15;
  let obj7;
  let tmp7;
  code = code.code;
  dependencyMap = undefined;
  let obj = function _handleAcceptInvite() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let intl;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let failureReason;
        try {
          let closure_0;
          let joinStatus;
          let guild_join_status;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              joinStatus = undefined;
              failureReason = undefined;
              guild_join_status = undefined;
              _undefined(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj5 = { value: obj3.acceptGameOrganizationInvite(code), done: false };
              obj3 = joinStatus(failureReason[15]);
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2(false);
            throw failureReason;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj6 = { text: intl.string(closure_0(failureReason[17]).t.fEptJP) };
              const open = joinStatus(failureReason[16]).open;
              const tmp11 = joinStatus(failureReason[16]);
              intl = closure_0(failureReason[17]).intl;
              open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj6);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_2(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              joinStatus = closure_0.game_organization_join_status;
              failureReason = closure_0.game_organization_join_failure_reason;
              guild_join_status = closure_0.guild_join_status;
              const obj7 = { joinStatus, failureReason, guildJoinStatus: guild_join_status };
              closure_129_1.push(constants.OUTCOME, obj7);
              c3 = 1;
            }
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp29) {
          failureReason = tmp29;
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else if (1 === tmp31) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp3 = dependencyMap;
  const tmp = closure_11();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  obj = code(1502);
  importDefault = obj.useNavigation();
  [tmp7, c2] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    const linkedGuild = tmp4.linkedGuild;
    let tmp11 = closure_9;
    const ModalScreen = tmp5(7901).ModalScreen;
    const ModalContent = tmp5(7902).ModalContent;
    let obj2 = { spacing: tmp2(587).space.PX_48, children: items1 };
    const Stack3 = tmp5(5978).Stack;
    let obj3 = { spacing: tmp2(587).space.PX_24, children: items };
    const Stack4 = tmp5(5978).Stack;
    let obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj7) };
    const Text2 = tmp5(5235).Text;
    const intl6 = tmp5(1125).intl;
    formatToPlainString = intl6.formatToPlainString;
    WmxMAI = tmp2(2403).WmxMAI;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: items4 };
    let obj6 = { children: tmp10(Stack3, obj2) };
    obj7 = { displayNoun: str };
    items = [tmp11(Text2, obj4), ];
    const obj8 = { linkedGuild };
    items[1] = tmp11(GameOrganizationLinkedServerCardDefault, obj8);
    items1 = [tmp10(Stack4, obj3), ];
    const obj9 = { spacing: nativeDefault.space.PX_24, children: items2 };
    const Stack = tmp5(5978).Stack;
    const obj10 = { variant: "heading-lg/semibold", children: intl.string(_modDef2403.yFqGy8) };
    const Text = tmp5(5235).Text;
    intl = tmp5(1125).intl;
    items2 = [tmp11(Text, obj10), ];
    const obj11 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, children: items3 };
    const Stack2 = tmp5(5978).Stack;
    const obj12 = { text: intl2.string(_modDef2403.WUVzdk) };
    intl2 = tmp5(1125).intl;
    items3 = [tmp11(closure_12, obj12), ];
    const obj13 = { text: intl3.string(_modDef2403.MEQJ1m) };
    intl3 = tmp5(1125).intl;
    items3[1] = tmp11(closure_12, obj13);
    items2[1] = closure_10(Stack2, obj11);
    items1[1] = closure_10(Stack, obj9);
    items4 = [tmp11(ModalContent, obj6), ];
    const obj14 = { children: closure_10(ButtonGroup, obj15) };
    const ModalFooter = tmp5(12739).ModalFooter;
    obj15 = { children: items5 };
    ButtonGroup = tmp5(6697).ButtonGroup;
    const obj16 = {
      text: intl4.string(_modDef2403.BaZ6nt),
      size: "lg",
      loading: tmp7,
      disabled: tmp7,
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        }
    };
    const Button = tmp5(5245).Button;
    intl4 = tmp5(1125).intl;
    items5 = [tmp11(Button, obj16), ];
    const obj17 = { text: intl5.string(code(1125).t["ETE/oC"]), size: "lg", variant: "secondary", onPress, disabled: tmp7 };
    const Button2 = tmp5(5245).Button;
    intl5 = tmp5(1125).intl;
    items5[1] = tmp11(Button2, obj17);
    items4[1] = tmp11(ModalFooter, obj14);
    return closure_10(ModalScreen, obj5);
  }
};
