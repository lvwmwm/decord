// Module ID: 14751
// Function ID: 111207
// Name: folderLabel
// Dependencies: []
// Exports: default

// Module 14751 (folderLabel)
function folderLabel(name) {
  if (null != name.name) {
    if ("" !== name.name) {
      name = name.name;
    }
    return name;
  }
  const intl = arg1(dependencyMap[2]).intl;
  name = intl.string(arg1(dependencyMap[2]).t.ebAnWE);
}
function persistAndAnnounce(intl) {
  arg1(dependencyMap[3]).saveGuildFolders(compatibleGuildFolders.getCompatibleGuildFolders());
  if (null != intl) {
    const AccessibilityAnnouncer = arg1(dependencyMap[4]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl);
  }
}
function performMove(id, arg1, arg2, arg3, intl) {
  const tmp = importDefault(dependencyMap[5])(id);
  if (null != tmp) {
    const tmp3 = arg1(tmp);
    if (null != tmp3) {
      const obj = importDefault(dependencyMap[6]);
      obj.moveById(id, tmp3.id, arg2, arg3);
      persistAndAnnounce(intl);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx");

export default function getGuildsBarGuildAccessibilityActions(guildId) {
  let above;
  let below;
  let containingFolder;
  const arg1 = guildId;
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
  function currentFolder(containingFolder, currentFolder, arg2, arg3, closure_1) {
    return containingFolder.containingFolder;
  }
  const items = [];
  const guild = guildAbove.getGuild(guildId);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp3 = importDefault(closure_2[5])(guildId);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    const intl8 = arg1(closure_2[2]).intl;
    let obj = { name: str };
    const importDefault = intl8.formatToPlainString(arg1(closure_2[2]).t.2XShGC, obj);
    const intl9 = arg1(closure_2[2]).intl;
    obj = { name: str };
    closure_2 = intl9.formatToPlainString(arg1(closure_2[2]).t.D4maKL, obj);
    if (null == containingFolder) {
      obj = { name: "create-new-folder" };
      const intl = arg1(closure_2[2]).intl;
      obj.label = intl.string(arg1(closure_2[2]).t.ehmVyX);
      obj.action = function action() {
        const items = [arg0];
        const guildFolderLocal = callback(closure_2[6]).createGuildFolderLocal(items, "");
        folderBelow(callback);
      };
      items.push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        const node = above.node;
        const tmp11 = folderAbove(node);
        const obj1 = {};
        const _HermesInternal = HermesInternal;
        obj1.name = "move-up-into-folder-" + node.id;
        const intl3 = arg1(closure_2[2]).intl;
        const obj2 = { folderName: tmp11 };
        obj1.label = intl3.formatToPlainString(arg1(closure_2[2]).t.08U1Sa, obj2);
        obj1.action = function action() {
          currentFolder(arg0, folderAbove, true, true, closure_1);
        };
        items.push(obj1);
        const obj3 = {};
        const _HermesInternal2 = HermesInternal;
        obj3.name = "move-above-folder-" + node.id;
        const intl4 = arg1(closure_2[2]).intl;
        const obj4 = { folderName: tmp11 };
        obj3.label = intl4.formatToPlainString(arg1(closure_2[2]).t.gBM0Vf, obj4);
        obj3.action = function action() {
          currentFolder(arg0, folderAbove, false, false, null);
        };
        items.push(obj3);
      } else {
        const obj5 = { name: "move-up" };
        const intl2 = arg1(closure_2[2]).intl;
        obj5.label = intl2.string(arg1(closure_2[2]).t.yiH+Tx);
        obj5.action = function action() {
          currentFolder(arg0, guildAbove, false, false, null);
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
        const intl6 = arg1(closure_2[2]).intl;
        const obj7 = { folderName: tmp21 };
        obj6.label = intl6.formatToPlainString(arg1(closure_2[2]).t.6lLC/B, obj7);
        obj6.action = function action() {
          currentFolder(arg0, folderBelow, true, true, closure_1);
        };
        items.push(obj6);
        const obj8 = {};
        const _HermesInternal4 = HermesInternal;
        obj8.name = "move-below-folder-" + node2.id;
        const intl7 = arg1(closure_2[2]).intl;
        const obj9 = { folderName: tmp21 };
        obj8.label = intl7.formatToPlainString(arg1(closure_2[2]).t.YhxCkM, obj9);
        obj8.action = function action() {
          currentFolder(arg0, folderBelow, true, false, null);
        };
        items.push(obj8);
      } else {
        const obj10 = { name: "move-down" };
        const intl5 = arg1(closure_2[2]).intl;
        obj10.label = intl5.string(arg1(closure_2[2]).t.+V6oLI);
        obj10.action = function action() {
          currentFolder(arg0, guildBelow, true, false, null);
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
      const intl10 = arg1(closure_2[2]).intl;
      const obj12 = { folderName: tmp30 };
      obj11.label = intl10.formatToPlainString(arg1(closure_2[2]).t.vnfRJG, obj12);
      obj11.action = function action() {
        currentFolder(arg0, currentFolder, false, false, closure_2);
      };
      items.push(obj11);
      const obj13 = {};
      const _HermesInternal6 = HermesInternal;
      obj13.name = "move-out-below-" + id;
      const intl11 = arg1(closure_2[2]).intl;
      const obj14 = { folderName: tmp30 };
      obj13.label = intl11.formatToPlainString(arg1(closure_2[2]).t.ejhw4S, obj14);
      obj13.action = function action() {
        currentFolder(arg0, currentFolder, true, false, closure_2);
      };
      items.push(obj13);
    }
    return items;
  }
};
