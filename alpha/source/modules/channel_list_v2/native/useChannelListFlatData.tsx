// Module ID: 18307
// Function ID: 18308
// Name: useChannelListFlatData
// Dependencies: [19, 7240, 2]
// Exports: default

// Module 18307 (useChannelListFlatData)
import FastList from "FastList" /* 7240 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let map;

let result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListFlatData.tsx");

export default function useChannelListFlatData(getItemSize) {
  getItemSize = getItemSize.getItemSize;
  const getRecyclerKey = getItemSize.getRecyclerKey;
  const getSectionFooterSize = getItemSize.getSectionFooterSize;
  const getSectionHeaderSize = getItemSize.getSectionHeaderSize;
  const headerSize = getItemSize.headerSize;
  const sections = getItemSize.sections;
  let items = [getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections];
  return getSectionFooterSize.useMemo(() => {
    let combined;
    let combined1;
    let combined2;
    const items = [];
    const items1 = [];
    const items2 = [];
    map = new Map();
    let tmp = headerSize;
    let num = 0;
    let tmp2 = headerSize;
    if (0 < sections.length) {
      do {
        let tmp4 = sections[num];
        let tmp6 = num;
        let sum1 = tmp;
        if (0 !== tmp4) {
          let tmp36 = require;
          let SECTION = FastList.FastListItemTypes.SECTION;
          let tmp48 = getSectionHeaderSize(num);
          let _HermesInternal5 = HermesInternal;
          let str13 = "";
          let str14 = ":";
          let str15 = ":";
          let result = map.set("" + SECTION + ":" + tmp6 + ":" + -1, items.length);
          let obj = { type: SECTION, section: num, item: -1, key: combined };
          let tmp37 = getRecyclerKey;
          let push2 = items.push;
          combined = getRecyclerKey(SECTION, num, undefined);
          if (combined == null) {
            let _HermesInternal = HermesInternal;
            let str = "";
            let str2 = ":";
            let str3 = ":";
            combined = "" + SECTION + ":" + tmp6 + ":" + -1;
          }
          let push2Result = push2(obj);
          let arr = items1.push(tmp);
          let arr2 = items2.push(tmp48);
          let sum = tmp + tmp48;
          let num3 = 0;
          let tmp15 = sum;
          if (0 < tmp4) {
            do {
              let tmp16 = require;
              let ITEM = FastList.FastListItemTypes.ITEM;
              let tmp19 = getItemSize(num, num3);
              let _HermesInternal2 = HermesInternal;
              let str4 = "";
              let str5 = ":";
              let str6 = ":";
              let result1 = map.set("" + ITEM + ":" + tmp6 + ":" + num3, items.length);
              let obj2 = { type: ITEM, section: num, item: num3, key: combined1 };
              let tmp24 = getRecyclerKey;
              let tmp27;
              let push = items.push;
              let tmp26 = num3;
              if (num3 >= 0) {
                tmp27 = num3;
              }
              combined1 = tmp24(ITEM, num, tmp27);
              if (combined1 == null) {
                let _HermesInternal3 = HermesInternal;
                let str7 = "";
                let str8 = ":";
                let str9 = ":";
                combined1 = "" + ITEM + ":" + tmp6 + ":" + tmp26;
              }
              let arr3 = push(obj2);
              let arr10 = items1.push(sum);
              let arr11 = items2.push(tmp19);
              sum = sum + tmp19;
              num3 = num3 + 1;
              tmp36 = tmp16;
              tmp37 = tmp24;
              tmp15 = sum;
            } while (num3 < tmp4);
          }
          let tmp39 = getSectionFooterSize(num);
          sum1 = tmp15;
          if (tmp39 > 0) {
            let SECTION_FOOTER = tmp36(7240).FastListItemTypes.SECTION_FOOTER;
            let _HermesInternal6 = HermesInternal;
            let str16 = "";
            let str17 = ":";
            let str18 = ":";
            let result2 = map.set("" + SECTION_FOOTER + ":" + tmp6 + ":" + -1, items.length);
            let obj3 = { type: SECTION_FOOTER, section: num, item: -1, key: combined2 };
            let push3 = items.push;
            combined2 = tmp37(SECTION_FOOTER, num, undefined);
            if (combined2 == null) {
              let _HermesInternal4 = HermesInternal;
              let str10 = "";
              let str11 = ":";
              let str12 = ":";
              combined2 = "" + SECTION_FOOTER + ":" + tmp6 + ":" + -1;
            }
            let push3Result = push3(obj3);
            let arr12 = items1.push(tmp15);
            let arr13 = items2.push(tmp39);
            sum1 = tmp15 + tmp39;
          }
        }
        num = num + 1;
        tmp = sum1;
        tmp2 = sum1;
      } while (num < sections.length);
    }
    return {
      listData: items,
      offsets: items1,
      sizes: items2,
      contentSize: tmp2,
      getIndex(arg0, arg1) {
        let combined;
        const get = map.get;
        if (null == arg1) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + getItemSize(getRecyclerKey[1]).FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + getItemSize(getRecyclerKey[1]).FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
        }
        return get(combined);
      }
    };
  }, items);
};
