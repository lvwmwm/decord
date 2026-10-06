// Module ID: 11556
// Function ID: 11557
// Name: PrivateChannelUserList
// Dependencies: [32, 19, 17, 2051, 4482, 1378, 1086, 21, 558, 576, 6584, 504, 12, 1376, 10952, 10955, 10954, 4535, 588, 11557, 1127, 8119, 11558, 7628, 10367, 2]

// Module 11556 (PrivateChannelUserList)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1127 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7628 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11558 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr1, channelId, valueResult;

let c10;
let c9;
let closure_12;
let tmp;
let unpackModuleId;
const NitroWheelIcon2 = tmp(8119);
const View = react_native.View;
({ RelationshipTypes: c9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let disableBottomSafeZone;
  let disableStickySections;
  let first;
  let headerShown;
  let hideTitle;
  let inActionSheet;
  let insetEnd;
  let listActionRenderer;
  let listHeaderContent;
  let listStyleOverride;
  let obj2;
  let onLayout;
  let onUserPress;
  let opensUserProfileOnUserPress;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp8;
  let tmp = channelId;
  let tmp2 = onUserPress;
  let obj = channelId(onUserPress[9]);
  const cResult = obj.c(52);
  channelId = channelId.channelId;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd, headerShown, hideTitle } = channelId);
  ({ inActionSheet, onUserPress } = channelId);
  ({ opensUserProfileOnUserPress, listHeaderContent } = channelId);
  let tmp4 = undefined === headerShown || headerShown;
  let closure_4 = undefined === opensUserProfileOnUserPress || opensUserProfileOnUserPress;
  const tmp5 = hideTitle;
  const analyticsLocations = hideTitle(tmp2[10])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [listActionRenderer];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => {
            const str = username.username;
            return str.toLowerCase();
          });
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = M;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = M;
  } else {
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => {
            const str = username.username;
            return str.toLowerCase();
          });
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult5 = tmp(tmp2[11]);
  const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === stateFromStores) {
    let tmp20;
    class M {
      constructor() {
        if (null != closure_6) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          arr2 = closure_1(closure_2[12])(tmp.recipients);
          tmp4 = closure_8;
          mapped = arr2.map(closure_8.getUser);
          arr1 = mapped.unshift(closure_8.getCurrentUser());
          tmp5 = closure_0;
          found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
          iter = found.sortBy((username) => {
            const str = username.username;
            return str.toLowerCase();
          });
          valueResult = iter.value();
        } else {
          valueResult = [];
        }
        return valueResult;
      }
    }
    const tmp15 = tmp5(tmp2[14])(obj2);
    listActionRenderer = tmp15.listActionRenderer;
    const listActionHeight = tmp15.listActionHeight;
    if (cResult[10] !== stateFromStores) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      if (stateFromStores != null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => {
                const str = username.username;
                return str.toLowerCase();
              });
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      if (undefined == null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => {
                const str = username.username;
                return str.toLowerCase();
              });
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      cResult[10] = stateFromStores;
      cResult[11] = undefined;
    } else {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
    }
    let c10 = tmp16;
    let tmp18;
    if (tmp16) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      if (stateFromStores != null) {
        class M {
          constructor() {
            if (null != closure_6) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              arr2 = closure_1(closure_2[12])(tmp.recipients);
              tmp4 = closure_8;
              mapped = arr2.map(closure_8.getUser);
              arr1 = mapped.unshift(closure_8.getCurrentUser());
              tmp5 = closure_0;
              found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
              iter = found.sortBy((username) => {
                const str = username.username;
                return str.toLowerCase();
              });
              valueResult = iter.value();
            } else {
              valueResult = [];
            }
            return valueResult;
          }
        }
      }
      tmp18 = tmp19;
    }
    let c11 = tmp18;
    if (cResult[12] !== tmp16) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      cResult[12] = tmp16;
      cResult[13] = tmp21;
      tmp20 = tmp21;
    } else {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
    }
    tmp(tmp2[16]);
    let tmp24 = tmp16;
    if (tmp24) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      tmp24 = "entitled" === tmp23;
    }
    if (tmp24) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      tmp24 = tmp20 > c10;
    }
    closure_12 = tmp24;
    const tmpResult7 = tmp(tmp2[17]);
    const token = tmpResult7.useToken(tmp5(tmp2[18]).colors.TEXT_SUBTLE);
    const tmpResult8 = tmp(tmp2[17]);
    const token1 = tmpResult8.useToken(tmp5(tmp2[18]).colors.ICON_SUBTLE);
    let str = "PrivateChannelUserList";
    const tmp27 = tmp5(tmp2[19])("PrivateChannelUserList");
    let closure_15 = tmp27;
    if (cResult[14] !== stateFromStoresArray.length) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
      tmp29[0] = stateFromStoresArray.length;
      cResult[14] = stateFromStoresArray.length;
      cResult[15] = tmp29;
    } else {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
    }
    if (cResult[16] === hideTitle) {
      class M {
        constructor() {
          if (null != closure_6) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            arr2 = closure_1(closure_2[12])(tmp.recipients);
            tmp4 = closure_8;
            mapped = arr2.map(closure_8.getUser);
            arr1 = mapped.unshift(closure_8.getCurrentUser());
            tmp5 = closure_0;
            found = arr1.filter(closure_0(closure_2[13]).isNotNullish);
            iter = found.sortBy((username) => {
              const str = username.username;
              return str.toLowerCase();
            });
            valueResult = iter.value();
          } else {
            valueResult = [];
          }
          return valueResult;
        }
      }
    }
    function se() {
      let intl;
      let obj3;
      const obj = { title: "" + intl.string(intl2.t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length, hideTitle };
      intl = intl2.intl;
      let tmp3 = closure_12;
      if (tmp3) {
        let str = "xxs";
        const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        const tmp4 = unpackModuleId;
        if (closure_15) {
          str = "xs";
        }
        const obj2 = { titleLeading: tmp4(NitroWheelIcon, obj3), onTitlePress: openGroupDMNitroCapInfoActionSheetDefault, colorOverride: token };
        tmp3 = obj2;
        obj3 = { size: str, color: token1, accessible: false };
      }
      const element = { type: "section", props: obj };
      const merged = Object.assign(tmp3);
      return element;
    }
    cResult[16] = hideTitle;
    cResult[17] = token1;
    cResult[18] = tmp24;
    cResult[19] = tmp27;
    cResult[20] = token;
    cResult[21] = stateFromStoresArray.length;
    cResult[22] = se;
  }
  obj2 = { channel: stateFromStores, disable: tmp14 };
  cResult[7] = stateFromStores;
  cResult[8] = !tmp4;
  cResult[9] = obj2;
}) : ((channelId) => {
  let _undefined;
  let c16;
  let disableBottomSafeZone;
  let disableStickySections;
  let inActionSheet;
  let insetEnd;
  let listStyleOverride;
  let opensUserProfileOnUserPress;
  let tmp21;
  let tmp8;
  channelId = channelId.channelId;
  let flag = channelId.headerShown;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  const hideTitle = channelId.hideTitle;
  const onUserPress = channelId.onUserPress;
  ({ opensUserProfileOnUserPress, inActionSheet } = channelId);
  if (opensUserProfileOnUserPress === undefined) {
    opensUserProfileOnUserPress = true;
  }
  const listHeaderContent = channelId.listHeaderContent;
  let stateFromStores;
  let renderListHeader;
  let ownerId;
  closure_12 = undefined;
  let token;
  let token1;
  let closure_15;
  c16 = undefined;
  let height;
  let callback2;
  let tmp = hideTitle;
  let tmp2 = onUserPress;
  const analyticsLocations = hideTitle(onUserPress[10])().analyticsLocations;
  let tmp3 = channelId;
  let obj = channelId(onUserPress[11]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(onUserPress[11]);
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    let items;
    if (null != stateFromStores) {
      const arr2 = _modDef12(tmp.recipients);
      const mapped = arr2.map(UserStore.getUser);
      const arr = mapped.unshift(UserStore.getCurrentUser());
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.sortBy((username) => {
        const str = username.username;
        return str.toLowerCase();
      });
      items = iter.value();
    } else {
      items = [];
    }
    return items;
  }, items2);
  let obj2 = { channel: stateFromStores, disable: !flag };
  const tmp5 = hideTitle(onUserPress[14])(obj2);
  renderListHeader = tmp5.listActionRenderer;
  let listHeaderSize = tmp5.listActionHeight;
  let flag2;
  if (stateFromStores != null) {
    flag2 = stateFromStores.isMultiUserDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp6;
  if (flag2) {
    ownerId = undefined;
    if (stateFromStores != null) {
      ownerId = stateFromStores.ownerId;
    }
    tmp6 = ownerId;
  }
  ownerId = tmp6;
  if (flag2) {
    tmp8 = tmp(tmp2[15])({ useNitroCapExperiment: true });
  } else {
    tmp8 = flag2;
  }
  tmp3(tmp2[16]);
  let tmp11 = flag2;
  if (tmp11) {
    let str = "entitled";
    tmp11 = "entitled" === tmp10;
  }
  if (tmp11) {
    tmp11 = tmp8 > flag2;
  }
  closure_12 = tmp11;
  const tmp3Result3 = tmp3(tmp2[17]);
  token = tmp3Result3.useToken(tmp(tmp2[18]).colors.TEXT_SUBTLE);
  const tmp3Result4 = tmp3(tmp2[17]);
  token1 = tmp3Result4.useToken(tmp(tmp2[18]).colors.ICON_SUBTLE);
  const tmp15 = tmp(tmp2[19])("PrivateChannelUserList");
  closure_15 = tmp15;
  const items3 = [stateFromStoresArray];
  const items4 = [stateFromStoresArray, hideTitle, tmp11, token, token1, tmp15];
  const sections = listHeaderContent.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, flag2, tmp6, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = listHeaderContent.useCallback(() => {
    let intl;
    let obj3;
    const obj = { title: "" + intl.string(intl2.t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length, hideTitle };
    intl = intl2.intl;
    let tmp3 = closure_12;
    if (tmp3) {
      let str = "xxs";
      const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
      const tmp4 = unpackModuleId;
      if (closure_15) {
        str = "xs";
      }
      const obj2 = { titleLeading: tmp4(NitroWheelIcon, obj3), onTitlePress: openGroupDMNitroCapInfoActionSheetDefault, colorOverride: token };
      tmp3 = obj2;
      obj3 = { size: str, color: token1, accessible: false };
    }
    const element = { type: "section", props: obj };
    const merged = Object.assign(tmp3);
    return element;
  }, items4);
  const getItemProps = listHeaderContent.useCallback((arg0, index) => {
    let obj;
    let obj2;
    const tmp = 0 === index;
    if (null != stateFromStoresArray[index]) {
      let tmp4 = flag2;
      if (tmp4) {
        tmp4 = tmp3.id === ownerId;
      }
      const element = { type: "user", props: obj };
      obj = {
        type: listHeaderSize.NONE,
        user: stateFromStoresArray[index],
        nickname: stateFromStoresArray.getNickname(stateFromStoresArray[index].id),
        isNameplatedRow: true,
        onPress(user) {
            if (onUserPress != null) {
              const obj = { user, index };
              tmp(obj);
            }
            const tmp4 = opensUserProfileOnUserPress;
            if (tmp4) {
              const obj2 = { userId: user.id, sourceAnalyticsLocations: analyticsLocations, channelId };
              showUserProfileActionSheetDefault(obj2);
            }
          },
        isOwner: tmp4,
        start: tmp,
        end: tmp2,
        canShowDisplayNameStyles: true
      };
      return element;
    } else {
      const element1 = { type: "placeholder", props: obj2 };
      obj2 = { start: tmp, end: tmp2 };
      return element1;
    }
  }, items5);
  [tmp21, c16] = opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  let channelId1;
  opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  if (tmp21 != null) {
    channelId1 = tmp21.channelId;
  }
  height = undefined;
  if (channelId1 === channelId) {
    height = tmp21.height;
  }
  const items6 = [channelId];
  callback2 = obj7.useCallback((nativeEvent) => {
    height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((arg0) => {
      let tmp = arg0;
      channelId = undefined;
      if (arg0 != null) {
        channelId = tmp.channelId;
      }
      if (channelId !== channelId) {
        tmp = { channelId: tmp3, height };
        const obj = { channelId: tmp3, height };
      }
      return tmp;
    });
  }, items6);
  const items7 = [channelId, listHeaderContent, renderListHeader, callback2];
  const items8 = [height, listHeaderSize];
  const callback3 = obj7.useCallback(() => {
    let items;
    const obj = { onLayout: callback2, children: items };
    items = [listHeaderContent, ];
    let tmp3;
    const tmp = closure_12;
    const tmp2 = View;
    if (renderListHeader != null) {
      tmp3 = renderListHeader();
    }
    items[1] = tmp3;
    return tmp(tmp2, obj, channelId);
  }, items7);
  const callback4 = obj7.useCallback(() => {
    let num = height;
    if (height == null) {
      let tmp;
      if (listHeaderSize != null) {
        tmp = listHeaderSize();
      }
      num = tmp;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items8);
  if (null != listHeaderContent) {
    renderListHeader = callback3;
  }
  if (null != listHeaderContent) {
    listHeaderSize = callback4;
  }
  return ownerId(tmp3(tmp2[24]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;
