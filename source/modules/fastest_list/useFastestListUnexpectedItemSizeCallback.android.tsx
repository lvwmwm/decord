// Module ID: 9235
// Function ID: 72232
// Name: useFastestListUnexpectedItemSizeCallback
// Dependencies: []
// Exports: default

// Module 9235 (useFastestListUnexpectedItemSizeCallback)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx");

export default function useFastestListUnexpectedItemSizeCallback(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = nativeEvent.current;
    if (nativeEvent.isSectionHeader) {
      let renderSectionHeaderResult;
      if (null != current.renderSectionHeader) {
        renderSectionHeaderResult = current.renderSectionHeader(nativeEvent.section);
      }
      let tmp8;
      if (null != renderSectionHeaderResult) {
        tmp8 = renderSectionHeaderResult;
      }
      let element = tmp8;
    } else if (nativeEvent.isSectionFooter) {
      let renderSectionFooterResult;
      if (null != current.renderSectionFooter) {
        renderSectionFooterResult = current.renderSectionFooter(nativeEvent.section);
      }
      let tmp5;
      if (null != renderSectionFooterResult) {
        tmp5 = renderSectionFooterResult;
      }
      element = tmp5;
    } else {
      const renderItemResult = current.renderItem(nativeEvent.section, nativeEvent.item);
      if (null != renderItemResult) {
        element = renderItemResult;
      }
    }
    if (null != element) {
      const props = element.props;
    }
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("function" === typeof type) {
      if (type.name.length > 0) {
        let name = type.name;
      }
      let joined;
      if (null == name) {
        const _Object = Object;
        const keys = Object.keys(props);
        joined = keys.join(",");
      }
      if (nativeEvent.isSectionHeader) {
        const _HermesInternal3 = HermesInternal;
        let combined = "Section header at section " + nativeEvent.section + ".";
      } else {
        const section = nativeEvent.section;
        if (nativeEvent.isSectionFooter) {
          const _HermesInternal2 = HermesInternal;
          combined = "Section footer at section " + section + ".";
        } else {
          const _HermesInternal = HermesInternal;
          combined = "Item at section " + section + " and index " + nativeEvent.item + ".";
        }
      }
      const obj = {};
      const _HermesInternal4 = HermesInternal;
      obj.detailMessage = "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".";
      obj.itemPosition = combined;
      let str12 = "Unknown component.";
      if (null != name) {
        str12 = name;
      }
      obj.itemName = str12;
      obj.itemProps = joined;
      obj.listId = nativeEvent.current.listId;
      nativeEvent(closure_1[1]).logFastestListError("Expected item size mismatch.", obj);
    }
    let type1;
    if (null != type) {
      type1 = type.type;
    }
    if ("function" === typeof type1) {
      if (type1.name.length > 0) {
        name = type1.name;
      }
    }
  }, items);
};
