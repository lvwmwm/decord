// Module ID: 16234
// Function ID: 125491
// Name: SafetyCheckScreen
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16234 (SafetyCheckScreen)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";
import closure_7 from "result";
import result from "result";
import result from "result";
import result from "result";

({ Image: closure_5, View: closure_6 } = result);
({ VerificationLevels: closure_8, GuildExplicitContentFilterTypes: closure_9 } = result);
({ jsx: closure_10, jsxs: closure_11 } = result);
result = result.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default function SafetyCheckScreen() {
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[6]);
  const token = obj.useToken(importDefault(dependencyMap[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[8]);
  const enableCommunitySharedStyles = obj1.useEnableCommunitySharedStyles();
  let obj2 = arg1(dependencyMap[9]);
  const items = [closure_7];
  const guild = obj2.useStateFromStoresObject(items, () => props.getProps()).guild;
  const arg1 = guild;
  let verificationLevel;
  if (null != guild) {
    verificationLevel = guild.verificationLevel;
  }
  if (null == verificationLevel) {
    verificationLevel = constants.NONE;
  }
  const first = callback(React.useState(verificationLevel), 1)[0];
  const importDefault = first;
  let prop;
  if (null != guild) {
    prop = guild.explicitContentFilter;
  }
  if (null == prop) {
    prop = constants2.ALL_MEMBERS;
  }
  const first1 = callback(React.useState(prop), 1)[0];
  const dependencyMap = first1;
  let tmp16Result = null;
  if (null != guild) {
    obj = { headerRef: ref, currentStep: arg1(dependencyMap[11]).EnableCommunityModalSteps.STEP_1 };
    let tmp20 = guild.explicitContentFilter !== constants2.ALL_MEMBERS;
    if (!tmp20) {
      tmp20 = guild.verificationLevel === constants.NONE;
    }
    obj.disableNextStep = tmp20;
    obj = { style: enableCommunitySharedStyles.content };
    obj1 = { "Bool(false)": 2137542913, "Bool(false)": 1359050337, "Bool(false)": 507643607, "Bool(false)": 2113930363, ref };
    const intl = arg1(dependencyMap[13]).intl;
    obj1.children = intl.formatToPlainString(arg1(dependencyMap[13]).t.tInpJj, { constructor: 0, height: null });
    const items1 = [callback2(arg1(dependencyMap[12]).Text, obj1), , , ];
    obj2 = { resizeMode: "contain", source: tmp5.safetyCheck };
    items1[1] = callback2(closure_5, obj2);
    const obj3 = { style: enableCommunitySharedStyles.header };
    const intl2 = arg1(dependencyMap[13]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[13]).t.QrjLYl);
    items1[2] = callback2(arg1(dependencyMap[12]).Heading, obj3);
    const obj4 = { delete: true, dispatch: true, raw: true, style: enableCommunitySharedStyles.description };
    const intl3 = arg1(dependencyMap[13]).intl;
    obj4.children = intl3.string(arg1(dependencyMap[13]).t.i1STwu);
    items1[3] = callback2(arg1(dependencyMap[12]).Text, obj4);
    obj.children = items1;
    const items2 = [callback3(closure_6, obj), ];
    const obj5 = { spacing: 24 };
    const obj6 = { paddingHorizontal: token };
    obj5.style = obj6;
    const obj7 = {};
    const intl4 = arg1(dependencyMap[13]).intl;
    obj7.helperText = intl4.string(arg1(dependencyMap[13]).t.fHiGA0);
    obj7.hasIcons = false;
    const obj8 = { formSwitchDisabled: tmp13 };
    const obj9 = {};
    const intl5 = arg1(dependencyMap[13]).intl;
    obj9.label = intl5.string(arg1(dependencyMap[13]).t.rkA56+);
    obj9.value = guild.verificationLevel !== constants.NONE;
    obj9.disabled = tmp13;
    obj9.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (guild.verificationLevel < constants.LOW) {
            let obj = { verificationLevel: constants.LOW };
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
    obj8.children = callback2(arg1(dependencyMap[17]).TableSwitchRow, obj9);
    obj7.children = callback2(importDefault(dependencyMap[16]), obj8);
    const items3 = [callback2(arg1(dependencyMap[15]).TableRowGroup, obj7), ];
    const obj10 = {};
    const intl6 = arg1(dependencyMap[13]).intl;
    obj10.helperText = intl6.string(arg1(dependencyMap[13]).t.b0MaDV);
    obj10.hasIcons = false;
    const obj11 = { formSwitchDisabled: tmp14 };
    const tmp16 = callback3;
    const tmp29 = importDefault(dependencyMap[16]);
    const obj12 = {};
    const intl7 = arg1(dependencyMap[13]).intl;
    obj12.label = intl7.string(arg1(dependencyMap[13]).t.zOuzl7);
    obj12.value = guild.explicitContentFilter === constants2.ALL_MEMBERS;
    obj12.disabled = tmp14;
    obj12.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (guild.explicitContentFilter < constants2.ALL_MEMBERS) {
            let obj = { explicitContentFilter: constants2.ALL_MEMBERS };
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
    obj11.children = callback2(arg1(dependencyMap[17]).TableSwitchRow, obj12);
    obj10.children = callback2(importDefault(dependencyMap[16]), obj11);
    items3[1] = callback2(arg1(dependencyMap[15]).TableRowGroup, obj10);
    obj5.children = items3;
    items2[1] = callback3(arg1(dependencyMap[14]).Stack, obj5);
    obj.children = items2;
    tmp16Result = tmp16(arg1(dependencyMap[11]).EnableCommunityModalScreen, obj);
    const tmp31 = importDefault(dependencyMap[16]);
  }
  return tmp16Result;
};
