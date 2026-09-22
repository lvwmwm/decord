// Module ID: 16989
// Function ID: 16990
// Name: VibegrationsPublishBlockedSheet
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 16990, 1119, 3682, 7396, 4754, 4725, 5188, 7449, 2]
// Exports: default

// Module 16989 (VibegrationsPublishBlockedSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16990 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const VibegrationsPublishBlockedSheet = "VibegrationsPublishBlockedSheet";
const createStyles = fn(4758);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((reason) => {
  const cResult = c.c(20);
  const tmp4 = closure_7();
  const tmp5 = reason.reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  if (cResult[0] !== tmp5) {
    const intl = tmp(1119).intl;
    const tmp8 = _modDef3682;
    const stringResult = intl.string(tmp5 ? tmp8.Rtlv25 : tmp8["+UouPe"]);
    cResult[0] = tmp5;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj2 = { title: tmp6 };
      const tmp13 = React4(tmp(7396).BottomSheetTitleHeader, obj2);
      cResult[2] = tmp6;
      cResult[3] = tmp13;
    }
    if (cResult[4] !== tmp5) {
      const intl2 = tmp(1119).intl;
      const tmp17 = _modDef3682;
      const stringResult1 = intl2.string(tmp5 ? tmp17["nDQB/b"] : tmp17["E0QD++"]);
      cResult[4] = tmp5;
      cResult[5] = stringResult1;
    } else {
      if (cResult[6] !== cResult[5]) {
        const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp15 };
        const tmp22 = React4(tmp(4754).Text, obj3);
        cResult[6] = tmp15;
        cResult[7] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] !== tmp5) {
        const intl3 = tmp(1119).intl;
        if (tmp5) {
          let BddRzS = tmp(1119).t.BddRzS;
        } else {
          BddRzS = _modDef3682["+Zh4FA"];
        }
        const stringResult2 = intl3.string(BddRzS);
        cResult[8] = tmp5;
        cResult[9] = stringResult2;
      } else {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[12]);
              return obj.hideActionSheet(closure_1_6);
            }
          }
          cResult[10] = E;
          const tmp29 = E;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[12]);
              return obj.hideActionSheet(closure_1_6);
            }
          }
        }
        if (cResult[11] !== cResult[9]) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[12]);
              return obj.hideActionSheet(closure_1_6);
            }
          }
          const obj4 = { variant: "primary", text: tmp23, onPress: tmp29 };
          const tmp31 = React4(tmp(5188).Button, obj4);
          cResult[11] = tmp23;
          cResult[12] = tmp31;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[12]);
              return obj.hideActionSheet(closure_1_6);
            }
          }
        }
        if (cResult[13] === tmp4.content) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[12]);
              return obj.hideActionSheet(closure_1_6);
            }
          }
        }
        const obj5 = { style: tmp14, children: null };
        const items = [tmp20, tmp30];
        obj5.children = items;
        const tmp35 = hasOwnProperty(View, obj5);
        cResult[13] = tmp4.content;
        cResult[14] = tmp20;
        cResult[15] = tmp30;
        cResult[16] = tmp35;
      }
    }
  }
}) : ((reason) => {
  const tmp4 = reason.reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const intl = util.intl;
  const tmp7 = _modDef3682;
  if (tmp4) {
    let Rtlv25 = tmp7.Rtlv25;
    let tmp9 = tmp6;
  } else {
    Rtlv25 = tmp7["+UouPe"];
    tmp9 = tmp6;
  }
  const obj = { header: null, children: null };
  const tmp = closure_7();
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: intl.string(Rtlv25) });
  const obj3 = { style: tmp.content, children: null };
  const intl2 = tmp2(1119).intl;
  const tmp9Result = tmp9(3682);
  const obj2 = { title: intl.string(Rtlv25) };
  const tmp10 = hasOwnProperty;
  const tmp11 = View;
  const items = [React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) }), ];
  const intl3 = tmp2(1119).intl;
  if (tmp4) {
    let BddRzS = tmp2(1119).t.BddRzS;
  } else {
    BddRzS = tmp9(3682)["+Zh4FA"];
  }
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) };
  items[1] = React4(components_Button_Button.Button, {
    variant: "primary",
    text: intl3.string(BddRzS),
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsPublishBlockedSheet);
    }
  });
  obj3.children = items;
  obj.children = tmp10(tmp11, obj3);
  return React4(ActionSheet.ActionSheet, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  const obj2 = { key: VibegrationsPublishBlockedSheet, content: React4(closure_8, { reason }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";
