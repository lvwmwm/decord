// Module ID: 16161
// Function ID: 124602
// Name: areTypesInSameSection
// Dependencies: []
// Exports: getDnDUpdates, getDropData

// Module 16161 (areTypesInSameSection)
function areTypesInSameSection(type, type2) {
  let tmp = null != type && null != type2;
  if (tmp) {
    let tmp2 = type === type2;
    if (!tmp2) {
      let tmp4 = callback(type);
      if (tmp4) {
        tmp4 = callback(type2);
      }
      tmp2 = tmp4;
    }
    if (!tmp2) {
      let tmp7 = callback2(type);
      if (tmp7) {
        tmp7 = callback2(type2);
      }
      tmp2 = tmp7;
    }
    tmp = tmp2;
  }
  return tmp;
}
function getFirstChannelOfType(arg0, id, type, arr) {
  const importDefault = id;
  let closure_1 = -1;
  const found = arr.find((channel) => {
    let flag = channel.channel.id === arg1;
    if (flag) {
      let closure_1 = arg1;
      flag = true;
    }
    return flag;
  });
  if (closure_1 < 0) {
    return null;
  } else {
    let sum = closure_1;
    if (closure_1 >= 0) {
      if (sum < arr.length) {
        while (!areTypesInSameSection(arr[sum].channel.type, type)) {
          sum = sum + arg0;
        }
        return arr[sum];
      }
    }
    return null;
  }
}
function getChannelPosition(localChannel, substr, arg2) {
  let flag = arg2;
  const importDefault = localChannel;
  if (arg2 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let closure_2;
  if (null == localChannel) {
    return 0;
  } else {
    closure_2 = null;
    const found = substr.filter((arg0) => {
      let tmp2 = null != arg0;
      if (tmp2) {
        let tmp3 = flag;
        if (!flag) {
          tmp3 = callback(arg0.type, tmp);
        }
        tmp2 = tmp3;
      }
      return tmp2;
    });
    const found1 = found.find((arg0, arg1) => {
      let flag = null != arg0;
      if (flag) {
        flag = tmp === arg0.id;
      }
      if (flag) {
        let closure_2 = arg1;
        flag = true;
      }
      return flag;
    });
    return closure_2;
  }
}
function hoverSameType(id) {
  return { referenceId: id.id, parentId: id.parent_id };
}
const _module = require(dependencyMap[0]);
({ isGuildSelectableChannelType: closure_2, isGuildVocalChannelType: closure_3 } = _module);
const ChannelTypes = require(dependencyMap[1]).ChannelTypes;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("utils/ChannelSortingUtils.tsx");

export { areTypesInSameSection };
export const getDropData = function getDropData(localChannel, arg1, localChannel2, index, channelList) {
  if (null != localChannel) {
    if (null != localChannel2) {
      const GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY;
      if (localChannel.type === GUILD_CATEGORY) {
        if (index !== arg1) {
          if (index >= arg1) {
            let tmp32 = null;
            if (index > arg1) {
              const tmp35 = getChannelPosition(localChannel2, channelList, true);
              let num13 = 0;
              if (null != tmp35) {
                num13 = tmp35;
              }
              const tmp39 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
              let tmp40 = null;
              if (null != tmp39) {
                tmp40 = null;
                if (tmp39.channel.id !== localChannel.id) {
                  if (null == tmp36) {
                    let obj = { referenceId: tmp39.channel.id, parentId: null };
                    let tmp41 = obj;
                  } else {
                    tmp41 = null;
                  }
                  tmp40 = tmp41;
                }
              }
              tmp32 = tmp40;
            }
          }
        }
        tmp32 = hoverSameType(localChannel2);
      } else {
        if (areTypesInSameSection(localChannel.type, localChannel2.type)) {
          let tmp5 = hoverSameType(localChannel2);
        } else if (index < arg1) {
          if (localChannel2.type !== GUILD_CATEGORY) {
            const tmp50 = getChannelPosition(localChannel2, channelList, true);
            let num7 = 0;
            if (null != tmp50) {
              num7 = tmp50;
            }
            const tmp17 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
            if (null == channelList[num7 - 1]) {
              if (!localChannel.isGuildVocal()) {
                obj = {};
                let id = null;
                if (null != tmp17) {
                  id = tmp17.channel.id;
                }
                obj.referenceId = id;
                obj.parentId = null;
              }
            }
            let tmp20 = null;
            if (callback(localChannel.type)) {
              tmp20 = null;
              if (null != tmp17) {
                if (callback(tmp14.channel.type)) {
                  const obj1 = { referenceId: tmp17.channel.id, parentId: localChannel2.parent_id };
                  tmp20 = obj1;
                } else {
                  const channel5 = tmp14.channel;
                  tmp20 = null;
                }
              }
            }
            obj = tmp20;
          }
          const tmp23 = getChannelPosition(localChannel2, channelList, true);
          let num10 = 0;
          if (null != tmp23) {
            num10 = tmp23;
          }
          let parent_id2 = channelList[num10 - 1];
          let id2 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
          if (null == parent_id2) {
            let obj2 = { style: "o", showTopContainer: "o" };
          } else {
            obj2 = null;
            if (null != id2) {
              if (!areTypesInSameSection(parent_id2.channel.type, localChannel.type)) {
                if (!localChannel.isGuildVocal()) {
                  const channel6 = parent_id2.channel;
                  obj2 = null;
                  if (channel6.isCategory()) {
                    const obj3 = { referenceId: id2.channel.id, parentId: parent_id2.channel.id };
                    obj2 = obj3;
                  }
                }
              }
            }
            const obj4 = {};
            id2 = id2.channel.id;
            obj4.referenceId = id2;
            parent_id2 = parent_id2.channel.parent_id;
            obj4.parentId = parent_id2;
            obj2 = obj4;
          }
        } else if (localChannel2.type === GUILD_CATEGORY) {
          const tmp8 = getChannelPosition(localChannel2, channelList, true);
          let num4 = 0;
          if (null != tmp8) {
            num4 = tmp8;
          }
          let parent_id = channelList[num4 + 1];
          id = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          let tmp11 = null;
          if (null != id) {
            if (null == parent_id) {
              const obj5 = { referenceId: id.channel.id };
              id = localChannel2.id;
              obj5.parentId = id;
              tmp11 = obj5;
            } else if (!areTypesInSameSection(parent_id.channel.type, localChannel.type)) {
              if (!callback(localChannel.type)) {
                const channel4 = parent_id.channel;
                tmp11 = null;
                if (channel4.isCategory()) {
                  const obj6 = { referenceId: id.channel.id, parentId: localChannel2.id };
                  tmp11 = obj6;
                }
              } else {
                const channel3 = parent_id.channel;
              }
            }
            const obj7 = { referenceId: id.channel.id };
            parent_id = parent_id.channel.parent_id;
            obj7.parentId = parent_id;
            tmp11 = obj7;
          }
        } else {
          const tmp47 = getChannelPosition(localChannel2, channelList, true);
          let num = 0;
          if (null != tmp47) {
            num = tmp47;
          }
          const tmp4 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          tmp5 = null;
          if (null != tmp4) {
            if (!localChannel.isGuildVocal()) {
              let tmp6 = null;
              if (localChannel.isCategory()) {
                if (null == tmp) {
                  obj = { referenceId: tmp4.channel.id, parentId: null };
                  tmp6 = obj;
                } else {
                  const channel2 = tmp.channel;
                  tmp6 = null;
                }
              }
              tmp5 = tmp6;
            } else {
              if (null != tmp) {
                const channel7 = tmp.channel;
                if (!channel7.isCategory()) {
                  const channel = tmp.channel;
                  if (channel.isGuildVocal()) {
                    const obj8 = { referenceId: tmp4.channel.id, parentId: tmp.channel.parent_id };
                    tmp5 = obj8;
                  }
                }
              }
              const obj9 = { referenceId: tmp4.channel.id, parentId: localChannel2.parent_id };
              tmp5 = obj9;
            }
          }
        }
        return tmp5;
      }
    }
  }
  return null;
};
export const getDnDUpdates = function getDnDUpdates(localChannel, localChannel2, parentId, channels) {
  const importDefault = localChannel;
  const dependencyMap = parentId;
  function generateUpdates(substr) {
    if (null != closure_2) {
      if (null != closure_3) {
        let tmp5 = null != closure_2;
        if (tmp5) {
          tmp5 = null != tmp4;
        }
        if (tmp5) {
          tmp5 = null != substr[tmp3];
        }
        if (tmp5) {
          tmp5 = substr[tmp3].channel === substr;
        }
        if (tmp5) {
          tmp5 = null != substr[tmp4];
        }
        if (tmp5) {
          let obj = substr(arg2[2]);
          let moveItemFromToResult = obj.moveItemFromTo(substr, closure_2, closure_3);
        }
        obj = {
          oldOrdering: substr,
          newOrdering: moveItemFromToResult,
          idGetter(channel) {
                return channel.channel.id;
              },
          existingPositionGetter(channel) {
                return channel.channel.position;
              }
        };
        closure_4 = closure_4.concat(substr(arg2[2]).calculatePositionDeltas(obj));
        return moveItemFromToResult;
      }
    }
    moveItemFromToResult = [...substr];
  }
  let arr = [];
  let items = [];
  let _categories = channels._categories;
  if (localChannel.isCategory()) {
    const items1 = [];
    HermesBuiltin.arraySpread(_categories, 0);
    const substr = items1.slice(1);
    let callback = getChannelPosition(localChannel, substr);
    let closure_3 = getChannelPosition(localChannel2, substr);
    const updates = generateUpdates(substr);
    arr = updates.unshift(_categories[0]);
    items = updates;
  }
  if (callback(localChannel.type)) {
    let tmp10 = _categories;
    if (items.length > 0) {
      tmp10 = items;
    }
    const tmp9Result = importDefault(dependencyMap[3])(tmp10, channels, (channel) => callback(channel.channel.type));
    callback = getChannelPosition(localChannel, tmp9Result);
    closure_3 = getChannelPosition(localChannel2, tmp9Result);
    const updates1 = generateUpdates(tmp9Result);
    const tmp9 = importDefault(dependencyMap[3]);
  }
  if (localChannel.isGuildVocal()) {
    if (items.length > 0) {
      _categories = items;
    }
    const tmp16Result = importDefault(dependencyMap[3])(_categories, channels, (channel) => {
      channel = channel.channel;
      return channel.isGuildVocal();
    });
    callback = getChannelPosition(localChannel, tmp16Result);
    closure_3 = getChannelPosition(localChannel2, tmp16Result);
    const updates2 = generateUpdates(tmp16Result);
    const tmp16 = importDefault(dependencyMap[3]);
  }
  let tmp20 = localChannel.parent_id !== parentId;
  if (tmp20) {
    tmp20 = null == arr.find((id) => {
      let flag = id.id === id.id;
      if (flag) {
        id.parent_id = arg2;
        flag = true;
      }
      return flag;
    });
  }
  if (tmp20) {
    const obj = { id: localChannel.id, parent_id: parentId };
    arr = arr.push(obj);
  }
  return arr;
};
