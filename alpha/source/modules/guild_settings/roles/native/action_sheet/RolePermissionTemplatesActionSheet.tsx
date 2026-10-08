// Module ID: 18137
// Function ID: 18138
// Name: RolePermissionTemplatesActionSheet
// Dependencies: [19, 17, 1085, 21, 5090, 587, 558, 576, 1264, 5054, 4765, 5297, 1126, 6828, 18117, 6885, 2]

// Module 18137 (RolePermissionTemplatesActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet2 from "ActionSheet" /* 6885 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { templateContainer: obj2 };
obj2 = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RolePermissionTemplatesActionSheet(permissionsEdited) {
  let closure_2;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp = permissionsEdited;
  let obj = permissionsEdited(576);
  const cResult = obj.c(14);
  permissionsEdited = permissionsEdited.permissionsEdited;
  const onPermissionsChanged = permissionsEdited.onPermissionsChanged;
  const guildId = permissionsEdited.guildId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const obj = onPermissionsChanged(dependencyMap[8]);
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
    const items = [];
    cResult[0] = T;
    cResult[1] = items;
    tmp6 = items;
    tmp5 = T;
  } else {
    class T {
      constructor() {
        const obj = onPermissionsChanged(dependencyMap[8]);
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
    tmp6 = cResult[1];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] !== onPermissionsChanged) {
    class T {
      constructor() {
        const obj = onPermissionsChanged(dependencyMap[8]);
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
    cResult[2] = onPermissionsChanged;
    cResult[3] = tmp9;
  } else {
    class T {
      constructor() {
        const obj = onPermissionsChanged(dependencyMap[8]);
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
  }
  dependencyMap = tmp8;
  if (cResult[4] === permissionsEdited) {
    let tmp11;
    class T {
      constructor() {
        const obj = onPermissionsChanged(dependencyMap[8]);
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = onPermissionsChanged(dependencyMap[8]);
          const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
          obj.track(constants.OPEN_POPOUT, obj2);
        }
      }
      const BottomSheetTitleHeader = tmp(6828).BottomSheetTitleHeader;
      let intl = tmp(1126).intl;
      const tmp12 = <BottomSheetTitleHeader title={intl.string(tmp(1126).t.KgCkoQ)} />;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    } else {
      class T {
        constructor() {
          const obj = onPermissionsChanged(dependencyMap[8]);
          const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
          obj.track(constants.OPEN_POPOUT, obj2);
        }
      }
    }
    if (cResult[8] === guildId) {
      class T {
        constructor() {
          const obj = onPermissionsChanged(dependencyMap[8]);
          const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
          obj.track(constants.OPEN_POPOUT, obj2);
        }
      }
      if (cResult[11] === tmp4.templateContainer) {
        class T {
          constructor() {
            const obj = onPermissionsChanged(dependencyMap[8]);
            const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
            obj.track(constants.OPEN_POPOUT, obj2);
          }
        }
        return tmp18;
      }
      const ActionSheet = tmp(6885).ActionSheet;
      const tmp21 = <ActionSheet header={tmp11} startExpanded>{null}</ActionSheet>;
      cResult[11] = tmp4.templateContainer;
      cResult[12] = tmp13;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
    cResult[8] = guildId;
    cResult[9] = tmp10;
    cResult[10] = jsx(onPermissionsChanged(18117), { onSelect: tmp10, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId });
    const tmp17 = jsx(onPermissionsChanged(18117), { onSelect: tmp10, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId });
  }
  function handleTemplateSelect(arg0) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let closure_0 = arg0;
    const tmp = closure_0;
    if (tmp) {
      let obj = {
        title: intl.string(permissionsEdited(dependencyMap[12]).t.MVdkgB),
        body: intl2.string(permissionsEdited(dependencyMap[12]).t.LpogjK),
        cancelText: intl3.string(permissionsEdited(dependencyMap[12]).t["ETE/oC"]),
        confirmText: intl4.string(permissionsEdited(dependencyMap[12]).t.p89ACt),
        onConfirm() {
            dependencyMap(closure_0);
          },
        onCancel() {
            const obj = onPermissionsChanged(closure_1_2[9]);
            obj.hideActionSheet();
          },
        hideActionSheet: false,
        isDismissable: false
      };
      const show = onPermissionsChanged(dependencyMap[11]).show;
      onPermissionsChanged(dependencyMap[11]);
      intl = permissionsEdited(dependencyMap[12]).intl;
      intl2 = permissionsEdited(dependencyMap[12]).intl;
      intl3 = permissionsEdited(dependencyMap[12]).intl;
      intl4 = permissionsEdited(dependencyMap[12]).intl;
      show(obj);
    } else {
      dependencyMap(arg0);
    }
  }
  cResult[4] = permissionsEdited;
  cResult[5] = tmp8;
  cResult[6] = handleTemplateSelect;
}) : (function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  guildId = guildId.guildId;
  let tmp = closure_8();
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  let intl = intl5.intl;
  let obj3 = { style: tmp.templateContainer, children: null };
  const tmp3 = <BottomSheetTitleHeader title={intl.string(intl5.t.KgCkoQ)} />;
  const ActionSheet = ActionSheet2.ActionSheet;
  return <ActionSheet header={tmp3} startExpanded>{null}</ActionSheet>;
});
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default tmp3;
