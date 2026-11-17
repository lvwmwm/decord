// Module ID: 14544
// Function ID: 14545
// Name: showConjureShareToServerSheet
// Dependencies: [5, 19, 17, 7025, 21, 5310, 575, 504, 14532, 5546, 6009, 1113, 4133, 7961, 7923, 7755, 7757, 14545, 14548, 5923, 5930, 2]
// Exports: default

// Module 14544 (showConjureShareToServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5546 */;
import TableRadioRow from "TableRadioRow" /* 7757 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
function AddToAnotherServerSheet(projectId) {
  let BottomSheetTitleHeader;
  let closure_2;
  let guild;
  let guilds;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj3;
  let obj4;
  let tmp8;
  let tmp9;
  projectId = projectId.projectId;
  const guildId = projectId.guildId;
  dependencyMap = undefined;
  guild = undefined;
  let sharing;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let server;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: closure_2_2.share(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value.shared) {
              let name;
              obj = tmp3(c2[9]);
              obj.hideActionSheet(closure_1_8);
              const open = tmp3(c2[10]).open;
              const tmp10 = tmp3(c2[10]);
              const intl = server(c2[11]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj6 = { app: closure_129_1, server };
              const prop = tmp3(c2[12])["4WtS+v"];
              const tmp8 = closure_1_8;
              if (closure_129_3 != null) {
                name = closure_129_3.name;
              }
              server = name;
              if (name == null) {
                server = "";
              }
              const obj7 = { text: formatToPlainString(prop, obj6), variant: "success" };
              open(tmp8, obj7);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c3 = 3;
          throw tmp18;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = projectId;
  const tmp3 = dependencyMap;
  const tmp = closure_9();
  obj = projectId(504);
  const items = [obj];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp6 = str(14532)(projectId, guildId, null, true);
  dependencyMap = tmp6;
  ({ guilds, guild } = tmp6);
  sharing = tmp6.sharing;
  const error = tmp6.error;
  let obj2 = { header: closure_6(BottomSheetTitleHeader, obj3), children: tmp8(tmp9, obj4) };
  const ActionSheet = tmp2(7961).ActionSheet;
  obj3 = { title: intl.formatToPlainString(str(4133)["Aet9+Z"], { app: str }) };
  BottomSheetTitleHeader = tmp2(7923).BottomSheetTitleHeader;
  intl = tmp2(1113).intl;
  obj4 = { style: tmp.content, children: items2 };
  let tmp7Result = null;
  tmp8 = closure_7;
  tmp9 = sharing;
  if (null != guild) {
    let obj5 = {
      title: intl2.string(tmp5(4133).Uq5hU9),
      hasIcons: false,
      value: guild.id,
      onChange: tmp6.pickGuild,
      children: guilds.map((id) => {
          obj = { value: id.id, label: id.name, disabled: sharing };
          return metroRequire(TableRadioRow.TableRadioRow, obj, id.id);
        })
    };
    const TableRadioGroup = tmp2(7755).TableRadioGroup;
    intl2 = tmp2(1113).intl;
    tmp7Result = tmp7(TableRadioGroup, obj5);
  }
  items2 = [tmp7Result, , , , , ];
  let tmp13 = stateFromStores;
  const tmp5Result = str(14545);
  const conjureAddToAnotherServerRows = tmp2(14548).conjureAddToAnotherServerRows;
  tmp2(14548);
  if (stateFromStores == null) {
    tmp13 = null;
  }
  let obj6 = { rows: conjureAddToAnotherServerRows(tmp13) };
  items2[1] = closure_6(tmp5Result, obj6);
  let obj7 = { variant: "body-sm/normal", color: "text-muted", children: intl3.string(tmp5(4133).Ewprwt) };
  const Text = tmp2(5923).Text;
  intl3 = tmp2(1113).intl;
  items2[2] = closure_6(Text, obj7);
  let tmp7Result2 = null;
  if (null != error) {
    const obj8 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp7Result2 = tmp7(tmp2(5923).Text, obj8);
  }
  items2[3] = tmp7Result2;
  const obj9 = {
    variant: "primary",
    text: intl4.string(str(4133)["+uQwxA"]),
    loading: sharing,
    disabled: null == guild,
    onPress: function confirm() {
      return obj(...arguments);
    }
  };
  const Button = tmp2(5930).Button;
  intl4 = tmp2(1113).intl;
  items2[4] = closure_6(Button, obj9);
  const obj10 = {
    variant: "secondary",
    text: intl5.string(tmp2(1113).t["ETE/oC"]),
    disabled: sharing,
    onPress() {
      obj = str(closure_2[9]);
      return obj.hideActionSheet(ConjureShareToServerSheet);
    }
  };
  const Button2 = tmp2(5930).Button;
  intl5 = tmp2(1113).intl;
  items2[5] = closure_6(Button2, obj10);
  return closure_6(ActionSheet, obj2);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  let obj2;
  const obj = { key: ConjureShareToServerSheet, content: metroRequire(AddToAnotherServerSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
