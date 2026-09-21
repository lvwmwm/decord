// Module ID: 18072
// Function ID: 18073
// Name: RolePermissionTemplatesActionSheet
// Dependencies: [19, 17, 1078, 21, 4758, 580, 558, 568, 1245, 4725, 4457, 5110, 1119, 7396, 18050, 7449, 2]

// Module 18072 (RolePermissionTemplatesActionSheet)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 18050 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { templateContainer: { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((permissionsEdited) => {
  const cResult = permissionsEdited(568).c(14);
  permissionsEdited = permissionsEdited.permissionsEdited;
  const onPermissionsChanged = permissionsEdited.onPermissionsChanged;
  const guildId = permissionsEdited.guildId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    const items = [];
    cResult[0] = T;
    cResult[1] = items;
    let tmp6 = items;
    const tmp5 = T;
  } else {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    tmp6 = cResult[1];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[2] !== onPermissionsChanged) {
    class E {
      constructor(arg0) {
        tmp = onPermissionsChanged(permissionsEdited);
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_0(closure_2[10]);
        result = obj2.roleTemplateAppliedToast();
        return;
      }
    }
    cResult[2] = onPermissionsChanged;
    cResult[3] = E;
  } else {
    class E {
      constructor(arg0) {
        tmp = onPermissionsChanged(permissionsEdited);
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_0(closure_2[10]);
        result = obj2.roleTemplateAppliedToast();
        return;
      }
    }
  }
  dependencyMap = tmp8;
  if (cResult[4] === permissionsEdited) {
    class E {
      constructor(arg0) {
        tmp = onPermissionsChanged(permissionsEdited);
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_0(closure_2[10]);
        result = obj2.roleTemplateAppliedToast();
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          tmp = onPermissionsChanged(permissionsEdited);
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[10]);
          result = obj2.roleTemplateAppliedToast();
          return;
        }
      }
      let obj2 = { title: null };
      let intl = tmp(1119).intl;
      obj2.title = intl.string(tmp(1119).t.KgCkoQ);
      const tmp11 = jsx(tmp(7396).BottomSheetTitleHeader, { title: null });
      cResult[7] = tmp11;
      const tmp10 = tmp11;
    } else {
      class E {
        constructor(arg0) {
          tmp = onPermissionsChanged(permissionsEdited);
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[10]);
          result = obj2.roleTemplateAppliedToast();
          return;
        }
      }
    }
    if (cResult[8] === guildId) {
      class E {
        constructor(arg0) {
          tmp = onPermissionsChanged(permissionsEdited);
          obj = closure_1(closure_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[10]);
          result = obj2.roleTemplateAppliedToast();
          return;
        }
      }
      if (cResult[11] === tmp4.templateContainer) {
        class E {
          constructor(arg0) {
            tmp = onPermissionsChanged(permissionsEdited);
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[10]);
            result = obj2.roleTemplateAppliedToast();
            return;
          }
        }
        return tmp17;
      }
      const obj3 = { header: tmp10, startExpanded: true, children: null };
      const obj4 = { style: tmp4.templateContainer, children: tmp12 };
      obj3.children = <View style={tmp4.templateContainer}>{tmp12}</View>;
      const tmp20 = jsx(tmp(7449).ActionSheet, { header: tmp10, startExpanded: true, children: null });
      cResult[11] = tmp4.templateContainer;
      cResult[12] = tmp12;
      cResult[13] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { onSelect: tmp9, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId };
    const tmp16 = jsx(onPermissionsChanged(18050), { onSelect: tmp9, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId });
    cResult[8] = guildId;
    cResult[9] = tmp9;
    cResult[10] = tmp16;
  }
  class O {
    constructor(arg0) {
      closure_0 = permissionsEdited;
      if (closure_0) {
        tmp3 = onPermissionsChanged;
        tmp4 = closure_2;
        obj = onPermissionsChanged(closure_2[11]);
        obj1 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
        tmp5 = permissionsEdited;
        intl = permissionsEdited(closure_2[12]).intl;
        obj1.title = intl.string(permissionsEdited(closure_2[12]).t.MVdkgB);
        intl2 = permissionsEdited(closure_2[12]).intl;
        obj1.body = intl2.string(permissionsEdited(closure_2[12]).t.LpogjK);
        intl3 = permissionsEdited(closure_2[12]).intl;
        obj1.cancelText = intl3.string(permissionsEdited(closure_2[12]).t["ETE/oC"]);
        intl4 = permissionsEdited(closure_2[12]).intl;
        obj1.confirmText = intl4.string(permissionsEdited(closure_2[12]).t.p89ACt);
        obj1.onConfirm = function onConfirm() { ... };
        obj1.onCancel = function onCancel() { ... };
        showResult = obj.show(obj1);
      } else {
        tmp = closure_2;
        tmp2 = closure_2(permissionsEdited);
      }
      return;
    }
  }
  cResult[4] = permissionsEdited;
  cResult[5] = tmp8;
  cResult[6] = O;
}) : ((guildId) => {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT });
  }, []);
  let obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.KgCkoQ);
  const tmp = closure_8();
  let obj2 = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  let obj3 = {
    style: tmp.templateContainer,
    children: jsx(GuildSettingsRoleTemplateDefault, {
      onSelect(arg0) {
        closure_0 = arg0;
        if (closure_0) {
          const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
          const intl = require("util").intl;
          obj4.title = intl.string(require("util").t.MVdkgB);
          const intl2 = require("util").intl;
          obj4.body = intl2.string(require("util").t.LpogjK);
          const intl3 = require("util").intl;
          obj4.cancelText = intl3.string(require("util").t["ETE/oC"]);
          const intl4 = require("util").intl;
          obj4.confirmText = intl4.string(require("util").t.p89ACt);
          obj4.onConfirm = function onConfirm() {
            importDefault(closure_0);
            closure_1_1(4725).hideActionSheet();
            const obj = closure_1_1(4725);
            const result = closure_0(4457).roleTemplateAppliedToast();
          };
          obj4.onCancel = function onCancel() {
            closure_1_1(4725).hideActionSheet();
          };
          AlertActionCreatorsDefault.show(obj4);
        } else {
          closure_1(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
          let result = require("ToastUtils").roleTemplateAppliedToast();
          const obj2 = require("ToastUtils");
        }
      },
      location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  };
  obj2.children = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, {
    onSelect(arg0) {
      closure_0 = arg0;
      if (closure_0) {
        const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
        const intl = require("util").intl;
        obj4.title = intl.string(require("util").t.MVdkgB);
        const intl2 = require("util").intl;
        obj4.body = intl2.string(require("util").t.LpogjK);
        const intl3 = require("util").intl;
        obj4.cancelText = intl3.string(require("util").t["ETE/oC"]);
        const intl4 = require("util").intl;
        obj4.confirmText = intl4.string(require("util").t.p89ACt);
        obj4.onConfirm = function onConfirm() {
          importDefault(closure_0);
          closure_1_1(4725).hideActionSheet();
          const obj = closure_1_1(4725);
          const result = closure_0(4457).roleTemplateAppliedToast();
        };
        obj4.onCancel = function onCancel() {
          closure_1_1(4725).hideActionSheet();
        };
        AlertActionCreatorsDefault.show(obj4);
      } else {
        closure_1(arg0);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        let result = require("ToastUtils").roleTemplateAppliedToast();
        const obj2 = require("ToastUtils");
      }
    },
    location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: arg0.guildId
  })}</View>;
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null });
});
