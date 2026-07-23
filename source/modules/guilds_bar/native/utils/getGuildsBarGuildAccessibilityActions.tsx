// Module ID: 14867
// Function ID: 113375
// Name: folderLabel
// Dependencies: [1838, 4970, 1212, 7955, 3976, 14868, 5048, 2]
// Exports: default

// Module 14867 (folderLabel)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function folderLabel(name) {
  if (null != name.name) {
    if ("" !== name.name) {
      name = name.name;
    }
    return name;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  name = intl.string(require(1212) /* getSystemLocale */.t.ebAnWE);
}
function persistAndAnnounce(intl) {
  require(7955) /* convertThemeToProto */.saveGuildFolders(compatibleGuildFolders.getCompatibleGuildFolders());
  if (null != intl) {
    const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl);
  }
}
function performMove(id, arg1, arg2, closure_5, intl) {
  const tmp = importDefault(14868)(id);
  if (null != tmp) {
    const tmp3 = arg1(tmp);
    if (null != tmp3) {
      const obj = importDefault(5048);
      obj.moveById(id, tmp3.id, arg2, closure_5);
      persistAndAnnounce(intl);
    }
  }
}
const result = require("getSystemLocale").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx");

export default function getGuildsBarGuildAccessibilityActions(guildId) {
  let above;
  let below;
  let containingFolder;
  const _require = guildId;
  function guildAbove(above) {
    let node = null;
    if (null != above.above) {
      node = null;
      if (!above.above.isFolder) {
        node = above.above.node;
      }
    }
    return node;
  }
  function guildBelow(below) {
    let node = null;
    if (null != below.below) {
      node = null;
      if (!below.below.isFolder) {
        node = below.below.node;
      }
    }
    return node;
  }
  function folderAbove(containingFolder) {
    let node = null;
    if (null != containingFolder.above) {
      node = null;
      if (containingFolder.above.isFolder) {
        node = containingFolder.above.node;
      }
    }
    return node;
  }
  function folderBelow(closure_1) {
    let node = null;
    if (null != closure_1.below) {
      node = null;
      if (closure_1.below.isFolder) {
        node = closure_1.below.node;
      }
    }
    return node;
  }
  function currentFolder(closure_0, currentFolder, arg2, arg3, closure_1) {
    return closure_0.containingFolder;
  }
  let items = [];
  const guild = guildAbove.getGuild(guildId);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp3 = importDefault(14868)(guildId);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    const intl8 = _require(1212).intl;
    let obj = { name: str };
    importDefault = intl8.formatToPlainString(_require(1212).t["2XShGC"], obj);
    const intl9 = _require(1212).intl;
    obj = { name: str };
    const dependencyMap = intl9.formatToPlainString(_require(1212).t.D4maKL, obj);
    if (null == containingFolder) {
      obj = { name: "create-new-folder" };
      const intl = _require(1212).intl;
      obj.label = intl.string(_require(1212).t.ehmVyX);
      obj.action = function action() {
        const items = [closure_0];
        const guildFolderLocal = callback(table[6]).createGuildFolderLocal(items, "");
        folderBelow(callback);
      };
      items.push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        let node = above.node;
        const tmp11 = folderAbove(node);
        const obj1 = {};
        const _HermesInternal = HermesInternal;
        obj1.name = "move-up-into-folder-" + node.id;
        const intl3 = _require(1212).intl;
        const obj2 = { folderName: tmp11 };
        obj1.label = intl3.formatToPlainString(_require(1212).t["08U1Sa"], obj2);
        obj1.action = function action() {
          currentFolder(closure_0, folderAbove, true, true, closure_1);
        };
        items.push(obj1);
        const obj3 = {};
        const _HermesInternal2 = HermesInternal;
        obj3.name = "move-above-folder-" + node.id;
        const intl4 = _require(1212).intl;
        const obj4 = { folderName: tmp11 };
        obj3.label = intl4.formatToPlainString(_require(1212).t.gBM0Vf, obj4);
        obj3.action = function action() {
          currentFolder(closure_0, folderAbove, false, false, null);
        };
        items.push(obj3);
      } else {
        const obj5 = { name: "move-up" };
        const intl2 = _require(1212).intl;
        obj5.label = intl2.string(_require(1212).t["yiH+Tx"]);
        obj5.action = function action() {
          currentFolder(closure_0, guildAbove, false, false, null);
        };
        items.push(obj5);
      }
    }
    if (null != below) {
      if (below.isFolder) {
        const node2 = below.node;
        const tmp21 = folderAbove(node2);
        const obj6 = {};
        const _HermesInternal3 = HermesInternal;
        obj6.name = "move-down-into-folder-" + node2.id;
        const intl6 = _require(1212).intl;
        const obj7 = { folderName: tmp21 };
        obj6.label = intl6.formatToPlainString(_require(1212).t["6lLC/B"], obj7);
        obj6.action = function action() {
          currentFolder(closure_0, folderBelow, true, true, closure_1);
        };
        items.push(obj6);
        const obj8 = {};
        const _HermesInternal4 = HermesInternal;
        obj8.name = "move-below-folder-" + node2.id;
        const intl7 = _require(1212).intl;
        const obj9 = { folderName: tmp21 };
        obj8.label = intl7.formatToPlainString(_require(1212).t.YhxCkM, obj9);
        obj8.action = function action() {
          currentFolder(closure_0, folderBelow, true, false, null);
        };
        items.push(obj8);
      } else {
        const obj10 = { name: "move-down" };
        const intl5 = _require(1212).intl;
        obj10.label = intl5.string(_require(1212).t["+V6oLI"]);
        obj10.action = function action() {
          currentFolder(closure_0, guildBelow, true, false, null);
        };
        items.push(obj10);
      }
    }
    if (null != containingFolder) {
      const id = containingFolder.id;
      const tmp30 = folderAbove(containingFolder);
      const obj11 = {};
      const _HermesInternal5 = HermesInternal;
      obj11.name = "move-out-above-" + id;
      const intl10 = _require(1212).intl;
      const obj12 = { folderName: tmp30 };
      obj11.label = intl10.formatToPlainString(_require(1212).t.vnfRJG, obj12);
      obj11.action = function action() {
        currentFolder(closure_0, currentFolder, false, false, closure_2);
      };
      items.push(obj11);
      const obj13 = {};
      const _HermesInternal6 = HermesInternal;
      obj13.name = "move-out-below-" + id;
      const intl11 = _require(1212).intl;
      const obj14 = { folderName: tmp30 };
      obj13.label = intl11.formatToPlainString(_require(1212).t.ejhw4S, obj14);
      obj13.action = function action() {
        currentFolder(closure_0, currentFolder, true, false, closure_2);
      };
      items.push(obj13);
    }
    return items;
  }
};
