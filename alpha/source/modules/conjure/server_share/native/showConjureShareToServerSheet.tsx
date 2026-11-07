// Module ID: 12407
// Function ID: 12408
// Name: showConjureShareToServerSheet
// Dependencies: [5, 19, 17, 6899, 21, 5140, 575, 504, 12288, 1113, 4026, 5374, 5837, 7426, 7382, 7124, 7127, 6159, 5751, 12268, 12408, 8732, 5758, 2]
// Exports: default

// Module 12407 (showConjureShareToServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5374 */;
import TableRadioRow from "TableRadioRow" /* 7127 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, c4, importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function ShareToServerSheet(projectId) {
  let Stack2;
  let blockedReason;
  let closure_1;
  let closure_4;
  let guild;
  let guildId;
  let guilds;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj3;
  let obj8;
  let publishOptions;
  let sharing;
  let tmp9Result2;
  projectId = projectId.projectId;
  importDefault = undefined;
  guild = undefined;
  sharing = undefined;
  react = undefined;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj9;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let closure_2;
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
              const obj5 = { value: closure_2_1.share(), done: false };
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
                const shared = server.shared && !closure_130_4.current;
                if (shared) {
                  const obj2 = tmp(closure_2[11]);
                  obj2.hideActionSheet(closure_1_9);
                  if (server.testAppReady) {
                    c3 = 2;
                    c4 = 1;
                    const obj7 = { value: closure_130_1.publish(), done: false };
                    return obj7;
                  } else {
                    const open = tmp(closure_2[12]).open;
                    const tmp17 = tmp(closure_2[12]);
                    const intl = server(closure_2[9]).intl;
                    const formatToPlainString = intl.formatToPlainString;
                    let name;
                    const o2xHEb = tmp(closure_2[10]).o2xHEb;
                    const tmp18 = closure_1_9;
                    if (closure_130_2 != null) {
                      name = closure_130_2.name;
                    }
                    server = name;
                    if (name == null) {
                      server = "";
                    }
                    const obj8 = { text: formatToPlainString(o2xHEb, obj9), variant: "success" };
                    obj9 = { server };
                    open(tmp18, obj8);
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp29) {
          c4 = 3;
          throw tmp29;
        }
      }
    });
    return obj(...arguments);
  };
  ({ guildId, publishOptions } = projectId);
  const tmp = closure_10();
  const tmp3 = guild;
  obj = projectId(guild[7]);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let str;
    if (project != null) {
      str = project.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  const tmp6 = require("useConjureShareToServer")(projectId, guildId, publishOptions);
  importDefault = tmp6;
  ({ guilds, guild } = tmp6);
  ({ blockedReason, sharing } = tmp6);
  const error = tmp6.error;
  let intl = projectId(guild[9]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("module_4026").N3Ryqz, { app: stateFromStores });
  react = react.useRef(false);
  const effect = react.useEffect(() => {
    closure_4.current = false;
    return () => {
      closure_1_4.current = true;
    };
  }, []);
  let obj2 = { header: closure_7(projectId(guild[14]).BottomSheetTitleHeader, { title: formatToPlainStringResult }), children: tmp10(tmp11, obj3) };
  const ActionSheet = projectId(guild[13]).ActionSheet;
  obj3 = { style: tmp.content, children: items2 };
  let tmp9Result = null;
  if (null != guild) {
    tmp9Result = null;
    if (guilds.length > 1) {
      let obj4 = {
        title: intl2.string(tmp5(tmp3[10]).Uq5hU9),
        hasIcons: false,
        value: guild.id,
        onChange: tmp6.pickGuild,
        children: guilds.map((id) => {
              obj = { value: id.id, label: id.name, disabled: sharing };
              return metroImportDefault(TableRadioRow.TableRadioRow, obj, id.id);
            })
      };
      const TableRadioGroup = tmp2(tmp3[15]).TableRadioGroup;
      intl2 = tmp2(tmp3[9]).intl;
      tmp9Result = tmp9(TableRadioGroup, obj4);
    }
  }
  items2 = [tmp9Result, , , , , ];
  let obj5 = { spacing: 8, children: items3 };
  const Stack = tmp2(tmp3[17]).Stack;
  let obj6 = { variant: "body-md/semibold", color: "text-strong", children: intl3.string(tmp5(tmp3[10])["kG/2e8"]) };
  const Text = tmp2(tmp3[18]).Text;
  intl3 = tmp2(tmp3[9]).intl;
  items3 = [tmp9(Text, obj6), ];
  let obj7 = { style: tmp.box, children: tmp10(Stack2, obj8) };
  obj8 = { spacing: 8, children: items5 };
  Stack2 = tmp2(tmp3[17]).Stack;
  let obj9 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items4 };
  const Stack3 = tmp2(tmp3[17]).Stack;
  items4 = [tmp9(tmp2(tmp3[19]).RobotIcon, { size: "sm", color: "text-subtle" }), ];
  const obj10 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: intl4.string(require("module_4026").eSpjGV) };
  const Text2 = tmp2(tmp3[18]).Text;
  intl4 = tmp2(tmp3[9]).intl;
  items4[1] = closure_7(Text2, obj10);
  items5 = [tmp10(Stack3, obj9), , ];
  const obj11 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items6 };
  const Stack4 = tmp2(tmp3[17]).Stack;
  items6 = [tmp9(tmp2(tmp3[20]).BeakerIcon, { size: "sm", color: "text-subtle" }), ];
  const obj12 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: intl5.string(require("module_4026")["+5f47F"]) };
  const Text3 = tmp2(tmp3[18]).Text;
  intl5 = tmp2(tmp3[9]).intl;
  items6[1] = closure_7(Text3, obj12);
  items5[1] = closure_8(Stack4, obj11);
  const obj13 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items7 };
  const Stack5 = tmp2(tmp3[17]).Stack;
  items7 = [tmp9(tmp2(tmp3[21]).GroupIcon, { size: "sm", color: "text-subtle" }), ];
  const obj14 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.rowText, children: intl6.string(require("module_4026")["s3/5nF"]) };
  const Text4 = tmp2(tmp3[18]).Text;
  intl6 = tmp2(tmp3[9]).intl;
  items7[1] = closure_7(Text4, obj14);
  items5[2] = closure_8(Stack5, obj13);
  items3[1] = closure_7(obj, obj7);
  items2[1] = closure_8(Stack, obj5);
  const obj15 = { variant: "body-sm/normal", color: "text-muted", children: intl7.string(require("module_4026")["6y2j3H"]) };
  const Text5 = tmp2(tmp3[18]).Text;
  intl7 = tmp2(tmp3[9]).intl;
  items2[2] = closure_7(Text5, obj15);
  if (null != error) {
    const obj16 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp9Result2 = tmp9(tmp2(tmp3[18]).Text, obj16);
  } else {
    tmp9Result2 = null;
    if (null != blockedReason) {
      const obj17 = { variant: "body-sm/medium", color: "text-feedback-warning", children: blockedReason };
      tmp9Result2 = tmp9(tmp2(tmp3[18]).Text, obj17);
    }
  }
  items2[3] = tmp9Result2;
  const obj18 = {
    variant: "primary",
    text: intl8.string(require("module_4026")["+ysSG7"]),
    loading: sharing,
    disabled: null == guild || null != blockedReason,
    onPress: function confirm() {
      return obj(...arguments);
    }
  };
  const Button = tmp2(tmp3[22]).Button;
  intl8 = tmp2(tmp3[9]).intl;
  items2[4] = closure_7(Button, obj18);
  const obj19 = {
    variant: "secondary",
    text: intl9.string(projectId(tmp3[9]).t["ETE/oC"]),
    disabled: sharing,
    onPress() {
      obj = closure_1(guild[11]);
      return obj.hideActionSheet(ConjureShareToServerSheet);
    }
  };
  const Button2 = tmp2(tmp3[22]).Button;
  intl9 = tmp2(tmp3[9]).intl;
  items2[5] = closure_7(Button2, obj19);
  return closure_7(ActionSheet, obj2);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureShareToServerSheet = "ConjureShareToServerSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, box: obj3, rowText: { flex: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureShareToServerSheet.tsx");

export default function showConjureShareToServerSheet(arg0) {
  let obj2;
  const obj = { key: ConjureShareToServerSheet, content: metroImportDefault(ShareToServerSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
