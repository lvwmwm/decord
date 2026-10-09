// Module ID: 10704
// Function ID: 10705
// Name: contentHandlers
// Dependencies: [5, 9644, 9290, 8478, 4765, 10705, 9647, 8287, 6872, 5055, 10710, 2000, 11, 2041, 1126, 6879, 4767, 5298, 9511, 2]

// Module 10704 (contentHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 9644 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, fileName, urlString;

let obj = {
  onLongPressLink(nativeEvent) {
    const url = nativeEvent.nativeEvent.url;
    const tmp = null != url && "" !== url;
    if (tmp) {
      const obj = { urlString: url };
      showLongPressURLActionSheetDefault(obj);
    }
  },
  onTapAttachmentLink() {
    return closure_6(...arguments);
  },
  onTapAttachmentTextPreview() {
    return closure_5(...arguments);
  },
  onLongPressAttachmentLink() {
    return closure_4(...arguments);
  },
  onTapMention(nativeEvent) {
    let channelId;
    let guildId;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let obj6;
    let parsedUserId;
    let roleId;
    let roleName;
    let userId;
    let obj = parsedUserId(9647);
    const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
    ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
    ({ roleId, guildId } = nativeSyntheticEventData);
    if (null != userId) {
      let obj2 = { userId, channelId, sourceAnalyticsLocations: items };
      items = [];
      const tmp17 = showUserProfileActionSheetDefault;
      items[0] = AnalyticsLocationDefault.USER_MENTION;
      tmp17(obj2);
    } else {
      if (null != roleId) {
        if (null != guildId) {
          const obj3 = { guildId, roleId, channelId };
          const obj7 = ActionSheetActionCreatorsDefault;
          obj7.openLazy(parsedUserId(2000)(10710, dependencyMap.paths), "RoleMembersActionSheet", obj3);
        }
      }
      if ("@everyone" === roleName) {
        if (null != guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj4 = { guildId, roleId: obj6.castGuildIdAsEveryoneGuildRoleId(guildId), channelId };
          ActionSheetActionCreatorsDefault;
          const tmp12 = parsedUserId(2000)(10710, dependencyMap.paths);
          obj6 = SnowflakeUtilsDefault;
          openLazy(tmp12, "RoleMembersActionSheet", obj4);
        }
      }
      if (null == roleName) {
        const DeveloperMode = tmp(2041).DeveloperMode;
        if (DeveloperMode.getSetting()) {
          let obj9;
          if (null != parsedUserId) {
            const obj5 = {
              secondaryConfirmText: intl.string(parsedUserId(1126).t["/AXYnE"]),
              onConfirmSecondary() {
                        const obj = ClipboardUtils;
                        obj.copy(parsedUserId);
                        const obj2 = ToastUtils;
                        const result = obj2.presentCopiedToClipboard();
                      }
            };
            intl = tmp(1126).intl;
            obj9 = obj5;
          }
          const obj8 = { title: intl2.string(parsedUserId(1126).t.r0DLNm), body: intl3.string(parsedUserId(1126).t.Fqqbhg), confirmText: intl4.string(parsedUserId(1126).t.BddRzS), isDismissable: true };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl2 = tmp(1126).intl;
          intl3 = tmp(1126).intl;
          intl4 = tmp(1126).intl;
          const merged = Object.assign(obj9);
          show(obj8);
        }
        obj9 = {};
      }
    }
  },
  onTapTimestamp(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const obj = ToastUtils;
    obj.presentTimestamp(node.full);
  },
  onTapInlineCode(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const tmp = null != node.content && typeof node.content === "string";
    if (tmp) {
      const obj = ClipboardUtils;
      obj.copy(node.content);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  },
  onTapEmoji(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(9511, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: node });
  }
};
let closure_6 = _asyncToGenerator(async (arg0) => {
  let closure_2;
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0, value) => {
    let attachmentUrl;
    let obj4;
    if (1 === c3) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (null != attachmentUrl) {
        if ("" !== attachmentUrl) {
          c3 = 2;
          c4 = 1;
          const obj7 = { value: obj4.maybeRefreshAttachmentUrl(attachmentUrl), done: false };
          obj4 = closure_130_2(closure_130_3[2]);
          return obj7;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_1 = value;
      const obj = closure_130_1(closure_130_3[3]);
      obj.trackLinkClicked(closure_1);
      const obj2 = closure_130_1(closure_130_3[4]);
      obj2.openURL(closure_1);
    }
    await "IconComponent";
    closure_1 = tmp;
    attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
    return "Set";
  })();
  iter.next();
  return iter;
});
let closure_5 = _asyncToGenerator(async (arg0) => {
  let closure_3;
  const nativeEvent = arg0;
  let c4 = 0;
  let c5 = 0;
  const iter = (async (arg0, value) => {
    let c0;
    let c1;
    let obj3;
    if (1 === c4) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else if (null != c0) {
        if ("" !== c0) {
          c4 = 2;
          c5 = 1;
          const obj6 = { value: obj3.maybeRefreshAttachmentUrl(c0), done: false };
          obj3 = closure_131_2(closure_131_3[2]);
          return obj6;
        }
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      url = value;
      const obj = { url, fileName };
      const openPlaintextFilePreview = closure_131_0(closure_131_3[5]).openPlaintextFilePreview;
      closure_131_0(closure_131_3[5]);
      if (fileName == null) {
        fileName = "";
      }
      const result = openPlaintextFilePreview(obj);
    }
    await "IconComponent";
    url = tmp;
    ({ attachmentUrl: c0, fileName: c1 } = nativeEvent.nativeEvent.data);
    return "Set";
  })();
  iter.next();
  return iter;
});
let closure_4 = _asyncToGenerator(async (arg0) => {
  let closure_2;
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0, value) => {
    let attachmentUrl;
    let obj3;
    if (1 === c3) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (null != attachmentUrl) {
        if ("" !== attachmentUrl) {
          c3 = 2;
          c4 = 1;
          const obj6 = { value: obj3.maybeRefreshAttachmentUrl(attachmentUrl), done: false };
          obj3 = closure_130_2(closure_130_3[2]);
          return obj6;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      urlString = value;
      const obj = { urlString };
      closure_130_1(closure_130_3[1])(obj);
    }
    await "IconComponent";
    urlString = tmp;
    attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
    return "Set";
  })();
  iter.next();
  return iter;
});
let result = size.fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
