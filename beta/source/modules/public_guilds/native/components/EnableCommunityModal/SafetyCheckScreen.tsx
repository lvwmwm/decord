// Module ID: 17469
// Function ID: 17470
// Name: SafetyCheckScreen
// Dependencies: [32, 19, 17, 9049, 1074, 21, 4531, 576, 17470, 504, 17471, 17468, 4832, 1115, 5279, 5999, 17480, 6621, 9048, 2]
// Exports: default

// Module 17469 (SafetyCheckScreen)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
({ VerificationLevels: metroImportAll, GuildExplicitContentFilterTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default function SafetyCheckScreen() {
  let TableSwitchRow;
  let TableSwitchRow2;
  let first1;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let props;
  let tmp22;
  let tmp5Result;
  let tmp5Result2;
  let verificationLevel;
  const tmp = react;
  const ref = react.useRef(null);
  let obj = guild(first1[6]);
  const token = obj.useToken(verificationLevel(first1[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[8]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(first1[9]);
  const items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  verificationLevel = undefined;
  const useState = react.useState;
  const tmp8 = verificationLevel(first1[10])();
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    let tmp10 = constants;
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(useState(verificationLevel), 1)[0];
  let prop;
  const useState2 = tmp.useState;
  const tmp11 = _slicedToArray;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = tmp11(useState2(prop), 1)[0];
  let tmp21Result = null;
  if (null != guild) {
    let obj4 = { headerRef: ref, currentStep: tmp3(tmp4[11]).EnableCommunityModalSteps.STEP_1, disableNextStep: tmp22, children: items2 };
    const EnableCommunityModalScreen = tmp3(tmp4[11]).EnableCommunityModalScreen;
    const obj5 = { style: enableCommunitySharedStyles.content, children: items1 };
    tmp22 = guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE;
    const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl.formatToPlainString(guild(first1[13]).t.tInpJj, { number: 1, total: 3 }) };
    const Text = tmp3(tmp4[12]).Text;
    intl = tmp3(tmp4[13]).intl;
    items1 = [closure_10(Text, obj6), , , ];
    const obj7 = { resizeMode: "contain", source: tmp8.safetyCheck };
    items1[1] = closure_10(closure_5, obj7);
    const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(guild(first1[13]).t.QrjLYl) };
    const Heading = tmp3(tmp4[12]).Heading;
    intl2 = tmp3(tmp4[13]).intl;
    items1[2] = closure_10(Heading, obj8);
    const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl3.string(guild(first1[13]).t.i1STwu) };
    const Text2 = tmp3(tmp4[12]).Text;
    intl3 = tmp3(tmp4[13]).intl;
    items1[3] = closure_10(Text2, obj9);
    items2 = [closure_11(closure_6, obj5), ];
    const obj10 = { spacing: 24, style: obj11, children: items3 };
    obj11 = { paddingHorizontal: token };
    const Stack = tmp3(tmp4[14]).Stack;
    const obj12 = { helperText: intl4.string(guild(first1[13]).t.fHiGA0), hasIcons: false, children: closure_10(tmp5Result, obj13) };
    const TableRowGroup = tmp3(tmp4[15]).TableRowGroup;
    intl4 = tmp3(tmp4[13]).intl;
    obj13 = { formSwitchDisabled: verificationLevel !== tmp17, children: closure_10(TableSwitchRow, obj14) };
    obj14 = {
      label: intl5.string(guild(first1[13]).t["rkA56+"]),
      value: guild.verificationLevel !== constants.NONE,
      disabled: verificationLevel !== tmp17,
      onValueChange(arg0) {
          if (null != guild) {
            const tmp10 = arg0;
            if (tmp10) {
              if (tmp.verificationLevel < metroImportAll.LOW) {
                const obj2 = { verificationLevel: tmp2.LOW };
                const obj3 = GuildSettingsActionCreatorsDefault;
                obj3.updateGuild(obj2);
              }
            }
            if (!arg0) {
              const obj4 = { verificationLevel };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateGuild(obj4);
            }
          }
        }
    };
    tmp5Result = verificationLevel(first1[16]);
    TableSwitchRow = tmp3(tmp4[17]).TableSwitchRow;
    intl5 = tmp3(tmp4[13]).intl;
    items3 = [closure_10(TableRowGroup, obj12), ];
    const obj15 = { helperText: intl6.string(guild(first1[13]).t.b0MaDV), hasIcons: false, children: closure_10(tmp5Result2, obj16) };
    const TableRowGroup2 = tmp3(tmp4[15]).TableRowGroup;
    intl6 = tmp3(tmp4[13]).intl;
    obj16 = { formSwitchDisabled: first1 === tmp19, children: closure_10(TableSwitchRow2, obj17) };
    obj17 = {
      label: intl7.string(guild(first1[13]).t.zOuzl7),
      value: guild.explicitContentFilter === constants2.ALL_MEMBERS,
      disabled: first1 === tmp19,
      onValueChange(arg0) {
          if (null != guild) {
            const tmp10 = arg0;
            if (tmp10) {
              if (tmp.explicitContentFilter < constants.ALL_MEMBERS) {
                const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
                const obj3 = GuildSettingsActionCreatorsDefault;
                obj3.updateGuild(obj2);
              }
            }
            if (!arg0) {
              const obj4 = { explicitContentFilter: first1 };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateGuild(obj4);
            }
          }
        }
    };
    tmp5Result2 = verificationLevel(first1[16]);
    TableSwitchRow2 = tmp3(tmp4[17]).TableSwitchRow;
    intl7 = tmp3(tmp4[13]).intl;
    items3[1] = closure_10(TableRowGroup2, obj15);
    items2[1] = closure_11(Stack, obj10);
    tmp21Result = tmp21(EnableCommunityModalScreen, obj4);
  }
  return tmp21Result;
};
