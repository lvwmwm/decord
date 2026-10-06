// Module ID: 15778
// Function ID: 15779
// Name: ChannelSortingUtils
// Dependencies: [2055, 1086, 11803, 6534, 2]
// Exports: areTypesInSameSection, getDnDUpdates, getDropData

// Module 15778 (ChannelSortingUtils)
import Constants from "Constants" /* 1086 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6534 */;
import DragAndDropUtilsDefault from "DragAndDropUtils" /* 11803 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import size from "module_2" /* 2 */;

let concat, dependencyMap, importDefault;

let c2;
let c3;
function getFirstChannelOfType(arg0, arg1, arg2, arr) {
  let closure_0 = arg1;
  let c1 = -1;
  const found = arr.find((channel, index) => {
    let flag = channel.channel.id === closure_0;
    if (flag) {
      c1 = index;
      flag = true;
    }
    return flag;
  });
  if (c1 < 0) {
    return null;
  } else {
    let tmp12 = c1;
    if (c1 >= 0) {
      if (tmp12 < arr.length) {
        while (true) {
          let type = arr[tmp12].channel.type;
          let tmp4 = null != type;
          if (tmp4) {
            tmp4 = null != arg2;
          }
          if (tmp4) {
            let tmp6 = type === arg2;
            if (!tmp6) {
              let tmp7 = React2;
              let tmp8 = React2(type) && tmp7(arg2);
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let tmp9 = _false;
              let tmp10 = _false(type) && tmp9(arg2);
              tmp6 = tmp10;
            }
            tmp4 = tmp6;
          }
          if (tmp4) {
            break;
          } else {
            let sum = tmp12 + arg0;
            if (sum >= 0) {
              tmp12 = sum;
            }
          }
        }
        return tmp3;
      }
    }
    return null;
  }
}
({ isGuildSelectableChannelType: c2, isGuildVocalChannelType: c3 } = ChannelRecord);
let ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("utils/ChannelSortingUtils.tsx");

export const areTypesInSameSection = function areTypesInSameSection(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp2 = arg0 === arg1;
    if (!tmp2) {
      tmp2 = React2(arg0) && React2(arg1);
      React2(arg0) && React2(arg1);
    }
    if (!tmp2) {
      tmp2 = _false(arg0) && _false(arg1);
      _false(arg0) && _false(arg1);
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getDropData = function getDropData(localChannel, arg1, localChannel2, to, channelList) {
  let tmp48;
  if (null != localChannel) {
    if (null != localChannel2) {
      let tmp12;
      let c2;
      const GUILD_CATEGORY2 = ChannelTypes.GUILD_CATEGORY;
      if (localChannel.type === GUILD_CATEGORY2) {
        if (to !== arg1) {
          if (to < arg1) {
            tmp12 = tmp48;
          }
          tmp48 = null;
          if (to > arg1) {
            let closure_0 = localChannel2;
            let c1 = true;
            c2 = undefined;
            let num17 = 0;
            const GUILD_CATEGORY = tmp60.GUILD_CATEGORY;
            if (null != localChannel2) {
              c2 = null;
              const found = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = num10(type2) && num10(type);
                        num10(type2) && num10(type);
                      }
                      if (!tmp5) {
                        tmp5 = num11(type2) && num11(type);
                        num11(type2) && num11(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found1 = found.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num17 = c2;
            }
            if (num17 == null) {
              num17 = 0;
            }
            const tmp53 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
            let tmp54 = null;
            if (null != tmp53) {
              tmp54 = null;
              if (tmp53.channel.id !== localChannel.id) {
                let tmp55;
                if (null == channelList[num17 + 1]) {
                  tmp55 = { referenceId: tmp53.channel.id, parentId: null };
                  const obj2 = { referenceId: tmp53.channel.id, parentId: null };
                } else {
                  tmp55 = null;
                }
                tmp54 = tmp55;
              }
            }
            tmp48 = tmp54;
          }
        }
        const obj3 = { referenceId: null, parentId: null };
        ({ id: obj13.referenceId, parent_id: obj13.parentId } = localChannel2);
        tmp48 = obj3;
      } else {
        const type3 = localChannel.type;
        const type4 = localChannel2.type;
        let tmp = null != type3 && null != type4;
        if (tmp) {
          let tmp2 = type3 === type4;
          if (!tmp2) {
            tmp2 = c2(type3) && c2(type4);
            c2(type3) && c2(type4);
          }
          if (!tmp2) {
            tmp2 = closure_3(type3) && closure_3(type4);
            closure_3(type3) && closure_3(type4);
          }
          tmp = tmp2;
        }
        if (tmp) {
          const obj4 = { referenceId: null, parentId: null };
          ({ id: obj11.referenceId, parent_id: obj11.parentId } = localChannel2);
          tmp12 = obj4;
        } else if (to < arg1) {
          let obj8;
          if (localChannel2.type === GUILD_CATEGORY2) {
            let obj5;
            closure_0 = localChannel2;
            c1 = true;
            let num13 = 0;
            if (null != localChannel2) {
              c2 = null;
              const found2 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = num10(type2) && num10(type);
                        num10(type2) && num10(type);
                      }
                      if (!tmp5) {
                        tmp5 = num11(type2) && num11(type);
                        num11(type2) && num11(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found3 = found2.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num13 = c2;
            }
            if (num13 == null) {
              num13 = 0;
            }
            const tmp39 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
            if (null == channelList[num13 - 1]) {
              obj5 = { referenceId: null, parentId: null };
            } else {
              obj5 = null;
              if (null != tmp39) {
                const type = tmp36.channel.type;
                const type2 = localChannel.type;
                let tmp40 = null != type && null != type2;
                if (tmp40) {
                  let tmp41 = type === type2;
                  if (!tmp41) {
                    tmp41 = c2(type) && c2(type2);
                    c2(type) && c2(type2);
                  }
                  if (!tmp41) {
                    tmp41 = closure_3(type) && closure_3(type2);
                    closure_3(type) && closure_3(type2);
                  }
                  tmp40 = tmp41;
                }
                if (tmp40) {
                  obj5 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.parent_id };
                  const obj6 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.parent_id };
                } else {
                  const channel6 = tmp36.channel;
                  obj5 = null;
                  if (channel6.isCategory()) {
                    obj5 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.id };
                    const obj7 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.id };
                  }
                }
              }
            }
            obj8 = obj5;
          } else {
            closure_0 = localChannel2;
            c1 = true;
            let num9 = 0;
            if (null != localChannel2) {
              c2 = null;
              const found4 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = num10(type2) && num10(type);
                        num10(type2) && num10(type);
                      }
                      if (!tmp5) {
                        tmp5 = num11(type2) && num11(type);
                        num11(type2) && num11(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found5 = found4.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num9 = c2;
            }
            if (num9 == null) {
              num9 = 0;
            }
            const tmp31 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
            if (null == channelList[num9 - 1]) {
              if (!localChannel.isGuildVocal()) {
                let id = null;
                if (null != tmp31) {
                  id = tmp31.channel.id;
                }
                obj8 = { referenceId: id, parentId: null };
              }
            }
            let tmp34 = null;
            const tmp33 = c2;
            if (c2(localChannel.type)) {
              tmp34 = null;
              if (null != tmp31) {
                if (tmp33(channelList[num9 - 1].channel.type)) {
                  tmp34 = { referenceId: tmp31.channel.id, parentId: localChannel2.parent_id };
                  const obj9 = { referenceId: tmp31.channel.id, parentId: localChannel2.parent_id };
                } else {
                  const channel5 = tmp28.channel;
                  tmp34 = null;
                }
              }
            }
            obj8 = tmp34;
          }
          tmp12 = obj8;
        } else if (localChannel2.type === GUILD_CATEGORY2) {
          closure_0 = localChannel2;
          c1 = true;
          let num5 = 0;
          if (null != localChannel2) {
            c2 = null;
            const found6 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != id;
              if (tmp2) {
                let tmp3 = c1;
                if (!tmp3) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = num10(type2) && num10(type);
                      num10(type2) && num10(type);
                    }
                    if (!tmp5) {
                      tmp5 = num11(type2) && num11(type);
                      num11(type2) && num11(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found7 = found6.find((item, index) => {
              let flag = null != id && tmp === id.id;
              if (flag) {
                c2 = index;
                flag = true;
              }
              return flag;
            });
            num5 = c2;
          }
          if (num5 == null) {
            num5 = 0;
          }
          const tmp18 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          let tmp19 = null;
          if (null != tmp18) {
            if (null == channelList[num5 + 1]) {
              tmp19 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
              const obj10 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
            } else {
              const type5 = tmp15.channel.type;
              const type6 = localChannel.type;
              let tmp20 = null != type5 && null != type6;
              if (tmp20) {
                let tmp21 = type5 === type6;
                if (!tmp21) {
                  tmp21 = c2(type5) && c2(type6);
                  c2(type5) && c2(type6);
                }
                if (!tmp21) {
                  tmp21 = closure_3(type5) && closure_3(type6);
                  closure_3(type5) && closure_3(type6);
                }
                tmp20 = tmp21;
              }
              if (tmp20) {
                tmp19 = { referenceId: tmp18.channel.id, parentId: channelList[num5 + 1].channel.parent_id };
                const obj12 = { referenceId: tmp18.channel.id, parentId: channelList[num5 + 1].channel.parent_id };
              } else {
                if (c2(localChannel.type)) {
                  const channel3 = tmp15.channel;
                }
                const channel4 = tmp15.channel;
                tmp19 = null;
                if (channel4.isCategory()) {
                  tmp19 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
                  const obj26 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
                }
              }
            }
          }
          tmp12 = tmp19;
        } else {
          closure_0 = localChannel2;
          c1 = true;
          let num = 0;
          if (null != localChannel2) {
            c2 = null;
            const found8 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != id;
              if (tmp2) {
                let tmp3 = c1;
                if (!tmp3) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = num10(type2) && num10(type);
                      num10(type2) && num10(type);
                    }
                    if (!tmp5) {
                      tmp5 = num11(type2) && num11(type);
                      num11(type2) && num11(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found9 = found8.find((item, index) => {
              let flag = null != id && tmp === id.id;
              if (flag) {
                c2 = index;
                flag = true;
              }
              return flag;
            });
            num = c2;
          }
          if (num == null) {
            num = 0;
          }
          const tmp11 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          tmp12 = null;
          if (null != tmp11) {
            if (!localChannel.isGuildVocal()) {
              let tmp13 = null;
              if (localChannel.isCategory()) {
                if (null == channelList[num + 1]) {
                  tmp13 = { referenceId: tmp11.channel.id, parentId: null };
                  const obj = { referenceId: tmp11.channel.id, parentId: null };
                } else {
                  const channel2 = tmp8.channel;
                  tmp13 = null;
                }
              }
              tmp12 = tmp13;
            } else {
              if (null != channelList[num + 1]) {
                const channel7 = tmp8.channel;
                if (!channel7.isCategory()) {
                  const channel = tmp8.channel;
                  if (channel.isGuildVocal()) {
                    tmp12 = { referenceId: tmp11.channel.id, parentId: channelList[num + 1].channel.parent_id };
                    const obj27 = { referenceId: tmp11.channel.id, parentId: channelList[num + 1].channel.parent_id };
                  }
                }
              }
              tmp12 = { referenceId: tmp11.channel.id, parentId: localChannel2.parent_id };
              const obj28 = { referenceId: tmp11.channel.id, parentId: localChannel2.parent_id };
            }
          }
        }
      }
      return tmp12;
    }
  }
  return null;
};
export const getDnDUpdates = function getDnDUpdates(localChannel, localChannel2, parentId, channels) {
  let c2;
  let num10;
  let parent_id;
  importDefault = localChannel;
  dependencyMap = parentId;
  function generateUpdates(substr) {
    if (null != num10) {
      if (null != num11) {
        let moveItemFromToResult;
        let tmp4 = null != tmp;
        const tmp3 = localChannel;
        if (tmp4) {
          tmp4 = null != tmp2;
        }
        if (tmp4) {
          tmp4 = null != substr[tmp];
        }
        if (tmp4) {
          tmp4 = substr[tmp].channel === tmp3;
        }
        if (tmp4) {
          tmp4 = null != substr[tmp2];
        }
        if (tmp4) {
          const obj = DragAndDropUtilsDefault;
          moveItemFromToResult = obj.moveItemFromTo(substr, tmp, tmp2);
        }
        concat = concat.concat;
        const obj3 = {
          oldOrdering: substr,
          newOrdering: moveItemFromToResult,
          idGetter(channel) {
                return channel.channel.id;
              },
          existingPositionGetter(channel) {
                return channel.channel.position;
              }
        };
        const obj2 = DragAndDropUtilsDefault;
        concat = concat(obj2.calculatePositionDeltas(obj3));
        return moveItemFromToResult;
      }
    }
    moveItemFromToResult = [...substr];
  }
  ChannelTypes = [];
  let items = [];
  let _categories = channels._categories;
  if (localChannel.isCategory()) {
    const items1 = [];
    let tmp2 = items1;
    let tmp3 = _categories;
    HermesBuiltin.arraySpread(items1, _categories, 0);
    const substr = items1.slice(1);
    importDefault = localChannel;
    let flag = false;
    let c1 = false;
    c2 = undefined;
    let tmp5 = null;
    let num4 = 0;
    if (null != localChannel) {
      c2 = null;
      const found = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found1 = found.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num4 = c2;
    }
    num10 = num4;
    importDefault = localChannel2;
    c1 = false;
    c2 = undefined;
    let num5 = 0;
    if (null != localChannel2) {
      c2 = null;
      const found2 = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found3 = found2.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num5 = c2;
    }
    let num11 = num5;
    const updates = generateUpdates(substr);
    updates.unshift(_categories[0]);
    items = updates;
  }
  if (num10(localChannel.type)) {
    let tmp12 = _categories;
    const tmp11 = getFlattedChannelListDefault;
    if (items.length > 0) {
      tmp12 = items;
    }
    const tmp11Result = tmp11(tmp12, channels, (channel) => num10(channel.channel.type));
    importDefault = localChannel;
    c1 = false;
    c2 = undefined;
    let num7 = 0;
    if (null != localChannel) {
      c2 = null;
      const found4 = tmp11Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found5 = found4.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num7 = c2;
    }
    num10 = num7;
    importDefault = localChannel2;
    c1 = false;
    c2 = undefined;
    let num8 = 0;
    if (null != localChannel2) {
      c2 = null;
      const found6 = tmp11Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found7 = found6.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num8 = c2;
    }
    num11 = num8;
    const updates1 = generateUpdates(tmp11Result);
  }
  if (localChannel.isGuildVocal()) {
    const tmp19 = getFlattedChannelListDefault;
    if (items.length > 0) {
      _categories = items;
    }
    const tmp19Result = tmp19(_categories, channels, (channel) => {
      channel = channel.channel;
      return channel.isGuildVocal();
    });
    importDefault = localChannel;
    c1 = false;
    c2 = undefined;
    num10 = 0;
    if (null != localChannel) {
      c2 = null;
      const found8 = tmp19Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found9 = found8.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num10 = c2;
    }
    importDefault = localChannel2;
    c1 = false;
    c2 = undefined;
    num11 = 0;
    if (null != localChannel2) {
      c2 = null;
      const found10 = tmp19Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = num10(type2) && num10(type);
                num10(type2) && num10(type);
              }
              if (!tmp5) {
                tmp5 = num11(type2) && num11(type);
                num11(type2) && num11(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found11 = found10.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num11 = c2;
    }
    const updates2 = generateUpdates(tmp19Result);
  }
  const tmp24 = localChannel.parent_id !== parentId && null == ChannelTypes.find((id) => {
    let flag = id.id === localChannel.id;
    if (flag) {
      id.parent_id = parent_id;
      flag = true;
    }
    return flag;
  });
  if (tmp24) {
    let obj = { id: localChannel.id, parent_id: parentId };
    ChannelTypes.push(obj);
  }
  return ChannelTypes;
};
