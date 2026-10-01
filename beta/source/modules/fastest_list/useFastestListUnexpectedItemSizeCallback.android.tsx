// Module ID: 6479
// Function ID: 6480
// Name: useFastestListUnexpectedItemSizeCallback
// Dependencies: [19, 6480, 2]
// Exports: default

// Module 6479 (useFastestListUnexpectedItemSizeCallback)
import FastestListLogger from "FastestListLogger" /* 6480 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let nativeEvent;

const result = size.fileFinishedImporting("modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx");

export default function useFastestListUnexpectedItemSizeCallback(arg0) {
  const ref = arg0;
  const items = [arg0];
  return react.useCallback((nativeEvent) => {
    let element;
    let props;
    let str;
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    const tmp = ref;
    if (nativeEvent.isSectionHeader) {
      const renderSectionHeader = current.renderSectionHeader;
      let renderSectionHeaderResult;
      if (renderSectionHeader != null) {
        renderSectionHeaderResult = renderSectionHeader(nativeEvent.section);
      }
      element = renderSectionHeaderResult;
    } else if (nativeEvent.isSectionFooter) {
      const renderSectionFooter = current.renderSectionFooter;
      let renderSectionFooterResult;
      if (renderSectionFooter != null) {
        renderSectionFooterResult = renderSectionFooter(nativeEvent.section);
      }
      element = renderSectionFooterResult;
    } else {
      element = current.renderItem(nativeEvent.section, nativeEvent.item);
    }
    if (element != null) {
      props = element.props;
    }
    let type;
    if (element != null) {
      type = element.type;
    }
    if (typeof type === "function") {
      let combined;
      if (type.name.length > 0) {
        str = type.name;
      }
      let joined;
      if (null == str) {
        const _Object = Object;
        const keys = Object.keys(props);
        joined = keys.join(",");
      }
      if (nativeEvent.isSectionHeader) {
        const _HermesInternal3 = HermesInternal;
        combined = "Section header at section " + nativeEvent.section + ".";
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
      const _HermesInternal4 = HermesInternal;
      const obj = { detailMessage: "Expected item size " + nativeEvent.sizeExpected + ", but got " + nativeEvent.size + ".", itemPosition: combined, itemName: str, itemProps: joined, listId: tmp.current.listId };
      if (str == null) {
        str = "Unknown component.";
      }
      const obj3 = FastestListLogger;
      obj3.logFastestListError("Expected item size mismatch.", obj);
    }
    let type1;
    if (type != null) {
      type1 = type.type;
    }
    if (typeof type1 === "function") {
      if (type1.name.length > 0) {
        str = type1.name;
      }
    }
  }, items);
};
