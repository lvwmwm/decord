// Module ID: 4790
// Function ID: 41655
// Name: getImageNumberValue
// Dependencies: [4750, 4765, 4766, 4762, 4745]

// Module 4790 (getImageNumberValue)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function getImageNumberValue(value, arg1, typeSize, arg3) {
  if (arg3 === module(4750).LITTLE_ENDIAN) {
    let num7 = 0;
    let num8 = 0;
    let num9 = 0;
    if (0 < typeSize) {
      do {
        num7 = num7 + (value[arg1 + num8] << 8 * num8);
        num8 = num8 + 1;
        num9 = num7;
      } while (num8 < typeSize);
    }
    return num9;
  } else {
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    if (0 < typeSize) {
      do {
        num3 = num3 + (value[arg1 + num4] << 8 * (typeSize - 1 - num4));
        num4 = num4 + 1;
        num5 = num3;
      } while (num4 < typeSize);
    }
    return num5;
  }
}
function getImageFlags(arg0) {
  const items = [arg0 >> 31 & 1, arg0 >> 30 & 1, arg0 >> 29 & 1];
  const items1 = [];
  if (items[0]) {
    items1.push("Dependent Parent Image");
  }
  if (items[1]) {
    items1.push("Dependent Child Image");
  }
  if (items[2]) {
    items1.push("Representative Image");
  }
  const obj = { value: items, description: items1.join(", ") || "None" };
  return obj;
}
function getImageFormat(arg0) {
  const obj = { value: arg0 >> 24 & 7 };
  let str = "Unknown";
  if (0 === (arg0 >> 24 & 7)) {
    str = "JPEG";
  }
  obj.description = str;
  return obj;
}
function getImageType(arg0) {
  const value = 16777215 & arg0;
  const description = { 196608: "Baseline MP Primary Image", 65537: "Large Thumbnail (VGA equivalent)", 65538: "Large Thumbnail (Full HD equivalent)", 131073: "Multi-Frame Image (Panorama)", 131074: "Multi-Frame Image (Disparity)", 131075: "Multi-Frame Image (Multi-Angle)", 0: "Undefined" }[value] || "Unknown";
  return { value, description };
}
function getImageOffset(arg0, value) {
  let num = 0;
  if (0 !== arg0) {
    value = value.value;
    const result = arg0 * c3;
    num = getImageNumberValue(value, result + 8, module(4762).getTypeSize("LONG"), arg2) + arg3;
    const obj = module(4762);
  }
  return num;
}
let c3 = 16;
arg5.default = {
  read(getUint16, sum1) {
    const byteOrder = module(4750).getByteOrder(getUint16, sum1);
    let obj = module(4750);
    let obj2 = require(4765) /* readTag */;
    const ifd = obj2.readIfd(getUint16, require(4766) /* IFD_TYPE_0TH */.IFD_TYPE_MPF, sum1, require(4765) /* readTag */.get0thIfdOffset(getUint16, sum1, byteOrder), byteOrder, arg2);
    (function addMpfImages(buffer, sum1, ifd, byteOrder) {
      let rounded;
      if (ifd.MPEntry) {
        const items = [];
        const _Math = Math;
        let num = 0;
        if (0 < Math.ceil(ifd.MPEntry.value.length / outer1_3)) {
          do {
            items[num] = {};
            let tmp3 = outer1_4;
            let value = ifd.MPEntry.value;
            let tmp4 = outer1_3;
            let tmp6 = outer1_1;
            let tmp7 = outer1_2;
            let result = num * outer1_3;
            let obj = outer1_1(outer1_2[3]);
            let tmp8 = value;
            let tmp9 = byteOrder;
            let tmp10 = outer1_4(value, result, obj.getTypeSize("LONG"), byteOrder);
            let tmp11 = outer1_5;
            items[num].ImageFlags = outer1_5(tmp10);
            let tmp12 = outer1_6;
            items[num].ImageFormat = outer1_6(tmp10);
            let tmp13 = outer1_7;
            items[num].ImageType = outer1_7(tmp10);
            value = ifd.MPEntry.value;
            let tmp14 = outer1_3;
            let result1 = num * outer1_3;
            let obj1 = outer1_1(outer1_2[3]);
            let tmp16 = value;
            let tmp17 = byteOrder;
            let tmp18 = outer1_4(value, result1 + 4, obj1.getTypeSize("LONG"), byteOrder);
            obj = { value: tmp18, description: "" + tmp18 };
            items[num].ImageSize = obj;
            let tmp19 = outer1_8;
            let tmp20 = num;
            let tmp21 = byteOrder;
            let tmp22 = sum1;
            let tmp23 = outer1_8(num, ifd.MPEntry, byteOrder, sum1);
            obj = { value: tmp23, description: "" + tmp23 };
            items[num].ImageOffset = obj;
            value = ifd.MPEntry.value;
            let tmp24 = outer1_3;
            let result2 = num * outer1_3;
            let obj5 = outer1_1(outer1_2[3]);
            let tmp26 = value;
            let tmp27 = byteOrder;
            let tmp28 = outer1_4(value, result2 + 12, obj5.getTypeSize("SHORT"), byteOrder);
            obj1 = { value: tmp28, description: "" + tmp28 };
            items[num].DependentImage1EntryNumber = obj1;
            let value1 = ifd.MPEntry.value;
            let tmp29 = outer1_3;
            let result3 = num * outer1_3;
            let obj7 = outer1_1(outer1_2[3]);
            let tmp31 = value1;
            let tmp32 = byteOrder;
            let tmp33 = outer1_4(value1, result3 + 14, obj7.getTypeSize("SHORT"), byteOrder);
            let obj2 = { value: tmp33, description: "" + tmp33 };
            items[num].DependentImage2EntryNumber = obj2;
            buffer = buffer.buffer;
            items[num].image = buffer.slice(tmp23, tmp23 + tmp18);
            let tmp34 = outer1_0;
            let obj9 = outer1_0(outer1_2[4]);
            let deferInitResult = obj9.deferInit(items[num], "base64", function() {
              return outer2_0(outer2_2[4]).getBase64Image(this.image);
            });
            num = num + 1;
            let _Math2 = Math;
            let tmp36 = outer1_3;
            rounded = Math.ceil(ifd.MPEntry.value.length / outer1_3);
          } while (num < rounded);
        }
        ifd.Images = items;
        return ifd;
      } else {
        return ifd;
      }
    })(getUint16, sum1, ifd, byteOrder);
    return ifd;
  }
};
