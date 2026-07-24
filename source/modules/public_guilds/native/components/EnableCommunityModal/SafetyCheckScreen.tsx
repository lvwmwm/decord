// Module ID: 16406
// Function ID: 128031
// Name: SafetyCheckScreen
// Dependencies: [57, 31, 27, 8483, 653, 33, 3834, 689, 16407, 566, 16408, 16405, 4126, 1212, 4541, 5501, 16417, 5502, 8482, 2]
// Exports: default

// Module 16406 (SafetyCheckScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ VerificationLevels: closure_8, GuildExplicitContentFilterTypes: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default function SafetyCheckScreen() {
  const ref = React.useRef(null);
  let obj = guild(first1[6]);
  const token = obj.useToken(first(first1[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = guild(first1[8]);
  const enableCommunitySharedStyles = obj1.useEnableCommunitySharedStyles();
  let obj2 = guild(first1[9]);
  const items = [_isNativeReflectConstruct];
  guild = obj2.useStateFromStoresObject(items, () => outer1_7.getProps()).guild;
  let verificationLevel;
  if (null != guild) {
    verificationLevel = guild.verificationLevel;
  }
  if (null == verificationLevel) {
    verificationLevel = constants.NONE;
  }
  first = callback(React.useState(verificationLevel), 1)[0];
  let prop;
  if (null != guild) {
    prop = guild.explicitContentFilter;
  }
  if (null == prop) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = callback(React.useState(prop), 1)[0];
  let tmp16Result = null;
  if (null != guild) {
    obj = { headerRef: ref, currentStep: guild(first1[11]).EnableCommunityModalSteps.STEP_1 };
    let tmp20 = guild.explicitContentFilter !== constants2.ALL_MEMBERS;
    if (!tmp20) {
      tmp20 = guild.verificationLevel === constants.NONE;
    }
    obj.disableNextStep = tmp20;
    obj = { style: enableCommunitySharedStyles.content };
    obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle" };
    const intl = guild(first1[13]).intl;
    obj1.children = intl.formatToPlainString(guild(first1[13]).t.tInpJj, { number: 1, total: 3 });
    const items1 = [callback2(guild(first1[12]).Text, obj1), , , ];
    obj2 = { resizeMode: "contain", source: tmp5.safetyCheck };
    items1[1] = callback2(closure_5, obj2);
    let obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl2 = guild(first1[13]).intl;
    obj3.children = intl2.string(guild(first1[13]).t.QrjLYl);
    items1[2] = callback2(guild(first1[12]).Heading, obj3);
    const obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle" };
    const intl3 = guild(first1[13]).intl;
    obj4.children = intl3.string(guild(first1[13]).t.i1STwu);
    items1[3] = callback2(guild(first1[12]).Text, obj4);
    obj.children = items1;
    const items2 = [callback3(closure_6, obj), ];
    const obj5 = { spacing: 24 };
    const obj6 = { paddingHorizontal: token };
    obj5.style = obj6;
    const obj7 = {};
    const intl4 = guild(first1[13]).intl;
    obj7.helperText = intl4.string(guild(first1[13]).t.fHiGA0);
    obj7.hasIcons = false;
    const obj8 = { formSwitchDisabled: tmp13 };
    const obj9 = {};
    const intl5 = guild(first1[13]).intl;
    obj9.label = intl5.string(guild(first1[13]).t["rkA56+"]);
    obj9.value = guild.verificationLevel !== constants.NONE;
    obj9.disabled = tmp13;
    obj9.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (guild.verificationLevel < outer1_8.LOW) {
            let obj = { verificationLevel: outer1_8.LOW };
            first(first1[18]).updateGuild(obj);
            const obj3 = first(first1[18]);
          }
        }
        if (!arg0) {
          obj = first(first1[18]);
          obj = { verificationLevel: first };
          obj.updateGuild(obj);
        }
      }
    };
    obj8.children = callback2(guild(first1[17]).TableSwitchRow, obj9);
    obj7.children = callback2(first(first1[16]), obj8);
    const items3 = [callback2(guild(first1[15]).TableRowGroup, obj7), ];
    const obj10 = {};
    const intl6 = guild(first1[13]).intl;
    obj10.helperText = intl6.string(guild(first1[13]).t.b0MaDV);
    obj10.hasIcons = false;
    const obj11 = { formSwitchDisabled: tmp14 };
    const tmp16 = callback3;
    const tmp29 = first(first1[16]);
    const obj12 = {};
    const intl7 = guild(first1[13]).intl;
    obj12.label = intl7.string(guild(first1[13]).t.zOuzl7);
    obj12.value = guild.explicitContentFilter === constants2.ALL_MEMBERS;
    obj12.disabled = tmp14;
    obj12.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (guild.explicitContentFilter < outer1_9.ALL_MEMBERS) {
            let obj = { explicitContentFilter: outer1_9.ALL_MEMBERS };
            first(first1[18]).updateGuild(obj);
            const obj3 = first(first1[18]);
          }
        }
        if (!arg0) {
          obj = first(first1[18]);
          obj = { explicitContentFilter: first1 };
          obj.updateGuild(obj);
        }
      }
    };
    obj11.children = callback2(guild(first1[17]).TableSwitchRow, obj12);
    obj10.children = callback2(first(first1[16]), obj11);
    items3[1] = callback2(guild(first1[15]).TableRowGroup, obj10);
    obj5.children = items3;
    items2[1] = callback3(guild(first1[14]).Stack, obj5);
    obj.children = items2;
    tmp16Result = tmp16(guild(first1[11]).EnableCommunityModalScreen, obj);
    const tmp31 = first(first1[16]);
  }
  return tmp16Result;
};
