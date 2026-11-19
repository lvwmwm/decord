// Module ID: 18337
// Function ID: 18338
// Name: showConjureProjectServerSheet
// Dependencies: [5, 19, 17, 21, 4792, 575, 18334, 5006, 5474, 7434, 7396, 1113, 4089, 7228, 7230, 18338, 5383, 5390, 2]
// Exports: default

// Module 18337 (showConjureProjectServerSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5006 */;
import TableRadioRow from "TableRadioRow" /* 7230 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let hasOwnProperty;
let metroRequire;
let obj2;
function ConjureProjectServerSheet(projectId) {
  let closure_0;
  let guild;
  let guilds;
  let intl2;
  let intl4;
  let items;
  let moving;
  let obj2;
  let obj3;
  let pending;
  let rows;
  let tmp8;
  let tmp9;
  pending = undefined;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        try {
          let text;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              text = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: closure_2_0.submit(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            text = value;
            if (null != text) {
              obj = tmp4(c2[7]);
              obj.hideAllActionSheets();
              const obj7 = { text, variant: "success" };
              const obj2 = tmp4(c2[8]);
              obj2.open(closure_1_7, obj7);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "+60" };
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    });
    return obj(...arguments);
  };
  projectId = projectId.projectId;
  const tmp3 = obj;
  const tmp = closure_8();
  const tmp4 = pending(obj[6])(projectId);
  _require = tmp4;
  ({ moving, guilds, guild, rows, pending } = tmp4);
  const error = tmp4.error;
  const appName = tmp4.appName;
  const ActionSheet = require("ActionSheet").ActionSheet;
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  const intl = require("intl").intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp7 = pending(obj[12]);
  obj = { header: tmp5(BottomSheetTitleHeader, obj2), children: tmp8(tmp9, obj3) };
  obj2 = { title: formatToPlainString(moving ? tmp7.M4jq44 : tmp7.PE4egI, { app: appName }) };
  obj3 = { style: tmp.content, children: items };
  let tmp5Result = null;
  tmp8 = closure_6;
  tmp9 = View;
  if (null != guild) {
    let obj4 = {
      title: intl2.string(tmp2(tmp3[12]).Uq5hU9),
      hasIcons: false,
      value: guild.id,
      onChange: tmp4.pickGuild,
      children: guilds.map((id) => {
          obj = { value: id.id, label: id.name, disabled: pending };
          return hasOwnProperty(TableRadioRow.TableRadioRow, obj, id.id);
        })
    };
    const TableRadioGroup = tmp6(tmp3[13]).TableRadioGroup;
    intl2 = tmp6(tmp3[11]).intl;
    tmp5Result = tmp5(TableRadioGroup, obj4);
  }
  items = [tmp5Result, , , , ];
  let tmp5Result3 = null;
  if (rows.length > 0) {
    let obj5 = { rows };
    tmp5Result3 = tmp5(tmp2(tmp3[15]), obj5);
  }
  items[1] = tmp5Result3;
  let tmp5Result4 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp5Result4 = tmp5(tmp6(tmp3[16]).Text, obj6);
  }
  items[2] = tmp5Result4;
  const Button = tmp6(tmp3[17]).Button;
  const intl3 = tmp6(tmp3[11]).intl;
  const string = intl3.string;
  const tmp2Result = pending(tmp3[12]);
  let obj7 = {
    variant: "primary",
    text: string(moving ? tmp2Result.MHSKBb : tmp2Result["+uQwxA"]),
    loading: pending,
    disabled: null == guild,
    onPress: function confirm() {
      return obj(...arguments);
    }
  };
  items[3] = closure_5(Button, obj7);
  const obj8 = {
    variant: "secondary",
    text: intl4.string(require("intl").t["ETE/oC"]),
    disabled: pending,
    onPress() {
      obj = pending(obj[7]);
      return obj.hideActionSheet(ConjureProjectServerSheet_str);
    }
  };
  const Button2 = tmp6(tmp3[17]).Button;
  intl4 = tmp6(tmp3[11]).intl;
  items[4] = closure_5(Button2, obj8);
  return closure_5(ActionSheet, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ConjureProjectServerSheet_str = "ConjureProjectServerSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureProjectServerSheet.tsx");

export default function showConjureProjectServerSheet(arg0) {
  let obj2;
  const obj = { key: ConjureProjectServerSheet_str, stackingBehavior: "stack", content: hasOwnProperty(ConjureProjectServerSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
