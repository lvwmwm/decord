// Module ID: 18273
// Function ID: 18274
// Name: TimeoutDurationActionSheet
// Dependencies: [19, 11448, 2127, 21, 558, 576, 18252, 5056, 6898, 6838, 5088, 1126, 6262, 6261, 2]

// Module 18273 (TimeoutDurationActionSheet)
import intl3 from "intl" /* 1126 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2127 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import TableRadioRow2 from "TableRadioRow" /* 6261 */;
import Constants from "Constants" /* 11448 */;
import getActionInfo from "getActionInfo" /* 18252 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
const AutomodActionType = Constants.AutomodActionType;
let closure_4 = GuildDisableCommunicationConstants.getDisableCommunicationDurationOptions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "";
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TimeoutDurationActionSheet(onRemove) {
  let action;
  let intl;
  let intl2;
  let items;
  let items1;
  let onSelectDuration;
  let triggerType;
  let obj = onSelectDuration(576);
  const cResult = obj.c(40);
  ({ triggerType, action, onSelectDuration } = onRemove);
  onRemove = onRemove.onRemove;
  if (cResult[0] === action) {
    let tmp4;
    let durationSeconds;
    let tmp19;
    let flag2;
    let tmp18;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp14;
    let flag;
    let tmp13;
    let tmp12;
    let tmp11;
    if (cResult[1] === triggerType) {
      tmp4 = cResult[2];
    }
    let durationSeconds1;
    const tmp6 = cResult[3];
    if (action != null) {
      durationSeconds1 = action.metadata.durationSeconds;
    }
    if (tmp6 === durationSeconds1) {
      let headerText;
      const tmp9 = cResult[4];
      if (tmp4 != null) {
        headerText = tmp4.headerText;
      }
      if (tmp9 === headerText) {
        if (cResult[5] === onRemove) {
          if (cResult[6] === onSelectDuration) {
            tmp11 = cResult[7];
            tmp12 = cResult[8];
            tmp13 = cResult[9];
            flag = cResult[10];
            tmp14 = cResult[11];
            tmp15 = cResult[12];
            tmp16 = cResult[13];
            tmp17 = cResult[14];
            tmp18 = cResult[15];
            flag2 = cResult[16];
            tmp19 = cResult[17];
          }
          if (cResult[26] === tmp11) {
            if (cResult[27] === flag) {
              if (cResult[28] === tmp14) {
                if (cResult[29] === tmp15) {
                  if (cResult[30] === tmp16) {
                    if (cResult[31] === tmp17) {
                      let tmp39;
                      if (cResult[32] === tmp18) {
                        tmp39 = cResult[33];
                      }
                      if (cResult[34] === tmp12) {
                        if (cResult[35] === tmp13) {
                          if (cResult[36] === tmp39) {
                            if (cResult[37] === flag2) {
                              let tmp42;
                              if (cResult[38] === tmp19) {
                                tmp42 = cResult[39];
                              }
                              return tmp42;
                            }
                          }
                        }
                      }
                      const obj2 = { startExpanded: flag2, header: tmp19, children: items };
                      items = [tmp13, tmp39];
                      const tmp44 = closure_6(tmp12, obj2);
                      cResult[34] = tmp12;
                      cResult[35] = tmp13;
                      cResult[36] = tmp39;
                      cResult[37] = flag2;
                      cResult[38] = tmp19;
                      cResult[39] = tmp44;
                      tmp42 = tmp44;
                    }
                  }
                }
              }
            }
          }
          const obj3 = { hasIcons: flag, accessibilityLabel: tmp14, defaultValue: tmp15, onChange: tmp16, children: items1 };
          items1 = [tmp17, tmp18];
          const tmp41 = closure_6(tmp11, obj3);
          cResult[26] = tmp11;
          cResult[27] = flag;
          cResult[28] = tmp14;
          cResult[29] = tmp15;
          cResult[30] = tmp16;
          cResult[31] = tmp17;
          cResult[32] = tmp18;
          cResult[33] = tmp41;
          tmp39 = tmp41;
        }
      }
    }
    const arr = closure_4();
    if (action != null) {
      durationSeconds = action.metadata.durationSeconds;
    }
    if (cResult[18] === onRemove) {
      let tmp21;
      let tmp22;
      let tmp26;
      let StringResult;
      let tmp31;
      let tmp35;
      if (cResult[19] === onSelectDuration) {
        tmp21 = cResult[20];
      }
      const ActionSheet = tmp(6898).ActionSheet;
      let str;
      if (tmp4 != null) {
        str = tmp4.headerText;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[21] !== str) {
        const obj4 = { title: str };
        const tmp24 = closure_5(onSelectDuration(6838).BottomSheetTitleHeader, obj4);
        cResult[21] = str;
        cResult[22] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[22];
      }
      const _Symbol = Symbol;
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/normal", children: intl.string(onSelectDuration(1126).t.DWGBAh) };
        const Text = tmp(5088).Text;
        intl = tmp(1126).intl;
        const tmp28 = closure_5(Text, obj5);
        cResult[23] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[23];
      }
      const TableRadioGroup = tmp(6262).TableRadioGroup;
      let headerText1;
      if (tmp4 != null) {
        headerText1 = tmp4.headerText;
      }
      if (null != durationSeconds) {
        const _String = String;
        StringResult = String(durationSeconds);
      } else {
        StringResult = value;
      }
      const _Symbol2 = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { value, label: intl2.string(onSelectDuration(1126).t.PoWNfe) };
        let TableRadioRow = tmp(6261).TableRadioRow;
        intl2 = tmp(1126).intl;
        const tmp34 = closure_5(TableRadioRow, obj6);
        cResult[24] = tmp34;
        tmp31 = tmp34;
      } else {
        tmp31 = cResult[24];
      }
      const _Symbol3 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            let id;
            let label;
            ({ id, value, label } = arg0);
            const obj = { value: String(value), label };
            const TableRadioRow = onSelectDuration(dependencyMap[13]).TableRadioRow;
            return closure_1_5(TableRadioRow, obj, id);
          }
        }
        cResult[25] = U;
        tmp35 = U;
      } else {
        class U {
          constructor(arg0) {
            let id;
            let label;
            ({ id, value, label } = arg0);
            const obj = { value: String(value), label };
            const TableRadioRow = onSelectDuration(dependencyMap[13]).TableRadioRow;
            return closure_1_5(TableRadioRow, obj, id);
          }
        }
      }
      const mapped = arr.map(tmp35);
      if (action != null) {
        class U {
          constructor(arg0) {
            let id;
            let label;
            ({ id, value, label } = arg0);
            const obj = { value: String(value), label };
            const TableRadioRow = onSelectDuration(dependencyMap[13]).TableRadioRow;
            return closure_1_5(TableRadioRow, obj, id);
          }
        }
      }
      cResult[3] = undefined;
      if (tmp4 != null) {
        class U {
          constructor(arg0) {
            let id;
            let label;
            ({ id, value, label } = arg0);
            const obj = { value: String(value), label };
            const TableRadioRow = onSelectDuration(dependencyMap[13]).TableRadioRow;
            return closure_1_5(TableRadioRow, obj, id);
          }
        }
      }
      cResult[4] = undefined;
      cResult[5] = onRemove;
      cResult[6] = onSelectDuration;
      cResult[7] = TableRadioGroup;
      cResult[8] = ActionSheet;
      cResult[9] = tmp26;
      cResult[10] = false;
      cResult[11] = headerText1;
      cResult[12] = StringResult;
      cResult[13] = tmp21;
      cResult[14] = tmp31;
      cResult[15] = mapped;
      cResult[16] = true;
      cResult[17] = tmp22;
      tmp19 = tmp22;
      flag2 = true;
      tmp18 = mapped;
      tmp17 = tmp31;
      tmp16 = tmp21;
      tmp15 = StringResult;
      tmp14 = headerText1;
      flag = false;
      tmp13 = tmp26;
      tmp12 = ActionSheet;
      tmp11 = TableRadioGroup;
    }
    function handleChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (arg0 !== c7) {
        const _Number = Number;
        onSelectDuration(Number(arg0));
      } else {
        onRemove();
      }
    }
    cResult[18] = onRemove;
    cResult[19] = onSelectDuration;
    cResult[20] = handleChange;
    tmp21 = handleChange;
  }
  const tmpResult = onSelectDuration(18252);
  const actionInfo = tmpResult.getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType);
  cResult[0] = action;
  cResult[1] = triggerType;
  cResult[2] = actionInfo;
  tmp4 = actionInfo;
}) : (function TimeoutDurationActionSheet(triggerType) {
  let StringResult;
  let action;
  let intl;
  let intl2;
  let items;
  let items1;
  ({ action, onSelectDuration: require, onRemove: importDefault } = triggerType);
  triggerType = triggerType.triggerType;
  let obj = getActionInfo;
  const actionInfo = obj.getActionInfo(AutomodActionType.USER_COMMUNICATION_DISABLED, action, triggerType);
  let durationSeconds;
  const arr = closure_4();
  if (action != null) {
    durationSeconds = action.metadata.durationSeconds;
  }
  const ActionSheet = tmp(6898).ActionSheet;
  let str;
  const BottomSheetTitleHeader = tmp(6838).BottomSheetTitleHeader;
  if (actionInfo != null) {
    str = actionInfo.headerText;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { startExpanded: true, header: closure_5(BottomSheetTitleHeader, { title: str }), children: items };
  const obj3 = { variant: "text-md/normal", children: intl.string(intl3.t.DWGBAh) };
  const Text = tmp(5088).Text;
  intl = tmp(1126).intl;
  items = [tmp6(Text, obj3), ];
  let headerText;
  const TableRadioGroup = tmp(6262).TableRadioGroup;
  if (actionInfo != null) {
    headerText = actionInfo.headerText;
  }
  const obj4 = {
    hasIcons: false,
    accessibilityLabel: headerText,
    defaultValue: StringResult,
    onChange: function handleChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (arg0 !== c7) {
        const _Number = Number;
        require(Number(arg0));
      } else {
        importDefault();
      }
    },
    children: items1
  };
  if (null != durationSeconds) {
    const _String = String;
    StringResult = String(durationSeconds);
  } else {
    StringResult = value;
  }
  const obj5 = { value, label: intl2.string(intl3.t.PoWNfe) };
  let TableRadioRow = tmp(6261).TableRadioRow;
  intl2 = tmp(1126).intl;
  items1 = [
    tmp6(TableRadioRow, obj5),
    arr.map((item) => {
      let id;
      let label;
      ({ id, value, label } = item);
      const obj = { value: String(value), label };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_5(TableRadioRow, obj, id);
    })
  ];
  items[1] = closure_6(TableRadioGroup, obj4);
  return closure_6(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TimeoutDurationActionSheet.tsx");

export default tmp4;
