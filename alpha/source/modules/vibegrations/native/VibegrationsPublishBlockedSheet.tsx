// Module ID: 16543
// Function ID: 16544
// Name: VibegrationsPublishBlockedSheet
// Dependencies: [19, 17, 21, 4890, 587, 558, 576, 16544, 1126, 3723, 6644, 4886, 4854, 5594, 6701, 2]
// Exports: default

// Module 16543 (VibegrationsPublishBlockedSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16544 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const VibegrationsPublishBlockedSheet = "VibegrationsPublishBlockedSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((reason) => {
  let items;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp24;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(20);
  reason = reason.reason;
  const tmp4 = closure_7();
  const tmp5 = reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  if (cResult[0] !== tmp5) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    const tmp8 = _modDef3723;
    const stringResult = string(tmp5 ? tmp8.Rtlv25 : tmp8["+UouPe"]);
    cResult[0] = tmp5;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj2 = { title: tmp6 };
    cResult[2] = tmp6;
    cResult[3] = React3(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj2);
    const tmp12 = React3(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj2);
  }
  const content = tmp4.content;
  if (cResult[4] !== tmp5) {
    const intl2 = tmp(1126).intl;
    const string2 = intl2.string;
    const tmp15 = _modDef3723;
    const string2Result = string2(tmp5 ? tmp15["nDQB/b"] : tmp15["E0QD++"]);
    cResult[4] = tmp5;
    cResult[5] = string2Result;
    tmp13 = string2Result;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp13) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp13 };
    const tmp19 = React3(Text_Text.Text, obj3);
    cResult[6] = tmp13;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp5) {
    let BddRzS;
    const intl3 = tmp(1126).intl;
    const string3 = intl3.string;
    if (tmp5) {
      BddRzS = tmp(1126).t.BddRzS;
    } else {
      BddRzS = _modDef3723["+Zh4FA"];
    }
    const string3Result = string3(BddRzS);
    cResult[8] = tmp5;
    cResult[9] = string3Result;
    tmp20 = string3Result;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_1(closure_1_2[12]);
        return obj.hideActionSheet(closure_1_6);
      }
    }
    cResult[10] = E;
    tmp24 = E;
  } else {
    class E {
      constructor() {
        obj = closure_1_1(closure_1_2[12]);
        return obj.hideActionSheet(closure_1_6);
      }
    }
  }
  if (cResult[11] !== tmp20) {
    class E {
      constructor() {
        obj = closure_1_1(closure_1_2[12]);
        return obj.hideActionSheet(closure_1_6);
      }
    }
    const obj4 = { variant: "primary", text: tmp20, onPress: tmp24 };
    cResult[11] = tmp20;
    cResult[12] = React3(components_Button_Button.Button, obj4);
    const tmp26 = React3(components_Button_Button.Button, obj4);
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
  const obj5 = { style: content, children: items };
  items = [tmp17, tmp25];
  cResult[13] = tmp4.content;
  cResult[14] = tmp17;
  cResult[15] = tmp25;
  cResult[16] = hasOwnProperty(View, obj5);
  hasOwnProperty(View, obj5);
}) : ((reason) => {
  let BddRzS;
  let Rtlv25;
  let items;
  let obj2;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp9;
  reason = reason.reason;
  const tmp = closure_7();
  const tmp4 = reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  const intl = intl4.intl;
  const string = intl.string;
  const tmp7 = _modDef3723;
  if (tmp4) {
    Rtlv25 = tmp7.Rtlv25;
    tmp9 = tmp6;
  } else {
    Rtlv25 = tmp7["+UouPe"];
    tmp9 = tmp6;
  }
  let obj = { header: React3(BottomSheetTitleHeader, obj2), children: tmp10(tmp11, obj3) };
  obj2 = { title: string(Rtlv25) };
  obj3 = { style: tmp.content, children: items };
  const Text = tmp2(4886).Text;
  const intl2 = tmp2(1126).intl;
  const string2 = intl2.string;
  const tmp9Result = tmp9(3723);
  items = [, ];
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: string2(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) };
  items[0] = React3(Text, obj4);
  const Button = tmp2(5594).Button;
  const intl3 = tmp2(1126).intl;
  const string3 = intl3.string;
  tmp10 = hasOwnProperty;
  tmp11 = View;
  if (tmp4) {
    BddRzS = tmp2(1126).t.BddRzS;
  } else {
    BddRzS = tmp9(3723)["+Zh4FA"];
  }
  const obj5 = {
    variant: "primary",
    text: string3(BddRzS),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(VibegrationsPublishBlockedSheet);
    }
  };
  items[1] = React3(Button, obj5);
  return React3(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  let obj2;
  const obj = { key: VibegrationsPublishBlockedSheet, content: React3(closure_8, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { reason };
  ActionSheetActionCreators;
  showActionSheet(obj);
};
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";
