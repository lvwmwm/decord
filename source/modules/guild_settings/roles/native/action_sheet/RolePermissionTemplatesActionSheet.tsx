// Module ID: 16376
// Function ID: 127743
// Name: RolePermissionTemplatesActionSheet
// Dependencies: [31, 27, 653, 33, 4130, 689, 675, 4098, 3830, 5186, 1212, 5498, 16355, 4470, 2]
// Exports: default

// Module 16376 (RolePermissionTemplatesActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 16, flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.templateContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("ME").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  let importDefault;
  let require;
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  function saveTemplate(arg0) {
    callback(arg0);
    outer1_1(saveTemplate[7]).hideActionSheet();
    const obj = outer1_1(saveTemplate[7]);
    const result = outer1_0(saveTemplate[8]).roleTemplateAppliedToast();
  }
  const effect = React.useEffect(() => {
    let obj = outer1_1(saveTemplate[6]);
    obj = { type: outer1_6.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(outer1_5.OPEN_POPOUT, obj);
  }, []);
  let obj = {};
  let intl = require(saveTemplate[10]).intl;
  obj.title = intl.string(require(saveTemplate[10]).t.KgCkoQ);
  const tmp = _createForOfIteratorHelperLoose();
  obj = { header: jsx(require(saveTemplate[9]).BottomSheetTitleHeader, {}), startExpanded: true };
  obj = {
    style: tmp.templateContainer,
    children: jsx(importDefault(saveTemplate[12]), {
      onSelect(arg0) {
        let closure_0 = arg0;
        if (closure_0) {
          let obj = outer1_1(saveTemplate[13]);
          obj = {};
          const intl = outer1_0(saveTemplate[10]).intl;
          obj.title = intl.string(outer1_0(saveTemplate[10]).t.MVdkgB);
          const intl2 = outer1_0(saveTemplate[10]).intl;
          obj.body = intl2.string(outer1_0(saveTemplate[10]).t.LpogjK);
          const intl3 = outer1_0(saveTemplate[10]).intl;
          obj.cancelText = intl3.string(outer1_0(saveTemplate[10]).t["ETE/oC"]);
          const intl4 = outer1_0(saveTemplate[10]).intl;
          obj.confirmText = intl4.string(outer1_0(saveTemplate[10]).t.p89ACt);
          obj.onConfirm = function onConfirm() {
            outer1_2(closure_0);
          };
          obj.onCancel = function onCancel() {
            outer2_1(saveTemplate[7]).hideActionSheet();
          };
          obj.hideActionSheet = false;
          obj.show(obj);
        } else {
          saveTemplate(arg0);
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  };
  obj.children = <View style={tmp.templateContainer}>{jsx(importDefault(saveTemplate[12]), {
    onSelect(arg0) {
      let closure_0 = arg0;
      if (closure_0) {
        let obj = outer1_1(saveTemplate[13]);
        obj = {};
        const intl = outer1_0(saveTemplate[10]).intl;
        obj.title = intl.string(outer1_0(saveTemplate[10]).t.MVdkgB);
        const intl2 = outer1_0(saveTemplate[10]).intl;
        obj.body = intl2.string(outer1_0(saveTemplate[10]).t.LpogjK);
        const intl3 = outer1_0(saveTemplate[10]).intl;
        obj.cancelText = intl3.string(outer1_0(saveTemplate[10]).t["ETE/oC"]);
        const intl4 = outer1_0(saveTemplate[10]).intl;
        obj.confirmText = intl4.string(outer1_0(saveTemplate[10]).t.p89ACt);
        obj.onConfirm = function onConfirm() {
          outer1_2(closure_0);
        };
        obj.onCancel = function onCancel() {
          outer2_1(saveTemplate[7]).hideActionSheet();
        };
        obj.hideActionSheet = false;
        obj.show(obj);
      } else {
        saveTemplate(arg0);
      }
    },
    location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: arg0.guildId
  })}</View>;
  return jsx(require(saveTemplate[11]).ActionSheet, {
    style: tmp.templateContainer,
    children: jsx(importDefault(saveTemplate[12]), {
      onSelect(arg0) {
        let closure_0 = arg0;
        if (closure_0) {
          let obj = outer1_1(saveTemplate[13]);
          obj = {};
          const intl = outer1_0(saveTemplate[10]).intl;
          obj.title = intl.string(outer1_0(saveTemplate[10]).t.MVdkgB);
          const intl2 = outer1_0(saveTemplate[10]).intl;
          obj.body = intl2.string(outer1_0(saveTemplate[10]).t.LpogjK);
          const intl3 = outer1_0(saveTemplate[10]).intl;
          obj.cancelText = intl3.string(outer1_0(saveTemplate[10]).t["ETE/oC"]);
          const intl4 = outer1_0(saveTemplate[10]).intl;
          obj.confirmText = intl4.string(outer1_0(saveTemplate[10]).t.p89ACt);
          obj.onConfirm = function onConfirm() {
            outer1_2(closure_0);
          };
          obj.onCancel = function onCancel() {
            outer2_1(saveTemplate[7]).hideActionSheet();
          };
          obj.hideActionSheet = false;
          obj.show(obj);
        } else {
          saveTemplate(arg0);
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  });
};
