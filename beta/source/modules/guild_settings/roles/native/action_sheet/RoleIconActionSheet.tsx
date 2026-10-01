// Module ID: 17427
// Function ID: 17428
// Name: RoleIconActionSheet
// Dependencies: [5, 19, 17410, 1074, 1375, 21, 504, 4800, 5450, 1476, 17428, 4527, 1115, 17424, 6618, 6570, 4832, 5999, 5917, 10583, 2]
// Exports: default

// Module 17427 (RoleIconActionSheet)
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17424 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17410 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3, c4, c7, c8, closure_0;

let metroImportAll;
let metroImportDefault;
const UPLOAD_SMALL_SIZE = Constants.UPLOAD_SMALL_SIZE;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ["image/png", "image/jpeg"];
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx");

export default function RoleIconActionSheet(arg0) {
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let roleId;
  ({ guildId: require, roleId } = arg0);
  let obj = function _handleUploadImage() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let includes;
      let obj8;
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
          let closure_2;
          let _var;
          let base64;
          let mimeType;
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
              _var = undefined;
              base64 = undefined;
              mimeType = undefined;
              const obj7 = tmp(closure_2[7]);
              obj7.hideActionSheet();
              const obj5 = { size, preferredMimeType: "image/png" };
              c3 = 1;
              c4 = 1;
              const obj6 = { value: obj8.openImagePicker(obj5), done: false };
              obj8 = _var(closure_2[8]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            _var = value;
            base64 = _var.base64;
            mimeType = _var.mimeType;
            if (null != base64) {
              _var = mimeType;
              includes = includes.includes;
              if (mimeType == null) {
                _var = "";
              }
              if (includes(_var)) {
                obj = _var(closure_2[9]);
                const dataUriFileSizeResult = obj.dataUriFileSize(base64);
                if (dataUriFileSizeResult <= _var(closure_2[10]).ROLE_ICON_MAX_FILE_SIZE) {
                  const obj2 = _var(closure_2[13]);
                  obj2.updateRoleIcon(closure_130_1, base64, null);
                }
              }
              const presentError = _var(closure_2[11]).presentError;
              const tmp24 = _var(closure_2[11]);
              const intl = _var(closure_2[12]).intl;
              presentError(intl.string(_var(closure_2[12]).t.HFyKsa));
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp30) {
          c4 = 3;
          throw tmp30;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = require;
  obj = require("get initialized");
  const items = [GuildSettingsRolesStore];
  const items1 = [roleId];
  const tmp4 = closure_8;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const role = GuildSettingsRolesStore.getRole(roleId);
    let icon;
    if (role != null) {
      icon = role.icon;
    }
    let tmp3 = null != icon;
    if (!tmp3) {
      let unicodeEmoji;
      if (role != null) {
        unicodeEmoji = role.unicodeEmoji;
      }
      tmp3 = null != unicodeEmoji;
    }
    return tmp3;
  }, items1);
  const ActionSheet = require("ActionSheet").ActionSheet;
  let obj2 = { title: intl.string(require("intl").t.B9grJw) };
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  const items2 = [closure_7(BottomSheetTitleHeader, obj2), , ];
  let obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(require("intl").t.I3YQeV) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2[1] = closure_7(Text, obj3);
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  let obj4 = {
    label: intl3.string(require("intl").t.royWSB),
    subLabel: intl4.string(require("intl").t["mz++Qq"]),
    onPress: function handleUploadImage() {
      return obj(...arguments);
    }
  };
  const TableRow = require("TableRow").TableRow;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  const items3 = [closure_7(TableRow, obj4), , ];
  let obj5 = {
    label: intl5.string(require("intl").t["/Ny2wZ"]),
    onPress: function handleSelectEmoji() {
      const tmp = require("openEmojiPickerActionSheet");
      obj = {
        guildId: require,
        pickerIntention: constants.COMMUNITY_CONTENT,
        onPressEmoji(arg0) {
          return closure_0(...arguments);
        }
      };
      const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
      require = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        closure_0 = arg0;
        if (c8 === 2) {
          c8 = 3;
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
          let c6;
          try {
            let updateRoleIcon;
            let closure_2;
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let surrogates;
                let closure_5 = tmp;
                if (null == closure_0.id) {
                  const optionallyDiverseSequence = tmp35.optionallyDiverseSequence;
                  surrogates = optionallyDiverseSequence;
                  if (optionallyDiverseSequence == null) {
                    surrogates = tmp35.surrogates;
                  }
                  if (null != surrogates) {
                    const obj4 = closure_0(closure_2_2[13]);
                    obj4.updateRoleIcon(surrogates, null, tmp24);
                  }
                } else {
                  c6 = 1;
                  const tmp20 = closure_0(closure_2_2[13]);
                  let closure_4 = tmp20;
                  updateRoleIcon = tmp20.updateRoleIcon;
                  closure_2 = surrogates;
                  c7 = 2;
                  c8 = 1;
                  const obj6 = { value: obj2.fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                  obj2 = closure_0(closure_2_2[10]);
                  return obj6;
                }
              }
            } else if (1 === tmp4) {
              c6 = 0;
              const presentError = closure_0(closure_2_2[11]).presentError;
              const tmp12 = closure_0(closure_2_2[11]);
              const intl = closure_0(closure_2_2[12]).intl;
              presentError(intl.string(closure_0(closure_2_2[12]).t.R0RpRX));
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp29) {
            if (0 === c6) {
              c8 = 3;
              throw tmp29;
            } else {
              c7 = 1;
            }
          }
        }
      });
      const result = openEmojiPickerActionSheet(obj, "stack");
    }
  };
  const TableRow2 = require("TableRow").TableRow;
  intl5 = require("intl").intl;
  items3[1] = closure_7(TableRow2, obj5);
  let tmp5Result = null;
  const tmp5 = closure_7;
  if (stateFromStores) {
    let obj6 = {
      variant: "danger",
      label: intl6.string(tmp(tmp2[12]).t["uY+Nk/"]),
      onPress: function handleRemoveIcon() {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
    };
    const TableRow3 = tmp(tmp2[18]).TableRow;
    intl6 = tmp(tmp2[12]).intl;
    tmp5Result = tmp5(TableRow3, obj6);
  }
  let obj7 = { children: items2 };
  items3[2] = tmp5Result;
  items2[2] = tmp4(TableRowGroup, { hasIcons: false, children: items3 });
  return tmp4(ActionSheet, obj7);
};
