// Module ID: 16478
// Function ID: 16479
// Name: GuildRoleSubscriptionTierTemplateUpsellActionSheet
// Dependencies: [32, 19, 17, 5079, 1085, 2060, 21, 5090, 587, 558, 576, 8613, 8302, 573, 1126, 8401, 5086, 5375, 5054, 6829, 2]

// Module 16478 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8302 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ GuildSettingsSections: metroImportDefault, GuildSettingsSubsections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 1.7289156626506024;
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
let createStyles = createStyles_mod;
let obj = { container: obj2, videoContainer: obj3, info: { marginTop: 16, alignItems: "center" }, title: { marginTop: 24, textAlign: "center" }, subtitle: { marginTop: 12, textAlign: "center" }, footer: { marginTop: 32 }, button: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_14 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplateUpsellActionSheet(guildId) {
  let closure_4;
  let isScreenLandscape;
  let tmp8;
  let useReducedMotion;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(47);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp4 = closure_14();
  if (cResult[0] === guildId) {
    let tmp12;
    let tmp11;
    let tmp15;
    let tmp17;
    let tmp16;
    let tmp20;
    [tmp8, dependencyMap] = isScreenLandscape(react.useState(0), 2);
    isScreenLandscape(react.useState(0), 2);
    const tmpResult = guildId(8302);
    isScreenLandscape = tmpResult.useIsScreenLandscape();
    const _Symbol = Symbol;
    const obj2 = react;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class C {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = C;
      tmp12 = C;
      tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const tmpResult2 = guildId(573);
    const stateFromStores = tmpResult2.useStateFromStores(tmp11, tmp12);
    if (cResult[5] !== isScreenLandscape) {
      function setWidth(arg0) {
        const diff = arg0 - 32;
        let result = diff;
        const tmp2 = dependencyMap;
        if (isScreenLandscape) {
          result = diff / 2;
        }
        tmp2(result);
      }
      cResult[5] = isScreenLandscape;
      class C {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[6] = setWidth;
      tmp15 = setWidth;
    } else {
      tmp15 = cResult[6];
    }
    react = tmp15;
    if (cResult[7] !== markAsDismissed) {
      class W {
        constructor() {
          return () => markAsDismissed(constants.UNKNOWN);
        }
      }
      const items1 = [markAsDismissed];
      class C {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[7] = markAsDismissed;
      cResult[8] = W;
      cResult[9] = items1;
      tmp17 = items1;
      tmp16 = W;
    } else {
      class W {
        constructor() {
          return () => markAsDismissed(constants.UNKNOWN);
        }
      }
      tmp17 = cResult[9];
    }
    const effect = obj2.useEffect(tmp16, tmp17);
    const container = tmp4.container;
    if (cResult[10] !== tmp15) {
      class G {
        constructor(nativeEvent) {
          return closure_4(nativeEvent.nativeEvent.layout.width);
        }
      }
      cResult[10] = tmp15;
      class C {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[11] = G;
    } else {
      class G {
        constructor(nativeEvent) {
          return closure_4(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(nativeEvent) {
          return closure_4(nativeEvent.nativeEvent.layout.width);
        }
      }
      const stringResult = obj5.string(guildId(1126).t.gCgirr);
      class C {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[12] = stringResult;
      tmp20 = stringResult;
    } else {
      class G {
        constructor(nativeEvent) {
          return closure_4(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    let result = tmp8 / c12;
    if (cResult[13] === tmp4.videoContainer) {
      class G {
        constructor(nativeEvent) {
          return closure_4(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const obj3 = { accessibilityRole: "image", accessibilityLabel: tmp20, children: closure_10(markAsDismissed(8401), size) };
    size = { style: tmp4.videoContainer, src, width: tmp8, height: result, muted: true, paused: stateFromStores, ariaHidden: true };
    cResult[13] = tmp4.videoContainer;
    cResult[14] = result;
    cResult[15] = stateFromStores;
    cResult[16] = tmp8;
    cResult[17] = closure_10(View, obj3);
    const tmp29 = closure_10(View, obj3);
  }
  function handleClickUseTemplate() {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.open(guildId, metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS, undefined, metroImportAll.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  }
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = handleClickUseTemplate;
}) : (function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let Button;
  let Button2;
  let _undefined;
  let c2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let items3;
  let items4;
  let markAsDismissed;
  let obj11;
  let obj13;
  let obj4;
  let tmp3;
  let useReducedMotion;
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  let tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c2] = tmp2;
  let obj = useIsScreenLandscape;
  _slicedToArray = obj.useIsScreenLandscape();
  const items = [AccessibilityStore];
  const items1 = [markAsDismissed];
  const obj2 = useStateFromStores;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => () => markAsDismissed(constants.UNKNOWN), items1);
  const obj3 = { startExpanded: true, children: closure_11(View, obj4) };
  obj4 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      const tmp2 = c2;
      if (closure_3) {
        result = diff / 2;
      }
      tmp2(result);
    },
    children: items2
  };
  const obj5 = { accessibilityRole: "image", accessibilityLabel: intl.string(intl6.t.gCgirr), children: closure_10(markAsDismissed(8401), size) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  intl = intl6.intl;
  size = { style: tmp.videoContainer, src, width: tmp3, height: tmp3 / c12, muted: true, paused: stateFromStores, ariaHidden: true };
  items2 = [closure_10(View, obj5), , ];
  const obj6 = { style: tmp.info, children: items3 };
  const obj7 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: intl2.string(intl6.t.gCgirr) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items3 = [closure_10(Text, obj7), ];
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: intl3.string(intl6.t.fLMZFw) };
  const Text2 = Text_Text.Text;
  intl3 = intl6.intl;
  items3[1] = closure_10(Text2, obj8);
  items2[1] = closure_11(View, obj6);
  const obj9 = { style: tmp.footer, children: items4 };
  const obj10 = { style: tmp.button, children: closure_10(Button, obj11) };
  obj11 = {
    text: intl4.string(intl6.t.BQq86h),
    onPress: function handleClickUseTemplate() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS, undefined, metroImportAll.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
      markAsDismissed(ContentDismissActionType.UNKNOWN);
    }
  };
  Button = components_Button_Button.Button;
  intl4 = intl6.intl;
  items4 = [closure_10(View, obj10), ];
  const obj12 = { style: tmp.button, children: closure_10(Button2, obj13) };
  obj13 = {
    text: intl5.string(intl6.t.WAI6xu),
    onPress() {
      const obj = markAsDismissed(c2[18]);
      return obj.hideActionSheet();
    },
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl5 = intl6.intl;
  items4[1] = closure_10(View, obj12);
  items2[2] = closure_11(View, obj9);
  return closure_10(BottomSheet, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default tmp5;
