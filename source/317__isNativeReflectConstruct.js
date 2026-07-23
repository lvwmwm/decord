// Module ID: 317
// Function ID: 4829
// Name: _isNativeReflectConstruct
// Dependencies: [57, 29, 6, 7, 15, 17, 18, 31, 33, 44, 304, 305]

// Module 317 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import _inherits from "_inherits";
import closure_7 from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_10 from "_inherits";
import result from "result";
import jsxProd from "jsxProd";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function ItemWithSeparator(leadingItem) {
  let closure_3;
  let _objectWithoutProperties;
  let closure_7;
  let index;
  let inverted;
  let item;
  let section;
  let setSelfHighlightCallback;
  let setSelfUpdatePropsCallback;
  const LeadingSeparatorComponent = leadingItem.LeadingSeparatorComponent;
  const SeparatorComponent = leadingItem.SeparatorComponent;
  const cellKey = leadingItem.cellKey;
  ({ prevCellKey: closure_3, setSelfHighlightCallback } = leadingItem);
  ({ updateHighlightFor: _objectWithoutProperties, setSelfUpdatePropsCallback } = leadingItem);
  ({ updatePropsFor: closure_7, inverted } = leadingItem);
  ({ item, index, section } = leadingItem);
  let tmp = setSelfHighlightCallback(first1(false), 2);
  let _possibleConstructorReturn = tmp[1];
  const tmp2 = setSelfHighlightCallback(first1(false), 2);
  let _getPrototypeOf = tmp2[1];
  let obj = { leadingItem: leadingItem.leadingItem, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.item, trailingSection: leadingItem.trailingSection };
  const tmp3 = setSelfHighlightCallback(first1(obj), 2);
  const first = tmp3[0];
  const callback3 = tmp3[1];
  obj = { leadingItem: leadingItem.item, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.trailingItem, trailingSection: leadingItem.trailingSection };
  const tmp5 = setSelfHighlightCallback(first1(obj), 2);
  first1 = tmp5[0];
  const callback4 = tmp7;
  const items = [cellKey, setSelfHighlightCallback, tmp5[1], setSelfUpdatePropsCallback];
  callback3(() => {
    setSelfHighlightCallback(cellKey, _getPrototypeOf);
    setSelfUpdatePropsCallback(cellKey, closure_13);
    return () => {
      outer1_6(outer1_2, null);
      outer1_4(outer1_2, null);
    };
  }, items);
  obj = {
    highlight() {
      callback3(true);
      callback4(true);
      if (null != closure_3) {
        callback(closure_3, true);
      }
    },
    unhighlight() {
      callback3(false);
      callback4(false);
      if (null != closure_3) {
        callback(closure_3, false);
      }
    },
    updateProps(arg0, arg1) {
      if ("leading" === arg0) {
        if (null != LeadingSeparatorComponent) {
          const _Object3 = Object;
          callback5(Object.assign({}, first, arg1));
        } else if (null != closure_3) {
          const _Object2 = Object;
          callback2(closure_3, Object.assign({}, first, arg1));
        }
      } else {
        let tmp = "trailing" === arg0;
        if (tmp) {
          tmp = null != SeparatorComponent;
        }
        if (tmp) {
          const _Object = Object;
          tmp7 = tmp7(Object.assign({}, first1, arg1));
        }
      }
    }
  };
  let tmp10 = null != LeadingSeparatorComponent;
  if (tmp10) {
    let _Object = Object;
    const obj1 = { highlighted: tmp[0] };
    tmp10 = callback4(LeadingSeparatorComponent, Object.assign(obj1, first));
  }
  let tmp13 = null != SeparatorComponent;
  if (tmp13) {
    let _Object2 = Object;
    const obj2 = { highlighted: tmp2[0] };
    tmp13 = callback4(SeparatorComponent, Object.assign(obj2, first1));
  }
  let tmp16 = tmp10;
  if (!tmp10) {
    tmp16 = tmp13;
  }
  const obj3 = {};
  let tmp19 = null;
  if (tmp16) {
    let tmp20 = tmp13;
    if (false === inverted) {
      tmp20 = tmp10;
    }
    tmp19 = tmp20;
  }
  const items1 = [tmp19, leadingItem.renderItem({ item, index, section, separators: obj }), ];
  let tmp21 = null;
  if (tmp16) {
    if (false === inverted) {
      tmp10 = tmp13;
    }
    tmp21 = tmp10;
  }
  items1[2] = tmp21;
  obj3.children = items1;
  return closure_15(closure_14, obj3);
}
let closure_3 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
({ useEffect: closure_11, useState: closure_12 } = result);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);

export default ((PureComponent) => {
  class VirtualizedSectionList {
    constructor() {
      self = this;
      tmp = outer1_6(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_9(apply);
      tmp3 = outer1_8;
      if (outer1_16()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_9;
        constructResult = Reflect.construct(obj, combined, outer1_9(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result._keyExtractor = (arg0, index) => {
        const _subExtractorResult = tmp3Result._subExtractor(index);
        let key = _subExtractorResult;
        if (_subExtractorResult) {
          key = _subExtractorResult.key;
        }
        if (!key) {
          const _String = String;
          key = String(index);
        }
        return key;
      };
      tmp3Result._convertViewable = (index) => {
        outer2_1(outer2_2[9])(null != index.index, "Received a broken ViewToken");
        const _subExtractorResult = tmp3Result._subExtractor(index.index);
        if (_subExtractorResult) {
          const keyExtractor = _subExtractorResult.section.keyExtractor;
          let keyExtractor2 = tmp3Result.props.keyExtractor;
          if (!keyExtractor2) {
            keyExtractor2 = VirtualizedSectionList(outer2_2[10]).keyExtractor;
          }
          if (null != keyExtractor) {
            let keyExtractorResult = keyExtractor(index.item, _subExtractorResult.index);
          } else {
            index = _subExtractorResult.index;
            let num2 = 0;
            if (null != index) {
              num2 = index;
            }
            keyExtractorResult = keyExtractor2(index.item, num2);
          }
          const _Object = Object;
          const obj = { index: _subExtractorResult.index, key: keyExtractorResult, section: _subExtractorResult.section };
          return Object.assign({}, index, obj);
        } else {
          return null;
        }
      };
      tmp3Result._onViewableItemsChanged = (arg0) => {
        let changed;
        let viewableItems;
        ({ viewableItems, changed } = arg0);
        const onViewableItemsChanged = tmp3Result.props.onViewableItemsChanged;
        if (null != onViewableItemsChanged) {
          const obj = {};
          const mapped = viewableItems.map(tmp3Result._convertViewable, tmp3Result);
          const _Boolean = Boolean;
          obj.viewableItems = mapped.filter(Boolean);
          const mapped1 = changed.map(tmp3Result._convertViewable, tmp3Result);
          const _Boolean2 = Boolean;
          obj.changed = mapped1.filter(Boolean);
          const result = onViewableItemsChanged(obj);
        }
      };
      tmp3Result._renderItem = (arg0) => {
        let closure_0 = arg0;
        return (index) => {
          index = index.index;
          const _subExtractorResult = closure_0._subExtractor(index);
          if (_subExtractorResult) {
            const index2 = _subExtractorResult.index;
            if (null == index2) {
              const section = _subExtractorResult.section;
              if (true === _subExtractorResult.header) {
                const renderSectionHeader = closure_0.props.renderSectionHeader;
                let renderSectionHeaderResult = null;
                if (renderSectionHeader) {
                  let obj = { section };
                  renderSectionHeaderResult = renderSectionHeader(obj);
                }
                return renderSectionHeaderResult;
              } else {
                const renderSectionFooter = closure_0.props.renderSectionFooter;
                let renderSectionFooterResult = null;
                if (renderSectionFooter) {
                  obj = { section };
                  renderSectionFooterResult = renderSectionFooter(obj);
                }
                return renderSectionFooterResult;
              }
            } else {
              let renderItem = _subExtractorResult.section.renderItem;
              if (!renderItem) {
                renderItem = closure_0.props.renderItem;
              }
              const result = closure_0._getSeparatorComponent(index, _subExtractorResult, closure_0);
              outer3_1(outer3_2[9])(renderItem, "no renderItem!");
              obj = { SeparatorComponent: result };
              let prop;
              if (0 === index2) {
                prop = closure_0.props.SectionSeparatorComponent;
              }
              obj.LeadingSeparatorComponent = prop;
              obj.cellKey = _subExtractorResult.key;
              obj.index = index2;
              obj.item = index.item;
              ({ leadingItem: obj.leadingItem, leadingSection: obj.leadingSection } = _subExtractorResult);
              obj.prevCellKey = closure_0._subExtractor(index - 1) || {}.key;
              obj.setSelfHighlightCallback = closure_0._setUpdateHighlightFor;
              obj.setSelfUpdatePropsCallback = closure_0._setUpdatePropsFor;
              obj.updateHighlightFor = closure_0._updateHighlightFor;
              obj.updatePropsFor = closure_0._updatePropsFor;
              obj.renderItem = renderItem;
              ({ section: obj.section, trailingItem: obj.trailingItem, trailingSection: obj.trailingSection } = _subExtractorResult);
              obj.inverted = closure_0.props.inverted;
              return outer3_13(outer3_17, obj);
            }
          } else {
            return null;
          }
        };
      };
      tmp3Result._updatePropsFor = (arg0, arg1) => {
        if (null != tmp3Result._updatePropsMap[arg0]) {
          tmp(arg1);
        }
      };
      tmp3Result._updateHighlightFor = (arg0, arg1) => {
        if (null != tmp3Result._updateHighlightMap[arg0]) {
          tmp(arg1);
        }
      };
      tmp3Result._setUpdateHighlightFor = (arg0, arg1) => {
        if (null != arg1) {
          tmp3Result._updateHighlightMap[arg0] = arg1;
        } else {
          const _updateHighlightFor = tmp3Result._updateHighlightFor;
          delete tmp[tmp2];
        }
      };
      tmp3Result._setUpdatePropsFor = (arg0, arg1) => {
        if (null != arg1) {
          tmp3Result._updatePropsMap[arg0] = arg1;
        } else {
          const _updatePropsMap = tmp3Result._updatePropsMap;
          delete tmp[tmp2];
        }
      };
      tmp3Result._updateHighlightMap = {};
      tmp3Result._updatePropsMap = {};
      tmp3Result._captureRef = (_listRef) => {
        closure_0._listRef = _listRef;
      };
      return tmp3Result;
    }
  }
  callback2(VirtualizedSectionList, PureComponent);
  let obj = {
    key: "scrollToLocation",
    value: function scrollToLocation(itemIndex) {
      let sectionIndex;
      const self = this;
      itemIndex = itemIndex.itemIndex;
      let num = 0;
      let tmp = itemIndex;
      if (0 < itemIndex.sectionIndex) {
        do {
          let props = self.props;
          itemIndex = itemIndex + (props.getItemCount(self.props.sections[num].data) + 2);
          num = num + 1;
          tmp = itemIndex;
          sectionIndex = itemIndex.sectionIndex;
        } while (num < sectionIndex);
      }
      if (null != self._listRef) {
        const _listRef2 = self._listRef;
        let sum = tmp2;
        if (itemIndex.itemIndex > 0) {
          sum = tmp2;
          if (self.props.stickySectionHeadersEnabled) {
            sum = tmp2 + _listRef2.__getListMetrics().getCellMetricsApprox(tmp - itemIndex.itemIndex, _listRef2.props).length;
            const __getListMetricsResult = _listRef2.__getListMetrics();
          }
        }
        const _Object = Object;
        const obj = { viewOffset: sum, index: tmp };
        const _listRef = self._listRef;
        _listRef.scrollToIndex(Object.assign({}, itemIndex, obj));
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getListRef",
    value: function getListRef() {
      return this._listRef;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let ItemSeparatorComponent;
      let SectionSeparatorComponent;
      let renderItem;
      let renderSectionFooter;
      let renderSectionHeader;
      let sections;
      let stickySectionHeadersEnabled;
      let self = this;
      self = this;
      const props = this.props;
      ({ ItemSeparatorComponent, SectionSeparatorComponent, renderItem, renderSectionFooter, renderSectionHeader, sections, stickySectionHeadersEnabled } = props);
      let num = 0;
      if (this.props.ListHeaderComponent) {
        num = 1;
      }
      let items;
      if (self.props.stickySectionHeadersEnabled) {
        items = [];
      }
      let num2 = 0;
      let sum1 = 0;
      const iter = self.props.sections[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = items;
        let tmp4 = nextResult;
        if (null != arr2) {
          let tmp6 = items;
          let tmp7 = num2;
          let tmp8 = num;
          let arr = arr2.push(num2 + tmp2);
        }
        let tmp10 = num2;
        let sum = num2 + 2;
        let tmp12 = sum;
        sum1 = sum;
        let props2 = self.props;
        let tmp13 = nextResult;
        sum1 = sum + props2.getItemCount(tmp4.data);
        num2 = sum1;
        continue;
      }
      const tmp = outer1_5(props, outer1_3);
      tmp2 = num;
      const obj = {
        keyExtractor: self._keyExtractor,
        stickyHeaderIndices: items,
        renderItem: self._renderItem(num2),
        data: self.props.sections,
        getItem(arg0, arg1) {
          return self._getItem(self.props, arg0, arg1);
        },
        getItemCount() {
          return sum1;
        }
      };
      let prop;
      const _renderItemResult = self._renderItem(num2);
      const tmp16 = outer1_13;
      if (self.props.onViewableItemsChanged) {
        prop = self._onViewableItemsChanged;
      }
      obj.onViewableItemsChanged = prop;
      obj.ref = self._captureRef;
      return tmp16(outer1_1(outer1_2[11]), Object.assign({}, tmp, obj));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_getItem",
    value: function _getItem(props, arg1, arg2) {
      if (arg1) {
        let diff = arg2 - 1;
        let num2 = 0;
        if (0 < arg1.length) {
          const data = tmp4.data;
          const itemCount = props.getItemCount(data);
          while (-1 !== diff) {
            if (diff === itemCount) {
              break;
            } else if (diff < itemCount) {
              return props.getItem(data, diff);
            } else {
              diff = diff - (itemCount + 2);
              num2 = num2 + 1;
            }
          }
          return arg1[num2];
        }
        return null;
      } else {
        return null;
      }
    }
  };
  items[4] = {
    key: "_subExtractor",
    value: function _subExtractor(index) {
      let data;
      let diff;
      let getItem;
      let getItemCount;
      let key;
      let sections;
      let diff1 = index;
      ({ getItem, getItemCount, sections } = this.props);
      let num = 0;
      if (0 < sections.length) {
        while (true) {
          ({ data, key } = sections[num]);
          if (!key) {
            let _String = String;
            key = String(num);
          }
          diff = diff1 - 1;
          if (diff < getItemCount(data) + 1) {
            break;
          } else {
            diff1 = diff - (getItemCount(data) + 1);
            num = num + 1;
          }
        }
        if (-1 === diff) {
          let obj = { section: tmp3, key: `${key}:header`, index: null, header: true, trailingSection: sections[num + 1] };
        } else if (diff === getItemCount(data)) {
          obj = { section: tmp3, key: `${key}:footer`, index: null, header: false, trailingSection: sections[num + 1] };
        } else {
          obj = { section: tmp3 };
          let keyExtractor = tmp3.keyExtractor;
          const text = `${key}:`;
          if (!keyExtractor) {
            keyExtractor = tmp2;
          }
          if (!keyExtractor) {
            keyExtractor = VirtualizedSectionList(outer1_2[10]).keyExtractor;
          }
          obj.key = text + keyExtractor(getItem(data, diff), diff);
          obj.index = diff;
          obj.leadingItem = getItem(data, diff - 1);
          obj.leadingSection = sections[num - 1];
          obj.trailingItem = getItem(data, diff + 1);
          obj.trailingSection = sections[num + 1];
        }
        return obj;
      }
    }
  };
  items[5] = {
    key: "_getSeparatorComponent",
    value: function _getSeparatorComponent(index, _subExtractorResult, closure_0) {
      const self = this;
      if (!_subExtractorResult) {
        _subExtractorResult = self._subExtractor(index);
      }
      if (_subExtractorResult) {
        let SectionSeparatorComponent = self.props.SectionSeparatorComponent;
        const props = self.props;
        const diff = closure_0 - 1;
        const tmp6 = _subExtractorResult.index === props.getItemCount(_subExtractorResult.section.data) - 1;
        if (!SectionSeparatorComponent) {
          let tmp7 = null;
          if (tmp3) {
            tmp7 = null;
            if (!tmp6) {
              tmp7 = null;
              if (index !== diff) {
                tmp7 = tmp3;
              }
            }
          }
          SectionSeparatorComponent = tmp7;
        }
        return SectionSeparatorComponent;
      } else {
        return null;
      }
    }
  };
  return callback(VirtualizedSectionList, items);
})(require("result").PureComponent);
