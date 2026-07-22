// Module ID: 4752
// Function ID: 41289
// Name: getItems
// Dependencies: []

// Module 4752 (getItems)
function getItems(all, uint8, offsets, sizes, arg4, arg5, arg6, uint16) {
  if (undefined === uint16) {
    return [];
  } else {
    let items = [];
    items = offsets.items;
    for (let num2 = 0; num2 < uint16; num2 = num2 + 1) {
      let obj = { extents: [] };
      let tmp = getItemId;
      obj.itemId = getItemId(all, items, uint8);
      let sum = items + sizes.item.itemId;
      if (1 === uint8) {
        let tmp3 = 15 & all.getUint16(sum);
      }
      obj.constructionMethod = tmp3;
      let sum1 = sum + sizes.item.constructionMethod;
      obj.dataReferenceIndex = all.getUint16(sum1);
      let sum2 = sum1 + sizes.item.dataReferenceIndex;
      let tmp6 = getVariableSizedValue;
      obj.baseOffset = getVariableSizedValue(all, sum2, sizes.item.baseOffset);
      let sum3 = sum2 + sizes.item.baseOffset;
      obj.extentCount = all.getUint16(sum3);
      let sum4 = sum3 + sizes.item.extentCount;
      let num = 0;
      items = sum4;
      if (0 < obj.extentCount) {
        do {
          obj = {};
          let tmp9 = closure_4;
          let tmp10 = all;
          let tmp11 = uint8;
          let tmp12 = sum4;
          let tmp13 = arg6;
          obj.extentIndex = closure_4(all, uint8, sum4, arg6);
          let sum5 = sum4 + sizes.item.extent.extentIndex;
          let tmp15 = closure_5;
          obj.extentOffset = closure_5(all, sum5, arg4);
          let sum6 = sum5 + sizes.item.extent.extentOffset;
          obj.extentLength = closure_5(all, sum6, arg5);
          sum4 = sum6 + sizes.item.extent.extentLength;
          let extents = obj.extents;
          let arr = extents.push(obj);
          num = num + 1;
          items = sum4;
          let extentCount = obj.extentCount;
        } while (num < extentCount);
      }
      arr = items.push(obj);
    }
    return items;
  }
}
function getItemId(getUint16, items, uint8) {
  if (uint8 < 2) {
    let uint16 = getUint16.getUint16(items);
  } else if (2 === uint8) {
    uint16 = getUint16.getUint32(items);
  }
  return uint16;
}
function getExtentIndex(getUint32, arg1, sum2, baseOffset) {
  if (1 === arg1) {
    if (baseOffset > 0) {
      return getVariableSizedValue(getUint32, sum2, baseOffset);
    }
  }
}
function getVariableSizedValue(getUint32, sum2, baseOffset) {
  if (4 === baseOffset) {
    let num3 = getUint32.getUint32(sum2);
  } else {
    num3 = 0;
    if (8 === baseOffset) {
      const _console = console;
      console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.");
      num3 = sum2(arg6[0]).get64BitValue(getUint32, sum2);
      const obj = sum2(arg6[0]);
    }
  }
  return num3;
}
arg5.parseItemLocationBox = function parseItemLocationBox(getUint8, uint8, arg2, length) {
  let offsets;
  let sizes;
  const sum = arg2 + 3;
  let obj = { item: obj };
  obj = { "Bool(false)": "GeoTiffDirectory", "Bool(false)": "GeoTiffDoubleParams", extent: {} };
  if (uint8 < 2) {
    obj.itemCount = 2;
    obj.item.itemId = 2;
  } else if (2 === uint8) {
    obj.itemCount = 4;
    obj.item.itemId = 4;
  }
  if (1 === uint8) {
    let num2 = 2;
  } else {
    num2 = 0;
  }
  obj.item.constructionMethod = num2;
  obj = { offsetSize: sum, lengthSize: sum, baseOffsetSize: sum1, indexSize: sum1, itemCount: sum + 2, items: obj.itemCount + obj.itemCount, item: { itemId: 0 } };
  const sum1 = sum + 1;
  obj.item.constructionMethod = obj.item.itemId + obj.item.itemId;
  obj.item.dataReferenceIndex = obj.item.constructionMethod + obj.item.constructionMethod;
  ({ offsets, sizes } = { offsets: obj, sizes: obj });
  const tmp4 = getUint8.getUint8(offsets.offsetSize) >> 4;
  sizes.item.extent.extentOffset = tmp4;
  const tmp5 = 15 & getUint8.getUint8(offsets.lengthSize);
  sizes.item.extent.extentLength = tmp5;
  sizes.item.baseOffset = getUint8.getUint8(offsets.baseOffsetSize) >> 4;
  if (1 === uint8) {
    const tmp7 = 15 & getUint8.getUint8(tmp6);
  }
  let num3 = 0;
  if (undefined !== tmp7) {
    num3 = tmp7;
  }
  sizes.item.extent.extentIndex = num3;
  const itemCount = offsets.itemCount;
  if (uint8 < 2) {
    let uint16 = getUint8.getUint16(itemCount);
  } else if (2 === uint8) {
    uint16 = getUint8.getUint32(itemCount);
  }
  const obj1 = { type: "iloc", items: getItems(getUint8, uint8, offsets, sizes, tmp4, tmp5, tmp7, uint16), length };
  return obj1;
};
