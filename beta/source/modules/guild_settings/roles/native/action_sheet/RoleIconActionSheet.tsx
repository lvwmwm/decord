// Module ID: 17429
// Function ID: 17430
// Name: RoleIconActionSheet
// Dependencies: [5, 19, 17412, 1086, 1381, 21, 558, 576, 504, 4801, 5451, 1482, 17430, 4530, 1127, 17426, 9640, 6571, 4833, 5916, 6624, 5997, 2]

// Module 17429 (RoleIconActionSheet)
import Constants from "Constants" /* 1086 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17426 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17412 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c3, c4, c7, c8, closure_0;

let metroImportAll;
let metroImportDefault;
const UPLOAD_SMALL_SIZE = Constants.UPLOAD_SMALL_SIZE;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ["image/png", "image/jpeg"];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let obj5;
  let obj7;
  let tmp6;
  let tmp7;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(27);
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsRolesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== roleId) {
    class I {
      constructor() {
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
      }
    }
    const items1 = [roleId];
    cResult[1] = roleId;
    cResult[2] = I;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = I;
  } else {
    class I {
      constructor() {
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
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== roleId) {
    class I {
      constructor() {
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
      }
    }
    _require = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
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
              let closure_2 = tmp4;
              closure_1 = tmp;
              _var = undefined;
              base64 = undefined;
              mimeType = undefined;
              const obj7 = roleId(dependencyMap[9]);
              obj7.hideActionSheet();
              const obj5 = { size, preferredMimeType: "image/png" };
              c3 = 1;
              c4 = 1;
              const obj6 = { value: obj8.openImagePicker(obj5), done: false };
              obj8 = _var(dependencyMap[10]);
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
              let c0 = mimeType;
              includes = includes.includes;
              if (mimeType == null) {
                c0 = "";
              }
              if (includes(c0)) {
                const obj = _var(dependencyMap[11]);
                const dataUriFileSizeResult = obj.dataUriFileSize(base64);
                if (dataUriFileSizeResult <= _var(dependencyMap[12]).ROLE_ICON_MAX_FILE_SIZE) {
                  const obj2 = _var(dependencyMap[15]);
                  obj2.updateRoleIcon(closure_1, base64, null);
                }
              }
              const presentError = _var(dependencyMap[13]).presentError;
              const tmp24 = _var(dependencyMap[13]);
              const intl = _var(dependencyMap[14]).intl;
              presentError(intl.string(_var(dependencyMap[14]).t.HFyKsa));
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          c4 = 3;
          throw tmp30;
        }
      }
    });
    function handleUploadImage() {
      return closure_0(...arguments);
    }
    cResult[4] = roleId;
    cResult[5] = handleUploadImage;
  } else {
    class I {
      constructor() {
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
      }
    }
  }
  if (cResult[6] === guildId) {
    let tmp12;
    let tmp14;
    let tmp17;
    let tmp16;
    let tmp20;
    let tmp22;
    let tmp24;
    class I {
      constructor() {
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
      }
    }
    if (cResult[9] !== roleId) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      cResult[9] = roleId;
      cResult[10] = T;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      let obj2 = { title: intl.string(tmp(1127).t.B9grJw) };
      const BottomSheetTitleHeader = tmp(6571).BottomSheetTitleHeader;
      intl = tmp(1127).intl;
      const tmp13 = closure_7(BottomSheetTitleHeader, obj2);
      cResult[11] = tmp13;
      tmp12 = tmp13;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      let obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(tmp(1127).t.I3YQeV) };
      const Text = tmp(4833).Text;
      intl2 = tmp(1127).intl;
      const tmp15 = closure_7(Text, obj3);
      cResult[12] = tmp15;
      tmp14 = tmp15;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      const stringResult = obj5.string(tmp(1127).t.royWSB);
      const intl3 = tmp(1127).intl;
      const stringResult1 = intl3.string(tmp(1127).t["mz++Qq"]);
      cResult[13] = stringResult1;
      cResult[14] = stringResult;
      tmp17 = stringResult;
      tmp16 = stringResult1;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      tmp17 = cResult[14];
    }
    if (cResult[15] !== tmp9) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      let obj4 = { label: tmp17, subLabel: tmp16, onPress: tmp9 };
      const tmp21 = closure_7(tmp(5916).TableRow, obj4);
      cResult[15] = tmp9;
      cResult[16] = tmp21;
      tmp20 = tmp21;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      const stringResult2 = obj7.string(tmp(1127).t["/Ny2wZ"]);
      cResult[17] = stringResult2;
      tmp22 = stringResult2;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    if (cResult[18] !== tmp10) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      let obj6 = { label: tmp22, onPress: tmp10 };
      const tmp25 = closure_7(tmp(5916).TableRow, obj6);
      cResult[18] = tmp10;
      cResult[19] = tmp25;
      tmp24 = tmp25;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
    }
    if (cResult[20] === tmp11) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      if (cResult[23] === tmp20) {
        class T {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = GuildSettingsRolesActionCreators;
            obj2.updateRoleIcon(roleId, null, null);
          }
        }
      }
      const tmp29 = closure_8;
      let obj8 = { children: items2 };
      items2 = [tmp12, tmp14, ];
      const ActionSheet = tmp(6624).ActionSheet;
      let obj9 = { hasIcons: false, children: items3 };
      items3 = [tmp20, tmp24, tmp26];
      items2[2] = closure_8(tmp(5997).TableRowGroup, obj9);
      const tmp30 = closure_8(ActionSheet, obj8);
      cResult[23] = tmp20;
      cResult[24] = tmp24;
      cResult[25] = tmp26;
      cResult[26] = tmp30;
    }
    let tmp27 = null;
    if (stateFromStores) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
      }
      const obj10 = { variant: "danger", label: intl4.string(tmp(1127).t["uY+Nk/"]), onPress: tmp11 };
      const TableRow = tmp(5916).TableRow;
      intl4 = tmp(1127).intl;
      tmp27 = closure_7(TableRow, obj10);
    }
    cResult[20] = tmp11;
    cResult[21] = stateFromStores;
    cResult[22] = tmp27;
  }
  const fn = function v() {
    const tmp = guildId(dependencyMap[16]);
    let obj = {
      guildId,
      pickerIntention: constants.COMMUNITY_CONTENT,
      onPressEmoji: function() {
        return closure_0(...arguments);
      }
    };
    const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
    guildId = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "IconComponent", done: null };
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
                  const obj4 = closure_0(dependencyMap[15]);
                  obj4.updateRoleIcon(surrogates, null, tmp24);
                }
              } else {
                c6 = 1;
                const tmp20 = closure_0(dependencyMap[15]);
                let closure_4 = tmp20;
                updateRoleIcon = tmp20.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                const obj6 = { value: obj2.fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                obj2 = closure_0(dependencyMap[12]);
                return obj6;
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
            const presentError = closure_0(dependencyMap[13]).presentError;
            const tmp12 = closure_0(dependencyMap[13]);
            const intl = closure_0(dependencyMap[14]).intl;
            presentError(intl.string(closure_0(dependencyMap[14]).t.R0RpRX));
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            updateRoleIcon(closure_2, value, null);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
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
  };
  cResult[6] = guildId;
  cResult[7] = roleId;
  cResult[8] = fn;
}) : ((arg0) => {
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let require;
  let roleId;
  ({ guildId: require, roleId } = arg0);
  let obj = function _handleUploadImage2() {
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
          return { value: "IconComponent", done: null };
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
              const obj7 = tmp(closure_2[9]);
              obj7.hideActionSheet();
              const obj5 = { size, preferredMimeType: "image/png" };
              c3 = 1;
              c4 = 1;
              const obj6 = { value: obj8.openImagePicker(obj5), done: false };
              obj8 = _var(closure_2[10]);
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
                obj = _var(closure_2[11]);
                const dataUriFileSizeResult = obj.dataUriFileSize(base64);
                if (dataUriFileSizeResult <= _var(closure_2[12]).ROLE_ICON_MAX_FILE_SIZE) {
                  const obj2 = _var(closure_2[15]);
                  obj2.updateRoleIcon(closure_130_1, base64, null);
                }
              }
              const presentError = _var(closure_2[13]).presentError;
              const tmp24 = _var(closure_2[13]);
              const intl = _var(closure_2[14]).intl;
              presentError(intl.string(_var(closure_2[14]).t.HFyKsa));
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
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
      let require;
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
            return { value: "IconComponent", done: null };
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
                    const obj4 = closure_0(closure_2_2[15]);
                    obj4.updateRoleIcon(surrogates, null, tmp24);
                  }
                } else {
                  c6 = 1;
                  const tmp20 = closure_0(closure_2_2[15]);
                  let closure_4 = tmp20;
                  updateRoleIcon = tmp20.updateRoleIcon;
                  closure_2 = surrogates;
                  c7 = 2;
                  c8 = 1;
                  const obj6 = { value: obj2.fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                  obj2 = closure_0(closure_2_2[12]);
                  return obj6;
                }
              }
            } else if (1 === tmp4) {
              c6 = 0;
              const presentError = closure_0(closure_2_2[13]).presentError;
              const tmp12 = closure_0(closure_2_2[13]);
              const intl = closure_0(closure_2_2[14]).intl;
              presentError(intl.string(closure_0(closure_2_2[14]).t.R0RpRX));
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
            return { value: "IconComponent", done: null };
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
      label: intl6.string(tmp(tmp2[14]).t["uY+Nk/"]),
      onPress: function handleRemoveIcon() {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsRolesActionCreators;
          obj2.updateRoleIcon(roleId, null, null);
        }
    };
    const TableRow3 = tmp(tmp2[19]).TableRow;
    intl6 = tmp(tmp2[14]).intl;
    tmp5Result = tmp5(TableRow3, obj6);
  }
  let obj7 = { children: items2 };
  items3[2] = tmp5Result;
  items2[2] = tmp4(TableRowGroup, { hasIcons: false, children: items3 });
  return tmp4(ActionSheet, obj7);
});
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx");

export default tmp4;
