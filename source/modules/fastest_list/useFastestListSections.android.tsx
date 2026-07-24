// Module ID: 9287
// Function ID: 72530
// Name: useFastestListSections
// Dependencies: [31, 5450, 9288, 9289, 2]
// Exports: default

// Module 9287 (useFastestListSections)
import result from "result";

const result = require("ITEM").fileFinishedImporting("modules/fastest_list/useFastestListSections.android.tsx");

export default function useFastestListSections(fastestListId) {
  fastestListId = fastestListId.fastestListId;
  const itemSize = fastestListId.itemSize;
  const keyExtractor = fastestListId.keyExtractor;
  let num = fastestListId.listFooterSize;
  if (num === undefined) {
    num = 0;
  }
  let num2 = fastestListId.listHeaderSize;
  if (num2 === undefined) {
    num2 = 0;
  }
  const sections = fastestListId.sections;
  let num3 = fastestListId.sectionHeaderSize;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = fastestListId.sectionFooterSize;
  if (num4 === undefined) {
    num4 = 0;
  }
  let c8;
  const tmp = fastestListId(itemSize[1])(() => {
    let c0 = 0;
    return {
      getId() {
        return "" + c0;
      },
      incrementId() {
        let closure_0 = tmp + 1;
        return +closure_0;
      }
    };
  });
  c8 = tmp;
  let items = [keyExtractor, itemSize, num, num2, num3, num4, fastestListId, tmp, sections];
  const memo = keyExtractor.useMemo(() => {
    const items = [];
    const items1 = [];
    if ("number" === typeof num) {
      let tmp3 = num;
    } else {
      tmp3 = num();
    }
    let tmp4;
    if (null != keyExtractor) {
      tmp4 = keyExtractor(fastestListId(itemSize[2]).LIST_FOOTER, 0, 0);
    }
    let str = "";
    if (null != tmp4) {
      str = tmp4;
    }
    if ("number" === typeof num2) {
      let tmp9 = num2;
    } else {
      tmp9 = num2();
    }
    let tmp10;
    if (null != keyExtractor) {
      tmp10 = keyExtractor(fastestListId(itemSize[2]).LIST_HEADER, 0, 0);
    }
    let str2 = "";
    if (null != tmp10) {
      str2 = tmp10;
    }
    const items2 = [];
    const items3 = [];
    const items4 = [];
    const items5 = [];
    if (null == keyExtractor) {
      let obj = { keys: [""] };
      items.push(obj);
      items2.push("");
      items4.push("");
    }
    if ("number" === typeof itemSize) {
      obj = {};
      const items6 = [itemSize];
      obj.sizes = items6;
      items1.push(obj);
    }
    if ("number" === typeof num3) {
      items3.push(num3);
    }
    if ("number" === typeof num4) {
      items5.push(num4);
    }
    if ("number" === typeof num4) {
      if (tmp14) {
        obj = { keysAreUniform: tmp16, listId: fastestListId, listFooterKey: str, listFooterSize: tmp3, listHeaderKey: str2, listHeaderSize: tmp9, sections, sectionsId: _undefined.getId(), sectionHeaderKeys: items2, sectionHeaderSizes: items3, sectionHeaderSizeIsUniform: tmp14, sectionFooterKeys: items4, sectionFooterSizes: items5, sectionFooterSizeIsUniform: tmp15, itemKeys: items, itemSizeIsUniform: tmp, itemSizes: items1 };
        return obj;
      }
    }
    let num5 = 0;
    if (0 < sections.length) {
      do {
        if (!tmp14) {
          let tmp27 = num3;
          let arr5 = items3.push(num3(num5));
        }
        if (!tmp15) {
          let tmp29 = num4;
          let arr6 = items5.push(num4(num5));
        }
        if (!tmp16) {
          let tmp31 = keyExtractor;
          let tmp32 = fastestListId;
          let tmp33 = itemSize;
          let tmp34 = keyExtractor(fastestListId(itemSize[2]).SECTION_HEADER, num5, 0);
          let str3 = "";
          if (null != tmp34) {
            str3 = tmp34;
          }
          let arr7 = items2.push(str3);
          let tmp36 = keyExtractor;
          let tmp37 = fastestListId;
          let tmp38 = itemSize;
          let tmp39 = keyExtractor(fastestListId(itemSize[2]).SECTION_FOOTER, num5, 0);
          let str4 = "";
          if (null != tmp39) {
            str4 = tmp39;
          }
          let arr8 = items4.push(str4);
          let tmp41 = tmp34;
          let tmp42 = tmp39;
        }
        if (!tmp) {
          let tmp44 = sections;
          let tmp45 = sections[num5];
          if (!tmp) {
            let obj1 = { sizes: [] };
            let arr9 = items1.push(obj1);
          }
          if (!tmp16) {
            let obj2 = { keys: [] };
            let arr10 = items.push(obj2);
          }
          let num6 = 0;
          let tmp48 = tmp26;
          let tmp49 = tmp45;
          let num7 = 0;
          let tmp43 = tmp26;
          if (0 < tmp45) {
            do {
              if (!tmp) {
                let sizes = items1[num5].sizes;
                let tmp50 = itemSize;
                let arr11 = sizes.push(itemSize(num5, num6));
              }
              if (!tmp16) {
                let keys = items[num5].keys;
                let tmp52 = keyExtractor;
                let tmp53 = fastestListId;
                let tmp54 = itemSize;
                let tmp55 = keyExtractor(fastestListId(itemSize[2]).ITEM, num5, num6);
                let str5 = "";
                if (null != tmp55) {
                  str5 = tmp55;
                }
                let arr12 = keys.push(str5);
                tmp48 = tmp55;
              }
              num6 = num6 + 1;
              let tmp57 = tmp45;
              tmp43 = tmp48;
              let tmp58 = num6;
            } while (num6 < tmp45);
          }
        } else {
          tmp43 = tmp26;
        }
        num5 = num5 + 1;
        let tmp59 = sections;
        tmp26 = tmp43;
      } while (num5 < sections.length);
    }
  }, items);
  let items1 = [tmp, memo];
  const effect = keyExtractor.useEffect(() => {
    _undefined.incrementId();
  }, items1);
  return fastestListId(itemSize[3])(memo);
};
