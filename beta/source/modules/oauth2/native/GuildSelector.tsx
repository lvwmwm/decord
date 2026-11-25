// Module ID: 14729
// Function ID: 14730
// Name: GuildSelector
// Dependencies: [19, 17, 1071, 21, 4913, 575, 5127, 7612, 2119, 1112, 1083, 5504, 1186, 7709, 2]
// Exports: default

// Module 14729 (GuildSelector)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { selectorGroup: { display: "flex", flexDirection: "column", gap: 8 }, select: obj2, label: obj3, error: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const styles = createStyles(obj);
const GuildSelector_str = "GuildSelector";
const result = size.fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(onGuildChange) {
  let error;
  let intl;
  let intl3;
  let items1;
  let selectedGuildId;
  ({ error, selectedGuildId } = onGuildChange);
  onGuildChange = onGuildChange.onGuildChange;
  const guilds = onGuildChange.guilds;
  const disabled = onGuildChange.disabled;
  let tmp = styles();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = react.useCallback(() => {
    let found;
    let intl;
    let tmp4;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl4.t.oM4E1A),
      items: found.map((label) => ({ label: label.name, value: label.id })),
      onItemSelect(arg0) {
        closure_1_1(arg0);
        const obj = onGuildChange(dependencyMap[6]);
        obj.hideActionSheet(GuildSelector_str);
      },
      selectedItem: tmp4,
      hasIcons: false
    };
    const tmp2 = asyncRequire(7612, dependencyMap.paths);
    intl = intl4.intl;
    found = guilds.filter((permissions) => {
      const obj = guilds(closure_1_3[10]);
      return obj.has(permissions.permissions, constants.MANAGE_GUILD);
    });
    openLazy(tmp2, GuildSelector_str, obj);
    tmp4 = selectedGuildId;
  }, items);
  let found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup, children: items1 };
  let tmp4 = closure_8;
  const obj2 = { variant: "body-sm/medium", color: "text-default", children: intl.string(selectedGuildId(1112).t["1DXFFd"]) };
  const Text = selectedGuildId(5504).Text;
  intl = selectedGuildId(1112).intl;
  items1 = [closure_7(Text, obj2), , , ];
  let tmp6Result = null;
  const tmp5 = View;
  if (null != error) {
    tmp6Result = null;
    if ("" !== error) {
      const obj3 = { style: tmp.error, children: error };
      tmp6Result = tmp6(tmp7(1186).LegacyText, obj3);
    }
  }
  items1[1] = tmp6Result;
  let name;
  const FormRow = tmp7(7709).FormRow;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp7(1112).intl;
    name = intl2.string(tmp7(1112).t.oM4E1A);
  }
  const obj4 = { label: name, disabled, trailing: closure_7(selectedGuildId(7709).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback };
  items1[2] = closure_7(FormRow, obj4);
  const obj5 = { style: tmp.label, children: intl3.format(selectedGuildId(1112).t.t9Jm9o, {}) };
  const LegacyText = tmp7(1186).LegacyText;
  intl3 = tmp7(1112).intl;
  items1[3] = closure_7(LegacyText, obj5);
  return tmp4(tmp5, obj);
};
export const useStyles = styles;
