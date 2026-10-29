// Module ID: 11374
// Function ID: 11375
// Name: contentHandlers
// Dependencies: [5, 10134, 9784, 8901, 5698, 11375, 10140, 8708, 7338, 5247, 11380, 2000, 11, 4833, 1125, 7345, 5700, 5946, 10003, 2]

// Module 11374 (contentHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5946 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8708 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3, fileName, urlString;

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
    let obj = parsedUserId(10140);
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
          obj7.openLazy(parsedUserId(2000)(11380, dependencyMap.paths), "RoleMembersActionSheet", obj3);
        }
      }
      if ("@everyone" === roleName) {
        if (null != guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj4 = { guildId, roleId: obj6.castGuildIdAsEveryoneGuildRoleId(guildId), channelId };
          ActionSheetActionCreatorsDefault;
          const tmp12 = parsedUserId(2000)(11380, dependencyMap.paths);
          obj6 = SnowflakeUtilsDefault;
          openLazy(tmp12, "RoleMembersActionSheet", obj4);
        }
      }
      if (null == roleName) {
        const DeveloperMode = tmp(4833).DeveloperMode;
        if (DeveloperMode.getSetting()) {
          let obj9;
          if (null != parsedUserId) {
            const obj5 = {
              secondaryConfirmText: intl.string(parsedUserId(1125).t["/AXYnE"]),
              onConfirmSecondary() {
                        const obj = ClipboardUtils;
                        obj.copy(parsedUserId);
                        const obj2 = ToastUtils;
                        const result = obj2.presentCopiedToClipboard();
                      }
            };
            intl = tmp(1125).intl;
            obj9 = obj5;
          }
          const obj8 = { title: intl2.string(parsedUserId(1125).t.r0DLNm), body: intl3.string(parsedUserId(1125).t.Fqqbhg), confirmText: intl4.string(parsedUserId(1125).t.BddRzS), isDismissable: true };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl2 = tmp(1125).intl;
          intl3 = tmp(1125).intl;
          intl4 = tmp(1125).intl;
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
    obj.openLazy(asyncRequire(10003, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: node });
  }
};
let closure_6 = _asyncToGenerator(async (arg0) => {
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0, value) => {
    let obj4;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let attachmentUrl;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_2 = tmp4;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            closure_1 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
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
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp24) {
        c4 = 3;
        throw tmp24;
      }
    }
  })();
  iter.next();
  return iter;
});
let closure_5 = _asyncToGenerator(async (arg0) => {
  const nativeEvent = arg0;
  let c4 = 0;
  let c5 = 0;
  const iter = (async (arg0, value) => {
    let c0;
    let c1;
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_3 = tmp4;
            c0 = undefined;
            fileName = undefined;
            ({ attachmentUrl: c0, fileName: c1 } = nativeEvent.nativeEvent.data);
            url = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
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
          c5 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp25) {
        c5 = 3;
        throw tmp25;
      }
    }
  })();
  iter.next();
  return iter;
});
let closure_4 = _asyncToGenerator(async (arg0) => {
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0, value) => {
    let obj3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let attachmentUrl;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_2 = tmp4;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            urlString = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
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
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp21) {
        c4 = 3;
        throw tmp21;
      }
    }
  })();
  iter.next();
  return iter;
});
let result = size.fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
