// Module ID: 20088
// Function ID: 20089
// Name: CommandList
// Dependencies: [19, 21, 5043, 20089, 20005, 1112, 6115, 575, 6140, 7406, 6144, 2118, 12151, 9045, 8185, 6158, 2]
// Exports: default

// Module 20088 (CommandList)
import nativeDefault from "native" /* 575 */;
import GuildSettingsModalIntegrationEmptyCardDefault from "GuildSettingsModalIntegrationEmptyCard" /* 20005 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ title: { marginBottom: 0 } });
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/CommandList.tsx");

export default function CommandList(onPressCommand) {
  let intl2;
  let intl3;
  let intl4;
  let isLoaded;
  let items;
  let stringResult;
  onPressCommand = onPressCommand.onPressCommand;
  const tmp2 = onPressCommand;
  const tmp3 = dependencyMap;
  const tmp = closure_5();
  let obj = onPressCommand(20089);
  const integrationPermissionCommandSearch = obj.useIntegrationPermissionCommandSearch();
  ({ results, isLoaded } = integrationPermissionCommandSearch);
  if (isLoaded) {
    let tmp7Result;
    if (0 !== tmp6) {
      let tmp13Result;
      let obj2 = { spacing: nativeDefault.space.PX_8, children: items };
      const Stack = tmp2(6115).Stack;
      const obj3 = { title: intl2.string(tmp2(1112).t["0hKkS+"]), style: tmp.title };
      const TableRowGroupTitle = tmp2(6140).TableRowGroupTitle;
      intl2 = tmp2(1112).intl;
      items = [closure_3(TableRowGroupTitle, obj3), , ];
      const obj4 = { size: "md", accessibilityLabel: intl3.string(tmp2(1112).t["5h0QOP"]), onChange: tmp5 };
      const SearchBar = tmp2(7406).SearchBar;
      intl3 = tmp2(1112).intl;
      items[1] = closure_3(SearchBar, obj4);
      const tmp11 = closure_4;
      const tmp12 = importDefault;
      if (results.length > 0) {
        const obj5 = {
          hasIcons: true,
          children: results.map((type) => {
                  let PaperIcon;
                  let intl;
                  let tmp2Result;
                  let tmpResult;
                  let closure_0 = type;
                  const TableRow = onPressCommand(dependencyMap[10]).TableRow;
                  const Icon = onPressCommand(dependencyMap[10]).TableRow.Icon;
                  if (type.type === onPressCommand(dependencyMap[11]).ApplicationCommandType.CHAT) {
                    PaperIcon = tmp2(tmp3[12]).SlashBoxIcon;
                  } else {
                    PaperIcon = tmp2(tmp3[13]).PaperIcon;
                  }
                  const obj = {
                    icon: closure_1_3(Icon, { IconComponent: PaperIcon }),
                    label: tmp2Result.commandName(type.type, type.displayName),
                    trailing: tmpResult,
                    arrow: true,
                    onPress() {
                      return onPressCommand(type);
                    }
                  };
                  let permissions = type.permissions;
                  const _Object = Object;
                  tmp2Result = onPressCommand(dependencyMap[14]);
                  if (permissions == null) {
                    permissions = {};
                  }
                  tmpResult = undefined;
                  if (keys(permissions).length > 0) {
                    const obj2 = { text: intl.string(onPressCommand(dependencyMap[5]).t.jH4B9O) };
                    const TableRowTrailingText = tmp2(tmp3[15]).TableRowTrailingText;
                    intl = tmp2(tmp3[5]).intl;
                    tmpResult = tmp(TableRowTrailingText, obj2);
                  }
                  return closure_1_3(TableRow, obj, type.id);
                })
        };
        const TableRowGroup = tmp2(6140).TableRowGroup;
        tmp13Result = tmp13(TableRowGroup, obj5);
      } else {
        const obj6 = { text: intl4.string(tmp2(1112).t["Xe+fJM"]) };
        const tmp12Result = tmp12(20005);
        intl4 = tmp2(1112).intl;
        tmp13Result = tmp13(tmp12Result, obj6);
      }
      items[2] = tmp13Result;
      tmp7Result = tmp11(Stack, obj2);
    }
    return tmp7Result;
  }
  const tmp8 = GuildSettingsModalIntegrationEmptyCardDefault;
  let intl = tmp2(1112).intl;
  const string = intl.string;
  const t = tmp2(1112).t;
  const tmp7 = closure_3;
  if (isLoaded) {
    stringResult = string(t["x78c+J"]);
  } else {
    stringResult = string(t.NyYbcx);
  }
  tmp7Result = tmp7(tmp8, { text: stringResult });
};
