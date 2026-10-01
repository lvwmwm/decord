// Module ID: 11674
// Function ID: 11675
// Name: OptionalCommandOptionList
// Dependencies: [19, 17, 21, 5999, 5917, 5281, 1115, 2]
// Exports: default

// Module 11674 (OptionalCommandOptionList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(arg0) {
  let options;
  ({ options, onSelectOption: require } = arg0);
  let tmp2 = null;
  if (0 !== options.length) {
    const obj2 = {
      hasIcons: false,
      children: options.map((displayName) => {
          let intl;
          require = displayName;
          const TableRow = TableRow2.TableRow;
          ({
            accessibilityRole: "none",
            variant: "tertiary",
            size: "sm",
            shrink: true,
            text: intl.string(intl2.t.OYkgVk),
            onPress() {
              return require(displayName);
            }
          });
          const Button = components_Button_Button.Button;
          intl = intl2.intl;
          return <TableRow key={arg0.name} onPress={function onPress() {
            return require(displayName);
          }} label={arg0.displayName} subLabel={arg0.displayDescription} trailing={null} />;
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp2 = <View style={tmp} collapsable={false}>{null}</View>;
  }
  return tmp2;
};
