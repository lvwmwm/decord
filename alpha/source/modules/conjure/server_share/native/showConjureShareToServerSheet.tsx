// Module ID: 13312
// Function ID: 13313
// Name: showConjureShareToServerSheet
// Dependencies: [5, 19, 17, 7017, 21, 5306, 575, 504, 13189, 1113, 4131, 5552, 6015, 7951, 7913, 7745, 7747, 13313, 13316, 5929, 5936, 2]
// Exports: default

// Module 13312 (showConjureShareToServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import TableRadioRow from "TableRadioRow" /* 7747 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3, c4, closure_2, dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
function ShareToServerSheet(projectId) {
  let addingToAnother;
  let guild;
  let guildId;
  let guilds;
  let intl2;
  let intl3;
  let intl5;
  let items2;
  let obj3;
  let publishOptions;
  let result;
  let tmp11;
  let tmp12;
  projectId = projectId.projectId;
  ({ guildId, publishOptions, addingToAnother } = projectId);
  if (addingToAnother === undefined) {
    addingToAnother = false;
  }
  dependencyMap = undefined;
  guild = undefined;
  let sharing;
  let closure_5;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let server;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp4;
              server = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: closure_2_2.share(), done: false };
              return obj5;
            }
          } else {
            if (1 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                server = value;
                const shared = server.shared && !closure_130_5.current;
                if (shared) {
                  const obj2 = tmp(closure_2[11]);
                  obj2.hideActionSheet(closure_1_9);
                  if ("publish" === server.next) {
                    c3 = 2;
                    c4 = 1;
                    const obj7 = { value: closure_130_2.publish(), done: false };
                    return obj7;
                  } else {
                    let o2xHEb;
                    const open = tmp(closure_2[12]).open;
                    const tmp39 = tmp(closure_2[12]);
                    const intl = server(closure_2[9]).intl;
                    const formatToPlainString = intl.formatToPlainString;
                    const tmp40 = closure_1_9;
                    if ("added" === server.next) {
                      o2xHEb = tmp(closure_2[10])["4WtS+v"];
                    } else {
                      o2xHEb = tmp(closure_2[10]).o2xHEb;
                    }
                    const obj8 = { app: closure_130_1, server };
                    let name;
                    if (closure_130_3 != null) {
                      name = closure_130_3.name;
                    }
                    server = name;
                    if (name == null) {
                      server = "";
                    }
                    const obj9 = { text: formatToPlainString(o2xHEb, obj8), variant: "success" };
                    open(tmp40, obj9);
                  }
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          c4 = 3;
          throw tmp29;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp3 = dependencyMap;
  const tmp = closure_10();
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
  const tmp6 = str(13189)(projectId, guildId, publishOptions, addingToAnother);
  dependencyMap = tmp6;
  ({ guilds, guild } = tmp6);
  sharing = tmp6.sharing;
  const error = tmp6.error;
  let intl = tmp2(1113).intl;
  let formatToPlainString = intl.formatToPlainString;
  const tmp7 = str(4131);
  const formatToPlainStringResult = formatToPlainString(addingToAnother ? tmp7["Aet9+Z"] : tmp7.N3Ryqz, { app: str });
  closure_5 = sharing.useRef(false);
  const effect = sharing.useEffect(() => {
    closure_5.current = false;
    return () => {
      closure_1_5.current = true;
    };
  }, []);
  let obj2 = { header: closure_7(tmp2(7913).BottomSheetTitleHeader, { title: formatToPlainStringResult }), children: tmp11(tmp12, obj3) };
  const ActionSheet = tmp2(7951).ActionSheet;
  obj3 = { style: tmp.content, children: items2 };
  let tmp10Result = null;
  tmp11 = closure_8;
  tmp12 = closure_5;
  if (null != guild) {
    if (addingToAnother) {
      let obj4 = {
        title: intl2.string(tmp5(4131).Uq5hU9),
        hasIcons: false,
        value: guild.id,
        onChange: tmp6.pickGuild,
        children: guilds.map((id) => {
              obj = { value: id.id, label: id.name, disabled: sharing };
              return metroImportDefault(TableRadioRow.TableRadioRow, obj, id.id);
            })
      };
      const TableRadioGroup = tmp2(7745).TableRadioGroup;
      intl2 = tmp2(1113).intl;
      tmp10Result = tmp10(TableRadioGroup, obj4);
    } else {
      tmp10Result = null;
    }
  }
  items2 = [tmp10Result, , , , , ];
  const tmp5Result = str(13313);
  const tmp2Result = projectId(13316);
  if (addingToAnother) {
    result = tmp2Result.conjureAddToAnotherServerRows(stateFromStores);
  } else {
    result = tmp2Result.conjureShareRows(stateFromStores);
  }
  items2[1] = closure_7(tmp5Result, { rows: result });
  let tmp10Result3 = null;
  if (addingToAnother) {
    let obj5 = { variant: "body-sm/normal", color: "text-muted", children: intl3.string(tmp5(4131).Ewprwt) };
    const Text = tmp2(5929).Text;
    intl3 = tmp2(1113).intl;
    tmp10Result3 = tmp10(Text, obj5);
  }
  items2[2] = tmp10Result3;
  let tmp10Result4 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp10Result4 = tmp10(tmp2(5929).Text, obj6);
  }
  items2[3] = tmp10Result4;
  const Button = tmp2(5936).Button;
  const intl4 = tmp2(1113).intl;
  const string = intl4.string;
  const tmp5Result2 = str(4131);
  let obj7 = {
    variant: "primary",
    text: string(addingToAnother ? tmp5Result2["+uQwxA"] : tmp5Result2["+ysSG7"]),
    loading: sharing,
    disabled: null == guild,
    onPress: function confirm() {
      return obj(...arguments);
    }
  };
  items2[4] = closure_7(Button, obj7);
  let obj8 = {
    variant: "secondary",
    text: intl5.string(tmp2(1113).t["ETE/oC"]),
    disabled: sharing,
    onPress() {
      obj = str(closure_2[11]);
      return obj.hideActionSheet(ConjureShareToServerSheet);
    }
  };
  const Button2 = tmp2(5936).Button;
  intl5 = tmp2(1113).intl;
  items2[5] = closure_7(Button2, obj8);
  return closure_7(ActionSheet, obj2);
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  let obj2;
  const obj = { key: ConjureShareToServerSheet, content: metroImportDefault(ShareToServerSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
